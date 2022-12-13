import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ReviewPopup',
  templateUrl: './ReviewPopup.component.html',
  styleUrls: ['./ReviewPopup.component.scss']
})
export class ReviewPopupComponent implements OnInit {

   singleProductDetails : any;
   reviews : any;

   constructor(public dialogRef: MatDialogRef<ReviewPopupComponent>) { }

   ngOnInit() {
   }

}
