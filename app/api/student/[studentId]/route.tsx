import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import { responseJson, responseMessage } from "@/utility/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { studentId: string } }
) => {
  try {
    await connectToDB();
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
