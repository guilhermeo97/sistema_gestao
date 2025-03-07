import Plano from './plano';

export default class Pagamento {
  private _codigo?: number;
  private _codPlano: Plano;
  private _valorPago: number;
  private _dataPagamento: Date;

  constructor(codPlano: Plano, valorPago: number, dataPagamento: Date) {
    this._codPlano = codPlano;
    this._valorPago = valorPago;
    this._dataPagamento = dataPagamento;
  }

  public get codigo(): number | undefined {
    return this._codigo;
  }

  public set codigo(value: number | undefined) {
    this._codigo = value;
  }
  public get codPlano(): Plano {
    return this._codPlano;
  }

  public set codPlano(value: Plano) {
    this._codPlano = value;
  }

  public get valorPago(): number {
    return this._valorPago;
  }

  public set valorPago(value: number) {
    this._valorPago = value;
  }

  public get dataPagamento(): Date {
    return this._dataPagamento;
  }

  public set dataPagamento(value: Date) {
    this._dataPagamento = value;
  }
}
