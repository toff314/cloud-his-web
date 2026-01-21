<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <Header />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <RouterView />
    </main>
    
    <!-- 页脚 -->
    <Footer />
    
    <!-- 右侧悬浮导航 -->
    <FloatingNav />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FloatingNav from './components/FloatingNav.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin-top: 70px;
}
</style>
