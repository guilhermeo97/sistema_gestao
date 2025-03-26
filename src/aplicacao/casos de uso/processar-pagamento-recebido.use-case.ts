import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import Pagamento from 'src/dominio/entidades/pagamento';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { PagamentoRepository } from 'src/infraestrutura/persistencia/repositorios/pagamento.repository';

@Injectable()
export class ProcessarPagamentoRecebido {
  constructor(
    private readonly pagamentoRepository: PagamentoRepository,
    private readonly assinaturaRepository: AssinaturaRepository,
  ) {}

  async salvar(codAss: number, valorPago: number, dataPagamento: Date) {
    try {
      const assinatura = await this.assinaturaRepository.buscarPorId(codAss);
      //console.log('Assinatura use-case', assinatura);
      if (!assinatura) {
        throw new BadRequestException('Assinatura não encontrada');
      }
      const pagamento = new Pagamento(assinatura, valorPago, dataPagamento);
      //console.log('Instância de pagamento: ', pagamento);
      const salvarPagamento = await this.pagamentoRepository.salvar(pagamento);
      if (!salvarPagamento) {
        throw new BadRequestException('Erro ao salvar pagamento');
      }
      const atualizarUltimoPagamento =
        await this.assinaturaRepository.salvar(assinatura);
      if (!atualizarUltimoPagamento) {
        throw new BadRequestException('Erro ao salvar último pagamento');
      }
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(error.message);
    }
    console.log('Salvando pagamento... ', codAss, valorPago, dataPagamento);
  }
}
