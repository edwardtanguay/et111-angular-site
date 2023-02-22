import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-info-box',
	templateUrl: './info-box.component.html',
	styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {
	@Input() title = 'Info';
	@Input() body = '(Watch this space...)';
	@Input() status = '';

	color = '';
	showDevInfo = false;

	ngOnInit() {
		this.color = this.status === 'danger' ? 'red' : 'green';
	}

}
