import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ListService } from '../list.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
//import { InfiniteScroll } from 'ngx-infinite-scroll'



@Component({

  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


    probe;
  items = [];
  itemsAll;
  itemsName;
  itemsAge;
  size = 10;
  list;
  isLoading = true;
  newArray;
  array;
  num;
  allpost;
  allposts;
  count = 0;
  friends = "There are no friends"
  prof = "There are no professions"
  notEmptyPost = true;
  validAge = true;
  form: FormGroup;



 
  constructor(public http: HttpClient, private listService: ListService, private spinner: NgxSpinnerService) {

   }

  ngOnInit() {
    this.form = new FormGroup({
      'ageMin': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      'ageMax': new FormControl(null, {
        validators:[Validators.required, Validators.minLength(1)]
      }),
    })
      this.listService.getList().subscribe(res => {
        this.items = res.Brastlewark;
        this.items.forEach(element => {
          if(element.professions.length == 0){
            element.professions = this.prof;
          }
          if(element.friends.length == 0){
            element.friends = this.friends
          }
        });
        this.num = this.items.length;
        this.loadInitPost();
      });
  }


// age filter
  onAgeFilter(ageMin, ageMax){
    window.scroll(0,0);
    this.count = 1;
    this.notEmptyPost = true;
    if(!ageMin.value && !ageMax.value){
      this.validAge = false;
      setTimeout(() => {
        this.validAge = true;
      }, 2500)
      return;
    }
    this.listService.getList().subscribe(res => {
      this.itemsAll = res.Brastlewark;
      this.items = this.itemsAll.filter((item) => {
        if(item.age >= this.form.value.ageMin && item.age <= this.form.value.ageMax){
          return  item.age >= this.form.value.ageMin && item.age <= this.form.value.ageMax
        }  else {
          return;
        }
        
      })
      this.items.forEach(element => {
        if(element.professions.length == 0){
          element.professions = this.prof;
        }
        if(element.friends.length == 0){
          element.friends = this.friends
        }
      });
      this.loadInitPost();
      ageMin.value =""
      ageMax.value =""

    });


  }

//search by letters
  onSearch(event:any){
    window.scroll(0,0);
    this.count = 1;
    this.notEmptyPost = true;
    let inputValue = event.target.value.toLowerCase();
    this.listService.getList().subscribe(res => {
      this.itemsAll = res.Brastlewark;
      this.items = this.itemsAll.filter((item) => {
        let name = item.name.toLowerCase();
        let nameSearch = name.search(inputValue)
        let nameIndex = name.indexOf(inputValue);
        if(nameIndex !== -1 && nameSearch === 0){
           return item.name
          }
           else {
           return
           }
      })
      this.items.forEach(element => {
        if(element.professions.length == 0){
          element.professions = this.prof;
        }
        if(element.friends.length == 0){
          element.friends = this.friends
        }
      });
      this.loadInitPost();
    });

  }
// reser  letter search field
  resetField(search){
    search.value = ""
    this.ngOnInit();

  }


//load items into smaller arrays
  loadInitPost(){
    this.num = this.items.length;
    this.newArray = new Array(Math.ceil(this.items.length / this.size)).fill("")
       .map(() => {
         return this.items.splice(0, this.size)
        }, this.items.slice() );
    this.allpost = this.newArray[0];
  }


//detecting scroll down
  onScrollDown(){
     if(this.notEmptyPost && this.num > this.size) {
       this.spinner.show();
       this.loadNextPost();
     }
     this.count++
  }


// loading next array of items
  loadNextPost(){
    this.spinner.hide();
    let newpost = this.newArray[this.count];
    this.allpost = this.allpost.concat(newpost);
    console.log("array length: " + this.allpost.length)
    if(this.num === this.allpost.length){
      this.notEmptyPost = false;
    }

  }

  isLoaded(){
    this.isLoading = false;
}

}
