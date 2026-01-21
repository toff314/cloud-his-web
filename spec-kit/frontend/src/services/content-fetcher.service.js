import api from './api.service';

export default {
  async fetchContentBySlug(slug) {
    try {
      const response = await api.getContent(slug);
      return response.data;
    } catch (error) {
      console.error(`Error fetching content for slug ${slug}:`, error);
      throw error;
    }
  },

  async fetchAllContent() {
    try {
      const response = await api.getAllContent();
      return response.data;
    } catch (error) {
      console.error('Error fetching all content:', error);
      throw error;
    }
  },

  async fetchMetadataByPage(pageSlug) {
    try {
      const response = await api.getMetadata(pageSlug);
      return response.data;
    } catch (error) {
      console.error(`Error fetching metadata for page ${pageSlug}:`, error);
      throw error;
    }
  },

  async fetchAllMetadata() {
    try {
      const response = await api.getAllMetadata();
      return response.data;
    } catch (error) {
      console.error('Error fetching all metadata:', error);
      throw error;
    }
  }
};