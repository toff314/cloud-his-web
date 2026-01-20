const express = require('express');
const router = express.Router();
const ImageAssetService = require('../services/image-asset.service');

const imageAssetService = new ImageAssetService();

// GET /api/v1/images - Retrieve image assets with optional filters
router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0, filename } = req.query;
    
    // Apply filters
    const filters = {};
    if (filename) {
      filters.filename = filename;
    }
    
    const imageAssets = await imageAssetService.getAllImageAssets(parseInt(limit), parseInt(offset));
    
    res.json({ 
      success: true, 
      data: imageAssets,
      pagination: {
        limit: parseInt(limit),
        offset: parseInt(offset),
        total: imageAssets.length // This is simplified; in practice, you'd have a separate count query
      }
    });
  } catch (error) {
    console.error('Error retrieving image assets:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// GET /api/v1/images/:id - Retrieve specific image asset by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const imageAsset = await imageAssetService.getImageAssetById(parseInt(id));
    if (!imageAsset) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'IMAGE_ASSET_NOT_FOUND', message: 'Image asset not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      data: imageAsset 
    });
  } catch (error) {
    console.error('Error retrieving image asset by ID:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// POST /api/v1/images - Create new image asset (requires authentication in real implementation)
router.post('/', async (req, res) => {
  try {
    const imageData = req.body;
    
    // In a real implementation, you would have authentication here
    // For now, we'll allow anyone to create image assets
    
    const result = await imageAssetService.createImageAsset(imageData);
    
    res.status(201).json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error creating image asset:', error);
    if (error.message.includes('already exists')) {
      return res.status(409).json({ 
        success: false, 
        error: { code: 'FILEPATH_CONFLICT', message: error.message } 
      });
    }
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// PUT /api/v1/images/:id - Update image asset by ID (requires authentication in real implementation)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const imageData = req.body;
    
    // In a real implementation, you would have authentication here
    const result = await imageAssetService.updateImageAsset(parseInt(id), imageData);
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'IMAGE_ASSET_NOT_FOUND', message: 'Image asset not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      data: { id: parseInt(id), ...imageData } 
    });
  } catch (error) {
    console.error('Error updating image asset:', error);
    if (error.message.includes('already exists')) {
      return res.status(409).json({ 
        success: false, 
        error: { code: 'FILEPATH_CONFLICT', message: error.message } 
      });
    }
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// DELETE /api/v1/images/:id - Delete image asset by ID (requires authentication in real implementation)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real implementation, you would have authentication here
    const result = await imageAssetService.deleteImageAsset(parseInt(id));
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'IMAGE_ASSET_NOT_FOUND', message: 'Image asset not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Image asset deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting image asset:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

module.exports = router;