// PageMetadata model
const sqlite3 = require('sqlite3').verbose();

class PageMetadata {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  // Create or update metadata for a page
  createOrUpdate(metadataData) {
    return new Promise((resolve, reject) => {
      const { page_slug, meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url } = metadataData;
      
      // First, try to find existing record
      const findQuery = 'SELECT id FROM page_metadata WHERE page_slug = ?';
      this.db.get(findQuery, [page_slug], (err, row) => {
        if (err) {
          reject(err);
        } else if (row) {
          // Update existing record
          const updateQuery = `
            UPDATE page_metadata 
            SET meta_title = ?, meta_description = ?, meta_keywords = ?, 
                og_title = ?, og_description = ?, og_image_path = ?, canonical_url = ?, 
                updated_at = CURRENT_TIMESTAMP
            WHERE page_slug = ?
          `;
          const updateParams = [meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url, page_slug];
          
          this.db.run(updateQuery, updateParams, function(err) {
            if (err) {
              reject(err);
            } else {
              resolve({ id: row.id, changes: this.changes });
            }
          });
        } else {
          // Insert new record
          const insertQuery = `
            INSERT INTO page_metadata 
            (page_slug, meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `;
          const insertParams = [page_slug, meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url];
          
          this.db.run(insertQuery, insertParams, function(err) {
            if (err) {
              reject(err);
            } else {
              resolve({ id: this.lastID });
            }
          });
        }
      });
    });
  }

  // Get metadata by page slug
  getByPageSlug(pageSlug) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM page_metadata WHERE page_slug = ?';
      this.db.get(query, [pageSlug], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Get all metadata with pagination
  getAll(limit = 10, offset = 0) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM page_metadata ORDER BY updated_at DESC LIMIT ? OFFSET ?';
      this.db.all(query, [limit, offset], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Update metadata
  update(pageSlug, metadataData) {
    return new Promise((resolve, reject) => {
      const { meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url } = metadataData;
      const query = `
        UPDATE page_metadata 
        SET meta_title = ?, meta_description = ?, meta_keywords = ?, 
            og_title = ?, og_description = ?, og_image_path = ?, canonical_url = ?, 
            updated_at = CURRENT_TIMESTAMP
        WHERE page_slug = ?
      `;
      const params = [meta_title, meta_description, meta_keywords, og_title, og_description, og_image_path, canonical_url, pageSlug];
      
      this.db.run(query, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete metadata
  delete(pageSlug) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM page_metadata WHERE page_slug = ?';
      this.db.run(query, [pageSlug], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }
}

module.exports = PageMetadata;