import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { List } from './list.model';



@Injectable({
   providedIn: "root" 
})

export class ListService {

    constructor(private http: HttpClient){}

    items: List[] = [];

    getList() {
        return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .pipe(map((data: any) =>{ 
          return data;
          console.log(data)
        }))
      }

    
}