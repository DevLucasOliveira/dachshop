import { Router, CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";
import { Security } from '../utils/security.util';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router) {
    }

    canActivate(){
        const token = Security.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }





}