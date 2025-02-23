// 管理用户相关的请求
import request from "@/utils/request";
import type {loginForm}from "./type"
enum API {
  LOGIN_URL="/user/login",
  USERINFO_URL="/user/info"
}
// 暴露请求函数
// 登录接口
export const reqLogin = (data:loginForm)=>{
  return request.post(API.LOGIN_URL,data)
}