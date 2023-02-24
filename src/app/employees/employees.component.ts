import { Component } from '@angular/core';
import { IEmployee } from 'src/shared/interfaces';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

	employees: IEmployee[] = [];

	constructor() {
		this.employees = [
			{
				firstName: "Frank",
				lastName: "Holander",
				notes: "These are Frank's notes."
			},
			{
				firstName: "Selma",
				lastName: "Schmidt",
				notes: "These are Selma's notes."
			}
		];
	}
}
