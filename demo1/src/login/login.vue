<template>
  <div class="login">
    <div class="allpage">
      <el-form name='form'  method="get">
        <div class="box">
          <el-input
            id="username"
            v-model="userInfo.username"
            type="text"
            placeholder="请输入手机号码或用户名"
            @change="handelChange"
            @focus="userFocus"
          />
          <p class="remind red" :class="{show:flag,hide:!flag }">{{ remind }}</p>
        </div>
        <div class="box">
          <el-input
            id='pwd'
            type="password"
            v-model="userInfo.password"
            placeholder="请输入密码"
            @change="pwdChange"
            @focus="pwdFocus"
          />
          <p class="prompt red" :class="{show:flag2,hide:!flag2 }">{{ prompt }}</p>
        </div>
        <el-button type="primary" native-type="submit" @click="onsgin">登录</el-button>
        <el-button type="default" native-type="reset" @click="resetForm">重置</el-button>
      </el-form>
      <div class="account">
        <p class="forget" style="float:right" @click="$router.push({path:'/forgetpwd'})">忘记密码?</p>
        <div class="register">
          <span>还没有账号?</span>
          <a href="#">手机注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  export default {
    name: "login",
    data(){
      return {
        userInfo:{
          username:'',
          password:''
        },
        remind:"请输入正确用户名",
        prompt:"请输入正确密码",
        flag:false,
        flag2:false,
      }
    },
    methods:{
      //用户名
      handelChange(event){
        this.username = event;
        this.userInfo['username'] = this.username;
      },
      userFocus(){
        this.flag = false;
      },
      pwdFocus(){
        this.flag2 = false;
      },
      //密码
      pwdChange(event){
        let pwd = "我的密码是" + event;
        this.password = md5(md5(pwd)) ;
        this.userInfo['password'] = this.password;
      },
      //重置
      resetForm(){
        this.flag = false;
        this.flag2 = false;
        this.userInfo = {};
      },
      //登录
      onsgin(){
        if(this.userInfo.username === '' && this.userInfo.password === ''){
          this.flag = true;
          this.flag2 = true
        }else if(this.userInfo.username === ''){
          this.flag = true;
          this.flag2 = false;
        }else if(this.userInfo.password === '') {
          this.flag  = false;
          this.flag2 = true
        }else{
          this.flag  = false;
          this.flag2 = false;
          let userInfo = JSON.stringify(this.userInfo);
          localStorage.setItem("userInfo",userInfo)
          this.$router.push('/index')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    height: 100%;
    background: rgba(9, 9, 9, .8);
    padding-top:20vh;
    .allpage{
      width:60%;
      height:16rem;
      margin:0 auto;
      padding:3rem 2rem;
      background:#fff;
      border-radius:10px;
    }
    .el-form {
      text-align: center;
      .el-input {
        margin: .5rem 0;
      }
      .el-button {
        margin-top: 1rem;
        width: 40%;
      }
      .box{
        position:relative;
        padding-bottom:1rem;
        .red{
          color:red;
        }
        .remind,.prompt{
          position:absolute;
          bottom:.2rem;
          width:100%;
        }
      }
    }
    .show{
      display:block;
    }
    .hide{
      display:none;
    }
    .account {
      margin-top:1rem;
    }
  }
</style>
