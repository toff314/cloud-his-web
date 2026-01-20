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