import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    constructor() {
        let username = sessionStorage.getItem('loggedUsername');
        if (username) {
            this.loggedIn.next(true);
        }
    }

    login() {
        this.loggedIn.next(true);
    }

    logout() {
        console.log('triggered')
        this.loggedIn.next(false);
    }
}