<template>
  <div class="solutions-page">
    <h1>解决方案</h1>
    
    <div class="solution-buttons">
      <SolutionButton 
        v-for="(solution, index) in solutions" 
        :key="index"
        :title="solution.title"
        :active="activeSolutionIndex === index"
        @click="selectSolution(index)"
      />
    </div>
    
    <SolutionContent 
      :solution="solutions[activeSolutionIndex]"
    />
  </div>
</template>

<script>
import SolutionButton from '../components/SolutionButton.vue';
import SolutionContent from '../components/SolutionContent.vue';

export default {
  name: 'Solutions',
  components: {
    SolutionButton,
    SolutionContent
  },
  data() {
    return {
      activeSolutionIndex: 0,
      solutions: [
        {
          title: '智慧云门诊',
          image: '../assets/images/smart-outpatient.jpg',
          description: '提供全面的门诊管理解决方案，提高诊疗效率和服务质量。'
        },
        {
          title: '智慧云药房',
          image: '../assets/images/smart-pharmacy.jpg',
          description: '实现药品管理、库存控制和处方处理的智能化。'
        },
        {
          title: '医院HIS对接',
          image: '../assets/images/his-integration.jpg',
          description: '与现有医院信息系统无缝对接，提升数据流转效率。'
        },
        {
          title: 'AI辅诊',
          image: '../assets/images/ai-assist.jpg',
          description: '利用人工智能技术辅助医生进行诊断决策。'
        },
        {
          title: '社区医院合作',
          image: '../assets/images/community-hospital.jpg',
          description: '为社区医院提供一体化管理和服务解决方案。'
        },
        {
          title: '中医馆一键部署',
          image: '../assets/images/tcm-clinic.jpg',
          description: '专为中医馆定制的一站式信息化解决方案。'
        }
      ]
    };
  },
  methods: {
    selectSolution(index) {
      this.activeSolutionIndex = index;
    }
  }
};
</script>

<style scoped>
.solutions-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.solution-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .solution-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>