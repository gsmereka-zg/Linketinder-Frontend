import { Person } from "./Person.js";

export class Company extends Person{
  cnpj: string;
  country: string;

  constructor(
    name: string,
    email: string,
    cnpj: string,
    country: string,
    state: string,
    cep: string,
    description: string,
    skills: string[] = []
  ) {
    super(name, email, state, cep, description, skills);
    this.cnpj = cnpj;
    this.country = country;
  }
}