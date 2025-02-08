
import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { UsersApiService } from "../../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../../users.service";
import { CreateUserDialogComponent} from "../create-user-dialog/create-user-dialog.component";


export interface User {
    id: number,
    name: string,
    username?: string,
    email: string,
    address?: {
      street?: string,
      suite?: string,
      city?: string,
      zipcode?: string,
      geo?: {
        lat?: string,
        lng?: string,
      }
    },
    phone?: string,
    website: string,
    company: {
      name: string,
      catchPhrase?: string,
      bs?: string,
    }
  }
 



@Component({
    selector: 'app-users-list',
    templateUrl: './users.list.component.html',
    styleUrl: './users.list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserDialogComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {

  readonly usersApiSrvice = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  users = this.usersService.users
    
    constructor() {
        this.usersApiSrvice.getUsers().subscribe(
            (respons: any) => {
                this.usersService.setUsers(respons);
            }
        )

        this.usersService.usersSubject$.subscribe(
           users => this.users =  users 
        )
    }


    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    editUser(user: User) {
      this.usersService.editeUser({
        ...user,
           company: {
            name: user.company.name
           }
          });
          console.log(user)
    }


    public userCreate(formData: any) {
      this.usersService.createUser({
        id: new Date().getTime(),
        name: formData.name,
        email: formData.email,
        website: formData.website,
        company: {
          name: formData. companyName,
        }
      });
    }
}



    





