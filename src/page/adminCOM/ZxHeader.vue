<template>
    <div class="hd flex center">
      <div class="ts">福州市政充电设施运营监管平台</div>
      <div class="flex flex1 rs">

          <el-button type="text"  @click="passwordVisible = true">{{$store.state.user.userName}}（{{$store.state.user.orgName}}）</el-button>

         <el-tooltip  content="系统首页"  >
          <el-button type="text" @click="gohome" style="padding:0">
            <img src="~@/../static/home.png" width="29"></el-button>
        </el-tooltip>
        
         

        <el-tooltip  content="安全退出"  >
          <el-button type="text" @click="gologin" style="padding:0">
            <img src="~@/../static/out.png" width="28"></el-button>
        </el-tooltip>

      </div> 



  <!-- 修改密码 -->
    <el-dialog title="修改密码" :visible.sync="passwordVisible" width="400px" :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item :class="vaPhone" label="手机号" label-width="80px" prop="userPhone">
          <el-input v-model="form.userPhone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :class="vaEmail" label="邮箱" label-width="80px" prop="email">
          <el-input v-model="form.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="旧密码" label-width="80px" prop="old">
          <el-input v-model="form.old" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" label-width="80px" prop="newPwd">
          <el-input v-model="form.newPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" label-width="80px" prop="newPwdAgain">
          <el-input v-model="form.newPwdAgain" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="passwordVisible = false">取 消</el-button>
        <el-button type="primary" @click="changePwd('form')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改密码 -->

    </div>
</template>



<script>
  
  export default {
     mounted() {
      this.form.old = "";
      this.form.newPwd = "";
      this.form.newPwdAgain = "";
      this.form.userPhone = this.$store.state.user.userPhone;
      this.form.email = this.$store.state.user.email;
      var that = this;
       this.$post('login/getConfig',{keyName : 'SYSTEM_LOG'})
        .then((response) => {
            if(response.success){
               that.systemLog = response.keyValue;
            }
        }) 
    },
    data() {
      // 此处自定义校验IPjs逻辑
    var phoneReg = /^1[23456789]\d{9}$/;
    var elValidatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号码不能为空！"));
      }
      setTimeout(() => {
        if (!phoneReg.test(value)) {
          callback(new Error("手机号码输入格式有误"));
        } else {
          callback();
        }
      }, 1000);
    };

    var emailReg = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$/;
    var elValidateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空！"));
      }
      setTimeout(() => {
        if (!emailReg.test(value)) {
          callback(new Error("邮箱输入格式有误"));
        } else {
          callback();
        }
      }, 1000);
    };
      return {
        vaEmail: "",
        vaPhone: "",
        passwordVisible: false,
        form: {
          old: "",
          newPwd: "",
          newPwdAgain: ""
        },
        rules: {
          userPhone: [
            { required: true, validator: elValidatePhone, trigger: "blur" }
          ],
          email: [{ required: true, validator: elValidateEmail, trigger: "blur" }]
          // newPwd: [{ required: true, message: "请输入新密码", trigger: "blur" }],
          // old: [{ required: true, message: "请输入旧密码", trigger: "blur" }],
          // newPwd: [{ required: true, message: "请输入新密码", trigger: "blur" }],
          // newPwdAgain: [
          //   { required: true, message: "请再次输入新密码", trigger: "blur" }
          // ]
        },
        SVER: "",
        HVER: "",
        systemLog : ""
      }
    },
    methods: {
      changePwd(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var newPwd = this.form.newPwd;
          var newPwdAgain = this.form.newPwdAgain;

          if (newPwd != newPwdAgain) {
            this.messager.error("两次输入的新密码不同，请重新输入！");
            return;
          }
          this.btnLoading = true;
          var that = this;
          var jsonobj = this.form;

          this.$post('ser/changePwd',this.form)
        .then((data) => {
            if(data.success){
               ///that.systemLog = response.keyValue;
                that.btnLoading = false;
                that.passwordVisible = false;
                that.$message.success(data.msg);
                //ok 返回首页退出
                that.gologin();
                
            }else{
              if (data.msg == "该手机号已被注册") {
                  that.vaPhone = "red";
                }
                if (data.msg == "该邮箱已被注册") {
                  that.vaEmail = "red";
                }
                that.$message.error(data.msg);
            }
            that.btnLoading = false;
        }) 

          
        }
      });
    }, 
      gologin() {
        this.$store.commit("changeLogin", false);
        this.$router.push({ path: "/login" });
      },
      gohome() {
        // this.$store.commit("changeLogin", false);
        this.$router.push({ path: "/" });
      }
    }
  }
</script>

<style  scoped>
.hd{height: #fff; height: 100%; color: #fff;}
.rs{justify-content: flex-end; align-items: flex-end}
.ts{font-size: 30px; font-weight: bold; font-style:italic}
</style>

