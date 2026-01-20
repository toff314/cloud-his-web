const { dbPath } = require('../config/database.config');
const sqlite3 = require('sqlite3').verbose();

class PageMetadata {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  // Get metadata by page slug
  getByPageSlug(pageSlug, callback) {
    const sql = `SELECT * FROM page_metadata WHERE page_slug = ?`;
    this.db.get(sql, [pageSlug], callback);
  }

  // Get all metadata
  getAll(callback) {
    const sql = `SELECT * FROM page_metadata ORDER BY updated_at DESC`;
    this.db.all(sql, [], callback);
  }

  // Create new metadata
  create(metadata, callback) {
    const sql = `INSERT INTO page_metadata (page_slug, meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      metadata.pageSlug,
      metadata.metaTitle,
      metadata.metaDescription,
      metadata.metaKeywords,
      metadata.ogTitle,
      metadata.ogDescription,
      metadata.ogImagePath,
      metadata.canonicalUrl
    ];
    this.db.run(sql, params, function(err) {
      callback(err, this ? this.lastID : null);
    });
  }

  // Update metadata
  update(pageSlug, metadata, callback) {
    const sql = `UPDATE page_metadata SET meta_title = ?, meta_description = ?, meta_keywords = ?, og_title = ?, og_description = ?, og_image_path = ?, canonical_url = ?, updated_at = CURRENT_TIMESTAMP WHERE page_slug = ?`;
    const params = [
      metadata.metaTitle,
      metadata.metaDescription,
      metadata.metaKeywords,
      metadata.ogTitle,
      metadata.ogDescription,
      metadata.ogImagePath,
      metadata.canonicalUrl,
      pageSlug
    ];
    this.db.run(sql, params, function(err) {
      callback(err);
    });
  }

  // Delete metadata
  delete(pageSlug, callback) {
    const sql = `DELETE FROM page_metadata WHERE page_slug = ?`;
    this.db.run(sql, [pageSlug], callback);
  }

  close() {
    this.db.close();
  }
}

module.exports = PageMetadata;