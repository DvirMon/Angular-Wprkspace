"use strict";
(self["webpackChunkweather_space"] = self["webpackChunkweather_space"] || []).push([["apps_weather-space_src_app_pages_favorites_favorites_component_ts"],{

/***/ 5364:
/*!***************************************************************************!*\
  !*** ./apps/weather-space/src/app/pages/favorites/favorites.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesPageComponent: () => (/* binding */ FavoritesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 6434);
/* harmony import */ var _weather_weather_favorite_card_favorite_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../weather/weather-favorite-card/favorite-card.component */ 6493);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);







function FavoritesPageComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "weather-space-favorite-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChanged", function FavoritesPageComponent_Conditional_2_ng_container_1_Template_weather_space_favorite_card_selectionChanged_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelectionChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r3.value)("metric", ctx_r1.isMetric());
  }
}
function FavoritesPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FavoritesPageComponent_Conditional_2_ng_container_1_Template, 7, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n  ");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.items()));
  }
}
function FavoritesPageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No favorites has been selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n  ");
  }
}
class FavoritesPageComponent {
  #store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_store_store__WEBPACK_IMPORTED_MODULE_0__.Store);
  constructor(router) {
    this.router = router;
    this.items = this.#store.favoritesEntityMap;
    this.isMetric = this.#store.isMetric;
    this.hasFavorites = this.#store.hasFavorites;
  }
  onSelectionChanged({
    id
  }) {
    this.#store.updateCurrentId(id);
    this.router.navigateByUrl('/');
  }
  static #_ = this.ɵfac = function FavoritesPageComponent_Factory(t) {
    return new (t || FavoritesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FavoritesPageComponent,
    selectors: [["weather-space-favorites"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [1, "favorite-card-wrapper"], [3, "selectionChanged", "item", "metric"]],
    template: function FavoritesPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FavoritesPageComponent_Conditional_2_Template, 4, 3)(3, FavoritesPageComponent_Conditional_3_Template, 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx.hasFavorites() ? 2 : 3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _weather_weather_favorite_card_favorite_card_component__WEBPACK_IMPORTED_MODULE_1__.FavoriteEntityComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe],
    styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]    > div.favorite-card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (min-width: 601px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]    > div.favorite-card-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 20%;\n  }\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]    > div.favorite-card-wrapper[_ngcontent-%COMP%]   weather-space-favorite-card[_ngcontent-%COMP%] {\n    flex: 0 0 90%;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2VhdGhlci1zcGFjZS9zcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFJTTtFQUpGO0lBS0ksYUFBQTtFQUROO0VBR007SUFDRSxhQUFBO0VBRFI7QUFDRjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUhOO0FBS007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFIUiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFpbiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICA+IGRpdi5mYXZvcml0ZS1jYXJkLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgLy8gRm9yIHNjcmVlbnMgbGFyZ2VyIHRoYW4gJ3NtJyAoNjAwcHgsIGFzc3VtaW5nICdzbScgYnJlYWtwb2ludClcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBmbGV4OiAwIDAgMjAlOyAvLyBUaGlzIHNldHMgdGhlIGJhc2lzIHRvIDgwJSBvZiB0aGUgY29udGFpbmVyJ3Mgc2l6ZVxuXG4gICAgICAgIHdlYXRoZXItc3BhY2UtZmF2b3JpdGUtY2FyZCB7XG4gICAgICAgICAgZmxleDogMCAwIDkwJTsgLy8gVGhpcyBzZXRzIHRoZSBiYXNpcyB0byAyNSUgb2YgdGhlIGNvbnRhaW5lcidzIHNpemUgb24gc2NyZWVucyBncmVhdGVyIHRoYW4gJ3NtJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgPiBwIHtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6493:
/*!*********************************************************************************************!*\
  !*** ./apps/weather-space/src/app/weather/weather-favorite-card/favorite-card.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoriteEntityComponent: () => (/* binding */ FavoriteEntityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _shared_pipes_temperature_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/pipes/temperature.pipe */ 4301);
/* harmony import */ var _shared_pipes_unit_temperature_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/unit-temperature.pipe */ 9844);






function FavoriteEntityComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavoriteEntityComponent_ng_container_0_Template_mat_card_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelectionChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-title")(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "isUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, item_r3.LocalizedName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 6, item_r3.WeatherText));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("\n        ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 8, item_r3.Temperature, ctx_r1.metric()), "\n        ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 11, ctx_r1.metric(), "temp"), "");
  }
}
class FavoriteEntityComponent {
  constructor() {
    this.item = _angular_core__WEBPACK_IMPORTED_MODULE_2__.input.required();
    this.metric = _angular_core__WEBPACK_IMPORTED_MODULE_2__.input.required();
    this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  onSelectionChanged() {
    this.selectionChanged.emit(this.item());
  }
  static #_ = this.ɵfac = function FavoriteEntityComponent_Factory(t) {
    return new (t || FavoriteEntityComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FavoriteEntityComponent,
    selectors: [["weather-space-favorite-card"]],
    inputs: {
      item: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].SignalBased, "item"],
      metric: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].SignalBased, "metric"]
    },
    outputs: {
      selectionChanged: "selectionChanged"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[4, "ngIf"], [1, "favorite", 3, "click"], ["mat-card-subtitle", ""]],
    template: function FavoriteEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FavoriteEntityComponent_ng_container_0_Template, 25, 14, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _shared_pipes_unit_temperature_pipe__WEBPACK_IMPORTED_MODULE_1__.IsUnitPipe, _shared_pipes_temperature_pipe__WEBPACK_IMPORTED_MODULE_0__.TemperaturePipe],
    styles: ["[_nghost-%COMP%] {\n  margin: 16px;\n}\n[_nghost-%COMP%]   mat-card.favorite[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n  vertical-align: center;\n}\n[_nghost-%COMP%]   mat-card.favorite[_ngcontent-%COMP%]:hover {\n  background-color: #a1dfff;\n}\n[_nghost-%COMP%]   mat-card.favorite[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd2VhdGhlci1zcGFjZS9zcmMvYXBwL3dlYXRoZXIvd2VhdGhlci1mYXZvcml0ZS1jYXJkL2Zhdm9yaXRlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBUUEsc0JBQUE7QUFMSjtBQURJO0VBQ0UseUJBQUE7QUFHTjtBQUlJO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtBQUZOIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtYXJnaW46IDE2cHg7XG4gIG1hdC1jYXJkLmZhdm9yaXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMWRmZmY7XG4gICAgfVxuXG4gICAgLy8gZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG5cbiAgICBtYXQtY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_weather-space_src_app_pages_favorites_favorites_component_ts.js.map