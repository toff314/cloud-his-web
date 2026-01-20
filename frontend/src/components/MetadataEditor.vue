<template>
  <div class="metadata-editor">
    <h2>页面元数据编辑器</h2>
    <form @submit.prevent="saveMetadata" class="metadata-form">
      <div class="form-group">
        <label for="page_slug">页面标识符:</label>
        <input 
          type="text" 
          id="page_slug" 
          v-model="metadata.page_slug" 
          required 
          placeholder="例如: home, about, contact"
        />
      </div>
      
      <div class="form-group">
        <label for="meta_title">页面标题:</label>
        <input 
          type="text" 
          id="meta_title" 
          v-model="metadata.meta_title" 
          maxlength="60"
          placeholder="页面标题 (建议少于60字符)"
        />
      </div>
      
      <div class="form-group">
        <label for="meta_description">页面描述:</label>
        <textarea 
          id="meta_description" 
          v-model="metadata.meta_description" 
          maxlength="160"
          placeholder="页面描述 (建议少于160字符)"
          rows="3"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="meta_keywords">关键词:</label>
        <input 
          type="text" 
          id="meta_keywords" 
          v-model="metadata.meta_keywords" 
          placeholder="关键词, 用逗号分隔"
        />
      </div>
      
      <div class="form-group">
        <label for="og_title">Open Graph 标题:</label>
        <input 
          type="text" 
          id="og_title" 
          v-model="metadata.og_title" 
          placeholder="社交分享标题"
        />
      </div>
      
      <div class="form-group">
        <label for="og_description">Open Graph 描述:</label>
        <textarea 
          id="og_description" 
          v-model="metadata.og_description" 
          placeholder="社交分享描述"
          rows="3"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="og_image_path">Open Graph 图片路径:</label>
        <input 
          type="text" 
          id="og_image_path" 
          v-model="metadata.og_image_path" 
          placeholder="/images/social-share.jpg"
        />
      </div>
      
      <div class="form-group">
        <label for="canonical_url">规范链接:</label>
        <input 
          type="url" 
          id="canonical_url" 
          v-model="metadata.canonical_url" 
          placeholder="https://example.com/page"
        />
      </div>
      
      <button type="submit" class="save-btn">保存元数据</button>
    </form>
  </div>
</template>

<script>
import { contentFetcherService } from '../services/content-fetcher.service';

export default {
  name: 'MetadataEditor',
  data() {
    return {
      metadata: {
        page_slug: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        og_title: '',
        og_description: '',
        og_image_path: '',
        canonical_url: ''
      }
    };
  },
  methods: {
    async saveMetadata() {
      try {
        // 发送POST请求到后端API保存元数据
        const response = await contentFetcherService.apiService.post('/metadata', this.metadata);
        console.log('Metadata saved successfully:', response.data);
        alert('元数据保存成功！');
      } catch (error) {
        console.error('Error saving metadata:', error);
        alert('保存失败，请重试');
      }
    },
    
    async loadMetadata(pageSlug) {
      try {
        const response = await contentFetcherService.getMetadataByPageSlug(pageSlug);
        if (response.data) {
          this.metadata = { ...response.data };
        }
      } catch (error) {
        console.error('Error loading metadata:', error);
        // 如果加载失败，使用默认值
        this.metadata = {
          page_slug: pageSlug,
          meta_title: '',
          meta_description: '',
          meta_keywords: '',
          og_title: '',
          og_description: '',
          og_image_path: '',
          canonical_url: ''
        };
      }
    }
  }
};
</script>

<style scoped>
.metadata-editor {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  border-color: #42b983;
}

.save-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-start;
  transition: background-color 0.3s;
}

.save-btn:hover {
  background-color: #359c6d;
}
</style>