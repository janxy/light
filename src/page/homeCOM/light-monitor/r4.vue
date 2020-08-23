<template>
    <div class="boxbg"  style="position: relative;">
        <div class="title"><span>故障告警信息</span></div>
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
        <i class="i4"></i>
      
        <div class="c flex">
               <el-carousel  style="width:100%; height:100%" indicator-position="none"  direction="vertical">
                <el-carousel-item v-for="(item,index) in this.arrayGroup(data.list, 2)" :key="index">
                    <div v-for="(item2,index2) in item" :key="index2" class="ww flex">
                        <div class="wwl flex center">
                            <img src="~@/../static/wr0.png" width="45" height="45" v-if="item2.state==0">
                            <img src="~@/../static/wr1.png" width="45" height="45" v-if="item2.state==1">
                            <img src="~@/../static/wr2.png" width="45" height="45" v-if="item2.state==2">
                        </div>
                        <div  class="wwr flex flex1 flexc" style=" justify-content: center; color:#00caff">
                            <div class="flex" style="justify-content: space-between;">
                                <span>{{ item2.time }}</span>
                                <span style="color:#65a6ff">[{{ item2.equipment }}]</span>
                            </div>
                            <div style="margin-top:7px;">
                                <span v-if="item2.content.length<=23">{{ item2.content}}</span>
                                <!-- <span>{{ item2.content}}</span> -->
                                <marquee direction="left" scrollamount="10" v-if="item2.content.length>23" :interval="5000">{{ item2.content }}</marquee>
                            </div>
                        </div>
                        <!-- <h3 class="small">{{ item2.time }}-{{ item2.equipment }}</h3> -->
                    </div>
                </el-carousel-item>
                </el-carousel>
        </div>

    </div>
</template>
<script>
    var that;
    export default {
        watch:{
            data(newValue,oldValue){
            }
        },
        data () {
            return {  
                data:{
                    list:[]
                }
            }
        },

        methods: {
    
        },
        mounted () {
            //let Array = [{a:1},{a:2},{a:3},{a:4},{a:5}];
            /// console.log(this.arrayGroup(Array, 2))
        },
    }
</script>

<style scoped>
.ww{width: 100%; height: 80px; background: rgba(0,6,255,0.3); margin-bottom: 10px;}

.wwl{width: 80px;min-width: 80px; max-width: 80px;height: 80px;}
.wwr{padding:10px; padding-left:0;  }
</style>

