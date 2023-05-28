const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_NAME_DATA_BASE}:${process.env.PASSWORD_DATA_BASE}@cluster0.pk6jbgm.mongodb.net/Next-E-commerce`
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
