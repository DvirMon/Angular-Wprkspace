/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 64380:
/*!**************************************!*\
  !*** ./apps/weather-space/server.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   extractRoutes: () => (/* binding */ extractRoutes),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 55365);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/ssr */ 25286);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 96255);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:fs */ 73024);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:path */ 76760);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 67932);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 51372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 61504);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'public/weather-space/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html') : (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.html');
  const commonEngine = new _angular_ssr__WEBPACK_IMPORTED_MODULE_1__.CommonEngine();
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const {
      protocol,
      originalUrl,
      baseUrl,
      headers
    } = req;
    commonEngine.render({
      bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__["default"],
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: distFolder,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: baseUrl
      }]
    }).then(html => res.send(html)).catch(err => next(err));
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_main_server__WEBPACK_IMPORTED_MODULE_5__["default"]);

  // EXPORTS added by @angular-devkit/build-angular
  
  /**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



async function* getRoutesFromRouterConfig(routes, compiler, parentInjector, parentRoute = '') {
    for (const route of routes) {
        const { path, redirectTo, loadChildren, children } = route;
        if (path === undefined) {
            continue;
        }
        const currentRoutePath = buildRoutePath(parentRoute, path);
        if (redirectTo !== undefined) {
            // TODO: handle `redirectTo`.
            yield { route: currentRoutePath, success: false, redirect: true };
            continue;
        }
        if (/[:*]/.test(path)) {
            // TODO: handle parameterized routes population.
            yield { route: currentRoutePath, success: false, redirect: false };
            continue;
        }
        yield { route: currentRoutePath, success: true, redirect: false };
        if (children?.length) {
            yield* getRoutesFromRouterConfig(children, compiler, parentInjector, currentRoutePath);
        }
        if (loadChildren) {
            const loadedChildRoutes = await (0,_angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵloadChildren"])(route, compiler, parentInjector).toPromise();
            if (loadedChildRoutes) {
                const { routes: childRoutes, injector = parentInjector } = loadedChildRoutes;
                yield* getRoutesFromRouterConfig(childRoutes, compiler, injector, currentRoutePath);
            }
        }
    }
}
async function* extractRoutes(bootstrapAppFnOrModule, document) {
    const platformRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.platformCore, 'server', [
        {
            provide: _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.INITIAL_CONFIG,
            useValue: { document, url: '' },
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵConsole"],
            /** An Angular Console Provider that does not print a set of predefined logs. */
            useFactory: () => {
                class Console extends _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵConsole"] {
                    ignoredLogs = new Set(['Angular is running in development mode.']);
                    log(message) {
                        if (!this.ignoredLogs.has(message)) {
                            super.log(message);
                        }
                    }
                }
                return new Console();
            },
        },
        ..._angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵINTERNAL_SERVER_PLATFORM_PROVIDERS"],
    ])();
    try {
        let applicationRef;
        if (isBootstrapFn(bootstrapAppFnOrModule)) {
            applicationRef = await bootstrapAppFnOrModule();
        }
        else {
            const moduleRef = await platformRef.bootstrapModule(bootstrapAppFnOrModule);
            applicationRef = moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_9__.ApplicationRef);
        }
        // Wait until the application is stable.
        await (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵwhenStable"])(applicationRef);
        const injector = applicationRef.injector;
        const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
        if (router.config.length === 0) {
            // In case there are no routes available
            yield { route: '', success: true, redirect: false };
        }
        else {
            const compiler = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_9__.Compiler);
            // Extract all the routes from the config.
            yield* getRoutesFromRouterConfig(router.config, compiler, injector);
        }
    }
    finally {
        platformRef.destroy();
    }
}
function isBootstrapFn(value) {
    // We can differentiate between a module and a bootstrap function by reading compiler-generated `ɵmod` static property:
    return typeof value === 'function' && !('ɵmod' in value);
}
function buildRoutePath(...routeParts) {
    return routeParts.filter(Boolean).join('/');
}


/***/ }),

/***/ 47896:
/*!*****************************************************!*\
  !*** ./apps/weather-space/src/app/app.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 44231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);



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

/***/ 60920:
/*!*********************************************************!*\
  !*** ./apps/weather-space/src/app/app.config.server.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-server */ 51372);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 18349);



