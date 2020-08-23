<template>
    <div class="boxbg"  style="position: relative;">
        
      
        <div class="c flex" style="top:10px;">
            <el-row :gutter="0" style="width:100%">
                <el-col :span="6" v-for="(item,index) in data.list" :key="index">
                    <div class="grid-content">
                        <div class="flex flex1 center" style="max-width:72px;">
                            <img :src="images[item.imgid]">
                        </div>
                        <div class="flex flex1   flexc" style="justify-content: center; padding-left:10px; font-size:20px;">
                            <span style="color:#fff;font-size:17px;">{{item.name}}</span>
                            <div style="color:#dad44c">
                                <span>{{item.content}}</span>
                                <span style="font-size:14px;    color: var(--color2); margin-left:5px;">总:{{item.total}}</span>
                            </div>
                            
                        </div>
                    </div>
                </el-col>
            </el-row>
     
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
                images:['~@/../static/icon1.png','~@/../static/icon2.png','~@/../static/icon3.png','~@/../static/icon4.png','~@/../static/icon5.png','~@/../static/icon6.png','~@/../static/icon7.png','~@/../static/icon8.png'],
                data:{
                    list:[
                      
                    ]
                },
            }
        },

        methods: {
    
        },
        mounted () {
        },
    }
</script>

<style scoped>
.grid-content{width: 195px; height: 78px;  background-image: url('~@/../static/bggb.png'); margin-top: 10px; margin-left:5px; display: flex; }
</style>

