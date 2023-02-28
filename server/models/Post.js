import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  mainPhoto: { type: String, required: true },
  photos: { type: [String] },
  content: { type: String, required: true },
  shortDescription: { type: String, required: true },
  tags: { type: [String] },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Post', postSchema);