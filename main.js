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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_user_employee_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee-user/employee-user.component */ "./src/app/components/employee-user/employee-user.component.ts");
/* harmony import */ var _components_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scanner/scanner.component */ "./src/app/components/scanner/scanner.component.ts");
/* harmony import */ var _components_bar_code_scanner_bar_code_scanner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bar-code-scanner/bar-code-scanner.component */ "./src/app/components/bar-code-scanner/bar-code-scanner.component.ts");
/* harmony import */ var _components_quagga_quagga_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/quagga/quagga.component */ "./src/app/components/quagga/quagga.component.ts");
/* harmony import */ var _components_ang_quagga_ang_quagga_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ang-quagga/ang-quagga.component */ "./src/app/components/ang-quagga/ang-quagga.component.ts");
/* harmony import */ var _components_image_capture_image_capture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/image-capture/image-capture.component */ "./src/app/components/image-capture/image-capture.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Components









var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'employeelist', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"] },
    { path: 'employee/:id', component: _components_employee_user_employee_user_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeUserComponent"] },
    { path: 'scanner', component: _components_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_7__["ScannerComponent"] },
    { path: 'bar-codescanner', component: _components_bar_code_scanner_bar_code_scanner_component__WEBPACK_IMPORTED_MODULE_8__["BarCodeScannerComponent"] },
    { path: 'quagga', component: _components_quagga_quagga_component__WEBPACK_IMPORTED_MODULE_9__["QuaggaComponent"] },
    { path: 'ang-quagga', component: _components_ang_quagga_ang_quagga_component__WEBPACK_IMPORTED_MODULE_10__["AngQuaggaComponent"] },
    { path: 'image-capture', component: _components_image_capture_image_capture_component__WEBPACK_IMPORTED_MODULE_11__["ImageCaptureComponent"] },
];
//ScannerComponent
//BarCodeScannerComponent
//QuaggaComponent
//AngQuaggaComponent
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-barcode-scanner */ "./node_modules/ngx-barcode-scanner/fesm5/ngx-barcode-scanner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_user_employee_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/employee-user/employee-user.component */ "./src/app/components/employee-user/employee-user.component.ts");
/* harmony import */ var _components_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/scanner/scanner.component */ "./src/app/components/scanner/scanner.component.ts");
/* harmony import */ var _components_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/scanner/scanner.service */ "./src/app/components/scanner/scanner.service.ts");
/* harmony import */ var _components_bar_code_scanner_bar_code_scanner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/bar-code-scanner/bar-code-scanner.component */ "./src/app/components/bar-code-scanner/bar-code-scanner.component.ts");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var _components_quagga_quagga_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/quagga/quagga.component */ "./src/app/components/quagga/quagga.component.ts");
/* harmony import */ var _components_ang_quagga_ang_quagga_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/ang-quagga/ang-quagga.component */ "./src/app/components/ang-quagga/ang-quagga.component.ts");
/* harmony import */ var _components_image_capture_image_capture_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/image-capture/image-capture.component */ "./src/app/components/image-capture/image-capture.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_10__["MainNavComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeListComponent"],
                _components_employee_user_employee_user_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeUserComponent"],
                _components_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_21__["ScannerComponent"],
                _components_bar_code_scanner_bar_code_scanner_component__WEBPACK_IMPORTED_MODULE_23__["BarCodeScannerComponent"],
                _components_quagga_quagga_component__WEBPACK_IMPORTED_MODULE_25__["QuaggaComponent"],
                _components_ang_quagga_ang_quagga_component__WEBPACK_IMPORTED_MODULE_26__["AngQuaggaComponent"],
                _components_image_capture_image_capture_component__WEBPACK_IMPORTED_MODULE_27__["ImageCaptureComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_17__["BarecodeScannerLivestreamModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_24__["NgxBarcodeModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _components_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_22__["QrCodeReader"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ang-quagga/ang-quagga.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ang-quagga/ang-quagga.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ang-quagga/ang-quagga.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ang-quagga/ang-quagga.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main-nav>\n  <p>\n    ang-quagga works!\n  </p>\n</main-nav>"

/***/ }),

