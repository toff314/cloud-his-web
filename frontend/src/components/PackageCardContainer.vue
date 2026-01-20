<template>
  <div class="package-card-container">
    <div class="scroll-container">
      <div class="cards-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="scroll-indicators">
      <button class="scroll-btn left" @click="scrollLeft">&#8249;</button>
      <button class="scroll-btn right" @click="scrollRight">&#8250;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageCardContainer',
  methods: {
    scrollLeft() {
      const container = this.$el.querySelector('.scroll-container');
      container.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      const container = this.$el.querySelector('.scroll-container');
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.package-card-container {
  position: relative;
  margin: 2rem 0;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  padding: 1rem 0;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.cards-wrapper {
  display: flex;
  gap: 1.5rem;
  min-width: 100%;
}

.scroll-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.scroll-btn {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.scroll-btn:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .cards-wrapper {
    flex-direction: column;
    align-items: center;
  }
  
  .scroll-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>