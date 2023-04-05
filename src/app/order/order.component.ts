import { Component } from '@angular/core';
import{ DatetimeService } from '../datetime.service'; 

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
constructor (private service: DatetimeService) { }  //new Date
currentDate : string ="";
ngOnInit(){
  this.currentDate = this.service.currentDate();
}
}
