import { connectToDB } from "@/library/database";
import { responseMessage } from "@/utility/helpers";

export const POST = async (request: Request) => {
  try {
    await connectToDB();
  } catch (error) {
    return responseMessage("Internal Server Error", 500);
  }
};
