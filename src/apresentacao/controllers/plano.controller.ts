import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { AtualizarCustoPlano } from 'src/aplicacao/casos de uso/atualizar-custo-plano.use-case';
import { ListarPlanosCadastrados } from 'src/aplicacao/casos de uso/listar-planos-cadastrados.use-case';
import { AtualizarCustoPlanoDto } from 'src/aplicacao/dto/atualizarcusto-plano.dto';

@Controller('/gestao/planos')
export class PlanoController {
  constructor(
    private readonly listarPlanosCadastrados: ListarPlanosCadastrados,
    private readonly atualizarCustoPlano: AtualizarCustoPlano,
  ) {}
  @Patch('/:codPlano')
  async atualizarPlano(
    @Param('codPlano') codPlano: number,
    @Body() atualizarCustoPlanoDto: AtualizarCustoPlanoDto,
  ) {
    return await this.atualizarCustoPlano.atualizar(
      codPlano,
      atualizarCustoPlanoDto,
    );
  }

  @Get()
  async listarTodosPlanos() {
    return await this.listarPlanosCadastrados.listarTodosPlanos();
  }
}
