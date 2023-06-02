import express from "express";
import LanguagesR from "./Routes/Languages";

const app = express();

app.use(express.json());
app.use('/languages', LanguagesR);

export default app;
