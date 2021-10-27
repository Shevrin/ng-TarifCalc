import {
	Component,
	OnInit
} from '@angular/core';

import {
	HandlerFormService
} from '../handler-form.service';

import {
	TarifAirAdvService
} from '../tarifs/tarif-air-adv.service';

import {
	TarifAirEcoService
} from '../tarifs/tarif-air-eco.service';

import {
	TarifAirLuxService
} from '../tarifs/tarif-air-lux.service';
import { TarifRailAdvService } from '../tarifs/tarif-rail-adv.service';


import { TarifRailEcoService } from '../tarifs/tarif-rail-eco.service'
import { TarifRailLuxService } from '../tarifs/tarif-rail-lux.service';


@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
}

) export class ViewComponent implements OnInit {

	constructor(
		private handlerForm: HandlerFormService,
		private tarifAirEcoService: TarifAirEcoService,
		private tarifAirAdvService: TarifAirAdvService,
		private tarifAirLuxService: TarifAirLuxService,
		private tarifRailEcoService: TarifRailEcoService,
		private tarifRailAdvService: TarifRailAdvService,
		private tarifRailLuxService: TarifRailLuxService,

	) { }

	ngOnInit(): void { }

	getResultAirEcoService(): void {
		return this.tarifAirEcoService.resultFunc()
	}
	getResultAirAdvService(): void {
		return this.tarifAirAdvService.resultFunc()
	}
	getResultAirluxService(): void {
		return this.tarifAirLuxService.resultFunc()
	}
	getResultRailEcoService(): void {
		return this.tarifRailEcoService.resultFunc()
	}
	getResultRailAdvService(): void {
		return this.tarifRailAdvService.resultFunc()
	}
	getResultRailLuxService(): void {
		return this.tarifRailLuxService.resultFunc()
	}

}