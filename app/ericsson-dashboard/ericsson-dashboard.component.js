System.register(['angular2/core', '../fir-dbapi/dfamodules.service', '../MaterialDesignLiteUpgradeElement', '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component', '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component', '../ericsson-widget-livemap/ericsson-widget-livemap.component', '../ericsson-widget-container/ericsson-widget-container.component'], function(exports_1, context_1) {
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
    var core_1, dfamodules_service_1, MaterialDesignLiteUpgradeElement_1, ericsson_widget_datamonitoring_component_1, ericsson_widget_accelerationmonitoring_component_1, ericsson_widget_livemap_component_1, ericsson_widget_container_component_1;
    var EricssonDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dfamodules_service_1_1) {
                dfamodules_service_1 = dfamodules_service_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            },
            function (ericsson_widget_datamonitoring_component_1_1) {
                ericsson_widget_datamonitoring_component_1 = ericsson_widget_datamonitoring_component_1_1;
            },
            function (ericsson_widget_accelerationmonitoring_component_1_1) {
                ericsson_widget_accelerationmonitoring_component_1 = ericsson_widget_accelerationmonitoring_component_1_1;
            },
            function (ericsson_widget_livemap_component_1_1) {
                ericsson_widget_livemap_component_1 = ericsson_widget_livemap_component_1_1;
            },
            function (ericsson_widget_container_component_1_1) {
                ericsson_widget_container_component_1 = ericsson_widget_container_component_1_1;
            }],
        execute: function() {
            EricssonDashboardComponent = (function () {
                function EricssonDashboardComponent(DFAModules) {
                    this.DFAModules = DFAModules;
                    this.devices = [];
                    this.deviceIDs = [];
                    this.loading = true;
                    this.datarate = 250;
                    this.updater = 0;
                    this.devMode = false;
                    this.coordinateschanged = false;
                    this.devicescoordinate = [];
                }
                EricssonDashboardComponent.prototype.ngOnInit = function () {
                    var C = this;
                    this.DFAModules.getModules().then(function (data) {
                        C.devices = data;
                        C.switchActiveDevice(0);
                    }).catch(function (e) {
                        var errMsg = e.message || e.statusText || 'Server error';
                        console.error("DashboardComponentException:" + errMsg);
                    });
                };
                EricssonDashboardComponent.prototype.updateDatarate = function () { };
                EricssonDashboardComponent.prototype.switchActiveDevice = function (index) {
                    var C = this;
                    C.loading = true;
                    C.activeDeviceIndex = index;
                    C.deviceIDs[0] = index;
                    C.deviceIDs[1] = index;
                    C.deviceIDs[2] = index;
                    C.deviceIDs[3] = index;
                    setTimeout(function () {
                        C.loading = false;
                    }, 400);
                };
                EricssonDashboardComponent.prototype.overrideDevice = function (widget, op) {
                    var len = this.devices.length, tmp;
                    tmp = (this.deviceIDs[widget] + parseInt(op)) % len;
                    this.deviceIDs[widget] = (tmp < 0) ? (len - 1) : tmp;
                };
                EricssonDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'ericsson-dashboard',
                        templateUrl: 'app/ericsson-dashboard/ericsson-dashboard.component.html',
                        styleUrls: ['app/ericsson-dashboard/ericsson-dashboard.component.css'],
                        directives: [
                            MaterialDesignLiteUpgradeElement_1.MDL,
                            ericsson_widget_container_component_1.EricssonWidgetContainer,
                            ericsson_widget_datamonitoring_component_1.EricssonWidgetDataMonitoring,
                            ericsson_widget_accelerationmonitoring_component_1.EricssonWidgetAccelerationMonitoring,
                            ericsson_widget_livemap_component_1.EricssonWidgetLiveMap
                        ],
                        providers: [
                            dfamodules_service_1.DFAModulesService
                        ]
                    }), 
                    __metadata('design:paramtypes', [dfamodules_service_1.DFAModulesService])
                ], EricssonDashboardComponent);
                return EricssonDashboardComponent;
            }());
            exports_1("EricssonDashboardComponent", EricssonDashboardComponent);
        }
    }
});
//# sourceMappingURL=ericsson-dashboard.component.js.map