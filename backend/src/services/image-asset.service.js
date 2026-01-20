// ImageAsset service
const ImageAsset = require('../models/image-asset.model');
const { dbPath } = require('../config/database.config');

class ImageAssetService {
  constructor() {
    this.imageAssetModel = new ImageAsset(dbPath);
  }

  // Get image asset by ID
  async getImageAssetById(id) {
    try {
      const imageAsset = await this.imageAssetModel.getById(id);
      if (!imageAsset) {
        throw new Error('Image asset not found');
      }
      
      return imageAsset;
    } catch (error) {
      throw error;
    }
  }

  // Get image asset by filepath
  async getImageAssetByFilepath(filepath) {
    try {
      const imageAsset = await this.imageAssetModel.getByFilepath(filepath);
      if (!imageAsset) {
        throw new Error('Image asset not found');
      }
      
      return imageAsset;
    } catch (error) {
      throw error;
    }
  }

  // Get all image assets
  async getAllImageAssets(limit = 10, offset = 0) {
    try {
      const imageAssets = await this.imageAssetModel.getAll(limit, offset);
      return imageAssets;
    } catch (error) {
      throw error;
    }
  }

  // Create new image asset
  async createImageAsset(imageData) {
    try {
      // Validate required fields
      if (!imageData.filename || !imageData.filepath) {
        throw new Error('Filename and filepath are required');
      }
      
      // Check if image asset with this filepath already exists
      try {
        const existingAsset = await this.imageAssetModel.getByFilepath(imageData.filepath);
        if (existingAsset) {
          throw new Error('Image asset with this filepath already exists');
        }
      } catch (error) {
        // If the error is not about the asset not existing, rethrow it
        if (!error.message.includes('not found')) {
          throw error;
        }
        // If the error is about the asset not existing, that's fine, continue
      }
      
      const result = await this.imageAssetModel.create(imageData);
      return { id: result.id, ...imageData };
    } catch (error) {
      throw error;
    }
  }

  // Update image asset
  async updateImageAsset(id, imageData) {
    try {
      // Check if image asset exists
      const existingAsset = await this.imageAssetModel.getById(id);
      if (!existingAsset) {
        throw new Error('Image asset not found');
      }
      
      // If filepath is being updated, check if new filepath already exists
      if (imageData.filepath && imageData.filepath !== existingAsset.filepath) {
        try {
          const filepathExists = await this.imageAssetModel.getByFilepath(imageData.filepath);
          if (filepathExists) {
            throw new Error('Image asset with this filepath already exists');
          }
        } catch (error) {
          // If the error is not about the asset not existing, rethrow it
          if (!error.message.includes('not found')) {
            throw error;
          }
          // If the error is about the asset not existing, that's fine, continue
        }
      }
      
      const result = await this.imageAssetModel.update(id, imageData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Delete image asset
  async deleteImageAsset(id) {
    try {
      const result = await this.imageAssetModel.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ImageAssetService;