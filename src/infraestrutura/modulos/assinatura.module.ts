import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Assinatura from 'src/dominio/entidades/assinatura.entity';
import { AssinaturadRepository } from '../persistencia/repositorios/assinatura.repository';
import { CriarAssinatura } from 'src/aplicacao/casos de uso/criar-assinatura.use-case';
import { AssinaturaController } from 'src/apresentacao/controllers/assinatura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Assinatura])],
  providers: [AssinaturadRepository, CriarAssinatura],
  controllers: [AssinaturaController],
  //exports: [AssinaturadRepository],
})
export class AssinaturaModule {}
