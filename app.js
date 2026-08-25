const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Deployed via Docker + GitHub Actions + EC2  + Soham</h1>');
});

app.listen(8080, () => console.log('App running on port 8080'));