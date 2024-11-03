import { UserModel } from "./user.model";

declare module 'express-serve-static-core' {
    interface Request {
        userId?: UserModel.id;
    }
}