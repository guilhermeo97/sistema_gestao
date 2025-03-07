import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import PlanoRepository from 'src/infraestrutura/persistencia/repositorios/plano.repository';
import { ExibirPlanoDto } from '../dto/exibir-plano.dto';

@Injectable()
export class ListarPlanosCadastrados {
  constructor(private readonly planoRepository: PlanoRepository) {}

  async listarTodosPlanos(): Promise<ExibirPlanoDto[] | void[]> {
    try {
      const buscarPlanos = await this.planoRepository.buscarTodos();
      if (!buscarPlanos) {
        throw new NotFoundException('Nenhum plano encontrado');
      }
      const exibirPlanos = buscarPlanos.map((plano) => {
        return new ExibirPlanoDto(plano);
      });
      return exibirPlanos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Erro ao listar planos');
    }
  }
}
