const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mohandhany:ttuurrkkyy2002@cluster0.pk6jbgm.mongodb.net/Next-E-commerce"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
