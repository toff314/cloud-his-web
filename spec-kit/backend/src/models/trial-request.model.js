const { dbPath } = require('../config/database.config');
const sqlite3 = require('sqlite3').verbose();

class TrialRequest {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  // Get all trial requests
  getAll(callback) {
    const sql = `SELECT * FROM trial_requests ORDER BY created_at DESC`;
    this.db.all(sql, [], callback);
  }

  // Get trial request by ID
  getById(id, callback) {
    const sql = `SELECT * FROM trial_requests WHERE id = ?`;
    this.db.get(sql, [id], callback);
  }

  // Get trial requests by phone number
  getByPhone(phone, callback) {
    const sql = `SELECT * FROM trial_requests WHERE phone = ? ORDER BY created_at DESC`;
    this.db.all(sql, [phone], callback);
  }

  // Create new trial request
  create(trialRequest, callback) {
    const sql = `INSERT INTO trial_requests (phone, verification_code, clinic_name, contact_person, invitation_code, status, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      trialRequest.phone,
      trialRequest.verificationCode,
      trialRequest.clinicName,
      trialRequest.contactPerson,
      trialRequest.invitationCode,
      trialRequest.status || 'pending',
      trialRequest.ipAddress
    ];
    this.db.run(sql, params, function(err) {
      callback(err, this ? this.lastID : null);
    });
  }

  // Update trial request status
  updateStatus(id, status, callback) {
    const sql = `UPDATE trial_requests SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    this.db.run(sql, [status, id], function(err) {
      callback(err);
    });
  }

  // Delete trial request
  delete(id, callback) {
    const sql = `DELETE FROM trial_requests WHERE id = ?`;
    this.db.run(sql, [id], callback);
  }

  close() {
    this.db.close();
  }
}

module.exports = TrialRequest;