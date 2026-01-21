<template>
  <div class="solutions-page">
    <div class="container">
      <h1 class="page-title">解决方案</h1>
      <p class="page-subtitle">为您提供专业的医疗行业解决方案</p>
      
      <!-- 解决方案按钮区域 -->
      <div class="solution-tabs">
        <button
          v-for="(solution, index) in solutions"
          :key="solution.id"
          :class="{ active: currentSolution === index }"
          @click="currentSolution = index"
          class="solution-tab"
        >
          {{ solution.name }}
        </button>
      </div>
      
      <!-- 解决方案展示区域 -->
      <div class="solution-display" :key="currentSolution">
        <div class="solution-image-placeholder">
          <span>{{ currentSolutionData?.name || '解决方案展示' }}</span>
        </div>
        <div class="solution-info">
          <h2>{{ currentSolutionData?.name }}</h2>
          <p>{{ currentSolutionData?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import db from '../db'

const solutions = ref([])
const currentSolution = ref(0)

const currentSolutionData = computed(() => {
  return solutions.value[currentSolution.value]
})

onMounted(async () => {
  solutions.value = await db.getSolutions()
})
</script>

<style scoped>
.solutions-page {
  padding: 60px 20px;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  color: #000;
}

.page-subtitle {
  font-size: 16px;
  text-align: center;
  color: #666;
  margin-bottom: 50px;
}

/* 解决方案按钮区域 */
.solution-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

.solution-tab {
  padding: 12px 30px;
  border: 2px solid #ddd;
  background-color: transparent;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.solution-tab:hover {
  border-color: #000;
  color: #000;
}

.solution-tab.active {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

/* 解决方案展示区域 */
.solution-display {
  text-align: center;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.solution-image-placeholder {
  width: 100%;
  max-width: 900px;
  height: 450px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
  border-radius: 8px;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 24px;
  font-weight: 500;
}

.solution-info {
  max-width: 800px;
  margin: 0 auto;
}

.solution-info h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
}

.solution-info p {
  font-size: 16px;
  color: #666;
  line-height: 2;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 28px;
  }
  
  .solution-tabs {
    flex-direction: column;
  }
  
  .solution-tab {
    width: 100%;
  }
  
  .solution-image-placeholder {
    height: 250px;
    font-size: 18px;
  }
  
  .solution-info h2 {
    font-size: 24px;
  }
  
  .solution-info p {
    font-size: 14px;
  }
}
</style>
