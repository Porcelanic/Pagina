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

  test("Cargan los botones", () => {
    expect(screen.findByText("Ver más camisas deportivas")).toBeDefined();
  });
});

describe("Pruebas de integracion", () => {
  test("Carga el header", () => {
    expect(screen.findByText("Estampas")).toBeDefined();
    expect(screen.findByText("Carrito")).toBeDefined();
    expect(screen.findByText("Usuario")).toBeDefined();
  });

  test("Carga el footer", () => {
    expect(screen.findByText("About us")).toBeDefined();
    expect(screen.findByText("Contact us")).toBeDefined();
    expect(screen.findByText("Join us")).toBeDefined();
  });

  test("Deben cargar las camisas ", () => {
    expect(screen.findByText("custom-card")).toBeDefined();
    expect(screen.findByText("card")).toBeDefined();
  });

  test("Debe cargar el themeswitcher", () => {
    expect(screen.findByText("Toggle theme")).toBeDefined();
  });
});
