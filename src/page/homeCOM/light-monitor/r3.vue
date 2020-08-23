<template>
    <div class="boxbg"  style="position: relative;">
        <div class="title"><span>安防监控情况</span></div>
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
        <i class="i4"></i>
      <div class="po"  v-if="show"><span style="padding-right:5px;">{{data.title}}</span></div>
        <div class="c flex ">
            
             <video-player  class="video-player vjs-custom-skin" style="width:100%; height:100%"
                ref="videoPlayer" 
                :playsinline="true" 
                :options="playerOptions"
                autoplay
                v-if="show"
              ></video-player>
        </div>

    </div>
</template>
<script>
    
    export default {
       
        watch:{
            data(newValue,oldValue){
                ///console.log(newValue.src)
                this.playerOptions.sources[0].src = newValue.src
                this.show = true
            }
        },
        data(){
        return {
            show:false,
            data:{title:''},
            title:"123",
            playerOptions:{
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: true, //如果true,浏览器准备好时开始回放。
            muted: true, // 默认情况下将会消除任何音频。
            loop: true, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
                type: "application/x-mpegURL",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                src: "" //url地址
            }],
            hls:true, //如果是播放m3u8必须加（需注释掉techOrder,不然会有报错）
            ///techOrder: ['flash'], //播放rtmp必须加
            poster: "", //你的封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            }
        }
        },

        methods: {
    
        },
        mounted () {
            
        },
    }
</script>

<style scoped>
 .pr{position: relative;}
.po{position: absolute; width: calc(100% - 20px);; height: 30px;  background: linear-gradient(to right, rgba(1,6,124,0) 0%,  rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%); left: 10px; top: 45px; z-index: 9; display: flex; align-items: center; justify-content: flex-end;color: #fff;}
</style>

