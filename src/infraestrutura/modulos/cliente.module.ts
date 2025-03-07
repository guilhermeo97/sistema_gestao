import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListarClientesCadastrados } from 'src/aplicacao/casos de uso/listar-clientes-cadastrados.use-case';
import { ClienteRepository } from '../persistencia/repositorios/cliente.repository';
import { ClienteController } from 'src/apresentacao/controllers/cliente.controller';
import ClienteEntity from '../persistencia/entidades/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity])],
  providers: [ClienteRepository, ListarClientesCadastrados],
  controllers: [ClienteController],
  exports: [ClienteRepository],
})
export class ClienteModule {}
