const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const examensRouter = require('./routes/examens');
const questionsRouter = require('./routes/questions');
app.use('/api/examens', examensRouter);
app.use('/api/questions', questionsRouter);

// Test route
app.get('/api/ping', (req, res) => {
  res.send('Server is running');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`
  🚀 Server running on http://localhost:${PORT}
  • Test: http://localhost:${PORT}/api/ping
  • Frontend: http://localhost:${PORT}/espace_enseignant.html
  `);
});
const cors = require('cors');
app.use(cors());
