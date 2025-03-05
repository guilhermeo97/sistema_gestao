import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { CriarAssinaturaDto } from '../dto/criar-assinatura.dto';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import { BuscarPlano } from './buscar-plano.use-case';
import { BuscarCliente } from './buscar-cliente.use-case';
import Assinatura from 'src/dominio/entidades/assinatura.entity';

@Injectable()
export class CriarAssinatura {
  constructor(
    private readonly assinaturaRepository: AssinaturaRepository,
    private readonly buscarPlano: BuscarPlano,
    private readonly buscarCliente: BuscarCliente,
  ) {}

  async salvar(criarAssinaturaDto: CriarAssinaturaDto) {
    try {
      const buscarPlano = await this.buscarPlano.buscarPlano(
        criarAssinaturaDto.codPlano,
      );
      if (!buscarPlano) {
        throw new NotFoundException('Plano não encontrado');
      }
      const buscarCliente = await this.buscarCliente.buscarCliente(
        criarAssinaturaDto.codCli,
      );
      if (!buscarCliente) {
        throw new NotFoundException('Cliente não encontrado');
      }

      const instanciarAssinatura = new Assinatura(buscarPlano, buscarCliente);
      const assinatura =
        await this.assinaturaRepository.salvar(instanciarAssinatura);
      const exibirAssinatura = new ExibirAssinaturaDto(assinatura);
      return exibirAssinatura;
    } catch {
      throw new HttpException('Erro ao salvar assinatura', 500);
    }
  }
}
