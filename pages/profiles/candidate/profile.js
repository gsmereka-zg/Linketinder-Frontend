import { Repository } from "../../../repository/Repository.js";
const repo = new Repository();
function renderCandidateProfile() {
    // Pega o ID que vem pela URL (ex: profile.html?id=1)
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const candidates = repo.getMatchedCandidatesById(id);
    const candidate = candidates[id];
    if (!candidate) {
        console.error("Candidato não encontrado!");
        return;
    }
    const infoDiv = document.getElementById("candidato-info");
    if (!infoDiv) {
        console.error("Elemento 'candidato-info' não encontrado!");
        return;
    }
    infoDiv.innerHTML = `
    <p><strong>Nome:</strong> ${candidate.name}</p>
    <p><strong>Email:</strong> ${candidate.email}</p>
    <p><strong>CPF:</strong> ${candidate.cpf}</p>
    <p><strong>Idade:</strong> ${candidate.age}</p>
    <p><strong>Estado:</strong> ${candidate.state}</p>
    <p><strong>CEP:</strong> ${candidate.cep}</p>
    <p><strong>Resumo:</strong> ${candidate.description}</p>
    <p><strong>Habilidades:</strong> ${candidate.skills.length ? candidate.skills.join(", ") : "Nenhuma informada"}</p>
  `;
}
function renderCompanies() {
    const tbody = document.querySelector("#companies-table tbody");
    if (!tbody) {
        console.warn("Elemento #companies-table não encontrado");
        return;
    }
    tbody.innerHTML = "";
    repo.getCompanies().forEach((c, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${c.name}</td>
      <td>${c.description || "Sem descrição"}</td>
    `;
        tbody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", renderCandidateProfile);
document.addEventListener("DOMContentLoaded", renderCompanies);
//# sourceMappingURL=profile.js.map