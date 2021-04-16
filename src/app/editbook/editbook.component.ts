import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import {BookModel} from '../books/books.model'
 
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  title:String="Edit Book";
  selectedBook : BookModel;
  loader=true;
  constructor(private bookDataServiceObj:BookDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.bookDataServiceObj.getBook(id)
    .subscribe((book)=>{
      this.selectedBook=JSON.parse(JSON.stringify(book));
      this.loader=false;
    })
  }
  update(){
    this.bookDataServiceObj.updateBook(this.selectedBook);
    this.router.navigate(['/books',this.selectedBook._id])
  }
  file:File;
  fileName:string="No file selected";
  PickedImg(event:Event){
    console.log('PickedImg function called')
    const file=(event.target as HTMLInputElement).files[0];
    this.fileName=file.name;
    console.log(this.fileName);
    this.file=file;
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      //   the "result" attribute contains the data as a base64 encoded string.
      this.selectedBook.img = reader.result as string;
      console.log(this.selectedBook.img);
    }
  }
}
