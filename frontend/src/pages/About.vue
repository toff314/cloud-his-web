<template>
  <div class="about">
    <section class="company-intro">
      <h2>公司简介</h2>
      <div class="intro-content">
        <div class="intro-text">
          <p>公司简介文案... 我们是一家专注于医疗信息化解决方案的高科技企业，致力于通过创新技术改善医疗服务质量和效率。我们的团队由经验丰富的医疗专家和技术工程师组成，拥有多年的行业经验和深厚的技术积累。</p>
          <p>我们坚持以患者为中心，以技术创新为驱动，不断研发和完善产品，为医疗机构提供高效、便捷、安全的信息化解决方案。我们的产品已在全国多家知名医院成功应用，获得了广泛好评。</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/company-image.jpg" alt="公司形象图" />
        </div>
      </div>
    </section>

    <section class="honors">
      <h2>荣誉资质</h2>
      <div class="certificates">
        <div class="certificate-card" v-for="(cert, index) in certificates" :key="index">
          <div class="cert-image">
            <img :src="cert.image" :alt="cert.name" />
          </div>
          <h3>{{ cert.name }}</h3>
        </div>
      </div>
    </section>

    <section class="vision">
      <h2>公司愿景</h2>
      <div class="vision-cards">
        <div class="vision-card" v-for="(item, index) in visionItems" :key="index">
          <div class="vision-icon">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      certificates: [
        {
          image: '../assets/images/cert1.jpg',
          name: '社区医院多源处方智能审方与尚配协同方法及系统'
        },
        {
          image: '../assets/images/cert2.jpg',
          name: '社区医院多源处方智能审方与尚配协同方法及系统'
        },
        {
          image: '../assets/images/cert3.jpg',
          name: '兴邦智慧云药房库存智能预警系统'
        },
        {
          image: '../assets/images/cert4.jpg',
          name: '软著证书二'
        }
      ],
      visionItems: [
        {
          icon: '../assets/images/vision1.png',
          title: '服务至上',
          description: '始终以客户需求为导向，提供优质的产品和服务'
        },
        {
          icon: '../assets/images/vision2.png',
          title: '中医文化传承',
          description: '结合传统中医理念与现代科技，推动中医药事业发展'
        },
        {
          icon: '../assets/images/vision3.png',
          title: '提升门诊效率',
          description: '通过智能化手段，显著提升门诊工作效率'
        }
      ]
    };
  }
};
</script>

<style scoped>
.about {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.company-intro,
.honors,
.vision {
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.company-intro h2,
.honors h2,
.vision h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
}

.intro-content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.intro-text {
  flex: 1;
  line-height: 1.8;
  color: #333;
}

.intro-text p {
  margin-bottom: 1rem;
}

.intro-image {
  flex: 1;
  text-align: center;
}

.intro-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.certificates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.certificate-card {
  text-align: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.cert-image {
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.certificate-card h3 {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #2c3e50;
}

.vision-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.vision-card {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.vision-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vision-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.vision-card h3 {
  margin: 0.5rem 0;
  color: #2c3e50;
}

.vision-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .intro-content {
    flex-direction: column;
  }
  
  .certificates,
  .vision-cards {
    grid-template-columns: 1fr;
  }
}
</style>