System.register(['angular2/core', 'angular2/router', '../ericsson-dashboard/ericsson-dashboard.component'], function(exports_1, context_1) {
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
    var core_1, router_1, ericsson_dashboard_component_1;
    var EricssonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ericsson_dashboard_component_1_1) {
                ericsson_dashboard_component_1 = ericsson_dashboard_component_1_1;
            }],
        execute: function() {
            EricssonComponent = (function () {
                function EricssonComponent() {
                }
                EricssonComponent = __decorate([
                    core_1.Component({
                        selector: 'ericsson',
                        template: '<router-outlet></router-outlet>',
                        //templateUrl: 'app/ericsson/app.component.html',
                        //TODO styleUrls: ['app/ericsson/main.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Dashboard',
                            component: ericsson_dashboard_component_1.EricssonDashboardComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], EricssonComponent);
                return EricssonComponent;
            }());
            exports_1("EricssonComponent", EricssonComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map