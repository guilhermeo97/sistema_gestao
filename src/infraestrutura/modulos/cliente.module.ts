import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListarClientesCadastrados } from 'src/aplicacao/casos de uso/listar-clientes-cadastrados.use-case';
import Cliente from 'src/dominio/entidades/cliente.entity';
import { ClienteRepository } from '../persistencia/repositorios/cliente.repository';
import { ClienteController } from 'src/apresentacao/controllers/cliente.controller';
import { ListarAssinaturasCliente } from 'src/aplicacao/casos de uso/listar-assinaturas-cliente.use-case';
import { BuscarCliente } from 'src/aplicacao/casos de uso/buscar-cliente.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [
    ClienteRepository,
    ListarClientesCadastrados,
    ListarAssinaturasCliente,
    BuscarCliente,
  ],
  controllers: [ClienteController],
  exports: [BuscarCliente],
})
export class ClienteModule {}
