<template>
  <section class="solutions-section">
    <h2>解决方案</h2>
    <div class="solutions-row">
      <SolutionButton 
        v-for="(solution, index) in solutions" 
        :key="index"
        :title="solution.title"
        :active="index === 0"
      />
    </div>
  </section>
</template>

<script>
import SolutionButton from './SolutionButton.vue';

export default {
  name: 'SolutionsSection',
  components: {
    SolutionButton
  },
  data() {
    return {
      solutions: [
        { title: '智慧云门诊' },
        { title: '智慧云药房' },
        { title: '医院HIS对接' },
        { title: 'AI辅诊' },
        { title: '社区医院合作' }
      ]
    };
  }
};
</script>

<style scoped>
.solutions-section {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: #f9f9f9;
}

.solutions-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .solutions-row {
    flex-direction: column;
    align-items: center;
  }
}
</style>
