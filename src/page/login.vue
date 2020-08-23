<template>
<div class="loginbox"> 
<div class="boxbg">
        <div class="title bgbg"><span>智慧综合杆运行态势总览</span></div>
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
        <i class="i4"></i>   
         
        <div class="c flex flexc" style="top:80px;overflow-x: hidden; left:0; right:0; bottom:0;padding:20px; padding-right:80px;">
            
             <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用户名">
                    <el-input size="medium" v-model="form.usercode"  @keyup.enter.native="onSubmit('form')" autofocus></el-input>
                </el-form-item>
                <el-form-item label="密 码">
                    <el-input size="medium" v-model="form.password" type="password"  @keyup.enter.native="onSubmit('form')" autofocus></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  size="medium" @click="onSubmit" :loading="loading"  @keyup.enter.native="onSubmit('form')" autofocus>登录系统</el-button>
                    <!-- <el-button style="text-align: right;margin: 15px 0px;border-left-width: 110px;" type="text"  @click="showFileList"><u>工具下载</u></el-button> -->
                </el-form-item>
            </el-form>
  
             
        </div>

        <div class="ts"> </div>

    </div>
</div>
    
</template>

<script>
  export default {
    data() {
      return {
        form: {
          usercode: 'admin',
          password: '1'
        },
        loading:false,
      }
    },
    beforeRouteEnter(to,from,next){
      next((vm)=>{ 
        ///vm.path = from.path
      })
    },
    created(){
        ///if(this.$store.state.login)this.$router.push({ path: '/admin' })
    },
    mounted () {
        
    },
   
    methods: {
      onSubmit() {
        this.loading = true;
        this.$post('mock/login',this.form)
        .then((response) => {
             this.$store.commit("changeToken",response.token);
             this.$router.push({ path: '/home/1' })
        })
      }
    }
  }
</script>

<style scoped>
.loginbox{
    width: 600px; height: 400px; position: absolute; left: 50%; top: 50%; margin-left: -300px; margin-top: -200px; padding:50px; box-sizing: border-box;
}
.ts{width: 100%; position: absolute; left: 0; bottom: -100px; text-align: center; color: #1383e7; font-size: 20px;}
.bgbg{width:500px;background-image: url('~@/../static/titlebg2.png');margin-left: -250px;}
</style>
