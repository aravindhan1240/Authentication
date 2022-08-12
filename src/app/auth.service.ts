import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }
  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
    return true;
  }
  return false;
  }
  conAccess(){
    if(!this.isAuthenticated()){
      //login authentication
      this.router.navigate(['/login']);
    }
  }
    canAuthenticated(){
     if(this.isAuthenticated()){
    
      this.router.navigate(['/home']);
    } 
}

  register(names:string,email:string,password:string){

    return this.http.
    post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyAX5vaVYwwuo1yTkJTMNRktqxKX5LozI4c',
    {names,email,password}
    );

  }
  storeToken(token:string){
    sessionStorage.setItem('token',token);
  }
  login(email:string,password:string){
    return this.http
    .post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAX5vaVYwwuo1yTkJTMNRktqxKX5LozI4c',
    {email,password});

  }

  detail(){
    let token = sessionStorage.getItem('token');
    return this.http.post<{users:Array<{localId:string,names:string}>}>( 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAX5vaVYwwuo1yTkJTMNRktqxKX5LozI4c',

      {idToken:token}
      
    )
  }
  removeToken(){
    sessionStorage.removeItem('token');
  }

 
}
