import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor() { }

    login() {
        this.loggedIn.next(true);
    }

    logout() {
        this.loggedIn.next(false);
    }
}