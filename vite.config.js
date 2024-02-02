const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions:
        {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                lesson01: resolve(__dirname, 'src/lesson01/index.html')
            }
        }
    }
}