import {Email} from "./email";

export class ConversionEmail implements Email {
    convertirEmailAMinuscula(email: string): string {
        return email.toLowerCase();
    }
}
