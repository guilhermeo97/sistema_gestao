import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import Cliente from 'src/dominio/entidades/cliente.entity';
import { ClienteRepository } from 'src/infraestrutura/persistencia/repositorios/cliente.repository';
import { ExibirClientesDto } from '../dto/exibir-clientes.dto';

export class ListarClientesCadastrados {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async listarTodosClientes(): Promise<Cliente[] | void[]> {
    try {
      const buscarClientes = await this.clienteRepository.buscarTodos();
      if (buscarClientes.length === 0) {
        throw new NotFoundException('Nenhum cliente encontrado');
      }
      const exibirClientes = buscarClientes.map((cliente) => {
        new ExibirClientesDto(cliente);
      });
      return exibirClientes;
    } catch {
      throw new InternalServerErrorException('Erro ao listar clientes');
    }
  }
}
