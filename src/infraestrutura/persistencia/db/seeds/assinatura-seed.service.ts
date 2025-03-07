import { Injectable } from '@nestjs/common';
import { AssinaturaRepository } from '../../repositorios/assinatura.repository';
import Assinatura from 'src/dominio/entidades/assinatura';
import { ClienteRepository } from '../../repositorios/cliente.repository';
import PlanoRepository from '../../repositorios/plano.repository';

@Injectable()
export class AssinaturaSeedService {
  constructor(
    private readonly assinaturaRepository: AssinaturaRepository,
    private readonly clienteRepository: ClienteRepository,
    private readonly planoRepository: PlanoRepository,
  ) {}

  private async criarAssinaturas() {
    const lista: Assinatura[] = [];
    const codigos = [1, 2, 3, 4, 5];
    for (const codigo of codigos) {
      const buscarCliente = await this.clienteRepository.buscarPorId(codigo);
      const buscarPlano = await this.planoRepository.buscarPorId(codigo);
      console.log(
        'codigo cliente: ',
        buscarCliente,
        'nome cliente: ',
        buscarPlano,
      );
      const criar = new Assinatura(buscarPlano, buscarCliente);
      lista.push(criar);
    }
    return lista;
  }

  async seedAssinaturas() {
    console.log('📡 Iniciando seeding de clientes...');
    const lista = await this.criarAssinaturas();

    for (const assinatura of lista) {
      const salvar = await this.assinaturaRepository.salvar(assinatura);
      console.log(`✅ Assinatura ${salvar.codigo} inserida!`);
    }
  }
}
