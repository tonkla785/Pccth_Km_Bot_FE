import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineConfigComponent } from './components/line-config/line-config.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineConfigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pccth_Km_Bot_FE';
}
