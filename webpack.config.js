const path = require('path');

module.exports = {
    entry: './src/test/FolderTree.tsx',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-typescript",
                                {
                                    "isTSX": true,
                                    "allExtensions": true
                                }
                            ],
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "esmodules": true
                                    },
                                    "useBuiltIns": "usage",
                                    "corejs": "3.8",
                                    "modules": false
                                }
                            ]
                        ],
                        "plugins": [
                            ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
                        ]
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
