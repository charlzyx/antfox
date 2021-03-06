/* eslint-disable prettier/prettier */
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/antfox.js',
        format: 'cjs',
    }, {
        file: 'dist/antfox.esm.js',
        format: 'es',
    }],
    plugins: [commonjs(), resolve(), typescript(), visualizer()],
    // 指出应将哪些模块视为外部模块
    external: ['react', 'react-dom', 'antd'],
};