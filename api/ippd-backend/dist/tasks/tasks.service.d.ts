import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export interface Task {
    id: number;
    descricao: string;
    inicio: number;
    fim: number;
    status: string;
    resultado: number[] | null;
}
export declare class TasksService {
    private readonly filePath;
    private writeQueue;
    private readTasks;
    private saveTasks;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    create(dto: CreateTaskDto): Promise<Task>;
    update(id: number, dto: UpdateTaskDto): Promise<Task>;
    patch(id: number, dto: Partial<UpdateTaskDto>): Promise<Task>;
    remove(id: number): Promise<void>;
}
