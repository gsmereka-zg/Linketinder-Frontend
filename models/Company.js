import { Person } from "./Person.js";
export class Company extends Person {
    constructor(name, email, cnpj, country, state, cep, description, skills = []) {
        super(name, email, state, cep, description, skills);
        this.cnpj = cnpj;
        this.country = country;
    }
}
//# sourceMappingURL=Company.js.map