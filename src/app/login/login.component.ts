import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    if (this.email == 'abc@com.au' && this.password =='abc'){
      alert("correct");
      this.router.navigateByUrl("/account");
    }
    else { alert("email or password incorrect");}
  }

}