/***/ "./src/app/components/ang-quagga/ang-quagga.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ang-quagga/ang-quagga.component.ts ***!
  \***************************************************************/
/*! exports provided: AngQuaggaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngQuaggaComponent", function() { return AngQuaggaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AngQuaggaComponent = /** @class */ (function () {
    function AngQuaggaComponent() {
    }
    AngQuaggaComponent.prototype.ngOnInit = function () {
    };
    AngQuaggaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ang-quagga',
            template: __webpack_require__(/*! ./ang-quagga.component.html */ "./src/app/components/ang-quagga/ang-quagga.component.html"),
            styles: [__webpack_require__(/*! ./ang-quagga.component.css */ "./src/app/components/ang-quagga/ang-quagga.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngQuaggaComponent);
    return AngQuaggaComponent;
}());



/***/ }),

/***/ "./src/app/components/bar-code-scanner/bar-code-scanner.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/bar-code-scanner/bar-code-scanner.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .errspan {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: 20px;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: red;\r\n    cursor:pointer;\r\n}\r\n  \r\n  @media only screen and (min-width: 992px) {\r\n    \r\n    form{\r\n        margin-left: 190px;\r\n    }\r\n    \r\n} "

/***/ }),

/***/ "./src/app/components/bar-code-scanner/bar-code-scanner.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/bar-code-scanner/bar-code-scanner.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav>\n\n  \n  <select name=\"types\" [(ngModel)]=\"selectedLevel\" (change)=\"selected()\">\n    <option value=\"code_128\">code_128_reader</option>\n    <option value=\"ean\">ean_reader</option>\n    <option value=\"code_39\">code_39_reader</option>\n    <option value=\"code_39_vin\">code_39_vin_reader</option>\n    <option value=\"codebar\">codabar_reader</option>\n    <option value=\"upc\">upc_reader</option>\n    <option value=\"upc_e\">upc_e_reader</option>\n    <option value=\"12of5\">i2of5_reader</option>\n  </select>\n\n\n\n\n<barcode-scanner-livestream  type=\"{{selectedLevel}}\" (valueChanges)=\"onValueChanges($event)\"></barcode-scanner-livestream>\n  \n  <div [hidden]=\"!barcodeValue\">\n      {{barcodeValue}}\n  </div>\n\n</main-nav>\n\n"

/***/ }),

/***/ "./src/app/components/bar-code-scanner/bar-code-scanner.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/bar-code-scanner/bar-code-scanner.component.ts ***!
  \***************************************************************************/
/*! exports provided: BarCodeScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarCodeScannerComponent", function() { return BarCodeScannerComponent; });
/* harmony import */ var ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-barcode-scanner */ "./node_modules/ngx-barcode-scanner/fesm5/ngx-barcode-scanner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, OnInit } from '@angular/core';


