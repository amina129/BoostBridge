const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'provider', 'customer'],
    required: true
  },
  ville: { type: String, trim: true }, // La ville est incluse ici
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
