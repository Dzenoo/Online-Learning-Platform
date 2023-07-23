import mongoose from "mongoose";

export async function connectToDb() {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "online-learning-prod",
    });
  } catch (error) {
    console.log(error);
  }
}
