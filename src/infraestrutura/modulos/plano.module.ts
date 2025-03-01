import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Plano from 'src/dominio/entidades/plano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
})
export class PlanoModule {}
