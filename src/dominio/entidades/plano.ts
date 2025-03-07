import Pagamento from './pagamento';

export default class Plano {
  private _codigo?: number;
  private _nome: string;
  private _custoMensal: number;
  private _descricao: string;
  private _dataUltimoPagamento: Date;
  private _pagamentos: Pagamento[];

  constructor(
    nome: string,
    custoMensal: number,
    descricao: string,
    dataUltimoPagamento: Date,
    codigo?: number,
  ) {
    this._codigo = codigo;
    this._nome = nome;
    this._custoMensal = custoMensal;
    this._descricao = descricao;
    this._dataUltimoPagamento = dataUltimoPagamento;
  }

  public get codigo(): number {
    return this._codigo;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get custoMensal(): number {
    return this._custoMensal;
  }

  public set custoMensal(value: number) {
    this._custoMensal = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get dataUltimoPagamento(): Date {
    return this._dataUltimoPagamento;
  }

  public set dataUltimoPagamento(value: Date) {
    this._dataUltimoPagamento = value;
  }

  public get pagamentos(): Pagamento[] {
    return this._pagamentos;
  }

  public set pagamentos(value: Pagamento[]) {
    this._pagamentos = value;
  }
}
