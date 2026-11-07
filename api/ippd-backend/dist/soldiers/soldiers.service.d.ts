import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
export interface Soldier {
    id: number;
    name: String;
    aim: number;
    will: number;
    hp: number;
    mvspd: number;
}
export declare class SoldiersService {
    private readonly filePath;
    private writeQueue;
    private readSoldiers;
    private saveSoldiers;
    create(createSoldierDto: CreateSoldierDto): Promise<Soldier>;
    findAll(): Promise<Soldier[]>;
    findOne(id: number): Promise<Soldier | undefined>;
    update(id: number, updateSoldierDto: UpdateSoldierDto): Promise<Soldier>;
    patch(id: number, dto: Partial<UpdateSoldierDto>): Promise<Soldier>;
    remove(id: number): Promise<void>;
}
