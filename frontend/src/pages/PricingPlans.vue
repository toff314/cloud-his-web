<template>
  <div class="pricing-plans">
    <h1>请选择您喜欢的套餐</h1>
    <p>共6个，请滑动查看</p>
    
    <PackageCardContainer>
      <PackageCard 
        packageName="包月套餐" 
        price="￥100元" 
        validity="30天" 
        description="适用于初创门诊的基础版套餐，包含核心功能模块。"
      />
      <PackageCard 
        packageName="包年套餐" 
        price="￥200元" 
        validity="365天" 
        description="适用于成熟门诊的高级版套餐，包含全部功能模块。"
      />
    </PackageCardContainer>
    
    <div class="comparison-section">
      <h2>各版本套餐对比</h2>
      <ComparisonTable />
    </div>
  </div>
</template>

<script>
import PackageCardContainer from '../components/PackageCardContainer.vue';
import PackageCard from '../components/PackageCard.vue';
import ComparisonTable from '../components/ComparisonTable.vue';

export default {
  name: 'PricingPlans',
  components: {
    PackageCardContainer,
    PackageCard,
    ComparisonTable
  }
};
</script>

<style scoped>
.pricing-plans {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.comparison-section {
  margin-top: 3rem;
}
</style>