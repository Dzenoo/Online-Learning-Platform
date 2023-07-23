import { connectToDB } from "@/library/database";
import Course from "@/models/course";
import { responseMessage } from "@/utility/helpers";

export const GET = async (
  request: Request,
  { params }: { params: { filter: any[] } }
) => {
  try {
    await connectToDB();

    const [category, price, skillLevel, language, duration, popularity] =
      params.filter.map((filter) => filter);

    const query: any = {};

    if (category) query.category = { $in: category };
    if (price) query.price = { $in: price };
    if (skillLevel) query.skillLevel = { $in: skillLevel };
    if (language) query.language = { $in: language };
    if (duration) query.duration = { $in: duration };
    if (popularity) query.popularity = { $in: popularity };

    const courses = await Course.find(query);

    console.log(courses);
  } catch (error) {
    console.log(error);
    return responseMessage("Internal server error", 500);
  }
};
