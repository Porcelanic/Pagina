import { describe, test, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

// describe("Login", () => {
//   test("Debe sumar dos numeros", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

describe("Login", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("Deberia mostrar el contenido de la applicacion", () => {
    expect(screen.getByText(/WaySoft/i)).toBeDefined();
  });

  test("Deberia mostrar el contenido de la applicacion", () => {
    expect(screen.getByText(/WaySoft/i)).toBeDefined();
  });
});
