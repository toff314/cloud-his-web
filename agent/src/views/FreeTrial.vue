<template>
  <div class="free-trial-page">
    <div class="container">
      <div class="form-layout">
        <!-- 左侧表单 -->
        <div class="form-section">
          <h1 class="form-title">免费试用申请</h1>
          <p class="form-desc">请填写以下信息，开启智慧云门诊体验</p>
          
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label class="form-label">手机号 <span class="required">*</span></label>
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="请输入手机号"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">验证码 <span class="required">*</span></label>
              <div class="verification-group">
                <input
                  v-model="formData.code"
                  type="text"
                  placeholder="请输入验证码"
                  class="form-input code-input"
                  required
                />
                <button
                  type="button"
                  class="code-btn"
                  :disabled="countdown > 0"
                  @click="sendCode"
                >
                  {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}
                </button>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">诊所名 <span class="required">*</span></label>
              <input
                v-model="formData.clinicName"
                type="text"
                placeholder="请输入诊所名称"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">联系人 <span class="required">*</span></label>
              <input
                v-model="formData.contact"
                type="text"
                placeholder="请输入联系人姓名"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">邀请码 <span class="optional">选填</span></label>
              <input
                v-model="formData.inviteCode"
                type="text"
                placeholder="请输入邀请码（如有）"
                class="form-input"
              />
            </div>
            
            <button type="submit" class="submit-btn">提交申请</button>
          </form>
          
          <p class="privacy-notice">
            患者至上 放心提问，我们承诺100%尊重患者，保护患者隐私
          </p>
        </div>
        
        <!-- 右侧插画 -->
        <div class="illustration-section">
          <div class="illustration-placeholder">
            <span>医疗场景主题插画</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  phone: '',
  code: '',
  clinicName: '',
  contact: '',
  inviteCode: ''
})

const countdown = ref(0)
let countdownTimer = null

const sendCode = () => {
  if (!formData.value.phone) {
    alert('请先输入手机号')
    return
  }
  
  // 模拟发送验证码
  alert('验证码已发送')
  
  // 开始倒计时
  countdown.value = 60
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(countdownTimer)
    }
  }, 1000)
}

const handleSubmit = () => {
  // 验证表单
  if (!formData.value.phone || !formData.value.code || !formData.value.clinicName || !formData.value.contact) {
    alert('请填写所有必填项')
    return
  }
  
  // 提交表单
  console.log('提交的数据:', formData.value)
  alert('申请提交成功！我们将尽快与您联系')
  
  // 重置表单
  formData.value = {
    phone: '',
    code: '',
    clinicName: '',
    contact: '',
    inviteCode: ''
  }
}
</script>

<style scoped>
.free-trial-page {
  padding: 60px 20px;
  min-height: calc(100vh - 240px);
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.form-layout {
  display: flex;
  gap: 60px;
  align-items: center;
}

/* 左侧表单 */
.form-section {
  flex: 1;
  min-width: 0;
}

.form-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #000;
}

.form-desc {
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

.required {
  color: #e74c3c;
}

.optional {
  color: #999;
  font-weight: 400;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
  outline: none;
}

.form-input:focus {
  border-color: #000;
}

.verification-group {
  display: flex;
  gap: 15px;
}

.code-input {
  flex: 1;
}

.code-btn {
  white-space: nowrap;
  padding: 12px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.code-btn:hover:not(:disabled) {
  background-color: #333;
}

.code-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-btn {
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
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #333;
}

.privacy-notice {
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

/* 右侧插画 */
.illustration-section {
  flex: 0 0 450px;
}

.illustration-placeholder {
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-layout {
    flex-direction: column;
    gap: 40px;
  }
  
  .form-section {
    width: 100%;
  }
  
  .illustration-section {
    flex: none;
    width: 100%;
  }
  
  .illustration-placeholder {
    height: 300px;
  }
  
  .form-title {
    font-size: 24px;
  }
  
  .verification-group {
    flex-direction: column;
  }
  
  .code-btn {
    width: 100%;
  }
}
</style>
