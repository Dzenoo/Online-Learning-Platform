import Course from "../../../../../../models/course";
import Student from "../../../../../../models/student";
import { connectToDB } from "../../../../../../library/database";
import { responseMessage } from "../../../../../../utility/helpers";

export const POST = async (
  request: Request,
  { params }: { params: { courseId: string; studentId: string } }
) => {
  try {
    await connectToDB();

    console.log(params.courseId);

    const course = await Course.findById(params.courseId);
    const student = await Student.findById(params.studentId);

    if (!course || !student) {
      return responseMessage("Cannot be found ", 404);
    }

    if (student.courses.includes(params.courseId)) {
      return responseMessage("Already purchased course", 500);
    } else {
      await student.cart.items.pull(params.courseId);
      student.cart.totalAmount = student.cart.totalAmount -= course.price;

      if (student.favorites.includes(params.courseId)) {
        await student.favorites.pull(params.courseId);
      }

      await student.courses.push(params.courseId);
      await student.save();
      return responseMessage("Successfully purchased course", 200);
    }
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
