const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
import Inspect from 'vite-plugin-inspect'
import path from 'path'

export default {
    plugins: [
        Inspect()
    ],
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
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
                lesson01: path.resolve(__dirname, './src/Lessons/01/lesson01.html'),
                lesson02: path.resolve(__dirname, './src/Lessons/02/lesson02.html'),
                lesson03: path.resolve(__dirname, './src/Lessons/03/lesson03.html'),
                lesson04: path.resolve(__dirname, './src/Lessons/04/lesson04.html'),
                lesson05: path.resolve(__dirname, './src/Lessons/05/lesson05.html'),
            }
        }
    }
}