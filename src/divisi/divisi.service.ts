import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDivisiDto } from './dto/create-divisi.dto';
import { UpdateDivisiDto } from './dto/update-divisi.dto';
import { Divisi } from './entities/divisi.entity';

@Injectable()
export class DivisiService {
  constructor(
    @InjectRepository(Divisi)
    private divisiRepository: Repository<Divisi>,
  ) {}

  // 1. Tambah Divisi Baru
  async create(createDivisiDto: CreateDivisiDto) {
    const divisiBaru = this.divisiRepository.create(createDivisiDto);
    return await this.divisiRepository.save(divisiBaru);
  }

  // 2. Ambil Semua Divisi
  async findAll() {
    return await this.divisiRepository.find();
  }

  // 3. Ambil Satu Divisi by ID
  async findOne(id: number) {
    return await this.divisiRepository.findOneBy({ id });
  }

  // (Update & Remove bisa dikosongkan dulu kalau belum perlu)
  update(id: number, updateDivisiDto: UpdateDivisiDto) {
    return `This action updates a #${id} divisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} divisi`;
  }
}
