import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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

    let header_obj = new HttpHeaders().set("Authorization","bearer "+token)
    this.http.get('https://localhost:7029/api/Players',{headers:header_obj}).subscribe((data) => {
      this.players = data;
      
    })
  }

  deletePlayer(id : number)
  {
    let token = localStorage.getItem('token');

    let header_obj = new HttpHeaders().set("Authorization","bearer "+token)
    this.http.delete('https://localhost:7029/api/Players/'+id, {headers:header_obj}).subscribe((date) => {
      this.loadPlayers();
    });
  }

}
