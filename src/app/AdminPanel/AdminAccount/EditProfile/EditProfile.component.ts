import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationStart } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { WebcamImage } from 'ngx-webcam';
import { Subscription } from 'rxjs';


interface Response {
   data: any;
   orderId: string;
}

@Component({
   selector: 'app-EditProfile',
   templateUrl: './EditProfile.component.html',
   styleUrls: ['./EditProfile.component.scss']
})
export class EditProfileComponent implements OnInit {

   type: string;
   srcResult;
   info: FormGroup;
   address: FormGroup;
   card: FormGroup;
   emailPattern: any = /\S+@\S+\.\S+/;
   toastOption: ToastOptions = {
      title: "Account Information",
      msg: "Your account information was updated successfully!",
      showClose: true,
      timeout: 3000,
      theme: "material"
   };
   message: string;
   imagePath: any;
   imgURL: any;
   webcamImage: WebcamImage;
   subscription: Subscription;

   constructor(private http: HttpClient,
      private route: ActivatedRoute,
      private router: Router,
      private formGroup: FormBuilder,
      private toastyService: ToastaService,
   ) {
      this.route.params.subscribe(params => {
         this.route.queryParams.forEach(queryParams => {
            this.type = queryParams['type'];
         });
      });

   }

   ngOnInit() {
      this.info = this.formGroup.group({
         profile: ['Merchant with KYC', [Validators.required]],
         name: ['Projectile Enterprises', [Validators.required]],
         contactName: ['John Doe', [Validators.required]],
         phone: ['9817389123', [Validators.required]],
         accountNumber: ['0101123456003'],
         accountName: ['Projectile Enterprises Pvt Ltd'],
         bic: ['PNBPUS3NNYC'],
         bankName: ['Wells Fargo'],
         city: ['New York'],
         state: ['NY'],
         zip: ['10451'],
         kyc: ['VGYHJ8383K'],
         email: ['johndoe@appveen.com', [Validators.required, Validators.pattern(this.emailPattern)]]
      });
   }



   onFileSelected() {
      const inputNode: any = document.querySelector('#file');

      if (typeof (FileReader) !== 'undefined') {
         const reader = new FileReader();

         reader.onload = (e: any) => {

            this.srcResult = e.target.result;
         };

         this.preview(inputNode.files)
      }
   }

   /**
    * Function is used to submit the profile info.
    * If form value is valid, redirect to profile page.
    */

   arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
         binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
   }


   submitProfileInfo() {
      if (this.info.valid) {


         var url = "https://smartcontracts.demo.appveen.com/idm/api/v1/login";
         var jsonPayload = { "username": "superadmin", "password": "QL2021" }

         this.http.post<Response>(url, jsonPayload, {}).subscribe(data => {

            var img = "data:image/jpeg;base64," + (this.arrayBufferToBase64(this.srcResult));



            //   var url = "https://smartcontracts.demo.appveen.com//participant/kyc";
            //var url = "https://smartcontracts.demo.appveen.com/txn/participant/kyc";

            var url = "https://smartcontracts.demo.appveen.com/mdm/api/party";
            var jsonPayload = {
               "party": {

                  "dealRefId": "REF1654755476335",
                  "name": this.info.value.contactName,
                  "partyRefId": this.info.value.phone,
                  "status": "Active",
                  "kycCompleted": true,
                  "validFrom": "2021-02-25",
                  "validUntil": "2022-01-30",
                  "responsibility": this.info.value.profile,
                  "contacts": [
                     {
                        "name": this.info.value.contactName,
                        "authorizedSignatory": false,
                        "enableNotifications": true,
                        "workPhone": this.info.value.phone,
                        "mobilePhone": this.info.value.phone,
                        "email": this.info.value.email,
                        "address": {
                           "town": this.info.value.city,
                           "street": "",
                           "pincode": this.info.value.zip,
                           "state": this.info.value.state,
                           "country": "US"
                        }
                     }
                  ],
                  "accounts": [
                     {
                        "paymentInstrumentId": "Payment Profile",
                        "description": "Payout Account",
                        "paymentDetails": {
                           "accountType": "Account Number",
                           "to": this.info.value.accountNumber,
                           "beneficiaryBic": this.info.value.bic,
                           "beneficiaryName": this.info.value.contactName,
                           "beneficiaryAddressLine1Max35Char": this.info.value.state,
                           "beneficiaryAddressLine2Max35Char": this.info.value.zip,
                           "beneficiaryCountry": "US",
                           "beneficiaryBank": this.info.value.bankName
                        }
                     }
                  ],
                  "attributes": [
                     {
                        "label": "Settlement Plan",
                        "value": "Deal"
                     }, {
                        "label": "Commission Plan",
                        "value": "Deal"
                     }, {
                        "label": "PAN",
                        "value": this.info.value.kyc
                     }
                  ]
                  //,
                  //"pan_img":img
               }
            }

            const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + data["token"], "Access-Control-Allow-Origin": "*" })
            this.http.post<Response>(url, jsonPayload, { headers }).subscribe(data => {
               console.log("POST Request is successful ", data);
               this.router.navigate(['/admin-panel/account/profile']).then(() => {
                  localStorage.setItem("partyRefId", this.info.value.phone);
                  this.toastyService.success(this.toastOption);
               });
            })
            console.log("POST Request is successful ", data);
            this.router.navigate(['/admin-panel/account/profile']).then(() => {
               localStorage.setItem("partyRefId", this.info.value.phone);
               this.toastyService.success(this.toastOption);
            });
         })






      } else {
         for (let i in this.info.controls) {
            this.info.controls[i].markAsTouched();
         }
      }
   }


   preview(files) {
      console.log(files)
      if (files.length === 0)
         return;

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
         this.message = "Only images are supported.";
         return;
      }

      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
         this.imgURL = reader.result;
      }
   }

   // handleImage(webcamImage: WebcamImage) {
   //    this.webcamImage = webcamImage;
   // }

}
