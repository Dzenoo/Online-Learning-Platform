import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "First Name is required"],
    match: [
      /^[A-Z][a-z]+$/,
      "First Name invalid, must contain uppercase letters",
    ],
  },
  last_name: {
    type: String,
    required: [true, "Last Name is required"],
    match: [
      /^[A-Z][a-z]+$/,
      "Last Name invalid, must contain uppercase letters",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Email invalid, must be correct type"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
