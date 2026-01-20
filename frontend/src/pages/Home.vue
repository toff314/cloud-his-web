<template>
  <div class="home">
    <Carousel />
    <ProductIntroSection />
    <SolutionsSection />
    <CustomerCasesSection />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import ProductIntroSection from '../components/ProductIntroSection.vue';
import SolutionsSection from '../components/SolutionsSection.vue';
import CustomerCasesSection from '../components/CustomerCasesSection.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    ProductIntroSection,
    SolutionsSection,
    CustomerCasesSection
  }
};
</script>

<style scoped>
.home {
  width: 100%;
}
</style>