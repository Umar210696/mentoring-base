import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { userReducer } from './components/user.list.component/store/users.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './components/todo.list.component/store/todos.reducer';




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({
      users: userReducer,
      todos: todoReducer
    }),
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};

