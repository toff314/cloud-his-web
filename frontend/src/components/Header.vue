<template>
  <header class="header">
    <div class="header-container">
      <!-- Left: Logo -->
      <div class="logo-section">
        <h1 class="logo">智慧云门诊</h1>
      </div>

      <!-- Middle: Navigation Menu -->
      <nav class="navigation-menu">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" :class="{ active: isActiveRoute('/') }">首页</router-link>
          </li>
          <li class="nav-item dropdown">
            <a href="#" @click.prevent="toggleDropdown" :class="{ active: isActiveRoute('/product-introduction') }">
              产品介绍
              <span class="dropdown-arrow">▼</span>
            </a>
            <ul v-if="showDropdown" class="dropdown-menu">
              <li><router-link to="/product-introduction#smart-pharmacy">智慧云药房</router-link></li>
              <li><router-link to="/product-introduction#smart-outpatient">智慧云门诊</router-link></li>
              <li><router-link to="/product-introduction#community-platform">社区医院统管平台</router-link></li>
              <li><router-link to="/product-introduction#internet-hospital">互联网医院</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/solutions" :class="{ active: isActiveRoute('/solutions') }">解决方案</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/customer-cases" :class="{ active: isActiveRoute('/customer-cases') }">客户案例</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" :class="{ active: isActiveRoute('/about-us') }">关于我们</router-link>
          </li>
        </ul>
      </nav>

      <!-- Right: Action Area -->
      <div class="action-area">
        <button class="btn btn-outline">免费试用</button>
        <button class="btn btn-outline">版本套餐</button>
        <button class="btn btn-gray">登录</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault();
      this.showDropdown = !this.showDropdown;
    },
    isActiveRoute(route) {
      return this.$route.path === route;
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    });
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-section {
  flex: 1;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
}

.navigation-menu {
  flex: 2;
  text-align: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.nav-item {
  position: relative;
  margin: 0 1rem;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-item a:hover,
.nav-item a.active {
  background-color: #f0f8ff;
  color: #3498db;
}

.dropdown-arrow {
  font-size: 0.8rem;
  margin-left: 0.3rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 160px;
  z-index: 1001;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
}

.dropdown-menu a:hover {
  background-color: #f0f8ff;
}

.action-area {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.btn-outline {
  background: transparent;
  color: #3498db;
}

.btn-outline:hover {
  background-color: #3498db;
  color: white;
}

.btn-gray {
  background-color: #ccc;
  color: white;
  border-color: #ccc;
}

.btn-gray:hover {
  background-color: #bbb;
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
  }

  .nav-list {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: none;
  }

  .nav-list.active {
    display: flex;
  }

  .action-area {
    order: 3;
    width: 100%;
    justify-content: center;
    padding-top: 1rem;
  }
}
</style>