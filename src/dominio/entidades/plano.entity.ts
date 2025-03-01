import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Assinatura from './assinatura.entity';
import Pagamento from './pagamento.entity';

@Entity('planos')
export default class Plano {
  @PrimaryGeneratedColumn()
  codigo: number;
  @Column()
  nome: string;
  @Column()
  custoMensal: number;
  @Column()
  descricao: string;
  @Column({ type: 'date' })
  dataUltimoPagamento: Date;
  @OneToMany(() => Assinatura, (assinatura) => assinatura.codPlano)
  assinaturas: Assinatura[];
  @OneToMany(() => Pagamento, (pagamento) => pagamento.codPlano)
  pagamentos: Pagamento[];

  constructor(
    nome: string,
    custoMensal: number,
    descricao: string,
    dataUltimoPagamento: Date,
  ) {
    this.nome = nome;
    this.custoMensal = custoMensal;
    this.descricao = descricao;
    this.dataUltimoPagamento = dataUltimoPagamento;
  }
}
