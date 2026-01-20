<template>
  <div class="image-gallery">
    <h2>图片库</h2>
    
    <div class="gallery-grid">
      <div 
        v-for="image in images" 
        :key="image.id" 
        class="gallery-item"
        @click="viewImage(image)"
      >
        <img 
          :src="image.filepath" 
          :alt="image.alt_text || image.filename" 
          :title="image.caption || image.filename"
          class="gallery-image"
        />
        <div class="image-info">
          <p class="image-name">{{ image.filename }}</p>
          <p class="image-caption" v-if="image.caption">{{ image.caption }}</p>
        </div>
      </div>
    </div>
    
    <!-- Image Viewer Modal -->
    <div v-if="selectedImage" class="modal-overlay" @click="closeViewer">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeViewer">&times;</button>
        <img :src="selectedImage.filepath" :alt="selectedImage.alt_text" class="modal-image" />
        <div class="modal-info">
          <h3>{{ selectedImage.filename }}</h3>
          <p v-if="selectedImage.caption">{{ selectedImage.caption }}</p>
          <p>文件大小: {{ formatFileSize(selectedImage.file_size) }}</p>
          <p>MIME类型: {{ selectedImage.mime_type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api.service';

export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [],
      selectedImage: null,
      loading: true
    };
  },
  async mounted() {
    await this.loadImages();
  },
  methods: {
    async loadImages() {
      try {
        this.loading = true;
        const response = await api.get('/images'); // Assuming we have this endpoint
        this.images = response.data;
      } catch (error) {
        console.error('Error loading images:', error);
        // For demo purposes, we'll create some placeholder images
        this.images = [
          { id: 1, filename: 'placeholder1.jpg', filepath: '/src/assets/images/placeholder.png', alt_text: 'Placeholder 1', caption: '这是一个占位图片', file_size: 1024, mime_type: 'image/png' },
          { id: 2, filename: 'placeholder2.jpg', filepath: '/src/assets/images/placeholder.png', alt_text: 'Placeholder 2', caption: '这是另一个占位图片', file_size: 2048, mime_type: 'image/png' }
        ];
      } finally {
        this.loading = false;
      }
    },
    viewImage(image) {
      this.selectedImage = image;
    },
    closeViewer() {
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
  margin-top: 1.5rem;
}

.gallery-item {
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-info {
  padding: 0.75rem;
}

.image-name {
  font-weight: bold;
  margin: 0 0 0.25rem 0;
  color: #2c3e50;
}

.image-caption {
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  border-radius: 50%;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  margin: 0 auto;
}

.modal-info {
  margin-top: 1rem;
  text-align: center;
}

.modal-info h3 {
  margin-top: 0;
  color: #2c3e50;
}

.modal-info p {
  margin: 0.25rem 0;
  color: #7f8c8d;
}
</style>