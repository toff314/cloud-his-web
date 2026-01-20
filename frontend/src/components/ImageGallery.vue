<template>
  <div class="image-gallery">
    <h2>图片库</h2>
    <div class="gallery-grid">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="gallery-item"
        @click="viewImage(image)"
      >
        <img :src="image.filepath" :alt="image.alt_text" />
        <div class="image-info">
          <h3>{{ image.filename }}</h3>
          <p>{{ image.caption }}</p>
        </div>
      </div>
    </div>
    
    <!-- Image Preview Modal -->
    <div v-if="selectedImage" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedImage.filepath" :alt="selectedImage.alt_text" class="modal-image" />
        <div class="modal-info">
          <h3>{{ selectedImage.filename }}</h3>
          <p>{{ selectedImage.caption }}</p>
          <p>文件大小: {{ formatFileSize(selectedImage.file_size) }}</p>
          <p>MIME类型: {{ selectedImage.mime_type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contentFetcherService } from '../services/content-fetcher.service';

export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [],
      selectedImage: null
    };
  },
  async mounted() {
    await this.loadImages();
  },
  methods: {
    async loadImages() {
      try {
        // 在实际应用中，这里应该调用获取图片资产的API
        // 由于尚未实现后端图片API，暂时使用模拟数据
        this.images = [
          {
            id: 1,
            filename: 'company-image.jpg',
            filepath: '../assets/images/company-image.jpg',
            alt_text: '公司形象图',
            caption: '公司办公环境',
            file_size: 102400,
            mime_type: 'image/jpeg'
          },
          {
            id: 2,
            filename: 'medical-scene.jpg',
            filepath: '../assets/images/medical-scene.jpg',
            alt_text: '医疗场景插画',
            caption: '医疗场景插画',
            file_size: 204800,
            mime_type: 'image/jpeg'
          },
          {
            id: 3,
            filename: 'carousel1.jpg',
            filepath: '../assets/images/carousel1.jpg',
            alt_text: '智慧云门诊解决方案',
            caption: '智慧云门诊解决方案',
            file_size: 153600,
            mime_type: 'image/jpeg'
          }
        ];
      } catch (error) {
        console.error('Error loading images:', error);
        // 使用默认图片集
        this.images = [];
      }
    },
    viewImage(image) {
      this.selectedImage = image;
    },
    closeModal() {
      this.selectedImage = null;
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
  }
};
</script>

<style scoped>
.image-gallery {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-info {
  padding: 1rem;
}

.image-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: #2c3e50;
}

.image-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background-color: white;
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  text-align: center;
}

.close {
  position: absolute;
  top: 15px;
  right: 25px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  z-index: 2001;
  background-color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close:hover {
  color: #ddd;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.modal-info {
  padding: 1.5rem;
  text-align: left;
}

.modal-info h3 {
  margin-top: 0;
  color: #2c3e50;
}

.modal-info p {
  margin: 0.5rem 0;
  color: #666;
}
</style>