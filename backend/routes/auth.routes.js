import { verifyToken } from '../middleware/auth.middleware.js';
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../db.js';

const router = express.Router();
const SECRET = 'bonbloc_secret_key';

// REGISTER
router.post('/register', async (req, res) => {
  const { fullName, email, college, country, state, district, address, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    await db.query(
      `INSERT INTO users(fullName,email,college,country,state,district,address,password)
       VALUES(?,?,?,?,?,?,?,?)`,
      [fullName, email, college, country, state, district, address, hashed]
    );

    res.json({ message: 'Registered Successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.query('SELECT * FROM users WHERE email=?', [email]);

  if (!rows.length) return res.status(401).json({ error: 'Invalid Credentials' });

  const match = await bcrypt.compare(password, rows[0].password);

  if (!match) return res.status(401).json({ error: 'Invalid Credentials' });

  const token = jwt.sign({ id: rows[0].id }, SECRET, { expiresIn: '1h' });

  res.json({ token });
});
// ✅ PROTECTED PROFILE API
router.get('/profile', verifyToken, async (req, res) => {

  const [users] = await db.query(
    'SELECT id, fullName, email FROM users WHERE id=?',
    [req.userId]
  );

  res.json(users[0]);
});

export default router;