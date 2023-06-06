import express from "express";
import LanguagesFactory from "./Factories/LanguagesFactories";
import ExpressRoutes from "../Infrasctrure/Adapters/Express/ExpressRoutes";

const app = express();

const languagesFactory = LanguagesFactory.api();

app.use(express.json());
app.get('/languages', ExpressRoutes.adapter(languagesFactory));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
