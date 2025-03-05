import { Injectable } from '@nestjs/common';
import { PagamentoRepository } from 'src/infraestrutura/persistencia/repositorios/pagamento.repository';

@Injectable()
export class ProcessarPagamentoRecebido {
  constructor(private readonly pagamentoRepository: PagamentoRepository) {}
}
