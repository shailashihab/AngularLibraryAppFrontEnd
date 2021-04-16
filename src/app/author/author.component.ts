import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorDataService } from '../author-data.service';
import { AuthorModel } from '../authors/author.model';
import { SignupDataService } from '../signup-data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:String="Author";
  SingAuthor=new AuthorModel(null,null,null,null,null);
  loader=true;
  constructor(private route:ActivatedRoute, private router:Router, private authDatSerInst:AuthorDataService, public SignUpDatServInst:SignupDataService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.authDatSerInst.getAuthor(id)
    .subscribe((author)=>{
      this.SingAuthor=JSON.parse(JSON.stringify(author));
      this.loader=false;
    })
  }
  deleteAuthor(){
    this.authDatSerInst.deleteAuthor(this.SingAuthor)
    .subscribe(result=>{console.log("Removed Author")})
    this.router.navigate(['authors']);
  }
  update(SingAuthor){
    this.router.navigate([`/authors/${this.SingAuthor._id}/editauthor`]);
  }
}
