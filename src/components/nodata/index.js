import nodata from './index.vue'
// 这里是重点
const NoData = {
    install: function(Vue){
        Vue.component('NoData',nodata)
    }
}
// 导出组件
export default NoData