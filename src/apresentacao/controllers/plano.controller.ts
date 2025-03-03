import { Controller } from '@nestjs/common';
import { ListarPlanosCadastrados } from 'src/aplicacao/casos de uso/planos-cadastrados.use-case';

@Controller()
export class PlanoController {
  constructor(
    private readonly listarPlanosCadastrados: ListarPlanosCadastrados,
  ) {}
}
