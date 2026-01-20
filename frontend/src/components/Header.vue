<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-left">
        <div class="logo">智慧云门诊</div>
      </div>
      <div class="nav-center">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">首页</router-link>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle">产品介绍</a>
            <ul class="dropdown-menu">
              <li><router-link to="/product-introduction" class="dropdown-item">智慧云药房</router-link></li>
              <li><router-link to="/product-introduction" class="dropdown-item">智慧云门诊</router-link></li>
              <li><router-link to="/product-introduction" class="dropdown-item">社区医院统管平台</router-link></li>
              <li><router-link to="/product-introduction" class="dropdown-item">互联网医院</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/solutions" class="nav-link" active-class="active">解决方案</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/customer-cases" class="nav-link" active-class="active">客户案例</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link" active-class="active">关于我们</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <button class="btn btn-trial">免费试用</button>
        <button class="btn btn-pricing">版本套餐</button>
        <button class="btn btn-login">登录</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  padding: 0.5rem 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  position: relative;
  margin: 0 1rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  background-color: #f0f0f0;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-radius: 4px;
  list-style: none;
  padding: 0.5rem 0;
  z-index: 1001;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;
  font-size: 0.9rem;
}

.btn-trial {
  background-color: #42b983;
  color: white;
}

.btn-pricing {
  background-color: #34495e;
  color: white;
}

.btn-login {
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
}
</style>