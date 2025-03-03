import { Injectable } from '@nestjs/common';
import Pagamento from 'src/dominio/entidades/Pagamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PagamentoRepository extends Repository<Pagamento> {
  async buscarPorId(codigo: number): Promise<Pagamento> {
    return await this.findOne({ where: { codigo } });
  }

  async buscarTodos(): Promise<Pagamento[]> {
    return await this.find();
  }

  async salvse(pagamento: Pagamento): Promise<Pagamento> {
    return await this.save(pagamento);
  }

  async deletar(codigo: number): Promise<void> {
    await this.delete(codigo);
  }
}
