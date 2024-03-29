import { Component, Input, OnInit, OnDestroy, ElementRef, Output, EventEmitter } from 'angular2/core';
import { Router } from 'angular2/router';
import { DFAEnergyDataService } from '../fir-dbapi/dfaenergydata.service';

import { BLCompGaugeMeterComponent } from '../bl-comp-gaugemeter/bl-comp-gaugemeter.component';
import { BLCompLineChartComponent } from '../bl-comp-linechart/bl-comp-linechart.component';

@Component({
	selector: 'ericsson-widget-datamonitoring',
	templateUrl: 'app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.html',
	styleUrls: ['app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.css'],
	directives: [
		BLCompGaugeMeterComponent,
		BLCompLineChartComponent
	],
	providers: [
		DFAEnergyDataService
	]
})

export class EricssonWidgetDataMonitoring implements OnInit, OnDestroy {

	// TODO: IMPORTANT!!!!
    //	 	 Render view only if all core promises has been resolved

    @Input()
    set deviceID(val: number) {
		this._deviceID = val;
		this.ngOnInit();
    }

	@Input() sensors = [];
	@Input() sensorIDs = [];

	@Input()
	set datarate(val: number) {
		this._datarate = val;
		this.updateDatarate();
	}

	@Input() width = 390;
	@Input() height = 200;
	
	@Output() setMeta= new EventEmitter();
	
	private _deviceID = null;
	private data;
	private dataset;
	private _datarate: number = 300;
	private updater: any = 0;
	private ready: boolean = false;
	private trigger:boolean = true;
	public activeChart = 0;
	private host;

	constructor(private DFAEnergyData: DFAEnergyDataService, private element: ElementRef) {
		this.host = this.element.nativeElement;
	}

	ngOnInit() {
		if (this.sensorIDs.length == 0) return;
		let C = this;
		this.DFAEnergyData.getInitData(this.sensorIDs).then(function(data) {
			C.dataset = data;
			C.data = data;
			C.ready = true;
			C.setsubname(C.sensors[0].name);
		}).catch(function(e) {
			console.warn("Initialization error:" + e);
		});
		this.updateDatarate();
	}

	ngOnDestroy() {
		clearInterval(this.updater);
	}

	public updateDatarate() {
		if (this.sensorIDs.length == 0) return;
		let C = this;
		clearInterval(C.updater);
		C.updater = setInterval(function() {
			C.DFAEnergyData.getCurData(C.sensorIDs)
			.then(function (data){
				C.data = data;
				C.trigger = !C.trigger;
			})
			.catch(function(e) {
				console.warn("Request failed:" + e);
			});
		}, C._datarate);
	}

	public units(s: string) {
		switch (s) {
			case "temp":
				return '&#176;C';
			case "light":
				return 'lx';
			case "accel_x":
			case "accel_y":
			case "accel_z":
				return 'm/s&#178;';
			default:
				return '';
		}
	}
	
	public setsubname(s: any) {
		if (this.sensorIDs.length>0) {
			this.setMeta.emit(s);
		}
	}

}