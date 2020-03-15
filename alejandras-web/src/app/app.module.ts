import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';
// Services
import { AlisadoService } from './services/alisado.service';
import { BotoxService } from './services/botox.service';
import { BrushingService } from './services/brushing.service';
import { CejasService } from './services/cejas.service';
import { ColorService } from './services/color.service';
import { CorteService } from './services/corte.service';
import { DepilacionService } from './services/depilacion.service';
import { LavadoService } from './services/lavado.service';
import { ManicureService } from './services/manicure.service';
import { MaquillajeService } from './services/maquillaje.service';
import { MasajeCapilarService } from './services/masaje-capilar.service';
import { MicropigmentacionService } from './services/micropigmentacion.service';
import { PeinadoService } from './services/peinado.service';
import { PestaniaService } from './services/pestania.service';
import { TratamientoCorporalService } from './services/tratamiento-corporal.service';
import { TratamientoFacialService } from './services/tratamiento-facial.service';
import {DestacadosService} from './services/destacados.service';

// components
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavSocialNetworksComponent } from './components/shared/nav-social-networks/nav-social-networks.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
//components/servicios
import { PestaniasComponent } from './components/servicios/pestanias/pestanias.component';
import { DepilacionComponent } from './components/servicios/depilacion/depilacion.component';
import { ManicurePedicureComponent } from './components/servicios/manicure-pedicure/manicure-pedicure.component';
import { ColoracionComponent } from './components/servicios/coloracion/coloracion.component';
import { PeinadosComponent } from './components/servicios/peinados/peinados.component';
import { CorteCabelloComponent } from './components/servicios/corte-cabello/corte-cabello.component';
import { CejasComponent } from './components/servicios/cejas/cejas.component';
import { MicropigmentacionComponent } from './components/servicios/micropigmentacion/micropigmentacion.component';
import { TratamientoCorporalComponent } from './components/servicios/tratamiento-corporal/tratamiento-corporal.component';
import { TratamientoFacialComponent } from './components/servicios/tratamiento-facial/tratamiento-facial.component';
import { MaquillajeComponent } from './components/servicios/maquillaje/maquillaje.component';
import { MasajeCapilarComponent } from './components/servicios/masaje-capilar/masaje-capilar.component';
import { BrushingComponent } from './components/servicios/brushing/brushing.component';
import { LavadoComponent } from './components/servicios/lavado/lavado.component';
import { BotoxComponent } from './components/servicios/botox/botox.component';
import { AlisadoComponent } from './components/servicios/alisado/alisado.component';


//components/quiero-servicios
import { QuieroManicureComponent } from './components/quiero-servicios/quiero-manicure/quiero-manicure.component';
import { QuieroPestaniasOndulacionComponent } from './components/quiero-servicios/quiero-pestanias-Ondulacion/quiero-pestanias-Ondulacion.component';
import { QuieroCejasPlanchadoComponent } from './components/quiero-servicios/quiero-cejas-planchado/quiero-cejas-planchado.component';
import { QuieroMicropigmentacionComponent } from './components/quiero-servicios/quiero-micropigmentacion/quiero-micropigmentacion.component';
import { QuieroColorComponent } from './components/quiero-servicios/quiero-color/quiero-color.component';
import { QuieroDepilacionCeraTradicionalComponent } from './components/quiero-servicios/quiero-depilacion-cera-tradicional/quiero-depilacion-cera-tradicional.component';
import { QuieroAlisadoComponent } from './components/quiero-servicios/quiero-alisado/quiero-alisado.component';
import { QuieroBotoxComponent } from './components/quiero-servicios/quiero-botox/quiero-botox.component';
import { QuieroLavadoComponent } from './components/quiero-servicios/quiero-lavado/quiero-lavado.component';
import { QuieroBrushingComponent } from './components/quiero-servicios/quiero-brushing/quiero-brushing.component';
import { QuieroMasajeCapilarComponent } from './components/quiero-servicios/quiero-masaje-capilar/quiero-masaje-capilar.component';
import { QuieroPeinadoComponent } from './components/quiero-servicios/quiero-peinado/quiero-peinado.component';
import { QuieroMaquillajeComponent } from './components/quiero-servicios/quiero-maquillaje/quiero-maquillaje.component';
import { QuieroCorteComponent } from './components/quiero-servicios/quiero-corte/quiero-corte.component';
import { QuieroTratamientoFacialComponent } from './components/quiero-servicios/quiero-tratamiento-facial/quiero-tratamiento-facial.component';
import { QuieroTratamientoCorporalComponent } from './components/quiero-servicios/quiero-tratamiento-corporal/quiero-tratamiento-corporal.component';
import { QuieroDestacadosComponent } from './components/quiero-servicios/quiero-destacados/quiero-destacados.component';


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
    ColoracionComponent,
    PeinadosComponent,
    CorteCabelloComponent,
    ContactoComponent,
    PromocionesComponent,
    QuieroManicureComponent,
    QuieroPestaniasOndulacionComponent,
    CejasComponent,
    QuieroCejasPlanchadoComponent,
    MicropigmentacionComponent,
    QuieroMicropigmentacionComponent,
    QuieroColorComponent,
    QuieroDepilacionCeraTradicionalComponent,
    QuieroAlisadoComponent,
    QuieroBotoxComponent,
    QuieroLavadoComponent,
    QuieroBrushingComponent,
    QuieroMasajeCapilarComponent,
    QuieroPeinadoComponent,
    QuieroMaquillajeComponent,
    QuieroCorteComponent,
    QuieroTratamientoFacialComponent,
    QuieroTratamientoCorporalComponent,
    TratamientoCorporalComponent,
    TratamientoFacialComponent,
    MaquillajeComponent,
    MasajeCapilarComponent,
    BrushingComponent,
    LavadoComponent,
    BotoxComponent,
    AlisadoComponent,
    QuieroDestacadosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ManicureService,
    AlisadoService,
    BotoxService,
    BrushingService,
    CejasService,
    ColorService,
    CorteService,
    DepilacionService,
    LavadoService,
    ManicureService,
    MaquillajeService,
    MasajeCapilarService,
    MicropigmentacionService,
    PeinadoService,
    PestaniaService,
    TratamientoCorporalService,
    TratamientoFacialService,
    DestacadosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
