// models/game.js
import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  player1: String, // userId
  player2: String, // userId
  result: { type: String, enum: ['white', 'black', 'draw'], default: null },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Game', GameSchema);