import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';

@Controller('soldiers')
export class SoldiersController {
  constructor(private readonly soldiersService: SoldiersService) {}

  @Post()
  create(@Body() createSoldierDto: CreateSoldierDto) {
    return this.soldiersService.create(createSoldierDto);
  }

  @Get()
  findAll() {
    return this.soldiersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldiersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSoldierDto: UpdateSoldierDto) {
    return this.soldiersService.update(+id, updateSoldierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldiersService.remove(+id);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateTaskDto: UpdateSoldierDto) {
    return this.soldiersService.update(+id, updateTaskDto);
  }sssss
}
