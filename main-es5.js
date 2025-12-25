function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_wheel_page_wheel_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/wheel-page/wheel-page.component */
    "./src/app/components/wheel-page/wheel-page.component.ts");
    /* harmony import */


    var _components_custom_decks_custom_decks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/custom-decks/custom-decks.component */
    "./src/app/components/custom-decks/custom-decks.component.ts");
    /* harmony import */


    var _components_santa_santa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/santa/santa.component */
    "./src/app/components/santa/santa.component.ts");

    var routes = [{
      path: '',
      component: _components_wheel_page_wheel_page_component__WEBPACK_IMPORTED_MODULE_2__["WheelPageComponent"]
    }, {
      path: 'wheel-customizer',
      component: _components_custom_decks_custom_decks_component__WEBPACK_IMPORTED_MODULE_3__["CustomDecksComponent"]
    }, {
      path: 'santa',
      component: _components_santa_santa_component__WEBPACK_IMPORTED_MODULE_4__["SantaComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mtg-multitool-app';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "mtgf-header"], ["routerLink", ""], ["routerLink", "/wheel-customizer"], ["routerLink", "/santa"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u043E\u043B\u0435\u0441\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Santa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".mtgf-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 32px;\n  margin: 8px 0;\n}\n.mtgf-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: white;\n  border-radius: 4px;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzovR2l0L210Zy1tdWx0aXRvb2wtYXBwL210Zy1tdWx0aXRvb2wtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NGO0FETEE7RUFPSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXRnZi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgbWFyZ2luOiA4cHggMDtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxufVxuIiwiLm10Z2YtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4ubXRnZi1oZWFkZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _components_fortune_wheel_fortune_wheel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/fortune-wheel/fortune-wheel.component */
    "./src/app/components/fortune-wheel/fortune-wheel.component.ts");
    /* harmony import */


    var _components_wheel_page_wheel_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/wheel-page/wheel-page.component */
    "./src/app/components/wheel-page/wheel-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _components_custom_decks_custom_decks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/custom-decks/custom-decks.component */
    "./src/app/components/custom-decks/custom-decks.component.ts");
    /* harmony import */


    var _components_santa_santa_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/santa/santa.component */
    "./src/app/components/santa/santa.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_fortune_wheel_fortune_wheel_component__WEBPACK_IMPORTED_MODULE_4__["FortuneWheelComponent"], _components_wheel_page_wheel_page_component__WEBPACK_IMPORTED_MODULE_5__["WheelPageComponent"], _components_custom_decks_custom_decks_component__WEBPACK_IMPORTED_MODULE_14__["CustomDecksComponent"], _components_santa_santa_component__WEBPACK_IMPORTED_MODULE_15__["SantaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_fortune_wheel_fortune_wheel_component__WEBPACK_IMPORTED_MODULE_4__["FortuneWheelComponent"], _components_wheel_page_wheel_page_component__WEBPACK_IMPORTED_MODULE_5__["WheelPageComponent"], _components_custom_decks_custom_decks_component__WEBPACK_IMPORTED_MODULE_14__["CustomDecksComponent"], _components_santa_santa_component__WEBPACK_IMPORTED_MODULE_15__["SantaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/assets/luck_items.ts":
  /*!**************************************!*\
    !*** ./src/app/assets/luck_items.ts ***!
    \**************************************/

  /*! exports provided: luckItems */

  /***/
  function _src_app_assets_luck_itemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "luckItems", function () {
      return luckItems;
    });

    var luckItems = ['Начинаешь с +1хп', 'Начинаешь с доп Уликой (Clue)', 'Начинаешь с -1хп', 'Бесплатный Рерол', 'Начинаешь с +2хп', 'Начинаешь с доп Кровью (Blood)', 'Начинаешь с -2хп', 'Начинаешь с доп Едой (Food)', 'Начинаешь с +3хп', 'Начинаешь как Монарх (Unkeep)', 'Начинаешь с -3хп', 'Начинаешь с доп токеном Карты (Map)', 'Начинаешь с +4хп', 'Можешь убрать все баффы/дебаффы с целевого игрока (Upkeep)', 'Начинаешь с -4хп', 'Начинаешь с доп Кладом (Treasure)', 'Начинаешь с +5хп', 'Убери все ранее выпавшие дебаффы с себя', 'Начинаешь с -5хп', 'Убери все ранее выпавшие баффы с себя', 'Начинаешь с существом 1/1', 'Начинаешь с доп Мусором (Junk)'];
    /***/
  },

  /***/
  "./src/app/assets/my-decks.ts":
  /*!************************************!*\
    !*** ./src/app/assets/my-decks.ts ***!
    \************************************/

  /*! exports provided: MY_DECKS */

  /***/
  function _src_app_assets_myDecksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MY_DECKS", function () {
      return MY_DECKS;
    });

    var MY_DECKS = ['Автофея', 'Моноблек (ебучий)', 'Крольчишка', 'Телевизор', 'Гном(Гигант) механик (борос)', 'Чары реанимация', 'Стены', 'Клюшки', 'Бандиты (оливия)', 'Пираты', 'Дракон-копир', 'Слежка (surveil)', 'Казиныч', 'Морфы (ная)', 'Гомогойфы (Лиргойфы)', 'Вампуры', 'Сова', 'Урза', 'Марду токены', 'Гробовщик (Мишра)', 'Holy Diver', 'Жертва земли (станция)', 'Эйс Вентура', 'Доктер кто (тайми вайми)', 'Зомби', 'Рохан (лотр люди)', 'Воробьиная (птицы)', 'Шабаш', 'Жук', 'Ангелочки', 'Землепад', 'Капитан Армения', 'Дракон-застрельщик', 'Цезарь', 'Бродяги (скрут)', 'Чандра', 'Эльфы', 'Каскадеры (Симик)', 'Дедпул', 'Аанг на перепутье (бант)', 'Азула', 'Увядание', 'Пв (гуф)'];
    /***/
  },

  /***/
  "./src/app/assets/santa-items.ts":
  /*!***************************************!*\
    !*** ./src/app/assets/santa-items.ts ***!
    \***************************************/

  /*! exports provided: SANTA_GOOD, SANTA_BAD */

  /***/
  function _src_app_assets_santaItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SANTA_GOOD", function () {
      return SANTA_GOOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SANTA_BAD", function () {
      return SANTA_BAD;
    });

    var SANTA_GOOD = {
      LEVEL1: ['Каждый игрок создает Клюшку', 'Все игроки получают 1 жизнь', 'Предсказываешь 1', 'Каждый игрок создает Еду', 'Выбери оппонента, тот игрок создает Клад', 'Каждый игрок выбирает оппонента, выбранный игрок получает 2 жизни'],
      LEVEL2: ['Ты создаешь Лэндер токен и теряешь 1 жизнь за каждого игрока кто выбрал быть плохим', 'Каждый игрок создает 1/1 токен артефакт Серво', 'Каждый игрок создает Клад', 'Возьми карту если все игроки выбрали Хороший, иначе потеряй 5 жизней если хотя бы 1 игрок выбрал Плохой', 'Выбери оппонента, тот игрок создает Клад. Если у того игрока под контролем больше артефактов чем у тебя, создай Клад', 'Берешь 1 карту за каждого хорошего, затем сбрасываешь 1 карту за каждого плохого'],
      LEVEL3: ['Выбери оппонента, тот игрок показывает карту сверху своей библиотеки, затем кладет эту карту себе в руку. Если была показана карта земли таким образом, то ты создаешь Лэндер, иначе создай Клюшку', 'Получаешь 2 жизни за каждого хорошего, теряешь 4 жизни за каждого плохого', 'Выбери оппонента, тот игрок получает 5 жизней. Если у него больше жизней чем у тебя создай 2 Еды', 'Каждый игрок создает 2/2 Пряничного Человечка со способностью "Когда это существо умирает, получи 1 жизнь"', 'Выбери оппонента, тот игрок берет карту. Если у того игрока в руке больше карт чем у тебя, возьми карту', 'Ты создаешь Еду. Если все выбрали быть Хорошим возьми 2 карты'],
      LEVEL4: ['Каждый игрок создает 3/3 Оленя с Полетом', 'Получи X * 2 жизней, где X - количество хороших выборов, которые ты сделал за игру', 'Выбери оппонента, тот игрок выбирает карту существа на твоем кладбище. Верни выбранную карту в руку', 'Каждый игрок берет карту'],
      ARRIVAL: ['Каждый хороший игрок получает эмблему Рождественская Омела со способностью "Вы и перманенты под вашим контролем имеют Оберег 2"', 'Каждый хороший игрок получает эмблему Новогодний Стол со способностью "В начале вашего шага поддержки вы получаете 5 жизней"', 'Каждый хороший игрок получает эмблему Сани Санты со способностью "В начале вашего заключительного шага создай 3/3 Оленя с Полетом"', 'Каждый хороший игрок получает эмблему Мешок С Подарками со способностью "В начале вашего шага поддержки возьмите 2 карты"']
    };
    var SANTA_BAD = {
      LEVEL1: ['Используешь слежку 2', 'Возьми карту, потеряй 2 жизни', 'Все оппоненты теряют 1 жизнь, ты получаешь 1 жизнь', 'Создаешь 2 Клада, теряешь 2 жизни', 'Возьми карту, затем сбрось карту', 'Создай Лэндер токен'],
      LEVEL2: ['Каждый оппонент сбрасывает карту', 'Создаешь токен 4/4 Чертенка с Полетом', 'Предскажи 1, возьми карту', 'Каждый оппонент жертвует не являющийся токеном перманент', 'Поверни целевое существо, положи на него стан каунтер', 'Изгони верхнюю карту своей библиотеки рубашкой вверх, можешь играть ее пока она остается в изгнании'],
      LEVEL3: ['Уничтожь целевой перманент, потеряй 5 жизней', 'Пожертвуй перманент, изгони целевые чары или артефакт', 'Возьми 3 карты, затем сбрось карту', 'Верни целевое существо со своего кладбища на поле битвы. Потеряй 3 жизни', 'Выбери оппонента, тот игрок показывает свою руку. Выбери не являющуюся существом карту. Тот игрок изгоняет ее. Ты можешь играть ее пока она остается в изгнании оплачивая ее стоимость жизнями', 'Заплати любое количество жизней, возьми столько карт'],
      LEVEL4: ['Каждый оппонент теряет X * 3 жизней, где X - количество плохих вариантов, которые ты выбрал за игру', 'Количество жизней целевого игрока становится равным 10', 'Получи контроль над целевым не являющимся землей или токеном перманентом. Потеряй X жизней, где X - его стоимость', 'Изгони целевой перманент. Потеряй X жизней, где X - количество Плохих выборов, что ты сделал за игру'],
      ARRIVAL: ['Каждый плохой игрок получает эмблему Рождественский Уголь со способностью "В начале вашего шага поддержки заплатите 3 маны, либо потеряйте 3 жизни, этот эффект нельзя предотвратить"', 'Каждый плохой игрок получает эмблему Колючие Варежки со способностью "Ваш размер руки ограничивается до 3 карт и не может быть изменен какими-либо эффектами"', 'Каждый плохой игрок получает эмблему Оленья Упряжка со способностью "Разыгрываемые вами заклинания стоят на 2 дороже"', 'Каждый плохой игрок получает эмблему Зависть Гринча со способностью "Каждый раз когда оппонент берет карту, вы теряете 1 жизнь"']
    };
    /***/
  },

  /***/
  "./src/app/components/custom-decks/custom-decks.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/custom-decks/custom-decks.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomDecksComponent */

  /***/
  function _src_app_components_customDecks_customDecksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDecksComponent", function () {
      return CustomDecksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomDecksComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomDecksComponent_div_7_div_1_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var deck_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.removeDeck(deck_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var deck_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deck_r2, " ");
      }
    }

    function CustomDecksComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomDecksComponent_div_7_div_1_Template, 4, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customDecks);
      }
    }

    var CustomDecksComponent = /*#__PURE__*/function () {
      function CustomDecksComponent(dataService) {
        _classCallCheck(this, CustomDecksComponent);

        this.dataService = dataService;
      }

      return _createClass(CustomDecksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customDecks = this.dataService.getCustomDecks();
        }
      }, {
        key: "addDeck",
        value: function addDeck() {
          this.dataService.addCustomDeck(this.value);
          this.value = '';
        }
      }, {
        key: "removeDeck",
        value: function removeDeck(value) {
          this.dataService.removeCustomDeck(value);
          this.customDecks = this.dataService.getCustomDecks();
        }
      }]);
    }();

    CustomDecksComponent.ɵfac = function CustomDecksComponent_Factory(t) {
      return new (t || CustomDecksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CustomDecksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomDecksComponent,
      selectors: [["mtgf-custom-decks"]],
      decls: 8,
      vars: 2,
      consts: [[1, "mtgf-custom-deck__container"], [1, "mtgf-custom-deck__input"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["matButton", "filled", 3, "click"], ["class", "mtgf-custom-deck__decks-list", 4, "ngIf"], [1, "mtgf-custom-deck__decks-list"], ["class", "mtgf-custom-deck__deck", 4, "ngFor", "ngForOf"], [1, "mtgf-custom-deck__deck"], [3, "click"]],
      template: function CustomDecksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u043E\u043B\u043E\u0434\u0430 \u043F\u0438\u0441\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomDecksComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomDecksComponent_Template_button_click_5_listener() {
            return ctx.addDeck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomDecksComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customDecks == null ? null : ctx.customDecks.length);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".mtgf-custom-deck__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 32px;\n}\n.mtgf-custom-deck__input[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n.mtgf-custom-deck__decks-list[_ngcontent-%COMP%] {\n  font-size: 22px;\n  background: white;\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n.mtgf-custom-deck__deck[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px;\n}\n.mtgf-custom-deck__deck[_ngcontent-%COMP%]    + .mtgf-custom-deck__deck[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n.mtgf-custom-deck__deck[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #fbff00;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tZGVja3MvRzovR2l0L210Zy1tdWx0aXRvb2wtYXBwL210Zy1tdWx0aXRvb2wtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tZGVja3MvY3VzdG9tLWRlY2tzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1kZWNrcy9jdXN0b20tZGVja3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDSEo7QURJSTtFQUNFLDJCQUFBO0FDRk47QURIRTtFQVNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWRlY2tzL2N1c3RvbS1kZWNrcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdGdmLWN1c3RvbS1kZWNrIHtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDMycHg7XG4gIH1cblxuICAmX19pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cblxuICAmX19kZWNrcy1saXN0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cblxuICAmX19kZWNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgJiArICYge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogI2ZiZmYwMDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5tdGdmLWN1c3RvbS1kZWNrX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDMycHg7XG59XG4ubXRnZi1jdXN0b20tZGVja19faW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuLm10Z2YtY3VzdG9tLWRlY2tfX2RlY2tzLWxpc3Qge1xuICBmb250LXNpemU6IDIycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG4ubXRnZi1jdXN0b20tZGVja19fZGVjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNHB4O1xufVxuLm10Z2YtY3VzdG9tLWRlY2tfX2RlY2sgKyAubXRnZi1jdXN0b20tZGVja19fZGVjayB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbn1cbi5tdGdmLWN1c3RvbS1kZWNrX19kZWNrIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmYmZmMDA7XG4gIHBhZGRpbmc6IDRweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDecksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mtgf-custom-decks',
          templateUrl: './custom-decks.component.html',
          styleUrls: ['./custom-decks.component.less']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/fortune-wheel/fortune-wheel.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/fortune-wheel/fortune-wheel.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FortuneWheelComponent */

  /***/
  function _src_app_components_fortuneWheel_fortuneWheelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FortuneWheelComponent", function () {
      return FortuneWheelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");

    var _c0 = ["wheel"];
    var _c1 = ["spin"];
    var COLORS = ['#f82', '#0bf', '#fb0', '#0fb', '#b0f', '#f0b', '#bf0'];

    var FortuneWheelComponent = /*#__PURE__*/function () {
      function FortuneWheelComponent(dataService, cdr) {
        var _this = this;

        _classCallCheck(this, FortuneWheelComponent);

        this.dataService = dataService;
        this.cdr = cdr;
        this.colors = ['#f82', '#0bf', '#fb0', '#0fb', '#b0f', '#f0b', '#bf0'];
        this.sectors = [];
        this.winners = [];
        this.modeDelete = true;
        this.friction = 0.995; // 0.995=soft, 0.99=mid, 0.98=hard

        this.angVel = 0; // Angular velocity

        this.ang = 0; // Angle in radians

        this.rand = function (m, M) {
          return Math.random() * (M - m) + m;
        };

        this.getIndex = function () {
          return Math.floor(_this.tot - _this.ang / _this.TAU * _this.tot) % _this.tot;
        };
      }

      return _createClass(FortuneWheelComponent, [{
        key: "options",
        set: function set(values) {
          var _a;

          console.log('Values', values);
          this.sectors = values.map(function (opts, i) {
            return {
              color: COLORS[(i >= COLORS.length ? i + 1 : i) % COLORS.length],
              label: opts
            };
          });
          console.log(this.sectors);

          if (this.wheel) {
            this.createWheel();
          }

          (_a = this.cdr) === null || _a === void 0 ? void 0 : _a.detectChanges();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.engine();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.createWheel();
        }
      }, {
        key: "createWheel",
        value: function createWheel() {
          var _this2 = this;

          var _a, _b;

          this.ctx = (_b = (_a = this.wheel) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.getContext('2d');
          this.dia = this.ctx.canvas.width;
          this.tot = this.sectors.length;
          this.rad = this.dia / 2;
          this.PI = Math.PI;
          this.TAU = 2 * this.PI;
          this.arc0 = this.TAU / this.sectors.length;
          this.sectors.forEach(function (sector, i) {
            return _this2.drawSector(sector, i);
          });
          this.rotate(true);
          this.restartWinner();
        }
      }, {
        key: "spinner",
        value: function spinner() {
          if (!this.angVel) {
            this.angVel = this.rand(0.25, 0.45);
          }
        }
      }, {
        key: "drawSector",
        value: function drawSector(sector, i) {
          var ang = this.arc0 * i;
          this.ctx.save(); // COLOR

          this.ctx.beginPath();
          this.ctx.fillStyle = sector.color;
          this.ctx.moveTo(this.rad, this.rad);
          this.ctx.arc(this.rad, this.rad, this.rad, ang, ang + this.arc0);
          this.ctx.lineTo(this.rad, this.rad);
          this.ctx.fill(); // TEXT

          this.ctx.translate(this.rad, this.rad);
          this.ctx.rotate(ang + this.arc0 / 2);
          this.ctx.textAlign = 'right';
          this.ctx.fillStyle = '#fff';
          this.ctx.font = 'bold 12px sans-serif';
          this.ctx.fillText(sector.label, this.rad - 10, 10); //

          this.ctx.restore();
        }
      }, {
        key: "rotate",
        value: function rotate() {
          var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var sector = this.sectors[this.getIndex()];
          this.ctx.canvas.style.transform = "rotate(".concat(this.ang - this.PI / 2, "rad)"); // this.spin.nativeElement.textContent = !this.angVel ? 'spin' : sector.label;

          if (!first) {
            this.lastSelection = !this.angVel ? this.lastSelection : this.getIndex();
            this.setWinner();
          }

          this.spin.nativeElement.style.background = sector.color;
        }
      }, {
        key: "frame",
        value: function frame() {
          if (!this.angVel) {
            return;
          }

          this.angVel *= this.friction; // Decrement velocity by friction

          if (this.angVel < 0.002) {
            this.angVel = 0;
          } // Bring to stop


          this.ang += this.angVel; // Update angle

          this.ang %= this.TAU; // Normalize angle

          this.rotate();
        }
      }, {
        key: "engine",
        value: function engine() {
          requestAnimationFrame(this.frame.bind(this));
        }
      }, {
        key: "setWinner",
        value: function setWinner() {
          var _this3 = this;

          if (this.modeDelete && !this.angVel) {
            console.log('eliminar', this.lastSelection);
            this.addNewWinner(this.sectors[this.lastSelection].label); // this.spin.nativeElement.textContent = this.sectors[
            //   this.lastSelection
            //   ].label;
            // this.sectors.splice(this.lastSelection, 1);

            setTimeout(function () {
              _this3.createWheel();
            }, 1200);
          }
        }
      }, {
        key: "restartWinner",
        value: function restartWinner() {// this.dataService.restartWinners();
        }
      }, {
        key: "addNewWinner",
        value: function addNewWinner(value) {
          this.dataService.addWinner(value);
        }
      }]);
    }();

    FortuneWheelComponent.ɵfac = function FortuneWheelComponent_Factory(t) {
      return new (t || FortuneWheelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    FortuneWheelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FortuneWheelComponent,
      selectors: [["mtgf-fortune-wheel"]],
      viewQuery: function FortuneWheelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wheel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spin = _t.first);
        }
      },
      inputs: {
        options: "options"
      },
      decls: 6,
      vars: 0,
      consts: [["id", "wheelOfFortune"], ["id", "wheel", "width", "600", "height", "600"], ["wheel", ""], ["id", "spin", 3, "click"], ["spin", ""]],
      template: function FortuneWheelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FortuneWheelComponent_Template_div_click_3_listener() {
            return ctx.spinner();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u0420\u0423\u0422\u0418");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#wheelOfFortune {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n#wheel {\n  display: block;\n}\n#spin {\n  font: 1.5em/0 sans-serif;\n  font-size: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 10%;\n  height: 10%;\n  margin: -5%;\n  background: #fff;\n  color: #fff;\n  box-shadow: 0 0 0 8px currentColor, 0 0px 15px 5px rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  transition: 0.8s;\n}\n#spin::after {\n  content: \"\";\n  position: absolute;\n  top: -17px;\n  border: 10px solid transparent;\n  border-bottom-color: currentColor;\n  border-top: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3J0dW5lLXdoZWVsL0c6L0dpdC9tdGctbXVsdGl0b29sLWFwcC9tdGctbXVsdGl0b29sLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZm9ydHVuZS13aGVlbC9mb3J0dW5lLXdoZWVsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZvcnR1bmUtd2hlZWwvZm9ydHVuZS13aGVlbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0FDQUY7QURHQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxRUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3J0dW5lLXdoZWVsL2ZvcnR1bmUtd2hlZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2hlZWxPZkZvcnR1bmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3doZWVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzcGluIHtcbiAgZm9udDogMS41ZW0vMCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW46IC01JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDhweCBjdXJyZW50Q29sb3IsIDAgMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjhzO1xufVxuXG4jc3Bpbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE3cHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogY3VycmVudENvbG9yO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuIiwiI3doZWVsT2ZGb3J0dW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jd2hlZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNzcGluIHtcbiAgZm9udDogMS41ZW0vMCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW46IC01JTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDhweCBjdXJyZW50Q29sb3IsIDAgMHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjhzO1xufVxuI3NwaW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xN3B4O1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FortuneWheelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mtgf-fortune-wheel',
          templateUrl: './fortune-wheel.component.html',
          styleUrls: ['./fortune-wheel.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['wheel']
        }],
        spin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['spin']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/santa/santa.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/santa/santa.component.ts ***!
    \*****************************************************/

  /*! exports provided: SantaComponent */

  /***/
  function _src_app_components_santa_santaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SantaComponent", function () {
      return SantaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_santa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/santa.service */
    "./src/app/services/santa.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SantaComponent_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0440\u0438\u0431\u044B\u0432\u0430\u0435\u0442 \u0421\u0430\u043D\u0442\u0430!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SantaComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SantaComponent_div_11_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.revealItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SantaComponent_div_11_div_1_Template, 2, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_arrival", item_r1.arrival);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.arrival);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.arrival ? "\uD83C\uDF85" : i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.shown ? item_r1.good : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.shown ? item_r1.bad : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C");
      }
    }

    var SantaComponent = /*#__PURE__*/function () {
      function SantaComponent(santaService) {
        _classCallCheck(this, SantaComponent);

        this.santaService = santaService;
      }

      return _createClass(SantaComponent, [{
        key: "santaLabel",
        get: function get() {
          return this.santaService.count < 7 ? 'Следующий круг' : this.santaService.count === 7 ? 'Прибывает Санта' : 'Сбросить';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = this.santaService.getItems();
        }
      }, {
        key: "next",
        value: function next() {
          if (confirm('Продолжить?')) {
            this.items = this.santaService.getNextItems();
          }
        }
      }, {
        key: "revealItem",
        value: function revealItem() {
          this.santaService.showItem();
          this.items = this.santaService.getItems();
        }
      }]);
    }();

    SantaComponent.ɵfac = function SantaComponent_Factory(t) {
      return new (t || SantaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_santa_service__WEBPACK_IMPORTED_MODULE_1__["SantaService"]));
    };

    SantaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SantaComponent,
      selectors: [["mtgf-santa"]],
      decls: 15,
      vars: 2,
      consts: [[1, "mtgf-santa__container"], [1, "mtgf-santa__header"], [1, "mtgf-santa__list"], [1, "mtgf-santa__item"], [1, "mtgf-santa__item-count"], [1, "mtgf-santa__item-good"], [1, "mtgf-santa__item-bad"], ["class", "mtgf-santa__row", 3, "_arrival", "click", 4, "ngFor", "ngForOf"], [1, "mtgf-santa__next"], [3, "click"], [1, "mtgf-santa__row", 3, "click"], ["class", "mtgf-santa__arrival", 4, "ngIf"], [1, "mtgf-santa__arrival"]],
      template: function SantaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0421\u0430\u043D\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0425\u043E\u0440\u043E\u0448\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u043B\u043E\u0445\u043E\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SantaComponent_div_11_Template, 9, 6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SantaComponent_Template_button_click_13_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.santaLabel);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".mtgf-santa__container[_ngcontent-%COMP%] {\n  background: white;\n  margin: 32px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border-radius: 10px;\n}\n.mtgf-santa__header[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  align-self: center;\n}\n.mtgf-santa__item[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid black;\n  flex: 1 1 0;\n  font-size: 18px;\n  cursor: pointer;\n}\n.mtgf-santa__item-count[_ngcontent-%COMP%] {\n  width: 4%;\n  text-align: center;\n}\n.mtgf-santa__item-good[_ngcontent-%COMP%], .mtgf-santa__item-bad[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  width: 48%;\n}\n.mtgf-santa__item-bad[_ngcontent-%COMP%] {\n  border-left: 1px solid black;\n  background: #1f1d1d;\n  color: red;\n}\n.mtgf-santa__item-good[_ngcontent-%COMP%] {\n  background: green;\n  color: white;\n}\n.mtgf-santa__arrival[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 48px;\n  text-align: center;\n  background: linear-gradient(45deg, #006400 0%, #ffffff 53%, #b22222 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYW50YS9HOi9HaXQvbXRnLW11bHRpdG9vbC1hcHAvbXRnLW11bHRpdG9vbC1hcHAvc3JjL2FwcC9jb21wb25lbnRzL3NhbnRhL3NhbnRhLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbnRhL3NhbnRhLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNGSjtBRElJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDRk47QURLSTs7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNGTjtBRElJO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNGTjtBRElJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDRk47QURNRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlFQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NhbnRhL3NhbnRhLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm10Z2Ytc2FudGEge1xuICAmX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMzJweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgJl9faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmbGV4OiAxIDEgMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJi1jb3VudCB7XG4gICAgICB3aWR0aDogNCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi1nb29kLCAmLWJhZCB7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gICAgJi1iYWQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJhY2tncm91bmQ6ICMxZjFkMWQ7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAmLWdvb2Qge1xuICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgJl9fYXJyaXZhbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMDY0MDAgMCUsICNmZmZmZmYgNTMlLCAjYjIyMjIyIDEwMCUpO1xuICB9XG59XG4iLCIubXRnZi1zYW50YV9fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMzJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubXRnZi1zYW50YV9faGVhZGVyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm10Z2Ytc2FudGFfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZmxleDogMSAxIDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm10Z2Ytc2FudGFfX2l0ZW0tY291bnQge1xuICB3aWR0aDogNCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tdGdmLXNhbnRhX19pdGVtLWdvb2QsXG4ubXRnZi1zYW50YV9faXRlbS1iYWQge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICB3aWR0aDogNDglO1xufVxuLm10Z2Ytc2FudGFfX2l0ZW0tYmFkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogIzFmMWQxZDtcbiAgY29sb3I6IHJlZDtcbn1cbi5tdGdmLXNhbnRhX19pdGVtLWdvb2Qge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm10Z2Ytc2FudGFfX2Fycml2YWwge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA2NDAwIDAlLCAjZmZmZmZmIDUzJSwgI2IyMjIyMiAxMDAlKTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SantaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mtgf-santa',
          templateUrl: './santa.component.html',
          styleUrls: ['./santa.component.less']
        }]
      }], function () {
        return [{
          type: _services_santa_service__WEBPACK_IMPORTED_MODULE_1__["SantaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/wheel-page/wheel-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/wheel-page/wheel-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: WheelPageComponent */

  /***/
  function _src_app_components_wheelPage_wheelPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WheelPageComponent", function () {
      return WheelPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _fortune_wheel_fortune_wheel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../fortune-wheel/fortune-wheel.component */
    "./src/app/components/fortune-wheel/fortune-wheel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WheelPageComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C: ", ctx_r0.lastWinner, "\n");
      }
    }

    var WheelPageComponent = /*#__PURE__*/function () {
      function WheelPageComponent(dataService) {
        _classCallCheck(this, WheelPageComponent);

        this.dataService = dataService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          isExsDecks: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
          customDecks: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
          isLuckItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.redraw();
        this.dataService.init();
      }

      return _createClass(WheelPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.form.valueChanges.subscribe(function (value) {
            console.log(value);

            _this4.dataService.setOptions(value);
          });
          this.dataService.winner$.subscribe(function (winner) {
            console.log(winner);
            _this4.lastWinner = winner;
          });
        }
      }, {
        key: "redraw",
        value: function redraw() {
          this.dataService.setOptions(this.form.getRawValue());
        }
      }]);
    }();

    WheelPageComponent.ɵfac = function WheelPageComponent_Factory(t) {
      return new (t || WheelPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    WheelPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WheelPageComponent,
      selectors: [["mtgf-wheel-page"]],
      decls: 18,
      vars: 5,
      consts: [[1, "sticky-box"], [1, "input-container"], [1, "check-boxes", 3, "formGroup"], ["formControlName", "isExsDecks"], ["formControlName", "customDecks"], ["formControlName", "isLuckItems"], [1, "centered", 3, "options"], ["class", "winner", 4, "ngIf"], [1, "winner"]],
      template: function WheelPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-checkbox", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0422\u043E \u0447\u0442\u043E \u0435\u0441\u0442\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-checkbox", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-checkbox", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0411\u0430\u0444\u0444\u044B/\u0414\u0435\u0431\u0430\u0444\u0444\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mtgf-fortune-wheel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WheelPageComponent_div_17_Template, 2, 1, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 3, ctx.dataService.option$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastWinner);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _fortune_wheel_fortune_wheel_component__WEBPACK_IMPORTED_MODULE_4__["FortuneWheelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["@font-face {\n  font-family: 'Tektur';\n}\nbody {\n  background-color: #101010;\n  margin: 0;\n  font-family: 'Tektur', sans-serif;\n}\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n#status_label {\n  position: absolute;\n  top: 768px;\n  width: 768px;\n  color: black;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1.5em;\n  text-align: center;\n  pointer-events: none;\n}\n#drawing_canvas {\n  position: absolute;\n  top: -109px;\n}\n.check-boxes {\n  color: white;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n.input-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.sticky-box {\n  position: sticky;\n  bottom: 0;\n  background: #101010;\n}\nbutton {\n  background-color: #fbff00;\n  cursor: pointer;\n  font-family: 'Tektur', sans-serif;\n  font-size: 22px;\n  font-weight: 800;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  border: none;\n  padding: 8px;\n}\nbutton:hover {\n  background-color: #fbff00a0;\n}\nbutton:active {\n  background-color: #fbff00f0;\n}\n.mat-checkbox-layout {\n  border: 1px solid white;\n  border-radius: 4px;\n}\n.winner {\n  color: white;\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aGVlbC1wYWdlL0c6L0dpdC9tdGctbXVsdGl0b29sLWFwcC9tdGctbXVsdGl0b29sLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvd2hlZWwtcGFnZS93aGVlbC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3doZWVsLXBhZ2Uvd2hlZWwtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7QURHQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNKRjtBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNQRjtBRFVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEV0E7RUFDRSwyQkFBQTtBQ1RGO0FEWUE7RUFDRSwyQkFBQTtBQ1ZGO0FEYUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2hlZWwtcGFnZS93aGVlbC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnVGVrdHVyJztcbiAgLy9zcmM6IHVybCgnLi9mb250cy9UZWt0dXItVmFyaWFibGVGb250LnR0ZicpICBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnVGVrdHVyJywgc2Fucy1zZXJpZjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNzdGF0dXNfbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzY4cHg7XG4gIHdpZHRoOiA3NjhweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jZHJhd2luZ19jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwOXB4O1xufVxuXG4uY2hlY2stYm94ZXMge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3RpY2t5LWJveCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogIzEwMTAxMDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogJ1Rla3R1cicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZmMDBhMDtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZmMDBmMDtcbn1cblxuLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ud2lubmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1Rla3R1cic7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1Rla3R1cicsIHNhbnMtc2VyaWY7XG59XG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNzdGF0dXNfbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzY4cHg7XG4gIHdpZHRoOiA3NjhweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuI2RyYXdpbmdfY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMDlweDtcbn1cbi5jaGVjay1ib3hlcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0aWNreS1ib3gge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG59XG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmZjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnVGVrdHVyJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZmMDBhMDtcbn1cbmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmZjAwZjA7XG59XG4ubWF0LWNoZWNrYm94LWxheW91dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ud2lubmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WheelPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mtgf-wheel-page',
          templateUrl: './wheel-page.component.html',
          styleUrls: ['./wheel-page.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function _src_app_services_dataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _assets_luck_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/luck_items */
    "./src/app/assets/luck_items.ts");
    /* harmony import */


    var _assets_my_decks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assets/my-decks */
    "./src/app/assets/my-decks.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.optionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.option$ = this.optionSource.asObservable();
        this.winnersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.winner$ = this.winnersSource.asObservable();
      }

      return _createClass(DataService, [{
        key: "init",
        value: function init() {
          this.optionSource.next(this.getOptions());
          this.option$ = this.optionSource.asObservable(); // @ts-ignore

          this.winnersSource.next('');
          this.winner$ = this.winnersSource.asObservable();
        }
      }, {
        key: "addWinner",
        value: function addWinner(value) {
          this.winnersSource.next(value);
        }
      }, {
        key: "restartWinners",
        value: function restartWinners() {
          this.winnersSource.next('');
        }
      }, {
        key: "getOptions",
        value: function getOptions() {
          return _toConsumableArray(this.optionSource.getValue());
        }
      }, {
        key: "setOptions",
        value: function setOptions(settings) {
          var options = [];

          if (settings.isExsDecks) {
            options.push.apply(options, _toConsumableArray(_assets_my_decks__WEBPACK_IMPORTED_MODULE_3__["MY_DECKS"]));
          }

          if (settings.isLuckItems) {
            options.push.apply(options, _toConsumableArray(_assets_luck_items__WEBPACK_IMPORTED_MODULE_2__["luckItems"]));
          }

          if (settings.customDecks) {
            options.push.apply(options, _toConsumableArray(this.getCustomDecks()));
          }

          this.optionSource.next(options);
        }
      }, {
        key: "addCustomDeck",
        value: function addCustomDeck(value) {
          this.customDecks.push(value);
          localStorage.setItem('customDecks', JSON.stringify(this.customDecks));
        }
      }, {
        key: "getCustomDecks",
        value: function getCustomDecks() {
          this.customDecks = JSON.parse(localStorage.getItem('customDecks'));

          if (!this.customDecks) {
            this.customDecks = [];
          }

          return this.customDecks;
        }
      }, {
        key: "removeCustomDeck",
        value: function removeCustomDeck(value) {
          this.getCustomDecks();
          this.customDecks = this.customDecks.filter(function (deck) {
            return deck !== value;
          });
          localStorage.setItem('customDecks', JSON.stringify(this.customDecks));
        }
      }]);
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/santa.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/santa.service.ts ***!
    \*******************************************/

  /*! exports provided: SantaService */

  /***/
  function _src_app_services_santaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SantaService", function () {
      return SantaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_santa_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/santa-items */
    "./src/app/assets/santa-items.ts");

    var LEVELS = {
      1: 'LEVEL1',
      2: 'LEVEL1',
      3: 'LEVEL2',
      4: 'LEVEL2',
      5: 'LEVEL3',
      6: 'LEVEL3',
      7: 'LEVEL4',
      8: 'ARRIVAL'
    };

    var SantaService = /*#__PURE__*/function () {
      function SantaService() {
        _classCallCheck(this, SantaService);

        this._count = 0;
        this.allItems = [];
        this.restoreGoodAndBadItems();
      }

      return _createClass(SantaService, [{
        key: "count",
        get: function get() {
          return this._count;
        }
      }, {
        key: "getNextItems",
        value: function getNextItems() {
          if (this.count !== 0) {
            this.allItems[this.count - 1].shown = true;
          }

          this._count++;

          if (this.count > 8) {
            this._count = 0;
            this.allItems = [];
            localStorage.removeItem('SANTA_GAME');
          } else {
            var result = this.getGoodAndBadItems();
            result.arrival = this.count === 8;
            this.storeGoodAndBadItems(result);
          }

          return this.allItems;
        }
      }, {
        key: "getItems",
        value: function getItems() {
          if (!this.allItems.length) {
            return this.getNextItems();
          }

          return this.allItems;
        }
      }, {
        key: "showItem",
        value: function showItem() {
          this.allItems[this.count - 1].shown = true;
          localStorage.setItem('SANTA_GAME', JSON.stringify(this.allItems));
        }
      }, {
        key: "getGoodAndBadItems",
        value: function getGoodAndBadItems() {
          var _a, _b;

          var goodItems = _assets_santa_items__WEBPACK_IMPORTED_MODULE_1__["SANTA_GOOD"][LEVELS[this.count]];
          var badItems = _assets_santa_items__WEBPACK_IMPORTED_MODULE_1__["SANTA_BAD"][LEVELS[this.count]];
          var result = {};

          if (goodItems.length) {
            var goodItem = goodItems[this.getRandomInt(goodItems.length)];

            while ((_a = this.allItems) === null || _a === void 0 ? void 0 : _a.find(function (item) {
              return item.good === goodItem;
            })) {
              goodItem = goodItems[this.getRandomInt(goodItems.length)];
            }

            result.good = goodItem;
          }

          if (badItems.length) {
            var badItem = badItems[this.getRandomInt(badItems.length)];

            while ((_b = this.allItems) === null || _b === void 0 ? void 0 : _b.find(function (item) {
              return item.bad === badItem;
            })) {
              badItem = badItems[this.getRandomInt(badItems.length)];
            }

            result.bad = badItem;
          }

          return result;
        }
      }, {
        key: "storeGoodAndBadItems",
        value: function storeGoodAndBadItems(item) {
          this.allItems.push(item);
          localStorage.setItem('SANTA_GAME', JSON.stringify(this.allItems));
        }
      }, {
        key: "restoreGoodAndBadItems",
        value: function restoreGoodAndBadItems() {
          var _a;

          this.allItems = (_a = JSON.parse(localStorage.getItem('SANTA_GAME'))) !== null && _a !== void 0 ? _a : [];
          this._count = this.allItems.length;
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
      }]);
    }();

    SantaService.ɵfac = function SantaService_Factory(t) {
      return new (t || SantaService)();
    };

    SantaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SantaService,
      factory: SantaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SantaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\Git\mtg-multitool-app\mtg-multitool-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map