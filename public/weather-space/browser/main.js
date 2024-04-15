"use strict";
(self["webpackChunkweather_space"] = self["webpackChunkweather_space"] || []).push([["main"],{

/***/ 8867:
/*!*****************************************************!*\
  !*** ./apps/weather-space/src/app/app.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["weather-space-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "weather-space-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n");
      }
    },
    dependencies: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1876:
/*!**************************************************!*\
  !*** ./apps/weather-space/src/app/app.config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routs */ 4007);
/* harmony import */ var _shared_services_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/error.service */ 3887);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ 7199);










const appConfig = {
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.provideClientHydration)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule), (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.provideRouter)(_app_routs__WEBPACK_IMPORTED_MODULE_0__.appRoutes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.provideAnimations)(), (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_7__.provideAnimationsAsync)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withInterceptors)([_shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.errorInterceptor]), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withFetch)()), (0,ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.provideToastr)(), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler,
    useClass: _shared_services_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorsService
  }]
};

/***/ }),

/***/ 4007:
/*!*************************************************!*\
  !*** ./apps/weather-space/src/app/app.routs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-apps_weather-space_src_app_shared_pipes_temperature_pipe_ts-apps_weather-space_src_ap-34bf24"), __webpack_require__.e("apps_weather-space_src_app_pages_lobby_lobby_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lobby/lobby.component */ 2020)).then(m => m.LobbyPageComponent),
  title: 'Weather Space'
}, {
  path: 'favorites',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-apps_weather-space_src_app_shared_pipes_temperature_pipe_ts-apps_weather-space_src_ap-34bf24"), __webpack_require__.e("apps_weather-space_src_app_pages_favorites_favorites_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favorites/favorites.component */ 5364)).then(m => m.FavoritesPageComponent)
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ "apps_weather-space_src_app_pages_page-not-found_page-not-found_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/page-not-found/page-not-found.component */ 7558)).then(m => m.PageNotFoundComponent)
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];

/***/ }),

/***/ 858:
/*!**************************************************************************!*\
  !*** ./apps/weather-space/src/app/components/layout/layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/server.service */ 3612);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/store */ 6434);











const _c0 = ["*"];
class LayoutComponent {
  constructor() {
    this.#serverService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_shared_services_server_service__WEBPACK_IMPORTED_MODULE_0__.ServerService);
    this.#store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_store_store__WEBPACK_IMPORTED_MODULE_1__.Store);
    this.isServer = this.#serverService.getServer();
    this.toggleLabel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => 'server ' + (this.isServer() ? 'on' : 'off'));
    this.favoriteCount = this.#store.favoritesCount;
  }
  #serverService;
  #store;
  onValueChanged(event) {
    this.#serverService.setServer(event.checked);
  }
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["weather-space-layout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 36,
    vars: 7,
    consts: [[1, "sidenav-container"], [1, "mat-elevation-z3"], [1, "toolbar-container"], [1, "logo"], [3, "change", "checked"], [1, "navigation"], ["mat-button", "", 3, "routerLink"], ["matBadgeOverlap", "false", 3, "matBadge"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Weather Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function LayoutComponent_Template_mat_slide_toggle_change_13_listener($event) {
          return ctx.onValueChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n              Favorites\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isServer());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 5, ctx.toggleLabel()));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matBadge", ctx.favoriteCount());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__.MatBadge],
    styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  background-image: url('bg.jpg');\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0); \n\n}\n.mat-toolbar[_ngcontent-%COMP%]   div.toolbar-container[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mat-toolbar[_ngcontent-%COMP%]   div.toolbar-container[_ngcontent-%COMP%]   section.logo[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2VhdGhlci1zcGFjZS9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBLEVBQUEsc0JBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ047O0FBSUE7RUFDRSxlQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnJyk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgLyogRnVsbHkgdHJhbnNwYXJlbnQgKi9cblxuICBkaXYudG9vbGJhci1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIHNlY3Rpb24ubG9nbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6141:
/*!*********************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/interceptors/error-message.context.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_MESSAGE_CONTEXT: () => (/* binding */ ERROR_MESSAGE_CONTEXT)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);

const ERROR_MESSAGE_CONTEXT = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => 'Apologies, an unexpected issue has occurred on our end. Please disable server mode');

/***/ }),

/***/ 7199:
/*!*****************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/interceptors/error.interceptor.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorInterceptor: () => (/* binding */ errorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _error_message_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message.context */ 6141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _messaging_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messaging/message.service */ 5830);




