import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = [];


  constructor(public http: HttpClient){}

  ngOnInit() {

  }

  // getData(){

  //   return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
  //   .pipe(map((data: any) =>{
  //     console.log(data.Brastlewark[0]);
  //     return data;
  //   }))
  // }

}
