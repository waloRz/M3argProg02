import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoHComponent } from './componentes/logo-h/logo-h.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcerdaDeComponent } from './componentes/acerda-de/acerda-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpEduComponent } from './componentes/exp-edu/exp-edu.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoHComponent,    
    BannerComponent,
    AcerdaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    ExpEduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
