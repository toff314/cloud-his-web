const ImageAsset = require('../models/image-asset.model');

class ImageAssetService {
  // Get all image assets
  async getAllImageAssets() {
    return new Promise((resolve, reject) => {
      const imageAssetModel = new ImageAsset();
      
      imageAssetModel.getAll((err, assets) => {
        imageAssetModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(assets);
        }
      });
    });
  }

  // Get image asset by ID
  async getImageAssetById(id) {
    return new Promise((resolve, reject) => {
      const imageAssetModel = new ImageAsset();
      
      imageAssetModel.getById(id, (err, asset) => {
        imageAssetModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(asset);
        }
      });
    });
  }

  // Get image asset by filename
  async getImageAssetByFilename(filename) {
    return new Promise((resolve, reject) => {
      const imageAssetModel = new ImageAsset();
      
      imageAssetModel.getByFilename(filename, (err, asset) => {
        imageAssetModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(asset);
        }
      });
    });
  }

  // Create new image asset
  async createImageAsset(imageAssetData) {
    return new Promise((resolve, reject) => {
      const imageAssetModel = new ImageAsset();
      
      imageAssetModel.create(imageAssetData, (err, assetId) => {
        imageAssetModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ id: assetId });
        }
      });
    });
  }

  // Update image asset
  async updateImageAsset(id, imageAssetData) {
    return new Promise((resolve, reject) => {
      const imageAssetModel = new ImageAsset();
      
      imageAssetModel.update(id, imageAssetData, (err) => {
        imageAssetModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ updated: true });
        }
      });
    });
  }

  // Delete image asset
  async deleteImageAsset(id) {
    return new Promise((resolve, reject) => {
      const imageAssetModel = new ImageAsset();
      
      imageAssetModel.delete(id, (err) => {
        imageAssetModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ deleted: true });
        }
      });
    });
  }
}

module.exports = new ImageAssetService();