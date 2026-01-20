<template>
  <section class="customer-cases-section">
    <h2>客户案例</h2>
    <div class="cases-upper">
      <CustomerCaseItem 
        v-for="(caseItem, index) in upperCases" 
        :key="'upper-' + index"
        :hospitalName="caseItem.name"
        :logo="caseItem.logo"
      />
    </div>
    <div class="cases-middle">
      <CustomerCaseItem 
        v-for="(caseItem, index) in middleCases" 
        :key="'middle-' + index"
        :hospitalName="caseItem.name"
        :logo="caseItem.logo"
      />
    </div>
  </section>
</template>

<script>
import CustomerCaseItem from './CustomerCaseItem.vue';

export default {
  name: 'CustomerCasesSection',
  components: {
    CustomerCaseItem
  },
  data() {
    return {
      upperCases: [
        { name: '北京协和医院', logo: '../assets/images/hospital-logo-1.jpg' },
        { name: '上海瑞金医院', logo: '../assets/images/hospital-logo-2.jpg' },
        { name: '广州中山医院', logo: '../assets/images/hospital-logo-3.jpg' }
      ],
      middleCases: [
        { name: '深圳人民医院', logo: '../assets/images/hospital-logo-4.jpg' },
        { name: '杭州邵逸夫医院', logo: '../assets/images/hospital-logo-5.jpg' },
        { name: '成都华西医院', logo: '../assets/images/hospital-logo-6.jpg' }
      ]
    };
  }
};
</script>

<style scoped>
.customer-cases-section {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.cases-upper, .cases-middle {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cases-upper, .cases-middle {
    flex-direction: column;
    align-items: center;
  }
}
</style>