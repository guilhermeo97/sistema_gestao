import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cliente from 'src/dominio/entidades/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
})
export class ClienteModule {}
