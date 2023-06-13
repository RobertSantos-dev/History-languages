import React from "react";
import { screen, render } from "@testing-library/react-native";
import App from "../../App";

describe('Testes iniciais', () => {
  it('01 - Teste para saber se é mostrado um texto', () => {
    render(<App />);

    const element = screen.getByText(/Deus/);
    expect(element).toBeTruthy();
  });
});