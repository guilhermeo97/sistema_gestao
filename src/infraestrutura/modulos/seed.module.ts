import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ClienteEntity from '../persistencia/entidades/cliente.entity';
import PlanoEntity from '../persistencia/entidades/plano.entity';
import { PlanoSeedService } from '../persistencia/db/seeds/plano-seed.service';
import { ClienteSeedService } from '../persistencia/db/seeds/cliente-seed.service';
import { ClienteModule } from './cliente.module';
import { PlanoModule } from './plano.module';
import { AssinaturaSeedService } from '../persistencia/db/seeds/assinatura-seed.service';
import { AssinaturaModule } from './assinatura.module';
import AssinaturaEntity from '../persistencia/entidades/assinatura.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteEntity, PlanoEntity, AssinaturaEntity]),
    ClienteModule,
    PlanoModule,
    AssinaturaModule,
  ],
  providers: [PlanoSeedService, ClienteSeedService, AssinaturaSeedService],
  exports: [PlanoSeedService, ClienteSeedService, AssinaturaSeedService],
})
export class SeedModule {}
