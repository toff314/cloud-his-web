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

            // Create carousel_items table
            this.db.run(`CREATE TABLE IF NOT EXISTS carousel_items (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              title TEXT NOT NULL,
              description TEXT,
              image_path TEXT NOT NULL,
              link_url TEXT,
              is_active BOOLEAN DEFAULT 1,
              sort_order INTEGER DEFAULT 0,
              created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
              updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`, (err) => {
              if (err) {
                console.error('Error creating carousel_items table:', err);
                reject(err);
                return;
              }

              // Create about_content table
              this.db.run(`CREATE TABLE IF NOT EXISTS about_content (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                section TEXT NOT NULL UNIQUE,
                title TEXT,
                content TEXT,
                image_path TEXT,
                additional_data TEXT, -- JSON data for extra fields
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
              )`, (err) => {
                if (err) {
                  console.error('Error creating about_content table:', err);
                  reject(err);
                  return;
                }

                // Create trial_requests table
                this.db.run(`CREATE TABLE IF NOT EXISTS trial_requests (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  phone TEXT NOT NULL,
                  verification_code TEXT,
                  clinic_name TEXT NOT NULL,
                  contact_person TEXT NOT NULL,
                  invitation_code TEXT,
                  status TEXT DEFAULT 'pending', -- pending, approved, rejected
                  ip_address TEXT,
                  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`, (err) => {
                  if (err) {
                    console.error('Error creating trial_requests table:', err);
                    reject(err);
                    return;
                  }

                  // Create indexes
                  this.db.run(`CREATE INDEX IF NOT EXISTS idx_content_slug ON website_content(slug)`, () => {
                    this.db.run(`CREATE INDEX IF NOT EXISTS idx_content_published ON website_content(is_published)`, () => {
                      this.db.run(`CREATE INDEX IF NOT EXISTS idx_content_updated ON website_content(updated_at)`, () => {
                        this.db.run(`CREATE INDEX IF NOT EXISTS idx_metadata_page ON page_metadata(page_slug)`, () => {
                          this.db.run(`CREATE INDEX IF NOT EXISTS idx_carousel_active ON carousel_items(is_active)`, () => {
                            this.db.run(`CREATE INDEX IF NOT EXISTS idx_about_section ON about_content(section)`, () => {
                              this.db.run(`CREATE INDEX IF NOT EXISTS idx_trial_phone ON trial_requests(phone)`, () => {
                                this.db.run(`CREATE INDEX IF NOT EXISTS idx_trial_status ON trial_requests(status)`, () => {
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