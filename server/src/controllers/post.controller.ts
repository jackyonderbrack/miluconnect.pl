import { Request, Response } from "express";
import { Post } from "../config/database.config";

export const getPosts = async (req: Request, res: Response) => {
	try {
		const posts = await Post.findAll();
		res.status(200).json(posts);
	} catch (error) {
		console.error("Błąd przy pobieraniu wpisów:", error);
        res.status(500).json({ message: "Błąd przy pobieraniu wpisów", error });
	}
};

export const createSinglePost = async (req: Request, res: Response) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            author: req.userId,
            date: new Date()
        });

        res.status(201).json({ message: `New post id: ${newPost.id}` });
    } catch (error) {
        console.error("Błąd przy tworzeniu wpisu:", error);
        res.status(500).json({ message: "Błąd przy tworzeniu wpisu", error });
    }
};
