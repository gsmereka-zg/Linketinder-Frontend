import { Person } from "./Person.js";
export class Candidate extends Person {
    constructor(name, email, cpf, age, state, cep, description, number, skills = []) {
        super(name, email, state, cep, description, number, skills);
        this.cpf = cpf;
        this.age = age;
    }
}
//# sourceMappingURL=Candidate.js.map