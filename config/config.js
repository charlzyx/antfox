/* eslint-disable prettier/prettier */
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
    title: 'antfox',
    mode: 'site',
    hash: true,
    outputPath: "build",
    base: 'antfox',
    publicPath: "./",
    resolve: {
        previewLangs: ['ts'],
    },
    alias: {
        '@@': path.resolve(__dirname, '../src')
    },
    navs: [null],
    // more config: https://d.umijs.org/config
});