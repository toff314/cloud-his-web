<template>
  <div class="metadata-editor">
    <h2>编辑页面元数据</h2>
    
    <form @submit.prevent="saveMetadata" class="metadata-form">
      <div class="form-group">
        <label for="meta-title">Meta Title:</label>
        <input 
          type="text" 
          id="meta-title" 
          v-model="metadata.metaTitle" 
          maxlength="60"
          placeholder="页面标题，建议60字符以内"
        />
      </div>
      
      <div class="form-group">
        <label for="meta-description">Meta Description:</label>
        <textarea 
          id="meta-description" 
          v-model="metadata.metaDescription" 
          maxlength="160"
          placeholder="页面描述，建议160字符以内"
          rows="3"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="meta-keywords">Meta Keywords:</label>
        <input 
          type="text" 
          id="meta-keywords" 
          v-model="metadata.metaKeywords" 
          placeholder="关键词，用逗号分隔"
        />
      </div>
      
      <div class="form-group">
        <label for="og-title">Open Graph Title:</label>
        <input 
          type="text" 
          id="og-title" 
          v-model="metadata.ogTitle" 
          placeholder="社交分享标题"
        />
      </div>
      
      <div class="form-group">
        <label for="og-description">Open Graph Description:</label>
        <textarea 
          id="og-description" 
          v-model="metadata.ogDescription" 
          placeholder="社交分享描述"
          rows="2"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="og-image">Open Graph Image:</label>
        <input 
          type="text" 
          id="og-image" 
          v-model="metadata.ogImagePath" 
          placeholder="社交分享图片路径"
        />
      </div>
      
      <div class="form-group">
        <label for="canonical-url">Canonical URL:</label>
        <input 
          type="text" 
          id="canonical-url" 
          v-model="metadata.canonicalUrl" 
          placeholder="规范化URL"
        />
      </div>
      
      <button type="submit" :disabled="saving" class="save-btn">
        {{ saving ? '保存中...' : '保存元数据' }}
      </button>
    </form>
  </div>
</template>

<script>
import api from '../services/api.service';

export default {
  name: 'MetadataEditor',
  props: {
    pageSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      metadata: {
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        ogTitle: '',
        ogDescription: '',
        ogImagePath: '',
        canonicalUrl: ''
      },
      saving: false,
      loading: true
    };
  },
  async mounted() {
    await this.loadMetadata();
  },
  methods: {
    async loadMetadata() {
      try {
        this.loading = true;
        const response = await api.getMetadata(this.pageSlug);
        this.metadata = response.data;
      } catch (error) {
        console.error('Error loading metadata:', error);
        // Initialize with empty values if metadata doesn't exist yet
        this.metadata = {
          metaTitle: '',
          metaDescription: '',
          metaKeywords: '',
          ogTitle: '',
          ogDescription: '',
          ogImagePath: '',
          canonicalUrl: ''
        };
      } finally {
        this.loading = false;
      }
    },
    async saveMetadata() {
      try {
        this.saving = true;
        await api.updateMetadata(this.pageSlug, this.metadata);
        alert('元数据保存成功！');
      } catch (error) {
        console.error('Error saving metadata:', error);
        alert('保存失败，请重试');
      } finally {
        this.saving = false;
      }
    }
  },
  watch: {
    pageSlug: {
      handler() {
        this.loadMetadata();
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.metadata-editor {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.metadata-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: bold;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.save-btn {
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s;
}

.save-btn:hover:not(:disabled) {
  background-color: #2980b9;
}

.save-btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>