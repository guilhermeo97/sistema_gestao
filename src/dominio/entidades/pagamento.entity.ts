import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Plano from './plano.entity';

@Entity('pagamentos')
export default class Pagamento {
  @PrimaryGeneratedColumn()
  codigo: number;
  @OneToMany(() => Plano, (plano) => plano.codigo)
  codPlano: Plano;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorPago: number;
  @Column({ type: 'date' })
  dataPagamento: Date;

  constructor(codPlano: Plano, valorPago: number, dataPagamento: Date) {
    this.codPlano = codPlano;
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
  }
}
