export class Person {
    constructor(name, email, state, cep, description, skills = []) {
        this.name = name;
        this.email = email;
        this.state = state;
        this.cep = cep;
        this.description = description;
        this.skills = [...skills];
    }
}
//# sourceMappingURL=Person.js.map