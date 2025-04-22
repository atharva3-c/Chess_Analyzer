// routes/games.js
import express from 'express';
import Game from '../models/Game.js';

const router = express.Router();

// Create a new game
router.post('/games', async (req, res) => {
  const { player1, player2 } = req.body;
  const newGame = new Game({ player1, player2 });
  await newGame.save();
  res.json({ success: true, game: newGame });
});

// Get games by userId (find games where the user is either player1 or player2)
router.get('/games/:userId', async (req, res) => {
  const userId = req.params.userId;
  const games = await Game.find({ $or: [{ player1: userId }, { player2: userId }] });
  res.json(games);
});

export default router;
