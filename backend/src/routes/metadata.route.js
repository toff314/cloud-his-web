const express = require('express');
const router = express.Router();
const PageMetadata = require('../models/page-metadata.model');

// Get all metadata
router.get('/', (req, res) => {
  const metadataModel = new PageMetadata();
  
  metadataModel.getAll((err, metadata) => {
    metadataModel.close();
    if (err) {
      console.error('Error fetching all metadata:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(metadata);
  });
});

// Get metadata by page slug
router.get('/:page_slug', (req, res) => {
  const { page_slug } = req.params;
  const metadataModel = new PageMetadata();
  
  metadataModel.getByPageSlug(page_slug, (err, metadata) => {
    metadataModel.close();
    if (err) {
      console.error(`Error fetching metadata for page ${page_slug}:`, err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    if (!metadata) {
      return res.status(404).json({ error: 'Metadata not found' });
    }
    
    res.json(metadata);
  });
});

// Create new metadata
router.post('/', (req, res) => {
  const metadataData = req.body;
  const metadataModel = new PageMetadata();
  
  metadataModel.create(metadataData, (err, metadataId) => {
    metadataModel.close();
    if (err) {
      console.error('Error creating metadata:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ id: metadataId });
  });
});

// Update metadata
router.put('/:page_slug', (req, res) => {
  const { page_slug } = req.params;
  const metadataData = req.body;
  const metadataModel = new PageMetadata();
  
  metadataModel.update(page_slug, metadataData, (err) => {
    metadataModel.close();
    if (err) {
      console.error(`Error updating metadata for page ${page_slug}:`, err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ updated: true });
  });
});

// Delete metadata
router.delete('/:page_slug', (req, res) => {
  const { page_slug } = req.params;
  const metadataModel = new PageMetadata();
  
  metadataModel.delete(page_slug, (err) => {
    metadataModel.close();
    if (err) {
      console.error(`Error deleting metadata for page ${page_slug}:`, err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ deleted: true });
  });
});

module.exports = router;