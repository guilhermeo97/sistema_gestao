import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import AssinaturaEntity from './assinatura.entity';
import Plano from 'src/dominio/entidades/plano';

@Entity('planos')
export default class PlanoEntity {
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
  @OneToMany(() => AssinaturaEntity, (assinatura) => assinatura.plano)
  assinaturas: AssinaturaEntity[];

  constructor(
    nome: string,
    custoMensal: number,
    descricao: string,
    dataUltimoPagamento: Date,
    codigo?: number,
  ) {
    this.codigo = codigo;
    this.nome = nome;
    this.custoMensal = custoMensal;
    this.descricao = descricao;
    this.dataUltimoPagamento = dataUltimoPagamento;
  }

  converterParaDominio(): Plano {
    return new Plano(
      this.nome,
      this.custoMensal,
      this.descricao,
      this.dataUltimoPagamento,
      this.codigo,
    );
  }

  static converterParaEntidade(plano: Plano): PlanoEntity {
    const entidade = new PlanoEntity(
      plano.nome,
      plano.custoMensal,
      plano.descricao,
      plano.dataUltimoPagamento,
      plano.codigo,
    );
    return entidade;
  }
}
