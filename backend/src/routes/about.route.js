const express = require('express');
const router = express.Router();
const aboutContentService = require('../services/about-content.service');

// Get about content by section
router.get('/:section', async (req, res) => {
  try {
    const { section } = req.params;
    const content = await aboutContentService.getAboutContentBySection(section);
    
    if (!content) {
      return res.status(404).json({ error: 'About content not found' });
    }
    
    res.json(content);
  } catch (error) {
    console.error(`Error fetching about content for section ${req.params.section}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all about content
router.get('/', async (req, res) => {
  try {
    const contents = await aboutContentService.getAllAboutContent();
    res.json(contents);
  } catch (error) {
    console.error('Error fetching all about content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new about content
router.post('/', async (req, res) => {
  try {
    const aboutContentData = req.body;
    const result = await aboutContentService.createAboutContent(aboutContentData);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating about content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update about content
router.put('/:section', async (req, res) => {
  try {
    const { section } = req.params;
    const aboutContentData = req.body;
    const result = await aboutContentService.updateAboutContent(section, aboutContentData);
    res.json(result);
  } catch (error) {
    console.error(`Error updating about content for section ${section}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete about content
router.delete('/:section', async (req, res) => {
  try {
    const { section } = req.params;
    const result = await aboutContentService.deleteAboutContent(section);
    res.json(result);
  } catch (error) {
    console.error(`Error deleting about content for section ${section}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;