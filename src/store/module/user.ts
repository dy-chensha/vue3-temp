// 用户相关
import {defineStore} from 'pinia'
import {reqLogin} from '@/api/user'
import type { loginForm } from '@/api/user/type'
let useUserStore = defineStore('User',{
  state:()=>{
    return {
      token:localStorage.getItem('TOKEN')
    }
  },
  actions:{
    async userLogin(data:loginForm){
      console.log(data);
     let res = await reqLogin(data)
     if (res.code==200) {
      this.token=res.data.token
      localStorage.setItem('TOKEN',res.data.token)
      return 'ok'
     }else{
      return Promise.reject(new Error(res))
     }
    }
  },
  getters:{

  }
})
export default useUserStore