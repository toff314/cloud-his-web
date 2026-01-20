<template>
  <div class="home">
    <!-- Carousel Section -->
    <section class="carousel-section">
      <div class="carousel-container">
        <div class="carousel-slide" v-for="(slide, index) in carouselSlides" :key="index" :class="{ active: currentIndex === index }">
          <img :src="slide.image" :alt="slide.title" />
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
        <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
        <button class="carousel-btn next" @click="nextSlide">&#10095;</button>
        <div class="indicators">
          <span v-for="(slide, index) in carouselSlides" :key="index" 
                :class="{ active: currentIndex === index }" 
                @click="goToSlide(index)"></span>
        </div>
      </div>
    </section>

    <!-- Product Intro Section -->
    <section class="product-intro-section">
      <h2>产品介绍</h2>
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <div class="product-icon">
            <img :src="product.icon" :alt="product.name" />
          </div>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="solutions-section">
      <h2>解决方案</h2>
      <div class="solution-grid">
        <div class="solution-card" v-for="(solution, index) in solutions" :key="index">
          <div class="solution-icon">
            <img :src="solution.icon" :alt="solution.name" />
          </div>
          <h3>{{ solution.name }}</h3>
          <p>{{ solution.description }}</p>
        </div>
      </div>
    </section>

    <!-- Customer Cases Section -->
    <section class="customer-cases-section">
      <h2>客户案例</h2>
      <div class="case-grid">
        <div class="case-card" v-for="(customer, index) in customers" :key="index">
          <div class="case-logo">
            <img :src="customer.logo" :alt="customer.name" />
          </div>
          <h3>{{ customer.name }}</h3>
          <p>{{ customer.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      carouselSlides: [
        {
          image: '/src/assets/images/carousel1.jpg',
          title: '智慧云门诊解决方案',
          description: '提供全方位的门诊管理解决方案，提升医疗服务效率'
        },
        {
          image: '/src/assets/images/carousel2.jpg',
          title: '智能药房管理系统',
          description: '实现药房自动化管理，提高药品配送效率'
        },
        {
          image: '/src/assets/images/carousel3.jpg',
          title: '远程医疗平台',
          description: '连接医生与患者，实现远程诊疗服务'
        }
      ],
      products: [
        {
          icon: '/src/assets/images/product1.png',
          name: '智慧云药房',
          description: '门诊无需配备实体药房...'
        },
        {
          icon: '/src/assets/images/product2.png',
          name: '智慧云门诊',
          description: '提供智能化门诊服务，提升患者就医体验'
        },
        {
          icon: '/src/assets/images/product3.png',
          name: 'AI在线开方服务',
          description: '基于人工智能的在线处方开具服务'
        },
        {
          icon: '/src/assets/images/product4.png',
          name: '社区医院统管平台',
          description: '统一管理社区医院各项业务'
        },
        {
          icon: '/src/assets/images/product5.png',
          name: '互联网医院',
          description: '搭建线上医院平台，提供远程医疗服务'
        },
        {
          icon: '/src/assets/images/product6.png',
          name: '库房管理',
          description: '智能化的医药库房管理系统'
        }
      ],
      solutions: [
        {
          icon: '/src/assets/images/solution1.png',
          name: '智慧云门诊',
          description: '提供智能化门诊服务，提升患者就医体验'
        },
        {
          icon: '/src/assets/images/solution2.png',
          name: '智慧云药房',
          description: '实现药房自动化管理，提高药品配送效率'
        },
        {
          icon: '/src/assets/images/solution3.png',
          name: '医院HIS对接',
          description: '与医院信息系统无缝对接'
        },
        {
          icon: '/src/assets/images/solution4.png',
          name: 'AI辅诊',
          description: '基于人工智能的辅助诊断系统'
        },
        {
          icon: '/src/assets/images/solution5.png',
          name: '社区医院合作',
          description: '与社区医院建立合作关系'
        }
      ],
      customers: [
        {
          logo: '/src/assets/images/customer1.png',
          name: '北京第一人民医院',
          description: '成功实施智慧云门诊系统'
        },
        {
          logo: '/src/assets/images/customer2.png',
          name: '上海中山医院',
          description: '部署智能药房管理系统'
        },
        {
          logo: '/src/assets/images/customer3.png',
          name: '广州南方医院',
          description: '采用远程医疗解决方案'
        },
        {
          logo: '/src/assets/images/customer4.png',
          name: '深圳人民医院',
          description: '实施AI辅诊系统'
        },
        {
          logo: '/src/assets/images/customer5.png',
          name: '杭州第一医院',
          description: '部署社区医院统管平台'
        },
        {
          logo: '/src/assets/images/customer6.png',
          name: '成都华西医院',
          description: '采用互联网医院解决方案'
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carouselSlides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.carouselSlides.length) % this.carouselSlides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    // Auto slide every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
};
</script>

<style scoped>
.home {
  width: 100%;
}

.carousel-section {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
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
  border-radius: 10px;
}

.carousel-btn {
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

.product-intro-section,
.solutions-section,
.customer-cases-section {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-intro-section h2,
.solutions-section h2,
.customer-cases-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #2c3e50;
}

.product-grid,
.solution-grid,
.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card,
.solution-card,
.case-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover,
.solution-card:hover,
.case-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-icon,
.solution-icon,
.case-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-icon img,
.solution-icon img,
.case-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-card h3,
.solution-card h3,
.case-card h3 {
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
}

.product-card p,
.solution-card p,
.case-card p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .carousel-section {
    height: 300px;
  }
  
  .product-grid,
  .solution-grid,
  .case-grid {
    grid-template-columns: 1fr;
  }
  
  .slide-content {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style>