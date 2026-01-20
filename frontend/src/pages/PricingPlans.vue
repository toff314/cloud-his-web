<template>
  <div class="pricing-plans">
    <h1>请选择您喜欢的套餐</h1>
    <p>共6个，请滑动查看</p>
    
    <div class="package-container">
      <div class="package-card" v-for="(pkg, index) in packages" :key="index" :class="{ selected: selectedPackage === index }" @click="selectPackage(index)">
        <h3>{{ pkg.name }}</h3>
        <div class="price"><span class="currency">￥</span>{{ pkg.price }}<span class="unit">元</span></div>
        <div class="validity">{{ pkg.validity }}</div>
        <p class="description">{{ pkg.description }}</p>
        <button class="select-btn" @click.stop="selectPackageAction(pkg)">请选择</button>
      </div>
    </div>
    
    <div class="comparison-table">
      <h2>各版本套餐对比</h2>
      <table>
        <thead>
          <tr>
            <th>功能/权限</th>
            <th v-for="(pkg, index) in packages" :key="'header-' + index">{{ pkg.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(feature, fIndex) in features" :key="'feature-' + fIndex">
            <td>{{ feature.name }}</td>
            <td v-for="(pkg, pIndex) in packages" :key="'cell-' + pIndex + '-' + fIndex">
              <span v-if="pkg.features[fIndex] === true">✓</span>
              <span v-else-if="typeof pkg.features[fIndex] === 'number'">{{ pkg.features[fIndex] }}</span>
              <span v-else-if="pkg.features[fIndex]">{{ pkg.features[fIndex] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingPlans',
  data() {
    return {
      selectedPackage: null,
      packages: [
        {
          name: '包月套餐',
          price: '100',
          validity: '30天',
          description: '适合小型诊所的基础功能套餐，包含核心管理功能。',
          features: [true, 5, '基础支持', true, false, '邮件']
        },
        {
          name: '包年套餐',
          price: '200',
          validity: '365天',
          description: '适合中型医院的全面功能套餐，包含高级分析功能。',
          features: [true, 50, '优先支持', true, true, '电话+邮件']
        },
        {
          name: 'VIP套餐',
          price: '500',
          validity: '365天',
          description: '适合大型医院的定制化功能套餐，包含专属客服。',
          features: [true, 200, '专属支持', true, true, '专属经理']
        },
        {
          name: '尊享套餐',
          price: '1000',
          validity: '365天',
          description: '适合连锁医疗机构的全方位解决方案。',
          features: [true, 1000, '专属支持', true, true, '专属经理+现场服务']
        }
      ],
      features: [
        { name: '用户账户数量' },
        { name: '存储空间(GB)' },
        { name: '技术支持' },
        { name: '报表功能' },
        { name: 'API访问' },
        { name: '客户服务方式' }
      ]
    };
  },
  methods: {
    selectPackage(index) {
      this.selectedPackage = index;
    },
    selectPackageAction(pkg) {
      alert(`您选择了${pkg.name}，价格为￥${pkg.price}元，有效期${pkg.validity}`);
    }
  }
};
</script>

<style scoped>
.pricing-plans {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-plans h1 {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.pricing-plans p {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
}

.package-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 0;
  margin-bottom: 3rem;
  scrollbar-width: thin;
}

.package-card {
  min-width: 250px;
  flex: 0 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.package-card.selected {
  border: 2px solid #42b983;
  box-shadow: 0 6px 12px rgba(66, 185, 131, 0.2);
}

.package-card h3 {
  margin: 0 0 1rem;
  color: #2c3e50;
  font-size: 1.3rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 1rem 0;
}

.currency {
  font-size: 1.2rem;
  margin-right: 0.2rem;
}

.unit {
  font-size: 1rem;
  color: #666;
}

.validity {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.select-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.select-btn:hover {
  background-color: #359c6d;
}

.comparison-table {
  margin-top: 3rem;
}

.comparison-table h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 1rem;
  text-align: center;
  border: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #2c3e50;
}

tr:nth-child(even) {
  background-color: #f8f9fa;
}

tr:hover {
  background-color: #e9f7ef;
}

@media (max-width: 768px) {
  .package-container {
    flex-direction: column;
    align-items: center;
  }
  
  .package-card {
    min-width: 90%;
    max-width: 400px;
  }
  
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>