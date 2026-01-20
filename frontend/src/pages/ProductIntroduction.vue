<template>
  <div class="product-introduction">
    <h1>产品介绍</h1>
    <div class="modules-grid">
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
      <FeatureModule 
        title="社区医院统管平台" 
        description="统一管理社区医院资源" 
        icon="🏢" 
      />
      <FeatureModule 
        title="互联网医院" 
        description="线上医疗服务解决方案" 
        icon="🌐" 
      />
      <FeatureModule 
        title="库房管理" 
        description="智能库存管理系统" 
        icon="📦" 
      />
    </div>
  </div>
</template>

<script>
import FeatureModule from '../components/FeatureModule.vue';

export default {
  name: 'ProductIntroduction',
  components: {
    FeatureModule
  }
};
</script>

<style scoped>
.product-introduction {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .modules-grid {
    grid-template-columns: 1fr;
  }
}
</style>