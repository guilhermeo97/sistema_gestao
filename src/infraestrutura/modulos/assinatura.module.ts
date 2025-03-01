import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Assinatura from 'src/dominio/entidades/assinatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assinatura])],
})
export class AssinaturaModule {}
