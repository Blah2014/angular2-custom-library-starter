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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_helloworld_component_1 = require('./ng2-helloworld.component');
var Ng2HelloworldModule = (function () {
    function Ng2HelloworldModule() {
    }
    Ng2HelloworldModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [ng2_helloworld_component_1.Ng2HelloworldComponent],
            exports: [ng2_helloworld_component_1.Ng2HelloworldComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2HelloworldModule);
    return Ng2HelloworldModule;
}());
exports.Ng2HelloworldModule = Ng2HelloworldModule;
//# sourceMappingURL=ng2-helloworld.module.js.map