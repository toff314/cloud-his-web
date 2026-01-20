const WebsiteContent = require('../models/content.model');
const PageMetadata = require('../models/page-metadata.model');

class ContentService {
  // Get content by slug with associated metadata
  async getContentWithMetadata(slug) {
    return new Promise((resolve, reject) => {
      const contentModel = new WebsiteContent();
      
      contentModel.getBySlug(slug, (err, content) => {
        if (err) {
          contentModel.close();
          reject(err);
          return;
        }
        
        if (!content) {
          contentModel.close();
          resolve(null);
          return;
        }
        
        const metadataModel = new PageMetadata();
        metadataModel.getByPageSlug(slug, (err, metadata) => {
          contentModel.close();
          metadataModel.close();
          
          if (err) {
            reject(err);
            return;
          }
          
          resolve({
            content,
            metadata
          });
        });
      });
    });
  }

  // Get all published content
  async getAllContent() {
    return new Promise((resolve, reject) => {
      const contentModel = new WebsiteContent();
      
      contentModel.getAll((err, contents) => {
        contentModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(contents);
        }
      });
    });
  }

  // Create new content with metadata
  async createContentWithMetadata(contentData, metadataData) {
    return new Promise((resolve, reject) => {
      const contentModel = new WebsiteContent();
      
      // First, create the content
      contentModel.create(contentData, (err, contentId) => {
        if (err) {
          contentModel.close();
          reject(err);
          return;
        }
        
        // Then create the associated metadata
        const metadataModel = new PageMetadata();
        const metadataWithPageSlug = {
          ...metadataData,
          pageSlug: contentData.slug
        };
        
        metadataModel.create(metadataWithPageSlug, (err, metadataId) => {
          contentModel.close();
          metadataModel.close();
          
          if (err) {
            reject(err);
          } else {
            resolve({ contentId, metadataId });
          }
        });
      });
    });
  }

  // Update content with metadata
  async updateContentWithMetadata(slug, contentData, metadataData) {
    return new Promise((resolve, reject) => {
      const contentModel = new WebsiteContent();
      
      // First, update the content
      contentModel.getBySlug(slug, (err, existingContent) => {
        if (err) {
          contentModel.close();
          reject(err);
          return;
        }
        
        if (!existingContent) {
          contentModel.close();
          reject(new Error('Content not found'));
          return;
        }
        
        contentModel.update(existingContent.id, contentData, (err) => {
          if (err) {
            contentModel.close();
            reject(err);
            return;
          }
          
          // Then update the associated metadata
          const metadataModel = new PageMetadata();
          metadataModel.update(slug, metadataData, (err) => {
            contentModel.close();
            metadataModel.close();
            
            if (err) {
              reject(err);
            } else {
              resolve({ contentId: existingContent.id });
            }
          });
        });
      });
    });
  }

  // Delete content and associated metadata
  async deleteContentWithMetadata(slug) {
    return new Promise((resolve, reject) => {
      const contentModel = new WebsiteContent();
      
      // First, get the content to find its ID
      contentModel.getBySlug(slug, (err, content) => {
        if (err) {
          contentModel.close();
          reject(err);
          return;
        }
        
        if (!content) {
          contentModel.close();
          reject(new Error('Content not found'));
          return;
        }
        
        // Delete the content
        contentModel.delete(content.id, (err) => {
          if (err) {
            contentModel.close();
            reject(err);
            return;
          }
          
          // Then delete the associated metadata
          const metadataModel = new PageMetadata();
          metadataModel.delete(slug, (err) => {
            contentModel.close();
            metadataModel.close();
            
            if (err) {
              reject(err);
            } else {
              resolve({ deleted: true });
            }
          });
        });
      });
    });
  }
}

module.exports = new ContentService();