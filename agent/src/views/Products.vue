<template>
  <div class="products-page">
    <div class="container">
      <h1 class="page-title">产品介绍</h1>
      <p class="page-subtitle">探索我们的全方位医疗数字化解决方案</p>
      
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="product-icon">
            <div class="icon-placeholder">图标</div>
          </div>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../db'

const products = ref([])

onMounted(async () => {
  products.value = await db.getProducts()
})
</script>

<style scoped>
.products-page {
  padding: 60px 20px;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  color: #000;
}

.page-subtitle {
  font-size: 16px;
  text-align: center;
  color: #666;
  margin-bottom: 60px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.product-card {
  text-align: center;
  padding: 40px 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-icon {
  margin: 0 auto 25px;
}

.icon-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
}

.product-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #000;
}

.product-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 28px;
  }
}
</style>
