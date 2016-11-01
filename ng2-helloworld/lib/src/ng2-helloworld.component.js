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
var Ng2HelloworldComponent = (function () {
    function Ng2HelloworldComponent() {
    }
    Ng2HelloworldComponent.prototype.ngOnInit = function () {
    };
    Ng2HelloworldComponent = __decorate([
        core_1.Component({
            selector: 'ng2-helloworld',
            template: "\n        <p class=\"hello\">\n            ng2-helloworld works!\n        </p>\n    ",
            styles: ["\n        .hello { \n            color: #fff;\n            background: #ccc;\n            padding: 20px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2HelloworldComponent);
    return Ng2HelloworldComponent;
}());
exports.Ng2HelloworldComponent = Ng2HelloworldComponent;
//# sourceMappingURL=ng2-helloworld.component.js.map