var BarCodeScannerComponent = /** @class */ (function () {
    function BarCodeScannerComponent() {
    }
    BarCodeScannerComponent.prototype.ngAfterViewInit = function () {
    };
    BarCodeScannerComponent.prototype.selected = function () {
        // console.log(this.selectedLevel);
        this.barecodeScanner.start();
    };
    BarCodeScannerComponent.prototype.onValueChanges = function (result) {
        this.barcodeValue = result.codeResult.code;
        this.name = this.barcodeValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__["BarecodeScannerLivestreamComponent"]),
        __metadata("design:type", ngx_barcode_scanner__WEBPACK_IMPORTED_MODULE_0__["BarecodeScannerLivestreamComponent"])
    ], BarCodeScannerComponent.prototype, "barecodeScanner", void 0);
    BarCodeScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bar-code-scanner',
            template: __webpack_require__(/*! ./bar-code-scanner.component.html */ "./src/app/components/bar-code-scanner/bar-code-scanner.component.html"),
            styles: [__webpack_require__(/*! ./bar-code-scanner.component.css */ "./src/app/components/bar-code-scanner/bar-code-scanner.component.css")]
        })
    ], BarCodeScannerComponent);
    return BarCodeScannerComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\r\n    color: rgba(0, 0, 0, 0.54);\r\n  }\r\n\r\n\r\n  .is-active {\r\n    background-color: red;\r\n}\r\n\r\n\r\n  .mat-list-item:hover {\r\n    background-color: orange;\r\n  }"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav>\n  <mat-list >\n      <!-- <md-icon icon=\"backspace\"></md-icon>  -->\n    \n    <h3 mat-subheader>Employee List</h3>\n    <mat-list-item *ngFor=\"let obj of data\" style=\"cursor: pointer;\"  [routerLink]=\"[ '/employee',obj.login]\" >\n      <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n      <img matListAvatar [src]=\"obj.avatar_url\" alt=\"Image not available\">\n      <h4 mat-line>{{obj.login}}</h4>\n      <p mat-line> {{obj.node_id }} </p>\n    </mat-list-item>\n\n  </mat-list>  \n</main-nav>"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(dataservice) {
        this.dataservice = dataservice;
        this.data = [];
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getGitUsers().subscribe(function (users) {
            //  console.log(users);
            _this.data = users;
        });
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-user/employee-user.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-user/employee-user.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/employee-user/employee-user.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-user/employee-user.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav>\n    \n    <span >\n        <i class=\"fa fa-arrow-circle-left\" style=\"font-size:48px;color:red\" (click)=\"myFunction()\"></i>\n   </span>\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n            \n            <mat-card-title> <label for=\"location\">Location:</label>\n              <h1>{{data.location}}</h1></mat-card-title>\n            <mat-card-subtitle> <label for=\"Joined\">Joined:</label>\n              <h1>{{data.created_at | date}}</h1></mat-card-subtitle>\n          </mat-card-header>\n\n\n        <img mat-card-image [src]=\"data.avatar_url\" alt=\"Image Missing\" height=\"600px;\" width=\"120px;\">\n        <mat-card-content>\n          <label for=\"name\">Name:</label>\n          <h1>{{data.name}}</h1>\n\n          <label for=\"Followers\">Followers:</label>\n          <h1>{{data.followers}}</h1>\n\n\n          <label for=\"following\">Following:</label>\n          <h1>{{data.following}}</h1>\n\n\n        </mat-card-content>\n\n\n      \n      </mat-card>\n\n\n\n</main-nav>\n\n"

/***/ }),

