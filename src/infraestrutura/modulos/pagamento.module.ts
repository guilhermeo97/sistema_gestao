import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pagamento from 'src/dominio/entidades/pagamento.entity';
import { PagamentoRepository } from '../persistencia/repositorios/pagamento.repository';
import { PagamentoController } from 'src/apresentacao/controllers/pagamento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
  providers: [PagamentoRepository],
  controllers: [PagamentoController],
})
export class PagamentoModule {}
