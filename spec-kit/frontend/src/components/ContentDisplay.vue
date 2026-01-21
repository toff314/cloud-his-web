<template>
  <div class="content-display">
    <article v-if="content">
      <header>
        <h1>{{ content.title }}</h1>
        <p class="excerpt" v-if="content.excerpt">{{ content.excerpt }}</p>
      </header>
      
      <div class="featured-image" v-if="content.featured_image_path">
        <img :src="content.featured_image_path" :alt="content.title" />
      </div>
      
      <div class="content-body" v-html="content.content"></div>
      
      <footer>
        <p class="meta-info">
          <span class="author" v-if="content.author">作者: {{ content.author }}</span>
          <span class="date">{{ formatDate(content.created_at) }}</span>
          <span class="tags" v-if="content.tags">标签: {{ content.tags }}</span>
        </p>
      </footer>
    </article>
    
    <div v-else-if="loading" class="loading">
      加载中...
    </div>
    
    <div v-else class="no-content">
      内容不存在或暂未发布
    </div>
  </div>
</template>

<script>
import contentFetcher from '../services/content-fetcher.service';

export default {
  name: 'ContentDisplay',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      content: null,
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.loadContent();
  },
  methods: {
    async loadContent() {
      try {
        this.loading = true;
        this.error = null;
        
        const result = await contentFetcher.fetchContentBySlug(this.slug);
        this.content = result.content;
      } catch (error) {
        console.error('Error loading content:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },
  watch: {
    slug: {
      handler() {
        this.loadContent();
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.content-display {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.content-body {
  margin: 1.5rem 0;
  line-height: 1.8;
}

.featured-image {
  margin: 1.5rem 0;
  text-align: center;
}

.featured-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.meta-info {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.meta-info span {
  white-space: nowrap;
}

.loading, .no-content {
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
}

.excerpt {
  color: #7f8c8d;
  font-style: italic;
  margin: 0.5rem 0 1.5rem;
}
</style>