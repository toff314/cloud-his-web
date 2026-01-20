const Carousel = require('../models/carousel.model');

class CarouselService {
  // Get all active carousel items
  async getAllActiveCarouselItems() {
    return new Promise((resolve, reject) => {
      const carouselModel = new Carousel();
      
      // We need to modify the getAll method to filter by is_active
      const sql = `SELECT * FROM carousel_items WHERE is_active = 1 ORDER BY sort_order ASC`;
      carouselModel.db.all(sql, [], (err, items) => {
        carouselModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(items);
        }
      });
    });
  }

  // Get carousel item by ID
  async getCarouselItemById(id) {
    return new Promise((resolve, reject) => {
      const carouselModel = new Carousel();
      
      carouselModel.getById(id, (err, item) => {
        carouselModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(item);
        }
      });
    });
  }

  // Create new carousel item
  async createCarouselItem(carouselItemData) {
    return new Promise((resolve, reject) => {
      const carouselModel = new Carousel();
      
      carouselModel.create(carouselItemData, (err, itemId) => {
        carouselModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ id: itemId });
        }
      });
    });
  }

  // Update carousel item
  async updateCarouselItem(id, carouselItemData) {
    return new Promise((resolve, reject) => {
      const carouselModel = new Carousel();
      
      carouselModel.update(id, carouselItemData, (err) => {
        carouselModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ updated: true });
        }
      });
    });
  }

  // Delete carousel item
  async deleteCarouselItem(id) {
    return new Promise((resolve, reject) => {
      const carouselModel = new Carousel();
      
      carouselModel.delete(id, (err) => {
        carouselModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ deleted: true });
        }
      });
    });
  }
}

module.exports = new CarouselService();