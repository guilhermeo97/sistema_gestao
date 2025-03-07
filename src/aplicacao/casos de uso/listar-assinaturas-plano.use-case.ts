import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';

@Injectable()
export class ListarAssinaturasPlano {
  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}
  async listarPorPlano(codPlano: number) {
    try {
      const buscarAssinaturasPorPlano =
        await this.assinaturaRepository.buscarAssinaturasPorPlano(codPlano);
      if (buscarAssinaturasPorPlano.length === 0) {
        throw new NotFoundException(
          'Nenhuma assinatura encontrada para o plano',
        );
      }
      const exibirAssinaturas = buscarAssinaturasPorPlano.map((assinatura) => {
        return new ExibirAssinaturaDto(assinatura);
      });
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
