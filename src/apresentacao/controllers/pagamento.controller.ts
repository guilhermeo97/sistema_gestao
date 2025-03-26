import { Body, Controller, Post } from '@nestjs/common';
import { ProcessarPagamentoRecebido } from 'src/aplicacao/casos de uso/processar-pagamento-recebido.use-case';

@Controller('pagamentos')
export class PagamentoController {
  constructor(
    private readonly processarPagamentoRecebido: ProcessarPagamentoRecebido,
  ) {}
  @Post()
  async processarPagamento(@Body() pagamento) {
    console.log('Recebendo pagamento...');
    console.log(pagamento);
    await this.processarPagamentoRecebido.salvar(
      pagamento.codAss,
      pagamento.valorPago,
      pagamento.dataPagamento,
    );
  }
}
