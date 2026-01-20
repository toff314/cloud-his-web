<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
    <RightFloatingNav />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import RightFloatingNav from './components/RightFloatingNav.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    RightFloatingNav
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>