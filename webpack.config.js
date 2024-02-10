const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const path = require("path");

/**
 * @see https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config
 */

var indexConfig = Object.assign({}, defaultConfig, {
  name: "index",
  entry: {
    index: "./src/index.js",
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
