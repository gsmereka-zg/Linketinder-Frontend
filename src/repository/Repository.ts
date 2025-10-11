import { Candidate } from "../models/Candidate.js";
import { Company } from "../models/Company.js";

export class Repository {
  private candidates: Candidate[] = [];
  private companies: Company[] = [];

  constructor() {
    console.log("🗃️ [Repository] Inicializando...");

    const storedCandidates = localStorage.getItem("candidates");
    const storedCompanies = localStorage.getItem("companies");

    if (storedCandidates) {
      this.candidates = JSON.parse(storedCandidates);
      console.log("[Repository] Candidatos carregados do storage:", this.candidates);
    } else {
      console.log("[Repository] Nenhum candidato encontrado no storage.");
    }

    if (storedCompanies) {
      this.companies = JSON.parse(storedCompanies);
      console.log("[Repository] Empresas carregadas do storage:", this.companies);
    } else {
      console.log("[Repository] Nenhuma empresa encontrada no storage.");
    }
  }

  private save() {
    localStorage.setItem("candidates", JSON.stringify(this.candidates));
    localStorage.setItem("companies", JSON.stringify(this.companies));

    console.log("[Repository] Dados salvos no localStorage");
  }

  addCandidate(c: Candidate) {
    console.log("[Repository] Adicionando candidato:", c);
    this.candidates.push(c);
    this.save();
  }

  addCompany(c: Company) {
    console.log("[Repository] Adicionando empresa:", c);
    this.companies.push(c);
    this.save();
  }

  getCandidates() {
    console.log("[Repository] Listando candidatos:", this.candidates);
    return this.candidates;
  }

  getCompanies() {
    console.log("[Repository] Listando empresas:", this.companies);
    return this.companies;
  }
}
