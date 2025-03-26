import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CriarAssinatura } from 'src/aplicacao/casos de uso/criar-assinatura.use-case';
import { ListarAssinaturasCadastradas } from 'src/aplicacao/casos de uso/listar-assinatas.use-case';
import { ListarAssinaturasCliente } from 'src/aplicacao/casos de uso/listar-assinaturas-cliente.use-case';
import { ListarAssinaturasPlano } from 'src/aplicacao/casos de uso/listar-assinaturas-plano.use-case';
import { CriarAssinaturaDto } from 'src/aplicacao/dto/criar-assinatura.dto';

@Controller('/gestao/assinaturas')
export class AssinaturaController {
  constructor(
    private readonly criarAssinatura: CriarAssinatura,
    private readonly listarAssinaturasCadastradas: ListarAssinaturasCadastradas,
    private readonly listarAssinaturasCliente: ListarAssinaturasCliente,
    private readonly listarAssinaturasPlano: ListarAssinaturasPlano,
  ) {}

  @Post()
  async salvar(@Body() criarAssinaturaDto: CriarAssinaturaDto) {
    return await this.criarAssinatura.salvar(criarAssinaturaDto);
  }

  @Get('clientes/:codCliente')
  async listarPorCliente(
    @Param('codCliente', ParseIntPipe) codCliente: number,
  ) {
    return await this.listarAssinaturasCliente.listarPorCliente(codCliente);
  }

  @Get('planos/:codPlano')
  async listarPorPlano(@Param('codPlano', ParseIntPipe) codPlano: number) {
    return await this.listarAssinaturasPlano.listarPorPlano(codPlano);
  }

  @Get(':tipo')
  async listar(@Param('tipo') tipo: string) {
    console.log(tipo);
    return await this.listarAssinaturasCadastradas.listar(tipo);
  }
}
