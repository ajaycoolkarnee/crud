import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{


  studentData:any=[];
  constructor(private ser: ServiceService){

  }

  ngOnInit(): void {

    this.ser.func1().subscribe((allData)=>{
      // console.log(allData)
      this.studentData=allData;
    })
  }
   
    

  deleteStudent(student_id:any){
    console.log(student_id);
    this.ser.delete(student_id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    })
    
  }

}