import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; // Library untuk hash password
import { CreateKaryawanDto } from './dto/create-karyawan.dto';
import { Karyawan } from './entities/karyawan.entity';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan)
    private karyawanRepository: Repository<Karyawan>,
  ) {}

  // 1. CREATE KARYAWAN (Dengan Hash Password)
  async create(createKaryawanDto: CreateKaryawanDto) {
    // A. Buat instance baru
    const karyawanBaru = new Karyawan();
    karyawanBaru.nama_lengkap = createKaryawanDto.nama_lengkap;
    karyawanBaru.email = createKaryawanDto.email;
    
    // B. Relasi ke Divisi (Cukup set ID-nya saja)
    // TypeORM cukup pintar untuk tahu ini referensi ke tabel sebelah
    karyawanBaru.divisi = { id: createKaryawanDto.divisi_id } as any;

    // C. HASH PASSWORD (PENTING!)
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createKaryawanDto.password, salt);
    karyawanBaru.password = hashedPassword;

    karyawanBaru.role = createKaryawanDto.role || 'staff'; // Default 'staff' jika tidak diisi

    // D. Simpan ke Database
    return await this.karyawanRepository.save(karyawanBaru);
  }

  // 2. FIND ALL (Join dengan tabel Divisi biar lengkap)
  async findAll() {
    return await this.karyawanRepository.find({
      relations: ['divisi'], // Tampilkan juga data divisinya
    });
  }

  // 3. FIND ONE
  async findOne(id: number) {
    return await this.karyawanRepository.findOne({
      where: { id },
      relations: ['divisi'],
    });
  }

  // (Optional: Find by Email untuk login nanti)
  async findByEmail(email: string) {
    return await this.karyawanRepository.findOne({
      where: { email },
      relations: ['divisi'],
    });
  }
}