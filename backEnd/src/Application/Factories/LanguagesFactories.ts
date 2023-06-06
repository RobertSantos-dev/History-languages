import LanguagesRepository from "../../Domain/Repositories/LanguagesRepository";
import LanguagesService from "../../Domain/Services/LanguagesService";
import LanguagesController from "../../Infrasctrure/Controllers/LanguagesController";

export default class LanguagesFactory {
  static api() {
    const repository = new LanguagesRepository();
    const service = new LanguagesService(repository);
    const controller = new LanguagesController(service);

    return controller;
  }
}
