import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  message:boolean=false;
  getData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private ser: ServiceService, private router: ActivatedRoute ){}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params);
    this.ser.getStudentById(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result);
      this.getData = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email'])
      })
      
    })
  }

  remove(){
    this.message=false;
  }
  update(){
    console.log(this.getData.value);
    this.ser.updateStudentdata(this.router.snapshot.params.id,this.getData.value).subscribe((result)=>{
      this.message=true;
    })
    
  }
}