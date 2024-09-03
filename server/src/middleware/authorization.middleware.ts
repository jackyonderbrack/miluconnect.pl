import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()
const jwt_secret = process.env.JWT_SECRET || ""

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Brak tokenu autoryzacyjnego' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwt_secret) as { id: string };
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Nieprawidłowy token' });
    }
};
