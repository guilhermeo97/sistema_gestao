import { Injectable } from '@nestjs/common';
import Assinatura from 'src/dominio/entidades/assinatura.entity';
import { LessThan, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class AssinaturaRepository extends Repository<Assinatura> {
  async buscarPorId(codigo: number): Promise<Assinatura> {
    return await this.findOne({ where: { codigo } });
  }

  async buscarTodos(): Promise<Assinatura[]> {
    return await this.find();
  }

  async salvar(assinatura: Assinatura): Promise<Assinatura> {
    return await this.save(assinatura);
  }

  async deletar(codigo: number): Promise<void> {
    await this.delete(codigo);
  }

  async buscarAtivos(): Promise<Assinatura[]> {
    return await this.findBy({ fimFidelidade: MoreThanOrEqual(new Date()) });
  }

  async buscarCancelados(): Promise<Assinatura[]> {
    return await this.findBy({ fimFidelidade: LessThan(new Date()) });
  }

  async buscarAssinaturasPorCliente(codCliente: number): Promise<Assinatura[]> {
    return await this.find({ where: { codCli: { codigo: codCliente } } });
  }

  async buscarAssinaturasPorPlano(codPlano: number): Promise<Assinatura[]> {
    return await this.find({ where: { codPlano: { codigo: codPlano } } });
  }
}
