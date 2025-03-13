import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { FiltroAssinatura } from './filtro-assinatura.interface';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import { NotFoundException } from '@nestjs/common';

export class FiltroAtivos implements FiltroAssinatura {
  async buscar(assinaturaRepository: AssinaturaRepository) {
    const assinaturas = await assinaturaRepository.buscarAtivos();
    if (!assinaturas) {
      throw new NotFoundException('Nenhuma assinatura ativa encontrada.');
    }
    return assinaturas.map((assinatura) => new ExibirAssinaturaDto(assinatura));
  }
}