const errorInterceptor = (req, handle) => {
  const msgSErvice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_messaging_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService);
  return handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
    const message = req.context.get(_error_message_context__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE_CONTEXT);
    msgSErvice.error(message);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => err);
  }));
};

/***/ }),

/***/ 9879:
/*!*************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/messaging/dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogComponent: () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ 7587);








class DialogComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA);
    this.icons = {
      [_message__WEBPACK_IMPORTED_MODULE_0__.DialogType.CONFIRM]: 'task-info',
      [_message__WEBPACK_IMPORTED_MODULE_0__.DialogType.ERROR]: 'task_alt',
      [_message__WEBPACK_IMPORTED_MODULE_0__.DialogType.INFO]: 'info'
    };
  }
  static #_ = this.ɵfac = function DialogComponent_Factory(t) {
    return new (t || DialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DialogComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 5,
    consts: [["color", "primary", 3, "fontIcon"], ["mat-button", ""]],
    template: function DialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n  ");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fontIcon", ctx.icons[ctx.data.type]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n        ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, ctx.data.type), "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 16px;\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2VhdGhlci1zcGFjZS9zcmMvYXBwL3NoYXJlZC9tZXNzYWdpbmcvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wIDoxNnB4O1xuICBnYXA6IDE2cHg7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5830:
/*!************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/messaging/message.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.component */ 9879);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ 7587);





class MessageService {
  #dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog);
  info(message) {
    return this.openDialog(message, _message__WEBPACK_IMPORTED_MODULE_1__.DialogType.INFO);
  }
  error(message) {
    return this.openDialog(message, _message__WEBPACK_IMPORTED_MODULE_1__.DialogType.ERROR);
  }
  confirm(message) {
    return this.openDialog(message, _message__WEBPACK_IMPORTED_MODULE_1__.DialogType.CONFIRM);
  }
  openDialog(message, type, deniable = false) {
    return this.#dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      panelClass: type,
      data: {
        type,
        message,
        deniable
      }
    }).afterClosed();
  }
  static #_ = this.ɵfac = function MessageService_Factory(t) {
    return new (t || MessageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MessageService,
    factory: MessageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7587:
/*!****************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/messaging/message.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogType: () => (/* binding */ DialogType)
/* harmony export */ });
var DialogType;
(function (DialogType) {
  DialogType["ERROR"] = "error";
  DialogType["INFO"] = "info";
  DialogType["CONFIRM"] = "confirm";
})(DialogType || (DialogType = {}));

/***/ }),

/***/ 1892:
/*!********************************************************!*\
  !*** ./apps/weather-space/src/app/shared/mock/data.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURRENT_WEATHER_MediaResult: () => (/* binding */ CURRENT_WEATHER_MediaResult),
