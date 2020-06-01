/* eslint-disable prettier/prettier */
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';


export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/usefox.js',
        format: 'cjs',
    },
    plugins: [commonjs(), resolve(), typescript()],
    // 指出应将哪些模块视为外部模块
    external: ['react', 'react-dom', 'dumi'],
};