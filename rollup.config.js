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


export default [
    {
        input: fs.readdirSync('./src/registry').map(fileName => `./src/registry/${fileName}`),
        manualChunks(id) {
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
                entryFileNames: '[name]-v1.min.js',
                sourcemap: true,
                inputSourceMap: true,
                plugins: [terser(), gzipPlugin()],
                freeze: false
            },
            {
                dir: 'dist/es6',
                format: 'es',
                entryFileNames: '[name]-v1.js',
                freeze: false
            }
        ],
        plugins: [
            resolve(),
            commonjs({
                            ignoreGlobal: true,
                            sourceMap: true,
                        }),
            typescript({ sourceMap: true, inlineSources: true }),
            sourcemaps(),
            sass({
                processor: css => postcss([autoprefixer])
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
            resolve(),
            commonjs({
                ignoreGlobal: true,
                sourceMap: true,
            }),
            terser(),
            typescript({ sourceMap: true, inlineSources: true }),
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
