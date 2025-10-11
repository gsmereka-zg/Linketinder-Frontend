import { Person } from "./Person.js";

export class Candidate extends Person{
  cpf: string;
  age: number;

  constructor(
    name: string,
    email: string,
    cpf: string,
    age: number,
    state: string,
    cep: string,
    description: string,
    skills: string[] = []
  ) {
    super(name, email, state, cep, description, skills);
    this.cpf = cpf;
    this.age = age;
  }
}