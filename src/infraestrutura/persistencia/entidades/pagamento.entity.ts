import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PlanoEntity from './plano.entity';
import Pagamento from 'src/dominio/entidades/pagamento';

@Entity('pagamentos')
export default class PagamentoEntity {
  @PrimaryGeneratedColumn()
  codigo: number;
  @OneToMany(() => PlanoEntity, (plano) => plano.codigo)
  codPlano: PlanoEntity;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorPago: number;
  @Column({ type: 'date' })
  dataPagamento: Date;

  constructor(codPlano: PlanoEntity, valorPago: number, dataPagamento: Date) {
    this.codPlano = codPlano;
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
  }

  converterParaDominio(): Pagamento {
    return new Pagamento(
      this.codPlano.converterParaDominio(),
      this.valorPago,
      this.dataPagamento,
    );
  }

  static converterParaEntidade(pagamento: Pagamento): PagamentoEntity {
    const entidadePagamento = new PagamentoEntity(
      PlanoEntity.converterParaEntidade(pagamento.codPlano),
      pagamento.valorPago,
      pagamento.dataPagamento,
    );
    return entidadePagamento;
  }
}
