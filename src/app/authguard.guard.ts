import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContainerService } from './container.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {


  constructor(private serv : ContainerService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.serv.newProm().then(
        (authenticated) => {
          if (authenticated) {
            return true;
          }else{
            return this.router.navigate(['/']);
          }

        }
      )

  }
  
  
}
