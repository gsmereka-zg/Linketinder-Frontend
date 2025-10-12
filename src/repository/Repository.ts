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

    if (this.candidates.length === 0 && this.companies.length === 0) {
      this._createInitialData();
    }
  }

  private _createInitialData() {
    console.log("📦 [Repository] Criando dados iniciais...");

    this.candidates = [
      new Candidate("Ana Silva", "ana@gmail.com", "12345678900", 28, "SP", "01000-000", "Desenvolvedora Full Stack", ["JavaScript", "React", "Node.js"]),
      new Candidate("Bruno Souza", "bruno@gmail.com", "23456789011", 32, "RJ", "20000-000", "Analista de Dados", ["Python", "SQL", "Power BI"]),
      new Candidate("Carla Mendes", "carla@gmail.com", "34567890122", 25, "MG", "30000-000", "UX/UI Designer", ["Figma", "Design Thinking"])
    ];

    this.companies = [
      new Company("TechCorp", "contato@techcorp.com", "11222333000181", "Brasil", "SP", "01000-000", "Empresa de soluções em tecnologia", ["JavaScript", "DevOps"]),
      new Company("DataSoft", "rh@datasoft.com", "22333444000192", "Brasil", "RJ", "20000-000", "Consultoria em análise de dados", ["Python", "SQL"]),
      new Company("DesignX", "oi@designx.com", "33444555000103", "Brasil", "MG", "30000-000", "Agência de design digital", ["UX", "UI", "Figma"])
    ];

    this.save();
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

  getCompaniesLikedById(id: number) {
    console.log("[Repository] Listando empresas curtidas por: " + id, this.companies);
    return this.companies;
  }

  getCandidatesLikedById(id: number) {
    console.log("[Repository] Listando candidatos curtidos por " + id, this.candidates);
    return this.candidates;
  }
}
