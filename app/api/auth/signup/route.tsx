import { connectToDB } from "@/library/database";
import User from "@/models/user";
import { hashPassword, responseMessage } from "@/utility/helpers";

export const POST = async (request: Request) => {
  const { first_name, last_name, email, password } = await request.json();

  try {
    await connectToDB();

    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password === ""
    ) {
      return responseMessage("Invalid data, please fill required fields!", 500);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return responseMessage("User already exist with this email!", 500);
    }

    const hashedPassword = await hashPassword(password);

    const createdUser = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    const user = await createdUser.save();

    if (user) {
      return responseMessage("Successfully created account", 200);
    }
  } catch (error) {
    return responseMessage("Internal Server Error", 500);
  }
};
