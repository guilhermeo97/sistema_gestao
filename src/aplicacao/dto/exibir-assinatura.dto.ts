import Assinatura from 'src/dominio/entidades/assinatura';
import Cliente from 'src/dominio/entidades/cliente';
import Plano from 'src/dominio/entidades/plano';

export class ExibirAssinaturaDto {
  codigo: number;
  codPlano: Plano;
  codCli: Cliente;
  inicioFidelidade: Date;
  fimFidelidade: Date;
  status: string;
  dataUltimoPagamento: Date;
  custoFinal: number;
  descricao: string;

  constructor(assinatura: Assinatura) {
    this.codigo = assinatura.codigo;
    this.codPlano = assinatura.codPlano;
    this.codCli = assinatura.codCli;
    this.inicioFidelidade = assinatura.inicioFidelidade;
    this.fimFidelidade = assinatura.fimFidelidade;
    this.dataUltimoPagamento = assinatura.dataUltimoPagamento;
    this.custoFinal = assinatura.custoFinal;
    this.descricao = assinatura.descricao;
    this.status = assinatura.status;
  }
}
