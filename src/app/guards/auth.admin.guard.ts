// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { UserService } from './user.service';


// @Injectable({
//   providedIn: 'root',
// })
// export class AdminGuard implements CanActivate {
//   constructor(private userService: UserService, private router: Router) {}

//   canActivate(): boolean {
//     const user = this.userService.getUser(); // Получаем пользователя

//     if (user?.role === 'admin' && !user.isVillain) {
//       return true; // Админ и не злодей — пускаем
//     }

//     this.router.navigate(['/']); // Если нет — выгоняем
//     return false;
//   }
// }