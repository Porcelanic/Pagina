// Comando abstracto del que heredan los demas comandos
abstract class Comando {
  abstract ejecutar(): Promise<void>;
}

export default Comando;
