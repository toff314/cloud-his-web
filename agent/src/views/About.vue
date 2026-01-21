<template>
  <div class="about-page">
    <!-- 公司简介区域 -->
    <section class="company-intro section">
      <div class="container">
        <h2 class="section-title">公司简介</h2>
        <div class="intro-content">
          <div class="intro-text">
            <p>{{ config.company_introduction }}</p>
            <p>智慧云门诊科技有限公司是一家专注于医疗行业数字化转型的高科技企业。我们致力于通过云计算、大数据、人工智能等前沿技术，为医院、中医馆、社区卫生院等医疗机构提供全方位的数字化解决方案。</p>
            <p>我们的产品涵盖智慧云门诊、智慧云药房、AI辅诊系统、互联网医院等多个领域，帮助医疗机构提升运营效率，改善患者体验，降低运营成本。</p>
          </div>
          <div class="intro-image">
            <div class="image-placeholder">
              <span>公司图片</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 荣誉资质区域 -->
    <section class="honors section">
      <div class="container">
        <h2 class="section-title">荣誉资质</h2>
        <div class="honors-grid">
          <div v-for="honor in honors" :key="honor.id" class="honor-card">
            <div class="honor-image-placeholder">
              <span>证书</span>
            </div>
            <h4>{{ honor.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司愿景区域 -->
    <section class="vision section">
      <div class="container">
        <h2 class="section-title">公司愿景</h2>
        <div class="vision-grid">
          <div v-for="vision in visions" :key="vision.id" class="vision-card">
            <div class="vision-image-placeholder">
              <span>{{ vision.title }}</span>
            </div>
            <h4>{{ vision.title }}</h4>
            <p>{{ vision.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../db'

const config = ref({
  company_introduction: ''
})
const honors = ref([])
const visions = ref([])

onMounted(async () => {
  const data = await db.getConfig()
  config.value = data
  honors.value = await db.getHonors()
  visions.value = await db.getVisions()
})
</script>

<style scoped>
.about-page {
  background-color: #fff;
}

.section {
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
  color: #000;
}

/* 公司简介区域 */
.intro-content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.intro-text {
  flex: 1;
}

.intro-text p {
  font-size: 16px;
  color: #666;
  line-height: 2;
  margin-bottom: 20px;
}

.intro-image {
  flex: 0 0 400px;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
}

/* 荣誉资质区域 */
.honors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.honor-card {
  text-align: center;
}

.honor-image-placeholder {
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
}

.honor-card h4 {
  font-size: 14px;
  font-weight: 500;
  color: #000;
  line-height: 1.5;
}

/* 公司愿景区域 */
.vision-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.vision-card {
  text-align: center;
}

.vision-image-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
  font-weight: 500;
}

.vision-card h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #000;
}

.vision-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section {
    padding: 50px 15px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .intro-content {
    flex-direction: column-reverse;
    gap: 30px;
  }
  
  .intro-image {
    flex: none;
    width: 100%;
  }
  
  .honors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .vision-grid {
    grid-template-columns: 1fr;
  }
}
</style>
