import { Injectable } from '@nestjs/common';

@Injectable()
export class ListarAssinaturasCliente {
  async listarPorCliente(codCliente: number) {
    return codCliente;
  }
}
