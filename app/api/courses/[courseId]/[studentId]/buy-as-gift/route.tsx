import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Student from "@/models/student";
import { responseJson, responseMessage } from "@/utility/helpers";

export const POST = async (
  request: Request,
  { params }: { params: { courseId: string; studentId: string } }
) => {
  try {
    await connectToDB();

    const { email, first_name } = await request.json();

    const course = await Course.findById(params.courseId);
    const studentWhosGift = await Student.findById(params.studentId);
    const studentToGift = await Student.findOne({
      email: email,
      first_name: first_name,
    });

    if (!course || !studentToGift || !studentWhosGift) {
      return responseMessage("Cannot be found ", 404);
    }

    if (studentToGift.courses.includes(params.courseId)) {
      return responseMessage("Already gifted course", 500);
    }

    studentToGift.courses.push(course._id);
    await studentToGift.save();
    return responseMessage("Successfully gifted course", 200);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
