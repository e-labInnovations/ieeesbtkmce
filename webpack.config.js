const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const path = require("path");

/**
 * @see https://stackoverflow.com/a/38132106/11409930
 * @see https://stackoverflow.com/a/45278943/11409930
 */

var indexConfig = Object.assign({}, defaultConfig, {
  name: "index",
  entry: {
    "scripts/main/index": "./src/scripts/main/index.js",
    "scripts/awards-post/index": "./src/scripts/awards-post/index.js",
    "scripts/societies-post/index": "./src/scripts/societies-post/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  plugins: [
    ...defaultConfig.plugins,
    /**
     * Generate an SVG sprite.
     *
     * @see https://github.com/cascornelissen/svg-spritemap-webpack-plugin
     */
    new SVGSpritemapPlugin("./src/icons/base-icons/*.svg", {
      output: {
        filename: "icons/base-icons.svg",
      },
      sprite: {
        prefix: "icon-",
        generate: {
          title: false,
        },
      },
    }),
  ],
});

module.exports = [defaultConfig, indexConfig];
