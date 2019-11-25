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

/***/ "./src/app/_resolvers/comment-edit.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/_resolvers/comment-edit.resolver.ts ***!
  \*****************************************************/
/*! exports provided: CommentEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentEditResolver", function() { return CommentEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/comment.service */ "./src/app/_services/comment.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentEditResolver = /** @class */ (function () {
    function CommentEditResolver(commentService, alertify, router) {
        this.commentService = commentService;
        this.alertify = alertify;
        this.router = router;
    }
    CommentEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.commentService.getComment(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/comment-list']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    CommentEditResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommentEditResolver);
    return CommentEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/user.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/_resolvers/user.resolver.ts ***!
  \*********************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserResolver = /** @class */ (function () {
    function UserResolver(userService, alertify, router) {
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
    }
    UserResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieve username');
            _this.router.navigate(['/comment-list']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/comment.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/comment.service.ts ***!
  \**********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    CommentService.prototype.submit = function (model) {
        return this.http.post(this.baseUrl + 'comment/submit', model);
    };
    CommentService.prototype.getComment = function (id) {
        return this.http.get(this.baseUrl + 'comment/' + id);
    };
    CommentService.prototype.getComments = function () {
        return this.http.get(this.baseUrl + 'comment');
    };
    CommentService.prototype.submitMulti = function (comments) {
        return this.http.post(this.baseUrl + 'comment/submitmulti', comments);
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.baseUrl + 'values/user');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-comment></app-comment> -->\r\n"

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
        this.title = 'Lucid Portal App';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/comment.service */ "./src/app/_services/comment.service.ts");
/* harmony import */ var _comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment/comment-list/comment-list.component */ "./src/app/comment/comment-list/comment-list.component.ts");
/* harmony import */ var _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment/comment-create/comment-create.component */ "./src/app/comment/comment-create/comment-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _comment_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comment/comment-edit/comment-edit.component */ "./src/app/comment/comment-edit/comment-edit.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _resolvers_comment_edit_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/comment-edit.resolver */ "./src/app/_resolvers/comment-edit.resolver.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_resolvers/user.resolver */ "./src/app/_resolvers/user.resolver.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_7__["CommentListComponent"],
                _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_8__["CommentCreateComponent"],
                _comment_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_12__["CommentEditComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"])
            ],
            providers: [
                _services_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_13__["AlertifyService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
                _resolvers_comment_edit_resolver__WEBPACK_IMPORTED_MODULE_14__["CommentEditResolver"],
                _resolvers_user_resolver__WEBPACK_IMPORTED_MODULE_16__["UserResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base.ts":
/*!*************************!*\
  !*** ./src/app/base.ts ***!
  \*************************/
/*! exports provided: producers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producers", function() { return producers; });
var producers = [
    'Artesia Volumes',
    'Caza',
    'Centennial',
    'Chevron',
    'Chisholm',
    'Cimarex',
    'Concho - Legacy',
    'Concho - Tankless',
    'Devon',
    'Devon Gathering Volumes',
    'Energen',
    'EOG - HP',
    'EOG - LP',
    'Lilis',
    'Marathon',
    'Matador',
    'Mewbourne',
    'MRC',
    'Murchison',
    'Others',
    'Taprock',
    'Total SC Processed Volumes',
    'WPX',
    'XTO - Corral Canyon',
    'XTO - James Ranch',
    'XTO - Other',
    'XTO - Poker Lake',
    'XTO - Remuda Basin',
    'XTO - Twin Wells',
    'XTO - Big Eddy'
];


/***/ }),

/***/ "./src/app/comment/comment-create/comment-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/comment/comment-create/comment-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comment/comment-create/comment-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/comment/comment-create/comment-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n\r\n  <form #submitForm=\"ngForm\" (ngSubmit)=\"submit()\">\r\n      <div class=\"form-group\">\r\n        <!-- <div class=\"col\"> -->\r\n          <label for=\"selectProducer\">Producer</label>\r\n            <select id=\"selectProducer\" class=\"custom-select\" required name=\"producer\" [(ngModel)]=\"model.producer\">\r\n                <option *ngFor=\"let producer of producerList\">{{producer}}</option>\r\n              </select>\r\n          <!-- </div> -->\r\n        <div class=\"form-group mt-3\">\r\n          <textarea class=\"form-control\" required name=\"content\" [(ngModel)]=\"model.content\" placeholder=\"Add comment here....\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"form-group\">\r\n          <label for=\"exampleFormControlInput1\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" value={{user}} readonly name=\"username\" [(ngModel)]=\"model.createdBy\">\r\n      </div> -->\r\n\r\n      <div class=\"container\">\r\n        <button type=\"button\" class=\"btn btn-success mr-2\" (click)=\"add()\">Add</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n\r\n\r\n  <div class=\"container mt-5\">\r\n    <table class=\"table table-striped table-hover table-sm table-bordered text-center shadow\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Producer</th>\r\n          <th scope=\"col\">Content</th>\r\n          <th scope=\"col\">Delete</th>\r\n          <!-- <th scope=\"col\">Edit</th> -->\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of commentList\">\r\n          <th scope=\"row\">1</th>\r\n          <td>{{item.producer}}</td>\r\n          <td>{{item.content}}</td>\r\n          <td><button type=\"button\" class=\"btn btn-link\" (click)=\"removeComment(item)\"><i class=\"fa fa-trash\"></i></button></td>\r\n          <!-- <td><button type=\"button\" class=\"btn btn-link\" ng-click=\"testing()\"><i class=\"fa fa-edit\"></i></button></td> -->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"container mt-5 text-center\">\r\n    <button class=\"btn btn-primary\" [disabled]=\"clicked\" type=\"submit\">Submit</button>\r\n  </div>\r\n\r\n</form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comment/comment-create/comment-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/comment/comment-create/comment-create.component.ts ***!
  \********************************************************************/
/*! exports provided: CommentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentCreateComponent", function() { return CommentCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/comment.service */ "./src/app/_services/comment.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base */ "./src/app/base.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommentCreateComponent = /** @class */ (function () {
    function CommentCreateComponent(commentService, http, router, alertify) {
        this.commentService = commentService;
        this.http = http;
        this.router = router;
        this.alertify = alertify;
        this.baseUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.model = {};
        this.commentList = [];
        this.producerList = _base__WEBPACK_IMPORTED_MODULE_5__["producers"];
        this.clicked = false;
    }
    CommentCreateComponent.prototype.ngOnInit = function () {
    };
    CommentCreateComponent.prototype.submit = function () {
        var _this = this;
        this.clicked = true;
        this.commentService.submitMulti(this.commentList).subscribe(function () {
            _this.router.navigate(['/comment-list']);
            _this.alertify.success('Comment saved');
        }, function (error) {
            _this.alertify.error('A comment for this Producer may already exist for today.');
        });
    };
    // getUser() {
    //   this.http.get(this.baseUrl + 'values/user', {responseType: 'text'}).subscribe(user => {
    //     this.user = user;
    //   }, error => {
    //     console.log(error);
    //   });
    // }
    CommentCreateComponent.prototype.add = function () {
        if ('producer' in this.model && 'content' in this.model) {
            var modelToAdd = Object.assign({}, this.model);
            if (!this.checkComments(modelToAdd.producer)) {
                this.commentList.push(modelToAdd);
                this.formValues.resetForm();
            }
            else {
                this.alertify.error('A comment for this producer has already been added.');
            }
        }
    };
    CommentCreateComponent.prototype.checkComments = function (producer) {
        for (var i = 0; i < this.commentList.length; i++) {
            if (this.commentList[i].producer === producer) {
                return true;
            }
        }
        return false;
    };
    CommentCreateComponent.prototype.removeComment = function (comment) {
        this.commentList = this.commentList.filter(function (x) {
            return x !== comment;
        });
    };
    CommentCreateComponent.prototype.cancel = function () {
        this.router.navigate(['/comment-list']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('submitForm'),
        __metadata("design:type", Object)
    ], CommentCreateComponent.prototype, "formValues", void 0);
    CommentCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-create',
            template: __webpack_require__(/*! ./comment-create.component.html */ "./src/app/comment/comment-create/comment-create.component.html"),
            styles: [__webpack_require__(/*! ./comment-create.component.css */ "./src/app/comment/comment-create/comment-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], CommentCreateComponent);
    return CommentCreateComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment-edit/comment-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comment/comment-edit/comment-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comment/comment-edit/comment-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/comment/comment-edit/comment-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n<form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleFormControlInput1\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{comment.createdBy}}\" readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleFormControlSelect1\">Producer</label>\r\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n        <option selected>{{comment.producer}}</option>\r\n        <option>2</option>\r\n        <option>3</option>\r\n        <option>4</option>\r\n        <option>5</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleFormControlTextarea1\">Content</label>\r\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\">{{comment.content}}</textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleFormControlInput1\">Date Created</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"dateCreated\" placeholder=\"{{comment.created | date}}\" readonly>\r\n      </div>\r\n    <input class=\"btn btn-primary mr-2\" type=\"submit\" value=\"Submit\">\r\n    <button type=\"button\" class=\"btn btn-danger\">Cancel</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/comment/comment-edit/comment-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comment/comment-edit/comment-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: CommentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentEditComponent", function() { return CommentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/comment.service */ "./src/app/_services/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentEditComponent = /** @class */ (function () {
    function CommentEditComponent(route, commentService) {
        this.route = route;
        this.commentService = commentService;
    }
    CommentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.comment = data['comment'];
        });
    };
    CommentEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-edit',
            template: __webpack_require__(/*! ./comment-edit.component.html */ "./src/app/comment/comment-edit/comment-edit.component.html"),
            styles: [__webpack_require__(/*! ./comment-edit.component.css */ "./src/app/comment/comment-edit/comment-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]])
    ], CommentEditComponent);
    return CommentEditComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment-list/comment-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comment/comment-list/comment-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comment/comment-list/comment-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/comment/comment-list/comment-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <table class=\"table table-striped table-hover table-sm table-bordered text-center shadow\">\r\n      <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\" style=\"width: 2%\" class=\"align-middle\">ID</th>\r\n        <th scope=\"col\" style=\"width: 2%\" class=\"align-middle\">Producer</th>\r\n        <th scope=\"col\" style=\"width: 20%\" class=\"align-middle\">Content</th>\r\n        <th scope=\"col\" style=\"width: 2%\" class=\"align-middle\">Created By</th>\r\n        <th scope=\"col\" style=\"width: 10%\" class=\"align-middle\">Created Date</th>\r\n        <!-- <th scope=\"col\">Edit</th> -->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let comment of comments\">\r\n        <th scope=\"row\">{{comment.id}}</th>\r\n        <td>{{comment.producer}}</td>\r\n        <td>{{comment.content}}</td>\r\n        <td>{{comment.createdBy}}</td>\r\n        <td>{{comment.created | date  }}</td>\r\n        <!-- <td><button class=\"btn btn-link\" [routerLink]=\"['/comment/', comment.id]\" routerLinkActive=\"router-link-active\" ><i class=\"fa fa-edit\"></i></button></td> -->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comment/comment-list/comment-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comment/comment-list/comment-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListComponent", function() { return CommentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    CommentListComponent.prototype.ngOnInit = function () {
        this.getComments();
    };
    CommentListComponent.prototype.getComments = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'comment').subscribe(function (response) {
            _this.comments = response;
        }, function (error) {
            console.log(error);
        });
    };
    CommentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment-list',
            template: __webpack_require__(/*! ./comment-list.component.html */ "./src/app/comment/comment-list/comment-list.component.html"),
            styles: [__webpack_require__(/*! ./comment-list.component.css */ "./src/app/comment/comment-list/comment-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center mt-3\">\r\n  Create Comments for Daily Volume Report\r\n</h3>\r\n<app-comment-create></app-comment-create>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Lucid Portal</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <!-- <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/comment-create']\">Create Comment</a>\r\n        </li> -->\r\n        <li class=\"nav-item\" routerLinkActive=\"active\" >\r\n          <a class=\"nav-link\" [routerLink]=\"['/comment-list']\">View All Comments</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/comment-create/comment-create.component */ "./src/app/comment/comment-create/comment-create.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment/comment-list/comment-list.component */ "./src/app/comment/comment-list/comment-list.component.ts");
/* harmony import */ var _comment_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment/comment-edit/comment-edit.component */ "./src/app/comment/comment-edit/comment-edit.component.ts");
/* harmony import */ var _resolvers_comment_edit_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_resolvers/comment-edit.resolver */ "./src/app/_resolvers/comment-edit.resolver.ts");





var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'comment-create', component: _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_0__["CommentCreateComponent"] },
            { path: 'comment-list', component: _comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_2__["CommentListComponent"] },
            { path: 'comment/:id', component: _comment_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_3__["CommentEditComponent"], resolve: { comment: _resolvers_comment_edit_resolver__WEBPACK_IMPORTED_MODULE_4__["CommentEditResolver"] } }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'api/'
};


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
    production: false,
    apiUrl: 'http://localhost:5000/api/'
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

module.exports = __webpack_require__(/*! C:\Users\mlinden\Desktop\Code\App Dev\lucidportal\LucidPortal-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map