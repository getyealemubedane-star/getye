const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: "YOUR_CLOUD_DATABASE_URL" // እዚህ ላይ የክላውድ ዳታቤዝ ሊንክህን ታስገባለህ
});

// ተማሪዎችን ለማየት
app.get('/students', async (req, res) => {
  const result = await pool.query('SELECT * FROM students');
  res.json(result.rows);
});

app.listen(5000, () => console.log('Mendida TVET Server running on port 5000'));