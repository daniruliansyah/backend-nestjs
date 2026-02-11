import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { KaryawanModule } from '../karyawan/karyawan.module'; // Import Karyawan
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    KaryawanModule, // Biar Auth bisa baca data Karyawan
    PassportModule,
    
    // Konfigurasi JWT (Token)
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Ambil dari .env
        signOptions: { expiresIn: '1d' }, // Token berlaku 1 hari
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}