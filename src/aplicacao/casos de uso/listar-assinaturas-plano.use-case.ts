import { Injectable } from '@nestjs/common';

@Injectable()
export class ListarAssinaturasPlano {
  listarPorPlano(codPlano: number) {
    return codPlano;
  }
}
