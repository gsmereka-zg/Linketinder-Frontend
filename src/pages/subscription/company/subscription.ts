import { Company } from "../../../models/Company.js";
import { Repository } from "../../../repository/Repository.js";
import { Regex } from "../../../utils/Regex.js";

const repo = new Repository();
const form = document.getElementById("company-form") as HTMLFormElement;

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = (document.getElementById("comp-name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("comp-email") as HTMLInputElement).value.trim();
  const cnpj = (document.getElementById("comp-cnpj") as HTMLInputElement).value.trim();
  const country = (document.getElementById("comp-country") as HTMLInputElement).value.trim();
  const state = (document.getElementById("comp-state") as HTMLInputElement).value.trim();
  const cep = (document.getElementById("comp-cep") as HTMLInputElement).value.trim();
  const description = (document.getElementById("comp-description") as HTMLInputElement).value.trim();
  const number = (document.getElementById("comp-number") as HTMLInputElement).value.trim();
  const skills = (document.getElementById("comp-skills") as HTMLInputElement).value.split(",").map(s => s.trim());

  const errors: string[] = [];

  if (!Regex.isValidName(name)) errors.push("Nome inválido.");
  if (!Regex.isValidEmail(email)) errors.push("Email inválido.");
  if (!Regex.isValidCNPJ(cnpj)) errors.push("CNPJ deve estar no formato 00.000.000/0000-00.");
  if (!Regex.isValidCountry(country)) errors.push("País inválido.");
  if (!Regex.isValidCEP(cep)) errors.push("CEP deve estar no formato 00000-000.");
  if (!Regex.isValidDescription(description)) errors.push("Descrição muito curta.");
  if (!Regex.isValidPhone(number)) errors.push("Numero Invalido.");
  if (!Regex.isValidSkills(skills)) errors.push("Verifique as tecnologias informadas.");

  if (errors.length > 0) {
    alert("Erros encontrados:\n\n" + errors.join("\n"));
    return;
  }

  repo.addCompany(new Company(name, email, cnpj, country, state, cep, description, number, skills));
  alert("Empresa cadastrada com sucesso!");
  form.reset();
});