/* harmony export */   FAVORITES: () => (/* binding */ FAVORITES),
/* harmony export */   FUTURE_WEATHER_MediaResult: () => (/* binding */ FUTURE_WEATHER_MediaResult),
/* harmony export */   GEOLOCATION_DATA: () => (/* binding */ GEOLOCATION_DATA),
/* harmony export */   LOCATIONS_AUTOCOMPLETE_MediaResult: () => (/* binding */ LOCATIONS_AUTOCOMPLETE_MediaResult)
/* harmony export */ });
const LOCATIONS_AUTOCOMPLETE_MediaResult = [{
  Version: 1,
  Key: '226396',
  Type: 'City',
  Rank: 10,
  LocalizedName: 'Tokyo',
  Country: {
    ID: 'JP',
    LocalizedName: 'Japan'
  },
  AdministrativeArea: {
    ID: '13',
    LocalizedName: 'Tokyo'
  }
}, {
  Version: 1,
  Key: '212575',
  Type: 'City',
  Rank: 10,
  LocalizedName: 'Rosh HaAyin',
  Country: {
    ID: 'JP',
    LocalizedName: 'Isreal'
  },
  AdministrativeArea: {
    ID: '13',
    LocalizedName: 'Rosh HaAyin'
  }
}, {
  Version: 1,
  Key: '106770',
  Type: 'City',
  Rank: 11,
  LocalizedName: 'Taiyuan',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'SX',
    LocalizedName: 'Shanxi'
  }
}, {
  Version: 1,
  Key: '106780',
  Type: 'City',
  Rank: 11,
  LocalizedName: 'Tianjin',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'TJ',
    LocalizedName: 'Tianjin'
  }
}, {
  Version: 1,
  Key: '58491',
  Type: 'City',
  Rank: 13,
  LocalizedName: 'Tongren',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'GZ',
    LocalizedName: 'Guizhou'
  }
}, {
  Version: 1,
  Key: '102324',
  Type: 'City',
  Rank: 13,
  LocalizedName: 'Tangshan',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'HE',
    LocalizedName: 'Hebei'
  }
}, {
  Version: 1,
  Key: '59573',
  Type: 'City',
  Rank: 13,
  LocalizedName: 'Taizhou',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'JS',
    LocalizedName: 'Jiangsu'
  }
}, {
  Version: 1,
  Key: '60198',
  Type: 'City',
  Rank: 13,
  LocalizedName: 'Tongliao',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'NM',
    LocalizedName: 'Inner Mongolia'
  }
}, {
  Version: 1,
  Key: '106571',
  Type: 'City',
  Rank: 13,
  LocalizedName: "Tai'an",
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'SD',
    LocalizedName: 'Shandong'
  }
}, {
  Version: 1,
  Key: '58055',
  Type: 'City',
  Rank: 15,
  LocalizedName: 'Tianshui',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'GS',
    LocalizedName: 'Gansu'
  }
}, {
  Version: 1,
  Key: '2333653',
  Type: 'City',
  Rank: 15,
  LocalizedName: 'Taizhou',
  Country: {
    ID: 'CN',
    LocalizedName: 'China'
  },
  AdministrativeArea: {
    ID: 'ZJ',
    LocalizedName: 'Zhejiang'
  }
}, {
  Version: 1,
  Key: '215854',
  Type: 'City',
  Rank: 31,
  LocalizedName: 'Tel Aviv',
  Country: {
    ID: 'IL',
    LocalizedName: 'Israel'
  },
  AdministrativeArea: {
    ID: 'TA',
    LocalizedName: 'Tel Aviv'
  }
}];
const CURRENT_WEATHER_MediaResult = [{
  LocalObservationDateTime: new Date('2022-07-28T15:28:00+03:00'),
  EpochTime: 1659011280,
  WeatherText: 'Sunny',
  WeatherIcon: 1,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: true,
  Temperature: {
    Metric: {
      Value: 34.6,
      Unit: 'C',
      UnitType: 17
    },
    Imperial: {
      Value: 94.0,
      Unit: 'F',
      UnitType: 18
    }
  },
  MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
}];
const FUTURE_WEATHER_MediaResult = {
  Headline: {
    EffectiveDate: new Date('2022-07-28T14:00:00+03:00'),
    EffectiveEpochDate: 1659006000,
    Severity: 4,
    Text: 'Danger of dehydration and heat stroke if outside for extended periods of time Thursday afternoon',
    Category: 'heat',
    EndDate: new Date('2022-07-28T20:00:00+03:00'),
    EndEpochDate: 1659027600,
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us'
  },
  DailyForecasts: [{
    Date: new Date('2022-07-28T07:00:00+03:00'),
    EpochDate: 1658980800,
    Temperature: {
      Minimum: {
        Value: 24.0,
        Unit: 'C',
        UnitType: 18
      },
      Maximum: {
        Value: 94.0,
        Unit: 'C',
        UnitType: 18
      }
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false
    },
    Night: {
      Icon: 34,
      IconPhrase: 'Mostly clear',
      HasPrecipitation: false
    },
    Sources: ['AccuWeather'],
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us'
  }, {
    Date: new Date('2022-07-29T07:00:00+03:00'),
    EpochDate: 1659067200,
    Temperature: {
      Minimum: {
        Value: 76.0,
        Unit: 'C',
        UnitType: 18
      },
      Maximum: {
        Value: 92.0,
        Unit: 'C',
        UnitType: 18
      }
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false
    },
    Night: {
      Icon: 35,
      IconPhrase: 'Partly cloudy',
      HasPrecipitation: false
    },
    Sources: ['AccuWeather'],
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us'
  }, {
    Date: new Date('2022-07-30T07:00:00+03:00'),
    EpochDate: 1659153600,
    Temperature: {
      Minimum: {
        Value: 74.0,
        Unit: 'C',
        UnitType: 18
      },
      Maximum: {
        Value: 90.0,
        Unit: 'C',
        UnitType: 18
      }
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false
    },
    Night: {
      Icon: 34,
      IconPhrase: 'Mostly clear',
      HasPrecipitation: false
    },
    Sources: ['AccuWeather'],
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us'
  }, {
    Date: new Date('2022-07-31T07:00:00+03:00'),
    EpochDate: 1659240000,
    Temperature: {
      Minimum: {
        Value: 74.0,
        Unit: 'C',
        UnitType: 18
      },
      Maximum: {
        Value: 88.0,
        Unit: 'C',
        UnitType: 18
      }
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Sunny',
      HasPrecipitation: false
    },
    Night: {
      Icon: 34,
      IconPhrase: 'Mostly clear',
      HasPrecipitation: false
    },
    Sources: ['AccuWeather'],
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us'
  }, {
    Date: new Date('2022-08-01T07:00:00+03:00'),
    EpochDate: 1659326400,
    Temperature: {
      Minimum: {
        Value: 74.0,
        Unit: 'C',
        UnitType: 18
      },
      Maximum: {
        Value: 89.0,
        Unit: 'C',
        UnitType: 18
      }
    },
    Day: {
      Icon: 2,
      IconPhrase: 'Mostly sunny',
      HasPrecipitation: false
    },
    Night: {
      Icon: 34,
      IconPhrase: 'Mostly clear',
      HasPrecipitation: false
    },
    Sources: ['AccuWeather'],
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us'
  }]
};
const GEOLOCATION_DATA = {
  Version: 1,
  Key: '212575',
  Type: 'City',
  Rank: 55,
  LocalizedName: 'Rosh HaAyin',
  EnglishName: 'Rosh HaAyin',
  Country: {
    ID: 'IL',
    LocalizedName: 'Israel',
    EnglishName: 'Israel'
  },
  GeoPosition: {
    Latitude: 32.094,
    Longitude: 34.946,
    Elevation: {
      Metric: {
        Value: 29.0,
        Unit: 'm',
        UnitType: 5
      },
      Imperial: {
        Value: 95.0,
        Unit: 'ft',
        UnitType: 0
      }
    }
  }
};
const FAVORITES = {
  212575: {
    id: 212575,
    WeatherText: 'Partly cloudy',
    LocalizedName: 'San Francisco',
    Temperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 60.1,
        Unit: 'F',
        UnitType: 18
      }
    }
  },
  226396: {
    id: 226396,
    WeatherText: 'Partly cloudy',
    LocalizedName: 'San Francisco',
    Temperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 60.1,
        Unit: 'F',
        UnitType: 18
      }
    }
  },
  106770: {
    id: 106770,
    WeatherText: 'Partly cloudy',
    LocalizedName: 'San Francisco',
    Temperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 60.1,
        Unit: 'F',
        UnitType: 18
      }
    }
  },
  106775: {
    id: 106775,
    WeatherText: 'Partly cloudy',
    LocalizedName: 'San Francisco',
    Temperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 60.1,
        Unit: 'F',
        UnitType: 18
      }
    }
  },
  213575: {
    id: 232575,
    WeatherText: 'Partly cloudy',
    LocalizedName: 'San Francisco',
    Temperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17
      },
      Imperial: {
        Value: 60.1,
        Unit: 'F',
        UnitType: 18
      }
    }
  }
};