/***/ "./src/app/components/employee-user/employee-user.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-user/employee-user.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeUserComponent", function() { return EmployeeUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeUserComponent = /** @class */ (function () {
    function EmployeeUserComponent(route, dataservice, router) {
        this.route = route;
        this.dataservice = dataservice;
        this.router = router;
        this.data = [];
    }
    EmployeeUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var status = localStorage.getItem('logged');
        console.log(status);
        if (status !== 'true') {
            //console.log("Getting in");
            console.log("getting in");
            this.router.navigate(['/login']);
        }
        this.sub = this.route.params.subscribe(function (params) {
            _this.name = params['id']; // (+) converts string 'id' to a number
            console.log(_this.name);
            _this.dataservice.getGitUsersbyid(_this.name).subscribe(function (user_details) {
                console.log([user_details]);
                _this.data = user_details;
            });
            // In a real app: dispatch action to load the details here.
        });
    };
    EmployeeUserComponent.prototype.myFunction = function () {
        console.log("function getting fired");
        window.history.back();
    };
    EmployeeUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-user',
            template: __webpack_require__(/*! ./employee-user.component.html */ "./src/app/components/employee-user/employee-user.component.html"),
            styles: [__webpack_require__(/*! ./employee-user.component.css */ "./src/app/components/employee-user/employee-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeUserComponent);
    return EmployeeUserComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\r\n    margin-bottom: 48px;\r\n  }\r\n\r\n  ::ng-deep mat-tab-header {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n  }\r\n\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav>\r\n    <!-- style=\"width:800px; margin:0 auto;\"  -->\r\n   <div >\r\n    \r\n      <mat-tab-group mat-align-tabs=\"center\">\r\n          <mat-tab label=\"Pending\">\r\n              <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                  <mat-grid-tile\r\n                      *ngFor=\"let tile of tiles\"\r\n                      [colspan]=\"tile.cols\"\r\n                      [rowspan]=\"tile.rows\"\r\n                      [style.background]=\"tile.color\">\r\n                    {{tile.text}}\r\n                  </mat-grid-tile>\r\n                </mat-grid-list>\r\n          </mat-tab>\r\n          <mat-tab label=\"Collected\">\r\n              \r\n          </mat-tab>\r\n          <mat-tab label=\"Total\">\r\n              <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                  <mat-grid-tile\r\n                      *ngFor=\"let tile of tiles\"\r\n                      [colspan]=\"tile.cols\"\r\n                      [rowspan]=\"tile.rows\"\r\n                      [style.background]=\"tile.color\">\r\n                    {{tile.text}}\r\n                  </mat-grid-tile>\r\n                </mat-grid-list>\r\n          </mat-tab>\r\n     </mat-tab-group>\r\n     \r\n   </div>\r\n      \r\n\r\n   \r\n</main-nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.data = [];
        this.tiles = [
            { text: 'two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        // this.dataservice.listallcustomersforcurrentmonth().subscribe(customers =>{
        //  console.log(customers.result);
        //   this.data = customers.result;
        // });
        this.data = [
            {
                name: "ram",
                age: "21",
                gender: "male",
                address: "chennai"
            },
            {
                name: "jiva",
                age: "21",
                gender: "male",
                address: "chennai"
            }, {
                name: "appu",
                age: "24",
                gender: "male",
                address: "madurai"
            },
        ];
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/image-capture/image-capture.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/image-capture/image-capture.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/image-capture/image-capture.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-capture/image-capture.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<main-nav>\n    <!-- <input type=\"file\" capture=\"camera\" accept=\"image/*\" id=\"cameraInput\" name=\"cameraInput\" (change)=\"onFileSelected($event)\">\n<button type=\"button\" (click)=\"onUpload()\">Upload File</button>\n\n\n      <img id=\"blah\" src=\"#\" alt=\"your image\" > -->\n\n      <input type='file' capture=\"camera\" accept=\"image/*\" id=\"cameraInput\" name=\"cameraInput\" (change)=\"readURL($event);\" />\n      <button type=\"button\" (click)=\"onUpload()\">Upload File</button>\n\n<br>\n<br>\n<img id=\"blah\" [src]=\"imageSrc || 'http://placehold.it/180'\" alt=\"your image\" width=\"80\" height=\"80\"/>\n\n<h1>{{address}}</h1>    \n\n</main-nav>"

/***/ }),

/***/ "./src/app/components/image-capture/image-capture.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-capture/image-capture.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageCaptureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCaptureComponent", function() { return ImageCaptureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageCaptureComponent = /** @class */ (function () {
    function ImageCaptureComponent(dataservice) {
        this.dataservice = dataservice;
        this.data = [];
        this.file = null;
    }
    ImageCaptureComponent.prototype.ngOnInit = function () {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                //navigator.geolocation.getCurrentPosition(this.showPosition);
            }
            else {
                var error = "Geolocation is not supported by this browser.";
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Address", (error).toString());
            }
        }
        function showPosition(position) {
            // this.lat = position.coords.latitude;
            // this.lon = position.coords.longitude;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire((position.coords.longitude).toString(), (position.coords.latitude).toString());
        }
        ;
        getLocation();
    };
    ImageCaptureComponent.prototype.readURL = function (event) {
        var _this = this;
        console.log("Reading url initilises");
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.imageSrc = reader_1.result; };
            reader_1.readAsDataURL(this.file);
            // console.log(this.file);
        }
    };
    ImageCaptureComponent.prototype.onUpload = function () {
        console.log("Latitude ----> " + this.lat);
        // console.log(this.file);
        // console.log(this.geolocationPosition.coords);
        // console.log(this.geolocationPosition.coords.latitude);
        // console.log(this.geolocationPosition.coords.longitude);
        //Swal.fire("Address", (this.geolocationPosition.coords.longitude).toString());
        // this.dataservice.getGoogleMapsresult(this.geolocationPosition.coords.latitude,this.geolocationPosition.coords.longitude).subscribe(result =>{
        // this.dataservice.getGoogleMapsresult(this.lat,this.lon).subscribe(result =>{
        //   //Swal.fire("Done", "Subscribed into service");
        //    Swal.fire("Address", result.error_message);
        //      this.data = result;
        //   this.address = result.error_message;
        //    });
        //this.address = "10-337,Kuber appartments, 6th Main Rd, Vijaya Nagar, Velachery, Chennai, Tamil Nadu 600042, India";
    };
    ImageCaptureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-capture',
            template: __webpack_require__(/*! ./image-capture.component.html */ "./src/app/components/image-capture/image-capture.component.html"),
            styles: [__webpack_require__(/*! ./image-capture.component.css */ "./src/app/components/image-capture/image-capture.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ImageCaptureComponent);
    return ImageCaptureComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color:#5286F3;\r\n    font-size:14px;\r\n    color:#fff;\r\n}\r\n.simple-login-container{\r\n    width:500px;\r\n    max-width:100%;\r\n    margin:50px auto;\r\n    \r\n}\r\n.simple-login-container h2{\r\n    text-align:center;\r\n    font-size:20px;\r\n}\r\n.simple-login-container .btn-login{\r\n    background-color:#FF5964;\r\n    color:#fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <div class=\"simple-login-container\">\r\n    <h2>Login Form</h2>\r\n    <form  #myform=\"ngForm\"  (ngSubmit)=\"register(myform)\" class=\"form form-register\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"user_name\" required=\"true\" placeholder=\"Username\" ngModel >\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 form-group\">\r\n            <input type=\"password\" placeholder=\"Enter your Password\" name=\"password\" required=\"true\" class=\"form-control\" ngModel >\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 form-group\">\r\n            <button type=\"submit\" class=\"btn btn-block btn-login\" >Login </button>\r\n            \r\n        </div>\r\n    </div>\r\n  </form>\r\n  \r\n  </div>\r\n\r\n\r\n  <!-- <button mat-raised-button\tcolor=\"primary\">Click me!</button> -->\r\n\r\n "

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.arr = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.setItem('logged', "false");
    };
    LoginComponent.prototype.register = function (form) {
        this.arr = form.value;
        var user_name = "godb";
        var password = "godb";
        console.log(this.arr);
        if (this.arr.user_name !== user_name || this.arr.password !== password) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Login failed", 'Please Try again with correct credentials');
        }
        else {
            this.router.navigate(['/employeelist']);
            localStorage.setItem('logged', "true");
        }
        // this.dataservice.checklogin(this.arr).subscribe(check =>{
        //   console.log(check);
        //   if(check.status != 200){
        //     Swal.fire(check.message, 'Please Try again with correct credentials');
        //   }
        //   else{
        //     Swal.fire(check.message, 'Success');
        //     this.router.navigate(['/home']);
        //   }
        // });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/quagga/quagga.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/quagga/quagga.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* In order to place the tracking correctly */\r\n canvas.drawing, canvas.drawingBuffer {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/quagga/quagga.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/quagga/quagga.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main-nav>\n  <p>\n    quagga works!\n  </p>\n\n   <!-- Div to show the scanner -->\n   <div id=\"scanner-container\"></div>\n   <input type=\"button\" id=\"btn\" value=\"Start/Stop the scanner\"  (click)=\"toggler()\"/>\n\n\n</main-nav>"

/***/ }),

/***/ "./src/app/components/quagga/quagga.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/quagga/quagga.component.ts ***!
  \*******************************************************/
/*! exports provided: QuaggaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuaggaComponent", function() { return QuaggaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quagga */ "./node_modules/quagga/dist/quagga.min.js");
/* harmony import */ var quagga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quagga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // ES6

