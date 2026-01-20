<template>
  <div class="right-floating-nav">
    <div class="nav-item" @click="callPhone">
      <div class="icon">📞</div>
      <div class="tooltip">联系电话</div>
    </div>
    <div class="nav-item" @click="showWechatModal">
      <div class="icon">💬</div>
      <div class="tooltip">客服微信</div>
    </div>
    <div class="nav-item" @click="goToFreeTrial">
      <div class="icon">🆓</div>
      <div class="tooltip">免费试用</div>
    </div>
    <div class="nav-item" @click="login">
      <div class="icon">👤</div>
      <div class="tooltip">立即登录</div>
    </div>
    
    <!-- WeChat Modal -->
    <div v-if="showWechat" class="modal" @click="closeWechatModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeWechatModal">&times;</span>
        <h3>扫描二维码添加客服微信</h3>
        <img src="../assets/images/wechat-qr-code.png" alt="客服微信二维码" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightFloatingNav',
  data() {
    return {
      showWechat: false
    };
  },
  methods: {
    callPhone() {
      // 实际应用中可以打开拨号界面或显示电话号码
      alert('联系电话: 400-123-4567');
    },
    showWechatModal() {
      this.showWechat = true;
    },
    closeWechatModal() {
      this.showWechat = false;
    },
    goToFreeTrial() {
      this.$router.push('/free-trial');
    },
    login() {
      // 实际应用中可以跳转到登录页面或打开登录模态框
      alert('跳转到登录页面');
    }
  }
};
</script>

<style scoped>
.right-floating-nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #42b983;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  position: relative;
  transition: all 0.3s ease;
}

.nav-item:hover {
  transform: scale(1.1);
  background-color: #359c6d;
}

.tooltip {
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  font-size: 0.8rem;
}

.nav-item:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  max-width: 300px;
  width: 90%;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-content img {
  width: 100%;
  max-width: 200px;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .right-floating-nav {
    display: none;
  }
}
</style>