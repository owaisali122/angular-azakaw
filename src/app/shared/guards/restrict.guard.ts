import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelpersService } from '../services/helpers.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictGuard implements CanActivate {
  constructor(private helpersService: HelpersService, private router: Router) { }

  canActivate(): boolean {

    if (!this.helpersService.token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
