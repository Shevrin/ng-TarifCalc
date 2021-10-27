import { Injectable } from '@angular/core';
import { HandlerFormService } from '../handler-form.service';

@Injectable({
	providedIn: 'root'
})
export class TarifAirAdvService {
	obj: any
	dataForm: any;
	result: any

	constructor(public handlerForm: HandlerFormService) {
		this.obj = this.handlerForm.dataForCalc["Аэрофлот"]["Продвинутый"]
	}
	resultFunc(): void {
		return this.handlerForm.handler(this.obj)
	}
}