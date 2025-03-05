import Plano from 'src/dominio/entidades/plano.entity';

export class ExibirPlanoDto {
  codigo: number;
  nome: string;
  custoMensal: number;
  descricao: string;
  dataUltimoPagamento: Date;

  constructor(plano: Plano) {
    this.codigo = plano.codigo;
    this.nome = plano.nome;
    this.custoMensal = plano.custoMensal;
    this.descricao = plano.descricao;
    this.dataUltimoPagamento = plano.dataUltimoPagamento;
  }
}
