# spinning-progress-indicator-eleement
A simple spinning loading web component based on macOS one.

📦 - Microbundle for exporting .mjs
🔎 - Uses Typescript for type checking
👻 - Shadow DOM to not mess with your elements and styles
⚖️ - less than ~900 bytes gzipped with stylese included 💅
🍦 - Three flavours black, grey and black. And two sizes.

## Installation

npm install @midudev/wc-spinning-progress

## Usage

```html
<spinning-progress></spinning-progress>
<spinning-progress size='large'></spinning-progress>

<spinning-progress color='black'></spinning-progress>
<spinning-progress color='black' size='large'></spinning-progress>

<spinning-progress color='white'></spinning-progress>
<spinning-progress color='white' size='large'></spinning-progress>
```

## What's next

- [ ] Use custom properties instead attributes
- [ ] Upgrade to latest microbundle and get everything working
- [ ] Move this to a monorepo with more @midudev/wc?

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
