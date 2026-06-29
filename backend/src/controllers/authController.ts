import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d',
  });
};

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, phoneNumber, password } = req.body;

    const userExists = await User.findOne({ $or: [{ username }, { phoneNumber }] });
    if (userExists) {
       res.status(400).json({ message: 'User already exists' });
       return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      phoneNumber,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        phoneNumber: user.phoneNumber,
        avatar: user.avatar,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password || ''))) {
      res.json({
        _id: user.id,
        username: user.username,
        phoneNumber: user.phoneNumber,
        avatar: user.avatar,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
