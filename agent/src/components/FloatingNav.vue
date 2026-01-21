<template>
  <div class="floating-nav">
    <a href="tel:400-888-8888" class="floating-item" title="联系电话">
      <div class="icon">📞</div>
      <span>电话联系</span>
    </a>
    <div class="floating-item" @click="showWechat = true" title="客服微信">
      <div class="icon">💬</div>
      <span>客服微信</span>
    </div>
    <RouterLink to="/free-trial" class="floating-item" title="免费试用">
      <div class="icon">🎁</div>
      <span>免费试用</span>
    </RouterLink>
    <RouterLink to="/login" class="floating-item" title="立即登录">
      <div class="icon">🔑</div>
      <span>立即登录</span>
    </RouterLink>
    
    <!-- 微信弹窗 -->
    <div v-if="showWechat" class="wechat-modal" @click="closeModal">
      <div class="wechat-modal-content" @click.stop>
        <div class="modal-header">
          <h3>添加客服微信</h3>
          <button class="close-btn" @click="showWechat = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="wechat-qr-placeholder">
            <span>客服微信二维码</span>
          </div>
          <p class="wechat-id">微信号：{{ wechatService }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import db from '../db'

const showWechat = ref(false)
const wechatService = ref('')

onMounted(async () => {
  const config = await db.getConfig()
  wechatService.value = config.wechat_service || 'service_wechat'
})

const closeModal = () => {
  showWechat.value = false
}
</script>

<style scoped>
.floating-nav {
  position: fixed;
  right: 20px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;
}

.floating-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.floating-item:hover {
  background-color: #333;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.floating-item .icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.floating-item span {
  font-size: 11px;
}

/* 微信弹窗 */
.wechat-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.wechat-modal-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h3 {
  font-size: 18px;
  color: #000;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  transition: color 0.3s;
}

.close-btn:hover {
  color: #000;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wechat-qr-placeholder {
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.wechat-qr-placeholder span {
  font-size: 14px;
  color: #999;
}

.wechat-id {
  font-size: 14px;
  color: #666;
  margin: 0;
}
</style>
