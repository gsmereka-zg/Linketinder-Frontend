import { Repository } from "../../../repository/Repository.js";

const repo = new Repository();

function renderCompanyProfile() {
  // Pega o ID da empresa pela URL (ex: profile.html?id=1)
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const companies = repo.getCompanies();
  const company = companies[id];

  if (!company) {
    console.error("Empresa não encontrada!");
    return;
  }

  const infoDiv = document.getElementById("empresa-info");
  if (!infoDiv) {
    console.error("Elemento 'empresa-info' não encontrado!");
    return;
  }

  infoDiv.innerHTML = `
    <p><strong>Nome:</strong> ${company.name}</p>
    <p><strong>Email:</strong> ${company.email}</p>
    <p><strong>CNPJ:</strong> ${company.cnpj}</p>
    <p><strong>País:</strong> ${company.country}</p>
    <p><strong>Estado:</strong> ${company.state}</p>
    <p><strong>CEP:</strong> ${company.cep}</p>
    <p><strong>Descrição:</strong> ${company.description}</p>
    <p><strong>Tecnologias:</strong> ${company.skills.length ? company.skills.join(", ") : "Nenhuma informada"}</p>
  `;
}

function renderCandidates() {
  const tbody = document.querySelector("#candidates-table tbody");
  if (!tbody) {
    console.warn("Elemento #candidates-table não encontrado");
    return;
  }

  tbody.innerHTML = "";
  repo.getCandidates().forEach((c, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${c.name}</td>
      <td>${c.description || "Sem descrição"}</td>
      <td>${c.skills.length ? c.skills.join(", ") : "Nenhuma informada"}</td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", renderCompanyProfile);
document.addEventListener("DOMContentLoaded", renderCandidates);