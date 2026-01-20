<template>
  <div class="customer-cases">
    <h1>客户案例</h1>
    <div class="cases-grid">
      <CustomerCaseItem 
        v-for="(caseItem, index) in customerCases" 
        :key="index"
        :hospitalName="caseItem.name"
        :logo="caseItem.logo"
      />
    </div>
  </div>
</template>

<script>
import CustomerCaseItem from '../components/CustomerCaseItem.vue';

export default {
  name: 'CustomerCases',
  components: {
    CustomerCaseItem
  },
  data() {
    return {
      customerCases: [
        { name: '北京协和医院', logo: '../assets/images/hospital-logo-1.jpg' },
        { name: '上海瑞金医院', logo: '../assets/images/hospital-logo-2.jpg' },
        { name: '广州中山医院', logo: '../assets/images/hospital-logo-3.jpg' },
        { name: '深圳人民医院', logo: '../assets/images/hospital-logo-4.jpg' },
        { name: '杭州邵逸夫医院', logo: '../assets/images/hospital-logo-5.jpg' },
        { name: '成都华西医院', logo: '../assets/images/hospital-logo-6.jpg' },
        { name: '西安交通大学医学院第一附属医院', logo: '../assets/images/hospital-logo-7.jpg' },
        { name: '武汉同济医院', logo: '../assets/images/hospital-logo-8.jpg' },
        { name: '南京鼓楼医院', logo: '../assets/images/hospital-logo-9.jpg' }
      ]
    };
  }
};
</script>

<style scoped>
.customer-cases {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>