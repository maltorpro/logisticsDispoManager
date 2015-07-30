var mongoose = require('mongoose');
var collectionName = 'disposal';

var DisposalSchema = new mongoose.Schema({
  disposalNumber: String,
  customerNumber: String,
  address: String,
  invoiceNumber: String,
  referenceNumber: String,
  updated_at: { type: Date, default: Date.now },
});

DisposalSchema.index({
  disposalNumber: "text",
  customerNumber: "text",
  address: "text",
  invoiceNumber: "text",
  referenceNumber: "text"});

module.exports = mongoose.model('Disposal', DisposalSchema,collectionName);