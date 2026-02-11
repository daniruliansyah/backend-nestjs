import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDivisiDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama divisi tidak boleh kosong' })
  nama_divisi: string;

  @IsString()
  deskripsi: string;
}