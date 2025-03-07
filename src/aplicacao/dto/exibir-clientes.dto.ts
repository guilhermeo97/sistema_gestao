import Cliente from 'src/dominio/entidades/cliente';

export class ExibirClientesDto {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;

  constructor(cliente: Cliente) {
    this.codigo = cliente.codigo;
    this.nome = cliente.nome;
    this.email = cliente.email;
  }
}
