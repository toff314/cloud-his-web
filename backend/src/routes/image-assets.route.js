const express = require('express');
const router = express.Router();
const imageAssetService = require('../services/image-asset.service');

// Get all image assets
router.get('/', async (req, res) => {
  try {
    const assets = await imageAssetService.getAllImageAssets();
    res.json(assets);
  } catch (error) {
    console.error('Error fetching all image assets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get image asset by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await imageAssetService.getImageAssetById(id);
    
    if (!asset) {
      return res.status(404).json({ error: 'Image asset not found' });
    }
    
    res.json(asset);
  } catch (error) {
    console.error(`Error fetching image asset with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new image asset
router.post('/', async (req, res) => {
  try {
    const imageData = req.body;
    const result = await imageAssetService.createImageAsset(imageData);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating image asset:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update image asset
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const imageData = req.body;
    const result = await imageAssetService.updateImageAsset(id, imageData);
    res.json(result);
  } catch (error) {
    console.error(`Error updating image asset with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete image asset
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await imageAssetService.deleteImageAsset(id);
    res.json(result);
  } catch (error) {
    console.error(`Error deleting image asset with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;