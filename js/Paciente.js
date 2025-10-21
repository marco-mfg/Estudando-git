import { Pessoa } from "./Pessoa.js";

export class Paciente extends Pessoa {
  constructor(nome, idade, cpf) {
    super(nome, idade, cpf);
  }
}

// export class Paciente extends Pessoa {
//     constructor(nome, idade, cpf, historicoMedico = []) {
//         super(nome, idade, cpf);
//         this.historicoMedico = historicoMedico;
//     }

//     adicionarHistorico(consulta) {
//         this.historicoMedico.push(consulta);
//     }
// }
