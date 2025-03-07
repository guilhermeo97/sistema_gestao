import { Injectable } from '@nestjs/common';
import PlanoRepository from '../../repositorios/plano.repository';
import Plano from 'src/dominio/entidades/plano';

@Injectable()
export class PlanoSeedService {
  constructor(private readonly planoRepository: PlanoRepository) {}

  async seedPlanos() {
    console.log('📡 Iniciando seeding de clientes...');

    const planos: Plano[] = [
      new Plano('Plano 1', 50, 'Descrição plano 1', new Date()),
      new Plano('Plano 2', 60, 'Descrição plano 2', new Date()),
      new Plano('Plano 3', 70, 'Descrição plano 3', new Date()),
      new Plano('Plano 4', 80, 'Descrição plano 4', new Date()),
      new Plano('Plano 5', 90, 'Descrição plano 5', new Date()),
    ];

    for (const plano of planos) {
      const buscar = await this.planoRepository.buscarPorNomePlano(plano.nome);
      if (!buscar) {
        await this.planoRepository.salvar(plano);
        console.log(`✅ Plano ${plano.nome} inserido!`);
      } else {
        console.log(`⚠️ Plano ${plano.nome} já buscar, pulando...`);
      }

      console.log(`✅ Plano ${plano.nome} inserido!`);
    }

    console.log('🌱 Seeding de clientes finalizado!');
  }
}
