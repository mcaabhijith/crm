import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  alert:boolean=false;
  editRestaurant= new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    mobile:new FormControl(''),
    food:new FormControl('')
  })

  constructor(private resto:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurant= new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        mobile:new FormControl(result['mobile']),
        food:new FormControl(result['food'])
    })
  })
}
updateResto(){
  this.resto.updateResto(this.router.snapshot.params.id,
    this.editRestaurant.value).subscribe((result)=>{
    this.alert=true;
    this.editRestaurant.reset({});
    console.log(result,"data updated successful")
  })
}
closeAlert(){
  this.alert=false;
}
  }
