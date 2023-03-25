import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  message:boolean=false;
  getData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private ser: ServiceService){}

  remove(){
    this.message=false;
  }
  func1(){
    // console.log(this.getData.value);
    this.message=true;

    
    this.ser.saveData(this.getData.value).subscribe((result)=>{
      console.log(result );
      
    })
  }
}
