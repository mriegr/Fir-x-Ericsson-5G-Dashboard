System.register(['angular2/core', '../bl-comp-gaugemeter/bl-comp-gaugemeter.component', '../bl-comp-linechart/bl-comp-linechart.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bl_comp_gaugemeter_component_1, bl_comp_linechart_component_1;
    var EricssonWidgetAccelerationMonitoring;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bl_comp_gaugemeter_component_1_1) {
                bl_comp_gaugemeter_component_1 = bl_comp_gaugemeter_component_1_1;
            },
            function (bl_comp_linechart_component_1_1) {
                bl_comp_linechart_component_1 = bl_comp_linechart_component_1_1;
            }],
        execute: function() {
            EricssonWidgetAccelerationMonitoring = (function () {
                function EricssonWidgetAccelerationMonitoring() {
                    // TODO: IMPORTANT!!!!
                    //	 	 Render view only if all core promises has been resolved
                    //@Input()
                    //set deviceID(val: number) {
                    //	this._deviceID = val;
                    //	this.ngOnInit();
                    //}
                    //@Input()
                    //set datarate(val: number) {
                    //	this._datarate = val;
                    //	this.updateDatarate();
                    //}
                    this.width = 390;
                    this._deviceID = null;
                    this.data = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    this._datarate = 250;
                    this.updater = 0;
                    this.ready = false;
                    this.activeChart = 1;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetAccelerationMonitoring.prototype, "width", void 0);
                EricssonWidgetAccelerationMonitoring = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-accelerationmonitoring',
                        templateUrl: 'app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.html',
                        styleUrls: ['app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.css'],
                        directives: [
                            bl_comp_gaugemeter_component_1.BLCompGaugeMeterComponent,
                            bl_comp_linechart_component_1.BLCompLineChartComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], EricssonWidgetAccelerationMonitoring);
                return EricssonWidgetAccelerationMonitoring;
            }());
            exports_1("EricssonWidgetAccelerationMonitoring", EricssonWidgetAccelerationMonitoring);
        }
    }
});
//# sourceMappingURL=ericsson-widget-accelerationmonitoring.component.js.map