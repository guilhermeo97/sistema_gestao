import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pagamento from 'src/dominio/entidades/pagamento.entity';
import { PagamentoRepository } from '../persistencia/repositorios/pagamento.repository';
import { PagamentoController } from 'src/apresentacao/controllers/pagamento.controller';
import { ProcessarPagamentoRecebido } from 'src/aplicacao/casos de uso/processar-pagamento-recebido.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
  providers: [PagamentoRepository, ProcessarPagamentoRecebido],
  controllers: [PagamentoController],
})
export class PagamentoModule {}
