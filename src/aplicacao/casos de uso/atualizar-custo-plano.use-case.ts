import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import PlanoRepository from 'src/infraestrutura/persistencia/repositorios/plano.repository';
import { AtualizarCustoPlanoDto } from '../dto/atualizarcusto-plano.dto';
import { ExibirPlanoDto } from '../dto/exibir-plano.dto';

@Injectable()
export class AtualizarCustoPlano {
  constructor(private readonly planoRepository: PlanoRepository) {}

  async atualizar(
    codigo: number,
    atualizarCustoPlano: AtualizarCustoPlanoDto,
  ): Promise<ExibirPlanoDto | void> {
    try {
      const buscarPlano = await this.planoRepository.buscarPorId(codigo);
      if (!buscarPlano) {
        throw new NotFoundException('Plano não encontrado');
      }
      buscarPlano.custoMensal = atualizarCustoPlano.custo;
      const atualizarPlano = await this.planoRepository.salvar(buscarPlano);
      const exibirPlano = new ExibirPlanoDto(atualizarPlano);
      return exibirPlano;
    } catch {
      throw new InternalServerErrorException(
        'Erro ao atualizar custo do plano',
      );
    }
  }
}
