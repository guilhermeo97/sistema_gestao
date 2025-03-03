import { Injectable } from '@nestjs/common';
import Plano from 'src/dominio/entidades/plano.entity';
import PlanoRepository from 'src/infraestrutura/persistencia/repositorios/plano.repository';

@Injectable()
export class ListarPlanosCadastrados {
  constructor(private readonly planoRepository: PlanoRepository) {}

  async executar(): Promise<Plano[]> {
    return await this.planoRepository.buscarTodos();
  }
}
