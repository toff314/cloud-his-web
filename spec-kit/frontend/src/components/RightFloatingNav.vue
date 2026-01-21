<template>
  <div class="floating-nav">
    <div class="floating-btn" @click="showPhoneModal = true">
      <span class="btn-icon">📞</span>
      <span class="btn-text">联系电话</span>
    </div>
    <div class="floating-btn" @click="showWechatModal = true">
      <span class="btn-icon">💬</span>
      <span class="btn-text">客服微信</span>
    </div>
    <div class="floating-btn" @click="goToFreeTrial">
      <span class="btn-icon">🆓</span>
      <span class="btn-text">免费试用</span>
    </div>
    <div class="floating-btn" @click="goToLogin">
      <span class="btn-icon">🔒</span>
      <span class="btn-text">立即登录</span>
    </div>

    <!-- Phone Modal -->
    <div v-if="showPhoneModal" class="modal-overlay" @click="closeModals">
      <div class="modal-content" @click.stop>
        <h3>联系电话</h3>
        <p>400-123-4567</p>
        <button @click="closeModals" class="close-btn">关闭</button>
      </div>
    </div>

    <!-- WeChat Modal -->
    <div v-if="showWechatModal" class="modal-overlay" @click="closeModals">
      <div class="modal-content" @click.stop>
        <h3>客服微信</h3>
        <img src="../assets/images/wechat-qr-service.jpg" alt="客服微信二维码" class="qr-code" />
        <p>扫描二维码添加客服微信</p>
        <button @click="closeModals" class="close-btn">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightFloatingNav',
  data() {
    return {
      showPhoneModal: false,
      showWechatModal: false
    };
  },
  methods: {
    goToFreeTrial() {
      this.$router.push('/free-trial');
    },
    goToLogin() {
      // Redirect to login page or trigger login modal
      alert('跳转到登录页面');
    },
    closeModals() {
      this.showPhoneModal = false;
      this.showWechatModal = false;
    }
  }
};
</script>

<style scoped>
.floating-nav {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.floating-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  position: relative;
}

.floating-btn:hover {
  transform: scale(1.1);
  background-color: #2980b9;
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-text {
  font-size: 0.6rem;
  display: none;
}

.floating-btn:hover .btn-text {
  display: block;
  position: absolute;
  left: -80px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 300px;
  width: 90%;
}

.qr-code {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 10px auto;
}

.close-btn {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .floating-nav {
    right: 10px;
    bottom: 10px;
  }

  .floating-btn {
    width: 45px;
    height: 45px;
  }
}
</style>