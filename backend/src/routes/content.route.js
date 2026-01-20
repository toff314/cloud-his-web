const express = require('express');
const router = express.Router();
const contentService = require('../services/content.service');

// Get all content
router.get('/', async (req, res) => {
  try {
    const contents = await contentService.getAllContent();
    res.json(contents);
  } catch (error) {
    console.error('Error fetching all content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get content by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await contentService.getContentWithMetadata(slug);
    
    if (!result) {
      return res.status(404).json({ error: 'Content not found' });
    }
    
    res.json(result);
  } catch (error) {
    console.error(`Error fetching content for slug ${req.params.slug}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new content with metadata
router.post('/', async (req, res) => {
  try {
    const { content, metadata } = req.body;
    const result = await contentService.createContentWithMetadata(content, metadata);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update content with metadata
router.put('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const { content, metadata } = req.body;
    const result = await contentService.updateContentWithMetadata(slug, content, metadata);
    res.json(result);
  } catch (error) {
    console.error(`Error updating content for slug ${slug}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete content with metadata
router.delete('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await contentService.deleteContentWithMetadata(slug);
    res.json(result);
  } catch (error) {
    console.error(`Error deleting content for slug ${slug}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;