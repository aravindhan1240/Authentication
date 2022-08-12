import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formdata ={email:"",password:""}
  submit=false;
  errorMessage="";
  

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticated();
  }


  onSubmit(){
    this.auth.login(this.formdata.email,this.formdata.password)
    .subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken);
        console.log("login ID Token :" +data.idToken)
        this.auth.canAuthenticated();
      },
      error:data=>{
        if (data.error.message=="INVALID_PASSWORD" ||data.error.message=="INVALID_EMAIL" ) {
          this.errorMessage="Invalid Credentials";
          
        }else{
          this.errorMessage ="Password Or Email Id Invalid" 
        }
      }
    }).add(()=>{
      console.log('login process Completed')
    })

  }

}
