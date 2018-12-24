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

/***/ "./src/app/ParentTask.ts":
/*!*******************************!*\
  !*** ./src/app/ParentTask.ts ***!
  \*******************************/
/*! exports provided: ParentTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTask", function() { return ParentTask; });
var ParentTask = /** @class */ (function () {
    function ParentTask(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return ParentTask;
}());



/***/ }),

/***/ "./src/app/addtask/addtask.component.css":
/*!***********************************************!*\
  !*** ./src/app/addtask/addtask.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\nmat-slider {\r\n    width: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/addtask/addtask.component.html":
/*!************************************************!*\
  !*** ./src/app/addtask/addtask.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  >\n  <p>Add Task</p>\n  <!--<label> ID :\n    <input [(ngModel)]=\"task.taskId\" name=\"taskId\" >\n  </label>-->\n  <label> Task: \n    <input [(ngModel)]=\"task.task\" name=\"task\" placeholder=\"task\" >\n  </label>\n  <br />\n  <label> Priority: \n    <mat-slider thumbLabel [(ngModel)]=\"task.priority\" min=\"1\" max=\"30\" step=\"1\" tickInterval=\"3\" name=\"priority\" placeholder=\"priority\"> </mat-slider>\n\n  </label>\n  <br />\n  <label> Parent Task: \n    <input [(ngModel)]=\"task.parentId\" name=\"parentId\" placeholder=\"parentId\">\n  </label>\n  <br />\n  <label> Start Date: \n    <input type=\"date\" [(ngModel)]=\"task.startDate\" name=\"startDate\" placeholder=\"startDate\">\n  </label>\n  <br />\n  <label> End Date: \n    <input type=\"date\" [(ngModel)]=\"task.endDate\" name=\"endDate\" placeholder=\"endDate\">\n  </label>\n  <br />\n  <button (click)=\"save()\">save</button>\n</form>"

/***/ }),

/***/ "./src/app/addtask/addtask.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addtask/addtask.component.ts ***!
  \**********************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task */ "./src/app/task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(taskservice, route, location) {
        this.taskservice = taskservice;
        this.route = route;
        this.location = location;
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        //this.task = new Task({"id":"","title":""});
        this.getTask();
    };
    AddtaskComponent.prototype.getTask = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log('in componet - getTask' + id);
        if (id == 0) {
            this.task = new _task__WEBPACK_IMPORTED_MODULE_1__["Task"]({ "id": "", "title": "" });
        }
        else {
            this.taskservice.getTask(id).subscribe(function (task) { return _this.task = task; });
        }
    };
    AddtaskComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddtaskComponent.prototype.save = function () {
        var _this = this;
        this.taskservice.createTask(this.task)
            .subscribe(function () { return _this.goBack(); });
    };
    AddtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/addtask/addtask.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/addtask/addtask.component.ts");
/* harmony import */ var _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewtask/viewtask.component */ "./src/app/viewtask/viewtask.component.ts");
/* harmony import */ var _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edittask/edittask.component */ "./src/app/edittask/edittask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'addtask', component: _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_2__["AddtaskComponent"] },
    { path: 'viewtask', component: _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_3__["ViewtaskComponent"] },
    { path: 'addtask/:id', component: _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_2__["AddtaskComponent"] },
    { path: 'edittask/:id', component: _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_4__["EdittaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607d8b;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <nav>\n    <a routerLink=\"/addtask\">Add Task</a>\n    <a routerLink=\"/viewtask\">View Tasks</a>\n  </nav>\n  <router-outlet></router-outlet>\n  \n</div>\n\n\n"

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
        this.title = 'Task Manager';
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/addtask/addtask.component.ts");
/* harmony import */ var _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewtask/viewtask.component */ "./src/app/viewtask/viewtask.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _filters_filtertask_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/filtertask.pipe */ "./src/app/filters/filtertask.pipe.ts");
/* harmony import */ var _filters_filterparent_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/filterparent.pipe */ "./src/app/filters/filterparent.pipe.ts");
/* harmony import */ var _filters_filterpriorityfrom_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/filterpriorityfrom.pipe */ "./src/app/filters/filterpriorityfrom.pipe.ts");
/* harmony import */ var _filters_filterpriorityto_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filters/filterpriorityto.pipe */ "./src/app/filters/filterpriorityto.pipe.ts");
/* harmony import */ var _filters_filterenddate_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filters/filterenddate.pipe */ "./src/app/filters/filterenddate.pipe.ts");
/* harmony import */ var _filters_filterstartdate_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filters/filterstartdate.pipe */ "./src/app/filters/filterstartdate.pipe.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edittask/edittask.component */ "./src/app/edittask/edittask.component.ts");
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
                _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__["AddtaskComponent"],
                _viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_7__["ViewtaskComponent"],
                _filters_filtertask_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterTaskPipe"],
                _filters_filterparent_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterParentPipe"],
                _filters_filterpriorityfrom_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPriorityFrom"],
                _filters_filterpriorityto_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPriorityTo"],
                _filters_filterstartdate_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterStartDate"],
                _filters_filterenddate_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterEndDate"],
                _edittask_edittask_component__WEBPACK_IMPORTED_MODULE_17__["EdittaskComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"]
            ],
            // providers: [ConfirmationDialogService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edittask/edittask.component.css":
