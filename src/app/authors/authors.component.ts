import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorDataService } from '../author-data.service';
import { AuthorModel } from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:String="Authors";
  authors:AuthorModel[];
  loader=true;
  constructor(private authorDataServInst:AuthorDataService, private route:Router) { }

  ngOnInit(): void {
    console.log("Init");
    this.authorDataServInst.getAuthors()
    .subscribe((authors)=>{
      this.authors=JSON.parse(JSON.stringify(authors));
      this.loader=false;
    })
  }
  SingleAuthor(author){
    this.route.navigate(['/authors',author._id])
  }

}
