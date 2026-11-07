"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldiersService = void 0;
const common_1 = require("@nestjs/common");
const node_path_1 = require("node:path");
const promises_1 = require("node:fs/promises");
let SoldiersService = class SoldiersService {
    filePath = (0, node_path_1.join)(process.cwd(), 'data', 'soldiers.json');
    writeQueue = Promise.resolve();
    async readSoldiers() {
        const content = await (0, promises_1.readFile)(this.filePath, 'utf-8');
        return JSON.parse(content);
    }
    async saveSoldiers(soldiers) {
        const content = JSON.stringify(soldiers, null, 2);
        this.writeQueue = this.writeQueue.then(() => (0, promises_1.writeFile)(this.filePath, content, 'utf-8'));
        await this.writeQueue;
    }
    async create(createSoldierDto) {
        const soldiers = await this.readSoldiers();
        const soldier = {
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
    async findOne(id) {
        const soldiers = await this.readSoldiers();
        const soldier = soldiers.find((item) => item.id === id);
        if (!soldiers) {
            throw new common_1.NotFoundException('Soldado não encontrada');
        }
        return soldier;
    }
    async update(id, updateSoldierDto) {
        const soldiers = await this.readSoldiers();
        const index = soldiers.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Soldado não encontrada');
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
    async patch(id, dto) {
        const soldiers = await this.readSoldiers();
        const index = soldiers.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        soldiers[index] = {
            ...soldiers[index],
            ...dto,
            id,
        };
        await this.saveSoldiers(soldiers);
        return soldiers[index];
    }
    async remove(id) {
        const soldiers = await this.readSoldiers();
        const filteredSoldiers = soldiers.filter((item) => item.id !== id);
        if (filteredSoldiers.length === soldiers.length) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        await this.saveSoldiers(filteredSoldiers);
    }
};
exports.SoldiersService = SoldiersService;
exports.SoldiersService = SoldiersService = __decorate([
    (0, common_1.Injectable)()
], SoldiersService);
//# sourceMappingURL=soldiers.service.js.map