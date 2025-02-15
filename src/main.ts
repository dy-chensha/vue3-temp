import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
import 'virtual:svg-icons-register';
import globalComponent from "@/components/index.ts"
app.use(globalComponent)
// 全局样式
import '@/assets/style/index.scss'
app.mount('#app');

