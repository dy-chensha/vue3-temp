import SvgIcon from './SvgIcon.vue'
const allGloabComponents = {
  SvgIcon
}
import { type App, } from 'vue';
export default{
  install(app:App){
    Reflect.ownKeys(allGloabComponents).forEach(key=>{
      app.component(key,allGloabComponents[key])
    })

  }
}