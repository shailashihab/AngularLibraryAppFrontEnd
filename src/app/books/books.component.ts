import { Component, OnInit } from '@angular/core';
import {BookModel } from './books.model';
import {BookDataService} from '../book-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Books"
  books:BookModel[];
  loader=true;
  constructor(private bookdataServiceObj:BookDataService, private route:Router) { }

  ngOnInit(): void {
    this.bookdataServiceObj.getBooks()
    .subscribe((apiData)=>{
      this.books=JSON.parse(JSON.stringify(apiData));
      this.loader=false;
    })
  }

SingleBook(book){
  this.route.navigate(['/books',book._id])
}
}
