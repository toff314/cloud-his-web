<template>
  <div class="customer-cases">
    <h1>客户案例</h1>
    <div class="cases-grid">
      <div 
        v-for="(customer, index) in customers" 
        :key="index" 
        class="case-card"
      >
        <div class="case-logo">
          <img :src="customer.logo" :alt="customer.name" />
        </div>
        <h3>{{ customer.name }}</h3>
        <p>{{ customer.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerCases',
  data() {
    return {
      customers: [
        {
          logo: '../assets/images/customer1.png',
          name: '北京第一人民医院',
          description: '成功实施智慧云门诊系统，显著提升了门诊效率和患者满意度。'
        },
        {
          logo: '../assets/images/customer2.png',
          name: '上海中山医院',
          description: '部署智能药房管理系统，大幅提高了药品配送效率和准确性。'
        },
        {
          logo: '../assets/images/customer3.png',
          name: '广州南方医院',
          description: '采用远程医疗解决方案，扩大了医疗服务覆盖范围。'
        },
        {
          logo: '../assets/images/customer4.png',
          name: '深圳人民医院',
          description: '实施AI辅诊系统，提高了诊断准确率和效率。'
        },
        {
          logo: '../assets/images/customer5.png',
          name: '杭州第一医院',
          description: '部署社区医院统管平台，实现了统一管理和资源共享。'
        },
        {
          logo: '../assets/images/customer6.png',
          name: '成都华西医院',
          description: '采用互联网医院解决方案，提供了便捷的线上医疗服务。'
        }
      ]
    };
  }
};
</script>

<style scoped>
.customer-cases {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.customer-cases h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.case-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.case-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.case-logo img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.case-card h3 {
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
}

.case-card p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>