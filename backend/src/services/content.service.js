// Content service
const WebsiteContent = require('../models/content.model');
const PageMetadata = require('../models/page-metadata.model');
const { dbPath } = require('../config/database.config');

class ContentService {
  constructor() {
    this.contentModel = new WebsiteContent(dbPath);
    this.metadataModel = new PageMetadata(dbPath);
  }

  // Get content by slug
  async getContentBySlug(slug) {
    try {
      const content = await this.contentModel.getBySlug(slug);
      if (!content) {
        throw new Error('Content not found');
      }
      
      return content;
    } catch (error) {
      throw error;
    }
  }

  // Get all published content
  async getAllContent(limit = 10, offset = 0, filters = {}) {
    try {
      const contentList = await this.contentModel.getAllPublished(limit, offset, filters);
      return contentList;
    } catch (error) {
      throw error;
    }
  }

  // Get content by ID
  async getContentById(id) {
    try {
      const content = await this.contentModel.getById(id);
      if (!content) {
        throw new Error('Content not found');
      }
      
      return content;
    } catch (error) {
      throw error;
    }
  }

  // Create new content
  async createContent(contentData) {
    try {
      // Validate required fields
      if (!contentData.title || !contentData.content || !contentData.slug) {
        throw new Error('Title, content, and slug are required');
      }
      
      // Check if slug already exists
      const existingContent = await this.contentModel.getBySlug(contentData.slug);
      if (existingContent) {
        throw new Error('Content with this slug already exists');
      }
      
      const result = await this.contentModel.create(contentData);
      return { id: result.id, ...contentData };
    } catch (error) {
      throw error;
    }
  }

  // Update content
  async updateContent(id, contentData) {
    try {
      // Check if content exists
      const existingContent = await this.contentModel.getById(id);
      if (!existingContent) {
        throw new Error('Content not found');
      }
      
      // If slug is being updated, check if new slug already exists
      if (contentData.slug && contentData.slug !== existingContent.slug) {
        const slugExists = await this.contentModel.getBySlug(contentData.slug);
        if (slugExists) {
          throw new Error('Content with this slug already exists');
        }
      }
      
      const result = await this.contentModel.update(id, contentData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Delete content
  async deleteContent(id) {
    try {
      const result = await this.contentModel.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Get metadata by page slug
  async getMetadataByPageSlug(pageSlug) {
    try {
      const metadata = await this.metadataModel.getByPageSlug(pageSlug);
      if (!metadata) {
        // Return default metadata if not found
        return {
          page_slug: pageSlug,
          meta_title: 'Default Title',
          meta_description: 'Default description',
          meta_keywords: 'default, keywords',
          og_title: 'Default OG Title',
          og_description: 'Default OG description',
          og_image_path: '/default-og-image.jpg',
          canonical_url: `https://example.com/${pageSlug}`
        };
      }
      
      return metadata;
    } catch (error) {
      throw error;
    }
  }

  // Get all metadata
  async getAllMetadata(limit = 10, offset = 0) {
    try {
      const metadataList = await this.metadataModel.getAll(limit, offset);
      return metadataList;
    } catch (error) {
      throw error;
    }
  }

  // Create or update metadata
  async createOrUpdateMetadata(metadataData) {
    try {
      if (!metadataData.page_slug) {
        throw new Error('Page slug is required');
      }
      
      const result = await this.metadataModel.createOrUpdate(metadataData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Update metadata
  async updateMetadata(pageSlug, metadataData) {
    try {
      const result = await this.metadataModel.update(pageSlug, metadataData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Delete metadata
  async deleteMetadata(pageSlug) {
    try {
      const result = await this.metadataModel.delete(pageSlug);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ContentService;