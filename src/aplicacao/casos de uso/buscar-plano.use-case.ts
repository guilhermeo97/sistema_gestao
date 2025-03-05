import { Injectable, NotFoundException } from '@nestjs/common';
import PlanoRepository from 'src/infraestrutura/persistencia/repositorios/plano.repository';

@Injectable()
export class BuscarPlano {
  constructor(private readonly planoRepository: PlanoRepository) {}
  async buscarPlano(codigo: number) {
    try {
      const buscarPlano = await this.planoRepository.buscarPorId(codigo);
      if (!buscarPlano) {
        throw new NotFoundException('Plano não encontrado');
      }
      return buscarPlano;
    } catch {}
  }
}
