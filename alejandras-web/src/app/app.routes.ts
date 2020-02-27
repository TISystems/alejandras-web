import { RouterModule, Routes } from '@angular/router';
//components
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
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



const APP_ROUTES: Routes = [
  //components
  {path: 'home' , component: HomeComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'promociones' , component: PromocionesComponent},
  //components/servicios
  {path: 'coloracion' , component: ColoracionComponent},
  {path: 'corte-cabello' , component: CorteCabelloComponent},
  {path: 'depilacion' , component: DepilacionComponent},
  {path: 'manicure-pedicure' , component: ManicurePedicureComponent},
  {path: 'peinados' , component: PeinadosComponent},
  {path: 'pestanias' , component: PestaniasComponent},
  {path: 'cejas' , component: CejasComponent},
  {path: 'tratamiento-corporal' , component: TratamientoCorporalComponent},
  {path: 'tratamiento-facial' , component: TratamientoFacialComponent},
  {path: 'maquillaje' , component: MaquillajeComponent},
  {path: 'masaje-capilar' , component: MasajeCapilarComponent},
  {path: 'brushing' , component: BrushingComponent},
  {path: 'lavado' , component: LavadoComponent},
  {path: 'botox' , component: BotoxComponent},
  {path: 'alisado' , component: AlisadoComponent},
  {path: 'micropigmentacion' , component: MicropigmentacionComponent},
  //components/quiero-servicios
  {path: 'quiero-manicure/:id' , component: QuieroManicureComponent},
  {path: 'quiero-pestanias-ondulacion/:id' , component: QuieroPestaniasOndulacionComponent},
  {path: 'quiero-cejas-planchado/:id' , component: QuieroCejasPlanchadoComponent},
  {path: 'quiero-micropigmentacion/:id' , component: QuieroMicropigmentacionComponent},
  {path: 'quiero-color/:id' , component: QuieroColorComponent},
  {path: 'quiero-depilacion-cera-tradicional/:id' , component: QuieroDepilacionCeraTradicionalComponent},
  {path: 'quiero-alisado/:id' , component: QuieroAlisadoComponent},
  {path: 'quiero-botox/:id' , component: QuieroBotoxComponent},
  {path: 'quiero-lavado/:id' , component: QuieroLavadoComponent},
  {path: 'quiero-brushing/:id' , component: QuieroBrushingComponent},
  {path: 'quiero-masaje-capilar/:id' , component: QuieroMasajeCapilarComponent},
  {path: 'quiero-peinado/:id' , component: QuieroPeinadoComponent},
  {path: 'quiero-quiero-maquillaje/:id' , component:QuieroMaquillajeComponent},
  {path: 'quiero-corte/:id' , component: QuieroCorteComponent},
  {path: 'quiero-tratamiento-facial/:id' , component: QuieroTratamientoFacialComponent},
  {path: 'quiero-tratamiento-corporal/:id' , component: QuieroTratamientoCorporalComponent},
  //default
  {path: '**' , pathMatch: 'full', redirectTo: 'home'}

];
export  const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
