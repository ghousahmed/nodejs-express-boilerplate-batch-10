import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import chalk from "chalk";

const app = express();

app.use(helmet());
app.use(express.json());

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@ahmedclustor.unkfsqr.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=AhmedClustor`);

mongoose.connection.on("connected", () => {
    console.log(chalk.white.bgGreen("---- Connected to MongoDB ----"));
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});