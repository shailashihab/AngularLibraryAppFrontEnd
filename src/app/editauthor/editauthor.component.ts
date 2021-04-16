import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorDataService } from '../author-data.service';
import { AuthorModel } from '../authors/author.model';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  title:String="Edit Author Details";
  selectedAuthor=new AuthorModel(null,null,null,null,null);
  loader=true;

  constructor(private authDatServ:AuthorDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.authDatServ.getAuthor(id)
    .subscribe((author)=>{
      this.selectedAuthor=JSON.parse(JSON.stringify(author));
      this.loader=false;
    })
  }
  update(){
    this.authDatServ.updateAuthor(this.selectedAuthor);
    this.router.navigate(['/authors',this.selectedAuthor._id])
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
      this.selectedAuthor.img = reader.result as string;
      console.log(this.selectedAuthor.img);
    }
  }
}
