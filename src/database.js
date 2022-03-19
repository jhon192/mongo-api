import mongoose from "mongoose";
import "dotenv/config";

(async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
