import { Injectable } from '@nestjs/common';
import Assinatura from 'src/dominio/entidades/assinatura';
import { LessThan, MoreThanOrEqual, Repository } from 'typeorm';
import AssinaturaEntity from '../entidades/assinatura.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssinaturaRepository {
  constructor(
    @InjectRepository(AssinaturaEntity)
    private readonly assinaturaRepository: Repository<AssinaturaEntity>,
  ) {}

  async buscarPorId(codigo: number): Promise<Assinatura> {
    const buscar = await this.assinaturaRepository.findOne({
      where: { codigo },
      relations: ['plano', 'cliente'],
    });
    if (!buscar) {
      return null;
    }
    return buscar.converterParaDominio();
  }

  async buscarTodos(): Promise<Assinatura[]> {
    const buscar = await this.assinaturaRepository.find({
      relations: ['plano', 'cliente'],
    });
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((assinatura) => assinatura.converterParaDominio());
  }

  async salvar(assinatura: Assinatura): Promise<Assinatura> {
    const entidade = AssinaturaEntity.converterParaEntidade(assinatura);
    const salvar = await this.assinaturaRepository.save(entidade);
    return salvar.converterParaDominio();
  }

  async deletar(codigo: number): Promise<void> {
    await this.assinaturaRepository.delete(codigo);
  }

  async buscarAtivos(): Promise<Assinatura[]> {
    const buscar = await this.assinaturaRepository.find({
      where: { fimFidelidade: MoreThanOrEqual(new Date()) },
      relations: ['plano', 'cliente'],
    });
    console.log(buscar);
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((assinatura) => assinatura.converterParaDominio());
  }

  async buscarCancelados(): Promise<Assinatura[]> {
    const buscar = await this.assinaturaRepository.find({
      where: { fimFidelidade: LessThan(new Date()) },
      relations: ['plano', 'cliente'],
    });
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((assinatura) => assinatura.converterParaDominio());
  }

  async buscarAssinaturasPorCliente(codCliente: number): Promise<Assinatura[]> {
    const buscar = await this.assinaturaRepository.find({
      where: { cliente: { codigo: codCliente } },
      relations: ['plano', 'cliente'],
    });
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((assinatura) => assinatura.converterParaDominio());
  }

  async buscarAssinaturasPorPlano(codPlano: number): Promise<Assinatura[]> {
    const buscar = await this.assinaturaRepository.find({
      where: { plano: { codigo: codPlano } },
      relations: ['plano', 'cliente'],
    });
    if (buscar.length === 0) {
      return null;
    }
    return buscar.map((assinatura) => assinatura.converterParaDominio());
  }
}
