import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ProcessarPagamentoRecebido } from 'src/aplicacao/casos de uso/processar-pagamento-recebido.use-case';

@Controller()
export class EscutarEventoPagamento {
  constructor(
    private readonly processarPagamentoRecebido: ProcessarPagamentoRecebido,
  ) {} //

  @EventPattern({ exchange: 'pagamento_ex', routingKey: 'pagamento.novo' })
  async escutar(
    @Payload()
    dados: {
      codAss: number;
      valorPago: number;
      dataPagamento: Date;
    },
  ) {
    console.log('Evento recebido em PlanosAtivos ✅');
    this.processarPagamentoRecebido.salvar(
      dados.codAss,
      dados.valorPago,
      dados.dataPagamento,
    );
    console.log('Evento de pagamento processado');
  }
}
