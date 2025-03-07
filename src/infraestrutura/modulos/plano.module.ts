import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListarPlanosCadastrados } from 'src/aplicacao/casos de uso/listar-planos-cadastrados.use-case';
import PlanoRepository from '../persistencia/repositorios/plano.repository';
import { PlanoController } from 'src/apresentacao/controllers/plano.controller';
import { AtualizarCustoPlano } from 'src/aplicacao/casos de uso/atualizar-custo-plano.use-case';
import PlanoEntity from '../persistencia/entidades/plano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanoEntity])],
  providers: [PlanoRepository, ListarPlanosCadastrados, AtualizarCustoPlano],
  controllers: [PlanoController],
  exports: [PlanoRepository],
})
export class PlanoModule {}
