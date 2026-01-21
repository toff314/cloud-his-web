<template>
  <div class="customers-page">
    <div class="container">
      <h1 class="page-title">客户案例</h1>
      <p class="page-subtitle">携手医疗行业客户，共创数字化未来</p>
      
      <div class="customers-grid">
        <div v-for="customer in customers" :key="customer.id" class="customer-card">
          <div class="customer-left">
            <div class="customer-logo-placeholder">
              <span>Logo</span>
            </div>
          </div>
          <div class="customer-right">
            <h3>{{ customer.name }}</h3>
            <p>{{ customer.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../db'

const customers = ref([])

onMounted(async () => {
  customers.value = await db.getCustomers()
})
</script>

<style scoped>
.customers-page {
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

.customers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.customer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 40px 30px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.customer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.customer-left {
  margin-bottom: 25px;
}

.customer-logo-placeholder {
  width: 120px;
  height: 120px;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
}

.customer-right {
  text-align: center;
}

.customer-right h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #000;
  line-height: 1.4;
}

.customer-right p {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .customers-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 28px;
  }
}
</style>
