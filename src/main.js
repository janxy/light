import "babel-polyfill"
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'


Vue.use(ElementUI, { size: 'small'});

 ///图表
import VCharts from 'v-charts'
Vue.use(VCharts)

 ///音乐
import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)

 ///数据请求
import {post} from './util/http'
Vue.prototype.$post=post;
 
///表格
import ZxTable from "./components/table/index.js"
Vue.use(ZxTable)

//无数据
import NoDatas from "./components/nodata/index.js"
Vue.use(NoDatas)


///弹框
import dialog from './util/dialog';
import ElDialog from './components/dialog/index';
Vue.use(ElDialog);
Vue.use(dialog)

///弹框drawer
import drawer from './util/drawer';
import ElDrawer from './components/drawer/index';
Vue.use(ElDrawer);
Vue.use(drawer)

//环形进度条
import RadialProgressBar from 'vue-radial-progress'
Vue.component("RadialProgressBar",RadialProgressBar);

///瀑布流
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

///弹框
import msg from './util/msg';
Vue.use(msg)

///工具类
import util from './util/util';
Vue.use(util)

//树类
import tree from './components/tree/tree';
import onlyTree from "./components/tree/onlyTree";
Vue.component('onlyTree', onlyTree);
Vue.component('tree',tree);

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'cfda6102558586fda978fe2504852c80',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

//socket通讯
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// Vue.use(new VueSocketio({
//   debug: false,
//   connection: socketio(socketIp), //options object is Optional
// })
// );
//高德地图
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 申请的高德key
    key: 'ab449b98188c0e8312fa351498d225ef'
});

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' //videoJs的样式
import 'vue-video-player/src/custom-theme.css' //vue-video-player的样式
//import 'videojs-flash'; //引入才能播放rtmp视屏
 import 'videojs-contrib-hls' //引入才能播放m3u8文件
Vue.use(VideoPlayer)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
