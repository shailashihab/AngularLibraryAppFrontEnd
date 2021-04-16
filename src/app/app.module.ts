import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import {ConfirmEqualValidatorDirective } from '../app/confirm-equal-validator.directive';
import {TokenInterceptorService } from '../app/token-interceptor.service';
import {NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { BookDataService } from './book-data.service';
import { SignupDataService } from './signup-data.service';
import { AuthorDataService } from './author-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AuthorsComponent,
    AuthorComponent,
    LoginComponent,
    SignupComponent,
    AddbookComponent,
    AddauthorComponent,
    EditbookComponent,
    EditauthorComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
        // Specify ng-circle-progress as an import
        NgCircleProgressModule.forRoot({
          // set defaults here
          radius: 100,
          outerStrokeWidth: 16,
          innerStrokeWidth: 8,
          outerStrokeColor: "#78C000",
          innerStrokeColor: "#C7E596",
          animationDuration: 300,
        
        })
  ],
  providers: [
    BookDataService,
    SignupDataService,
    AuthorDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
