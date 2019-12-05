import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { BrowbarComponent } from './components/servicios/browbar/browbar.component';
import { ColoracionComponent } from './components/servicios/coloracion/coloracion.component';
import { CorteCabelloComponent } from './components/servicios/corte-cabello/corte-cabello.component';
import { DepilacionComponent } from './components/servicios/depilacion/depilacion.component';
import { ManicurePedicureComponent } from './components/servicios/manicure-pedicure/manicure-pedicure.component';
import { PeinadosComponent } from './components/servicios/peinados/peinados.component';
import { PestaniasComponent } from './components/servicios/pestanias/pestanias.component';
import { TratamientoCapilarComponent } from './components/servicios/tratamiento-capilar/tratamiento-capilar.component';
import { QuieroServicioComponent } from './components/quiero-servicio/quiero-servicio.component';
import { QuieroManicureComponent } from './components/quiero-manicure/quiero-manicure.component';
import { QuieroPestaniasComponent} from './components/quiero-pestanias/quiero-pestanias.component';
import { QuieroDepilacionComponent} from './components/quiero-depilacion/quiero-depilacion.component';



const APP_ROUTES: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'equipo' , component: EquipoComponent},
  {path: 'galeria' , component: GaleriaComponent},
  {path: 'promociones' , component: PromocionesComponent},
  {path: 'reservas' , component: ReservasComponent},
  {path: 'browbar' , component: BrowbarComponent},
  {path: 'coloracion' , component: ColoracionComponent},
  {path: 'corte-cabello' , component: CorteCabelloComponent},
  {path: 'depilacion' , component: DepilacionComponent},
  {path: 'manicure-pedicure' , component: ManicurePedicureComponent},
  {path: 'peinados' , component: PeinadosComponent},
  {path: 'pestanias' , component: PestaniasComponent},
  {path: 'tratamiento-capilar' , component: TratamientoCapilarComponent},
  {path: 'quiero-servicio/:id' , component: QuieroServicioComponent},
  {path: 'quiero-manicure/:id' , component: QuieroManicureComponent},
  {path: 'quiero-pestanias/:id' , component: QuieroPestaniasComponent},
  {path: 'quiero-depilacion/:id' , component: QuieroDepilacionComponent},
  {path: '**' , pathMatch: 'full', redirectTo: 'home'}
];
export  const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
