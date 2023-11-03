import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id!: number;
  age: any;
  highestScore: any;
  name: any;
  odiRuns: any;
  t20Runs: any;
  testRuns: any;
  wickets: any;
  debut: any;

  constructor(private http: HttpClient, private router: Router)
  {
    
  }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    let token = localStorage.getItem('token');
    let header_obj = new HttpHeaders().set("Authorization", "bearer " + token);

    let player = {
      id: 0,
      name: this.name,
      age: this.age,
      t20Runs: this.t20Runs,
      odiRuns: this.odiRuns,
      testRuns: this.testRuns,
      wickets: this.wickets,
      highestScore: this.highestScore,
      debut: this.debut
    }


    this.http.post('https://localhost:7029/api/Players', player, { headers: header_obj }).subscribe((data) => {
      console.log(data);
      this.router.navigate(['home']);
      
    })
  }

}
