import jwt from 'jsonwebtoken';

const SECRET = 'bonbloc_secret_key';

export const verifyToken = (req, res, next) => {

  const authHeader = req.headers['authorization'];

  if (!authHeader)
    return res.status(403).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];

  if (!token)
    return res.status(403).json({ error: 'Invalid token format' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};