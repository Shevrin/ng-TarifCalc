import { Injectable, OnInit } from '@angular/core';
import { HandlerFormService } from '../handler-form.service';

@Injectable({
	providedIn: 'root'
})
export class TarifAirLuxService {
	obj: any
	dataForm: any;
	result: any


	constructor(private handlerForm: HandlerFormService) {
		this.obj = this.handlerForm.dataForCalc["Аэрофлот"]["Люкс"]
	}


	resultFunc(): void {
		return this.handlerForm.handler(this.obj)
	}
}
