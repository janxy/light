import "babel-polyfill"
import Vue from 'vue';
import Vuex from 'vuex';
import vuexAlong from "vuex-along";



Vue.use(Vuex);


 
const state={
    token:''
}
 
const mutations={
    changeToken(state,data){
      state.token = data;
    },
}
 
export default new Vuex.Store({
	state,mutations,plugins: [
        vuexAlong({
          name: "light-vuex-along", // 设置保存的集合名字，避免同站点下的多项目数据冲突
          local: {
            list: [""],
            isFilter: true // 过滤模块" "数据， 将其他的存入 localStorage
          },
          session: { 
            list: [""] ,
            isFilter: true // 过滤模块" "数据， 将其他的存入 localStorage
          }
        })
      ]
})