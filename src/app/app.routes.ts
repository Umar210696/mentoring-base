import { Routes } from '@angular/router';
import { UsersListComponent } from './components/user.list.component/users.list.component';
import { HeaderComponent } from './components/header.component/header.component';
import { HomeComponent } from './components/home.component/home.component';
import { TodosListComponent } from './components/todo.list.component/todos.list.component';
import { LocationComponent } from './components/location.component/location.component';
import { AdminComponent } from './components/admin/admin.component';
// import { AdminGuard } from './guards/auth.admin.guard';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [

    { path: 'users', component: UsersListComponent},

    { path: 'header', component: HeaderComponent},

    { path: '', component: HomeComponent},

    { path: 'home',component: HomeComponent},

    { path: 'todos', component: TodosListComponent},

    { path: 'location', component: LocationComponent},

    {path: 'admin', component: AdminComponent, canActivate: [authGuard] },

    // { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },

];
