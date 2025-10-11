import { Repository } from "../../../repository/Repository.js";

const repo = new Repository();

function renderCandidateProfile() {
  // Pega o ID que vem pela URL (ex: profile.html?id=1)
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const candidates = repo.getCandidates();
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

document.addEventListener("DOMContentLoaded", renderCandidateProfile);
