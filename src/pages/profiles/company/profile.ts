import { Repository } from "../../../repository/Repository.js";
declare var Chart: any;

const repo = new Repository();
// Pega o ID da empresa pela URL (ex: profile.html?id=1)
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const candidates = repo.getMatchedCandidatesById(id);

function renderCompanyProfile() {
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
  candidates.forEach((c, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${c.name}</td>
      <td>${c.description || "Sem descrição"}</td>
      <td>${c.skills.length ? c.skills.join(", ") : "Nenhuma informada"}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderSkillsChartForCompany() {
  const skillsCount: Record<string, number> = {};

  candidates.forEach(candidate => {
    candidate.skills.forEach(skill => {
      skillsCount[skill] = (skillsCount[skill] || 0) + 1;
    });
  });

  const canvas = document.getElementById('skillsChart') as HTMLCanvasElement;
  if (!canvas) {
    console.warn("Canvas #skillsChart não encontrado!");
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error("Não foi possível obter o contexto 2D do canvas.");
    return;
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(skillsCount),
      datasets: [{
        label: 'Número de Candidatos por Competência',
        data: Object.values(skillsCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      }
    }
  });
}


document.addEventListener("DOMContentLoaded", renderCompanyProfile);
document.addEventListener("DOMContentLoaded", renderCandidates);
document.addEventListener("DOMContentLoaded", renderSkillsChartForCompany);