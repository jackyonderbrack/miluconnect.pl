import bcrypt from 'bcryptjs';

/**
 * Funkcja do haszowania hasła
 * @param {string} password - Hasło użytkownika do zahashowania
 * @returns {Promise<string>} - Hasło po zahashowaniu
 */
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

/**
 * Funkcja do sprawdzania poprawności hasła
 * @param {string} password - Podane hasło użytkownika
 * @param {string} hash - Zahashowane hasło do porównania
 * @returns {Promise<boolean>} - True jeśli hasło jest poprawne, false w przeciwnym razie
 */
export const checkPasswordHash = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
};
