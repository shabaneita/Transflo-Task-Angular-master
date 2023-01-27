import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/Driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
  @ViewChild('driverForm') DriverForm?: NgForm;
  IsNew:boolean=true;
  id:any;
   drivers: Driver = {
      id:'',
     firstName: '',
     lastName: '',
     email: '',
     phoneNumber:''
     };
   submitted = false;
 
   constructor(private driverservice: DriverService,private activeRoute: ActivatedRoute,private router:Router) {
     activeRoute.params.subscribe(params => {
    this.id=params['id'];
    if(this.id){
      console.log(this.id);
      
     this.IsNew=false;
    this.driverservice.get(this.id).subscribe(a=>{
      console.log(a.result);
      if(a.isSuccess){

        console.log(a.result);

      this.drivers=a.result||new Driver();
      this.id=a.result?.id;
      }else
      {
        alert(a.errorMessages)
      }
    })
    }
    console.log(this.id);
    
     });
    }
 
   ngOnInit(): void {
   }
 
   savedrivers(): void {
    console.log(this.DriverForm?.form.value);
    
     if(this.DriverForm?.valid){
      if(!this.id){
        console.log("create")
        console.log()
       

     this.driverservice.create(this.drivers)
       .subscribe(
         response => {
           console.log(response);
           if(response.isSuccess)
           {
            this.submitted = true;
           
            this.router.navigate(['/drivers']);
           }
           else
           {
            alert(response.errorMessages)
           }
    

         },
         error => {
           console.log(error);
         });
        }else{
          //update
          console.log("update")
          this.driverservice.update(this.id,this.drivers)
          .subscribe(
            response => {
              console.log(response);
              if(response.isSuccess)
              {
              this.submitted = true;
              this.router.navigate(['/drivers']);
              }else
              {
                alert(response.errorMessages)
              }
            },
            error => {
              console.log(error);
            });
        }
        }else{
         console.log(this.DriverForm);
         
       }
   }
   updatedrivers(){}
   newdrivers(): void {
     this.submitted = false;
 
   }
 
 }
 
