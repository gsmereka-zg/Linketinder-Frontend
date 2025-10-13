export abstract class Person{
  name: string;
  email: string;
  state: string;
  cep: string;
  description: string;
  number: string;
  skills: string[];

  constructor(
    name: string,
    email: string,
    state: string,
    cep: string,
    description: string,
    number: string,
    skills: string[] = []
  ) {
    this.name = name;
    this.email = email;
    this.state = state;
    this.cep = cep;
    this.description = description;
    this.number = number;
    this.skills = [...skills];
    }
}