/*!*************************************************!*\
  !*** ./src/app/edittask/edittask.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\nmat-slider {\r\n    width: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/edittask/edittask.component.html":
/*!**************************************************!*\
  !*** ./src/app/edittask/edittask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  >\n  <p>Update Task</p>\n  <!--<label> ID :\n    <input [(ngModel)]=\"task.taskId\" name=\"taskId\" >\n  </label>-->\n  <label> Task: \n    <input [(ngModel)]=\"task.task\" name=\"task\" placeholder=\"task\" >\n  </label>\n  <br />\n  <label> Priority: \n    <mat-slider thumbLabel [(ngModel)]=\"task.priority\" min=\"1\" max=\"30\" step=\"1\" tickInterval=\"3\" name=\"priority\" placeholder=\"priority\"> </mat-slider>\n\n  </label>\n  <br />\n  <label> Parent Task: \n    <input [(ngModel)]=\"task.parentTask.parentId\" name=\"parentId\" placeholder=\"parentId\">\n  </label>\n  <br />\n  <label> Start Date: \n    <input type=\"date\" [(ngModel)]=\"task.startDate\" name=\"startDate\" placeholder=\"startDate\">\n  </label>\n  <br />\n  <label> End Date: \n    <input type=\"date\" [(ngModel)]=\"task.endDate\" name=\"endDate\" placeholder=\"endDate\">\n  </label>\n  <br />\n  <button (click)=\"save()\">Update</button>\n</form>"

/***/ }),

/***/ "./src/app/edittask/edittask.component.ts":
/*!************************************************!*\
  !*** ./src/app/edittask/edittask.component.ts ***!
  \************************************************/
/*! exports provided: EdittaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittaskComponent", function() { return EdittaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task */ "./src/app/task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdittaskComponent = /** @class */ (function () {
    function EdittaskComponent(taskservice, route, location) {
        this.taskservice = taskservice;
        this.route = route;
        this.location = location;
    }
    EdittaskComponent.prototype.ngOnInit = function () {
        //this.task = new Task({"id":"","title":""});
        this.getTask();
    };
    EdittaskComponent.prototype.getTask = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log('in componet - getTask' + id);
        if (id == 0) {
            this.task = new _task__WEBPACK_IMPORTED_MODULE_1__["Task"]({ "id": "", "title": "" });
        }
        else {
            this.taskservice.getTask(id).subscribe(function (task) { return _this.task = task; });
        }
    };
    EdittaskComponent.prototype.goBack = function () {
        this.location.back();
    };
    EdittaskComponent.prototype.save = function () {
        var _this = this;
        this.taskservice.updateTask(this.task)
            .subscribe(function () { return _this.goBack(); });
    };
    EdittaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edittask',
            template: __webpack_require__(/*! ./edittask.component.html */ "./src/app/edittask/edittask.component.html"),
            styles: [__webpack_require__(/*! ./edittask.component.css */ "./src/app/edittask/edittask.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EdittaskComponent);
    return EdittaskComponent;
}());



/***/ }),

/***/ "./src/app/filters/filterenddate.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/filters/filterenddate.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterEndDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEndDate", function() { return FilterEndDate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterEndDate = /** @class */ (function () {
    function FilterEndDate() {
    }
    FilterEndDate.prototype.transform = function (items, searchEndDate) {
        if (!items)
            return [];
        if (!searchEndDate)
            return items;
        return items.filter(function (it) {
            return it.endDate == searchEndDate;
        });
    };
    FilterEndDate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterEndDate'
        })
    ], FilterEndDate);
    return FilterEndDate;
}());



