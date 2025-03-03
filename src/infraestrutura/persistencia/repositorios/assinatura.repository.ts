import { Injectable } from '@nestjs/common';
import Assinatura from 'src/dominio/entidades/assinatura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssinaturadRepository extends Repository<Assinatura> {
  async buscarPorId(codigo: number): Promise<Assinatura> {
    return await this.findOne({ where: { codigo } });
  }

  async buscarTodos(): Promise<Assinatura[]> {
    return await this.find();
  }

  async salvse(assinatura: Assinatura): Promise<Assinatura> {
    return await this.save(assinatura);
  }

  async deletar(codigo: number): Promise<void> {
    await this.delete(codigo);
  }
}
