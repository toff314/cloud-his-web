import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Content API
  getContent: (slug) => apiClient.get(`/content/${slug}`),
  getAllContent: () => apiClient.get('/content'),
  
  // Metadata API
  getMetadata: (pageSlug) => apiClient.get(`/metadata/${pageSlug}`),
  getAllMetadata: () => apiClient.get('/metadata'),
  
  // Health check
  healthCheck: () => apiClient.get('/health'),
};