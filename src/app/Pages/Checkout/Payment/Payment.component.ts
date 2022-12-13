import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import { EmbryoService } from '../../../Services/Embryo.service';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface Response {
  data     : any;
  endToEndId     : string;
}

@Component({
  selector: 'app-Payment',
  templateUrl: './Payment.component.html',
  styleUrls: ['./Payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterViewInit{

   step = 0;
   isDisabledPaymentStepTwo  = true;
   isDisabledPaymentStepThree = false;
   emailPattern        : any = /\S+@\S+\.\S+/;
   offerCards : any = [
      {
         id: 1,
         name:"Debit Card",
         content: "Visa Mega Shopping Offer"
      },
      {
         id: 2,
         name:"Credit Card",
         content: "American Express 20% Flat"
      },
      {
         id: 3,
         name:"Debit Card",
         content: "BOA Buy 1 Get One Offer"
      },
      {
         id: 4,
         name:"Master Card",
         content: "Mastercard Elite Card"
      },
      {
         id: 5,
         name:"Debit Card",
         content: "Visa Mega Shopping Offer"
      }
   ]

   bankCardsImages : any = [
      {
         id:1,
         image:"assets/images/client-logo-1.png"
      },
      {
         id:2,
         image:"assets/images/client-logo-2.png"
      },
      {
         id:3,
         image:"assets/images/client-logo-3.png"
      },
      {
         id:4,
         image:"assets/images/client-logo-4.png"
      },
      {
         id:5,
         image:"assets/images/client-logo-5.png"
      }
   ]

   paymentFormOne   : FormGroup;

   constructor(private http:HttpClient, public embryoService : EmbryoService, 
               private formGroup : FormBuilder,
               public router: Router) {

      this.embryoService.removeBuyProducts();
   }

   ngOnInit() {

      this.paymentFormOne = this.formGroup.group({
         user_details       : this.formGroup.group({
            first_name         : ['John', [Validators.required]],
            last_name          : ['Doe', [Validators.required]],
            street_name_number : ['Baker Street', [Validators.required]],
            apt                : ['221B', [Validators.required]],
            zip_code           : ['NW1', [Validators.required]],
            city_state         : ['London', [Validators.required]],
            country            : ['United Kingdom', [Validators.required]],
            mobile             : ['+44511912773', [Validators.required]],
            email              : ['johndoe@appveen.com', [Validators.required, Validators.pattern(this.emailPattern)]],
            share_email        : ['', [Validators.pattern(this.emailPattern)]],
         }),
         offers             : this.formGroup.group({
            discount_code   : [''],
            card_type       : [1],
            card_type_offer_name  : [null]
         }),
         payment            : this.formGroup.group({
            card_number     : ['4920 1495 1948 1830', [Validators.required]],
            user_card_name  : ['John Doe', [Validators.required]],
            cvv             : ['433', [Validators.required]],
            expiry_date     : ['03/2026', [Validators.required]],
            card_id         : [1],
            order_id     : ['--------', [Validators.required]],
            txn_id     : ['--------', [Validators.required]],
            total_amount     : 0,
            bank_card_value : [null]
         })
      });
   }

   ngAfterViewInit() {
   }

   public setStep(index: number) {
      this.step = index;
      switch (index) {
         case 0:
            this.isDisabledPaymentStepTwo = true;
            this.isDisabledPaymentStepThree = true;
            break;
         case 1:
            this.isDisabledPaymentStepThree = false;
            break;
         default:
            
            break;
      }
   }

   public toggleRightSidenav() {
      this.embryoService.paymentSidenavOpen = !this.embryoService.paymentSidenavOpen;
   }

   public getCartProducts() {
      let total = 0;
      if(this.embryoService.localStorageCartProducts && this.embryoService.localStorageCartProducts.length>0) {
         for(let product of this.embryoService.localStorageCartProducts) {
            if(!product.quantity){
               product.quantity = 1;
            }
            total += (product.price*product.quantity);
         }
         total += (this.embryoService.shipping+this.embryoService.tax);
         return total;
      } 
      return total; 
   }

   public submitPayment() {
      let userDetailsGroup = <FormGroup>(this.paymentFormOne.controls['user_details']);
      if(userDetailsGroup.valid)
      {
         switch (this.step) {
            case 0:
               this.step = 1;
               this.isDisabledPaymentStepTwo = false;
               break;
            case 1:
               this.step = 2;
               break;
            
            default:
               // code...
               break;
         }
      } else {
         this.isDisabledPaymentStepTwo = true;
         this.isDisabledPaymentStepThree = true;
         for (let i in userDetailsGroup.controls) {
            userDetailsGroup.controls[i].markAsTouched();
         }
      }
   }

   public selectedPaymentTabChange(value) {
      let paymentGroup = <FormGroup>(this.paymentFormOne.controls['payment']); 

      paymentGroup.markAsUntouched();

      if(value && value.index == 1) {
            paymentGroup.controls['card_number'].clearValidators();
            paymentGroup.controls['user_card_name'].clearValidators();
            paymentGroup.controls['cvv'].clearValidators();
            paymentGroup.controls['expiry_date'].clearValidators();

            paymentGroup.controls['bank_card_value'].setValidators([Validators.required]); 
      } else {
        
         paymentGroup.controls['card_number'].setValidators([Validators.required]); 
         paymentGroup.controls['user_card_name'].setValidators([Validators.required]); 
         paymentGroup.controls['cvv'].setValidators([Validators.required]); 
         paymentGroup.controls['expiry_date'].setValidators([Validators.required]); 

         paymentGroup.controls['bank_card_value'].clearValidators();
      }

      paymentGroup.controls['card_number'].updateValueAndValidity();
      paymentGroup.controls['user_card_name'].updateValueAndValidity();
      paymentGroup.controls['cvv'].updateValueAndValidity();
      paymentGroup.controls['expiry_date'].updateValueAndValidity();
      paymentGroup.controls['bank_card_value'].updateValueAndValidity();
   }

   public finalStep() {
      let paymentGroup = <FormGroup>(this.paymentFormOne.controls['payment']);

      if(paymentGroup.valid) {

         var url = "https://smartcontracts.demo.appveen.com/idm/api/v1/login";
         var jsonPayload = {"username":"superadmin","password":"QL2021"}

         this.http.post<Response>(url, jsonPayload, {  }).subscribe(data => {


         //var url = "https://smartcontracts.demo.appveen.com/txn/verify";

         var url = "https://smartcontracts.demo.appveen.com/transaction/api/transaction";
         // var config = "content-type: application/json";
         var formdata = this.paymentFormOne.value;
         formdata.payment.total_amount = this.getCartProducts();

         var marketplaceCommission = 0.01 * parseFloat(formdata.payment.total_amount)+0.5;
         marketplaceCommission = parseFloat(marketplaceCommission.toFixed(2));

         var pgFee = 2;

         var merchantFees = formdata.payment.total_amount - (marketplaceCommission + pgFee);
         merchantFees = parseFloat(merchantFees.toFixed(2));

         var refNb = Date.now();
         var reqEDt=new Date();
         reqEDt.setDate(reqEDt.getDate()+3);
         var reqDt=reqEDt.toISOString();
         
         var jsonPayload = {
            "category": "eCommerceOrder",
            "dealRefId": "REF1654755476335",
            "initiatingParty": {
               "partyRefId": "EMBRYO"
            },
            "paymentInfo": {
               "partyRefId": "EMBRYO",
               "currency": "USD",
               "country": "US",
               "amount": formdata.payment.total_amount,
               "platformRefNo": refNb,
               "charges": "SHA"
            },
            "creditTransactionInfo": [
               {
                  "scheduledAdhocClubing": true,
                  "fragmentPlatformRefNo": "Marketplace-" + refNb,
                  "participant":{
                  "partyRefId": "EMBRYO",
                  "beneficiaryCountry": "US"
                  },
                  "amount": marketplaceCommission,
                  "requestedExecutionOn": reqEDt,
                  "transactionAttributes": []
               },
               {
                  "scheduledAdhocClubing": true,
                  "fragmentPlatformRefNo": "Gateway-" + refNb,
                  "participant":{
                     "partyRefId": "EPAY",
                  "beneficiaryCountry": "US"},
                  "amount": pgFee,
                  "requestedExecutionOn": reqEDt,
                  "transactionAttributes": []
               },
               {
                  "scheduledAdhocClubing":true,
                  "fragmentPlatformRefNo": "Merchant-" + refNb,
                  "participant":{
                     "partyRefId": localStorage.getItem("partyRefId"),
                  "beneficiaryCountry": "US"},
                  "amount": merchantFees,
                  "requestedExecutionOn": reqEDt,
                  "transactionAttributes": []
               }
            ]
         }
         console.log(reqEDt)
         const headers = new HttpHeaders({ 'Authorization': 'Bearer '+data["token"] })         
         this.http.post<Response>(url, jsonPayload, { headers }).subscribe(data  => {
            console.log("POST Request is successful ", data);
            formdata.payment.order_id = refNb;
            formdata.payment.txn_id = data.endToEndId;
            this.embryoService.addBuyUserDetails(formdata);
            this.router.navigate(['/checkout/final-receipt']);
         },
         error => {
            console.log("Error", error);
         });
      },
      error => {
         console.log("Error", error);
      });
      } else {
         for (let i in paymentGroup.controls) {
            paymentGroup.controls[i].markAsTouched();
         }
      }
   }
}