var QuaggaComponent = /** @class */ (function () {
    function QuaggaComponent() {
    }
    QuaggaComponent.prototype.ngOnInit = function () {
    };
    QuaggaComponent.prototype.startScanner = function () {
        quagga__WEBPACK_IMPORTED_MODULE_1___default.a.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#scanner-container'),
                constraints: {
                    width: 480,
                    height: 320,
                    facingMode: "environment"
                },
            },
            decoder: {
                readers: [
                    "code_128_reader",
                    "ean_reader",
                    "ean_8_reader",
                    "code_39_reader",
                    "code_39_vin_reader",
                    "codabar_reader",
                    "upc_reader",
                    "upc_e_reader",
                    "i2of5_reader"
                ],
                debug: {
                    showCanvas: true,
                    showPatches: true,
                    showFoundPatches: true,
                    showSkeleton: true,
                    showLabels: true,
                    showPatchLabels: true,
                    showRemainingPatchLabels: true,
                    boxFromPatches: {
                        showTransformed: true,
                        showTransformedBox: true,
                        showBB: true
                    }
                }
            },
        }, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Initialization finished. Ready to start");
            quagga__WEBPACK_IMPORTED_MODULE_1___default.a.start();
            // Set flag to is running
            this._scannerIsRunning = true;
        });
        quagga__WEBPACK_IMPORTED_MODULE_1___default.a.onProcessed(function (result) {
            var drawingCtx = quagga__WEBPACK_IMPORTED_MODULE_1___default.a.canvas.ctx.overlay, drawingCanvas = quagga__WEBPACK_IMPORTED_MODULE_1___default.a.canvas.dom.overlay;
            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        quagga__WEBPACK_IMPORTED_MODULE_1___default.a.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                    });
                }
                if (result.box) {
                    quagga__WEBPACK_IMPORTED_MODULE_1___default.a.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
                }
                if (result.codeResult && result.codeResult.code) {
                    quagga__WEBPACK_IMPORTED_MODULE_1___default.a.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                }
            }
        });
        quagga__WEBPACK_IMPORTED_MODULE_1___default.a.onDetected(function (result) {
            console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Barcode detected and processed : [" + result.codeResult.code + "]", result);
        });
    };
    QuaggaComponent.prototype.toggler = function () {
        console.log("quagga");
        if (this._scannerIsRunning) {
            quagga__WEBPACK_IMPORTED_MODULE_1___default.a.stop();
        }
        else {
            this.startScanner();
        }
    };
    QuaggaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quagga',
            template: __webpack_require__(/*! ./quagga.component.html */ "./src/app/components/quagga/quagga.component.html"),
            styles: [__webpack_require__(/*! ./quagga.component.css */ "./src/app/components/quagga/quagga.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuaggaComponent);
    return QuaggaComponent;
}());



