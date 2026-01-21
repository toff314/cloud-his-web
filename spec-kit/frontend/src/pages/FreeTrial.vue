<template>
  <div class="free-trial">
    <div class="trial-container">
      <div class="form-section">
        <h2>免费试用申请</h2>
        <p>请填写以下信息，开启智慧云门诊体验</p>
        
        <form @submit.prevent="submitForm" class="trial-form">
          <div class="form-group">
            <label for="phone">手机号 *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              required 
              placeholder="请输入您的手机号"
            />
          </div>
          
          <div class="form-group">
            <label for="verification">验证码 *</label>
            <div class="verification-input">
              <input 
                type="text" 
                id="verification" 
                v-model="formData.verification" 
                required 
                placeholder="请输入验证码"
              />
              <button 
                type="button" 
                class="verification-btn" 
                :disabled="countdown > 0"
                @click="sendVerificationCode"
              >
                {{ countdown > 0 ? `${countdown}秒后重发` : '获取验证码' }}
              </button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="clinicName">诊所名 *</label>
            <input 
              type="text" 
              id="clinicName" 
              v-model="formData.clinicName" 
              required 
              placeholder="请输入诊所名称"
            />
          </div>
          
          <div class="form-group">
            <label for="contactPerson">联系人 *</label>
            <input 
              type="text" 
              id="contactPerson" 
              v-model="formData.contactPerson" 
              required 
              placeholder="请输入联系人姓名"
            />
          </div>
          
          <div class="form-group">
            <label for="invitationCode">邀请码 (选填)</label>
            <input 
              type="text" 
              id="invitationCode" 
              v-model="formData.invitationCode" 
              placeholder="请输入邀请码"
            />
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? '提交中...' : '提交申请' }}
          </button>
        </form>
        
        <p class="privacy-statement">
          患者至上 放心提问，我们承诺100%尊重患者，保护患者隐私
        </p>
      </div>
      
      <div class="illustration-section">
        <img src="../assets/images/medical-illustration.jpg" alt="医疗场景插画" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FreeTrial',
  data() {
    return {
      formData: {
        phone: '',
        verification: '',
        clinicName: '',
        contactPerson: '',
        invitationCode: ''
      },
      countdown: 0,
      isSubmitting: false
    };
  },
  methods: {
    sendVerificationCode() {
      // In a real app, this would send an SMS
      console.log('Sending verification code to:', this.formData.phone);
      this.countdown = 60;
      const timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    },
    async submitForm() {
      this.isSubmitting = true;
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', this.formData);
        alert('申请提交成功！我们的工作人员将尽快与您联系。');
        this.resetForm();
      } catch (error) {
        console.error('Submission error:', error);
        alert('提交失败，请稍后重试。');
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.formData = {
        phone: '',
        verification: '',
        clinicName: '',
        contactPerson: '',
        invitationCode: ''
      };
    }
  }
};
</script>

<style scoped>
.free-trial {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.trial-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.form-section {
  flex: 1;
  max-width: 500px;
}

.form-section h2 {
  margin-top: 0;
  color: #2c3e50;
}

.trial-form {
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #34495e;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.verification-input {
  display: flex;
  gap: 0.5rem;
}

.verification-input input {
  flex: 1;
}

.verification-btn {
  padding: 0.75rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.verification-btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #27ae60;
}

.submit-btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.privacy-statement {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-left: 4px solid #3498db;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.illustration-section {
  flex: 1;
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
  .trial-container {
    flex-direction: column;
  }
  
  .illustration-section {
    order: -1; /* Move illustration above form on mobile */
    margin-bottom: 2rem;
  }
}
</style>