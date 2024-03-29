const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remoteapp2",
    publicPath: "http://localhost:4003/",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      // library: { type: "var", name: "remoteapp2" },
      name: "remoteapp2",
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts',
      },


      shared: share({
        "@angular/core": { requiredVersion: 'auto' },
        "@angular/common": { requiredVersion: 'auto' },
        "@angular/router": { requiredVersion: 'auto' },
        "@angular/platform-browser": { requiredVersion: 'auto' },
        "@angular/platform-browser-dynamic": { requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
