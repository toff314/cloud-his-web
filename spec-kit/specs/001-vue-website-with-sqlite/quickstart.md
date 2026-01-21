# Quickstart Guide: Vue Website with SQLite

## Prerequisites
- Node.js (version 16.x or higher)
- npm or yarn package manager
- SQLite3 installed on your system

## Setup Instructions

### 1. Clone and Navigate
```bash
# Clone the repository (if exists) or create a new project
mkdir vue-sqlite-website
cd vue-sqlite-website
```

### 2. Initialize Project Structure
```bash
# Create the project structure
mkdir -p backend/src/{models,services,routes,config}
mkdir -p backend/tests/{unit,integration,contract}
mkdir -p frontend/src/{components,pages,services,assets/{css,js,images},router,store}
mkdir -p frontend/tests/{unit,e2e}
mkdir -p docs

# Initialize backend
cd backend
npm init -y

# Install backend dependencies
npm install express sqlite3 cors helmet morgan
npm install --save-dev nodemon jest supertest
```

### 3. Install Frontend Dependencies
```bash
# From project root
cd ../frontend
npm init -y
npm install vue@next vue-router@4 pinia
npm install --save-dev @vitejs/plugin-vue vite

# Or use Vue CLI to create the project
# npm create vue@latest frontend
```

### 4. Configuration Files

#### Backend Configuration
Create `backend/src/config/database.config.js`:
```javascript
const path = require('path');

module.exports = {
  dbPath: path.resolve(__dirname, '../../../database.sqlite'),
  options: {
    verbose: console.log // Remove in production
  }
};
```

#### Frontend Vite Configuration
Create `frontend/vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
});
```

### 5. Database Initialization Script
Create `backend/src/services/sqlite-initializer.service.js`:
```javascript
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
```

### 6. Main Application Entry Point
Create `backend/src/app.js`:
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const DatabaseInitializer = require('./services/sqlite-initializer.service');

// Import routes
const contentRoutes = require('./routes/content.route');
const metadataRoutes = require('./routes/metadata.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Initialize database on startup
async function initializeDatabase() {
  const initializer = new DatabaseInitializer();
  try {
    await initializer.initialize();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  } finally {
    initializer.close();
  }
}

// Initialize database and start server
initializeDatabase().then(() => {
  // Routes
  app.use('/api/v1/content', contentRoutes);
  app.use('/api/v1/metadata', metadataRoutes);

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  // Initialize and serve frontend (after building)
  app.use(express.static('../../frontend/dist'));

  // Catch-all handler for SPA
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: '../../frontend/dist' });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = app;
```

### 7. Package Scripts
Update `backend/package.json` scripts:
```json
{
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "test": "jest",
    "init-db": "node src/services/sqlite-initializer.service.js"
  }
}
```

### 8. Run the Application
```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Build and serve frontend (separately during development)
cd frontend
npm run dev
```

For production:
```bash
# Build frontend
cd frontend
npm run build

# Start backend (serves built frontend)
cd backend
npm start
```

## Development Workflow
1. Make changes to frontend components
2. Test with `npm run dev` in frontend directory
3. Make changes to backend API
4. Test with `npm run dev` in backend directory
5. Run tests: `npm test` in respective directories
6. Commit changes following GitFlow methodology