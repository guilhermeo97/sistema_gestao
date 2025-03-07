import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ClienteEntity from './cliente.entity';
import PlanoEntity from './plano.entity';
import Assinatura from 'src/dominio/entidades/assinatura';

@Entity('assinaturas')
export default class AssinaturaEntity {
  @PrimaryGeneratedColumn()
  codigo: number;

  @ManyToOne(() => PlanoEntity, (plano) => plano.assinaturas)
  plano: PlanoEntity;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.assinaturas)
  cliente: ClienteEntity;

  @Column({ type: 'date' })
  inicioFidelidade: Date;

  @Column({ type: 'date' })
  fimFidelidade: Date;

  constructor(
    plano: PlanoEntity,
    cliente: ClienteEntity,
    inicioFidelidade: Date,
    fimFidelidade: Date,
    codigo?: number,
  ) {
    this.plano = plano;
    this.cliente = cliente;
    this.inicioFidelidade = inicioFidelidade;
    this.fimFidelidade = fimFidelidade;
    this.codigo = codigo;
  }

  converterParaDominio(): Assinatura {
    return new Assinatura(
      this.plano.converterParaDominio(),
      this.cliente.converterParaDominio(),
      this.codigo,
    );
  }

  static converterParaEntidade(assinatura: Assinatura): AssinaturaEntity {
    const entidadeAssinatura = new AssinaturaEntity(
      PlanoEntity.converterParaEntidade(assinatura.codPlano),
      ClienteEntity.converterParaEntidade(assinatura.codCli),
      assinatura.inicioFidelidade,
      assinatura.fimFidelidade,
      assinatura.codigo,
    );
    return entidadeAssinatura;
  }
}
