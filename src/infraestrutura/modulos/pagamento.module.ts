import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagamentoRepository } from '../persistencia/repositorios/pagamento.repository';
import { PagamentoController } from 'src/apresentacao/controllers/pagamento.controller';
import { ProcessarPagamentoRecebido } from 'src/aplicacao/casos de uso/processar-pagamento-recebido.use-case';
import PagamentoEntity from '../persistencia/entidades/pagamento.entity';
import { AssinaturaModule } from './assinatura.module';

@Module({
  imports: [TypeOrmModule.forFeature([PagamentoEntity]), AssinaturaModule],
  providers: [PagamentoRepository, ProcessarPagamentoRecebido],
  controllers: [PagamentoController],
  exports: [ProcessarPagamentoRecebido],
})
export class PagamentoModule {}
