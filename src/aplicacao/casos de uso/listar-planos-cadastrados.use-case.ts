import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import Plano from 'src/dominio/entidades/plano.entity';
import PlanoRepository from 'src/infraestrutura/persistencia/repositorios/plano.repository';
import { ExibirPlanoDto } from '../dto/exibir-plano.dto';

@Injectable()
export class ListarPlanosCadastrados {
  constructor(private readonly planoRepository: PlanoRepository) {}

  async listarTodosPlanos(): Promise<Plano[] | void[]> {
    try {
      const buscarPlanos = await this.planoRepository.buscarTodos();
      if (buscarPlanos.length === 0) {
        throw new NotFoundException('Nenhum plano encontrado');
      }
      const exibirPlanos = buscarPlanos.map((plano) => {
        new ExibirPlanoDto(plano);
      });
      return exibirPlanos;
    } catch {
      throw new InternalServerErrorException('Erro ao listar planos');
    }
  }
}
