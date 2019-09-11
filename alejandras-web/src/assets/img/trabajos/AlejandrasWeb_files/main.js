(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-nav-social-networks></app-nav-social-networks>\n\n<app-navbar></app-navbar>\n<div class=\"main-container\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'alejandras-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_galeria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/galeria.service */ "./src/app/services/galeria.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nosotros/nosotros.component */ "./src/app/components/nosotros/nosotros.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_shared_nav_social_networks_nav_social_networks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/nav-social-networks/nav-social-networks.component */ "./src/app/components/shared/nav-social-networks/nav-social-networks.component.ts");
/* harmony import */ var _components_servicios_pestanias_pestanias_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/servicios/pestanias/pestanias.component */ "./src/app/components/servicios/pestanias/pestanias.component.ts");
/* harmony import */ var _components_servicios_depilacion_depilacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/servicios/depilacion/depilacion.component */ "./src/app/components/servicios/depilacion/depilacion.component.ts");
/* harmony import */ var _components_servicios_manicure_pedicure_manicure_pedicure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/servicios/manicure-pedicure/manicure-pedicure.component */ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.ts");
/* harmony import */ var _components_servicios_browbar_browbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/servicios/browbar/browbar.component */ "./src/app/components/servicios/browbar/browbar.component.ts");
/* harmony import */ var _components_servicios_coloracion_coloracion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/servicios/coloracion/coloracion.component */ "./src/app/components/servicios/coloracion/coloracion.component.ts");
/* harmony import */ var _components_servicios_tratamiento_capilar_tratamiento_capilar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/servicios/tratamiento-capilar/tratamiento-capilar.component */ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.ts");
/* harmony import */ var _components_servicios_peinados_peinados_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/servicios/peinados/peinados.component */ "./src/app/components/servicios/peinados/peinados.component.ts");
/* harmony import */ var _components_servicios_corte_cabello_corte_cabello_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/servicios/corte-cabello/corte-cabello.component */ "./src/app/components/servicios/corte-cabello/corte-cabello.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/promociones/promociones.component */ "./src/app/components/promociones/promociones.component.ts");
/* harmony import */ var _components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/reservas/reservas.component */ "./src/app/components/reservas/reservas.component.ts");
/* harmony import */ var _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/galeria/galeria.component */ "./src/app/components/galeria/galeria.component.ts");
/* harmony import */ var _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/equipo/equipo.component */ "./src/app/components/equipo/equipo.component.ts");
/* harmony import */ var _components_quiero_servicio_quiero_servicio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/quiero-servicio/quiero-servicio.component */ "./src/app/components/quiero-servicio/quiero-servicio.component.ts");




// Servicios

// Rutas


