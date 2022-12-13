import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'embryo-header-user-profile',
	templateUrl: './HeaderUserProfileDropdown.component.html',
	styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})

export class HeaderUserProfileDropdownComponent implements OnInit {

	constructor(public router : Router) { }

	ngOnInit() {
	}

	//log out method 
	logOut(){
		document.getElementById('html').classList.remove("admin-panel");
		this.router.navigate(['/session/signin']);
	}
}
