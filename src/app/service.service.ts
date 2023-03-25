import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



   
  private url = 'http://localhost:3000/students';

  constructor( private _http:HttpClient) { 

  }
  

func1(){
  return this._http.get(this.url)
}

saveData(data: any){
    console.log(data);
    
    return this._http.post( this.url, data);
  }

delete(_id:any){
  console.log(_id);
  
  

  return this._http.delete(`${this.url}/${_id}`)
}

getStudentById(id:any){
  return this._http.get(`${this.url}/${id}`)
}
updateStudentdata(id:any, data:any){
return this._http.put(`${this.url}/${id}`,data)
}


}
