import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Divisi } from '../../divisi/entities/divisi.entity';

@Entity()
export class Karyawan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama_lengkap: string;

  @Column({ unique: true }) // Email tidak boleh kembar
  email: string;

  @Column()
  password: string; // Nanti akan di-hash (enkripsi)

  @Column({ default: 'staff' }) // Role sederhana
  role: string; 

  // Relasi: Banyak Karyawan masuk ke SATU Divisi
  @ManyToOne(() => Divisi, (divisi) => divisi.karyawan, {
    onDelete: 'SET NULL', // Jika divisi dihapus, karyawan tetap ada tapi divisinya null
  })
  divisi: Divisi;
}