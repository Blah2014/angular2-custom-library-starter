"use strict";
var testing_1 = require('@angular/core/testing');
var ng2_helloworld_component_1 = require('./ng2-helloworld.component');
describe('Ng2HelloworldComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [ng2_helloworld_component_1.Ng2HelloworldComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(ng2_helloworld_component_1.Ng2HelloworldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ng2-helloworld.component.spec.js.map