import * as sinon from "sinon";
import { expect } from "chai";

import LanguagesRepository from "../../../Domain/Repositories/LanguagesRepository";
import { findAllMock } from "../../Mock/Languages.mock";

describe('Testes para a coleção languages na camada de Repositories', function() {
  afterEach(function() { sinon.restore(); });

  it('01 - Testando se é retornado todos os valores da coleção', async function() {
    sinon.stub(LanguagesRepository.prototype, 'findAll').resolves(findAllMock);

    const repository = new LanguagesRepository();
    const values = await repository.findAll();

    expect(values).to.been.equal(findAllMock);
    expect(values).to.be.have.length(6);
  });

  it('02 - Testando se é retornado um valor da coleção', async function() {
    sinon.stub(LanguagesRepository.prototype, 'findId').resolves(findAllMock[0]);

    const repository = new LanguagesRepository();
    const values = await repository.findId('letras aleatorias');

    expect(values).to.been.equal(findAllMock[0]);
    expect(values).to.be.have.property('id');
    expect(values).to.be.have.property('description');
    expect(values).to.be.have.property('name');
    expect(values).to.be.have.property('year');
  });

  it('03 - Testando se é retornado um valor nulo da coleção', async function() {
    sinon.stub(LanguagesRepository.prototype, 'findId').resolves(null);

    const repository = new LanguagesRepository();
    const values = await repository.findId('letras aleatorias');

    expect(values).to.be.been.null;
  });
});
