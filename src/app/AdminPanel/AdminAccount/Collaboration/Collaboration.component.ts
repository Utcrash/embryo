import { Component, OnInit } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-collaboration',
	templateUrl: './Collaboration.component.html',
	styleUrls: ['./Collaboration.component.scss']
})

export class CollaborationComponent implements OnInit {

	popUpDeleteUserResponse : any;
	popUpNewUserResponse : any;
	collaborationData: any [];

	displayedColumns : string[] = ['image', 'name', 'email', 'access', 'action'];

	dataSource = new MatTableDataSource<any>();

	constructor(public service : AdminPanelServiceService) { }

	ngOnInit() {
		this.service.getCollaborationContent().valueChanges().subscribe(res => this.getCollaborationData(res));
	}

	//getCollaborationData method is used to get the collaboration data.
	getCollaborationData(response){
		this.collaborationData = response;
		this.dataSource = new MatTableDataSource<any>(this.collaborationData);
	}
	/**
	  *onDelete method is used to open a delete dialog.
	  */
	onDelete(i){
		this.service.deleteDialog("Are you sure you want to delete this user permanently?").
			subscribe( res => {this.popUpDeleteUserResponse = res},err => console.log(err),()  => this.getDeleteResponse(this.popUpDeleteUserResponse,i))
	}

	/**
	  * getDeleteResponse method is used to delete a user from the user list.
	  */
	getDeleteResponse(response : string,i){
		if(response == "yes"){
			this.dataSource.data.splice(i,1);
			this.dataSource = new MatTableDataSource(this.dataSource.data);
		}
	}

	/**
	  * addNewUserDialog method is used to open a add new client dialog.
	  */
	addNewUserDialog() {
		this.service.addNewUserDialog().subscribe( res => {this.popUpNewUserResponse = res},err => console.log(err),()  => this.getAddUserPopupResponse(this.popUpNewUserResponse))
	}

	/**
	  *getAddUserPopupResponse method is used to get a new client dialog response.
	  *if response will be get then add new client into client list.
	  */
	getAddUserPopupResponse(response: any){
		if(response){
			let addUser = {
				image : "assets/images/user-edit.png",
				name : response.name,
				email : response.email,
				access : response.accessType
			}
			this.collaborationData.push(addUser);
			this.dataSource = new MatTableDataSource<any>(this.collaborationData);
		}
	}

}
