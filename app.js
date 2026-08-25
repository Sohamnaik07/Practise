const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Deployed via Docker + GitHub Actions + EC2  + Soham</h1>');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
///////
app.listen(8080, () => console.log('App running on port 8080'));
