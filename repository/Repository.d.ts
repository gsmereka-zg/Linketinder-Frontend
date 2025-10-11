import { Candidate } from "../models/Candidate.js";
import { Company } from "../models/Company.js";
export declare class Repository {
    private candidates;
    private companies;
    constructor();
    private save;
    addCandidate(c: Candidate): void;
    addCompany(c: Company): void;
    getCandidates(): Candidate[];
    getCompanies(): Company[];
}
//# sourceMappingURL=Repository.d.ts.map