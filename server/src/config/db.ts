import mongoose, { ConnectOptions, Error } from "mongoose";

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(`${MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions).then(() => console.log("Mongodb Connected")).catch((err: Error) => {
  if (err) throw err;
})
