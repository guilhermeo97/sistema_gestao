import { Module } from '@nestjs/common';
import { EscutarEventoPagamento } from '../eventos/escutar-evento-pagamento.listener';
import { AssinaturaModule } from './assinatura.module';
import { PagamentoModule } from './pagamento.module';

@Module({
  imports: [AssinaturaModule, PagamentoModule],
  controllers: [EscutarEventoPagamento],
})
export class MensageriaModule {}
