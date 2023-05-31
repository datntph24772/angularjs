import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
email:string=""
password:string=""
confirmPassword:string=""
register():void{
  console.log("Email:   ",this.email +"       "+
  "Password:    ",this.password +"       "+
  "Confirm password:    ",this.confirmPassword
  );
  
}
}
