import Assinatura from './assinatura';

export default class Cliente {
  private _codigo?: number;
  private _nome: string;
  private _email: string;
  private _assinaturas: Assinatura[];

  constructor(nome: string, email: string, codigo?: number) {
    this._nome = nome;
    this._email = email;
    this._codigo = codigo;
  }

  public get codigo(): number | undefined {
    return this._codigo;
  }

  public set codigo(valor: number) {
    this._codigo = valor;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get assinaturas(): Assinatura[] {
    return this._assinaturas;
  }

  public set assinaturas(value: Assinatura[]) {
    this._assinaturas = value;
  }
}
