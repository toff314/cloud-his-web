import apiService from './api.service';

export const contentFetcherService = {
  async getContent(params = {}) {
    try {
      const response = await apiService.get('/content', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching content:', error);
      throw error;
    }
  },

  async getContentBySlug(slug) {
    try {
      const response = await apiService.get(`/content/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching content with slug ${slug}:`, error);
      throw error;
    }
  },

  async getMetadata(params = {}) {
    try {
      const response = await apiService.get('/metadata', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching metadata:', error);
      throw error;
    }
  },

  async getMetadataByPageSlug(pageSlug) {
    try {
      const response = await apiService.get(`/metadata/${pageSlug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching metadata for page ${pageSlug}:`, error);
      throw error;
    }
  }
};