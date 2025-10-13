import { Candidate } from "../models/Candidate.js";
import { Company } from "../models/Company.js";
export class Repository {
    constructor() {
        this.candidates = [];
        this.companies = [];
        console.log("[Repository] Inicializando...");
        const storedCandidates = localStorage.getItem("candidates");
        const storedCompanies = localStorage.getItem("companies");
        if (storedCandidates) {
            this.candidates = JSON.parse(storedCandidates);
            console.log("[Repository] Candidatos carregados do storage:", this.candidates);
        }
        else {
            console.log("[Repository] Nenhum candidato encontrado no storage.");
        }
        if (storedCompanies) {
            this.companies = JSON.parse(storedCompanies);
            console.log("[Repository] Empresas carregadas do storage:", this.companies);
        }
        else {
            console.log("[Repository] Nenhuma empresa encontrada no storage.");
        }
        if (this.candidates.length === 0 && this.companies.length === 0) {
            this._createInitialData();
        }
    }
    _createInitialData() {
        console.log("[Repository] Criando dados iniciais...");
        this.candidates = [
            new Candidate("Ana Silva", "ana@gmail.com", "123.456.789-00", 28, "SP", "01000-000", "Desenvolvedora Full Stack", "(11) 98765-4321", ["JavaScript", "React", "Node.js", "Python", "Figma"]),
            new Candidate("Bruno Souza", "bruno@gmail.com", "234.567.890-11", 32, "RJ", "20000-000", "Analista de Dados", "(21) 98888-1234", ["Python", "SQL", "Power BI", "React"]),
            new Candidate("Carla Mendes", "carla@gmail.com", "345.678.901-22", 25, "MG", "30000-000", "UX/UI Designer", "(31) 97777-4567", ["Figma", "Canvas", "Python", "React"])
        ];
        this.companies = [
            new Company("TechCorp", "contato@techcorp.com", "11.222.333/0001-81", "Brasil", "SP", "01000-000", "Empresa de soluções em tecnologia", "(11) 4002-8922", ["JavaScript", "DevOps"]),
            new Company("DataSoft", "rh@datasoft.com", "22.333.444/0001-92", "Brasil", "RJ", "20000-000", "Consultoria em análise de dados", "(21) 3555-6677", ["Python", "SQL"]),
            new Company("DesignX", "oi@designx.com", "33.444.555/0001-03", "Brasil", "MG", "30000-000", "Agência de design digital", "(31) 3222-3344", ["UX", "UI", "Figma"])
        ];
        this.save();
    }
    save() {
        localStorage.setItem("candidates", JSON.stringify(this.candidates));
        localStorage.setItem("companies", JSON.stringify(this.companies));
        console.log("[Repository] Dados salvos no localStorage");
    }
    addCandidate(c) {
        console.log("[Repository] Adicionando candidato:", c);
        this.candidates.push(c);
        this.save();
    }
    addCompany(c) {
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
    getMatchedCompaniesById(id) {
        console.log("[Repository] Listando empresas curtidas por: " + id, this.companies);
        // Ainda nao implementado
        return this.companies;
    }
    getMatchedCandidatesById(id) {
        console.log("[Repository] Listando candidatos curtidos por " + id, this.candidates);
        // Ainda não implementado
        return this.candidates;
    }
}
//# sourceMappingURL=Repository.js.map