import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthorModel } from '../app/authors/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {
  // private authorsUrl='http://localhost:4000/authors';
  private authorsUrl='https://anglibappbyshaila.herokuapp.com/authors';

  constructor(private http:HttpClient) { }
  getAuthors(){
    const url=`${this.authorsUrl}`
    return this.http.get(url);
  }
  NewAuthor(newAuthor){
    console.log("ServiceObject");
    // const url=`${this.authorsUrl}/`
    return this.http.post('https://anglibappbyshaila.herokuapp.com/addAuthor',{'NewAuthor':newAuthor})
    // return this.http.post('http://localhost:4000/addAuthor',{'NewAuthor':newAuthor})
  }
  getAuthor(id:String){
    const url=`${this.authorsUrl}/${id}`;
    return this.http.get(url);
  }
  updateAuthor(singleAuthor){
    console.log(singleAuthor);
    const id = singleAuthor._id;
    console.log(id);
    const url=`${this.authorsUrl}/${id}`;
    console.log(url);
    return this.http.put(url,{'AuthorToEdit':singleAuthor})
    .subscribe((data)=>{console.log("Edited Author"+data);})
  }
  deleteAuthor(SingAuthor:AuthorModel){
    console.log(SingAuthor);
    const id = SingAuthor._id;
    console.log(id);
    const url=`${this.authorsUrl}/${id}`;
    console.log(url);
    return this.http.delete(url);
  }
}
