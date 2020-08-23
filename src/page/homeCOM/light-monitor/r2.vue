<template>
  <div class="boxbg" style="position: relative;">
    <div class="title">
      <span>多媒体发布</span>
    </div>
    <i class="i1"></i>
    <i class="i2"></i>
    <i class="i3"></i>
    <i class="i4"></i>

    <div class="c flex">
      <div class="lll flex">
        <el-image
          :z-index="9999"
          style="width: 90px; height: 110px"
          class="imgs"
          :src="data.ledurl"
          :preview-src-list="[data.ledurl]"
        ></el-image>
      </div>
      <div class="rrr flex flex1 flexc" style="color:#fff; font-size:14px;">
        <span>LED屏播放：{{data.ledname}}</span>
        <span style="padding-top:5px;">广播媒体播放：{{data.audioname}}</span>
        <div>
            <av-bars
            v-if="show"
            :audio-src="data.audiourl"
            :progress-width="5"
            audio-class="aaa"
            :canv-height="42"
            :playtime="true"
            playtime-font="18px Monaco"
            :bar-color="['#FFF', 'rgb(0,255,127)', '#e8f60d']"
          ></av-bars>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var that;
export default {
  watch: {
    data(newValue, oldValue) {
        this.show =true
    }
  },
  data() {
    return {
      show:false,
      data: {
        ledurl:"",
        ledname: "",
        audioname: "",
        audiourl: ""
      }
    };
  },

  methods: {},
  mounted() {}
};
</script>

<style >
.lll {
  width: 120px;
  min-width: 120px;
  max-width: 120px;
}
.imgs {
  border: 5px solid #000;
}
.aaa {
  height: 20px;
  margin-top: 10px;
}
</style>

