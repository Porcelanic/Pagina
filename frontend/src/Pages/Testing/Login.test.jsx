import { describe, test, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

// describe("Login", () => {
//   test("Debe sumar dos numeros", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

describe("Login", () => {
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
      <Login />
    </BrowserRouter>
  );

  // -------------------------- PRUEBA 1 ---------------------------- 
  test("Deben cargar los inputs ", () => {
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeDefined()
    expect(screen.getByPlaceholderText('Contraseña')).toBeDefined()
    expect(screen.getByText('Iniciar sesión')).toBeDefined()
    expect(screen.getByText('Crear cuenta')).toBeDefined()
  });

  // -------------------------- PRUEBA 2 ----------------------------
  test("El correo es incorrecto", async () => {
    // Completa el formulario de login
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "noexiste@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "123456" },
    });

    // Envía el formulario
    fireEvent.click(screen.getByText("Iniciar sesión"));

    // Espera a que se complete el registro
    await screen.findByText("Correo no registrado");

    // Verifica que el usuario se haya registrado correctamente
    expect(
      screen.getByText("Correo no registrado")
    ).toBeDefined();
  });

  // -------------------------- PRUEBA 3 ----------------------------
  test("La contraseña es incorrecta", async () => {
    // Completa el formulario de login
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "juanperez@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "contraseniaIncorrecta" },
    });

    // Envía el formulario
    fireEvent.click(screen.getByText("Iniciar sesión"));

    // Espera a que se complete el registro
    await screen.findByText("Cotraseña incorrecta");

    // Verifica que el usuario se haya registrado correctamente
    expect(
      screen.getByText("Cotraseña incorrecta")
    ).toBeDefined();
  });

    // -------------------------- PRUEBA 3 ----------------------------
    test("El login es exitoso", async () => {
      // Completa el formulario de login
      fireEvent.change(screen.getByTestId("Correo"), {
        target: { value: "juanperez@example.com" },
      });
      fireEvent.change(screen.getByTestId("Contraseña"), {
        target: { value: "123456" },
      });
  
      // Envía el formulario
      fireEvent.click(screen.getByText("Iniciar sesión"));
  
      // Espera a que se complete el registro
      await screen.findByText("Correo y contraseña válidos :D");
  
      // Verifica que el usuario se haya registrado correctamente
      expect(
        screen.getByText("Correo y contraseña válidos :D")
      ).toBeDefined();
    });
});
