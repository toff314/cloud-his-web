<template>
  <div class="login-page">
    <div class="container">
      <div class="login-container">
        <div class="login-left">
          <h1 class="login-title">欢迎登录</h1>
          <p class="login-subtitle">智慧云门诊管理平台</p>
          
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label class="form-label">账号</label>
              <input
                v-model="loginForm.username"
                type="text"
                placeholder="请输入账号"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">密码</label>
              <input
                v-model="loginForm.password"
                type="password"
                placeholder="请输入密码"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-options">
              <label class="checkbox-label">
                <input v-model="loginForm.remember" type="checkbox" />
                <span>记住账号</span>
              </label>
              <a href="#" class="forgot-password">忘记密码？</a>
            </div>
            
            <button type="submit" class="login-btn">登录</button>
          </form>
          
          <div class="login-footer">
            <p>还没有账号？<RouterLink to="/free-trial" class="register-link">立即注册</RouterLink></p>
          </div>
        </div>
        
        <div class="login-right">
          <div class="login-illustration">
            <span>登录插画</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const loginForm = ref({
  username: '',
  password: '',
  remember: false
})

const handleLogin = () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    alert('请输入账号和密码')
    return
  }
  
  // 模拟登录逻辑
  console.log('登录信息:', loginForm.value)
  alert('登录成功！')
}
</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 240px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #fff;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.login-container {
  display: flex;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

/* 左侧登录表单 */
.login-left {
  flex: 1;
  padding: 60px 50px;
}

.login-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000;
}

.login-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 25px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
  outline: none;
}

.form-input:focus {
  border-color: #000;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.checkbox-label input {
  margin-right: 8px;
  cursor: pointer;
}

.forgot-password {
  font-size: 14px;
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: #000;
}

.login-btn {
  width: 100%;
  padding: 14px 30px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #333;
}

.login-footer {
  margin-top: 30px;
  text-align: center;
}

.login-footer p {
  font-size: 14px;
  color: #666;
}

.register-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

.register-link:hover {
  text-decoration: underline;
}

/* 右侧插画 */
.login-right {
  flex: 0 0 400px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-illustration {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 24px;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
  
  .login-left {
    padding: 40px 30px;
  }
  
  .login-right {
    flex: none;
    height: 200px;
  }
  
  .login-right .login-illustration {
    font-size: 18px;
  }
  
  .login-title {
    font-size: 24px;
  }
}
</style>
