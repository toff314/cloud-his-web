const express = require('express');
const router = express.Router();
const ContentService = require('../services/content.service');

const contentService = new ContentService();

// GET /api/v1/content - Retrieve published content with optional filters
router.get('/', async (req, res) => {
  try {
    const { limit = 10, offset = 0, tag, slug } = req.query;
    
    // If slug is provided, get specific content
    if (slug) {
      const content = await contentService.getContentBySlug(slug);
      if (!content) {
        return res.status(404).json({ 
          success: false, 
          error: { code: 'CONTENT_NOT_FOUND', message: 'Content not found' } 
        });
      }
      
      return res.json({ 
        success: true, 
        data: content 
      });
    }
    
    // Apply filters
    const filters = {};
    if (tag) {
      filters.tag = tag;
    }
    
    const contentList = await contentService.getAllContent(parseInt(limit), parseInt(offset), filters);
    
    // Get total count for pagination
    // Note: In a real implementation, you would want a separate count query
    res.json({ 
      success: true, 
      data: contentList,
      pagination: {
        limit: parseInt(limit),
        offset: parseInt(offset),
        total: contentList.length // This is simplified; in practice, you'd have a separate count query
      }
    });
  } catch (error) {
    console.error('Error retrieving content:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// GET /api/v1/content/:slug - Retrieve specific content by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const content = await contentService.getContentBySlug(slug);
    if (!content) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'CONTENT_NOT_FOUND', message: 'Content not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      data: content 
    });
  } catch (error) {
    console.error('Error retrieving content by slug:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// POST /api/v1/content - Create new content (requires authentication in real implementation)
router.post('/', async (req, res) => {
  try {
    const contentData = req.body;
    
    // In a real implementation, you would have authentication here
    // For now, we'll allow anyone to create content
    
    const result = await contentService.createContent(contentData);
    
    res.status(201).json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    console.error('Error creating content:', error);
    if (error.message.includes('already exists')) {
      return res.status(409).json({ 
        success: false, 
        error: { code: 'SLUG_CONFLICT', message: error.message } 
      });
    }
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// PUT /api/v1/content/:id - Update content by ID (requires authentication in real implementation)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contentData = req.body;
    
    // In a real implementation, you would have authentication here
    const result = await contentService.updateContent(parseInt(id), contentData);
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'CONTENT_NOT_FOUND', message: 'Content not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      data: { id: parseInt(id), ...contentData } 
    });
  } catch (error) {
    console.error('Error updating content:', error);
    if (error.message.includes('already exists')) {
      return res.status(409).json({ 
        success: false, 
        error: { code: 'SLUG_CONFLICT', message: error.message } 
      });
    }
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

// DELETE /api/v1/content/:id - Delete content by ID (requires authentication in real implementation)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real implementation, you would have authentication here
    const result = await contentService.deleteContent(parseInt(id));
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: { code: 'CONTENT_NOT_FOUND', message: 'Content not found' } 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Content deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting content:', error);
    res.status(500).json({ 
      success: false, 
      error: { code: 'DATABASE_ERROR', message: error.message } 
    });
  }
});

module.exports = router;