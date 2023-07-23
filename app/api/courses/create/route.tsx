import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import { responseMessage } from "@/utility/helpers";

export const POST = async (request: Request) => {
  const {
    title,
    subtitle,
    description,
    image,
    skillLevel,
    category,
    language,
    duration,
    price,
    popularity,
    coupon,
    sections,
    instructor,
  } = await request.json();

  try {
    await connectToDB();

    if (
      title === "" ||
      subtitle === "" ||
      description === "" ||
      image === "" ||
      skillLevel === "" ||
      category === "" ||
      language === "" ||
      duration === "" ||
      price === "" ||
      popularity === "" ||
      coupon === "" ||
      sections === "" ||
      instructor === ""
    ) {
      return responseMessage("Invalid inputs, please enter valid data", 500);
    }

    const createdCourse = new Course({
      title,
      subtitle,
      description,
      image,
      skillLevel,
      category,
      language,
      duration,
      price,
      popularity,
      coupon,
      sections,
      instructor,
    });

    if (!createdCourse) {
      return responseMessage(
        "Could not create course right now, please try again later",
        500
      );
    }

    const course = await createdCourse.save();

    if (course) {
      return responseMessage("Successfully created course", 201);
    }
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
