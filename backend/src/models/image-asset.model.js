// ImageAsset model
const sqlite3 = require('sqlite3').verbose();

class ImageAsset {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  // Create a new image asset
  create(imageData) {
    return new Promise((resolve, reject) => {
      const { filename, filepath, alt_text, caption, file_size, mime_type } = imageData;
      const query = `
        INSERT INTO image_assets 
        (filename, filepath, alt_text, caption, file_size, mime_type) 
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const params = [filename, filepath, alt_text, caption, file_size, mime_type];
      
      this.db.run(query, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Get image asset by ID
  getById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM image_assets WHERE id = ?';
      this.db.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Get image asset by filepath
  getByFilepath(filepath) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM image_assets WHERE filepath = ?';
      this.db.get(query, [filepath], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Get all image assets with pagination
  getAll(limit = 10, offset = 0) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM image_assets ORDER BY created_at DESC LIMIT ? OFFSET ?';
      this.db.all(query, [limit, offset], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Update image asset
  update(id, imageData) {
    return new Promise((resolve, reject) => {
      const { filename, filepath, alt_text, caption, file_size, mime_type } = imageData;
      const query = `
        UPDATE image_assets 
        SET filename = ?, filepath = ?, alt_text = ?, caption = ?, 
            file_size = ?, mime_type = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `;
      const params = [filename, filepath, alt_text, caption, file_size, mime_type, id];
      
      this.db.run(query, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete image asset
  delete(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM image_assets WHERE id = ?';
      this.db.run(query, [id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }
}

module.exports = ImageAsset;