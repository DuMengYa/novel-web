<template>
  <div class="login_cantianer">
    <div class="login_box">
    <div class="avatar_box">
      <img src="../assets/logo.png" alt="" srcset="">
    </div >
      <el-form :model="loginForm" status-icon rules="loginFormRules" ref="loginRef" label-width="100px" class="login_form">
      <el-form-item prop="username" label="UserName">
        <el-input v-model="loginForm.userName" placeholder="请输入用户名">
        <svg-icon icon-class="user" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>
       <el-form-item prop="password" label="Password">
        <el-input v-model="loginForm.passWord" type="password" placeholder="请输入密码" show-password/>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-button type="info" @click="loginFormReast">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  data () {
    return {
      loginType: '',
      loginForm: {
        userName: '',
        passWord: ''
      },
      loginFormRules: {
        username: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginRef.validate(valid => {
        if (valid) {
          axios.post('login',this.loginForm).then(response => {
            if(response.code !== 200) {
              // return this.$message.error('登露失败'+ response.result)
            }
            // this.$message.success('登录成功')
            //保存tonken
            window.sessionStorage.setItem('token', response.data.data)
            this.$router.push('./home')

          })
        }
      })
    },
    loginFormReast () {
      this.loginForm.userName = ''
      this.loginForm.passWord = ''
    }
  },
}
</script>

<style scoped>
.login_cantianer {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

}
.login_box .avatar_box {
    height: 100px;
    width: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
.avatar_box img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
