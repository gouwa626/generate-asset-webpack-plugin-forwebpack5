基于generate-asset-webpack-plugin兼容webpack5+

Install
-------

```
npm install --save-dev generate-asset-webpack-plugin-forwebpack5
```

Usage
-----

```javascript
const GenerateAssetWebpackPluginForWebpack5 = require('generate-asset-webpack-plugin-forwebpack5');

var webpackConfig = {
    plugins: [
        new GenerateAssetWebpackPluginForWebpack5({
            filename: 'index.html',
            fn: (compilation, cb) => {
                cb(null, createHtml(compilation));
            },
            extraFiles: ['favicon.ico']
        })
    ]
    // other webpack config ...
}
```
