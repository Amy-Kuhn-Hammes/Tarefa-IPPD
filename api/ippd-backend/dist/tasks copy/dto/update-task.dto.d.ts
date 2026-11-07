import { CreateTaskDto } from './create-task.dto';
export declare class UpdateTaskDto extends CreateTaskDto {
    status: string;
    resultado: number[] | null;
}
