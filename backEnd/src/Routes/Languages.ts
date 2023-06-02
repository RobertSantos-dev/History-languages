import { Router } from "express";
import LanguagesC from "../Controllers/Languages";

const LanguagesR = Router();
const api = new LanguagesC();

LanguagesR.get('/', api.getAll);

export default LanguagesR;
