import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListarPlanosCadastrados } from 'src/aplicacao/casos de uso/planos-cadastrados.use-case';
import Plano from 'src/dominio/entidades/plano.entity';
import PlanoRepository from '../persistencia/repositorios/plano.repository';
import { PlanoController } from 'src/apresentacao/controllers/plano.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  providers: [PlanoRepository, ListarPlanosCadastrados],
  controllers: [PlanoController],
})
export class PlanoModule {}
