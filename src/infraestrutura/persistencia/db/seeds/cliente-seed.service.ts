import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../../repositorios/cliente.repository';
import Cliente from 'src/dominio/entidades/cliente';

@Injectable()
export class ClienteSeedService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async seedClientes() {
    console.log('📡 Iniciando seeding de clientes...');

    const clientes: Cliente[] = [
      new Cliente('Cliente 1', 'cliente1@email.com'),
      new Cliente('Cliente 2', 'cliente2@email.com'),
      new Cliente('Cliente 3', 'cliente3@email.com'),
      new Cliente('Cliente 4', 'cliente4@email.com'),
      new Cliente('Cliente 5', 'cliente5@email.com'),
      new Cliente('Cliente 6', 'cliente6@email.com'),
      new Cliente('Cliente 7', 'cliente7@email.com'),
      new Cliente('Cliente 8', 'cliente8@email.com'),
      new Cliente('Cliente 9', 'cliente9@email.com'),
      new Cliente('Cliente 10', 'cliente10@email.com'),
    ];

    for (const cliente of clientes) {
      const buscar = await this.clienteRepository.buscarPorEmail(cliente.email);
      if (!buscar) {
        await this.clienteRepository.salvar(cliente);
        console.log(`✅ Cliente ${cliente.nome} inserido!`);
      } else {
        console.log(`⚠️ Cliente ${cliente.nome} já buscar, pulando...`);
      }
    }

    console.log('🌱 Seeding de clientes finalizado!');
  }
}
