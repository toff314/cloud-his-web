<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <div class="company-info">
            <h4>智慧云门诊</h4>
            <p>ICP备案：京ICP备12345678号</p>
            <p>公司名称：某科技有限公司</p>
            <p>公司地址：北京市朝阳区某某街道某某号</p>
          </div>
        </div>
        <div class="footer-right">
          <div class="wechat-qr">
            <img src="../assets/images/wechat-qr-code.png" alt="微信公众号二维码" />
            <p>扫码关注微信公众号</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 某科技有限公司. 版权所有。</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.footer-left {
  flex: 1;
}

.company-info h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.company-info p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-right {
  text-align: center;
}

.wechat-qr img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.wechat-qr p {
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-right {
    margin-top: 1.5rem;
  }
}
</style>