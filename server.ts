import mongoose from "mongoose";
import app from "./src/app";
import configuration from "./src/configuration";

const connectServer = async () => {
  try {
    await mongoose.connect(configuration.database_Url as string);
    console.log("database connected successfully");

    app.listen(configuration.port, () => {
      console.log(`app listening in port ${configuration.port}`);
    });
  } catch (error) {
    console.log(`failed to connect ${error}`);
  }
};

connectServer();
