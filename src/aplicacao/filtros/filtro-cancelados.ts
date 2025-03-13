import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { FiltroAssinatura } from './filtro-assinatura.interface';
import { NotFoundException } from '@nestjs/common';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';

export class FiltroCancelados implements FiltroAssinatura {
  async buscar(assinaturaRepository: AssinaturaRepository) {
    const assinaturas = await assinaturaRepository.buscarCancelados();
    if (!assinaturas) {
      throw new NotFoundException('Nenhuma assinatura cancelada encontrada.');
    }
    return assinaturas.map((assinatura) => new ExibirAssinaturaDto(assinatura));
  }
}
