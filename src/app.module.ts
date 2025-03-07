import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './infraestrutura/persistencia/db/db.module';
import { ConfigModule } from '@nestjs/config';
import { AssinaturaModule } from './infraestrutura/modulos/assinatura.module';
import { ClienteModule } from './infraestrutura/modulos/cliente.module';
import { PagamentoModule } from './infraestrutura/modulos/pagamento.module';
import { PlanoModule } from './infraestrutura/modulos/plano.module';
import { SeedModule } from './infraestrutura/modulos/seed.module';

@Module({
  imports: [
    AssinaturaModule,
    ClienteModule,
    PagamentoModule,
    PlanoModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
