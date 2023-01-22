import { IComment } from "./Comment.interface";
import { IUser } from "./User.interface";

export interface IPost {
  _id: string;
  username: string;
  title: string;
  text: string;
  photo: string;
  category: string;
  views: number;
  author: IUser;
  comments: IComment[];
  createdAt: Date;
}
