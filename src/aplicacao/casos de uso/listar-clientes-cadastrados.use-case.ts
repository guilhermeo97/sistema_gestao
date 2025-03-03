import Cliente from 'src/dominio/entidades/cliente.entity';
import { ClienteRepository } from 'src/infraestrutura/persistencia/repositorios/cliente.repository';

export class ListarClientesCadastrados {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async executar(): Promise<Cliente[]> {
    return this.clienteRepository.buscarTodos();
  }
}
