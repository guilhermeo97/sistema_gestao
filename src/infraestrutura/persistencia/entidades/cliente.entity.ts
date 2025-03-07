import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import AssinaturaEntity from './assinatura.entity';
import Cliente from 'src/dominio/entidades/cliente';

@Entity('clientes')
export default class ClienteEntity {
  @PrimaryGeneratedColumn()
  codigo: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @OneToMany(() => AssinaturaEntity, (assinatura) => assinatura.cliente)
  assinaturas: AssinaturaEntity[];

  constructor(nome: string, email: string, codigo?: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.email = email;
  }

  converterParaDominio(): Cliente {
    return new Cliente(this.nome, this.email, this.codigo);
  }

  static converterParaEntidade(cliente: Cliente): ClienteEntity {
    const entidade = new ClienteEntity(
      cliente.nome,
      cliente.email,
      cliente.codigo,
    );
    return entidade;
  }
}
