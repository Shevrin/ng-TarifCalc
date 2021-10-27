import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HandlerFormService } from './handler-form.service';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';


@NgModule({
	declarations: [
		AppComponent,
		ViewComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],

	providers: [
		HandlerFormService,

	],

	bootstrap: [AppComponent]
})
export class AppModule { }