/***/ }),

/***/ 3887:
/*!*********************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/services/error.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsService: () => (/* binding */ ErrorsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);





class ErrorsService {
  constructor(router, injector) {
    this.router = router;
    this.injector = injector;
  }
  get toastrService() {
    return this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_0__.ToastrService);
  }
  handleError(error) {
    if (error instanceof ErrorEvent) {
      this.handleClientError(error);
    }
  }
  handleClientError(error) {
    console.error('Custom Error Handler:', error.message || 'An unexpected error occurred');
  }
  static #_ = this.ɵfac = function ErrorsService_Factory(t) {
    return new (t || ErrorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ErrorsService,
    factory: ErrorsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3612:
/*!**********************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/services/server.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerService: () => (/* binding */ ServerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ServerService {
  constructor() {
    this.server = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
  }
  getServer() {
    return this.server;
  }
  setServer(value) {
    this.server.set(value);
  }
  toggleServer() {
    this.server.update(value => !value);
  }
  onServer() {
    this.server.set(true);
  }
  offServer() {
    this.server.set(false);
  }
  static #_ = this.ɵfac = function ServerService_Factory(t) {
    return new (t || ServerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ServerService,
    factory: ServerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6434:
/*!***************************************************!*\
  !*** ./apps/weather-space/src/app/store/store.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _angular_architects_ngrx_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-architects/ngrx-toolkit */ 2833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/signals/entities */ 7290);
/* harmony import */ var _weather_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather/weather.service */ 4479);
/* harmony import */ var _updaters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updaters */ 8353);
/* harmony import */ var _with_current_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-current.feature */ 5559);
/* harmony import */ var _with_favorites_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-favorites.feature */ 5263);
/* harmony import */ var _with_future_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-future.feature */ 7475);
/* harmony import */ var _with_options_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-options.feature */ 5380);










const initialState = {
  isMetric: true,
  isGeolocation: true,
  selectedId: -1
};
const Store = (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.signalStore)({
  providedIn: 'root'
}, (0,_angular_architects_ngrx_toolkit__WEBPACK_IMPORTED_MODULE_7__.withDevtools)('store'), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.withState)(initialState), (0,_with_options_feature__WEBPACK_IMPORTED_MODULE_5__.withOptions)(_weather_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), (0,_with_current_feature__WEBPACK_IMPORTED_MODULE_2__.withCurrentWeather)(_weather_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), (0,_with_future_feature__WEBPACK_IMPORTED_MODULE_4__.withFutureWeather)(_weather_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), (0,_with_favorites_feature__WEBPACK_IMPORTED_MODULE_3__.withFavorites)(), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.withComputed)(store => ({
  optionSelected: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => store.optionsEntityMap()[store.selectedId()]),
  hasFavorites: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => store.favoritesEntities().length !== 0),
  favoritesCount: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => store.favoritesEntities().length > 0 ? String(store.favoritesEntities().length) : '')
})), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.withMethods)(state => ({
  setCurrentId(value) {
    const option = state.optionsEntities().find(option => optionCompareTo(option, value));
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.patchState)(state, {
      selectedId: option?.id
    });
  },
  updateCurrentId(id) {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.patchState)(state, {
      selectedId: id
    });
  },
  updateIsMetric(isMetric) {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.patchState)(state, (0,_updaters__WEBPACK_IMPORTED_MODULE_1__.updateIsMetric)(isMetric));
  },
  addFavorite(item) {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.patchState)(state, (0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_9__.addEntity)(item, {
      collection: 'favorites'
    }));
  },
  removeFavorite(item) {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_6__.patchState)(state, (0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_9__.removeEntity)(item.id, {
      collection: 'favorites'
    }));
  }
})));
function optionCompareTo(option, value) {
  return option ? option.LocalizedName.toLowerCase() === value : false;
}

/***/ }),

/***/ 8353:
/*!******************************************************!*\
  !*** ./apps/weather-space/src/app/store/updaters.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateIsMetric: () => (/* binding */ updateIsMetric),
/* harmony export */   updateSelectedId: () => (/* binding */ updateSelectedId)
/* harmony export */ });
function updateSelectedId(id) {
  return {
    selectedId: id
  };
}
function updateIsMetric(isMetric) {
  return {
    isMetric
  };
}

/***/ }),

/***/ 5559:
/*!******************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-current.feature.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withCurrentWeather: () => (/* binding */ withCurrentWeather)
/* harmony export */ });
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dom */ 9916);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 7290);



const COLLECTION = 'current';
function withCurrentWeather(Loader) {
  return (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.signalStoreFeature)((0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)({
    entity: (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.type)(),
    collection: COLLECTION
  }), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.withMethods)(store => {
    const loader = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createLoader)(Loader, 'loadCurrentWeather');
    return {
      loadCurrentWeather: (0,_dom__WEBPACK_IMPORTED_MODULE_2__.loadEntities)(loader, (0,_dom__WEBPACK_IMPORTED_MODULE_2__.onLoadCollection)(store, COLLECTION))
    };
  }));
}

/***/ }),

/***/ 5263:
/*!********************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-favorites.feature.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withFavorites: () => (/* binding */ withFavorites)
/* harmony export */ });
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 7290);


const COLLECTION = 'favorites';
function withFavorites() {
  return (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.signalStoreFeature)((0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)({
    entity: (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.type)(),
    collection: COLLECTION
  }));
}

/***/ }),

