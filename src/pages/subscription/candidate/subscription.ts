import { Candidate } from "../../../models/Candidate.js";
import { Repository } from "../../../repository/Repository.js";

const repo = new Repository();

document.getElementById("candidate-form")!.addEventListener("submit", e => {
  const name = (document.getElementById("cand-name") as HTMLInputElement).value;
  const email = (document.getElementById("cand-email") as HTMLInputElement).value;
  const cpf = (document.getElementById("cand-cpf") as HTMLInputElement).value;
  const age = parseInt((document.getElementById("cand-age") as HTMLInputElement).value);
  const state = (document.getElementById("cand-state") as HTMLInputElement).value;
  const cep = (document.getElementById("cand-cep") as HTMLInputElement).value;
  const description = (document.getElementById("cand-description") as HTMLInputElement).value;
  const skills = (document.getElementById("cand-skills") as HTMLInputElement).value.split(",").map(s => s.trim());

  repo.addCandidate(new Candidate(name, email, cpf, age, state, cep, description, skills));
});
