import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  formdata ={names:"",email:"",password:""};
  submit=false;
  errorMessage="";
  

  ngOnInit(): void {
    this.auth.canAuthenticated();  
  }
  
  onSubmit(){
    this.auth.register(
      this.formdata.names,
      this.formdata.email,
      this.formdata.password
      )
    .subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken);
        console.log('Success idToken value ' +data.idToken);
        this.auth.canAuthenticated();
        
        
      },
      error:data=> {
        if(data.error.error.message == "INVALID_EMAIL"){
          this.errorMessage = "Invalid Email id !"
        }
        else if(data.error.error.message == "EMAIL_EXISTS"){
          this.errorMessage = "Email Exists!"
        }
        else{
          this.errorMessage ="Unknow error When creating this account!?"
        }
      }
    }).add(()=>{
      console.log("Register Successfully")
    })

  }

}
