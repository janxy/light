<template>
  <div class="main">

    <div class="tipss">

        <svg t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="22" height="22"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#f4ea2a"></path></svg>
        <span style="padding-right:15px;">在线</span>
         <svg  t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="22" height="22"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#d81e06"></path></svg>
<span style="padding-right:15px;">告警</span>
         <svg  t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="22" height="22"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#bfbfbf"></path></svg>
          <span style="padding-right:15px;">离线</span> 
        

    </div>

    
    <el-amap class="amap-box" vid="amap-vue" :events="mapEvents" :zoom="17" :pitch="60" viewMode="3D" :center="data.center">
      <el-amap-marker v-for="(marker,index) in data.list" :key="index" :position="arrfn(marker.longitude,marker.latitude)" >
        <section>
          <!-- 黄色 -->
           <!-- <el-tooltip class="item" effect="dark" :content="marker.name+'('+marker.type+'类合杆)'" placement="top"  v-if="marker.state==0">
          <svg t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="32" height="32"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#f4ea2a"></path></svg>
          </el-tooltip> -->

<!-- 黄色 -->
        <el-popover
        v-if="marker.state==0"
  placement="top"
  trigger="hover">
   <span style="color:#fff">{{marker.name+'('+marker.type+'类合杆)'}}</span>
   <el-button size="mini" type="primary" @click="test">测试</el-button>
   <svg slot="reference" t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="32" height="32"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#f4ea2a"></path></svg>         
</el-popover>

 <!-- 红色 -->
 <el-popover
        v-if="marker.state==1"
  placement="top"
  trigger="hover">
   <span style="color:#fff">{{marker.name+'('+marker.type+'类合杆)'}}</span>
   <el-button size="mini" type="primary" @click="test">测试</el-button>
     <svg t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="32" height="32"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#d81e06"></path></svg>
          
    </el-popover>

<!-- 灰色 -->
 <el-popover
        v-if="marker.state==2"
  placement="top"
  trigger="hover">
   <span style="color:#fff">{{marker.name+'('+marker.type+'类合杆)'}}</span>
   <el-button size="mini" type="primary" @click="test">测试</el-button>
   <svg  t="1596861855566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4972" width="32" height="32"><path d="M366.8992 790.2208c0 22.528 18.432 40.96 40.96 40.96h208.384c22.528 0 40.96-18.432 40.96-40.96v-23.9616H366.8992v23.9616zM512 115.3024c-166.7072 0-301.8752 135.168-301.8752 301.8752 0 114.176 63.3856 213.4016 156.7744 264.8064v43.3152h290.304V681.984c93.3888-51.3024 156.7744-150.6304 156.7744-264.8064-0.1024-166.7072-135.2704-301.8752-301.9776-301.8752zM592.6912 862.3104H431.3088c-11.264 0-20.48 9.216-20.48 20.48v5.4272c0 11.264 9.216 20.48 20.48 20.48h161.28c11.264 0 20.48-9.216 20.48-20.48v-5.4272c0.1024-11.264-9.1136-20.48-20.3776-20.48z" p-id="4973" fill="#bfbfbf"></path></svg>      
   </el-popover>


           
        
        </section>
      </el-amap-marker>

     

    </el-amap>
  </div>
</template>

<script>
export default {
  watch: {
    data(v){
      this.$parent.city = v.city
    }
  },
  data() {
    return {
      data:{
        center:[0, 0],
        list:[]
      },
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/22175cb1222cc35dec20d2887d0bf772");
        }
      }
    };
  },
  methods: {
    arrfn(p1,p2){
      if(p1==null||p2==null)return [0,0]
      let arr = [];
      arr.push(p1);
      arr.push(p2);
      return arr; 
    },
    test(){
      alert('ok')
    }
  },
  mounted() {
    
  }
};
</script>

<style>
.tipss{width: 250px; height:22px; display: flex; position: absolute; left: 500px; top: 80px; z-index: 99; flex-direction: row; background: linear-gradient(to right, rgba(0,0,0,0.3) 0%,  rgba(0,0,124,0) 100%); color:#fff; padding:5px;}
#amap-vue {
  width: 1920px;
  height: 1080px;
}
.amap-box section {
  width: 56px;
  height: 56px;
  position: relative;
  cursor: pointer;
}
.amap-box  
.wrap,
.circle,
.percent {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.amap-box  
.wrap {
  top: 0;
  left: 0;
  background-image: url("~@/../static/connector.png");
  background-position: center;
  background-repeat: no-repeat;
}
.amap-box  
.circle {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  border: 0.3rem solid rgba(0, 0, 0, 0.2);
  clip: rect(0, 56px, 56px, 28px);
}
.amap-box  
.clip-auto {
  clip: rect(auto, auto, auto, auto);
}
.amap-box  
.percent {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  top: -0.3rem;
  left: -0.3rem;
}
.amap-box  
.mapleft {
  border: 4px solid #fbf03d;
  clip: rect(0, 28px, 56px, 0);
}
.amap-box  
.mapright {
  border: 4px solid #fbf03d;
  clip: rect(0, 56px, 56px, 28px);
}
.amap-box  
 .mapdialog {
  width: 470px;
  height: 270px;
  display: flex;
}
.amap-box  
 .mapdialog .tilte {
  color: var(--color1);
  font-size: 20px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #046bc0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.amap-box  
 .mapdialog .bottom {
  border-top: 1px solid #046bc0;
  margin-top: 10px;
}
.amap-box  
.amap-info-content {
  background-color: rgba(0, 1, 123, 0.8);
  padding: 10px; border: 0;
}
.amap-box  
.amap-info-sharp {
  background-image: url('~@/../static/sharp.png') !important;
}

 .mapdialog .ts {
  font-size: 18px;
  color: #fff;
  line-height: 40px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

 .mapdialog .i1 {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #12bb0e;
  display: block;
  margin-right: 10px;
}
 .mapdialog .i2 {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: block;
  background: #cc3300;
  margin-right: 10px;
}

 .mapdialog .t1 {
  color: var(--color1);
}
 .mapdialog .t2 {
  color: var(--color2);
}

 .mapdialog .sxt {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -29px;
  margin-top: -29px;
  cursor: pointer; 
}
</style>