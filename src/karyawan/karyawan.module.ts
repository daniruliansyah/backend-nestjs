import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <--- Import ini
import { KaryawanService } from './karyawan.service';
import { KaryawanController } from './karyawan.controller';
import { Karyawan } from './entities/karyawan.entity'; // <--- Import Entity

@Module({
  imports: [TypeOrmModule.forFeature([Karyawan])], // <--- DAFTARKAN DI SINI
  controllers: [KaryawanController],
  providers: [KaryawanService],
  exports: [KaryawanService]
})
export class KaryawanModule {}