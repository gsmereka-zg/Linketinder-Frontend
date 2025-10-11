import { Person } from "./Person.js";
export class Candidate extends Person {
    constructor(name, email, cpf, age, state, cep, description, skills = []) {
        super(name, email, state, cep, description, skills);
        this.cpf = cpf;
        this.age = age;
    }
}
//# sourceMappingURL=Candidate.js.map