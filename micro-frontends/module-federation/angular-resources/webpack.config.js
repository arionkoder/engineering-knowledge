const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  output: {
    uniqueName: "remoteapp1",
    publicPath: "http://localhost:4002/",
    scriptType: "text/javascript",
  },

  ...withModuleFederationPlugin({
    name: "remoteapp1",

    filename: "remoteEntry.js",

    exposes: {
      "./AngularKnowledgeModule":
        ".//src/app/angular-knowledge/angular-knowledge.module",
    },

    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      }),
    },
  }),
};
