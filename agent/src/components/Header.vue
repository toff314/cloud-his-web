<template>
  <header class="header">
    <div class="header-container">
      <!-- 左侧Logo -->
      <div class="header-left">
        <RouterLink to="/" class="logo">
          智慧云门诊
        </RouterLink>
      </div>
      
      <!-- 中部导航菜单 -->
      <nav class="header-nav">
        <RouterLink to="/" class="nav-item" active-class="active">首页</RouterLink>
        
        <div class="nav-item dropdown">
          <span class="dropdown-toggle">产品介绍</span>
          <div class="dropdown-menu">
            <RouterLink :to="{ path: '/products', hash: '#pharmacy' }" class="dropdown-item">智慧云药房</RouterLink>
            <RouterLink :to="{ path: '/products', hash: '#clinic' }" class="dropdown-item">智慧云门诊</RouterLink>
            <RouterLink :to="{ path: '/products', hash: '#community' }" class="dropdown-item">社区医院统管平台</RouterLink>
            <RouterLink :to="{ path: '/products', hash: '#internet' }" class="dropdown-item">互联网医院</RouterLink>
          </div>
        </div>
        
        <RouterLink to="/solutions" class="nav-item" active-class="active">解决方案</RouterLink>
        <RouterLink to="/customers" class="nav-item" active-class="active">客户案例</RouterLink>
        <RouterLink to="/about" class="nav-item" active-class="active">关于我们</RouterLink>
      </nav>
      
      <!-- 右侧操作区 -->
      <div class="header-right">
        <RouterLink to="/free-trial" class="btn btn-primary">免费试用</RouterLink>
        <RouterLink to="/packages" class="btn btn-primary">版本套餐</RouterLink>
        <RouterLink to="/login" class="btn btn-gray">登录</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 左侧Logo */
.header-left .logo {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
}

/* 中部导航 */
.header-nav {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-item {
  font-size: 16px;
  color: #333;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-item:hover,
.nav-item.active {
  color: #000;
  font-weight: 600;
}

/* 下拉菜单 */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: block;
  padding: 5px 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -20px;
  min-width: 200px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1001;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  color: #000;
}

/* 右侧操作区 */
.header-right {
  display: flex;
  gap: 15px;
  align-items: center;
}

.btn {
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
}

.btn-primary:hover {
  background-color: #333;
}

.btn-gray {
  background-color: transparent;
  color: #999;
  border: 1px solid #ccc;
}

.btn-gray:hover {
  color: #000;
  border-color: #000;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-nav {
    display: none;
  }
  
  .header-right {
    display: none;
  }
}
</style>
