import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Cliente from './cliente.entity';
import Plano from './plano.entity';

@Entity('assinaturas')
export default class Assinatura {
  @PrimaryGeneratedColumn()
  codigo: number;
  @ManyToOne(() => Plano, (plano) => plano.codigo)
  codPlano: Plano;
  @ManyToOne(() => Cliente, (cliente) => cliente.codigo)
  codCli: Cliente;
  @Column({ type: 'date' })
  inicioFidelidade: Date;
  @Column({ type: 'date' })
  fimFidelidade: Date;

  constructor(codPlano: Plano, codCli: Cliente) {
    this.codPlano = codPlano;
    this.codCli = codCli;
    this.inicioFidelidade = new Date();
    this.fimFidelidade = new Date();
  }
}
