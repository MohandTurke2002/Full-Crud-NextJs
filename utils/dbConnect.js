const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.URL_CONNECT_DATA_BASE}`);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
