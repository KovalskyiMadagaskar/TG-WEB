const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Раздача статических файлов
app.use(express.static(__dirname));

// Отдаём index.html по умолчанию
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
