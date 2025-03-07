import { Controller, Get } from '@nestjs/common';
import { ListarClientesCadastrados } from 'src/aplicacao/casos de uso/listar-clientes-cadastrados.use-case';

@Controller('/gestao')
export class ClienteController {
  constructor(private readonly listarClientes: ListarClientesCadastrados) {}

  @Get('clientes')
  async listarTodosClientes() {
    return await this.listarClientes.listarTodosClientes();
  }
}