const serverConfig = {
  providers: [(0,_angular_platform_server__WEBPACK_IMPORTED_MODULE_1__.provideServerRendering)()]
};
const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.mergeApplicationConfig)(_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig, serverConfig);

/***/ }),

/***/ 18349:
/*!**************************************************!*\
  !*** ./apps/weather-space/src/app/app.config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 21099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 70356);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 77403);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 36090);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _app_routs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routs */ 56556);
/* harmony import */ var _shared_services_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/error.service */ 83712);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 60301);
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ 16212);










const appConfig = {
  providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.provideClientHydration)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule), (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.provideRouter)(_app_routs__WEBPACK_IMPORTED_MODULE_0__.appRoutes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.provideAnimations)(), (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_7__.provideAnimationsAsync)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withInterceptors)([_shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.errorInterceptor]), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withFetch)()), (0,ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.provideToastr)(), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler,
    useClass: _shared_services_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorsService
  }]
};

/***/ }),

/***/ 56556:
/*!*************************************************!*\
  !*** ./apps/weather-space/src/app/app.routs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [{
  path: '',
  loadComponent: () => __webpack_require__.e(/*! import() */ 263).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lobby/lobby.component */ 94263)).then(m => m.LobbyPageComponent),
  title: 'Weather Space'
}, {
  path: 'favorites',
  loadComponent: () => __webpack_require__.e(/*! import() */ 335).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favorites/favorites.component */ 70335)).then(m => m.FavoritesPageComponent)
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ 777).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/page-not-found/page-not-found.component */ 29777)).then(m => m.PageNotFoundComponent)
}, {
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];

/***/ }),

/***/ 44231:
/*!**************************************************************************!*\
  !*** ./apps/weather-space/src/app/components/layout/layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ 50176);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 28687);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 86745);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 99707);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 63552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/server.service */ 75973);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/store */ 58113);











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

/***/ 82826:
/*!*********************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/interceptors/error-message.context.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_MESSAGE_CONTEXT: () => (/* binding */ ERROR_MESSAGE_CONTEXT)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 21099);

const ERROR_MESSAGE_CONTEXT = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => 'Apologies, an unexpected issue has occurred on our end. Please disable server mode');

/***/ }),

/***/ 16212:
/*!*****************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/interceptors/error.interceptor.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorInterceptor: () => (/* binding */ errorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_message_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message.context */ 82826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _messaging_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messaging/message.service */ 31231);




const errorInterceptor = (req, handle) => {
  const msgSErvice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_messaging_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService);
  return handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
    const message = req.context.get(_error_message_context__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE_CONTEXT);
    msgSErvice.error(message);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
  }));
};

/***/ }),

/***/ 4280:
/*!*************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/messaging/dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogComponent: () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 28687);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 48811);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 34064);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ 84134);








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

/***/ 31231:
/*!************************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/messaging/message.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 48811);
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.component */ 4280);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ 84134);





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

/***/ 84134:
/*!****************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/messaging/message.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 91349:
/*!********************************************************!*\
  !*** ./apps/weather-space/src/app/shared/mock/data.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 83712:
/*!*********************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/services/error.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorsService: () => (/* binding */ ErrorsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ 60301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);





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

/***/ 75973:
/*!**********************************************************************!*\
  !*** ./apps/weather-space/src/app/shared/services/server.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerService: () => (/* binding */ ServerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);


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

/***/ 58113:
/*!***************************************************!*\
  !*** ./apps/weather-space/src/app/store/store.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _angular_architects_ngrx_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-architects/ngrx-toolkit */ 62129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/signals */ 65515);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/signals/entities */ 98397);
/* harmony import */ var _weather_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather/weather.service */ 8276);
/* harmony import */ var _updaters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updaters */ 23572);
/* harmony import */ var _with_current_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-current.feature */ 21150);
/* harmony import */ var _with_favorites_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-favorites.feature */ 2170);
/* harmony import */ var _with_future_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-future.feature */ 71608);
/* harmony import */ var _with_options_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-options.feature */ 90853);










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

