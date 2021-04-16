import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { BookModel } from './books/books.model';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  singleBook={};
  // private booksUrl='http://localhost:4000/books';
    private booksUrl='https://anglibappbyshaila.herokuapp.com/books';

  constructor(private http:HttpClient) { }

  getBooks(){
    const url=`${this.booksUrl}`
    return this.http.get(url);
  }
  newBook(addingBook){
    // return this.http.post('http://localhost:4000/addNewBook',{'NewBook':addingBook})
    return this.http.post('https://anglibappbyshaila.herokuapp.com/addNewBook',{'NewBook':addingBook})
  }
  getBook(id:String){
    const url=`${this.booksUrl}/${id}`;
    return this.http.get(url);
  }
  updateBook(singleBook){
    console.log(singleBook);
    const id = singleBook._id;
    console.log(id);
    const url=`${this.booksUrl}/${id}`;
    console.log(url);
    return this.http.put(url,{'bookToEdit':singleBook})
    .subscribe((data)=>{console.log("Edited Book"+data);})
  }
  deleteBook(singleBook:BookModel){
    console.log(singleBook);
    const id = singleBook._id;
    console.log(id);
    const url=`${this.booksUrl}/${id}`;
    console.log(url);
    return this.http.delete(url);
  }
}
