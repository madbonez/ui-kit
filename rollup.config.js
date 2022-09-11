import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import {terser} from "rollup-plugin-terser";
import gzipPlugin from 'rollup-plugin-gzip'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import fs from 'fs';
import tailwindcss from "tailwindcss";
import url from "@rollup/plugin-url";
import * as path from "path";

const packageJson = require('./package.json');


export default [
    {
        input: fs.readdirSync('./src/registry').map(fileName => {
            const location = `./src/registry/${fileName}`;
            if (fs.lstatSync(location).isDirectory()) {
                return fs.readdirSync(location).map(subFile => `./src/registry/${fileName}/${subFile}`)
            } else {
                return [location]
            }
        }).flat(),
        manualChunks(id) {
            if (id.includes('node_modules') && id.includes('preact-custom-element')) {
                return 'preact-custom-element';
            }
            if (id.includes('node_modules') && id.includes('preact/compat/')) {
                return 'preact-compat';
            }
            if (id.includes('node_modules') && id.includes('preact/hooks/')) {
                return 'preact-hooks';
            }
            if (id.includes('node_modules') && id.includes('preact')) {
                return 'preact';
            }

            if (id.includes('node_modules') && id.includes('highlight')) {
                return 'highlight';
            }

            if (id.includes('node_modules')) {
                return 'vendor';
            }
        },
        output: [
            {
                dir: 'dist/es6',
                format: 'es',
                entryFileNames: `[name]-${packageJson.version}.min.js`,
                sourcemap: true,
                inputSourceMap: true,
                plugins: [terser(), gzipPlugin()],
                freeze: false
            },
            {
                dir: 'dist/es6',
                format: 'es',
                entryFileNames: `[name]-${packageJson.version}.js`,
                freeze: false
            }
        ],
        plugins: [
            url({
                publicPath: '/images/',
                destDir: path.resolve(process.cwd(), 'dist/images')
            }),
            resolve(),
            commonjs({
                ignoreGlobal: true,
                sourceMap: true,
            }),
            typescript({sourceMap: true, inlineSources: true}),
            sourcemaps(),
            sass({
                processor: css => postcss([
                    tailwindcss,
                    autoprefixer
                ])
                    .process(css)
                    .then(result => {
                        return {
                            css: result.css,
                            styles: result.css
                        };
                    })
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/es5',
            format: 'iife',
            sourcemap: true,
            inputSourceMap: true
        },
        plugins: [
            url({
                publicPath: '/images/',
                destDir: path.resolve(process.cwd(), 'dist/images')
            }),
            resolve(),
            commonjs({
                ignoreGlobal: true,
                sourceMap: true,
            }),
            terser(),
            typescript({sourceMap: true, inlineSources: true}),
            babel({
                exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
                babelHelpers: 'bundled'
            }),
            sass({
                processor: css => postcss([autoprefixer])
                    .process(css)
                    .then(result => {
                        return {
                            css: result.css,
                            styles: result.css
                        };
                    })
            }),
            sourcemaps(),
            gzipPlugin()
        ]
    }
];
