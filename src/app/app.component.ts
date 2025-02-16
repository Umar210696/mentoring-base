import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header.component/header.component";
import { FooterComponent } from './components/footer.component/footer.component';
// import { EffectsModule } from '@ngrx/effects';
// import { TaskEffects } from './store/task.effects';
// import { UserEffects } from './store/user.effects';



// const name = 'Umar';
// if (name === 'Umar') {
//   console.log('Umar')
// } else {
//   console.log(Error)
// }

const names = ['Umar', 'Suleman', 'Ilnur', 'Yusup', 'Ali', ];
console.log(names [4]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';


}
