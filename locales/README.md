To add a new language option, follow these steps:

1. Open `config/languages.js` and add the new language details like this:

```js
en: {
  name: 'English',
  shortName: 'Eng',
  code: 'en',
},
```

2. Save an icon for the language in `src/icons/languages`, using the same name as the language code (`en.inline.svg` for English). This icon will be used for language selection in the header. Then, in `src/components/header/language-select/index.js`, import the icon and add it to the `langIcons` object, following the existing format.

3. Duplicate the en folder from locales, renaming it to match the language code. Translate all strings in these files.

## Additional Instructions

- For URLs in strings, add the language code where necessary, like changing `/applications` to `/fr-fr/applications`.

- For strings containing tags like `<0>Subscribe</0> to bi-weekly eCHO News`, keep the tags unchanged as they indicate links or emphasized text.

- Do not translate strings named `icon`, `card`, or `image`.
