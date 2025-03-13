import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ClienteEntity from './cliente.entity';
import PlanoEntity from './plano.entity';
import Assinatura from 'src/dominio/entidades/assinatura';
import PagamentoEntity from './pagamento.entity';

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

  @Column({ type: 'date', nullable: true })
  dataUltimoPagamento?: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  custoFinal: number;

  @Column({ nullable: true })
  descricao: string;

  @OneToMany(() => PagamentoEntity, (pagamento) => pagamento.codAss)
  pagamentos: PagamentoEntity[];

  constructor(
    plano: PlanoEntity,
    cliente: ClienteEntity,
    inicioFidelidade: Date,
    fimFidelidade: Date,
    dataUltimoPagamento?: Date,
    custoFinal?: number,
    descricao?: string,
    codigo?: number,
  ) {
    this.plano = plano;
    this.cliente = cliente;
    this.inicioFidelidade = inicioFidelidade;
    this.fimFidelidade = fimFidelidade;
    this.dataUltimoPagamento = dataUltimoPagamento;
    this.custoFinal = custoFinal;
    this.descricao = descricao;
    this.codigo = codigo;
  }

  converterParaDominio(): Assinatura {
    const assinatura = new Assinatura(
      this.plano.converterParaDominio(),
      this.cliente.converterParaDominio(),
      this.codigo,
      new Date(this.inicioFidelidade),
      new Date(this.fimFidelidade),
      this.dataUltimoPagamento ? new Date(this.dataUltimoPagamento) : undefined,
      this.custoFinal,
      this.descricao,
    );
    return assinatura;
  }

  static converterParaEntidade(assinatura: Assinatura): AssinaturaEntity {
    const entidadeAssinatura = new AssinaturaEntity(
      PlanoEntity.converterParaEntidade(assinatura.codPlano),
      ClienteEntity.converterParaEntidade(assinatura.codCli),
      assinatura.inicioFidelidade,
      assinatura.fimFidelidade,
      assinatura.dataUltimoPagamento,
      assinatura.custoFinal,
      assinatura.descricao,
      assinatura.codigo,
    );
    return entidadeAssinatura;
  }
}
