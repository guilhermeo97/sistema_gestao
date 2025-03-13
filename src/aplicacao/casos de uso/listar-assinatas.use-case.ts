import { Injectable, BadRequestException } from '@nestjs/common';
import { FiltroTodos } from '../filtros/filtro-todos';
import { FiltroAtivos } from '../filtros/filtro-ativos';
import { FiltroCancelados } from '../filtros/filtro-cancelados';
import { FiltroAssinatura } from '../filtros/filtro-assinatura.interface';
import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';

@Injectable()
export class ListarAssinaturasCadastradas {
  private filtros: { [key: string]: FiltroAssinatura } = {
    TODOS: new FiltroTodos(),
    ATIVOS: new FiltroAtivos(),
    CANCELADOS: new FiltroCancelados(),
  };

  constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

  async listar(tipo: string) {
    const filtro = this.filtros[tipo];
    if (!filtro) {
      throw new BadRequestException('Tipo não encontrado');
    }
    return await filtro.buscar(this.assinaturaRepository);
  }
}

// import {
//   BadRequestException,
//   Injectable,
//   InternalServerErrorException,
//   NotFoundException,
// } from '@nestjs/common';
// import { AssinaturaRepository } from 'src/infraestrutura/persistencia/repositorios/assinatura.repository';
// import { ExibirAssinaturaDto } from '../dto/exibir-assinatura.dto';

// @Injectable()
// export class ListarAssinaturasCadastradas {
//   constructor(private readonly assinaturaRepository: AssinaturaRepository) {}

//   async listar(tipo: string) {
//     try {
//       switch (tipo) {
//         case 'TODOS': {
//           const listarTodos = await this.assinaturaRepository.buscarTodos();
//           if (!listarTodos) {
//             throw new NotFoundException(
//               'Nenhuma assinatura encontrada para o cliente',
//             );
//           }
//           const exibirTodos = listarTodos.map((assinatura) => {
//             return new ExibirAssinaturaDto(assinatura);
//           });
//           return exibirTodos;
//         }
//         case 'ATIVOS': {
//           const listarAtivos = await this.assinaturaRepository.buscarAtivos();
//           if (!listarAtivos) {
//             throw new NotFoundException(
//               'Nenhuma assinatura encontrada para o cliente',
//             );
//           }
//           const exibirAtivos = listarAtivos.map((assinatura) => {
//             return new ExibirAssinaturaDto(assinatura);
//           });
//           return exibirAtivos;
//         }
//         case 'CANCELADOS': {
//           const listarCancelados =
//             await this.assinaturaRepository.buscarCancelados();
//           if (!listarCancelados) {
//             throw new NotFoundException(
//               'Nenhuma assinatura encontrada para o cliente',
//             );
//           }
//           const exibirCancelados = listarCancelados.map((assinatura) => {
//             return new ExibirAssinaturaDto(assinatura);
//           });
//           return exibirCancelados;
//         }
//         default:
//           throw new BadRequestException('Tipo não enontrado');
//       }
//     } catch (error) {
//       if (error instanceof BadRequestException) {
//         throw error;
//       }

//       if (error instanceof NotFoundException) {
//         throw error;
//       }
//       throw new InternalServerErrorException('Erro ao listar assinaturas');
//     }
//   }
// }
