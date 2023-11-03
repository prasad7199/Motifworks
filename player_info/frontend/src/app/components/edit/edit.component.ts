import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  player: any;

  id!: number;
  age: any;
  highestScore: any;
  name: any;
  odiRuns: any;
  t20Runs: any;
  testRuns: any;
  wickets: any;
  debut: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getPlayerById();
      this.getPlayerById();


    })

  }

  getPlayerById() {

    let token = localStorage.getItem('token');

    let header_obj = new HttpHeaders().set("Authorization", "bearer " + token)
    this.http.get('https://localhost:7029/api/Players/' + this.id, { headers: header_obj }).subscribe((data) => {
      console.log(data);
      this.player = data;

      this.id = this.player.id;
      this.name = this.player.name;
      this.age = this.player.age;
      this.t20Runs = this.player.t20Runs;
      this.odiRuns = this.player.odiRuns;
      this.testRuns = this.player.testRuns;
      this.highestScore = this.player.highestScore;
      this.wickets = this.player.wickets;
      this.debut = this.player.debut.split('T')[0];


    })
  }

  onSubmit() {
    let token = localStorage.getItem('token');
    let header_obj = new HttpHeaders().set("Authorization", "bearer " + token);

    let player = {
      id: this.id,
      name: this.name,
      age: this.age,
      t20Runs: this.t20Runs,
      odiRuns: this.odiRuns,
      testRuns: this.testRuns,
      wickets: this.wickets,
      highestScore: this.highestScore,
      debut: this.debut
    }


    this.http.put('https://localhost:7029/api/Players/' + this.id, player, { headers: header_obj }).subscribe((data) => {
      console.log(data);
      this.router.navigate(['home']);
      
    })
  }

}
