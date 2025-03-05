import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListarPlanosCadastrados } from 'src/aplicacao/casos de uso/listar-planos-cadastrados.use-case';
import Plano from 'src/dominio/entidades/plano.entity';
import PlanoRepository from '../persistencia/repositorios/plano.repository';
import { PlanoController } from 'src/apresentacao/controllers/plano.controller';
import { AtualizarCustoPlano } from 'src/aplicacao/casos de uso/atualizar-custo-plano.use-case';
import { ListarAssinaturasPlano } from 'src/aplicacao/casos de uso/listar-assinaturas-plano.use-case';
import { BuscarPlano } from 'src/aplicacao/casos de uso/buscar-plano.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  providers: [
    PlanoRepository,
    ListarPlanosCadastrados,
    ListarAssinaturasPlano,
    AtualizarCustoPlano,
    BuscarPlano,
  ],
  controllers: [PlanoController],
  exports: [BuscarPlano],
})
export class PlanoModule {}
