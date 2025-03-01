import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pagamento from 'src/dominio/entidades/pagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
})
export class PagamentoModule {}
