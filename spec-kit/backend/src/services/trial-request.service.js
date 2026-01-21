const TrialRequest = require('../models/trial-request.model');

class TrialRequestService {
  // Get all trial requests
  async getAllTrialRequests() {
    return new Promise((resolve, reject) => {
      const trialRequestModel = new TrialRequest();
      
      trialRequestModel.getAll((err, requests) => {
        trialRequestModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(requests);
        }
      });
    });
  }

  // Get trial request by ID
  async getTrialRequestById(id) {
    return new Promise((resolve, reject) => {
      const trialRequestModel = new TrialRequest();
      
      trialRequestModel.getById(id, (err, request) => {
        trialRequestModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(request);
        }
      });
    });
  }

  // Get trial requests by phone number
  async getTrialRequestsByPhone(phone) {
    return new Promise((resolve, reject) => {
      const trialRequestModel = new TrialRequest();
      
      trialRequestModel.getByPhone(phone, (err, requests) => {
        trialRequestModel.close();
        if (err) {
          reject(err);
        } else {
          resolve(requests);
        }
      });
    });
  }

  // Create new trial request
  async createTrialRequest(trialRequestData) {
    return new Promise((resolve, reject) => {
      const trialRequestModel = new TrialRequest();
      
      trialRequestModel.create(trialRequestData, (err, requestId) => {
        trialRequestModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ id: requestId });
        }
      });
    });
  }

  // Update trial request status
  async updateTrialRequestStatus(id, status) {
    return new Promise((resolve, reject) => {
      const trialRequestModel = new TrialRequest();
      
      trialRequestModel.updateStatus(id, status, (err) => {
        trialRequestModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ updated: true });
        }
      });
    });
  }

  // Delete trial request
  async deleteTrialRequest(id) {
    return new Promise((resolve, reject) => {
      const trialRequestModel = new TrialRequest();
      
      trialRequestModel.delete(id, (err) => {
        trialRequestModel.close();
        if (err) {
          reject(err);
        } else {
          resolve({ deleted: true });
        }
      });
    });
  }
}

module.exports = new TrialRequestService();