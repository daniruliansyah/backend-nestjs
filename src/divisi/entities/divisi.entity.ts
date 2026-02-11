import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Karyawan } from '../../karyawan/entities/karyawan.entity';

@Entity() // Menandakan ini adalah tabel database
export class Divisi {
  @PrimaryGeneratedColumn() // Auto Increment ID
  id: number;

  @Column()
  nama_divisi: string;

  @Column({ type: 'text', nullable: true }) // Boleh kosong
  deskripsi: string;

  // Relasi: Satu Divisi punya BANYAK Karyawan
  @OneToMany(() => Karyawan, (karyawan) => karyawan.divisi)
  karyawan: Karyawan[];
}