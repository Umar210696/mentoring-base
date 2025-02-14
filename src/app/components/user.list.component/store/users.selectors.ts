import { state } from "@angular/animations";
import { User } from "../users.list.component";
import { createSelector } from "@ngrx/store";

interface UserState {
    users: User[];
}


interface AppState {
    users: UserState;
}

export const selectUsersFeature = (state: AppState) => state.users;

export const srlectUsers = createSelector( 
    selectUsersFeature, (state: UserState) => state.users 
)