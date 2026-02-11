import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength,  } from 'class-validator';

export class CreateKaryawanDto {
  @IsNotEmpty()
  nama_lengkap: string;

  @IsEmail({}, { message: 'Format email salah' })
  email: string;

  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  @IsOptional() // Artinya: Boleh kosong
  @IsString()
  role?: string; // Tanda tanya (?) artinya optional di TypeScript

  @IsNumber()
  @IsNotEmpty()
  divisi_id: number; // Kita butuh ID divisi untuk relasi
}