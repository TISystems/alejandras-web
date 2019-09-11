import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Servicios
import { GaleriaService } from './services/galeria.service';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';
// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavSocialNetworksComponent } from './components/shared/nav-social-networks/nav-social-networks.component';
import { PestaniasComponent } from './components/servicios/pestanias/pestanias.component';
import { DepilacionComponent } from './components/servicios/depilacion/depilacion.component';
import { ManicurePedicureComponent } from './components/servicios/manicure-pedicure/manicure-pedicure.component';
import { BrowbarComponent } from './components/servicios/browbar/browbar.component';
import { ColoracionComponent } from './components/servicios/coloracion/coloracion.component';
import { TratamientoCapilarComponent } from './components/servicios/tratamiento-capilar/tratamiento-capilar.component';
import { PeinadosComponent } from './components/servicios/peinados/peinados.component';
import { CorteCabelloComponent } from './components/servicios/corte-cabello/corte-cabello.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { QuieroServicioComponent } from './components/quiero-servicio/quiero-servicio.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    FooterComponent,
    NavSocialNetworksComponent,
    PestaniasComponent,
    DepilacionComponent,
    ManicurePedicureComponent,
    BrowbarComponent,
    ColoracionComponent,
    TratamientoCapilarComponent,
    PeinadosComponent,
    CorteCabelloComponent,
    ContactoComponent,
    PromocionesComponent,
    ReservasComponent,
    GaleriaComponent,
    EquipoComponent,
    QuieroServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    GaleriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
