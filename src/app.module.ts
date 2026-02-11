import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <--- Import ini penting buat baca .env
import { TypeOrmModule } from '@nestjs/typeorm'; // <--- Import ini buat connect database
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DivisiModule } from './divisi/divisi.module';
import { KaryawanModule } from './karyawan/karyawan.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // 1. Konfigurasi untuk membaca file .env
    ConfigModule.forRoot({
      isGlobal: true, // Agar .env bisa dibaca di semua module tanpa import ulang
    }),

    // 2. Konfigurasi Koneksi Database (MySQL)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,      // Ambil dari .env
      port: parseInt(process.env.DB_PORT || '3306'), // Ubah string ke number
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      
      // Auto-load entities: Membaca file .entity.ts secara otomatis
      autoLoadEntities: true,
      
      // Synchronize: TRUE hanya untuk development (auto create table). 
      // Matikan (false) saat production agar data tidak hilang.
      synchronize: true, 
    }),

    // Module bawaan aplikasi kita
    DivisiModule,
    KaryawanModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}