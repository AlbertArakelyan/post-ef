import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  photoPath: { type: String },
  password: { type: String, required: true },
  isEmailVerified: { type: Boolean },
  resetPasswordToken: { type: String }, 
  resetPasswordExpires: { type: Number },
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });

export default mongoose.model('User', userSchema);