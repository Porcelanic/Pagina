import { Email } from "./email";

export class AdapterEmail implements Email {
    private email: Email;

    constructor(email: Email) {
        this.email = email;
    }

    convertirEmailAMinuscula(email: string): string {
        return this.email.convertirEmailAMinuscula(email);
    }
}
