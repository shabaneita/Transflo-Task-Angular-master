import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/Driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  drivers?: Driver[]=[];
  currentTutorial?: Driver;
  currentIndex = -1;
  title = '';

  constructor(private driverservice: DriverService) {
     this.driverservice.getAll().subscribe(a=>{
       if(a.isSuccess){      
        console.log(a)
      this.drivers=a.result;
       }
     })
   }

  ngOnInit(): void {
    this.retrievedrivers();
  }

  retrievedrivers(): void {
    this.driverservice.getAll()
      .subscribe(
        data => {
          if(data.isSuccess){
          this.drivers = data.result;
          }
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievedrivers();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Driver, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAlldrivers(): void {
    this.driverservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  Delete(id:any){
  this.driverservice.delete(id).subscribe(a=>{
    this.driverservice.getAll().subscribe(a=>{
      if(a.isSuccess){
        this.drivers=a.result;

      }
    })
    alert("success");
  })
  }

}

