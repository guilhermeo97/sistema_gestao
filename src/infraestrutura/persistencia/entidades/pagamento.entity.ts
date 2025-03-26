import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Pagamento from 'src/dominio/entidades/pagamento';
import AssinaturaEntity from './assinatura.entity';

@Entity('pagamentos')
export default class PagamentoEntity {
  @PrimaryGeneratedColumn()
  codigo: number;
  @ManyToOne(() => AssinaturaEntity, (assinatura) => assinatura.codigo)
  codAss: AssinaturaEntity;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorPago: number;
  @Column({ type: 'date' })
  dataPagamento: Date;

  constructor(
    codPlano: AssinaturaEntity,
    valorPago: number,
    dataPagamento: Date,
  ) {
    this.codAss = codPlano;
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
  }

  converterParaDominio(): Pagamento {
    return new Pagamento(
      this.codAss.converterParaDominio(),
      this.valorPago,
      this.dataPagamento,
    );
  }

  static converterParaEntidade(pagamento: Pagamento): PagamentoEntity {
    const entidadePagamento = new PagamentoEntity(
      AssinaturaEntity.converterParaEntidade(pagamento.codAss),
      pagamento.valorPago,
      pagamento.dataPagamento,
    );
    return entidadePagamento;
  }
}