/***/ 7475:
/*!*****************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-future.feature.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withFutureWeather: () => (/* binding */ withFutureWeather)
/* harmony export */ });
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 7290);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dom */ 9916);



const COLLECTION = 'future';
function withFutureWeather(Loader) {
  return (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.signalStoreFeature)((0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)({
    entity: (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.type)(),
    collection: COLLECTION
  }), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.withMethods)(store => {
    const loader = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createLoader)(Loader, 'loadFutureWeather');
    return {
      loadFutureWeather: (0,_dom__WEBPACK_IMPORTED_MODULE_2__.loadEntities)(loader, (0,_dom__WEBPACK_IMPORTED_MODULE_2__.onLoadCollection)(store, COLLECTION))
    };
  }));
}

/***/ }),

/***/ 5380:
/*!******************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-options.feature.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withOptions: () => (/* binding */ withOptions)
/* harmony export */ });
/* harmony import */ var _home_user_git_web_angular_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dom */ 9916);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/signals/entities */ 7290);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5342);





const COLLECTION = 'options';
function withOptions(Loader) {
  return (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.signalStoreFeature)((0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)({
    entity: (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.type)(),
    collection: COLLECTION
  }), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.withMethods)(store => {
    const loader = (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createLoader)(Loader, 'loadOptions');
    return {
      loadOptions: (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadEntities)(loader, (0,_dom__WEBPACK_IMPORTED_MODULE_3__.onLoadCollection)(store, COLLECTION)),
      loadOptionAsync(query) {
        return (0,_home_user_git_web_angular_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(loader(query));
          const options = res;
          (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_1__.patchState)(store, (0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_2__.addEntities)(options, {
            collection: COLLECTION
          }));
        })();
      }
    };
  }));
}

/***/ }),

/***/ 7818:
/*!********************************************************************!*\
  !*** ./apps/weather-space/src/app/weather/weather-http.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherHttpService: () => (/* binding */ WeatherHttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 7417);
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/server.service */ 3612);
/* harmony import */ var _shared_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mock/data */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);








class WeatherHttpService {
  constructor(serverService, http) {
    this.serverService = serverService;
    this.http = http;
    this._baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherEndpoint;
  }
  getOptions(query) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('apikey', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.accuWeatherAPIKey).set('q', query);
    return this.http.get(this._baseUrl + 'locations/v1/cities/autocomplete', {
      params
    });
  }
  loadOptions(query) {
    const isServer = this.serverService.getServer();
    return isServer() ? this.getOptions(query) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__.LOCATIONS_AUTOCOMPLETE_MediaResult);
  }
  getCurrentWeather(locationKey) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('apikey', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.accuWeatherAPIKey);
    return this.http.get(this._baseUrl + 'currentconditions/v1/' + locationKey, {
      params
    });
  }
  loadCurrentWeather(locationKey) {
    const isServer = this.serverService.getServer();
    return isServer() ? this.getCurrentWeather(locationKey) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__.CURRENT_WEATHER_MediaResult);
  }
  getFutureWeather(locationKey, metric) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('apikey', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.accuWeatherAPIKey).append('metric', metric);
    return this.http.get(this._baseUrl + 'forecasts/v1/daily/5day/' + locationKey, {
      params
    });
  }
  loadFutureWeather(locationKey, metric) {
    const isServer = this.serverService.getServer();
    return isServer() ? this.getFutureWeather(locationKey, metric) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__.FUTURE_WEATHER_MediaResult);
  }
  _getGeolocation() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(obs => {
      navigator.geolocation.getCurrentPosition(success => {
        obs.next(success);
        obs.complete();
      }, error => {
        obs.error(error);
      });
    });
  }
  getGeolocationWeather() {
    const url = this._baseUrl + 'locations/v1/cities/geoposition/search';
    return this._getGeolocation().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(position => {
      const lat = position.coords.latitude;
      const lot = position.coords.longitude;
      return `${lat},${lot}`;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(query => {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('apikey', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.accuWeatherAPIKey).append('q', query);
      return this.http.get(url, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(res => res.LocalizedName));
    }));
  }
  static #_ = this.ɵfac = function WeatherHttpService_Factory(t) {
    return new (t || WeatherHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_shared_services_server_service__WEBPACK_IMPORTED_MODULE_1__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: WeatherHttpService,
    factory: WeatherHttpService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4479:
/*!***************************************************************!*\
  !*** ./apps/weather-space/src/app/weather/weather.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _weather_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-http.service */ 7818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class WeatherService {
  constructor(weatherHttp) {
    this.weatherHttp = weatherHttp;
  }
  loadOptions(query) {
    return this.weatherHttp.loadOptions(query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(MediaResults => this._mapToAutocompleteMediaResults(MediaResults)));
  }
  _mapToAutocompleteMediaResults(input) {
    return input.map(item => ({
      id: Number(item.Key),
      Version: item.Version,
      Type: item.Type,
      Rank: item.Rank,
      LocalizedName: item.LocalizedName,
      Country: item.Country,
      AdministrativeArea: item.AdministrativeArea
    }));
  }
  loadCurrentWeather(locationKey) {
    return this.weatherHttp.loadCurrentWeather(locationKey).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
      return {
        id: locationKey,
        ...data[0]
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => [res]));
  }
  loadFutureWeather(args) {
    const {
      id,
      metric
    } = args;
    return this.weatherHttp.loadFutureWeather(id, metric).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
      return {
        id,
        ...data
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => [res]));
  }
  static #_ = this.ɵfac = function WeatherService_Factory(t) {
    return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_weather_http_service__WEBPACK_IMPORTED_MODULE_0__.WeatherHttpService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: WeatherService,
    factory: WeatherService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7417:
/*!************************************************************!*\
  !*** ./apps/weather-space/src/environments/environment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  accuWeatherAPIKey: 'suYaPffekm9dzvAivsynQoUXBpRKrmcd',
  weatherEndpoint: 'https://dataservice.accuweather.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 1776:
/*!****************************************!*\
  !*** ./apps/weather-space/src/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 1876);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 8867);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 9916:
/*!****************************************************!*\
  !*** ./libs/src/lib/dom/helpers/entities/logic.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLoader: () => (/* binding */ createLoader),
