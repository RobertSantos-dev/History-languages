import express from "express";
import cors from "cors";
import LanguagesFactory from "./Factories/LanguagesFactory";
import ExpressRoutes from "../Infrasctrure/Adapters/Express/ExpressRoutes";


const app = express();

const factory = LanguagesFactory.api();
const adapter = new ExpressRoutes(factory);

app.use(cors());
app.use(express.json());
app.get('/languages', (req, res) => adapter.getAll(req, res));
app.get('/languages/:id', (req, res) => adapter.getId(req, res));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
