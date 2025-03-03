import { Injectable } from '@nestjs/common';
import Plano from 'src/dominio/entidades/plano.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class PlanoRepository extends Repository<Plano> {
  async buscarPorId(codigo: number): Promise<Plano> {
    return await this.findOne({ where: { codigo } });
  }

  async buscarTodos(): Promise<Plano[]> {
    return await this.find();
  }

  async salvar(plano: Plano): Promise<Plano> {
    return await this.save(plano);
  }

  async deletar(codigo: number): Promise<void> {
    await this.delete(codigo);
  }
}
