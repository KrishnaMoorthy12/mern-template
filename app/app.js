import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  // Set static folder
  router.use(express.static(path.resolve(__dirname, 'build')));

  // Serve the frontend
  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
} else {
  // Fallback for development environment
  router.get('*', (req, res) => {
    res.send(`Development environment: can't access forward request.`);
  });
}

export default router;
