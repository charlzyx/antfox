/* eslint-disable prettier/prettier */
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
    title: 'foxantd',
    mode: 'site',
    hash: true,
    resolve: {
        previewLangs: ['ts'],
    },
    navs: [null],
    // more config: https://d.umijs.org/config
});