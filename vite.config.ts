import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vite.dev/config/
// mock
import { viteMockServe } from 'vite-plugin-mock';
export default defineConfig(({command})=>{
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定 SVG 图标目录
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定 symbolId 格式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock', // 指定 mock 文件夹路径
        enable: command === 'serve', // 仅在开发环境启用 mock
        watchFiles: true, // 监视 mock 文件夹中的文件更改
        logger: true, // 在控制台显示请求日志
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/style/variable.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve("./src")
      }
    }
  }
})
