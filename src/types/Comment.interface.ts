import { IUser } from "./User.interface";

export interface IComment {
    comment: string;
    author: IUser;
}

