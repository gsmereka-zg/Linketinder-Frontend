export class Regex {
    static isValidName(name) {
        return /^[A-Za-z\s]{2,}$/.test(name);
    }
    static isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    static isValidCPF(cpf) {
        return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    }
    static isValidCNPJ(cnpj) {
        return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
    }
    static isValidCEP(cep) {
        return /^\d{5}-\d{3}$/.test(cep);
    }
    static isValidAge(age) {
        return age >= 16 && age <= 120;
    }
    static isValidCountry(country) {
        return this.isValidName(country);
    }
    static isValidDescription(desc) {
        return desc.trim().length >= 10;
    }
    static isValidSkills(skills) {
        return skills.every(skill => this.isValidName(skill));
    }
    static isValidLinkedin(link) {
        return /^https:\/\/(www\.)?linkedin\.com\/.*$/.test(link);
    }
    static isValidPhone(phone) {
        return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
    }
}
//# sourceMappingURL=Regex.js.map