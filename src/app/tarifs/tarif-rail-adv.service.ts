import { Injectable } from '@angular/core';
import { HandlerFormService } from '../handler-form.service';

@Injectable({
	providedIn: 'root'
})
export class TarifRailAdvService {
	obj: any
	dataForm: any;
	result: any

	constructor(public handlerForm: HandlerFormService) {
		this.obj = this.handlerForm.dataForCalc["РЖД"]["Продвинутый"]
	}
	resultFunc(): void {
		return this.handlerForm.handler(this.obj)
	}
}
