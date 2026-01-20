const express = require('express');
const router = express.Router();
const ContentService = require('../services/content.service');

const contentService = new ContentService();

// GET /api/v1/metadata - Retrieve metadata with optional filters
router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0, page_slug } = req.query;
    
    // If page_slug is provided, get specific metadata
    if (page_slug) {
      const metadata = await contentService.getMetadataByPageSlug(page_slug);
      if (!metadata) {
        return res.status(404).json({ 
          success: false, 
          error: { code: 'METADATA_NOT_FOUND', message: 'Metadata not found' } 
        });
      }
      
      return res.json({ 
        success: true, 
        data: metadata 
      });
    }
    
    const metadataList = await contentService.getAllMetadata(parseInt(limit), parseInt(offset));
    
    res.json({ 
      success: true, 
      data: metadataList,
      pagination: {
        limit: parseInt(limit),
        offset: parseInt(offset),
        total: metadataList.length // This is simplified; in practice, you'd have a separate count query
      }
    });
  } catch (error) {
    console.error('Error retrieving metadata:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// GET /api/v1/metadata/:page_slug - Retrieve specific metadata by page slug
router.get('/:page_slug', async (req, res) => {
  try {
    const { page_slug } = req.params;
    
    const metadata = await contentService.getMetadataByPageSlug(page_slug);
    if (!metadata) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'METADATA_NOT_FOUND', message: 'Metadata not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      data: metadata 
    });
  } catch (error) {
    console.error('Error retrieving metadata by page slug:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// POST /api/v1/metadata - Create or update metadata for a page
router.post('/', async (req, res) => {
  try {
    const metadataData = req.body;
    
    // In a real implementation, you would have authentication here
    // For now, we'll allow anyone to create/update metadata
    
    const result = await contentService.createOrUpdateMetadata(metadataData);
    
    res.status(201).json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error creating/updating metadata:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// PUT /api/v1/metadata/:page_slug - Update metadata by page slug
router.put('/:page_slug', async (req, res) => {
  try {
    const { page_slug } = req.params;
    const metadataData = req.body;
    
    // In a real implementation, you would have authentication here
    const result = await contentService.updateMetadata(page_slug, metadataData);
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'METADATA_NOT_FOUND', message: 'Metadata not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      data: { page_slug, ...metadataData } 
    });
  } catch (error) {
    console.error('Error updating metadata:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// DELETE /api/v1/metadata/:page_slug - Delete metadata by page slug (requires authentication in real implementation)
router.delete('/:page_slug', async (req, res) => {
  try {
    const { page_slug } = req.params;
    
    // In a real implementation, you would have authentication here
    const result = await contentService.deleteMetadata(page_slug);
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'METADATA_NOT_FOUND', message: 'Metadata not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Metadata deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting metadata:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

module.exports = router;