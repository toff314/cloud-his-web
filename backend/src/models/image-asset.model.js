const { dbPath } = require('../config/database.config');
const sqlite3 = require('sqlite3').verbose();

class ImageAsset {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  // Get all image assets
  getAll(callback) {
    const sql = `SELECT * FROM image_assets ORDER BY created_at DESC`;
    this.db.all(sql, [], callback);
  }

  // Get image asset by ID
  getById(id, callback) {
    const sql = `SELECT * FROM image_assets WHERE id = ?`;
    this.db.get(sql, [id], callback);
  }

  // Get image asset by filename
  getByFilename(filename, callback) {
    const sql = `SELECT * FROM image_assets WHERE filename = ?`;
    this.db.get(sql, [filename], callback);
  }

  // Create new image asset
  create(imageAsset, callback) {
    const sql = `INSERT INTO image_assets (filename, filepath, alt_text, caption, file_size, mime_type) VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [
      imageAsset.filename,
      imageAsset.filepath,
      imageAsset.altText,
      imageAsset.caption,
      imageAsset.fileSize,
      imageAsset.mimeType
    ];
    this.db.run(sql, params, function(err) {
      callback(err, this ? this.lastID : null);
    });
  }

  // Update image asset
  update(id, imageAsset, callback) {
    const sql = `UPDATE image_assets SET filename = ?, filepath = ?, alt_text = ?, caption = ?, file_size = ?, mime_type = ? WHERE id = ?`;
    const params = [
      imageAsset.filename,
      imageAsset.filepath,
      imageAsset.altText,
      imageAsset.caption,
      imageAsset.fileSize,
      imageAsset.mimeType,
      id
    ];
    this.db.run(sql, params, function(err) {
      callback(err);
    });
  }

  // Delete image asset
  delete(id, callback) {
    const sql = `DELETE FROM image_assets WHERE id = ?`;
    this.db.run(sql, [id], callback);
  }

  close() {
    this.db.close();
  }
}

module.exports = ImageAsset;