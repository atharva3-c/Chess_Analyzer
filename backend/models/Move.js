import mongoose from 'mongoose';

const MoveSchema = new mongoose.Schema({
  gameId: { type: String },
  player: String,               // userId of player
  notation: String,            // standard move notation (e.g. Ne7)
  fen: String,                 // FEN string after this move
  evaluation: Number,          // score after move
  moveNumber: Number,          // index of move in game
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Move', MoveSchema);