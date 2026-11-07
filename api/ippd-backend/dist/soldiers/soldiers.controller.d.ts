import { SoldiersService } from './soldiers.service';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
export declare class SoldiersController {
    private readonly soldiersService;
    constructor(soldiersService: SoldiersService);
    create(createSoldierDto: CreateSoldierDto): Promise<import("./soldiers.service").Soldier>;
    findAll(): Promise<import("./soldiers.service").Soldier[]>;
    findOne(id: string): Promise<import("./soldiers.service").Soldier | undefined>;
    update(id: string, updateSoldierDto: UpdateSoldierDto): Promise<import("./soldiers.service").Soldier>;
    remove(id: string): Promise<void>;
    patch(id: string, updateTaskDto: UpdateSoldierDto): Promise<import("./soldiers.service").Soldier>;
    sssss: any;
}
