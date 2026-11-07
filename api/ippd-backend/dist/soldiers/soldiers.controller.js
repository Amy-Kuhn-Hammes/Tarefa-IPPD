"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldiersController = void 0;
const common_1 = require("@nestjs/common");
const soldiers_service_1 = require("./soldiers.service");
const create_soldier_dto_1 = require("./dto/create-soldier.dto");
const update_soldier_dto_1 = require("./dto/update-soldier.dto");
let SoldiersController = class SoldiersController {
    soldiersService;
    constructor(soldiersService) {
        this.soldiersService = soldiersService;
    }
    create(createSoldierDto) {
        return this.soldiersService.create(createSoldierDto);
    }
    findAll() {
        return this.soldiersService.findAll();
    }
    findOne(id) {
        return this.soldiersService.findOne(+id);
    }
    update(id, updateSoldierDto) {
        return this.soldiersService.update(+id, updateSoldierDto);
    }
    remove(id) {
        return this.soldiersService.remove(+id);
    }
    patch(id, updateTaskDto) {
        return this.soldiersService.update(+id, updateTaskDto);
    }
    sssss;
};
exports.SoldiersController = SoldiersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_soldier_dto_1.CreateSoldierDto]),
    __metadata("design:returntype", void 0)
], SoldiersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SoldiersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoldiersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_soldier_dto_1.UpdateSoldierDto]),
    __metadata("design:returntype", void 0)
], SoldiersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoldiersController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_soldier_dto_1.UpdateSoldierDto]),
    __metadata("design:returntype", void 0)
], SoldiersController.prototype, "patch", null);
exports.SoldiersController = SoldiersController = __decorate([
    (0, common_1.Controller)('soldiers'),
    __metadata("design:paramtypes", [soldiers_service_1.SoldiersService])
], SoldiersController);
//# sourceMappingURL=soldiers.controller.js.map