(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

module.exports = "<app-form></app-form>\n\n"

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
        this.title = 'schmucke-pool';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"container\">\n        <div class=\"p-2\"></div>\n        <div class=\"row\">\n            <div class=\"col-12 text-center\">\n      <span style=\"font-size: 4em;\" class=\"text-nowrap\">\n         <i class=\" fas fa-swimming-pool\"></i> CALCULATOR\n      </span>\n            </div>\n        </div>\n\n        <div class=\"p-2\"></div>\n\n        <div class=\"row\">\n\n            <div class=\"col-lg-4\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon2\">Mittel <span class=\"text-muted\">(m³)</span></span>\n                    </div>\n                    <input type=\"number\" (change)=\"berechnen()\" class=\"form-control\" placeholder=\"Wirkungs Grad\"\n                           aria-label=\"Wirkungs Grad\" aria-describedby=\"basic-addon2\" name=\"wirkungsGrad\"\n                           id=\"wirkungsGradKubikmeter\" [(ngModel)]=\"werte.wirkungsGradKubikmeter\">\n                </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon6\">Mittel <span class=\"text-muted\">(gr)</span></span>\n                    </div>\n                    <input type=\"number\" (change)=\"berechnen()\" class=\"form-control\" placeholder=\"Wirkungs Grad\"\n                           aria-label=\"Wirkungs Grad\" aria-describedby=\"basic-addon2\" name=\"wirkungsGrad\"\n                           id=\"wirkungsGradGramm\" [(ngModel)]=\"werte.wirkungsGradGramm\">\n                </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon7\">ΔpH </span>\n                    </div>\n                    <input type=\"number\" (change)=\"berechnen()\" class=\"form-control\" placeholder=\"Wirkungs Grad\"\n                           aria-label=\"Wirkungs Grad\" aria-describedby=\"basic-addon2\" name=\"wirkungsGrad\"\n                           id=\"wirkungsGradKubikmeter\" [(ngModel)]=\"werte.wirkungsGradPHWert\">\n                </div>\n            </div>\n\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">Poolsize&nbsp;<i class=\"fas fa-tint\"></i>&nbsp;<span\n                                class=\"text-muted\">(m³)</span></span>\n                    </div>\n                    <input type=\"number\" (change)=\"berechnen()\" class=\"form-control\" placeholder=\"Pool\"\n                           aria-label=\"Pool\" aria-describedby=\"basic-addon1\" name=\"poolSize\" id=\"poolSize\"\n                           [(ngModel)]=\"werte.poolSize\">\n                </div>\n            </div>\n\n            <div class=\"col-lg-6\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon3\">pH-Wert&nbsp;<i\n                                class=\"fas fa-eye-dropper\"></i></span>\n                    </div>\n                    <input type=\"number\" (change)=\"berechnen()\" class=\"form-control\" placeholder=\"pH-Wert eintragen\"\n                           aria-label=\"pH-Wert eintragen\" aria-describedby=\"basic-addon3\" name=\"pHWert\" id=\"pHWert\"\n                           [(ngModel)]=\"werte.pHWert\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"ergebnis\">\n            <div class=\"col-12 text-center\">\n                <div>\n          <span style=\"font-size: 4em;\">\n            <i class=\"fas fa-tablets\"></i> {{ergebnis}}\n        </span>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_werte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/werte */ "./src/app/models/werte.ts");



var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.content = __webpack_require__(/*! ../../assets/mydata.json */ "./src/assets/mydata.json");
        this.werte = new _models_werte__WEBPACK_IMPORTED_MODULE_2__["Werte"]();
        this.werte.poolSize = this.content.poolSize;
        this.werte.pHWert = this.content.pHWert;
        this.werte.wirkungsGradGramm = this.content.wirkungsGradGramm;
        this.werte.wirkungsGradKubikmeter = this.content.wirkungsGradKubikmeter;
        this.werte.wirkungsGradPHWert = this.content.wirkungsGradPHWert;
        this.ergebnis = null;
    }
    FormComponent.prototype.ngOnInit = function () {
        console.log(this.content);
    };
    FormComponent.prototype.berechnen = function () {
        if (this.werte.pHWert <= 7.4) {
            this.ergebnis = 'Nichts hinzugeben!';
        }
        if (this.werte.pHWert > 7.4) {
            this.ergebnis = Math.round((this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (this.werte.pHWert - 7.4) / this.werte.wirkungsGradPHWert) + ' Gramm';
            console.log('Zuviel:' + (this.werte.pHWert - 7.4));
            console.log('Gramm um den PH-Wert um 0.1 zu senken:' + (this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter));
            console.log(this.werte.wirkungsGradKubikmeter);
            console.log(this.werte.wirkungsGradGramm);
            console.log(this.werte.poolSize);
            console.log((this.werte.poolSize * this.werte.wirkungsGradGramm / this.werte.wirkungsGradKubikmeter) * (this.werte.pHWert - 7.4) / this.werte.wirkungsGradPHWert);
        }
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/models/werte.ts":
/*!*********************************!*\
  !*** ./src/app/models/werte.ts ***!
  \*********************************/
/*! exports provided: Werte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Werte", function() { return Werte; });
var Werte = /** @class */ (function () {
    function Werte() {
    }
    return Werte;
}());



/***/ }),

/***/ "./src/assets/mydata.json":
/*!********************************!*\
  !*** ./src/assets/mydata.json ***!
  \********************************/
/*! exports provided: poolSize, pHWert, wirkungsGradKubikmeter, wirkungsGradGramm, wirkungsGradPHWert, default */
/***/ (function(module) {

module.exports = {"poolSize":14.333,"pHWert":null,"wirkungsGradKubikmeter":10,"wirkungsGradGramm":100,"wirkungsGradPHWert":0.1};

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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ml029/Documents/PHP Storm/schmucke-pool/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map