import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EnglishComponent } from './english/english.component';

const routes: Routes = [
	{ path: 'english', component: EnglishComponent }
];

@NgModule({
	exports: [RouterModule],
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule { }
