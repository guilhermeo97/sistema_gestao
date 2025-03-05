import Assinatura from 'src/dominio/entidades/assinatura.entity';

export class ExibirAssinaturaDto {
  codigo: number;
  codPlano: number;
  codCli: number;
  inicioFidelidade: Date;
  fimFidelidade: Date;
  status: string;

  constructor(assinatura: Assinatura) {
    this.codigo = assinatura.codigo;
    this.codPlano = assinatura.codPlano.codigo;
    this.codCli = assinatura.codCli.codigo;
    this.inicioFidelidade = assinatura.inicioFidelidade;
    this.fimFidelidade = assinatura.fimFidelidade;
    this.status = assinatura.fimFidelidade > new Date() ? 'ATIVO' : 'CANCELADO';
  }
}
