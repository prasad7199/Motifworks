import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public name! : string;
  public password! : string;
  public token! : string;

  constructor (private http: HttpClient, private router : Router)
  {

  }

  ngOnInit(): void {
   
  }

  onLogin()
  {
    this.http.post('https://localhost:7029/api/Login',{name : this.name, password : this.password}).subscribe(
      (data : any) => {
        console.log(data.accessTokenJWT)
        localStorage.setItem("token", data.accessTokenJWT);
        if(data.accessTokenJWT == null)
        {
          alert("Enter Valid Credentials");
        }
        else{
          
          this.router.navigate(['/home']);
        }

    }
      );
  }

  

 

}
