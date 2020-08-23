<template>
    <div class="janxyM">
        <el-menu  :default-active="$route.path" router background-color="rgba(3,100,162,0)"  text-color="#fff" active-text-color="#fff000">

            
            <el-submenu v-for="menu in menus" :index="menu.id" :key="menu.id" >
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item-group  popper-class="mymenu">
                    <el-menu-item v-for="m in menu.submenu" :index="m.route" :key="m.id" :route="m.route" >{{m.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

          
        </el-menu>

    </div>
</template>

<script>
  export default {
    data() {
      return {
         menus:[],
      }
    },
    created: function() {
      this.$post('res/getMenuTree')
      .then((response) => {
          this.menus = response.menus; //正式数据
          console.log()
      })
	},
    methods: {
      
    }
  }
</script>

<style>

.app-nav-wrap {
    width: 100%;
    
}
.el-menu{border: 0}

.el-menu-item i,.el-submenu__title i{color: rgba(255,255,255,1)}

.el-submenu__title{ background:  transparent !important;}

.iconfont{
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}

.el-menu-item:focus, .el-menu-item:hover{ background-color: rgba(0,0,0,.1)!important;}

.el-menu-item-group{ background-color: rgba(1,158,252,.1)}

.namemm{ position: absolute; left: 0; bottom: 10px; width: 100%; height: 20px; font-size: 10px; line-height: 20px; text-align: center; color: rgba(255,255,255,1)}

.is-active .namemm,.is-active .is-active .el-submenu__title i{color: rgb(255, 208, 75)}
/* .janxyM .el-menu-item, .janxyM .el-submenu__title{height: 70px;}  */
.el-menu-item-group__title{padding: 0}
.janxyM { position: absolute; left: 0; top: 0; bottom: 0; right: 0; overflow-x: hidden}

</style>

