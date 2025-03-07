import Cliente from './cliente';
import Plano from './plano';

export default class Assinatura {
  private _codigo?: number;
  private _codPlano: Plano;
  private _codCli: Cliente;
  private _inicioFidelidade: Date;
  private _fimFidelidade: Date;

  constructor(codPlano: Plano, codCli: Cliente, codigo?: number) {
    this._codPlano = codPlano;
    this._codCli = codCli;
    this._inicioFidelidade = new Date();
    this._fimFidelidade = this.gerarDataFidelidade(this._inicioFidelidade);
    this._codigo = codigo;
  }

  private gerarDataFidelidade(data): Date {
    const fimFidelidade = new Date(data);
    fimFidelidade.setDate(fimFidelidade.getDate() + 365);
    return fimFidelidade;
  }

  public get codigo(): number | undefined {
    return this._codigo;
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
}
