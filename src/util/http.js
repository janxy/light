
import axios from 'axios';
import { Message } from 'element-ui';
import router from '../router/index.js';
import store from '../vuex/store.js';

axios.defaults.baseURL = "https://getman.cn/"


// 跨域相关
axios.defaults.withCredentials = false;

// 请求超时时间
axios.defaults.timeout = 8000;

// post请求头
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {    
  Message({
    showClose: true,
    message: msg,
    type: 'error',
  });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
      path: '/login'
  });
}

/** 
 * 请求失败后的错误统一处理 
 */
const errorHandle = (data) => {
}


//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    config.params = {'token':store.state.token}
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res): Promise.reject(res),  
  error => {
    const { response } = error;
    if (response) {
        // 请求已发出，但是不在2xx的范围 
        return Promise.reject(response);
    } else {
        tip("服务器连接失败");
        console.log("http.js>服务器连接失败")
    }
  }
)


 
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
      })
    })
 }
 