/***/ 23572:
/*!******************************************************!*\
  !*** ./apps/weather-space/src/app/store/updaters.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 21150:
/*!******************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-current.feature.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withCurrentWeather: () => (/* binding */ withCurrentWeather)
/* harmony export */ });
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 65515);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dom */ 34329);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 98397);



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

/***/ 2170:
/*!********************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-favorites.feature.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withFavorites: () => (/* binding */ withFavorites)
/* harmony export */ });
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 65515);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 98397);


const COLLECTION = 'favorites';
function withFavorites() {
  return (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.signalStoreFeature)((0,_ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)({
    entity: (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.type)(),
    collection: COLLECTION
  }));
}

/***/ }),

/***/ 71608:
/*!*****************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-future.feature.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withFutureWeather: () => (/* binding */ withFutureWeather)
/* harmony export */ });
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 65515);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 98397);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dom */ 34329);



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

/***/ 90853:
/*!******************************************************************!*\
  !*** ./apps/weather-space/src/app/store/with-options.feature.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withOptions: () => (/* binding */ withOptions)
/* harmony export */ });
/* harmony import */ var _home_user_git_web_angular_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 91941);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dom */ 34329);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals */ 65515);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/signals/entities */ 98397);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);





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

/***/ 23651:
/*!********************************************************************!*\
  !*** ./apps/weather-space/src/app/weather/weather-http.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherHttpService: () => (/* binding */ WeatherHttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 21099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 36052);
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/server.service */ 75973);
/* harmony import */ var _shared_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mock/data */ 91349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37100);








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
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(obs => {
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
    return this._getGeolocation().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(position => {
      const lat = position.coords.latitude;
      const lot = position.coords.longitude;
      return `${lat},${lot}`;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(query => {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('apikey', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.accuWeatherAPIKey).append('q', query);
      return this.http.get(url, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(res => res.LocalizedName));
    }));
  }
  static #_ = this.ɵfac = function WeatherHttpService_Factory(t) {
    return new (t || WeatherHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_server_service__WEBPACK_IMPORTED_MODULE_1__.ServerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: WeatherHttpService,
    factory: WeatherHttpService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8276:
/*!***************************************************************!*\
  !*** ./apps/weather-space/src/app/weather/weather.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _weather_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-http.service */ 23651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);




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

/***/ 36052:
/*!************************************************************!*\
  !*** ./apps/weather-space/src/environments/environment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 67932:
/*!***********************************************!*\
  !*** ./apps/weather-space/src/main.server.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 70356);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 47896);
/* harmony import */ var _app_app_config_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config.server */ 60920);



const bootstrap = () => (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config_server__WEBPACK_IMPORTED_MODULE_1__.config);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bootstrap);

/***/ }),

/***/ 34329:
/*!****************************************************!*\
  !*** ./libs/src/lib/dom/helpers/entities/logic.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _ngrx_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/operators */ 1095);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/signals */ 65515);
/* harmony import */ var _ngrx_signals_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/signals/entities */ 98397);
/* harmony import */ var _ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/signals/rxjs-interop */ 98739);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);






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
  return (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(query => loader(query).pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_5__.tapResponse)({
    next: next,
    error: () => rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY
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
  return (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(query => loader(query).pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_5__.tapResponse)({
    next: next,
    error: () => rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY
  })))));
}
function loadSlice(loader, state, slice) {
  return (0,_ngrx_signals_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.rxMethod)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(query => loader(query).pipe((0,_ngrx_operators__WEBPACK_IMPORTED_MODULE_5__.tapResponse)({
    next: res => (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_0__.patchState)(state, {
      [slice]: res
    }),
    error: () => rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY
  })))));
}

/***/ }),

/***/ 19246:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 19246;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 90290:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 20181:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 76982:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 24434:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 79896:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 58611:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 65692:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 69278:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 73024:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 51455:
/*!***********************************!*\
  !*** external "node:fs/promises" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 76760:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 73136:
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 70857:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 16928:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 83480:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2203:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 13193:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 53557:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 52018:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 87016:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 39023:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 43106:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [121], () => (__webpack_require__(74011)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(64380)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 121 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(121);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map