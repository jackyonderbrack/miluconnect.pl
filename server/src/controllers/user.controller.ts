import { Request, Response } from "express";
import Logging from "../library/Logging";
import { User } from "../config/database.config";

export const createUser = async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ where: { email } });
		if (existingUser) {
			return res.status(400).json({ message: "Użytkownik z tym adresem email już istnieje" });
		}

		const newUser = await User.create({
			name,
			email,
			password,
			isAdmin: false,
		});

		res.status(201).json(newUser.id);
	} catch (error) {
		console.error("Błąd przy tworzeniu użytkownika:", error);
		res.status(500).json({ message: "Błąd serwera" });
	}
};

export const createMultipleUsers = async (req: Request, res: Response) => {
	try {
		const usersData = req.body;
		const createdUsers = [];
		for (const userData of usersData) {
			const { name, email, password } = userData;
			const existingUser = await User.findOne({ where: { email } });
			if (existingUser) {
				return res.status(400).json({ message: "Użytkownik z tym adresem email już istnieje" });
			}
			const newUser = await User.create({
				name,
				email,
				password,
				isAdmin: false,
			});

			createdUsers.push(newUser.name);
		}
		res.status(201).json({ message: "Utworzono użytkowników", names: createdUsers });
	} catch (error) {
		console.error("Błąd przy tworzeniu użytkownika:", error);
		res.status(500).json({ message: "Błąd serwera" });
	}
};

export const getUser = async (req: Request, res: Response) => {
	try {
		const userId = req.userId;
		const user = await User.findByPk(userId, {
			attributes: { exclude: ["password"] },
		});

		if (!user) {
			return res.status(404).json({ message: "Nie znaleziono użytkownika" });
		}

		res.status(200).json(user);
	} catch (error) {
		Logging.error(`Błąd w getUser: ${error}`);
		res.status(500).json({ message: "Błąd serwera" });
	}
};

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.findAll({
			attributes: { exclude: ["password", "token", "fcm_token"] },
		});
		res.status(200).json(users);
	} catch (error) {
		console.error("Błąd przy pobieraniu użytkowników:", error);
		res.status(500).json({ message: "Błąd serwera" });
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	try {
		let userId = req.params.id;
		const userToDelete = await User.findByPk(userId);
		if (userToDelete) {
			await userToDelete.destroy();
			res.status(200).json({ message: "Użytkownik został usunięty e" });
		} else {
			res.status(404).json({ message: "Nie znaleziono użytkownika" });
		}
	} catch (error) {
		console.error("Błąd przy usuwaniu użytkownika", error);
		res.status(500).json({ message: "Błąd przy usuwaniu użytkownika" });
	}
};
