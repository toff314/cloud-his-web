<template>
  <div class="content-display">
    <h1 v-if="content.title">{{ content.title }}</h1>
    <div v-if="content.content" class="content-body" v-html="content.content"></div>
    <div v-if="content.excerpt" class="content-excerpt">{{ content.excerpt }}</div>
    <div v-if="content.featured_image_path" class="content-image">
      <img :src="content.featured_image_path" :alt="content.title" />
    </div>
    <div v-if="content.author" class="content-author">作者: {{ content.author }}</div>
    <div v-if="content.tags" class="content-tags">标签: {{ content.tags }}</div>
  </div>
</template>

<script>
import { contentFetcherService } from '../services/content-fetcher.service';

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
      content: {}
    };
  },
  async mounted() {
    try {
      const response = await contentFetcherService.getContentBySlug(this.slug);
      this.content = response.data || {};
    } catch (error) {
      console.error('Error fetching content:', error);
      this.content = {};
    }
  }
};
</script>

<style scoped>
.content-display {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.content-body {
  margin: 1.5rem 0;
  line-height: 1.6;
}

.content-excerpt {
  font-style: italic;
  color: #666;
  margin: 1rem 0;
}

.content-image {
  margin: 1.5rem 0;
}

.content-image img {
  max-width: 100%;
  height: auto;
}

.content-author {
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #666;
}

.content-tags {
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #42b983;
}
</style>