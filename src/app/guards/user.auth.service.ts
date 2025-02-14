

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  name: string,
  email: string,
  IsAdmin: boolean | null;
}

@Injectable({providedIn: 'root'})


export class UserService {

  private readonly userSubjact$ = new BehaviorSubject<IUser | null>(null)
  public readonly user$ = this.userSubjact$.asObservable()

  private user: IUser = {
    name: 'Umar',
    email: 'gmail@.com',
    IsAdmin: null,
  }


  loginAsAdmin() {
    this.userSubjact$.next({...this.user, IsAdmin: true})
    console.log('Вошли как админ');
  }

  loginAsUser() {
    this.userSubjact$.next({...this.user, IsAdmin: false})
    console.log('Вошли как пользователь');
  }

  get isAdmin() {
    return this.userSubjact$.value?.IsAdmin
  }

  logout() {
    this.userSubjact$.next(null)
    console.log(this.userSubjact$);
  }

}