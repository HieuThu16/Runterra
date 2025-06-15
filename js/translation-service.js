// Translation Service using Google Translate API
class TranslationService {
  constructor() {
    this.cache = new Map();
    this.supportedLanguages = {
      vi: "Vietnamese",
      en: "English",
      zh: "Chinese",
    };

    // Cache for storing translations to avoid repeated API calls
    this.translationCache = JSON.parse(
      localStorage.getItem("translation_cache") || "{}"
    );
  }

  // Get cache key for storing translations
  getCacheKey(text, targetLang, sourceLang = "vi") {
    return `${sourceLang}-${targetLang}-${btoa(text).substring(0, 50)}`;
  }

  // Save cache to localStorage
  saveCache() {
    localStorage.setItem(
      "translation_cache",
      JSON.stringify(this.translationCache)
    );
  }

  // Clean text for translation (remove emojis and special characters)
  cleanTextForTranslation(text) {
    // Extract emojis and special characters
    const emojiRegex =
      /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
    const emojis = text.match(emojiRegex) || [];

    // Remove emojis and special symbols for translation
    const cleanText = text
      .replace(emojiRegex, "")
      .replace(
        /[🎮⚔️🃏🕳️👻⚜️🗡️🌸⚙️📚✨➕📥📤🔄📊📛🧬📅⚔️🌍🏛️👑💎💰📜🎯⭐💕⚡📖📝]/g,
        ""
      )
      .trim();

    return { cleanText, emojis, originalText: text };
  }

  // Restore emojis to translated text
  restoreEmojis(translatedText, originalData) {
    let result = translatedText;

    // Add back emojis at the beginning if they were there
    if (originalData.emojis.length > 0) {
      // Simple heuristic: if original had emojis at start, add them back
      if (
        originalData.originalText.match(
          /^[\u{1F600}-\u{1F64F}]|^[\u{1F300}-\u{1F5FF}]|^[\u{1F680}-\u{1F6FF}]|^[\u{2600}-\u{26FF}]|^[🎮⚔️🃏🕳️👻⚜️🗡️🌸⚙️📚✨➕📥📤🔄📊📛🧬📅⚔️🌍🏛️👑💎💰📜🎯⭐💕⚡📖📝]/u
        )
      ) {
        result = originalData.emojis[0] + " " + result;
      }
    }

    return result;
  }

  // Translate multiple texts in batch (more efficient)
  async translateBatch(texts, targetLang, sourceLang = "vi") {
    const results = [];
    const toTranslate = [];
    const textToIndex = new Map();

    // Check cache first and collect texts that need translation
    for (let i = 0; i < texts.length; i++) {
      const text = texts[i];
      if (!text || text.trim() === "") {
        results[i] = text;
        continue;
      }

      const cacheKey = this.getCacheKey(text, targetLang, sourceLang);
      if (this.translationCache[cacheKey]) {
        results[i] = this.translationCache[cacheKey];
      } else {
        results[i] = null; // Mark as needing translation
        toTranslate.push(text);
        textToIndex.set(text, i);
      }
    }

    // If all texts are cached, return immediately
    if (toTranslate.length === 0) {
      return results;
    }

    // Translate texts that aren't cached (with delay to respect rate limits)
    for (const text of toTranslate) {
      try {
        const translated = await this.translateText(
          text,
          targetLang,
          sourceLang
        );
        const index = textToIndex.get(text);
        results[index] = translated;

        // Small delay to avoid hitting rate limits
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.warn("Batch translation failed for text:", text, error);
        const index = textToIndex.get(text);
        results[index] = text; // Return original text on error
      }
    }

    return results;
  }

