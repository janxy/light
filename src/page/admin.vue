<template>
   
   
        <el-container style="height:100%">
            <el-header>
                <zx-header></zx-header> 
            </el-header>
            <el-container>
                <el-aside width="200px" style="margin-bottom:10px;position: relative;">
                    <zx-aside></zx-aside>
                </el-aside>
                <el-main>
                    <div class="page"><router-view></router-view></div>
                </el-main>
            </el-container>
        </el-container>

 
</template>



<script>
  import ZxHeader from "./adminCOM/ZxHeader"
  import ZxAside from "./adminCOM/ZxAside"
  export default {
    components: {
        ZxHeader,
        ZxAside
    },
    data() {
      return {
      }
    },
    methods: {
      onSubmit() {
        this.$store.commit("changeLogin", false);
        this.$router.push({ path: "/login" });
      }
    }
  }
</script>

<style>
.el-aside {
  background-color: var(--nav-color);
  border:var(--main-bg-border);
}
</style>


