import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClienteSeedService } from './infraestrutura/persistencia/db/seeds/cliente-seed.service';
import { PlanoSeedService } from './infraestrutura/persistencia/db/seeds/plano-seed.service';
import { AssinaturaSeedService } from './infraestrutura/persistencia/db/seeds/assinatura-seed.service';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://wzdzpmja:yibUYRiKSYiLdR_yBFE0PQSPjBUGSdhd@jaragua.lmq.cloudamqp.com/wzdzpmja',
      ],
      queue: 'sistema_gestao_novo_pagamento',
      queueOptions: { durable: true },
      noAck: false,
    },
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
