import * as sinon from "sinon";
import { expect } from "chai";

import { Languages } from "../../../Domain/Entities/Languages";
import { findAllMock } from "../../Mock/Languages.mock";

describe('Testes para a coleção languages na camada de Entidades', function() {
  afterEach(function() { sinon.restore() });

  it('01 - Testando se é criado os valores com as propriedades corretas', function() {
    const entities = findAllMock.map((e) => new Languages(e));

    entities.forEach((e) => {
      expect(e).to.be.been.property('id');
      expect(e).to.be.been.property('description');
      expect(e).to.be.been.property('name');
      expect(e).to.be.been.property('year');
    });
  });

  it('02 - Testando se é criado todos os valores de retorno da coleção', function() {
    const entities = findAllMock.map((e) => new Languages(e));
    
    entities.forEach((e, i) => {
      expect(e.getId()).to.be.been.equal(findAllMock[i].id);

      expect(e.getName()).to.be.been.equal(findAllMock[i].name);

      expect(e.getYear()).to.be.been.equal(findAllMock[i].year);

      expect(e.getDescription()).to.be.been.equal(findAllMock[i].description);
    });
  });
});
