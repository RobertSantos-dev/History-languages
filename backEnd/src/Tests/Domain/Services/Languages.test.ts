import * as sinon from "sinon";
import { expect } from "chai";

import LanguagesRepository from "../../../Domain/Repositories/LanguagesRepository";
import LanguagesService from "../../../Domain/Services/LanguagesService";
import LanguagesError from "../../../Domain/Errors/LanguagesError";
import { Languages } from "../../../Domain/Entities/Languages";
import { findAllMock } from "../../Mock/Languages.mock";

describe('Testes para a coleção languages na camada de Services', function() {
  afterEach(function() { sinon.restore(); });

  it('01 - Testando se é retornado todos os valores da coleção', async function() {
    const languages = findAllMock.map((e) => new Languages(e));
    sinon.stub(LanguagesService.prototype, 'findAll').resolves(languages);

    const repository = new LanguagesRepository();
    const service = new LanguagesService(repository);
    const result = await service.findAll();

    expect(result).to.be.been.equal(languages);
  });

  it('02 - Testando se é retornado um valor da coleção', async function() {
    const languages = new Languages(findAllMock[0])
    sinon.stub(LanguagesService.prototype, 'findId').resolves(languages);

    const repository = new LanguagesRepository();
    const service = new LanguagesService(repository);
    const result = await service.findId('letras aleatorias');

    expect(result).to.be.been.equal(languages);
  });

  it('03 - Testando se é retornado um Error da coleção', async function() {
    const exception = new LanguagesError('Id invalid');
    sinon.stub(LanguagesService.prototype, 'findId').rejects(exception);
    // sinon.stub(LanguagesService.prototype, 'findId').throws(exception);
    
    // try {
    //   await service.findId('letras aleatorias');
    // } catch (err) {
    //   expect(err).to.be.equal(exception);
    // }

    const repository = new LanguagesRepository();
    const service = new LanguagesService(repository);
    service.findId('letras aleatorias')
      .then((res) => { console.log(res) })
      .catch((err) => expect(err).to.be.equal(exception));
  });
});