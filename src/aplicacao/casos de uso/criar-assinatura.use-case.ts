import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
import { CriarAssinaturaDto } from '../dto/criar-assinatura.dto';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';
import Assinatura from 'src/dominio/entidades/assinatura';
import PlanoRepository from 'src/infraestrutura/persistencia/repositorios/plano.repository';
import { ClienteRepository } from 'src/infraestrutura/persistencia/repositorios/cliente.repository';

@Injectable()
export class CriarAssinatura {
  constructor(
    private readonly assinaturaRepository: AssinaturaRepository,
    private readonly planoRepository: PlanoRepository,
    private readonly clienteRepository: ClienteRepository,
  ) {}

  async salvar(criarAssinaturaDto: CriarAssinaturaDto) {
    try {
      const buscarPlano = await this.planoRepository.buscarPorId(
        criarAssinaturaDto.codPlano,
      );
      if (!buscarPlano) {
        throw new NotFoundException('Plano não encontrado');
      }
      const buscarCliente = await this.clienteRepository.buscarPorId(
        criarAssinaturaDto.codCli,
      );
      if (!buscarCliente) {
        throw new NotFoundException('Cliente não encontrado');
      }

      const instanciarAssinatura = new Assinatura(buscarPlano, buscarCliente);
      instanciarAssinatura.custoFinal =
        instanciarAssinatura.codPlano.custoMensal -
        instanciarAssinatura.codPlano.custoMensal *
          instanciarAssinatura.custoFinal;
      const salvarAssinatura =
        await this.assinaturaRepository.salvar(instanciarAssinatura);
      const exibirAssinatura = new ExibirAssinaturaDto(salvarAssinatura);
      return exibirAssinatura;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new HttpException('Erro ao salvar assinatura', 500);
    }
  }
}
