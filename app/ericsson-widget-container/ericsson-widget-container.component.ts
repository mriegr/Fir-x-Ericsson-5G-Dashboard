import { Component, Input, OnInit, ElementRef, Output, EventEmitter, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';

import { EricssonWidgetDataMonitoring } from '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component';
import { EricssonWidgetAccelerationMonitoring } from '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component';
import { EricssonWidgetLiveMap } from '../ericsson-widget-livemap/ericsson-widget-livemap.component';

@Component({
	selector: 'ericsson-widget-container',
	templateUrl: 'app/ericsson-widget-container/ericsson-widget-container.component.html',
	styleUrls: ['app/ericsson-widget-container/ericsson-widget-container.component.css'],
	directives: [
		EricssonWidgetDataMonitoring,
		EricssonWidgetAccelerationMonitoring,
		EricssonWidgetLiveMap
	]
})

export class EricssonWidgetContainer implements OnInit, OnDestroy {

	@Input() device = null;
	@Input() 
	set defaultWidget(val: number) {
		this.activeWidget = val;
	}
	@Output() overrideDeviceID= new EventEmitter();

	public activeWidget;
	public _deviceID = null;
	public datarate = 300;
	public widgetList = [];
	public availWidgetList = [
		{
			index: 0,
			activated: false,
			name: "Data Monitoring",
			icon: "&#xE3A9;",
			sensors: [],
			ids: []
		},
		{
			index: 1,
			activated: false,
			name: "Acceleration",
			icon: "&#xE569;",
			sensors: [],
			ids: []
		},
		{
			index: 2,
			activated: false,
			name: "DFA-Maps",
			icon: "&#xE55E;",
			sensors: [],
			ids: []
		},
		{
			index: 3,
			activated: true,
			name: "Camera Feed",
			icon: "&#xE04B;",
			sensors: [],
			ids: []
		}
	];
	private ready: boolean = false;
	private width: number = 390;
	private height: number = 200;
	private loading: boolean = true;
	private menuActive: boolean = false;
	private host;
	private livestreamurl = "";
	private interval;

	@Input() 
	set deviceID(val: number){
		let C = this;
		C._deviceID = val;
		C.loading = true;
		C.ready = false;
		C.activeWidget = 0;
		if (typeof C.device === "undefined") { return; }

		// Create lookup table
		var lookup = {}, lookuplength = C.availWidgetList.length;;
		for (var i = 0, len = lookuplength; i < len; i++) {
			C.availWidgetList[i].sensors = [];
			C.availWidgetList[i].ids = [];
			lookup[C.availWidgetList[i].index] = C.availWidgetList[i];
		}

		// Look for available sensors
		for (var i = 0, len:number = C.device.sensors.length; i < len; i++) {
			switch (C.device.sensors[i].type) {
				case "temp":
				case "light": 
					lookup[0].activated = true;
					lookup[0].sensors.push(C.device.sensors[i]);
					lookup[0].ids.push(C.device.sensors[i].id);
					break;
				case "accel_x":
				case "accel_y":
				case "accel_z":
					lookup[1].activated = true;
					lookup[1].sensors.push(C.device.sensors[i]);
					lookup[1].ids.push(C.device.sensors[i].id);
					break;
			}
		}

		C.widgetList = [];
		for (var i = 0, len: number = lookuplength; i < len; i++) {
			if (lookup[i].activated) {
				C.widgetList.push(lookup[i]);
			}
		}

		setTimeout(function() {
			C.ready = true;
			C.loading = false;
		}, 700)
	}

	constructor(private element: ElementRef) {
		this.host = this.element.nativeElement;
		this.widgetList = this.availWidgetList;
	}

	ngOnInit() {
		let C = this;
		this.width = this.host.offsetWidth - 20;
		this.height = this.host.offsetHeight - 20;
		if (typeof C.device == "undefined") return;
		this.interval = setInterval(function() { C.livestreamurl = "http://"+C.device.camera_ip+"/cam_pic.php?ts=" + (new Date()).getTime(); }, 100);
	}

	ngOnDestroy() {
		clearInterval(this.interval);
	}

	public switchWidget(s: string) {
		switch (s) {
			case "left":
				this.activeWidget = (this.activeWidget == 0) ? this.widgetList.length-1 : --this.activeWidget;
				break;
			case "right":
				this.activeWidget = ++this.activeWidget % this.widgetList.length;
		}
	}

	public overrideDevice(s: any) {
		this.overrideDeviceID.emit(s);
	}

}