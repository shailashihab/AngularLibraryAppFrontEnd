import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignupDataService } from './signup-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private signupdataserviceinst:SignupDataService, private route:Router){}
  canActivate(): boolean {
    if (this.signupdataserviceinst.loggedIn()){
      return true;
    } else {
      alert('Access Failed');
      // this.route.navigate[''];
      return false;
    }
    // alert('Access failed');
    // return false;
  }
  
}
