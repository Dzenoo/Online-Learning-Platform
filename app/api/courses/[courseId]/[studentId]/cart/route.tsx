import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import Student from "@/models/student";
import { responseJson, responseMessage } from "@/utility/helpers";

export const PATCH = async (
  request: Request,
  { params }: { params: { courseId: string; studentId: string } }
) => {
  try {
    await connectToDB();

    const course = await Course.findById(params.courseId);
    const student = await Student.findById(params.studentId);

    if (!course) {
      return responseMessage("Could not find course", 404);
    }

    if (!student) {
      return responseMessage("Could not find student", 404);
    }

    if (student.cart.items.includes(course._id)) {
      student.cart.items.pull(course._id);
      student.cart.totalAmount -= course.price;
      await student.save();
      return responseMessage("Course is removed from the cart ", 200);
    } else {
      student.cart.items.push(course._id);
      student.cart.totalAmount += course.price;
      await student.save();
      return responseMessage("Course added to cart ", 201);
    }
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
