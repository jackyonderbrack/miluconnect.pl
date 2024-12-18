import { Router } from "express";
import { createMultipleUsers, createUser, deleteUser, getUser, getUsers } from "../controllers/user.controller";
import { authorize } from "../middleware/authorization.middleware";

export const userRouter: Router = Router();

userRouter.post("/user", createUser);
userRouter.post("/users", createMultipleUsers);
userRouter.get("/user", authorize, getUser);
userRouter.get("/users", authorize, getUsers);
userRouter.delete("/user/:id", authorize, deleteUser);
