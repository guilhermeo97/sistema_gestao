import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Assinatura from 'src/dominio/entidades/assinatura.entity';
import { AssinaturaRepository } from '../persistencia/repositorios/assinatura.repository';
import { CriarAssinatura } from 'src/aplicacao/casos de uso/criar-assinatura.use-case';
import { ListarAssinaturasCadastradas } from 'src/aplicacao/casos de uso/listar-assinatas.use-case';
import { PlanoModule } from './plano.module';
import { ClienteModule } from './cliente.module';
import { ListarAssinaturasCliente } from 'src/aplicacao/casos de uso/listar-assinaturas-cliente.use-case';
import { ListarAssinaturasPlano } from 'src/aplicacao/casos de uso/listar-assinaturas-plano.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Assinatura]), PlanoModule, ClienteModule],
  providers: [
    AssinaturaRepository,
    CriarAssinatura,
    ListarAssinaturasCadastradas,
    ListarAssinaturasCliente,
    ListarAssinaturasPlano,
  ],
})
export class AssinaturaModule {}
