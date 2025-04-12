import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClienteSeedService } from './infraestrutura/persistencia/db/seeds/cliente-seed.service';
import { PlanoSeedService } from './infraestrutura/persistencia/db/seeds/plano-seed.service';
import { AssinaturaSeedService } from './infraestrutura/persistencia/db/seeds/assinatura-seed.service';
import { AsyncMicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<AsyncMicroserviceOptions>({
    useFactory: (configService: ConfigService) => ({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RMQ_URL')],
        queue: configService.get<string>('RMQ_FILA_SERVICO_GESTAO'),
        queueOptions: { durable: true },
        noAck: false,
      },
    }),
    inject: [ConfigService],
  });
  await app.startAllMicroservices();
  await app.listen(3000);
  const clienteSeedService = app.get(ClienteSeedService);
  const planoSeedService = app.get(PlanoSeedService);
  const assinaturaSeedService = app.get(AssinaturaSeedService);
  await clienteSeedService.seedClientes();
  await planoSeedService.seedPlanos();
  await assinaturaSeedService.seedAssinaturas();
}
bootstrap();
