import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("./tasks.service").Task>;
    findAll(): Promise<import("./tasks.service").Task[]>;
    findOne(id: string): Promise<import("./tasks.service").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("./tasks.service").Task>;
    remove(id: string): Promise<void>;
}
