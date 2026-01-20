const express = require('express');
const router = express.Router();
const carouselService = require('../services/carousel.service');

// Get all active carousel items
router.get('/', async (req, res) => {
  try {
    const items = await carouselService.getAllActiveCarouselItems();
    res.json(items);
  } catch (error) {
    console.error('Error fetching carousel items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get carousel item by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await carouselService.getCarouselItemById(id);
    
    if (!item) {
      return res.status(404).json({ error: 'Carousel item not found' });
    }
    
    res.json(item);
  } catch (error) {
    console.error(`Error fetching carousel item with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new carousel item
router.post('/', async (req, res) => {
  try {
    const carouselItemData = req.body;
    const result = await carouselService.createCarouselItem(carouselItemData);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating carousel item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update carousel item
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const carouselItemData = req.body;
    const result = await carouselService.updateCarouselItem(id, carouselItemData);
    res.json(result);
  } catch (error) {
    console.error(`Error updating carousel item with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete carousel item
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await carouselService.deleteCarouselItem(id);
    res.json(result);
  } catch (error) {
    console.error(`Error deleting carousel item with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;