import React, { createContext, useContext, useState, useEffect } from "react";

// Estrategia base
class HeaderStrategy {
  renderNavbar() {
    return <p>Texto genérico del navbar</p>;
  }
}

// Estrategia para cliente autenticado
class ClienteHeaderStrategy extends HeaderStrategy {
  renderNavbar() {
    return <p>Bienvenido Cliente</p>;
  }
}

// Estrategia para artista autenticado
class ArtistaHeaderStrategy extends HeaderStrategy {
  renderNavbar() {
    return <p>Bienvenido Artista</p>;
  }
}

// Estrategia para usuario no autenticado
class NoAuthHeaderStrategy extends HeaderStrategy {
  renderNavbar() {
    return <p>Por favor inicia sesión</p>;
  }
}

// Clase de contexto que gestiona la estrategia
class HeaderContext {
  constructor() {
    this.strategy = new NoAuthHeaderStrategy(); // Estrategia inicial por defecto
  }

  // Método para cambiar la estrategia según las condiciones de autenticación
  updateStrategy() {
    const username = localStorage.getItem("username");
    const tipoDeCliente = localStorage.getItem("tipoDeCliente");

    if (username !== null && tipoDeCliente === "Cliente") {
      this.strategy = new ClienteHeaderStrategy();
    } else if (username !== null && tipoDeCliente === "Artista") {
      this.strategy = new ArtistaHeaderStrategy();
    } else {
      this.strategy = new NoAuthHeaderStrategy();
    }
  }

  // Método para obtener y renderizar el navbar según la estrategia actual
  renderNavbar() {
    this.updateStrategy(); // Actualiza la estrategia según las condiciones actuales
    return this.strategy.renderNavbar(); // Renderiza el navbar según la estrategia
  }
}

export default HeaderContext;
