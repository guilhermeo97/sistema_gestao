import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';

export interface FiltroAssinatura {
  buscar(
    assinaturaRepository: AssinaturaRepository,
  ): Promise<ExibirAssinaturaDto[]>;
}
