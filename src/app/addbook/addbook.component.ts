import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { BookModel } from '../books/books.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:String="Add Book to List";
  addingBook = new BookModel(null,null,null,null,null);
  images='';
  
  constructor(private bookdatasserviceObj:BookDataService, private route:Router) { }

  ngOnInit(): void {
  }
  addNewBook(){
    console.log("AddBook form submission")
    this.bookdatasserviceObj.newBook(this.addingBook)
    .subscribe((result)=>{
      alert(result);
      console.log(result);
    })
    const that = this;
    setTimeout(function(){
      console.log('timeout');
      that.route.navigate(['books']);
    },2000) 
  }
  file:File;
  fileName:string="No file selected";
  fileSize:Number;
    PickedImg(event:Event){
    console.log('PickedImg function called')
    const file=(event.target as HTMLInputElement).files[0];
    this.fileName=file.name;
    this.fileSize=file.size
    console.log(this.fileName);
    console.log(this.fileSize)
    if(this.fileSize>65000){alert("File Size exceeds limit. It may not get added.")}
    this.file=file;
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      //   the "result" attribute contains the data as a base64 encoded string.
      this.addingBook.img = reader.result as string;
      console.log(this.addingBook.img);
    }
  }
}
