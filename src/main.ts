import { Repository } from "./repository/Repository.js";

const repo = new Repository();

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
      <td><a href="./pages/profiles/candidate/candidate.html?id=${i}">${c.name}</a></td>
      <td>${c.description || "Sem descrição"}</td>
    `;
    tbody.appendChild(row);
  });
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
      <td><a href="./pages/profiles/company/company.html?id=${i}">${c.name}</a></td>
      <td>${c.description || "Sem descrição"}</td>
    `;
    tbody.appendChild(row);
  });
}

// Espera o DOM carregar antes de renderizar
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado, renderizando tabelas...");
  renderCandidates();
  renderCompanies();
});
