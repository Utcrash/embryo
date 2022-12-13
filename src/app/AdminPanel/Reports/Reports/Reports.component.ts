import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
	selector: 'app-reports',
	templateUrl: './Reports.component.html',
	styleUrls: ['./Reports.component.scss']
})

export class ReportsComponent implements OnInit {
  
   tableTabData        : any;
   buySellChartContent : any;
   chartData           : any;

   displayedTransactionColumns : string [] = ['transid','date','account', 'type', 'amount','debit', 'balance'];

   displayedTransferColumns : string [] = ['transid','date','account', 'type', 'amount', 'balance','status'];

   displayedExpenseColumns : string [] = ['itmNo','date', 'type','companyName','amount','status'];
	
   constructor(private service : AdminPanelServiceService) {
   }

   ngOnInit() {
      this.service.getTableTabContent().valueChanges().subscribe(res => this.tableTabData = res);
      this.service.getBuySellChartContent().valueChanges().
            subscribe( res => (this.getChartData(res))
                     );

   }

   //getChartData method is used to get the chart data.
   getChartData(data){
      this.buySellChartContent= data;
      this.chartDataChange('week');
   }

   //chartDataChange method is used to change the chart data according to button event.
   chartDataChange(tag){
      if(this.buySellChartContent && this.buySellChartContent.length>0)
      for(var content of this.buySellChartContent){
         if(content.tag == tag){
            this.chartData = content;
         }
      }
   }
}
