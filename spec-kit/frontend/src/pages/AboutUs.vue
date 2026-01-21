<template>
  <div class="about-us">
    <section class="company-intro">
      <h2>公司简介</h2>
      <div class="intro-content">
        <div class="intro-text">
          <p>公司简介文案... 我们致力于为医疗机构提供先进的信息化解决方案，通过技术创新推动医疗服务的发展。我们的团队由经验丰富的医疗行业专家和技术精英组成，专注于开发适合中国医疗环境的软件产品。</p>
          <p>多年来，我们已成功为数百家医疗机构提供了优质的服务，帮助他们提高了工作效率，改善了患者就医体验。未来，我们将继续秉承创新精神，为医疗行业的数字化转型贡献力量。</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/company.jpg" alt="公司图片" />
        </div>
      </div>
    </section>

    <section class="honors">
      <h2>荣誉资质</h2>
      <div class="certificates">
        <div class="certificate-item">
          <div class="certificate-image">
            <img src="../assets/images/certificate-1.jpg" alt="证书图片" />
          </div>
          <p>社区医院多源处方智能审方与尚配协同方法及系统</p>
        </div>
        <div class="certificate-item">
          <div class="certificate-image">
            <img src="../assets/images/certificate-2.jpg" alt="证书图片" />
          </div>
          <p>社区医院多源处方智能审方与尚配协同方法及系统</p>
        </div>
        <div class="certificate-item">
          <div class="certificate-image">
            <img src="../assets/images/certificate-3.jpg" alt="证书图片" />
          </div>
          <p>兴邦智慧云药房库存智能预警系统</p>
        </div>
        <div class="certificate-item">
          <div class="certificate-image">
            <img src="../assets/images/certificate-4.jpg" alt="证书图片" />
          </div>
          <p>软著证书二</p>
        </div>
      </div>
    </section>

    <section class="vision">
      <h2>公司愿景</h2>
      <div class="vision-items">
        <div class="vision-item">
          <img src="../assets/images/service-excellence.jpg" alt="服务至上" />
          <h3>服务至上</h3>
        </div>
        <div class="vision-item">
          <img src="../assets/images/tcm-heritage.jpg" alt="中医文化传承" />
          <h3>中医文化传承</h3>
        </div>
        <div class="vision-item">
          <img src="../assets/images/efficiency.jpg" alt="提升门诊效率" />
          <h3>提升门诊效率</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style scoped>
.about-us {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.company-intro, .honors, .vision {
  margin-bottom: 3rem;
}

.intro-content {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.intro-text {
  flex: 2;
  line-height: 1.8;
}

.intro-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.certificates {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
}

.certificate-item {
  text-align: center;
}

.certificate-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.certificate-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vision-items {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.vision-item {
  text-align: center;
  width: 25%;
  min-width: 200px;
}

.vision-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .intro-content {
    flex-direction: column;
  }
  
  .certificates {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .vision-items {
    flex-direction: column;
    align-items: center;
  }
  
  .vision-item {
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>