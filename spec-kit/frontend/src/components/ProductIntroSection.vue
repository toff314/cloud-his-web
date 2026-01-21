<template>
  <section class="product-intro-section">
    <h2>产品介绍</h2>
    <div class="modules-row">
      <FeatureModule 
        title="智慧云药房" 
        description="门诊无需配备实体药房..." 
        icon="💊" 
      />
      <FeatureModule 
        title="智慧云门诊" 
        description="智能化门诊管理系统" 
        icon="🏥" 
      />
      <FeatureModule 
        title="AI在线开方服务" 
        description="人工智能辅助诊断开方" 
        icon="🤖" 
      />
    </div>
  </section>
</template>

<script>
import FeatureModule from './FeatureModule.vue';

export default {
  name: 'ProductIntroSection',
  components: {
    FeatureModule
  }
};
</script>

<style scoped>
.product-intro-section {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.modules-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .modules-row {
    flex-direction: column;
    align-items: center;
  }
}
</style>