/***/ }),

/***/ "./src/app/filters/filterparent.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filterparent.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterParentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterParentPipe", function() { return FilterParentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterParentPipe = /** @class */ (function () {
    function FilterParentPipe() {
    }
    FilterParentPipe.prototype.transform = function (items, searchParent) {
        if (!items)
            return [];
        if (!searchParent)
            return items;
        searchParent = searchParent.toString().toLowerCase();
        return items.filter(function (it) {
            return it.parentTask.toString().toLowerCase().includes(searchParent);
        });
    };
    FilterParentPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterParent'
        })
    ], FilterParentPipe);
    return FilterParentPipe;
}());



/***/ }),

/***/ "./src/app/filters/filterpriorityfrom.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/filters/filterpriorityfrom.pipe.ts ***!
  \****************************************************/
/*! exports provided: FilterPriorityFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPriorityFrom", function() { return FilterPriorityFrom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPriorityFrom = /** @class */ (function () {
    function FilterPriorityFrom() {
    }
    FilterPriorityFrom.prototype.transform = function (items, searchPriorityFrom) {
        if (!items)
            return [];
        if (!searchPriorityFrom)
            return items;
        return items.filter(function (it) {
            return it.priority >= searchPriorityFrom;
        });
    };
    FilterPriorityFrom = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterPriorityFrom'
        })
    ], FilterPriorityFrom);
    return FilterPriorityFrom;
}());



/***/ }),

/***/ "./src/app/filters/filterpriorityto.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/filters/filterpriorityto.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterPriorityTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPriorityTo", function() { return FilterPriorityTo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPriorityTo = /** @class */ (function () {
    function FilterPriorityTo() {
    }
    FilterPriorityTo.prototype.transform = function (items, searchPriorityTo) {
        if (!items)
            return [];
        if (!searchPriorityTo)
            return items;
        return items.filter(function (it) {
            return it.priority <= searchPriorityTo;
        });
    };
    FilterPriorityTo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterPriorityTo'
        })
    ], FilterPriorityTo);
    return FilterPriorityTo;
}());



/***/ }),

/***/ "./src/app/filters/filterstartdate.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/filters/filterstartdate.pipe.ts ***!
  \*************************************************/
/*! exports provided: FilterStartDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStartDate", function() { return FilterStartDate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterStartDate = /** @class */ (function () {
    function FilterStartDate() {
    }
    FilterStartDate.prototype.transform = function (items, searchStartDate) {
        if (!items)
            return [];
        if (!searchStartDate)
            return items;
        return items.filter(function (it) {
            return it.startDate == searchStartDate;
        });
    };
    FilterStartDate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterStartDate'
        })
    ], FilterStartDate);
    return FilterStartDate;
}());



/***/ }),

/***/ "./src/app/filters/filtertask.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/filters/filtertask.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterTaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTaskPipe", function() { return FilterTaskPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterTaskPipe = /** @class */ (function () {
    function FilterTaskPipe() {
    }
    FilterTaskPipe.prototype.transform = function (items, searchTask) {
        if (!items)
            return [];
        if (!searchTask)
            return items;
        searchTask = searchTask.toString().toLowerCase();
        return items.filter(function (it) {
            return it.task.toString().toLowerCase().includes(searchTask);
        });
    };
    FilterTaskPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterTask'
        })
    ], FilterTaskPipe);
    return FilterTaskPipe;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ParentTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParentTask */ "./src/app/ParentTask.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get('http://localhost:8090/api/tasks');
    };
    TaskService.prototype.createTask = function (task) {
        console.log(task);
        task.parentTask = new _ParentTask__WEBPACK_IMPORTED_MODULE_2__["ParentTask"]({ "parentId": task.parentId, "parentTask": "" });
        if (task.taskId == task.parentId) {
            task.parentTask.parentTask = task.task;
        }
        return this.http.post('http://localhost:8090/api/tasks/', task, httpOptions);
    };
    TaskService.prototype.updateTask = function (task) {
        console.log(task);
        task.parentTask = new _ParentTask__WEBPACK_IMPORTED_MODULE_2__["ParentTask"]({ "parentId": task.parentId, "parentTask": "" });
        if (task.taskId == task.parentId) {
            task.parentTask.parentTask = task.task;
        }
        return this.http.put('http://localhost:8090/api/tasks/' + task.taskId, task, httpOptions);
    };
    TaskService.prototype.getTask = function (taskId) {
        return this.http.get('http://localhost:8090/api/tasks/' + taskId);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task.ts":
/*!*************************!*\
  !*** ./src/app/task.ts ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/viewtask/viewtask.component.css":
/*!*************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607d8b;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 60em;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 2.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: blue;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 10px;\r\n  font-weight: bold;\r\n}\r\n.heroes a:hover {\r\n  color: violet;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: left;\r\n  margin-right: .8em;\r\n \r\n}\r\n.heroes .task {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 2em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 2.8em;\r\n  min-width: 200px;\r\n  text-align: left;\r\n  margin-right: .8em;\r\n \r\n}\r\n.heroes .stats {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 2em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 2.8em;\r\n  min-width: 75px;\r\n  text-align: left;\r\n  margin-right: .8em;\r\n \r\n}\r\n.heroes .btnend {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 2em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 2.8em;\r\n  min-width: 90px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n \r\n}\r\n.heroes .btnedit {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 2em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 2.8em;\r\n  min-width: 80px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n \r\n}\r\n"

/***/ }),

