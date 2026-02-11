import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { CreateKaryawanDto } from './dto/create-karyawan.dto';

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Post()
  create(@Body() createKaryawanDto: CreateKaryawanDto) {
    return this.karyawanService.create(createKaryawanDto);
  }

  @Get()
  findAll() {
    return this.karyawanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.karyawanService.findOne(+id);
  }
}