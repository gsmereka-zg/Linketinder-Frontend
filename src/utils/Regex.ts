export class Regex {
  static isValidName(name: string): boolean {
    return /^[A-Za-z\s]{2,}$/.test(name);
  }

  static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static isValidCPF(cpf: string): boolean {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
  }

  static isValidCNPJ(cnpj: string): boolean {
    return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
  }

  static isValidCEP(cep: string): boolean {
    return /^\d{5}-\d{3}$/.test(cep);
  }

  static isValidAge(age: number): boolean {
    return age >= 16 && age <= 120;
  }

  static isValidCountry(country: string): boolean {
    return this.isValidName(country);
  }

  static isValidDescription(desc: string): boolean {
    return desc.trim().length >= 10;
  }

  static isValidSkills(skills: string[]): boolean {
    return skills.every(skill => this.isValidName(skill));
  }

  static isValidLinkedin(link: string): boolean {
    return /^https:\/\/(www\.)?linkedin\.com\/.*$/.test(link);
  }

  static isValidPhone(phone: string): boolean {
    return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
  }
}
