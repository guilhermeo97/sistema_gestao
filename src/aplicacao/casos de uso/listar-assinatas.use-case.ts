import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';

@Injectable()
export class ListarAssinaturasCadastradas {
  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

  async listar(tipo: string) {
    try {
      switch (tipo) {
        case 'TODOS': {
          const listarTodos = await this.assinaturaRepository.buscarTodos();
          const exibirTodos = listarTodos.map((assinatura) => {
            new ExibirAssinaturaDto(assinatura);
          });
          return exibirTodos;
        }
        case 'ATIVOS': {
          const listarAtivos = await this.assinaturaRepository.buscarAtivos();
          const exibirAtivos = listarAtivos.map((assinatura) => {
            new ExibirAssinaturaDto(assinatura);
          });
          return exibirAtivos;
        }
        case 'CANCELADOS': {
          const listarCancelados =
            await this.assinaturaRepository.buscarCancelados();
          const exibirCancelados = listarCancelados.map((assinatura) => {
            new ExibirAssinaturaDto(assinatura);
          });
          return exibirCancelados;
        }
        default:
          throw new BadRequestException('Tipo não enontrado');
      }
    } catch {
      throw new InternalServerErrorException('Erro ao listar assinaturas');
    }
  }
}
