import { describe, test, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Registro from "../Pages/Registro";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
// ejemplo
describe("Prueba", () => {
  test("Debe sumar dos numeros", () => {
    expect(1 + 1).toBe(2);
  });
});

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

  // -------------------------- PRUEBA 1 ----------------------------
  test("Deben cargar los inputs ", () => {
    // Se buscan todos los campos
    expect(screen.findByText("Tipo de registro")).toBeDefined();
    expect(screen.findByText("Nombre")).toBeDefined();
    expect(screen.findByText("Correo electrónico")).toBeDefined();
    expect(screen.findByText("Contraseña")).toBeDefined();
  });

  // -------------------------- PRUEBA 2 ----------------------------
  test("El usuario debe registrarse correctamente", async () => {
    // Completa el formulario de registro
    fireEvent.change(screen.getByTestId("Nombre"), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "juanperez@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByTestId("Tipo de registro"), {
      target: { value: "Cliente" },
    });

    // Envía el formulario
    fireEvent.click(screen.getByText("Registrarme"));

    // Espera a que se complete el registro
    await screen.findByText("El registro se realizó correctamente");

    // Verifica que el usuario se haya registrado correctamente
    expect(
      screen.getByText("El registro se realizó correctamente")
    ).toBeDefined();
  });

  // -------------------------- PRUEBA 3 ----------------------------
  test("El usuario está repetido asi que muestra un error", async () => {
    // Completa el formulario de registro
    fireEvent.change(screen.getByTestId("Nombre"), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "juanperez@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByTestId("Tipo de registro"), {
      target: { value: "Cliente" },
    });

    // Envía el formulario
    fireEvent.click(screen.getByText("Registrarme"));

    // Espera a que devuelva un error
    await screen.findByText("El usuario está duplicado");

    // Verifica que se mueste en pantalla
    expect(screen.getByText("El usuario está duplicado")).toBeDefined();
  });

  // -------------------------- PRUEBA 4 ----------------------------
  test("No se muestran alertas", () => {
    expect(
      screen.queryByText("El registro se realizó correctamente")
    ).toBeNull();
  });
});
