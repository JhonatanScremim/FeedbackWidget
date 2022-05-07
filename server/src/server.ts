import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log("Application started in port 3333");
});