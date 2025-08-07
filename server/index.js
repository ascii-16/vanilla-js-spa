const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../')));
app.use('/pages', express.static(path.join(__dirname, '../', 'pages')));

app.get('/{*any}', (req, res, next) => {
   if (req.path.endsWith('.js') || req.path.endsWith('.css') || req.path.endsWith('.map')) {
    return next();
  }

  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});