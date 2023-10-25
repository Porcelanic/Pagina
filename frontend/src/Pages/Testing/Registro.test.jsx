import { describe, test, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Registro from "../Registro";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

// describe("Login", () => {
//   test("Debe sumar dos numeros", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

describe("Registro", () => {
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
      <Registro />
    </BrowserRouter>
  );

  test("Deberia mostrar el contenido de la applicacion", () => {
    const input = screen.getByTestId("Nombre");
    fireEvent.change(input, { target: { value: "Waysoft" } });

    // const button = screen.getByText("Registrarme");
    // fireEvent.click(button);
    const button = screen.getByText("Cambiar texto de alerta");

    // Accionar el botón
    fireEvent.click(button);
    expect(screen.getByText(/Waysoft/i)).toBeDefined();
  });

  test("Deberia ostrar el contenido de la applicacion", () => {
    expect(screen.getByText("Cliente")).toBeDefined();
  });
});
