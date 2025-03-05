import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ClienteRepository } from 'src/infraestrutura/persistencia/repositorios/cliente.repository';

@Injectable()
export class BuscarCliente {
  constructor(private readonly clienteRepository: ClienteRepository) {}
  async buscarCliente(codigo: number) {
    try {
      const buscarCliente = await this.clienteRepository.buscarPorId(codigo);
      if (!buscarCliente) {
        throw new NotFoundException('Cliente não encontrado');
      }
      return buscarCliente;
    } catch {
      throw new InternalServerErrorException('Erro ao buscar cliente');
    }
  }
}
