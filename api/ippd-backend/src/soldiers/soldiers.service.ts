import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import { join } from 'node:path';
import { writeFile, readFile } from 'node:fs/promises';


export interface Soldier {
  id: number;
  name: String;
  aim: number;
  will: number;
  hp: number;
  mvspd: number;
}

@Injectable()
export class SoldiersService {

  private readonly filePath = join(
      process.cwd(),
      'data',
      'soldiers.json',
    );
  
    private writeQueue: Promise<void> = Promise.resolve();
  
    private async readSoldiers(): Promise<Soldier[]> {
      const content = await readFile(this.filePath, 'utf-8');
      return JSON.parse(content) as Soldier[];
    }
  
    private async saveSoldiers(soldiers: Soldier[]): Promise<void> {
      const content = JSON.stringify(soldiers, null, 2);
  
      this.writeQueue = this.writeQueue.then(() =>
        writeFile(this.filePath, content, 'utf-8'),
      );
  
      await this.writeQueue;
    }


  async create(createSoldierDto: CreateSoldierDto) {
    const soldiers = await this.readSoldiers();
    
        const soldier: Soldier = {
          id: soldiers.length > 0
            ? Math.max(...soldiers.map((item) => item.id)) + 1
            : 1,
          name: createSoldierDto.name,
          will: createSoldierDto.will,
          aim: createSoldierDto.aim,
          mvspd: createSoldierDto.mvspd,
          hp: createSoldierDto.hp
        };

    soldiers.push(soldier);
    await this.saveSoldiers(soldiers);

    return soldier;

  }

  findAll() {
    return this.readSoldiers();
  }

  async findOne(id: number) {
    const soldiers = await this.readSoldiers();
        const soldier = soldiers.find((item) => item.id === id);
    
        if (!soldiers) {
          throw new NotFoundException('Soldado não encontrada');
        }
    
        return soldier;
  }

  async update(id: number, updateSoldierDto: UpdateSoldierDto) {
  const soldiers = await this.readSoldiers();
    const index = soldiers.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('Soldado não encontrada');
    }

    soldiers[index] = {
      id,
      name: updateSoldierDto.name,
      will: updateSoldierDto.will,
      aim: updateSoldierDto.aim,
      mvspd: updateSoldierDto.mvspd,
      hp: updateSoldierDto.hp
    };

    await this.saveSoldiers(soldiers);

    return soldiers[index];
  }

  async patch(
    id: number,
    dto: Partial<UpdateSoldierDto>,
  ): Promise<Soldier> {
    const soldiers = await this.readSoldiers();
    const index = soldiers.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    soldiers[index] = {
      ...soldiers[index],
      ...dto,
      id,
    };
    await this.saveSoldiers(soldiers);

    return soldiers[index];
  }

  async remove(id: number) {
    const soldiers = await this.readSoldiers();
    const filteredSoldiers = soldiers.filter((item) => item.id !== id);

    if (filteredSoldiers.length === soldiers.length) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    await this.saveSoldiers(filteredSoldiers);
  }
}
