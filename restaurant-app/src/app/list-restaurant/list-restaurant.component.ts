import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  alert: boolean=false;
  public collection:any;
  constructor(private CommonService:CommonService) { }

  ngOnInit(): void {
    
    this.CommonService.getRestoList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    });
    }
    deleteResto(resto){
      this.collection.splice(resto.id,1)
      this.CommonService.deleteResto(resto).subscribe((result)=>{
        console.log("Data is Deleted Successful",result)
        this.alert=true;
      })
    }
    closeAlert(){
      this.alert=false;
    }
  }
 


