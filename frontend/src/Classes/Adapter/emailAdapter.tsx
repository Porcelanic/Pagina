import { ConversionEmail } from "./conversionEmail";
import { Email } from "./email";

// AdapterEmail implementa la interfaz Email
export class AdapterEmail extends ConversionEmail implements Email {
    private email: ConversionEmail; // Cambio a ConversionEmail

    constructor(email: ConversionEmail) { // Cambio a ConversionEmail
        super();
        this.email = email;
    }

    // Implementación del método de la interfaz
    convertirEmail(email: string): string {
        // Llamar al método de ConversionEmail
        return this.email.convertirEmailAMinuscula(email);
    }
}
