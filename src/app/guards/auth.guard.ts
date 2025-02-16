
import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';
import { UserService } from './user.auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService) 
  const router = inject(Router)

  if (userService.isAdmin) {
    console.log(userService.isAdmin)
    return true
  } else {
    console.log(userService.isAdmin)
    router.navigate(['/users'])
    return false
  }
};
