import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { AtualizarCustoPlano } from 'src/aplicacao/casos de uso/atualizar-custo-plano.use-case';
import { ListarAssinaturasPlano } from 'src/aplicacao/casos de uso/listar-assinaturas-plano.use-case';
import { ListarPlanosCadastrados } from 'src/aplicacao/casos de uso/listar-planos-cadastrados.use-case';
import { AtualizarCustoPlanoDto } from 'src/aplicacao/dto/atualizarcusto-plano.dto';

@Controller('/gestao/planos')
export class PlanoController {
  constructor(
    private readonly listarPlanosCadastrados: ListarPlanosCadastrados,
    private readonly atualizarCustoPlano: AtualizarCustoPlano,
    private readonly listarAssinaturasPlano: ListarAssinaturasPlano,
  ) {}
  @Patch('/:codPlano')
  async atualizarPlano(
    @Param() codigo: number,
    @Body() atualizarCustoPlanoDto: AtualizarCustoPlanoDto,
  ) {
    return this.atualizarCustoPlano.atualizar(codigo, atualizarCustoPlanoDto);
  }

  @Get()
  async listarTodosPlanos() {
    await this.listarPlanosCadastrados.listarTodosPlanos();
  }
}
