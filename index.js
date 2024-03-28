import express from "express";
// import dotenv from "dotenv";
// import Router from "./config/router.js";
// import { connectDb } from "./db/helpers.js";
// dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello from jenkins!</h1>"));
app.listen(3000, () => console.log("app listening on port 3000"));
// app.use(express.json());
// app.use("/api", Router);

// async function startServer() {
//   try {
//     await connectDb();
//     app.listen(process.env.PORT, () =>
//       console.log("App is listening on port", process.env.PORT)
//     );
//   } catch (error) {
//     console.error("Something went wrong", error);
//   }
// }

// startServer();
