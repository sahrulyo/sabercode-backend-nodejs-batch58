import { SECRET } from '../utils/env'
import mongoose from "mongoose";
import { encrypt } from "../utils/encryption";


const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profilePicture: {
      type: String,
      default: "default.jpg",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = encrypt(SECRET, user.password);
  next();
});

UserSchema.pre("updateOne", async function (next) {
  const user = (this as unknown as { _update: any })._update;
  user.password = encrypt(SECRET, user.password);
  next();
});

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
