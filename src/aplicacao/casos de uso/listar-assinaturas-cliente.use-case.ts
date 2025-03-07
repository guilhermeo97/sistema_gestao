import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';

@Injectable()
export class ListarAssinaturasCliente {
  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

  async listarPorCliente(codCliente: number) {
    try {
      const buscarAssinaturasPorCliente =
        await this.assinaturaRepository.buscarAssinaturasPorCliente(codCliente);
      if (buscarAssinaturasPorCliente.length === 0) {
        throw new NotFoundException(
          'Nenhuma assinatura encontrada para o cliente',
        );
      }
      const exibirAssinaturas = buscarAssinaturasPorCliente.map(
        (assinatura) => {
          return new ExibirAssinaturaDto(assinatura);
        },
      );
      return exibirAssinaturas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Erro ao buscar assinaturas do cliente',
      );
    }
  }
}
