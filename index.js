import express from 'express';
import { longestcommonsubstring } from './longestcommonsubstring.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/status', (req, res) => {
  res.send("Sindhu");
});
app.get('/lcs', (req, res) => {
  const { first, second } = req.query;
  if (typeof first === 'undefined' || typeof second === 'undefined') {
    return res.status(400).send('Please provide query params ?first=...&second=...');
  }
  const len = longestcommonsubstring(first, second);
  res.json({ length: len });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000 on http://localhost:3000');
  console.log('Use /lcs?first=abc&second=xyz to get longest common substring length');
});

