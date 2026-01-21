<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 左侧：公司信息 -->
      <div class="footer-left">
        <div class="footer-title">智慧云门诊</div>
        <div class="footer-info">
          <p>{{ config.icp_code }}</p>
          <p>{{ config.company_name }}</p>
          <p>{{ config.company_address }}</p>
        </div>
      </div>
      
      <!-- 右侧：微信公众号二维码 -->
      <div class="footer-right">
        <div class="qr-code-container">
          <div class="qr-code-placeholder">
            <span>公众号二维码</span>
          </div>
          <p class="qr-code-text">扫码关注</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../db'

const config = ref({
  icp_code: '',
  company_name: '',
  company_address: ''
})

onMounted(async () => {
  const data = await db.getConfig()
  config.value = data
})
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 40px 20px;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* 左侧：公司信息 */
.footer-left {
  flex: 1;
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}

.footer-info p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin: 0;
}

/* 右侧：微信公众号二维码 */
.footer-right {
  flex-shrink: 0;
}

.qr-code-container {
  text-align: center;
}

.qr-code-placeholder {
  width: 120px;
  height: 120px;
  background-color: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.qr-code-placeholder span {
  font-size: 12px;
  color: #999;
}

.qr-code-text {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-info p {
    text-align: center;
  }
}
</style>
