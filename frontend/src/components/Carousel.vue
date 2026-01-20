<template>
  <div class="carousel-container">
    <div class="carousel">
      <div 
        class="slide" 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="{ active: currentIndex === index }"
      >
        <img :src="slide.image" :alt="slide.title" />
        <div class="slide-content">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
      
      <button class="nav-btn prev" @click="prevSlide">&#10094;</button>
      <button class="nav-btn next" @click="nextSlide">&#10095;</button>
      
      <div class="indicators">
        <span 
          v-for="(slide, index) in slides" 
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          title: '智慧云门诊解决方案',
          description: '全面提升门诊运营效率，优化患者就医体验',
          image: '../assets/images/carousel-slide-1.jpg'
        },
        {
          title: 'AI辅助诊疗系统',
          description: '智能诊断辅助，提高诊疗准确性和效率',
          image: '../assets/images/carousel-slide-2.jpg'
        },
        {
          title: '云端药房管理',
          description: '实现药品库存、采购、销售全流程数字化管理',
          image: '../assets/images/carousel-slide-3.jpg'
        }
      ],
      intervalId: null
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
  max-width: 80%;
}

.slide-content h2 {
  margin-top: 0;
  font-size: 2rem;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.indicators span.active {
  background-color: white;
}

@media (max-width: 768px) {
  .carousel-container {
    height: 300px;
  }
  
  .slide-content h2 {
    font-size: 1.5rem;
  }
  
  .slide-content {
    padding: 1rem;
  }
}
</style>