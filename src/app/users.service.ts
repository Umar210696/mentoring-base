import { Injectable } from "@angular/core";
import { User } from "./components/user.list.component/users.list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class UsersService {

    usersSubject$ = new BehaviorSubject<User[]>([]);
    users: User[] = [];

    // УСТАНАВЛИВАЕТ ЮЗЕРА

    setUsers(user: User[]) {
        this.users = user;
        this.usersSubject$.next(user);
    }

    // РЕДАКТИРУЕТ ДАННЫЕ 

    editeUser(editedUser: User) {
        this.users = this.users.map(
            user => {
                if (user.id === editedUser.id) {
                    return editedUser;
                } else {
                    return user;
                }
                    
            }
        )

        this.usersSubject$.next(
            this.usersSubject$.value.map(
                user => {
                    if (user.id === editedUser.id) {
                        return editedUser;
                    } else {
                        return user;
                    }
                        
                }
            )
        )
    }

    // СОЗДАНИЕ НОВОГО ЮЗЕРА

    createUser(user: User) {
        const userIsExsisteng = this.usersSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        )
        this.users = [...this.users, user];
        this.usersSubject$.next(
            [...this.usersSubject$.value, user]
        )
    }
    
    // УДАЛЯЕТ ЮЗЕРА

    deleteUser(id: number) {
        this.users = this.users.filter(
            item => {
                if (id === item.id) {
                    return false;
                } else {
                    return true;
                }
            }
        )

        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                item => {
                    if (id === item.id) {
                        return false;
                    } else {
                        return true;
                    }
                }
            )
        )
    }

    
}