import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HandlerFormService } from './handler-form.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	dataForm!: FormGroup


	constructor(
		private fb: FormBuilder,
		private handlerForm: HandlerFormService
	) { }

	initForm() {
		this.dataForm = this.fb.group({
			distance: [, [
				Validators.required,
				Validators.pattern('^(0|[1-9][0-9]*)$')
			]],
			age: [, [
				Validators.required,
				Validators.pattern('^(0|[1-9][0-9]*)$')
			]],
			weight: [, [
				Validators.required,
				Validators.pattern('^(0|[1-9][0-9]*)$')
			]]
		});
	}
	ngOnInit() {
		this.initForm();
	}

	isControlInvalid(controlName: string): boolean {
		const control = this.dataForm.controls[controlName];
		const result = control.invalid && control.touched;
		return result;
	}

	onSubmit() {
		const controls = this.dataForm.controls;
		if (this.dataForm.invalid) {
			Object.keys(controls)
				.forEach(controlName => controls[controlName].markAsTouched());
			return;
		}

		return this.handlerForm.objDataFromForm = this.dataForm.value

	}


}


