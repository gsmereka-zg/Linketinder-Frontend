import { Candidate } from "../../../models/Candidate.js";
import { Repository } from "../../../repository/Repository.js";
import { Regex } from "../../../utils/Regex.js";

const repo = new Repository();
const form = document.getElementById("candidate-form") as HTMLFormElement;

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = (document.getElementById("cand-name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("cand-email") as HTMLInputElement).value.trim();
  const cpf = (document.getElementById("cand-cpf") as HTMLInputElement).value.trim();
  const age = parseInt((document.getElementById("cand-age") as HTMLInputElement).value);
  const state = (document.getElementById("cand-state") as HTMLInputElement).value.trim();
  const cep = (document.getElementById("cand-cep") as HTMLInputElement).value.trim();
  const description = (document.getElementById("cand-description") as HTMLInputElement).value.trim();
  const number = (document.getElementById("cand-number") as HTMLInputElement).value.trim();
  const skills = (document.getElementById("cand-skills") as HTMLInputElement).value.split(",").map(s => s.trim());

  const errors: string[] = [];

  if (!Regex.isValidName(name)) errors.push("Nome inválido.");
  if (!Regex.isValidEmail(email)) errors.push("Email inválido.");
  if (!Regex.isValidCPF(cpf)) errors.push("CPF deve estar no formato 000.000.000-00.");
  if (!Regex.isValidAge(age)) errors.push("Idade deve estar entre 16 e 99 anos.");
  if (!Regex.isValidCEP(cep)) errors.push("CEP deve estar no formato 00000-000.");
  if (!Regex.isValidDescription(description)) errors.push("Resumo muito curto.");
  if (!Regex.isValidPhone(number)) errors.push("Numero Invalido.");
  if (!Regex.isValidSkills(skills)) errors.push("Verifique as habilidades informadas.");

  if (errors.length > 0) {
    alert("Erros encontrados:\n\n" + errors.join("\n"));
    return;
  }

  repo.addCandidate(new Candidate(name, email, cpf, age, state, cep, description, number, skills));
  alert("Candidato cadastrado com sucesso!");
  form.reset();
});
