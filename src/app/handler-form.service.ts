import {
	Injectable
}

	from '@angular/core';

@Injectable({
	providedIn: 'root'
}

) export class HandlerFormService {
	dataForCalc = {
		"Аэрофлот": {
			"Эконом": {
				"cost": 4,
				"freeWeight": 5,
				"costWeight": 4000,
				"maxWeight": 20
			}

			,
			"Продвинутый": {

				"cost": 8,
				"freeWeight": 20,
				"costWeight": 5000,
				"maxWeight": 50,
				"discount": {
					"childAge": 7,
					"childDiscount": 30
				}
			}
			,
			"Люкс": {
				"cost": 15,
				// "freeWeight": 0,
				"costWeight": 0,
				"maxWeight": 50,
				"discount": {
					"childAge": 16,
					"childDiscount": 30
				}
			}
		}
		,
		"РЖД": {
			"Эконом": {
				"cost": 0.5,
				"freeWeight": 15,
				"costWeight": 50,
				"maxWeight": 50,
				"discount": [5,
					50]
			}
			,
			"Продвинутый": {
				"cost": 2,
				"freeWeight": 20,
				"costWeight": 50,
				"maxWeight": 60,
				"discount": {
					"childAge": 8,
					"childDiscount": 30
				}
			}
			,
			"Люкс": {
				"cost": 4,
				// "freeWeight": 0,
				"costWeight": 0,
				"maxWeight": 60,
				"discount": {
					"childAge": 16,
					"childDiscount": 20
				}
			}
		}
	}

	objDataFromForm: any
	obj: any;
	handler(obj: any) {
		let cost = obj["cost"];
		let freeWeight = obj["freeWeight"];
		let costWeight = obj["costWeight"];
		let maxWeight = obj["maxWeight"];
		let discountValue = obj["discount"];
		let discount = 1;
		let result: any;

		if (discountValue !== undefined && this.objDataFromForm["age"] <= discountValue["childAge"]) {
			discount = 1 - discountValue["childDiscount"] / 100
		}

		if (this.objDataFromForm["weight"] > maxWeight) {
			result = 'Тариф недоступен'
		}

		else if (this.objDataFromForm["weight"] <= maxWeight && freeWeight !== undefined && this.objDataFromForm["weight"] >= freeWeight) {
			result = Math.floor(discount * (cost * this.objDataFromForm["distance"] + (this.objDataFromForm["weight"] - freeWeight) * costWeight)) + 'P'
		}

		else if (this.objDataFromForm["weight"] <= freeWeight || freeWeight === undefined) {
			result = Math.floor(discount * (cost * this.objDataFromForm["distance"])) + 'P'
		}

		return result
	}
}