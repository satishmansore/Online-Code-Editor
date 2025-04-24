const express = require('express');
const router = express.Router();
const { executeCode } = require('../services/codeExecutionService');

router.post('/', async (req, res) => {
  const { language, code } = req.body;
  try {
    const result = await executeCode(language, code);
    res.json({ output: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
