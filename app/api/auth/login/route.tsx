import { connectToDB } from "@/library/database";
import User from "@/models/user";
import {
  generateToken,
  responseJson,
  responseMessage,
  validatePassword,
} from "@/utility/helpers";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  try {
    await connectToDB();

    if (email === "" || password === "") {
      return responseMessage("Invalid data, please fill required fields!", 500);
    }

    const existingUser = await User.findOne({
      email,
    });

    if (!existingUser) {
      return responseMessage("Invalid credentials, could not log you in.", 500);
    }

    const isPasswordValid = validatePassword(password, existingUser.password);

    if (!isPasswordValid) {
      return responseMessage("Invalid password, could not log you in.", 500);
    }

    const token = generateToken(existingUser.id);

    return responseJson(token, 200);
  } catch (error) {
    return responseMessage("Internal Server Error", 500);
  }
};
