import { Injectable } from '@nestjs/common';
import Cliente from 'src/dominio/entidades/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteRepository extends Repository<Cliente> {
  async buscarPorId(codigo: number): Promise<Cliente> {
    return await this.findOne({ where: { codigo } });
  }

  async buscarTodos(): Promise<Cliente[]> {
    return await this.find();
  }

  async salvse(cliente: Cliente): Promise<Cliente> {
    return await this.save(cliente);
  }

  async deletar(codigo: number): Promise<void> {
    await this.delete(codigo);
  }
}
