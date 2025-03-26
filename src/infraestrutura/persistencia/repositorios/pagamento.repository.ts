import { Injectable } from '@nestjs/common';
import Pagamento from 'src/dominio/entidades/pagamento';
import { Repository } from 'typeorm';
import PagamentoEntity from '../entidades/pagamento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PagamentoRepository {
  constructor(
    @InjectRepository(PagamentoEntity)
    private readonly pagamentoRepository: Repository<PagamentoEntity>,
  ) {}

  async buscarPorId(codigo: number): Promise<Pagamento> {
    const buscar = await this.pagamentoRepository.findOne({
      where: { codigo },
    });
    if (!buscar) {
      return null;
    }
    return buscar.converterParaDominio();
  }

  async buscarTodos(): Promise<Pagamento[]> {
    const buscar = await this.pagamentoRepository.find();
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((pagamento) => pagamento.converterParaDominio());
  }

  async salvar(pagamento: Pagamento): Promise<Pagamento> {
    const entidade = PagamentoEntity.converterParaEntidade(pagamento);
    //console.log('Instância de pagamento: ', entidade);

    const salvar = await this.pagamentoRepository.save(entidade);
    //console.log('Salvo no banco: ', salvar);
    return salvar.converterParaDominio();
  }

  async deletar(codigo: number): Promise<void> {
    await this.pagamentoRepository.delete(codigo);
  }
}
