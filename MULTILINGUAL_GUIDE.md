# 🌐 Runeterra Games Hub - Multi-Language System Guide

## Overview

The Runeterra Games Hub now supports **3 languages** with both static UI translations and dynamic content translation:

- **🇻🇳 Vietnamese (Tiếng Việt)** - Default language
- **🇺🇸 English** - Static + Auto-translated content
- **🇨🇳 Chinese (中文)** - Static + Auto-translated content

## Features

### 1. Static UI Translation

- All interface elements (buttons, labels, menus, etc.)
- Form labels and placeholders
- Error messages and confirmations
- Navigation elements

### 2. Automatic Content Translation

- Champion names and roles
- Champion lore and backstories
- Detailed skill descriptions
- Special features and abilities
- Relationship descriptions

### 3. Smart Caching System

- Translations are cached locally to improve performance
- Reduces API calls for repeated content
- Cache management with clear functionality
- Cache statistics display

### 4. Progress Tracking

- Visual progress indicators during translation
- Real-time translation status updates
- Batch translation optimization

## How to Use

### Switching Languages

1. **Click the language selector** in the top-right corner (shows current language with flag)
2. **Select your preferred language** from the dropdown menu
3. **Wait for translation** (if switching to English/Chinese from Vietnamese)
4. **View translated content** - all champions and UI will be in the selected language

### Language Persistence

- Your language choice is automatically saved
- The app will remember your preference on next visit
- Stored in browser's localStorage

### Cache Management

#### Viewing Cache Stats

- Check the cache statistics to see how many translations are stored
- Monitor memory usage of the translation cache

#### Clearing Cache

1. **Click the "🌐 Clear Cache" button** in the database controls
2. **Confirm the action** in the dialog box
3. **Cache will be cleared** - next translations will be fresh from the API

**Note:** Clearing cache will make translations slower the first time after clearing.

## Technical Details

### Translation Service

- **API Provider:** MyMemory Translation API (Free tier)
- **Supported Languages:** Vietnamese ↔ English ↔ Chinese
- **Rate Limiting:** Built-in delays to respect API limits
- **Batch Processing:** Optimized for translating multiple items

### Caching Strategy

- **Cache Key Format:** `source-target-content_hash`
- **Storage:** Browser localStorage
- **Persistence:** Survives browser sessions
- **Size Management:** Automatic cleanup on clear

### Performance Optimization

- **Batch Translation:** Multiple texts translated in single operations
- **Smart Caching:** Avoids re-translating the same content
- **Progress Indicators:** Shows translation status to users
- **Error Handling:** Graceful fallbacks when translation fails

## Language Files Structure

### Translation Keys Organization

```javascript
languages = {
  vi: {
    translations: {
      /* Vietnamese */
    },
  },
  en: {
    translations: {
      /* English */
    },
  },
  zh: {
    translations: {
      /* Chinese */
    },
  },
};
```

### Champion Data Translation

- **Basic Info:** name, role, title, species, etc.
- **Lore Content:** short lore, full lore, gameplay
- **Skills:** skill names, descriptions, types
- **Special Features:** unique abilities and traits
- **Relationships:** character connections and descriptions

## API Integration

### MyMemory API

- **Endpoint:** `https://api.mymemory.translated.net/get`
- **Free Tier:** 1000 requests/day
- **Response Format:** JSON with translated text
- **Error Handling:** Fallback to original text on failure

### Translation Process Flow

1. **User selects language**
2. **System checks cache** for existing translations
3. **API calls made** for new content (with rate limiting)
4. **Results cached** for future use
5. **UI updated** with translated content

## Troubleshooting

### Common Issues

1. **Translation Not Working**

   - Check internet connection
   - Verify API rate limits not exceeded
   - Clear cache and try again

2. **Slow Translation**

   - Normal on first use (building cache)
   - Large datasets take time to translate
   - Check progress indicator for status

3. **Missing Translations**
   - Some content may not translate perfectly
   - Special characters and emojis are preserved
   - Technical terms may remain in original language

### Developer Notes

#### Adding New Languages

1. Add language object to `languages` in `languages.js`
2. Update `supportedLanguages` in `TranslationService`
3. Add language option to HTML dropdown
4. Test translation flow

#### Extending Translation Coverage

1. Add new translation keys to language objects
2. Update `data-translate` attributes in HTML
3. Implement new content types in `translateChampion` method

## File Structure

```
js/
├── languages.js          # Language definitions and LanguageManager
├── translation-service.js # API integration and caching
├── app.js                # Main application with language integration
├── data.js               # Champion data (source content)
└── database.js           # Database operations
```

## Cache Statistics

The system provides detailed cache statistics:

- **Number of cached translations**
- **Memory usage in KB**
- **Cache hit/miss ratios**
- **Last translation timestamp**

## Best Practices

### For Users

1. **Choose your language early** to avoid waiting for translations
2. **Clear cache periodically** if you notice stale translations
3. **Be patient** during first-time translations of large datasets

### For Developers

1. **Test all language paths** thoroughly
2. **Monitor API usage** to stay within limits
3. **Implement proper error handling** for translation failures
4. **Cache aggressively** to improve user experience

## Future Enhancements

### Planned Features

- **More Languages:** Support for additional languages
- **Better Translation Quality:** Integration with premium translation APIs
- **Offline Mode:** Local translation capabilities
- **Custom Translations:** User-editable translations for specific content

### Performance Improvements

- **Preloading:** Translate popular content in background
- **Compression:** Compress cached translations to save space
- **Smart Updates:** Update only changed content

---

**Made with ❤️ for the Runeterra community**

_This multi-language system makes the Runeterra Games Hub accessible to players worldwide!_
