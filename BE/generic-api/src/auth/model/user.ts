import { Schema, Types, model } from "mongoose";

export class User implements User {
    username: String;
    role: String;
    password: String;

    constructor(username: String, role: String, password: String) {
        this.username = username;
        this.role = role;
        this.password = password;
    }
}

export interface User {
    username: String,
    password: String,
    role: String,
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    },
})

export const DbUser = model<User>("User", userSchema)

export default userSchema;