// componentes




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_10__["NosotrosComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_shared_nav_social_networks_nav_social_networks_component__WEBPACK_IMPORTED_MODULE_12__["NavSocialNetworksComponent"],
                _components_servicios_pestanias_pestanias_component__WEBPACK_IMPORTED_MODULE_13__["PestaniasComponent"],
                _components_servicios_depilacion_depilacion_component__WEBPACK_IMPORTED_MODULE_14__["DepilacionComponent"],
                _components_servicios_manicure_pedicure_manicure_pedicure_component__WEBPACK_IMPORTED_MODULE_15__["ManicurePedicureComponent"],
                _components_servicios_browbar_browbar_component__WEBPACK_IMPORTED_MODULE_16__["BrowbarComponent"],
                _components_servicios_coloracion_coloracion_component__WEBPACK_IMPORTED_MODULE_17__["ColoracionComponent"],
                _components_servicios_tratamiento_capilar_tratamiento_capilar_component__WEBPACK_IMPORTED_MODULE_18__["TratamientoCapilarComponent"],
                _components_servicios_peinados_peinados_component__WEBPACK_IMPORTED_MODULE_19__["PeinadosComponent"],
                _components_servicios_corte_cabello_corte_cabello_component__WEBPACK_IMPORTED_MODULE_20__["CorteCabelloComponent"],
                _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_21__["ContactoComponent"],
                _components_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_22__["PromocionesComponent"],
                _components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_23__["ReservasComponent"],
                _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_24__["GaleriaComponent"],
                _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_25__["EquipoComponent"],
                _components_quiero_servicio_quiero_servicio_component__WEBPACK_IMPORTED_MODULE_26__["QuieroServicioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTING"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [
                _services_galeria_service__WEBPACK_IMPORTED_MODULE_4__["GaleriaService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nosotros/nosotros.component */ "./src/app/components/nosotros/nosotros.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/equipo/equipo.component */ "./src/app/components/equipo/equipo.component.ts");
/* harmony import */ var _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/galeria/galeria.component */ "./src/app/components/galeria/galeria.component.ts");
/* harmony import */ var _components_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/promociones/promociones.component */ "./src/app/components/promociones/promociones.component.ts");
/* harmony import */ var _components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reservas/reservas.component */ "./src/app/components/reservas/reservas.component.ts");
/* harmony import */ var _components_servicios_browbar_browbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/servicios/browbar/browbar.component */ "./src/app/components/servicios/browbar/browbar.component.ts");
/* harmony import */ var _components_servicios_coloracion_coloracion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/servicios/coloracion/coloracion.component */ "./src/app/components/servicios/coloracion/coloracion.component.ts");
/* harmony import */ var _components_servicios_corte_cabello_corte_cabello_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/servicios/corte-cabello/corte-cabello.component */ "./src/app/components/servicios/corte-cabello/corte-cabello.component.ts");
/* harmony import */ var _components_servicios_depilacion_depilacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/servicios/depilacion/depilacion.component */ "./src/app/components/servicios/depilacion/depilacion.component.ts");
/* harmony import */ var _components_servicios_manicure_pedicure_manicure_pedicure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/servicios/manicure-pedicure/manicure-pedicure.component */ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.ts");
/* harmony import */ var _components_servicios_peinados_peinados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/servicios/peinados/peinados.component */ "./src/app/components/servicios/peinados/peinados.component.ts");
/* harmony import */ var _components_servicios_pestanias_pestanias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/servicios/pestanias/pestanias.component */ "./src/app/components/servicios/pestanias/pestanias.component.ts");
/* harmony import */ var _components_servicios_tratamiento_capilar_tratamiento_capilar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/servicios/tratamiento-capilar/tratamiento-capilar.component */ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.ts");
/* harmony import */ var _components_quiero_servicio_quiero_servicio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/quiero-servicio/quiero-servicio.component */ "./src/app/components/quiero-servicio/quiero-servicio.component.ts");

















var APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'nosotros', component: _components_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_2__["NosotrosComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__["ContactoComponent"] },
    { path: 'equipo', component: _components_equipo_equipo_component__WEBPACK_IMPORTED_MODULE_4__["EquipoComponent"] },
    { path: 'galeria', component: _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_5__["GaleriaComponent"] },
    { path: 'promociones', component: _components_promociones_promociones_component__WEBPACK_IMPORTED_MODULE_6__["PromocionesComponent"] },
    { path: 'reservas', component: _components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_7__["ReservasComponent"] },
    { path: 'browbar', component: _components_servicios_browbar_browbar_component__WEBPACK_IMPORTED_MODULE_8__["BrowbarComponent"] },
    { path: 'coloracion', component: _components_servicios_coloracion_coloracion_component__WEBPACK_IMPORTED_MODULE_9__["ColoracionComponent"] },
    { path: 'corte-cabello', component: _components_servicios_corte_cabello_corte_cabello_component__WEBPACK_IMPORTED_MODULE_10__["CorteCabelloComponent"] },
    { path: 'depilacion', component: _components_servicios_depilacion_depilacion_component__WEBPACK_IMPORTED_MODULE_11__["DepilacionComponent"] },
    { path: 'manicure-pedicure', component: _components_servicios_manicure_pedicure_manicure_pedicure_component__WEBPACK_IMPORTED_MODULE_12__["ManicurePedicureComponent"] },
    { path: 'peinados', component: _components_servicios_peinados_peinados_component__WEBPACK_IMPORTED_MODULE_13__["PeinadosComponent"] },
    { path: 'pestanias', component: _components_servicios_pestanias_pestanias_component__WEBPACK_IMPORTED_MODULE_14__["PestaniasComponent"] },
    { path: 'tratamiento-capilar', component: _components_servicios_tratamiento_capilar_tratamiento_capilar_component__WEBPACK_IMPORTED_MODULE_15__["TratamientoCapilarComponent"] },
    { path: 'quiero-servicio/:id', component: _components_quiero_servicio_quiero_servicio_component__WEBPACK_IMPORTED_MODULE_16__["QuieroServicioComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/contacto/contacto.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contacto works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/components/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/components/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/components/equipo/equipo.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/equipo/equipo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXF1aXBvL2VxdWlwby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/equipo/equipo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/equipo/equipo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  equipo works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/equipo/equipo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/equipo/equipo.component.ts ***!
  \*******************************************************/
/*! exports provided: EquipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoComponent", function() { return EquipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EquipoComponent = /** @class */ (function () {
    function EquipoComponent() {
    }
    EquipoComponent.prototype.ngOnInit = function () {
    };
    EquipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipo',
            template: __webpack_require__(/*! ./equipo.component.html */ "./src/app/components/equipo/equipo.component.html"),
            styles: [__webpack_require__(/*! ./equipo.component.css */ "./src/app/components/equipo/equipo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EquipoComponent);
    return EquipoComponent;
}());



/***/ }),

/***/ "./src/app/components/galeria/galeria.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/galeria/galeria.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsZXJpYS9nYWxlcmlhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/galeria/galeria.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/galeria/galeria.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1><small>Nuestros Trabajos&nbsp;</small>Profesionales</h1>\n    <hr>\n    <div class=\"card-columns\">\n\n        <div class=\"card animated fadeIn fast\" *ngFor=\"let galeria of galerias; let i = index \">\n            <img [src]=\"galeria.img\" class=\"card-img-top\" [alt]=\"galeria.nombre\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{galeria.nombre}}</h5>\n                <p class=\"card-text\">{{galeria.descripcion}}</p>\n                <button (click)=\"verHeroe(i)\" type=\"button\" [routerLink]=\"['/reservas']\" class=\"btn btn-outline-success btn-block\">Lo quiero..</button>\n            </div>\n        </div>\n\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/galeria/galeria.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/galeria/galeria.component.ts ***!
  \*********************************************************/
/*! exports provided: GaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function() { return GaleriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_galeria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/galeria.service */ "./src/app/services/galeria.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GaleriaComponent = /** @class */ (function () {
    function GaleriaComponent(galeriaService, router) {
        this.galeriaService = galeriaService;
        this.router = router;
        this.galerias = [];
    }
    GaleriaComponent.prototype.ngOnInit = function () {
        this.galerias = this.galeriaService.getGalerias();
    };
    GaleriaComponent.prototype.verHeroe = function (idx) {
        this.router.navigate(['/quiero-servicio', idx]);
    };
    GaleriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galeria',
            template: __webpack_require__(/*! ./galeria.component.html */ "./src/app/components/galeria/galeria.component.html"),
            styles: [__webpack_require__(/*! ./galeria.component.css */ "./src/app/components/galeria/galeria.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_galeria_service__WEBPACK_IMPORTED_MODULE_2__["GaleriaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GaleriaComponent);
    return GaleriaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-example\">\n    <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <img src=\"http://lorempixel.com/900/300/sports/\" class=\"w-100 h-20\" alt=\"...\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                    <h5>First slide label</h5>\n                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"http://lorempixel.com/900/300/business/\" class=\"w-100 h-20\" alt=\"...\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                    <h5>Second slide label</h5>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <img src=\"http://lorempixel.com/900/300/nightlife/\" class=\"w-100 h-20\" alt=\"...\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                    <h5>Third slide label</h5>\n                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n                </div>\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nosotros/nosotros.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nosotros/nosotros.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nosotros/nosotros.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nosotros/nosotros.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nosotros works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/nosotros/nosotros.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nosotros/nosotros.component.ts ***!
  \***********************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NosotrosComponent = /** @class */ (function () {
    function NosotrosComponent() {
    }
    NosotrosComponent.prototype.ngOnInit = function () {
    };
    NosotrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nosotros',
            template: __webpack_require__(/*! ./nosotros.component.html */ "./src/app/components/nosotros/nosotros.component.html"),
            styles: [__webpack_require__(/*! ./nosotros.component.css */ "./src/app/components/nosotros/nosotros.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NosotrosComponent);
    return NosotrosComponent;
}());



/***/ }),

/***/ "./src/app/components/promociones/promociones.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/promociones/promociones.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvbW9jaW9uZXMvcHJvbW9jaW9uZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/promociones/promociones.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/promociones/promociones.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  promociones works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/promociones/promociones.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/promociones/promociones.component.ts ***!
  \*****************************************************************/
/*! exports provided: PromocionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesComponent", function() { return PromocionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromocionesComponent = /** @class */ (function () {
    function PromocionesComponent() {
    }
    PromocionesComponent.prototype.ngOnInit = function () {
    };
    PromocionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promociones',
            template: __webpack_require__(/*! ./promociones.component.html */ "./src/app/components/promociones/promociones.component.html"),
            styles: [__webpack_require__(/*! ./promociones.component.css */ "./src/app/components/promociones/promociones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromocionesComponent);
    return PromocionesComponent;
}());



/***/ }),

/***/ "./src/app/components/quiero-servicio/quiero-servicio.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/quiero-servicio/quiero-servicio.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpZXJvLXNlcnZpY2lvL3F1aWVyby1zZXJ2aWNpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/quiero-servicio/quiero-servicio.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/quiero-servicio/quiero-servicio.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img [src]=\"galeria.img\" [alt]=\"galeria.nombre\" class=\"img-fluid\">\n            <br><br>\n            <a [routerLink]=\"['/galeria']\" class=\"btn btn-outline-danger btn-block\">Regresar a Galería</a>\n        </div>\n        <div class=\"col-md-8\">\n            <h3>{{galeria.nombre}}</h3>\n            <hr>\n            <p>{{galeria.descripcion}}</p>\n            <hr>\n            <form>\n                <div class=\"form-row\">\n                    <div class=\"col-md-4 mb-3\">\n                        <label for=\"validationServer01\">Nombre</label>\n                        <input type=\"text\" class=\"form-control \" id=\"validationServer01\" placeholder=\"Ingrese su Nombre\" value=\"\">\n                        <div class=\"valid-feedback\">\n                            Looks good!\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 mb-3\">\n                        <label for=\"validationServer02\">Apellido</label>\n                        <input type=\"text\" class=\"form-control \" id=\"validationServer02\" placeholder=\"Ingrese su Apellido\" value=\"\">\n                        <div class=\"valid-feedback\">\n                            Looks good!\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"col-md-3 mb-3\">\n                        <label for=\"validationServer05\">Número de teléfono</label>\n                        <input type=\"text\" class=\"form-control \" id=\"validationServer05\" placeholder=\"Ingrese Teléfono\">\n                        <div class=\"invalid-feedback\">\n                            Please provide a valid zip.\n                        </div>\n                    </div>\n                </div>\n\n                <button type=\"button\" (click)=\"verMensaje(mensajeLLamado)\" class=\"btn btn-outline-success\">Solicitar llamado</button>\n            </form>\n        </div>\n\n    </div>\n</div>\n<ng-template #mensajeLLamado>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-dialog\">Lo contactaremos a la brevedad</h4>\n    </div>\n    <div class=\"modal-footer\">\n\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/quiero-servicio/quiero-servicio.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/quiero-servicio/quiero-servicio.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuieroServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuieroServicioComponent", function() { return QuieroServicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_galeria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/galeria.service */ "./src/app/services/galeria.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var QuieroServicioComponent = /** @class */ (function () {
    function QuieroServicioComponent(activatedRoute, galeriaService, modalService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.galeriaService = galeriaService;
        this.modalService = modalService;
        this.galeria = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.galeria = _this.galeriaService.getGaleria(params['id']);
            console.log(_this.galeria);
        });
    }
    QuieroServicioComponent.prototype.verMensaje = function (modal) {
        this.modalService.open(modal);
    };
    QuieroServicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiero-servicio',
            template: __webpack_require__(/*! ./quiero-servicio.component.html */ "./src/app/components/quiero-servicio/quiero-servicio.component.html"),
            styles: [__webpack_require__(/*! ./quiero-servicio.component.css */ "./src/app/components/quiero-servicio/quiero-servicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_galeria_service__WEBPACK_IMPORTED_MODULE_3__["GaleriaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], QuieroServicioComponent);
    return QuieroServicioComponent;
}());



/***/ }),

