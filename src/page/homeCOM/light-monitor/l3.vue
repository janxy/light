<template>
    <div class="boxbg"  style="position: relative;">
        <div class="title"><span>近30日能耗趋势</span></div>
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
        <i class="i4"></i>
      
        <div class="c flex">
                <span class="khw">kW·h</span>
               <ve-line :data="data" :settings="chartSettings" width="100%" height="100%" :legend-visible="false" :extend="chartExtend" :theme="theme"></ve-line>
     
        </div>

    </div>
</template>
<script>
    var that;
    export default {
        watch:{
          
        },
        data () {
            this.chartSettings = {
                area: true
            };

            (this.chartExtend = {
        series: {
          smooth: true
        },
        xAxis: {
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        "xAxis.0.axisLine": {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)"
          }
        },
        yAxis: {  
          axisLine:{
            lineStyle:{
                color: "rgba(255,255,255,0.1)",
                width:1
            }
        },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.1)"
            }
          }
        },
        "yAxis.0.axisLine": {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)"
          }
        }
        });
        
      return {
             
             theme: {
            grid: {
              left: "45",
              right: "18",
              bottom: "20",
              top: "20"
            },
            textStyle: {
              color: "rgba(255,255,255,0.8)"
            },
        },
                data: {
                    columns: ["time", "kwh"],
                    rows: [
                        
                    ]
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
.khw{position: absolute; left: 5px; top: -15px; color:#2bb6ff}
</style>

