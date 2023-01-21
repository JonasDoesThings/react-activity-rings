const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "webpackFinal": async (config) => {
    config.module.rules.find(
        rule => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/

    config.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        {
          loader: "style-loader",
          options: {
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: "css-loader",
          options: {
            modules: true
          },
        }
      ]
    });
    return config;
  },
}
