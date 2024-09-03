import { Request, Response } from 'express';
import { checkPasswordHash} from '../utils/bcryptjs.util';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import dotenv from 'dotenv';
import Logging from '../library/Logging';

dotenv.config()
const jwt_secret = process.env.JWT_SECRET || '';

export const getToken = async (req: Request, res: Response) => {
    try {
        
        const { email, password } = req.body;
        Logging.info(`getToken | body: ${req.body}`)

        const user = await User.findOne({ where: { email } });
        Logging.info(`getToken | user: ${user}`)

        if (!user) {
            Logging.info(`getToken | nie znaleziono usera`)
            return res.status(401).json({ message: 'Nieprawidłowy email' });
        }

        const isPasswordValid = await checkPasswordHash(password, user.password);
        if (!isPasswordValid) {
            Logging.info(`getToken | niepoprawne hasło: ${password}, ${user.password}`)
            return res.status(401).json({ message: 'Nieprawidłowe hasło' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, jwt_secret, { expiresIn: '72h' });

        Logging.info(`getToken | autentykacja zakończona - token: ${token}`)
        res.status(200).json({ id: user.id, token, name: user.name });
    } catch (error) {
        console.error('Błąd logowania:', error);
        res.status(500).json({ message: 'Nie udało się zalogować' });
    }
};


