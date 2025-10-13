import { Person } from "./Person.js";
export class Company extends Person {
    constructor(name, email, cnpj, country, state, cep, description, number, skills = []) {
        super(name, email, state, cep, description, number, skills);
        this.cnpj = cnpj;
        this.country = country;
    }
}
//# sourceMappingURL=Company.js.map