/* harmony export */   loadCollection: () => (/* binding */ loadCollection),
/* harmony export */   loadEntities: () => (/* binding */ loadEntities),
/* harmony export */   loadSlice: () => (/* binding */ loadSlice),
/* harmony export */   onLoadCollection: () => (/* binding */ onLoadCollection),
/* harmony export */   onLoadEntities: () => (/* binding */ onLoadEntities),
/* harmony export */   onLoadSlice: () => (/* binding */ onLoadSlice),
/* harmony export */   onUpdateCollection: () => (/* binding */ onUpdateCollection)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/operators */ 2743);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 1803);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 7290);
/* harmony import */ var _ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/signals/rxjs-interop */ 8275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9400);






function onLoadSlice(state, slice) {
  return res => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.patchState)(state, {
    [slice]: res
  });
}
function onLoadEntities(state) {
  return res => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.patchState)(state, (0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.addEntities)(res));
}
// Function to handle the success response of loading entities
function onLoadCollection(state, collection) {
  return res => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.patchState)(state, (0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.addEntities)(res, {
    collection
  }));
}
// Function to handle the success response of loading entities
function onUpdateCollection(state, collection) {
  return res => {
    (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.patchState)(state, (0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.setAllEntities)(res, {
      collection
    }));
  };
}
/**
 * Creates a function that invokes a specified method on a LoaderService instance.
 * @param Loader The LoaderService instance.
 * @param methodName The name of the method to invoke on the LoaderService instance.
 * @returns A function that accepts parameters for the specified method and returns an Observable of the result.
 * @template T The type of parameters accepted by the method.
 */
function createLoader(Loader, methodName) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.runInInjectionContext)((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), () => {
    const loader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(Loader);
    return query => loader[methodName](query);
  });
}
function loadCollection(loader, next) {
  return (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(query => loader(query).pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_6__.tapResponse)({
    next: next,
    error: () => rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY
  })))));
}
/**
 * Loads entities using the provided loader function and invokes the specified
 * callback with the result.
 * @param loader A function that accepts a query parameter of type T and returns
 *               an Observable of Entity or Entity[].
 * @param next A callback function to handle the result of the loading operation.
 * @template T The type of the query parameter.
 */
function loadEntities(loader, next) {
  return (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(query => loader(query).pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_6__.tapResponse)({
    next: next,
    error: () => rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY
  })))));
}
function loadSlice(loader, state, slice) {
  return (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(query => loader(query).pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_6__.tapResponse)({
    next: res => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.patchState)(state, {
      [slice]: res
    }),
    error: () => rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY
  })))));
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1776)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map