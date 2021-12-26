import { Schema, model } from "mongoose";
import {IUser} from '../interface/user.interface'

const UserSchema = new Schema<IUser>({

    name:{
        type: String,
    },
    age:{
        type: Number
    },
    gender: String
})


export const User = model<IUser>('users', UserSchema)