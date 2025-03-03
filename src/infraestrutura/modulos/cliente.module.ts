import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListarClientesCadastrados } from 'src/aplicacao/casos de uso/listar-clientes-cadastrados.use-case';
import Cliente from 'src/dominio/entidades/cliente.entity';
import { ClienteRepository } from '../persistencia/repositorios/cliente.repository';
import { ClienteController } from 'src/apresentacao/controllers/cliente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteRepository, ListarClientesCadastrados],
  controllers: [ClienteController],
})
export class ClienteModule {}
