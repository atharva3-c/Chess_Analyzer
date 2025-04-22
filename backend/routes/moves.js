import express from 'express';
import Move from '../models/Move.js';

const router = express.Router();

// Create a new move
router.post('/moves', async (req, res) => {
  try {
    // Validate required fields
    const { gameId, player, notation, fen, evaluation, moveNumber } = req.body;
    console.log('Incoming move data:', req.body);

    if (!gameId || !player || !notation || !fen || !moveNumber) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Create a new move
    const move = new Move({
      gameId,
      player,
      notation,
      fen,
      evaluation,
      moveNumber,
    });

    // Save the move to the database
    await move.save();

    // Send success response
    res.status(201).json({ success: true, move });
  } catch (error) {
    console.error('Error saving move:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Get moves by gameId (sorted by moveNumber)
router.get('/moves/:gameId', async (req, res) => {
  try {
    const gameId = req.params.gameId;
    if (!gameId) {
      return res.status(400).json({ success: false, message: 'GameId is required' });
    }

    const moves = await Move.find({ gameId }).sort({ moveNumber: 1 });

    // If no moves found, return an empty array
    if (moves.length === 0) {
      return res.status(404).json({ success: false, message: 'No moves found for this game' });
    }

    res.json(moves);
  } catch (error) {
    console.error('Error retrieving moves:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

export default router;
