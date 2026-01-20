<template>
  <div class="solutions">
    <h1>解决方案</h1>
    <div class="solutions-container">
      <div class="solution-buttons">
        <button 
          v-for="(solution, index) in solutions" 
          :key="index" 
          :class="['solution-btn', { active: activeSolution === index }]"
          @click="selectSolution(index)"
        >
          {{ solution.name }}
        </button>
      </div>
      
      <div class="solution-content">
        <div class="solution-image">
          <img :src="solutions[activeSolution].image" :alt="solutions[activeSolution].name" />
        </div>
        <div class="solution-description">
          <h2>{{ solutions[activeSolution].name }}</h2>
          <p>{{ solutions[activeSolution].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Solutions',
  data() {
    return {
      activeSolution: 0,
      solutions: [
        {
          name: '智慧云门诊',
          description: '提供智能化门诊服务，提升患者就医体验，优化医疗资源配置。',
          image: '../assets/images/solution1.jpg'
        },
        {
          name: '智慧云药房',
          description: '实现药房自动化管理，提高药品配送效率，保障用药安全。',
          image: '../assets/images/solution2.jpg'
        },
        {
          name: '医院HIS对接',
          description: '与医院信息系统无缝对接，实现数据互通，提升管理效率。',
          image: '../assets/images/solution3.jpg'
        },
        {
          name: 'AI辅诊',
          description: '基于人工智能的辅助诊断系统，提高诊断准确率和效率。',
          image: '../assets/images/solution4.jpg'
        },
        {
          name: '社区医院合作',
          description: '与社区医院建立合作关系，提供技术支持和管理服务。',
          image: '../assets/images/solution5.jpg'
        }
      ]
    };
  },
  methods: {
    selectSolution(index) {
      this.activeSolution = index;
    }
  }
};
</script>

<style scoped>
.solutions {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.solutions h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.solutions-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.solution-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.solution-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.solution-btn:hover {
  border-color: #42b983;
  color: #42b983;
}

.solution-btn.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

.solution-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.solution-image {
  width: 100%;
  max-width: 600px;
}

.solution-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.solution-description {
  text-align: center;
  max-width: 600px;
}

.solution-description h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.solution-description p {
  line-height: 1.6;
  color: #333;
}

@media (min-width: 768px) {
  .solutions-container {
    flex-direction: row;
  }
  
  .solution-buttons {
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
  }
  
  .solution-content {
    width: 70%;
    align-items: flex-start;
  }
  
  .solution-description {
    text-align: left;
  }
}
</style>