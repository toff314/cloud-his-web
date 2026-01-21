const AboutContent = require('../models/about-content.model');

class AboutContentService {
  // Get about content by section
  async getAboutContentBySection(section) {
    return new Promise((resolve, reject) => {
      const aboutContentModel = new AboutContent();
      
      aboutContentModel.getBySection(section, (err, content) => {
        aboutContentModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(content);
        }
      });
    });
  }

  // Get all about content
  async getAllAboutContent() {
    return new Promise((resolve, reject) => {
      const aboutContentModel = new AboutContent();
      
      aboutContentModel.getAll((err, contents) => {
        aboutContentModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(contents);
        }
      });
    });
  }

  // Create new about content
  async createAboutContent(aboutContentData) {
    return new Promise((resolve, reject) => {
      const aboutContentModel = new AboutContent();
      
      aboutContentModel.create(aboutContentData, (err, contentId) => {
        aboutContentModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ id: contentId });
        }
      });
    });
  }

  // Update about content
  async updateAboutContent(section, aboutContentData) {
    return new Promise((resolve, reject) => {
      const aboutContentModel = new AboutContent();
      
      aboutContentModel.update(section, aboutContentData, (err) => {
        aboutContentModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ updated: true });
        }
      });
    });
  }

  // Delete about content
  async deleteAboutContent(section) {
    return new Promise((resolve, reject) => {
      const aboutContentModel = new AboutContent();
      
      aboutContentModel.delete(section, (err) => {
        aboutContentModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ deleted: true });
        }
      });
    });
  }
}

module.exports = new AboutContentService();