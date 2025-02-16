
import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { UsersApiService } from "../../services/users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { CreateUserFormComponent} from "../create-user-form/create-user-form.component";
import { Store } from "@ngrx/store";
import { UsersActions } from "./store/user.actions";
import { srlectUsers } from "./store/users.selectors";

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
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {

readonly usersApiSrvice = inject(UsersApiService);
private readonly store = inject(Store);
public readonly users$ = this.store.select(srlectUsers)

    constructor() {
        this.usersApiSrvice.getUsers().subscribe(
            (respons: any) => {
                this.store.dispatch(UsersActions.set({users: respons}))
            }
        )
    }

    deleteUser(id: number) {
        this.store.dispatch(UsersActions.delete({id}))
    }

    editUser(user: User) {
          this.store.dispatch(UsersActions.edit({user}))
          console.log(user)
    }

    public userCreate(formData: any) {
      this.store.dispatch(UsersActions.create({
        user: {
          id: new Date().getTime(),
        name: formData.name,
        email: formData.email,
        website: formData.website,
        company: {
          name: formData. companyName,
          }
        },
      })
    );
    }
}



    





