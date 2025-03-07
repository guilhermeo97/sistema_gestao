import { Injectable } from '@nestjs/common';
import Cliente from 'src/dominio/entidades/cliente';
import { Repository } from 'typeorm';
import ClienteEntity from '../entidades/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteRepository {
  constructor(
    @InjectRepository(ClienteEntity)
    private readonly clienteRepository: Repository<ClienteEntity>,
  ) {}

  async buscarPorEmail(email: string): Promise<Cliente> {
    const existe = await this.clienteRepository.findOneBy({
      email: email,
    });
    if (!existe) {
      return null;
    }
    return existe.converterParaDominio();
  }

  async buscarPorId(codigo: number): Promise<Cliente> {
    const buscar = await this.clienteRepository.findOne({ where: { codigo } });
    if (!buscar) {
      return null;
    }
    return buscar.converterParaDominio();
  }

  async buscarTodos(): Promise<Cliente[] | void[]> {
    const buscar = await this.clienteRepository.find();
    if (buscar.length === 0) {
      return null;
    }
    const converterParaDominio = buscar.map((cliente) =>
      cliente.converterParaDominio(),
    );
    return converterParaDominio;
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    const entidade = ClienteEntity.converterParaEntidade(cliente);
    const salvar = await this.clienteRepository.save(entidade);
    return salvar.converterParaDominio();
  }

  async deletar(codigo: number): Promise<void> {
    await this.clienteRepository.delete(codigo);
  }
}