  // Translate using Google Translate API (Free tier through MyMemory)
  async translateText(text, targetLang, sourceLang = "vi") {
    if (!text || text.trim() === "") return text;

    // Check cache first
    const cacheKey = this.getCacheKey(text, targetLang, sourceLang);
    if (this.translationCache[cacheKey]) {
      return this.translationCache[cacheKey];
    }

    try {
      const { cleanText, emojis, originalText } =
        this.cleanTextForTranslation(text);

      // If no text to translate after cleaning, return original
      if (!cleanText || cleanText.trim() === "") {
        return text;
      }

      // Use MyMemory API (free translation service)
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          cleanText
        )}&langpair=${sourceLang}|${targetLang}`
      );

      const data = await response.json();

      if (data.responseStatus === 200 && data.responseData) {
        let translatedText = data.responseData.translatedText;

        // Restore emojis and formatting
        translatedText = this.restoreEmojis(translatedText, {
          cleanText,
          emojis,
          originalText,
        });

        // Cache the result
        this.translationCache[cacheKey] = translatedText;
        this.saveCache();

        return translatedText;
      }

      // Fallback: return original text if translation fails
      return text;
    } catch (error) {
      console.warn("Translation failed:", error);
      return text; // Return original text on error
    }
  }

  // Translate an object recursively (for champion data)
  async translateObject(obj, targetLang, sourceLang = "vi") {
    if (typeof obj === "string") {
      return await this.translateText(obj, targetLang, sourceLang);
    }

    if (Array.isArray(obj)) {
      const translated = [];
      for (const item of obj) {
        translated.push(
          await this.translateObject(item, targetLang, sourceLang)
        );
      }
      return translated;
    }

    if (obj && typeof obj === "object") {
      const translated = {};
      for (const [key, value] of Object.entries(obj)) {
        // Skip certain keys that shouldn't be translated
        if (["id", "icon", "region", "cost", "age", "weapon"].includes(key)) {
          translated[key] = value;
        } else {
          translated[key] = await this.translateObject(
            value,
            targetLang,
            sourceLang
          );
        }
      }
      return translated;
    }

    return obj;
  }
  // Translate champion data with all fields (optimized with batch translation)
  async translateChampion(champion, targetLang, sourceLang = "vi") {
    console.log(`Translating champion ${champion.name} to ${targetLang}`);

    const translated = { ...champion };

    // Collect all texts to translate
    const textsToTranslate = [];
    const fieldMap = [];

    // Basic fields
    if (champion.name) {
      textsToTranslate.push(champion.name);
      fieldMap.push({ field: "name", index: textsToTranslate.length - 1 });
    }
    if (champion.role) {
      textsToTranslate.push(champion.role);
      fieldMap.push({ field: "role", index: textsToTranslate.length - 1 });
    }
    if (champion.lore) {
      textsToTranslate.push(champion.lore);
      fieldMap.push({ field: "lore", index: textsToTranslate.length - 1 });
    }
    if (champion.fullName) {
      textsToTranslate.push(champion.fullName);
      fieldMap.push({ field: "fullName", index: textsToTranslate.length - 1 });
    }
    if (champion.species) {
      textsToTranslate.push(champion.species);
      fieldMap.push({ field: "species", index: textsToTranslate.length - 1 });
    }
    if (champion.title) {
      textsToTranslate.push(champion.title);
      fieldMap.push({ field: "title", index: textsToTranslate.length - 1 });
    }
    if (champion.affiliation) {
      textsToTranslate.push(champion.affiliation);
      fieldMap.push({
        field: "affiliation",
        index: textsToTranslate.length - 1,
      });
    }
    if (champion.status) {
      textsToTranslate.push(champion.status);
      fieldMap.push({ field: "status", index: textsToTranslate.length - 1 });
    }
    if (champion.origin) {
      textsToTranslate.push(champion.origin);
      fieldMap.push({ field: "origin", index: textsToTranslate.length - 1 });
    }
    if (champion.rarity) {
      textsToTranslate.push(champion.rarity);
      fieldMap.push({ field: "rarity", index: textsToTranslate.length - 1 });
    }
    if (champion.fullLore) {
      textsToTranslate.push(champion.fullLore);
      fieldMap.push({ field: "fullLore", index: textsToTranslate.length - 1 });
    }
    if (champion.gameplay) {
      textsToTranslate.push(champion.gameplay);
      fieldMap.push({ field: "gameplay", index: textsToTranslate.length - 1 });
    }
    if (champion.notes) {
      textsToTranslate.push(champion.notes);
      fieldMap.push({ field: "notes", index: textsToTranslate.length - 1 });
    }
    if (champion.trivia) {
      textsToTranslate.push(champion.trivia);
      fieldMap.push({ field: "trivia", index: textsToTranslate.length - 1 });
    }

    // Add skills texts
    const skillsMap = [];
    if (champion.skills && Array.isArray(champion.skills)) {
      champion.skills.forEach((skill, skillIndex) => {
        if (typeof skill === "string") {
          textsToTranslate.push(skill);
          skillsMap.push({
            type: "simple",
            skillIndex,
            textIndex: textsToTranslate.length - 1,
          });
        } else if (skill && typeof skill === "object") {
          if (skill.name) {
            textsToTranslate.push(skill.name);
            skillsMap.push({
              type: "object",
              skillIndex,
              field: "name",
              textIndex: textsToTranslate.length - 1,
            });
          }
          if (skill.description) {
            textsToTranslate.push(skill.description);
            skillsMap.push({
              type: "object",
              skillIndex,
              field: "description",
              textIndex: textsToTranslate.length - 1,
            });
          }
          if (skill.type) {
            textsToTranslate.push(skill.type);
            skillsMap.push({
              type: "object",
              skillIndex,
              field: "type",
              textIndex: textsToTranslate.length - 1,
            });
          }
        }
      });
    }

    // Add special features texts
    const featuresMap = [];
    if (champion.specialFeatures && Array.isArray(champion.specialFeatures)) {
      champion.specialFeatures.forEach((feature, featureIndex) => {
        textsToTranslate.push(feature);
        featuresMap.push({
          featureIndex,
          textIndex: textsToTranslate.length - 1,
        });
      });
    }

    // Add abilities texts
    const abilitiesMap = [];
    if (champion.abilities && Array.isArray(champion.abilities)) {
      champion.abilities.forEach((ability, abilityIndex) => {
        textsToTranslate.push(ability);
        abilitiesMap.push({
          abilityIndex,
          textIndex: textsToTranslate.length - 1,
        });
      });
    }

    // Add relationships texts
    const relationshipsMap = [];
    if (champion.relationships && Array.isArray(champion.relationships)) {
      champion.relationships.forEach((rel, relIndex) => {
        if (rel.type) {
          textsToTranslate.push(rel.type);
          relationshipsMap.push({
            relIndex,
            field: "type",
            textIndex: textsToTranslate.length - 1,
          });
        }
        if (rel.description) {
          textsToTranslate.push(rel.description);
          relationshipsMap.push({
            relIndex,
            field: "description",
            textIndex: textsToTranslate.length - 1,
          });
        }
      });
    }

    // Perform batch translation
    if (textsToTranslate.length > 0) {
      const translatedTexts = await this.translateBatch(
        textsToTranslate,
        targetLang,
        sourceLang
      );

      // Apply translations to basic fields
      fieldMap.forEach((mapping) => {
        translated[mapping.field] = translatedTexts[mapping.index];
      });

      // Apply translations to skills
      if (champion.skills) {
        translated.skills = champion.skills.map((skill) => ({ ...skill }));
        skillsMap.forEach((mapping) => {
          if (mapping.type === "simple") {
            translated.skills[mapping.skillIndex] =
              translatedTexts[mapping.textIndex];
          } else if (mapping.type === "object") {
            translated.skills[mapping.skillIndex][mapping.field] =
              translatedTexts[mapping.textIndex];
          }
        });
      }

      // Apply translations to special features
      if (champion.specialFeatures) {
        translated.specialFeatures = [];
        featuresMap.forEach((mapping) => {
          translated.specialFeatures[mapping.featureIndex] =
            translatedTexts[mapping.textIndex];
        });
      }

      // Apply translations to abilities
      if (champion.abilities) {
        translated.abilities = [];
        abilitiesMap.forEach((mapping) => {
          translated.abilities[mapping.abilityIndex] =
            translatedTexts[mapping.textIndex];
        });
      }

      // Apply translations to relationships
      if (champion.relationships) {
        translated.relationships = champion.relationships.map((rel) => ({
          ...rel,
        }));
        relationshipsMap.forEach((mapping) => {
          translated.relationships[mapping.relIndex][mapping.field] =
            translatedTexts[mapping.textIndex];
        });
      }
    }

    console.log(`Finished translating champion ${champion.name}`);
    return translated;
  }

  // Clear translation cache
  clearCache() {
    this.translationCache = {};
    localStorage.removeItem("translation_cache");
  }

  // Get cache statistics
  getCacheStats() {
    return {
      size: Object.keys(this.translationCache).length,
      memoryUsage: JSON.stringify(this.translationCache).length,
    };
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = TranslationService;
}