/***/ }),

/***/ "./src/app/components/scanner/scanner.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/scanner/scanner.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .errspan {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: 20px;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: red;\r\n    cursor:pointer;\r\n}\r\n  \r\n  @media only screen and (min-width: 992px) {\r\n    \r\n    form{\r\n        margin-left: 190px;\r\n    }\r\n    \r\n} "

/***/ }),

/***/ "./src/app/components/scanner/scanner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/scanner/scanner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main-nav>\n\n  <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Scanner input\" [(ngModel)]=\"name\" #ctrl=\"ngModel\" name=\"scanner\">\n      \n    </mat-form-field>\n  \n    <br> \n    <input  type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\"  placeholder=\"QR-Scanner input\">\n     \n    <span>\n        <i class=\"fa fa-qrcode errspan\" > </i>    \n      </span>\n\n\n  </form>\n\n</main-nav>\n\n\n"

/***/ }),

/***/ "./src/app/components/scanner/scanner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/scanner/scanner.component.ts ***!
  \*********************************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scanner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanner.service */ "./src/app/components/scanner/scanner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScannerComponent = /** @class */ (function () {
    function ScannerComponent(qrReader) {
        this.qrReader = qrReader;
        this.name = '';
    }
    //implements OnDestroy
    // ngOnDestroy(): void {
    //   this.subscription.unsubscribe();
    // }
    ScannerComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.subscription = this.qrReader.decode(file)
            .subscribe(function (decodedString) {
            // console.log(decodedString);
            _this.name = decodedString;
        });
    };
    ScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scanner',
            template: __webpack_require__(/*! ./scanner.component.html */ "./src/app/components/scanner/scanner.component.html"),
            styles: [__webpack_require__(/*! ./scanner.component.css */ "./src/app/components/scanner/scanner.component.css")]
        }),
        __metadata("design:paramtypes", [_scanner_service__WEBPACK_IMPORTED_MODULE_1__["QrCodeReader"]])
    ], ScannerComponent);
    return ScannerComponent;
}());



