const { dbPath } = require('../config/database.config');
const sqlite3 = require('sqlite3').verbose();

class AboutContent {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  // Get about content by section
  getBySection(section, callback) {
    const sql = `SELECT * FROM about_content WHERE section = ?`;
    this.db.get(sql, [section], callback);
  }

  // Get all about content
  getAll(callback) {
    const sql = `SELECT * FROM about_content ORDER BY created_at DESC`;
    this.db.all(sql, [], callback);
  }

  // Create new about content
  create(aboutContent, callback) {
    const sql = `INSERT INTO about_content (section, title, content, image_path, additional_data) VALUES (?, ?, ?, ?, ?)`;
    const params = [
      aboutContent.section,
      aboutContent.title,
      aboutContent.content,
      aboutContent.imagePath,
      aboutContent.additionalData ? JSON.stringify(aboutContent.additionalData) : null
    ];
    this.db.run(sql, params, function(err) {
      callback(err, this ? this.lastID : null);
    });
  }

  // Update about content
  update(section, aboutContent, callback) {
    const sql = `UPDATE about_content SET title = ?, content = ?, image_path = ?, additional_data = ?, updated_at = CURRENT_TIMESTAMP WHERE section = ?`;
    const params = [
      aboutContent.title,
      aboutContent.content,
      aboutContent.imagePath,
      aboutContent.additionalData ? JSON.stringify(aboutContent.additionalData) : null,
      section
    ];
    this.db.run(sql, params, function(err) {
      callback(err);
    });
  }

  // Delete about content
  delete(section, callback) {
    const sql = `DELETE FROM about_content WHERE section = ?`;
    this.db.run(sql, [section], callback);
  }

  close() {
    this.db.close();
  }
}

module.exports = AboutContent;