/***/ "./src/app/viewtask/viewtask.component.html":
/*!**************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Tasks</h2>\n<ul class=\"heroes\">\n<li>\n<label> Task :\n<input [(ngModel)]=\"searchTask\" placeholder=\"\">\n</label>\n<label> ParentTask :\n  <input [(ngModel)]=\"searchParent\" placeholder=\"\">\n  </label>\n</li>\n<li>\n  <label> Priority From :\n    <input [(ngModel)]=\"searchPriorityFrom\" placeholder=\"\">\n  </label>\n  <label> Priority To :\n    <input [(ngModel)]=\"searchPriorityTo\" placeholder=\"\">\n  </label>\n  </li>\n  <li>\n  <label> Start Date :\n    <input type=\"date\" [(ngModel)]=\"searchStartDate\" placeholder=\"\">\n  </label>\n  <label> End Date :\n    <input type=\"date\" [(ngModel)]=\"searchEndDate\" placeholder=\"\">\n  </label>\n</li>\n</ul>\n<ul class=\"heroes\">\n\n    <li>\n        <span class=\"task\">Task</span> \n        <span class=\"task\">Parent Task</span>\n        <span class=\"stats\">Priority</span>\n        <span class=\"btnedit\">Start</span>\n        <span class=\"btnedit\">End</span>\n        <span class=\"btnedit\">Edit</span>\n        <span class=\"btnend\">End Task</span>\n      </li>\n\n  <li *ngFor=\"let task of tasks | filterTask : searchTask | filterParent : searchParent | filterPriorityFrom : searchPriorityFrom |  filterPriorityTo : searchPriorityTo | filterStartDate : searchStartDate | filterEndDate : searchEndDate\">\n    <span class=\"task\">{{task.task}}</span> \n    <span class=\"task\">{{task.parentTask.parentTask}}</span>\n    <span class=\"stats\">{{task.priority}}</span>\n    <span class=\"btnedit\">{{task.startDate}}</span>\n    <span class=\"btnedit\">{{task.endDate}}</span>\n    <span class=\"btnedit\"><button *ngIf=\"task.active\" routerLink=\"/edittask/{{task.taskId}}\">Edit</button>\n      <button *ngIf=\"!task.active\">Edit</button></span>\n    <span class=\"btnend\"><button (click)=\"openConfirmationDialog(task)\" type=\"button\" class=\"btn btn-primary\">End Task</button></span>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/viewtask/viewtask.component.ts":
/*!************************************************!*\
  !*** ./src/app/viewtask/viewtask.component.ts ***!
  \************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(taskService) {
        this.taskService = taskService;
    }
    ViewtaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    ViewtaskComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    ViewtaskComponent.prototype.openConfirmationDialog = function (id) {
        if (confirm("Are you sure to end this task?")) {
            this.save(id);
        }
    };
    ViewtaskComponent.prototype.goBack = function () {
    };
    ViewtaskComponent.prototype.save = function (task) {
        var _this = this;
        alert(task.taskId);
        //this.task = new Task({"taskId":id,"active":false});
        task.active = false;
        this.taskService.updateTask(task)
            .subscribe(function () { return _this.goBack(); });
    };
    ViewtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/viewtask/viewtask.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Admin\work\task-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map