/***/ }),

/***/ "./src/app/components/scanner/scanner.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/scanner/scanner.service.ts ***!
  \*******************************************************/
/*! exports provided: QrCodeReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeReader", function() { return QrCodeReader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QrCodeReader = /** @class */ (function () {
    function QrCodeReader() {
    }
    QrCodeReader.prototype.decode = function (file) {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var data = e.target.result;
                //console.log(data);
                qrcode.callback = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                qrcode.decode(data);
            };
        });
    };
    QrCodeReader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], QrCodeReader);
    return QrCodeReader;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n}\r\n\r\n.is-active {\r\n  background-color: cyan;\r\n}\r\n\r\n.mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.title-center {\r\n  margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"false\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar color=\"primary\">Hello Admin...!!!</mat-toolbar>\r\n    <mat-nav-list>\r\n\r\n      <!-- <a mat-list-item routerLink=\"/home\" [routerLinkActive]=\"['is-active']\">Link 1</a> -->\r\n      <a mat-list-item routerLink=\"/employeelist\" [routerLinkActive]=\"['is-active']\">Employee List</a>\r\n       <!-- <a mat-list-item routerLink=\"/scanner\" [routerLinkActive]=\"['is-active']\">QR Code Scanner</a> -->\r\n    <a mat-list-item routerLink=\"/bar-codescanner\" [routerLinkActive]=\"['is-active']\">Bar Code Scanner</a>\r\n      <!-- <a mat-list-item routerLink=\"/quagga\" [routerLinkActive]=\"['is-active']\">Quagga</a>\r\n    <a mat-list-item routerLink=\"/ang-quagga\" [routerLinkActive]=\"['is-active']\">Ang-Quagga</a> -->\r\n       <!--   <a mat-list-item routerLink=\"/home\" [routerLinkActive]=\"['is-active']\">Link 7</a>\r\n      <a mat-list-item routerLink=\"/home\" [routerLinkActive]=\"['is-active']\">Link 8</a>\r\n      <a mat-list-item routerLink=\"/home\" [routerLinkActive]=\"['is-active']\">Link 9</a> -->\r\n      <a mat-list-item routerLink=\"/image-capture\" [routerLinkActive]=\"['is-active']\">Image-Capture</a>\r\n      <a mat-list-item routerLink=\"/login\" [routerLinkActive]=\"['is-active']\">Logout</a>\r\n\r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n\r\n      <span class=\"title-center\">Employee Portal</span>\r\n      \r\n    </mat-toolbar>\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.giturl = "https://api.github.com/users";
    }
    DataService.prototype.getGitUsers = function () {
        return this.http.get(this.giturl);
    };
    DataService.prototype.getGitUsersbyid = function (name) {
        return this.http.get(this.giturl + '/' + name);
    };
    DataService.prototype.getGoogleMapsresult = function (lat, lon) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyAxBm68HZLg514natiAMd4ET9-LLoGSzuA");
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Jagadeesh\Projects\LeaRNING\Angular\EmployeePortal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map