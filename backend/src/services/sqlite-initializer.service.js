const sqlite3 = require('sqlite3').verbose();
const { dbPath } = require('../config/database.config');

class DatabaseInitializer {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  async initialize() {
    return new Promise((resolve, reject) => {
      // Create website_content table
      this.db.run(`CREATE TABLE IF NOT EXISTS website_content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        excerpt TEXT,
        featured_image_path TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        is_published BOOLEAN DEFAULT 1,
        author TEXT,
        tags TEXT
      )`, (err) => {
        if (err) {
          console.error('Error creating website_content table:', err);
          reject(err);
          return;
        }

        // Create page_metadata table
        this.db.run(`CREATE TABLE IF NOT EXISTS page_metadata (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          page_slug TEXT UNIQUE NOT NULL,
          meta_title TEXT,
          meta_description TEXT,
          meta_keywords TEXT,
          og_title TEXT,
          og_description TEXT,
          og_image_path TEXT,
          canonical_url TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
          if (err) {
            console.error('Error creating page_metadata table:', err);
            reject(err);
            return;
          }

          // Create image_assets table
          this.db.run(`CREATE TABLE IF NOT EXISTS image_assets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            filepath TEXT NOT NULL,
            alt_text TEXT,
            caption TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            file_size INTEGER,
            mime_type TEXT
          )`, (err) => {
            if (err) {
              console.error('Error creating image_assets table:', err);
              reject(err);
              return;
            }

            // Create indexes
            this.db.run(`CREATE INDEX IF NOT EXISTS idx_content_slug ON website_content(slug)`, () => {
              this.db.run(`CREATE INDEX IF NOT EXISTS idx_content_published ON website_content(is_published)`, () => {
                this.db.run(`CREATE INDEX IF NOT EXISTS idx_content_updated ON website_content(updated_at)`, () => {
                  this.db.run(`CREATE INDEX IF NOT EXISTS idx_metadata_page ON page_metadata(page_slug)`, () => {
                    console.log('Database initialized successfully');
                    resolve();
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  close() {
    this.db.close();
  }
}

module.exports = DatabaseInitializer;