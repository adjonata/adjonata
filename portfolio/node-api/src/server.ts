import * as dotenv from "dotenv";

dotenv.config({
  path: __dirname + "/../.env"
});

import express from "express";
import routes from "./routes";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(routes);

mongoose
  .connect(process.env.CONNECTION!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    let port: number = 3333;

    if (process.env.NODE_ENV === "production") {
      port = parseInt(process.env.PRODUCTION_PORT);
    }
    app.listen(port, () => {
      console.log(`Server running on port ${port}!`);
    });
  })
  .catch(error => {
    console.log(error);
  });
