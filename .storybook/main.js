module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    webpackFinal: async (config, {configType}) => {
        // Make whatever fine-grained changes you need
        config.module.rules.push({
          test: /\.scss$/,
            // to-string-loader injects styles  directly into webcomponents shadow dom
          use: ['to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        });

        return config;
    },
}
