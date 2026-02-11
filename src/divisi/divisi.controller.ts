import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // <--- Import ini
import { DivisiService } from './divisi.service';
import { CreateDivisiDto } from './dto/create-divisi.dto';
import { UpdateDivisiDto } from './dto/update-divisi.dto';

@Controller('divisi')
export class DivisiController {
  constructor(private readonly divisiService: DivisiService) {}

  @UseGuards(AuthGuard('jwt')) // <--- Gunakan AuthGuard di sini
  @Post()
  create(@Body() createDivisiDto: CreateDivisiDto) {
    return this.divisiService.create(createDivisiDto);
  }

  @Get()
  findAll() {
    return this.divisiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisiService.findOne(+id);
  }
  
}