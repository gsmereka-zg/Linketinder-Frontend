import { Company } from "../../../models/Company.js";
import { Repository } from "../../../repository/Repository.js";
const repo = new Repository();
document.getElementById("company-form").addEventListener("submit", e => {
    const name = document.getElementById("comp-name").value;
    const email = document.getElementById("comp-email").value;
    const cnpj = document.getElementById("comp-cnpj").value;
    const country = document.getElementById("comp-country").value;
    const state = document.getElementById("comp-state").value;
    const cep = document.getElementById("comp-cep").value;
    const description = document.getElementById("comp-description").value;
    const skills = document.getElementById("comp-skills").value.split(",").map(s => s.trim());
    repo.addCompany(new Company(name, email, cnpj, country, state, cep, description, skills));
});
//# sourceMappingURL=subscription.js.map