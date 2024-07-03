import { describe, test, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Catalogo from "../Pages/Catalogo";
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
  render(
    <BrowserRouter>
      <Catalogo />
    </BrowserRouter>
  );

  test("Cargan los titulos", () => {
    expect(screen.getByTestId("Camisas deportivas")).toBeDefined();
    expect(screen.getByTestId("Camisas para estampar")).toBeDefined();
  });
});

describe("Pruebas de integracion", () => {
  test("Carga el header", () => {
    expect(screen.getByTestId("Header")).toBeDefined();
  });

  test("Carga el footer", () => {
    expect(screen.getByTestId("Footer")).toBeDefined();
  });

  test("Deben cargar las camisas ", () => {
    expect(screen.getByTestId("Footer")).toBeDefined();
  });

  test("Debe cargar el themeswitcher", () => {
    expect(screen.getByTestId("ThemeSwitcher")).toBeDefined();
  });
});
