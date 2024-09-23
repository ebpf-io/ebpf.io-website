To add a new language option, please follow the steps below:

1. Open `config/languages.js` and add the new language details as follows:

```js
en: {
  name: 'English',
  shortName: 'Eng',
  code: 'en',
},
```

2. The `en` folder from `locales` should be duplicated and renamed to match the language code. Please translate all strings in these files.

3. Finally, navigate to the `static-pages/what-is-ebpf` directory and duplicate the `index.md` file. Rename your copy to include your language code, such as `index.fr-fr.md`. Translate the entire file. Please note that the page title is located in the meta block at the top of the file.

## Additional Instructions

- For URLs in strings, add the language code where necessary, like changing `/applications` to `/fr-fr/applications`.

- For strings containing tags like `<0>Subscribe</0> to bi-weekly eCHO News`, keep the tags unchanged as they indicate links or emphasized text.

- Do not translate strings named `icon`, `card`, or `image`.
