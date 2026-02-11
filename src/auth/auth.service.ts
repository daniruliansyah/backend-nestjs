import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { KaryawanService } from '../karyawan/karyawan.service';

@Injectable()
export class AuthService {
  constructor(
    private karyawanService: KaryawanService,
    private jwtService: JwtService,
  ) {}

  // Fungsi Login
  async login(email: string, pass: string) {
    // 1. Cari user berdasarkan email
    const user = await this.karyawanService.findByEmail(email);

    // 2. Jika user tidak ada, ATAU password salah
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Email atau Password salah!');
    }

    // 3. Jika sukses, bikin payload (isi surat token)
    const payload = { sub: user.id, email: user.email, role: user.role };

    // 4. Generate Token
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}