<template>
  <div class="packages-page">
    <div class="container">
      <h1 class="page-title">请选择您喜欢的套餐</h1>
      <p class="page-subtitle">共6个，请滑动查看</p>
      
      <!-- 套餐卡片横向滑动容器 -->
      <div class="packages-slider">
        <div 
          v-for="pkg in packages" 
          :key="pkg.id" 
          :class="['package-card', { active: selectedPackage === pkg.id, hover: hoveredPackage === pkg.id }]"
          @mouseenter="hoveredPackage = pkg.id"
          @mouseleave="hoveredPackage = null"
          @click="selectedPackage = pkg.id"
        >
          <div class="package-name">{{ pkg.name }}</div>
          <div class="package-price">￥{{ pkg.price }}元</div>
          <div class="package-duration">有效期：{{ pkg.duration }}天</div>
          <div class="package-desc">{{ pkg.description }}</div>
          <button class="package-btn" @click.stop="selectPackage(pkg)">
            {{ selectedPackage === pkg.id ? '已选择' : '请选择' }}
          </button>
        </div>
      </div>
      
      <!-- 套餐对比表格 -->
      <div class="comparison-section">
        <h2 class="section-title">各版本套餐对比</h2>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="feature-column">功能</th>
                <th v-for="pkg in packages" :key="pkg.id" class="package-column">{{ pkg.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-name">系统用户数</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'users') }}</td>
              </tr>
              <tr>
                <td class="feature-name">存储空间</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'storage') }}</td>
              </tr>
              <tr>
                <td class="feature-name">门诊管理</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'clinic') }}</td>
              </tr>
              <tr>
                <td class="feature-name">药房管理</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'pharmacy') }}</td>
              </tr>
              <tr>
                <td class="feature-name">AI辅诊功能</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'ai') }}</td>
              </tr>
              <tr>
                <td class="feature-name">互联网医院</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'online') }}</td>
              </tr>
              <tr>
                <td class="feature-name">数据统计报表</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'report') }}</td>
              </tr>
              <tr>
                <td class="feature-name">技术支持</td>
                <td v-for="pkg in packages" :key="pkg.id" class="feature-value">{{ getFeatureValue(pkg.id, 'support') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import db from '../db'

const router = useRouter()
const packages = ref([])
const selectedPackage = ref(null)
const hoveredPackage = ref(null)

// 特征数据映射
const featureData = {
  1: { users: '20人', storage: '10GB', clinic: '√', pharmacy: '√', ai: '-', online: '-', report: '基础', support: '电话' },
  2: { users: '50人', storage: '50GB', clinic: '√', pharmacy: '√', ai: '√', online: '-', report: '标准', support: '电话+在线' },
  3: { users: '100人', storage: '100GB', clinic: '√', pharmacy: '√', ai: '√', online: '√', report: '高级', support: '7x24' },
  4: { users: '不限', storage: '不限', clinic: '√', pharmacy: '√', ai: '√', online: '√', report: '定制', support: '专属' }
}

onMounted(async () => {
  packages.value = await db.getPackages()
})

const getFeatureValue = (packageId, feature) => {
  return featureData[packageId]?.[feature] || '-'
}

const selectPackage = (pkg) => {
  selectedPackage.value = pkg.id
  alert(`您选择了：${pkg.name}`)
  router.push('/free-trial')
}
</script>

<style scoped>
.packages-page {
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

/* 套餐卡片横向滑动容器 */
.packages-slider {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 10px;
  margin-bottom: 80px;
  scrollbar-width: thin;
  scrollbar-color: #ddd #f5f5f5;
}

.packages-slider::-webkit-scrollbar {
  height: 8px;
}

.packages-slider::-webkit-scrollbar-track {
  background: #f5f5f5;
  border-radius: 4px;
}

.packages-slider::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 4px;
}

.package-card {
  flex: 0 0 300px;
  padding: 40px 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid transparent;
}

.package-card.hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.package-card.active {
  border-color: #000;
  background-color: #fff;
}

.package-name {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}

.package-price {
  font-size: 32px;
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 15px;
}

.package-duration {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}

.package-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
  min-height: 48px;
}

.package-btn {
  width: 100%;
  padding: 12px 30px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.package-btn:hover {
  background-color: #333;
}

.package-card.active .package-btn {
  background-color: #333;
}

/* 套餐对比表格 */
.comparison-section {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 50px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: #000;
}

.comparison-table-wrapper {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 18px 20px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.comparison-table th {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  background-color: #fafafa;
}

.comparison-table th.feature-column {
  background-color: #f5f5f5;
  min-width: 150px;
}

.comparison-table th.package-column {
  min-width: 150px;
}

.feature-name {
  font-size: 14px;
  color: #666;
  text-align: left;
  font-weight: 500;
}

.feature-value {
  font-size: 14px;
  color: #333;
}

.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

.comparison-table tbody tr:hover {
  background-color: #fafafa;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 28px;
  }
  
  .packages-slider {
    gap: 20px;
  }
  
  .package-card {
    flex: 0 0 280px;
  }
  
  .comparison-section {
    padding: 30px 15px;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 12px 10px;
    font-size: 12px;
  }
  
  .feature-name {
    min-width: 120px;
  }
}
</style>
