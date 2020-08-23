<template>
  <div class="boxbg" style="position: relative;">
    <div class="title">
      <span>资产统计信息</span>
    </div>
    <i class="i1"></i>
    <i class="i2"></i>
    <i class="i3"></i>
    <i class="i4"></i>

    <div class="c flex flexc">
      <div class="flex flex1">
        <ve-ring
          :data="data"
          :settings="chartSettings"
          :legend-visible="false"
          width="100%"
          height="100%"
          :colors="colors"
        ></ve-ring>
      </div>
      <div class="pp">
        <el-row :gutter="10" style="width:100%">
          <el-col :span="8" v-for="(item,index) in data.rows" :key="index">
            <div class="flex center">
                <div class="cs" :style="'background-color:'+colors[index]"></div>
                <span style="color:#fff;padding:0 10px;" >{{item.name}}</span>
                <span style="color:#28f1dc">{{item.num}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
var that;
export default {
   watch:{

   },
  data() {
    this.chartSettings = {
      radius: [50, 90],
      offsetY: 110,
      label: {
        normal: {
          show: true,
          lineHeight: 24,
          color: "#fff",
          textStyle: {
            fontSize: "18",
            fontWeight: "bold"
          },
          //formatter: "1111%"
          formatter: "{b}\n{d}%"
        }
      }
    };
    this.colors = ["#01ff74", "#fab806", "#0199ff"];
    return {
      theme: {
        grid: {
          left: "7%",
          right: "18",
          bottom: "20",
          top: "0"
        }
      },
      data: {
          columns: ["name", "num"],
          rows: [
            //  {
            //         "name": "A类合杆",
            //         "num": 1234
            //     },
            //     {
            //         "name": "B类合杆",
            //         "num": 556
            //     },
            //     {
            //         "name": "C类合杆",
            //         "num": 894
            //     }
          ],
      }
    };
  },

  methods: {},
  mounted() {}
};
</script>

<style scoped>
.cs{width:15px; height:15px;}
.pp{position: absolute; left: 0; bottom: 0; width: 100%;}
</style>

