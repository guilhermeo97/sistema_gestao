import { Injectable } from '@nestjs/common';
import Plano from 'src/dominio/entidades/plano';
import { Repository } from 'typeorm';
import PlanoEntity from '../entidades/plano.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class PlanoRepository {
  constructor(
    @InjectRepository(PlanoEntity)
    private readonly planoRepository: Repository<PlanoEntity>,
  ) {}

  async buscarPorNomePlano(nome: string) {
    const existe = await this.planoRepository.findOneBy({
      nome,
    });
    if (!existe) {
      return null;
    }
    return existe.converterParaDominio();
  }

  async buscarPorId(codigo: number): Promise<Plano> {
    const buscar = await this.planoRepository.findOne({ where: { codigo } });
    if (!buscar) {
      return null;
    }
    return buscar.converterParaDominio();
  }

  async buscarTodos(): Promise<Plano[]> {
    const buscar = await this.planoRepository.find();
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((plano) => plano.converterParaDominio());
  }

  async salvar(plano: Plano): Promise<Plano> {
    const entidade = PlanoEntity.converterParaEntidade(plano);
    const salvar = await this.planoRepository.save(entidade);
    return salvar.converterParaDominio();
  }

  async deletar(codigo: number): Promise<void> {
    await this.planoRepository.delete(codigo);
  }
}
