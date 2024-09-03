import { User } from './user.model'; // Zaktualizuj ścieżkę do modelu użytkownika

declare module 'express-serve-static-core' {
    interface Request {
        userId?: User.id;
    }
}