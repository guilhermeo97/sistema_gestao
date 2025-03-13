import Cliente from './cliente';
import Plano from './plano';

export default class Assinatura {
  private _codigo?: number;
  private _codPlano: Plano;
  private _codCli: Cliente;
  private _inicioFidelidade: Date;
  private _fimFidelidade: Date;
  private _status?: string;
  private _dataUltimoPagamento?: Date;
  private _custoFinal?: number;
  private _descricao?: string;

  constructor(
    codPlano: Plano,
    codCli: Cliente,
    codigo?: number,
    inicioFidelidade?: Date,
    fimFidelidade?: Date,
    dataUltimoPagamento?: Date,
    custoFinal?: number,
    descricao?: string,
  ) {
    this._codPlano = codPlano;
    this._codCli = codCli;
    this._inicioFidelidade = !inicioFidelidade ? new Date() : inicioFidelidade;
    this._fimFidelidade = !fimFidelidade
      ? this.gerarDataFidelidade(this._inicioFidelidade)
      : fimFidelidade;
    this._codigo = codigo;
    this._status = !fimFidelidade
      ? undefined
      : this.fimFidelidade > new Date()
        ? 'ATIVO'
        : 'CANCELADO';
    this._dataUltimoPagamento = !dataUltimoPagamento
      ? new Date()
      : dataUltimoPagamento;
    this._custoFinal = !custoFinal ? 0.1 : custoFinal;
    this._descricao = !descricao ? undefined : descricao;
  }

  private gerarDataFidelidade(data: Date): Date {
    const fimFidelidade = new Date(data);
    fimFidelidade.setDate(fimFidelidade.getDate() + 365);
    return fimFidelidade;
  }

  public get codigo(): number | undefined {
    return this._codigo;
  }

  public get status(): string | undefined {
    return this._status;
  }

  public get codPlano(): Plano {
    return this._codPlano;
  }

  public set codPlano(value: Plano) {
    this._codPlano = value;
  }

  public get codCli(): Cliente {
    return this._codCli;
  }

  public set codCli(value: Cliente) {
    this._codCli = value;
  }

  public get inicioFidelidade(): Date {
    return this._inicioFidelidade;
  }

  public get fimFidelidade(): Date {
    return this._fimFidelidade;
  }

  public set fimFidelidade(value: Date) {
    this._fimFidelidade = value;
  }

  public get dataUltimoPagamento(): Date | undefined {
    return this._dataUltimoPagamento;
  }

  public set dataUltimoPagamento(value: Date | undefined) {
    this._dataUltimoPagamento = value;
  }

  public get custoFinal(): number | undefined {
    return this._custoFinal;
  }

  public set custoFinal(value: number | undefined) {
    this._custoFinal = value;
  }

  public get descricao(): string | undefined {
    return this._descricao;
  }

  public set descricao(value: string | undefined) {
    this._descricao = value;
  }
}
