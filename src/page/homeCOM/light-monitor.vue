<template>
    <div class="home" v-loading="loading">

            <div class="map">
                <map-com ref="map"></map-com>
            </div>

            <div class="header">
                <div class="r">
                    <div class="year">{{getNowFormatDate()}}<br>{{getWeekDay()}}</div>
                    <div class="time">{{time}}</div>
                </div>
                <div class="c"><img src="~@/../static/header-yx.png"></div>
                <div class="l">
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item  style="color:#029bd6" v-for="item in city">{{item}}</el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
                
            </div>



            <div class="left">
                
                <div  style="width:480px; height:300px; margin-top:80px">
                    <l1-com ref="l1"></l1-com >
                </div>

                 <div  style="width:480px; height:320px; margin-top:20px">
                    <l2-com ref="l2"></l2-com >
                </div>

                <div  style="width:480px; height:320px; margin-top:20px">
                    <l3-com ref="l3"></l3-com >
                </div>
               

            </div>

            <div class="bottom">
                   <c1-com ref="c1"></c1-com >
            </div>


            <div class="right">

                <div  style="width:480px; height:200px; margin-top:80px">
                    <r1-com ref="r1"></r1-com >
                </div>

                 <div  style="width:480px; height:176px; margin-top:20px">
                    <r2-com ref="r2"></r2-com >
                </div>

                <div  style="width:480px; height:314px; margin-top:20px">
                    <r3-com ref="r3"></r3-com >
                </div>

                <div  style="width:480px; height:230px; margin-top:20px">
                    <r4-com ref="r4"></r4-com >
                </div>

            </div>




           
    </div>
</template>

<script>


import mapCom from "./light-monitor/map.vue" 

import l1Com from "./light-monitor/l1.vue" 
import l2Com from "./light-monitor/l2.vue" 
import l3Com from "./light-monitor/l3.vue" 

import c1Com from "./light-monitor/c1.vue" 

import r1Com from "./light-monitor/r1.vue" 
import r2Com from "./light-monitor/r2.vue" 
import r3Com from "./light-monitor/r3.vue" 
import r4Com from "./light-monitor/r4.vue" 

export default {
  components: {mapCom,l1Com,l2Com,l3Com,c1Com,r1Com,r2Com,r3Com,r4Com},
  data () {
    return {
        time:'',
        loading:false,
        city:[]
    }
  },
  mounted () {
      let that = this;
      that.loading = true;
      this.$post('mock/getDatazx',{})
        .then((response) => {
            //获取总数据分配给每个模块 
              response.forEach(function(val, index, arr){
                   that.$refs[val.ref].data = val.data;
              });
              that.loading = false;
      })
      this.timer();
  },
  methods: {
    timer() {
      return setInterval(()=>{
        this.time = this.getNowTime()
      },1000)
    }
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>


.left{
 width: 500px;
 height: 1080px;
 position: absolute;
 left: 0; 
 top: 0;
 /* background-color: #01067c; */
 background: linear-gradient(to right, rgba(1,6,124,1) 0%,  rgba(1,6,124,1) 70%, rgba(1,6,124,0) 100%);
 padding-left: 20px;
 padding-right: 20px;
 z-index: 1;
}

.right{
 width: 500px;
 height: 1080px;
 position: absolute;
 right: -20px; 
 top: 0;
 /* background-color: #01067c; */
 background: linear-gradient(to right, rgba(1,6,124,0) 0%,  rgba(1,6,124,1) 30%, rgba(1,6,124,1) 100%);
 padding-left: 20px;
 padding-right: 20px;
 z-index: 1;
}

.bottom{
 width: 1920px;
 height: 240px;
 position: absolute;
 right: 00; 
 bottom: 0;
 background: linear-gradient(to top, rgba(1,6,124,1) 0%,  rgba(1,6,124,1) 50%, rgba(1,6,124,0) 100%);
  z-index: 0; box-sizing: border-box; padding: 20px; padding-left:520px; padding-right:520px;
  
}

.bb{width: 142px; height: 58px;  position: absolute; right: 30px; top: 400px; cursor: pointer;} 
</style>