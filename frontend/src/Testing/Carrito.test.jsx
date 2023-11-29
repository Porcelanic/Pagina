import { describe, test, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Carrito from "../Pages/Carrito";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Pruebas unitarias", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  localStorage.itemData =
    '[{"cantidad":"2","talla":"S","id":1,"img":"/RM.jpg","text":"Real Madrid 2023","price":100000,"estampa":""}]';

  render(
    <BrowserRouter>
      <Carrito />
    </BrowserRouter>
  );

  test("Comprueba el precio con IVA", () => {
    expect(screen.getByText("Valor a pagar = $238000")).toBeDefined();
  });
});
