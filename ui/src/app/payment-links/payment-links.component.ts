import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment-links',
  templateUrl: './payment-links.component.html',
  styleUrls: ['./payment-links.component.css']
})
export class PaymentLinksComponent implements OnInit {

  payment_links : any[] ;
  fetch_data = {}
  input_text:any = "in"
  output_text:any  = "out"

  constructor(private dataService:DataService) {
    this.payment_links = []
   }


  ngOnInit(): void {
  }



  fetchLinks(){
    this.dataService.fetchPaymentLinks().subscribe(
      data=>{
        // this.payment_links = data
        try{
          if(data ){
            this.fetch_data = JSON.stringify(Object(data))
            
            
            
          }
  
        }catch(e){
        }   
      },
      error=>{
        console.log("err ")
        console.log(error)
      }
    )
  }

  
  
}
