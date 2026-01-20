<template>
  <div class="comparison-table-container">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>功能/权限</th>
          <th>VIP套餐</th>
          <th>尊享套餐</th>
          <th>基础套餐</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(feature, index) in features" :key="index">
          <td>{{ feature.name }}</td>
          <td>
            <span v-if="feature.vip !== undefined">
              {{ feature.vip === true ? '✓' : feature.vip || '' }}
            </span>
          </td>
          <td>
            <span v-if="feature.premium !== undefined">
              {{ feature.premium === true ? '✓' : feature.premium || '' }}
            </span>
          </td>
          <td>
            <span v-if="feature.basic !== undefined">
              {{ feature.basic === true ? '✓' : feature.basic || '' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComparisonTable',
  data() {
    return {
      features: [
        { name: '用户账户数量', vip: '无限制', premium: '最多100个', basic: '最多10个' },
        { name: '存储空间', vip: '1TB', premium: '100GB', basic: '10GB' },
        { name: '技术支持', vip: true, premium: true, basic: '邮件支持' },
        { name: 'API调用次数', vip: '无限制', premium: '每月10万次', basic: '每月1千次' },
        { name: '自定义域名', vip: true, premium: true, basic: false },
        { name: '数据分析报告', vip: true, premium: true, basic: false },
        { name: '多语言支持', vip: true, premium: true, basic: false },
        { name: '高级安全功能', vip: true, premium: false, basic: false },
        { name: '专属客户经理', vip: true, premium: false, basic: false }
      ]
    };
  }
};
</script>

<style scoped>
.comparison-table-container {
  overflow-x: auto;
  margin-top: 1rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  min-width: 600px;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: center;
  border: 1px solid #ddd;
}

.comparison-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  position: sticky;
  top: 0;
}

.comparison-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.comparison-table tr:hover {
  background-color: #f5f5f5;
}

.comparison-table td:first-child {
  text-align: left;
  font-weight: bold;
  background-color: #fff;
}

@media (max-width: 768px) {
  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>