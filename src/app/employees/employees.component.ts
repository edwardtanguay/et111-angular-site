import { Component } from '@angular/core';
import { IEmployee } from 'src/shared/interfaces';
import axios from 'axios';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

	employees: IEmployee[] = [];

	constructor() {
		(async () => {
			const rawEmployees = (await axios.get('https://edwardtanguay.vercel.app/share/employees.json')).data;

			rawEmployees.forEach((rawEmployee: any) => {
				this.employees.push({
					firstName: rawEmployee.firstName,
					lastName: rawEmployee.lastName,
					notes: rawEmployee.notes
				})
			})

		})();

		// this.employees = [
		// 	{
		// 		firstName: "Frank",
		// 		lastName: "Holander",
		// 		notes: "These are Frank's notes."
		// 	},
		// 	{
		// 		firstName: "Selma",
		// 		lastName: "Schmidt",
		// 		notes: "These are Selma's notes."
		// 	}
		// ];
	}
}