/***/ "./src/app/components/reservas/reservas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/reservas/reservas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXJ2YXMvcmVzZXJ2YXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/reservas/reservas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/reservas/reservas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reservas works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/reservas/reservas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/reservas/reservas.component.ts ***!
  \***********************************************************/
/*! exports provided: ReservasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasComponent", function() { return ReservasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReservasComponent = /** @class */ (function () {
    function ReservasComponent() {
    }
    ReservasComponent.prototype.ngOnInit = function () {
    };
    ReservasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservas',
            template: __webpack_require__(/*! ./reservas.component.html */ "./src/app/components/reservas/reservas.component.html"),
            styles: [__webpack_require__(/*! ./reservas.component.css */ "./src/app/components/reservas/reservas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReservasComponent);
    return ReservasComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/browbar/browbar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/servicios/browbar/browbar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL2Jyb3diYXIvYnJvd2Jhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/servicios/browbar/browbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/servicios/browbar/browbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  browbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/browbar/browbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/servicios/browbar/browbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: BrowbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowbarComponent", function() { return BrowbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowbarComponent = /** @class */ (function () {
    function BrowbarComponent() {
    }
    BrowbarComponent.prototype.ngOnInit = function () {
    };
    BrowbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browbar',
            template: __webpack_require__(/*! ./browbar.component.html */ "./src/app/components/servicios/browbar/browbar.component.html"),
            styles: [__webpack_require__(/*! ./browbar.component.css */ "./src/app/components/servicios/browbar/browbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowbarComponent);
    return BrowbarComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/coloracion/coloracion.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/servicios/coloracion/coloracion.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL2NvbG9yYWNpb24vY29sb3JhY2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/servicios/coloracion/coloracion.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/servicios/coloracion/coloracion.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  coloracion works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/coloracion/coloracion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/servicios/coloracion/coloracion.component.ts ***!
  \*************************************************************************/
/*! exports provided: ColoracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoracionComponent", function() { return ColoracionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColoracionComponent = /** @class */ (function () {
    function ColoracionComponent() {
    }
    ColoracionComponent.prototype.ngOnInit = function () {
    };
    ColoracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coloracion',
            template: __webpack_require__(/*! ./coloracion.component.html */ "./src/app/components/servicios/coloracion/coloracion.component.html"),
            styles: [__webpack_require__(/*! ./coloracion.component.css */ "./src/app/components/servicios/coloracion/coloracion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColoracionComponent);
    return ColoracionComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/corte-cabello/corte-cabello.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/servicios/corte-cabello/corte-cabello.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL2NvcnRlLWNhYmVsbG8vY29ydGUtY2FiZWxsby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/servicios/corte-cabello/corte-cabello.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/servicios/corte-cabello/corte-cabello.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  corte-cabello works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/corte-cabello/corte-cabello.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/servicios/corte-cabello/corte-cabello.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CorteCabelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteCabelloComponent", function() { return CorteCabelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CorteCabelloComponent = /** @class */ (function () {
    function CorteCabelloComponent() {
    }
    CorteCabelloComponent.prototype.ngOnInit = function () {
    };
    CorteCabelloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-corte-cabello',
            template: __webpack_require__(/*! ./corte-cabello.component.html */ "./src/app/components/servicios/corte-cabello/corte-cabello.component.html"),
            styles: [__webpack_require__(/*! ./corte-cabello.component.css */ "./src/app/components/servicios/corte-cabello/corte-cabello.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CorteCabelloComponent);
    return CorteCabelloComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/depilacion/depilacion.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/servicios/depilacion/depilacion.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL2RlcGlsYWNpb24vZGVwaWxhY2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/servicios/depilacion/depilacion.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/servicios/depilacion/depilacion.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  depilacion works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/depilacion/depilacion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/servicios/depilacion/depilacion.component.ts ***!
  \*************************************************************************/
/*! exports provided: DepilacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepilacionComponent", function() { return DepilacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DepilacionComponent = /** @class */ (function () {
    function DepilacionComponent() {
    }
    DepilacionComponent.prototype.ngOnInit = function () {
    };
    DepilacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depilacion',
            template: __webpack_require__(/*! ./depilacion.component.html */ "./src/app/components/servicios/depilacion/depilacion.component.html"),
            styles: [__webpack_require__(/*! ./depilacion.component.css */ "./src/app/components/servicios/depilacion/depilacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DepilacionComponent);
    return DepilacionComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL21hbmljdXJlLXBlZGljdXJlL21hbmljdXJlLXBlZGljdXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manicure-pedicure works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManicurePedicureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManicurePedicureComponent", function() { return ManicurePedicureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManicurePedicureComponent = /** @class */ (function () {
    function ManicurePedicureComponent() {
    }
    ManicurePedicureComponent.prototype.ngOnInit = function () {
    };
    ManicurePedicureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manicure-pedicure',
            template: __webpack_require__(/*! ./manicure-pedicure.component.html */ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.html"),
            styles: [__webpack_require__(/*! ./manicure-pedicure.component.css */ "./src/app/components/servicios/manicure-pedicure/manicure-pedicure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManicurePedicureComponent);
    return ManicurePedicureComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/peinados/peinados.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/servicios/peinados/peinados.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL3BlaW5hZG9zL3BlaW5hZG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/servicios/peinados/peinados.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/servicios/peinados/peinados.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  peinados works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/peinados/peinados.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/servicios/peinados/peinados.component.ts ***!
  \*********************************************************************/
/*! exports provided: PeinadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeinadosComponent", function() { return PeinadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PeinadosComponent = /** @class */ (function () {
    function PeinadosComponent() {
    }
    PeinadosComponent.prototype.ngOnInit = function () {
    };
    PeinadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-peinados',
            template: __webpack_require__(/*! ./peinados.component.html */ "./src/app/components/servicios/peinados/peinados.component.html"),
            styles: [__webpack_require__(/*! ./peinados.component.css */ "./src/app/components/servicios/peinados/peinados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PeinadosComponent);
    return PeinadosComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/pestanias/pestanias.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/servicios/pestanias/pestanias.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL3Blc3Rhbmlhcy9wZXN0YW5pYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/servicios/pestanias/pestanias.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/servicios/pestanias/pestanias.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pestanias works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/pestanias/pestanias.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/servicios/pestanias/pestanias.component.ts ***!
  \***********************************************************************/
/*! exports provided: PestaniasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PestaniasComponent", function() { return PestaniasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PestaniasComponent = /** @class */ (function () {
    function PestaniasComponent() {
    }
    PestaniasComponent.prototype.ngOnInit = function () {
    };
    PestaniasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pestanias',
            template: __webpack_require__(/*! ./pestanias.component.html */ "./src/app/components/servicios/pestanias/pestanias.component.html"),
            styles: [__webpack_require__(/*! ./pestanias.component.css */ "./src/app/components/servicios/pestanias/pestanias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PestaniasComponent);
    return PestaniasComponent;
}());



/***/ }),

/***/ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljaW9zL3RyYXRhbWllbnRvLWNhcGlsYXIvdHJhdGFtaWVudG8tY2FwaWxhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tratamiento-capilar works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TratamientoCapilarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TratamientoCapilarComponent", function() { return TratamientoCapilarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TratamientoCapilarComponent = /** @class */ (function () {
    function TratamientoCapilarComponent() {
    }
    TratamientoCapilarComponent.prototype.ngOnInit = function () {
    };
    TratamientoCapilarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tratamiento-capilar',
            template: __webpack_require__(/*! ./tratamiento-capilar.component.html */ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.html"),
            styles: [__webpack_require__(/*! ./tratamiento-capilar.component.css */ "./src/app/components/servicios/tratamiento-capilar/tratamiento-capilar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TratamientoCapilarComponent);
    return TratamientoCapilarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row img {\n    width: 20px;\n    height: 20px;\n}\n\n.bg-color {\n    background-color: #2d1540;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYmctY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDE1NDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-color \">\n\n    <div class=\"container-footer-all\">\n\n        <div class=\"container-body\">\n\n            <div class=\"column1\">\n                <h1>ALEJANDRAS</h1>\n                <img src=\"assets/img/logo.jpg\" width=\"80\" height=\"80\">\n            </div>\n            <div class=\"column2\">\n                <h1>Redes Sociales</h1>\n                <div class=\"row\">\n                    <img src=\"assets/img/facebook.ico\">\n                    <label>Síguemos en Facebook</label>\n                </div>\n                <div class=\"row\">\n                    <img src=\"assets/img/instagram.ico\">\n                    <label>Síguemos en Instagram</label>\n                </div>\n            </div>\n            <div class=\"column3\">\n                <h1>Servicio al Cliente</h1>\n                <div class=\"row2\">\n                    <img src=\"assets/img/smartphone.ico\">\n                    <label>+56 9 41215615</label>\n                </div>\n                <div class=\"row2\">\n                    <img src=\"assets/img/casa.ico\">\n                    <label>Alameda 456 Santiago de Chile</label>\n                </div>\n                <div class=\"row2\">\n                    <img src=\"assets/img/email.ico\">\n                    <label>virpeza91@gmail.com</label>\n                </div>\n\n            </div>\n\n        </div>\n\n\n    </div>\n    <div class=\"container-footer\">\n        <div class=\"footerr\">\n            <div class=\"copyright\">\n                Todos los Derechos reservados &copy;<a href=\"http://www.tisystems.cl\" target=\"_blank\">TISystems.cl</a>\n            </div>\n\n        </div>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/nav-social-networks/nav-social-networks.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shared/nav-social-networks/nav-social-networks.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color {\n    background-color: #701A7F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2LXNvY2lhbC1uZXR3b3Jrcy9uYXYtc29jaWFsLW5ldHdvcmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXYtc29jaWFsLW5ldHdvcmtzL25hdi1zb2NpYWwtbmV0d29ya3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwMUE3Rjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/nav-social-networks/nav-social-networks.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/nav-social-networks/nav-social-networks.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-ico  mr-sm-5  bg-color\">\n\n    <ul class=\"nav justify-content-end   mr-sm-0 \">\n        <li class=\"nav-item font-weight-light  \">\n            <a class=\"nav-link active text-white\" href=\"#\">LOGIN</a>\n        </li>\n        <li class=\"margin-ico\">\n            <a class=\"\" href=\"https://www.facebook.com/SalonAlejandras/\" target=\"_blank\"><img src=\"assets/img/facebook.ico\" width=\"30\" height=\"30\"></a>\n\n        </li>\n\n        <li class=\"\">\n            <a class=\"\" href=\"https://www.instagram.com/alejandras_salon_/\" target=\"_blank\"><img src=\"assets/img/instagram.ico\" width=\"30\" height=\"30\"></a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/nav-social-networks/nav-social-networks.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/nav-social-networks/nav-social-networks.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NavSocialNetworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSocialNetworksComponent", function() { return NavSocialNetworksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavSocialNetworksComponent = /** @class */ (function () {
    function NavSocialNetworksComponent() {
    }
    NavSocialNetworksComponent.prototype.ngOnInit = function () {
    };
    NavSocialNetworksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-social-networks',
            template: __webpack_require__(/*! ./nav-social-networks.component.html */ "./src/app/components/shared/nav-social-networks/nav-social-networks.component.html"),
            styles: [__webpack_require__(/*! ./nav-social-networks.component.css */ "./src/app/components/shared/nav-social-networks/nav-social-networks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavSocialNetworksComponent);
    return NavSocialNetworksComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-color {\n    background-color: #641672;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQxNjcyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"align-content-lg-center\">\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-color\">\n        <a class=\"navbar-brand\" href=\"#\">\n\n            <img src=\"/assets/img/logo.jpg\" width=\"30\" height=\"30\" alt=\"\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n        <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto \">\n                <li class=\"nav-item  mr-sm-5\" routerLinkActive=\"active\">\n                    <a class=\"nav-link   text-white \" [routerLink]=\"['home']\">Alejandras </a>\n                </li>\n                <li class=\"nav-item mr-sm-2 \" routerLinkActive=\"active\">\n                    <a class=\"nav-link  text-white\" [routerLink]=\"['nosotros']\">Nosotros</a>\n                </li>\n                <li class=\"nav-item dropdown mr-sm-2 hover-li\" routerLinkActive=\"active\">\n                    <a class=\"nav-link dropdown-toggle font-weight-light text-white\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Servicios\n        </a>\n                    <div class=\"dropdown-menu menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['pestanias']\">\n                            <span class=\"imagen\"><img src=\"assets/img/pestania.jpg\" ></span>\n                            <span class=\"text-item\">Pestañas</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['depilacion']\">\n                            <span class=\"imagen\"><img src=\"assets/img/depilacion.jpg\" ></span>\n                            <span class=\"text-item\">Depilación</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['manicure-pedicure']\">\n                            <span class=\"imagen\"><img src=\"assets/img/manicurePedicure.jpg\" ></span>\n                            <span class=\"text-item\">Manicure y Pedicure</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['browbar']\">\n                            <span class=\"imagen\"><img src=\"assets/img/browbar.jpg\" ></span>\n                            <span class=\"text-item\">Brow Bar</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['coloracion']\">\n                            <span class=\"imagen\"><img src=\"assets/img/coloracion.jpg\" ></span>\n                            <span class=\"text-item\">Coloración</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['tratamiento-capilar']\">\n                            <span class=\"imagen\"><img src=\"assets/img/tratamientoCapilar.jpg\" ></span>\n                            <span class=\"text-item\">Tratamientos Capilares</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['peinados']\">\n                            <span class=\"imagen\"><img src=\"assets/img/peinados.jpg\" ></span>\n                            <span class=\"text-item\">Peinados</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                        <a class=\"dropdown-item text-white\" [routerLink]=\"['corte-cabello']\">\n                            <span class=\"imagen\"><img src=\"assets/img/corteCabello.jpg\" ></span>\n                            <span class=\"text-item\">Cortes de Cabello</span>\n                            <span class=\"down-item\"></span>\n                        </a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link mr-sm-2  text-white\" [routerLink]=\"['equipo']\">Nuestro Equipo</a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link mr-sm-2  text-white\" [routerLink]=\"['galeria']\">Galería</a>\n                </li>\n\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link mr-sm-2  text-white\" [routerLink]=\"['promociones']\">Promociones</a>\n                </li>\n                <li class=\"nav-item \" routerLinkActive=\"active \">\n                    <a class=\"nav-link mr-sm-2  text-white\" [routerLink]=\"['contacto']\">Contacto</a>\n                </li>\n\n            </ul>\n            <ul class=\"navbar-nav mr-5\">\n                <li class=\"nav-item active mr-sm-5 hoverli\">\n                    <button type=\"button\" class=\"btn btn-outline-light \" [routerLink]=\"['reservas']\">Reserva Hora</button>\n                </li>\n\n            </ul>\n\n\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/galeria.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/galeria.service.ts ***!
  \*********************************************/
/*! exports provided: GaleriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaService", function() { return GaleriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GaleriaService = /** @class */ (function () {
    function GaleriaService() {
        this.galeria = [
            {
                nombre: "Trabajo1",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                img: "assets/img/trabajos/trabajo1.jpg",
            },
            {
                nombre: "Trabajo2",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                img: "assets/img/trabajos/trabajo2.jpg",
            },
            {
                nombre: "Trabajo3",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                img: "assets/img/trabajos/trabajo3.jpg",
            },
            {
                nombre: "Trabajo4",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                img: "assets/img/trabajos/trabajo4.jpg",
            },
            {
                nombre: "Trabajo5",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                img: "assets/img/trabajos/trabajo5.jpg",
            },
            {
                nombre: "Trabajo6",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                img: "assets/img/trabajos/trabajo6.jpg",
            }
        ];
    }
    GaleriaService.prototype.getGalerias = function () {
        return this.galeria;
    };
    GaleriaService.prototype.getGaleria = function (idx) {
        return this.galeria[idx];
    };
    GaleriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GaleriaService);
    return GaleriaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/victorrodriguez/Documents/VRP/TISYSTEMS.CL/PROYECTOS/PELUQERIA-ALEJANDRAS/SITIO-WEB-ANGULAR/sitio-web/alejandras-web/alejandras-web/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/victorrodriguez/Documents/VRP/TISYSTEMS.CL/PROYECTOS/PELUQERIA-ALEJANDRAS/SITIO-WEB-ANGULAR/sitio-web/alejandras-web/alejandras-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map