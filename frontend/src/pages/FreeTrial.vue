<template>
  <div class="free-trial">
    <div class="layout-container">
      <div class="form-section">
        <h2>免费试用申请</h2>
        <p>请填写以下信息，开启智慧云门诊体验</p>
        
        <form @submit.prevent="submitForm" class="trial-form">
          <div class="form-group">
            <label for="phone">手机号 *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              required 
              placeholder="请输入手机号"
            />
          </div>
          
          <div class="form-group">
            <label for="verification">验证码 *</label>
            <div class="input-with-button">
              <input 
                type="text" 
                id="verification" 
                v-model="form.verification" 
                required 
                placeholder="请输入验证码"
              />
              <button 
                type="button" 
                class="verification-btn" 
                :disabled="verificationDisabled"
                @click="sendVerificationCode"
              >
                {{ verificationBtnText }}
              </button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="clinicName">诊所名 *</label>
            <input 
              type="text" 
              id="clinicName" 
              v-model="form.clinicName" 
              required 
              placeholder="请输入诊所名称"
            />
          </div>
          
          <div class="form-group">
            <label for="contactPerson">联系人 *</label>
            <input 
              type="text" 
              id="contactPerson" 
              v-model="form.contactPerson" 
              required 
              placeholder="请输入联系人姓名"
            />
          </div>
          
          <div class="form-group">
            <label for="invitationCode">邀请码 (选填)</label>
            <input 
              type="text" 
              id="invitationCode" 
              v-model="form.invitationCode" 
              placeholder="请输入邀请码"
            />
          </div>
          
          <button type="submit" class="submit-btn">提交申请</button>
        </form>
        
        <p class="privacy-statement">患者至上 放心提问，我们承诺100%尊重患者，保护患者隐私</p>
      </div>
      
      <div class="illustration-section">
        <img src="../assets/images/medical-scene.jpg" alt="医疗场景插画" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FreeTrial',
  data() {
    return {
      form: {
        phone: '',
        verification: '',
        clinicName: '',
        contactPerson: '',
        invitationCode: ''
      },
      verificationDisabled: false,
      verificationCountdown: 60,
      verificationBtnText: '获取验证码'
    };
  },
  methods: {
    sendVerificationCode() {
      // 验证手机号格式
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!phoneRegex.test(this.form.phone)) {
        alert('请输入正确的手机号格式');
        return;
      }

      // 模拟发送验证码
      console.log('发送验证码到:', this.form.phone);
      alert('验证码已发送至您的手机，请注意查收');
      
      // 启动倒计时
      this.verificationDisabled = true;
      this.verificationBtnText = `${this.verificationCountdown}秒后重试`;
      
      const countdownInterval = setInterval(() => {
        this.verificationCountdown--;
        this.verificationBtnText = `${this.verificationCountdown}秒后重试`;
        
        if (this.verificationCountdown <= 0) {
          clearInterval(countdownInterval);
          this.verificationDisabled = false;
          this.verificationBtnText = '重新获取';
          this.verificationCountdown = 60;
        }
      }, 1000);
    },
    async submitForm() {
      // 表单验证
      if (!this.validateForm()) {
        return;
      }

      // 模拟提交表单
      try {
        console.log('提交试用申请:', this.form);
        alert('试用申请提交成功！我们的工作人员将尽快与您联系。');
        
        // 重置表单
        this.form = {
          phone: '',
          verification: '',
          clinicName: '',
          contactPerson: '',
          invitationCode: ''
        };
      } catch (error) {
        console.error('提交失败:', error);
        alert('提交失败，请稍后重试');
      }
    },
    validateForm() {
      if (!this.form.phone) {
        alert('请输入手机号');
        return false;
      }

      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!phoneRegex.test(this.form.phone)) {
        alert('请输入正确的手机号格式');
        return false;
      }

      if (!this.form.verification) {
        alert('请输入验证码');
        return false;
      }

      if (!this.form.clinicName) {
        alert('请输入诊所名');
        return false;
      }

      if (!this.form.contactPerson) {
        alert('请输入联系人');
        return false;
      }

      return true;
    }
  }
};
</script>

<style scoped>
.free-trial {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.layout-container {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.form-section {
  flex: 1;
  min-width: 400px;
}

.form-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-section p {
  color: #666;
  margin-bottom: 2rem;
}

.trial-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.form-group label:after {
  content: "*";
  color: red;
  margin-left: 0.25rem;
}

.form-group label:not(:has(input[required])):after {
  content: "";
  margin-left: 0;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #42b983;
}

.input-with-button {
  display: flex;
  gap: 0.5rem;
}

.verification-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.verification-btn:hover:not(:disabled) {
  background-color: #359c6d;
}

.verification-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-btn {
  width: 100%;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}

.privacy-statement {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #e8f4fc;
  border-left: 4px solid #3498db;
  font-size: 0.9rem;
  color: #2c3e50;
  text-align: center;
}

.illustration-section {
  flex: 1;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-section img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }
  
  .form-section,
  .illustration-section {
    min-width: 100%;
  }
  
  .illustration-section img {
    max-height: 300px;
    object-fit: contain;
  }
}
</style>