import { Company } from "../../../models/Company.js";
import { Repository } from "../../../repository/Repository.js";

const repo = new Repository();

document.getElementById("company-form")!.addEventListener("submit", e => {
  const name = (document.getElementById("comp-name") as HTMLInputElement).value;
  const email = (document.getElementById("comp-email") as HTMLInputElement).value;
  const cnpj = (document.getElementById("comp-cnpj") as HTMLInputElement).value;
  const country = (document.getElementById("comp-country") as HTMLInputElement).value;
  const state = (document.getElementById("comp-state") as HTMLInputElement).value;
  const cep = (document.getElementById("comp-cep") as HTMLInputElement).value;
  const description = (document.getElementById("comp-description") as HTMLInputElement).value;
  const skills = (document.getElementById("comp-skills") as HTMLInputElement).value.split(",").map(s => s.trim());

  repo.addCompany(new Company(name, email, cnpj, country, state, cep, description, skills));
});
