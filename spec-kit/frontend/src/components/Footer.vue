<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left Section -->
      <div class="footer-left">
        <div class="footer-info">
          <p class="icp-filing">智慧云门诊</p>
          <p class="company-name">公司名称</p>
          <p class="company-address">公司地址</p>
        </div>
        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} 版权所有</p>
        </div>
      </div>

      <!-- Right Section -->
      <div class="footer-right">
        <div class="wechat-qr">
          <img src="../assets/images/wechat-qr.jpg" alt="微信公众号二维码" />
          <p>微信公众号</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      // We can add dynamic data here later if needed
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-left {
  flex: 1;
}

.footer-info p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

.icp-filing {
  font-weight: bold;
  color: #3498db;
}

.copyright {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #bbb;
}

.footer-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.wechat-qr {
  text-align: center;
}

.wechat-qr img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.wechat-qr p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #bbb;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
  }

  .footer-left, .footer-right {
    width: 100%;
  }

  .footer-right {
    margin-top: 1.5rem;
    justify-content: center;
  }
}
</style>