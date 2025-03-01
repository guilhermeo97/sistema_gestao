import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Assinatura from './assinatura.entity';

@Entity('clientes')
export default class Cliente {
  @PrimaryGeneratedColumn()
  codigo: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @OneToMany(() => Assinatura, (assinatura) => assinatura.codCli)
  assinaturas: Assinatura[];

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}
