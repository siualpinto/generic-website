import { Schema, Types } from "mongoose";

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const clientSchema = new Schema<Client>({
  id: Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export default clientSchema;
