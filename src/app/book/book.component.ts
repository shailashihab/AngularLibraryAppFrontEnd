import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { BookModel } from '../books/books.model';
import { SignupDataService } from '../signup-data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:String="Book";
  singleBook:BookModel;
  loader=true;

  constructor(private bookDataServiceObj:BookDataService, private route:ActivatedRoute, private router:Router, public signUpDatSerObj:SignupDataService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookDataServiceObj.getBook(id)
    .subscribe((book)=>{
      this.singleBook=JSON.parse(JSON.stringify(book));
      this.loader=false;
    })
  }
  update(singleBook){
    console.log(singleBook);
    this.router.navigate([`/books/${singleBook._id}/editbook`])
  }
  delete():void{
    this.bookDataServiceObj.deleteBook(this.singleBook)
    .subscribe(result=>{alert("Book Deleted")})
    this.router.navigate(['books']);
  }
}
