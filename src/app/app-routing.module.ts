import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'books/:id',component:BookComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'authors/:id',component:AuthorComponent},
  {path:'authors/:id/editauthor',component:EditauthorComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addbook',component:AddbookComponent,canActivate:[AuthGuard]},
  {path:'addauthor',component:AddauthorComponent},
  {path:'books/:id/editbook',component:EditbookComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
