import { Candidate } from "../../../models/Candidate.js";
import { Repository } from "../../../repository/Repository.js";
const repo = new Repository();
document.getElementById("candidate-form").addEventListener("submit", e => {
    const name = document.getElementById("cand-name").value;
    const email = document.getElementById("cand-email").value;
    const cpf = document.getElementById("cand-cpf").value;
    const age = parseInt(document.getElementById("cand-age").value);
    const state = document.getElementById("cand-state").value;
    const cep = document.getElementById("cand-cep").value;
    const description = document.getElementById("cand-description").value;
    const skills = document.getElementById("cand-skills").value.split(",").map(s => s.trim());
    repo.addCandidate(new Candidate(name, email, cpf, age, state, cep, description, skills));
});
//# sourceMappingURL=subscription.js.map