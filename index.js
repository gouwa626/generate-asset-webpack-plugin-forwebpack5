const fs = require('fs');
const webpack = require('webpack');
const { RawSource } = webpack.sources;

class GenerateAssetWebpackPluginForWebpack5 {
  constructor(options) {
    this.filename = options.filename;
    this.fn = options.fn;
    this.files = options.extraFiles || [];
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      'GenerateAssetWebpackPluginForWebpack5',
      (compilation) => {
        compilation.hooks.additionalAssets.tapAsync(
          'GenerateAssetWebpackPluginForWebpack5',
          async (cb) => {
            this.fn(compilation, (err, body) => {
              if (err) {
                return cb(err);
              }
              compilation.emitAsset(this.filename, new RawSource(body));

              this.files.forEach((file) => {
                compilation.emitAsset(file, fs.readFileSync(file));
              });
            });
            cb();
          }
        );
      }
    );
  }
}

module.exports = GenerateAssetWebpackPluginForWebpack5;
