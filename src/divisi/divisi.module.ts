import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <--- Import ini
import { DivisiService } from './divisi.service';
import { DivisiController } from './divisi.controller';
import { Divisi } from './entities/divisi.entity'; // <--- Import Entity

@Module({
  imports: [TypeOrmModule.forFeature([Divisi])], // <--- DAFTARKAN DI SINI
  controllers: [DivisiController],
  providers: [DivisiService],
  exports: [DivisiService] // (Opsional, bagus untuk nanti)
})
export class DivisiModule {}