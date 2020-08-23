<template>
   
   <div class="main" style="background-color: #000">
    <div id="homePage"  :style="'transform:scale('+h/1080+');transform-origin:50% 50%'">
       <light-monitor></light-monitor>
    </div>
   </div>     
 
</template>



<script>
  import lightMonitor from "./homeCOM/light-monitor.vue" 
  export default {
    components: {
        lightMonitor
    },
    data() {
      return {
        w:0,
        h:0
      }
    },
    methods: {
      
    },
    mounted (){
      //console.log(document.body.clientHeight/1080)
      this.w = document.body.clientWidth;
      this.h = document.body.clientHeight;
      window.onresize = () => {
            return (() => {
              this.h = document.body.clientWidth;
              this.h = document.body.clientHeight;
            })()
      }
    },
  }
</script>

<style scoped>
#homePage{width: 1920px; height: 1080px; background-color: black; position: absolute; left: 50%; top:50%; margin-left: -960px; margin-top:-540px; }
</style>


