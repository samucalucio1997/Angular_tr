import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  str:any=''; 
  
  constructor(private obj: ApiService) {}
  
  ngOnInit(){
    this.str='';
  }
  criar(frm: NgForm) {
    console.log(this.str);
    this.obj.consultaApi(this.str).subscribe(res => {
      console.log(res)
    })
  }

}
