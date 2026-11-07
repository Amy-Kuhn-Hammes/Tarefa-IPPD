"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
let TasksService = class TasksService {
    filePath = (0, node_path_1.join)(process.cwd(), 'data', 'tasks.json');
    writeQueue = Promise.resolve();
    async readTasks() {
        const content = await (0, promises_1.readFile)(this.filePath, 'utf-8');
        return JSON.parse(content);
    }
    async saveTasks(tasks) {
        const content = JSON.stringify(tasks, null, 2);
        this.writeQueue = this.writeQueue.then(() => (0, promises_1.writeFile)(this.filePath, content, 'utf-8'));
        await this.writeQueue;
    }
    async findAll() {
        return this.readTasks();
    }
    async findOne(id) {
        const tasks = await this.readTasks();
        const task = tasks.find((item) => item.id === id);
        if (!task) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        return task;
    }
    async create(dto) {
        const tasks = await this.readTasks();
        const task = {
            id: tasks.length > 0
                ? Math.max(...tasks.map((item) => item.id)) + 1
                : 1,
            descricao: dto.descricao,
            inicio: dto.inicio,
            fim: dto.fim,
            status: 'PENDENTE',
            resultado: null,
        };
        tasks.push(task);
        await this.saveTasks(tasks);
        return task;
    }
    async update(id, dto) {
        const tasks = await this.readTasks();
        const index = tasks.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        tasks[index] = {
            id,
            descricao: dto.descricao,
            inicio: dto.inicio,
            fim: dto.fim,
            status: dto.status,
            resultado: dto.resultado,
        };
        await this.saveTasks(tasks);
        return tasks[index];
    }
    async patch(id, dto) {
        const tasks = await this.readTasks();
        const index = tasks.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        tasks[index] = {
            ...tasks[index],
            ...dto,
            id,
        };
        await this.saveTasks(tasks);
        return tasks[index];
    }
    async remove(id) {
        const tasks = await this.readTasks();
        const filteredTasks = tasks.filter((item) => item.id !== id);
        if (filteredTasks.length === tasks.length) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        await this.saveTasks(filteredTasks);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map