Package.describe({
  summary: "Write React Components for Meteor in Coffeescript",
  version: "0.0.1",
  name: "meteor-cjsx",
  git: "git@github.com:mirikle/meteor-cjsx.git"
});

Package.registerBuildPlugin({
  name: "compileCJSX",
  use: [
    'meteor-react'
  ],
  sources: [
    'compile-cjsx.js'
  ],
  npmDependencies: {"coffee-react-transform": "2.0.0", "coffee-script": "1.7.1", "source-map": "0.1.32"}
});
