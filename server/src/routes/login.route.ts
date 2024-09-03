import { Router } from "express";
import { getToken } from "../middleware/authentication.middleware";

export const loginRouter: Router = Router();

loginRouter.post("/login", getToken);
