<template>
  <div class="product-introduction">
    <h1>产品介绍</h1>
    <div class="product-grid">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <div class="product-icon">
          <img :src="product.icon" :alt="product.name" />
        </div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductIntroduction',
  data() {
    return {
      products: [
        {
          icon: '../assets/images/product1.png',
          name: '智慧云药房',
          description: '门诊无需配备实体药房，通过云端系统实现药品管理和配送。'
        },
        {
          icon: '../assets/images/product2.png',
          name: '智慧云门诊',
          description: '提供智能化门诊服务，提升患者就医体验。'
        },
        {
          icon: '../assets/images/product3.png',
          name: 'AI在线开方服务',
          description: '基于人工智能的在线处方开具服务。'
        },
        {
          icon: '../assets/images/product4.png',
          name: '社区医院统管平台',
          description: '统一管理社区医院各项业务。'
        },
        {
          icon: '../assets/images/product5.png',
          name: '互联网医院',
          description: '搭建线上医院平台，提供远程医疗服务。'
        },
        {
          icon: '../assets/images/product6.png',
          name: '库房管理',
          description: '智能化的医药库房管理系统。'
        }
      ]
    };
  }
};
</script>

<style scoped>
.product-introduction {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-introduction h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-card h3 {
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
}

.product-card p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>