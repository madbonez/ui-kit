import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import styles from 'rollup-plugin-styles'
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from "rollup-plugin-terser";
import gzipPlugin from 'rollup-plugin-gzip'
import typescript from '@rollup/plugin-typescript'

export default [
    {
        manualChunks: {
            'vendor': ['preact', 'preact-custom-element']
        },
        input: 'src/test/FolderTree.tsx',
        output: {
            dir: 'dist',
            format: 'es',
            sourcemap: true,
            inputSourceMap: true,
            plugins: [gzipPlugin()]
        },
        plugins: [
            terser(),
            resolve(),
            typescript({ sourceMap: true, inlineSources: true }),
            sourcemaps(),
            styles({
                sourceMap: true,
                mode: ["inject", () => {}],
            }),
        ]
    }
];
