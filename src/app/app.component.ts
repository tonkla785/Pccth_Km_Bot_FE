import { Component } from '@angular/core';
import { LineConfigComponent } from './pages/line-config/line-config.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LineConfigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pccth_Km_Bot_FE';
}
