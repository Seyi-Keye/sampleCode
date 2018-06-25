import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

require("dotenv").config();
import routes from "./server/routes/index";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.set("port", port);

app.use(routes);
app.get("*", (req, res) => res.status(200).send({ message: "welcome to API" }));

app.listen(port, () => console.log(`App is listening on ${port}`));
