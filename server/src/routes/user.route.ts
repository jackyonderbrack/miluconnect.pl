import { Router } from "express";
import { createMultipleUsers, createUser, getUser, getOtherUsers } from "../controllers/user.controller";
import { authorize } from "../middleware/authorization.middleware";

export const userRouter: Router = Router();

userRouter.post('/user', createUser);
userRouter.post('/users', createMultipleUsers)
userRouter.get('/user', authorize, getUser);
userRouter.get('/users', authorize, getOtherUsers);