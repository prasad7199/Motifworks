import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public players : any;

  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void {

    this.loadPlayers();
    
  }

  loadPlayers()
  {
    let token = localStorage.getItem('token');

    let head = new HttpHeaders().set("Authorization","bearer "+token)
    this.http.get('https://localhost:7029/api/Players',{headers:head}).subscribe((data) => {
      this.players = data;
    })
  }

}
