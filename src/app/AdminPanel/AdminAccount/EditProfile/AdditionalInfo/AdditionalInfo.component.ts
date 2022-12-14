import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-additional-info',
  templateUrl: './AdditionalInfo.component.html',
  styleUrls: ['./AdditionalInfo.component.scss']
})
export class AdditionalInfoComponent implements OnInit {
  data: any
  imgFace1: any;
  imgFace2: any;
  info1: any;
  info2: any;
  object: any = new Object();
  constructor(public dialogRef: MatDialogRef<AdditionalInfoComponent>, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.imgFace1 = this.data?.['image-1']?.['detected-face'] ? this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.data['image-1']['detected-face']) : ''
    this.imgFace2 = this.data?.['image-2']?.['detected-face'] ? this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.data['image-2']['detected-face']) : ''
    this.info1 = this.data['image-1']['extracted-info'];
    this.info2 = this.data['image-2']['extracted-info'];
    console.log(this.info1, this.info2)
  }

  yes() {
    this.dialogRef.close("yes");
  }

  checkType(item) {
    return typeof item;
  }

  infoFormat(text) {
    return text.replaceAll(/_/g, ' ')
  }

}
