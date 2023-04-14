import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerda-de',
  templateUrl: './acerda-de.component.html',
  styleUrls: ['./acerda-de.component.css']
})
export class AcerdaDeComponent {
  fotoyo: string = '../../../assets/img/yo.jpg';

  
    constructor(public personaService: PersonaService){  }

    
}
