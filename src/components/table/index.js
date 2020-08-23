import table from './index.vue'
// 这里是重点
const ZxTable = {
    install: function(Vue){
        Vue.component('ZxTable',table)
    }
}
// 导出组件
export default ZxTable