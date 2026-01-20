// WebsiteContent model
const sqlite3 = require('sqlite3').verbose();

class WebsiteContent {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  // Create a new content item
  create(contentData) {
    return new Promise((resolve, reject) => {
      const { title, content, slug, excerpt, featured_image_path, is_published, author, tags } = contentData;
      const query = `
        INSERT INTO website_content 
        (title, content, slug, excerpt, featured_image_path, is_published, author, tags) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const params = [title, content, slug, excerpt, featured_image_path, is_published || 1, author, tags];
      
      this.db.run(query, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Get content by ID
  getById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM website_content WHERE id = ?';
      this.db.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Get content by slug
  getBySlug(slug) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM website_content WHERE slug = ? AND is_published = 1';
      this.db.get(query, [slug], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Get all published content with pagination
  getAllPublished(limit = 10, offset = 0, filters = {}) {
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM website_content WHERE is_published = 1';
      const params = [];
      
      // Add filters if provided
      if (filters.tag) {
        query += ' AND tags LIKE ?';
        params.push(`%${filters.tag}%`);
      }
      
      query += ' ORDER BY updated_at DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);
      
      this.db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Update content
  update(id, contentData) {
    return new Promise((resolve, reject) => {
      const { title, content, slug, excerpt, featured_image_path, is_published, author, tags } = contentData;
      const query = `
        UPDATE website_content 
        SET title = ?, content = ?, slug = ?, excerpt = ?, featured_image_path = ?, 
            is_published = ?, author = ?, tags = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `;
      const params = [title, content, slug, excerpt, featured_image_path, is_published, author, tags, id];
      
      this.db.run(query, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete content
  delete(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM website_content WHERE id = ?';
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

module.exports = WebsiteContent;