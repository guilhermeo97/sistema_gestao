import { NotFoundException } from '@nestjs/common';
import { FiltroAssinatura } from './filtro-assinatura.interface';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';

export class FiltroTodos implements FiltroAssinatura {
  async buscar(assinaturaRepository: AssinaturaRepository) {
    const assinaturas = await assinaturaRepository.buscarTodos();
    if (!assinaturas) {
      throw new NotFoundException('Nenhuma assinatura encontrada.');
    }
    return assinaturas.map((assinatura) => new ExibirAssinaturaDto(assinatura));
  }
}
