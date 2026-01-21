const { dbPath } = require('../config/database.config');
const sqlite3 = require('sqlite3').verbose();

class WebsiteContent {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  // Get all published content
  getAll(callback) {
    const sql = `SELECT * FROM website_content WHERE is_published = 1 ORDER BY updated_at DESC`;
    this.db.all(sql, [], callback);
  }

  // Get content by slug
  getBySlug(slug, callback) {
    const sql = `SELECT * FROM website_content WHERE slug = ? AND is_published = 1`;
    this.db.get(sql, [slug], callback);
  }

  // Get content by ID
  getById(id, callback) {
    const sql = `SELECT * FROM website_content WHERE id = ?`;
    this.db.get(sql, [id], callback);
  }

  // Create new content
  create(content, callback) {
    const sql = `INSERT INTO website_content (title, content, slug, excerpt, featured_image_path, author, tags) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      content.title,
      content.content,
      content.slug,
      content.excerpt,
      content.featuredImagePath,
      content.author,
      content.tags
    ];
    this.db.run(sql, params, function(err) {
      callback(err, this ? this.lastID : null);
    });
  }

  // Update content
  update(id, content, callback) {
    const sql = `UPDATE website_content SET title = ?, content = ?, slug = ?, excerpt = ?, featured_image_path = ?, author = ?, tags = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    const params = [
      content.title,
      content.content,
      content.slug,
      content.excerpt,
      content.featuredImagePath,
      content.author,
      content.tags,
      id
    ];
    this.db.run(sql, params, function(err) {
      callback(err);
    });
  }

  // Delete content
  delete(id, callback) {
    const sql = `DELETE FROM website_content WHERE id = ?`;
    this.db.run(sql, [id], callback);
  }

  close() {
    this.db.close();
  }
}

module.exports = WebsiteContent;