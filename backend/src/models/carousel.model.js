const { dbPath } = require('../config/database.config');
const sqlite3 = require('sqlite3').verbose();

class Carousel {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  // Get all carousel items
  getAll(callback) {
    const sql = `SELECT * FROM carousel_items ORDER BY sort_order ASC`;
    this.db.all(sql, [], callback);
  }

  // Get carousel item by ID
  getById(id, callback) {
    const sql = `SELECT * FROM carousel_items WHERE id = ?`;
    this.db.get(sql, [id], callback);
  }

  // Create new carousel item
  create(carouselItem, callback) {
    const sql = `INSERT INTO carousel_items (title, description, image_path, link_url, is_active, sort_order) VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [
      carouselItem.title,
      carouselItem.description,
      carouselItem.imagePath,
      carouselItem.linkUrl,
      carouselItem.isActive,
      carouselItem.sortOrder
    ];
    this.db.run(sql, params, function(err) {
      callback(err, this ? this.lastID : null);
    });
  }

  // Update carousel item
  update(id, carouselItem, callback) {
    const sql = `UPDATE carousel_items SET title = ?, description = ?, image_path = ?, link_url = ?, is_active = ?, sort_order = ? WHERE id = ?`;
    const params = [
      carouselItem.title,
      carouselItem.description,
      carouselItem.imagePath,
      carouselItem.linkUrl,
      carouselItem.isActive,
      carouselItem.sortOrder,
      id
    ];
    this.db.run(sql, params, function(err) {
      callback(err);
    });
  }

  // Delete carousel item
  delete(id, callback) {
    const sql = `DELETE FROM carousel_items WHERE id = ?`;
    this.db.run(sql, [id], callback);
  }

  close() {
    this.db.close();
  }
}

module.exports = Carousel;