import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ClienteRepository } from 'src/infraestrutura/persistencia/repositorios/cliente.repository';
import { ExibirClientesDto } from '../dto/exibir-clientes.dto';

@Injectable()
export class ListarClientesCadastrados {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async listarTodosClientes(): Promise<ExibirClientesDto[] | void[]> {
    try {
      const buscarClientes = await this.clienteRepository.buscarTodos();

      if (!buscarClientes || buscarClientes.length === 0) {
        throw new NotFoundException('Nenhum cliente encontrado');
      }

      return buscarClientes.map((cliente) => new ExibirClientesDto(cliente));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }
}
