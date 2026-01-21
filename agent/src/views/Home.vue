<template>
  <div class="home-page">
    <!-- 轮播图区域 -->
    <section class="banner-section">
      <div class="banner-container">
        <div class="banner-slider" :style="{ transform: `translateX(-${currentBanner * 100}%)` }">
          <div v-for="(banner, index) in banners" :key="banner.id" class="banner-item">
            <div class="banner-placeholder">
              <h2>{{ banner.title }}</h2>
            </div>
          </div>
        </div>
        <div class="banner-dots">
          <span
            v-for="(banner, index) in banners"
            :key="banner.id"
            :class="{ active: index === currentBanner }"
            @click="currentBanner = index"
          ></span>
        </div>
      </div>
    </section>

    <!-- 产品介绍区域（取1排3个） -->
    <section class="products-preview section">
      <div class="container">
        <h2 class="section-title">产品介绍</h2>
        <div class="products-grid">
          <RouterLink 
            v-for="product in products.slice(0, 3)" 
            :key="product.id" 
            :to="'/products'" 
            class="product-card"
          >
            <div class="product-icon">
              <div class="icon-placeholder">图标</div>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </RouterLink>
        </div>
        <div class="section-footer">
          <RouterLink to="/products" class="btn-more">查看更多</RouterLink>
        </div>
      </div>
    </section>

    <!-- 解决方案区域（取5个按钮，1个展示） -->
    <section class="solutions-preview section">
      <div class="container">
        <h2 class="section-title">解决方案</h2>
        <div class="solution-tabs">
          <button
            v-for="(solution, index) in solutions.slice(0, 5)"
            :key="solution.id"
            :class="{ active: currentSolution === index }"
            @click="currentSolution = index"
            class="solution-tab"
          >
            {{ solution.name }}
          </button>
        </div>
        <div class="solution-display">
          <div class="solution-image-placeholder">
            <span>{{ currentSolutionData?.name || '解决方案展示' }}</span>
          </div>
          <p class="solution-desc">{{ currentSolutionData?.description }}</p>
        </div>
        <div class="section-footer">
          <RouterLink to="/solutions" class="btn-more">查看全部</RouterLink>
        </div>
      </div>
    </section>

    <!-- 客户案例区域（取上方和中间部分） -->
    <section class="customers-preview section">
      <div class="container">
        <h2 class="section-title">客户案例</h2>
        <div class="customers-grid">
          <div v-for="customer in customers.slice(0, 3)" :key="customer.id" class="customer-card">
            <div class="customer-logo-placeholder">
              <span>Logo</span>
            </div>
            <h4>{{ customer.name }}</h4>
            <p>{{ customer.description }}</p>
          </div>
        </div>
        <div class="section-footer">
          <RouterLink to="/customers" class="btn-more">查看更多</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import db from '../db'

const banners = ref([])
const products = ref([])
const solutions = ref([])
const customers = ref([])
const currentBanner = ref(0)
const currentSolution = ref(0)
let bannerInterval = null

const currentSolutionData = computed(() => {
  return solutions.value[currentSolution.value]
})

onMounted(async () => {
  banners.value = await db.getBanners()
  products.value = await db.getProducts()
  solutions.value = await db.getSolutions()
  customers.value = await db.getCustomers()
  
  // 启动轮播
  startBannerAutoPlay()
})

onUnmounted(() => {
  stopBannerAutoPlay()
})

const startBannerAutoPlay = () => {
  bannerInterval = setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.value.length
  }, 5000)
}

const stopBannerAutoPlay = () => {
  if (bannerInterval) {
    clearInterval(bannerInterval)
    bannerInterval = null
  }
}
</script>

<style scoped>
.home-page {
  background-color: #fff;
}

.section {
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: #000;
}

.section-footer {
  text-align: center;
  margin-top: 30px;
}

.btn-more {
  display: inline-block;
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-more:hover {
  background-color: #333;
}

/* 轮播图区域 */
.banner-section {
  padding: 0;
  position: relative;
}

.banner-container {
  max-width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.banner-slider {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.banner-item {
  min-width: 100%;
  height: 100%;
}

.banner-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-placeholder h2 {
  font-size: 36px;
  color: #fff;
  font-weight: 600;
}

.banner-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.banner-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.banner-dots span.active {
  background-color: #fff;
}

/* 产品介绍区域（预览） */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-card {
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.product-icon {
  margin: 0 auto 20px;
}

.icon-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.product-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #000;
}

.product-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 解决方案区域（预览） */
.solution-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.solution-tab {
  padding: 10px 25px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.solution-tab:hover,
.solution-tab.active {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.solution-display {
  text-align: center;
}

.solution-image-placeholder {
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
}

.solution-desc {
  font-size: 16px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* 客户案例区域（预览） */
.customers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.customer-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
}

.customer-logo-placeholder {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.customer-card h4 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #000;
}

.customer-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner-container {
    height: 300px;
  }
  
  .banner-placeholder h2 {
    font-size: 24px;
  }
  
  .products-grid,
  .customers-grid {
    grid-template-columns: 1fr;
  }
  
  .solution-tabs {
    flex-direction: column;
  }
  
  .solution-tab {
    width: 100%;
  }
  
  .solution-image-placeholder {
    height: 250px;
  }
}
</style>
