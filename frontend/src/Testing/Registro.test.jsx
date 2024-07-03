import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Registro from "../Pages/Registro";
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
      <Registro />
    </BrowserRouter>
  );

  // -------------------------- PRUEBA 1 ----------------------------
  test("Deben cargar los inputs ", () => {
    // Se buscan todos los campos
    expect(screen.getByTestId("Tipo de registro")).toBeDefined();
    expect(screen.getByTestId("Nombre")).toBeDefined();
    expect(screen.getByTestId("Correo")).toBeDefined();
    expect(screen.getByTestId("Contraseña")).toBeDefined();
  });

  // -------------------------- PRUEBA 2 ----------------------------
  test("No se recibe un nombre con mas de 45 caracteres", async () => {
    // Completa el formulario de registro
    fireEvent.change(screen.getByTestId("Nombre"), {
      target: { value: "1234567890123456789012345678901234567890123456" },
    });
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "email@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByTestId("Tipo de registro"), {
      target: { value: "Cliente" },
    });
    // Envía el formulario
    fireEvent.click(screen.getByTestId("Registrarme"));

    await screen.findByText("El nombre es mayor a 45 caracteres");

    expect(
      screen.getByText("El nombre es mayor a 45 caracteres")
    ).toBeDefined();
  });

  // -------------------------- PRUEBA 3 ----------------------------
  test("No se recibe un correo con mas de 45 caracteres", async () => {
    // Completa el formulario de registro
    fireEvent.change(screen.getByTestId("Nombre"), {
      target: { value: "Juan Perez" },
    });
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "1234567890123456789012345678901234@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByTestId("Tipo de registro"), {
      target: { value: "Cliente" },
    });
    // Envía el formulario
    fireEvent.click(screen.getByTestId("Registrarme"));

    await screen.findByText("El correo es mayor a 45 caracteres");

    expect(
      screen.getByText("El correo es mayor a 45 caracteres")
    ).toBeDefined();
  });

  // -------------------------- PRUEBA 4 ----------------------------
  test("No se recibe una contraseña con mas de 45 caracteres", async () => {
    // Completa el formulario de registro
    fireEvent.change(screen.getByTestId("Nombre"), {
      target: { value: "Juan Perez" },
    });
    fireEvent.change(screen.getByTestId("Correo"), {
      target: { value: "correo@example.com" },
    });
    fireEvent.change(screen.getByTestId("Contraseña"), {
      target: { value: "1234567890123456789012345678901234567890123456" },
    });
    fireEvent.change(screen.getByTestId("Tipo de registro"), {
      target: { value: "Cliente" },
    });
    // Envía el formulario
    fireEvent.click(screen.getByTestId("Registrarme"));

    await screen.findByText("La contraseña es mayor a 45 caracteres");

    expect(
      screen.getByText("La contraseña es mayor a 45 caracteres")
    ).toBeDefined();
  });
});

describe("Pruebas de integracion", () => {
  // -------------------------- PRUEBA 6 ----------------------------
  test("Deben cargar los componentes ", () => {
    expect(screen.getByTestId("Header")).toBeDefined();
    expect(screen.getByTestId("Form")).toBeDefined();
  });

  // // -------------------------- PRUEBA 7 ----------------------------
  // test("El usuario debe registrarse correctamente", async () => {
  //   // Completa el formulario de registro
  //   fireEvent.change(screen.getByTestId("Nombre"), {
  //     target: { value: "Juan Pérez" },
  //   });
  //   fireEvent.change(screen.getByTestId("Correo"), {
  //     target: { value: "juanperez@example.com" },
  //   });
  //   fireEvent.change(screen.getByTestId("Contraseña"), {
  //     target: { value: "123456" },
  //   });
  //   fireEvent.change(screen.getByTestId("Tipo de registro"), {
  //     target: { value: "Cliente" },
  //   });

  //   // Envía el formulario
  //   fireEvent.click(screen.getByTestId("Registrarme"));

  //   // Espera a que se complete el registro
  //   await screen.findByText("El registro se realizó correctamente");

  //   // Verifica que el usuario se haya registrado correctamente
  //   expect(
  //     screen.getByText("El registro se realizó correctamente")
  //   ).toBeDefined();
  // });

  // -------------------------- PRUEBA 8 ----------------------------
  //   test("No deja registrar un usuario repetido", async () => {
  //     // Completa el formulario de registro
  //     fireEvent.change(screen.getByTestId("Nombre"), {
  //       target: { value: "Juan Pérez" },
  //     });
  //     fireEvent.change(screen.getByTestId("Correo"), {
  //       target: { value: "juanperez@example.com" },
  //     });
  //     fireEvent.change(screen.getByTestId("Contraseña"), {
  //       target: { value: "123456" },
  //     });
  //     fireEvent.change(screen.getByTestId("Tipo de registro"), {
  //       target: { value: "Cliente" },
  //     });
  //     // Envía el formulario
  //     fireEvent.click(screen.getByTestId("Registrarme"));

  //     // Espera a que devuelva un error
  //     await screen.findByText("El usuario está duplicado");

  //     // Verifica que se mueste en pantalla
  //     expect(screen.getByText("El usuario está duplicado")).toBeDefined();
  //   });
});
