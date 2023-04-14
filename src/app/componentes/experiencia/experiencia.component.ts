import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  @Input() title: String = 'Experiencia Laboral';

  @Input() workData: any;
}
