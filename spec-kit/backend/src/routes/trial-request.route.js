const express = require('express');
const router = express.Router();
const trialRequestService = require('../services/trial-request.service');

// Get all trial requests
router.get('/', async (req, res) => {
  try {
    const requests = await trialRequestService.getAllTrialRequests();
    res.json(requests);
  } catch (error) {
    console.error('Error fetching all trial requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get trial request by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const request = await trialRequestService.getTrialRequestById(id);
    
    if (!request) {
      return res.status(404).json({ error: 'Trial request not found' });
    }
    
    res.json(request);
  } catch (error) {
    console.error(`Error fetching trial request with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get trial requests by phone number
router.get('/by-phone/:phone', async (req, res) => {
  try {
    const { phone } = req.params;
    const requests = await trialRequestService.getTrialRequestsByPhone(phone);
    
    res.json(requests);
  } catch (error) {
    console.error(`Error fetching trial requests for phone ${req.params.phone}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new trial request
router.post('/', async (req, res) => {
  try {
    const trialRequestData = req.body;
    // Add IP address to the request data
    trialRequestData.ipAddress = req.ip;
    
    const result = await trialRequestService.createTrialRequest(trialRequestData);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating trial request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update trial request status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }
    
    const result = await trialRequestService.updateTrialRequestStatus(id, status);
    res.json(result);
  } catch (error) {
    console.error(`Error updating trial request status for ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete trial request
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await trialRequestService.deleteTrialRequest(id);
    res.json(result);
  } catch (error) {
    console.error(`Error deleting trial request with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;