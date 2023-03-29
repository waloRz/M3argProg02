import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoHComponent } from './componentes/logo-h/logo-h.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcerdaDeComponent } from './componentes/acerda-de/acerda-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoHComponent,
    SocialComponent,
    BannerComponent,
    AcerdaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
