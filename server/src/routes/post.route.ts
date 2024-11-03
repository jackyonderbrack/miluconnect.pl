import { Router } from "express";
import { authorize } from "../middleware/authorization.middleware";
import { createSinglePost, getPosts } from "../controllers/post.controller";

export const postRouter: Router = Router();

postRouter.post("/post", authorize, createSinglePost);
postRouter.get("/posts", authorize, getPosts);