import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import styles from 'rollup-plugin-styles'
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from "rollup-plugin-terser";
import gzipPlugin from 'rollup-plugin-gzip'

export default [
    {
        manualChunks: {
            'vendor': ['preact', 'preact-custom-element']
        },
        input: 'src/test/FolderTree.tsx',
        output: {
            dir: 'dist',
            format: 'es',
            compact: true,
            sourcemap: true
        },
        plugins: [
            resolve(),
            styles({
                mode: ["inject", () => {}],
            }),
            babel({
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
                babelHelpers: 'bundled',
                // inputSourceMap: true
            }),
            gzipPlugin(),
            sourcemaps(),
        ]
    }
];
