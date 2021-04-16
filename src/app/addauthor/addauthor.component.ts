import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorDataService } from '../author-data.service';
import { AuthorModel } from '../authors/author.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:String="Add Author to List";
  addingAuthor = new AuthorModel(null,null,null,null,null);
  constructor(private authorDatSerInst:AuthorDataService, private route:Router) { }

  ngOnInit(): void {
  }

  addNewAuthor(){
    console.log("submit function")
    this.authorDatSerInst.NewAuthor(this.addingAuthor)
    .subscribe((result)=>{
      console.log(result);
    })
    const that = this;
    setTimeout(function(){
      console.log('timeout');
      that.route.navigate(['authors']);
    },2000) 
  }
  file:File;
  fileName:string="No file selected";
  fileSize:Number;
  PickedImg(event:Event){
    console.log('PickedImg function called')
    const file=(event.target as HTMLInputElement).files[0];
    this.fileSize=file.size
    this.fileName=file.name;
    console.log(this.fileName);
    console.log(this.fileSize)
    if(this.fileSize>65000){alert("File Size exceeds limit. It may not get added.")}
    this.file=file;
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      //   the "result" attribute contains the data as a base64 encoded string.
      this.addingAuthor.img = reader.result as string;
      console.log(this.addingAuthor.img);
    }
  }
}
