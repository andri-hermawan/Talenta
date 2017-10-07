import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
result : Object;
  constructor(
    http:Http
  ){
    this.result = [];
    http.get('http://localhost:3000/api/categories').map((res: Response) => res.json()).subscribe(res => this.result = res);
    console.log(this.result);
  }


}
