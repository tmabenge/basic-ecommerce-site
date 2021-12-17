function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"], {
  /***/
  "./src/app/shared/models/shopParams.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/shopParams.ts ***!
    \*********************************************/

  /*! exports provided: ShopParams */

  /***/
  function srcAppSharedModelsShopParamsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopParams", function () {
      return ShopParams;
    });

    var ShopParams = function ShopParams() {
      _classCallCheck(this, ShopParams);

      this.brandId = 0;
      this.typeId = 0;
      this.sort = 'name';
      this.pageNumber = 1;
      this.pageSize = 6;
    };
    /***/

  },

  /***/
  "./src/app/shop/product-details/product-details.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shop/product-details/product-details.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppShopProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../shop.service */
    "./src/app/shop/shop.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_i_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.decrementQuantity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_i_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.incrementQuantity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.addItemToBasket();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add to Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.product.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r0.product.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.description);
      }
    }

    var ProductDetailsComponent = /*#__PURE__*/function () {
      function ProductDetailsComponent(shopService, route, breadcrumbService, basketService) {
        _classCallCheck(this, ProductDetailsComponent);

        this.shopService = shopService;
        this.route = route;
        this.breadcrumbService = breadcrumbService;
        this.basketService = basketService;
        this.quantity = 1;
        this.breadcrumbService.set('@productDetails', '');
      }

      _createClass(ProductDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadProduct();
        }
      }, {
        key: "addItemToBasket",
        value: function addItemToBasket() {
          this.basketService.addItemToBasket(this.product, this.quantity);
        }
      }, {
        key: "incrementQuantity",
        value: function incrementQuantity() {
          this.quantity++;
        }
      }, {
        key: "decrementQuantity",
        value: function decrementQuantity() {
          if (this.quantity > 1) {
            this.quantity--;
          }
        }
      }, {
        key: "loadProduct",
        value: function loadProduct() {
          var _this = this;

          this.shopService.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe(function (product) {
            _this.product = product;

            _this.breadcrumbService.set('@productDetails', product.name);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
      return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]));
    };

    ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDetailsComponent,
      selectors: [["app-product-details"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container", "mt-5"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-6"], [1, "img-fluid", "w-100", 3, "src", "alt"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "fa", "fa-minus-circle", "text-warning", "mr-2", 2, "cursor", "pointer", "font-size", "2em", 3, "click"], [1, "font-weight-bold", 2, "font-size", "1.5em"], [1, "fa", "fa-plus-circle", "text-warning", "mx-2", 2, "cursor", "pointer", "font-size", "2em", 3, "click"], [1, "btn", "btn-outline-primary", "btn-lg", "ml-4", 3, "click"], [1, "row", "mt-5"], [1, "col-12", "ml-3"]],
      template: function ProductDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_div_1_Template, 22, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-details',
          templateUrl: './product-details.component.html',
          styleUrls: ['./product-details.component.scss']
        }]
      }], function () {
        return [{
          type: _shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]
        }, {
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shop/product-item/product-item.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shop/product-item/product-item.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProductItemComponent */

  /***/
  function srcAppShopProductItemProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
      return ProductItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProductItemComponent = /*#__PURE__*/function () {
      function ProductItemComponent(basketService) {
        _classCallCheck(this, ProductItemComponent);

        this.basketService = basketService;
      }

      _createClass(ProductItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItemToBasket",
        value: function addItemToBasket() {
          this.basketService.addItemToBasket(this.product);
        }
      }]);

      return ProductItemComponent;
    }();

    ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) {
      return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]));
    };

    ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductItemComponent,
      selectors: [["app-product-item"]],
      inputs: {
        product: "product"
      },
      decls: 14,
      vars: 8,
      consts: [[1, "card", "h-100", "shadow-sm"], [1, "image", "position-relative", 2, "cursor", "pointer"], [1, "img-fluid", "bg-info", 3, "src", "alt"], [1, "d-flex", "align-items-center", "justify-content-center", "hover-overlay"], ["type", "button", 1, "btn", "btn-primary", "fa", "fa-shopping-cart", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-body", "d-flex", "flex-column"], [3, "routerLink"], [1, "text-uppercase"], [1, "mb-2"]],
      template: function ProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_4_listener() {
            return ctx.addItemToBasket();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.product.price));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".btn[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 40px;\n}\n\n.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  transform: none;\n  opacity: 1;\n}\n\n.hover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: all 0.5s;\n}\n\n.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  z-index: 1000;\n  transition: all 0.5s;\n}\n\n.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type {\n  transform: translateX(-20px);\n}\n\n.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type {\n  transform: translateX(20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vQzpcXFVzZXJzXFxBZG1pblxcc291cmNlXFxyZXBvc1xcYmFzaWMtZS1jb21tZXJjZVxcY2xpZW50L3NyY1xcYXBwXFxzaG9wXFxwcm9kdWN0LWl0ZW1cXHByb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FDRVI7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FEQ0k7RUFDSSw0QkFBQTtBQ0NSOztBRENJO0VBQ0ksMkJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG92ZXItb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICAgICYgYnV0dG9uIHtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICAgIH1cclxuICAgICYgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgfVxyXG59IiwiLmJ0biB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmltYWdlIDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaW1hZ2UgOmhvdmVyIGJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhvdmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5ob3Zlci1vdmVybGF5IGJ1dHRvbiB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmhvdmVyLW92ZXJsYXkgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xufVxuLmhvdmVyLW92ZXJsYXkgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-item',
          templateUrl: './product-item.component.html',
          styleUrls: ['./product-item.component.scss']
        }]
      }], function () {
        return [{
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/shop/shop-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ShopRoutingModule */

  /***/
  function srcAppShopShopRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function () {
      return ShopRoutingModule;
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


    var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-details/product-details.component */
    "./src/app/shop/product-details/product-details.component.ts");

    var routes = [{
      path: '',
      component: _shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"]
    }, {
      path: ':id',
      component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"],
      data: {
        breadcrumb: {
          alias: 'productDetails'
        }
      }
    }];

    var ShopRoutingModule = function ShopRoutingModule() {
      _classCallCheck(this, ShopRoutingModule);
    };

    ShopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShopRoutingModule
    });
    ShopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShopRoutingModule_Factory(t) {
        return new (t || ShopRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop.component.ts":
  /*!****************************************!*\
    !*** ./src/app/shop/shop.component.ts ***!
    \****************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared/models/shopParams */
    "./src/app/shared/models/shopParams.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shop.service */
    "./src/app/shop/shop.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/paging-header/paging-header.component */
    "./src/app/shared/components/paging-header/paging-header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-item/product-item.component */
    "./src/app/shop/product-item/product-item.component.ts");
    /* harmony import */


    var _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/components/pager/pager.component */
    "./src/app/shared/components/pager/pager.component.ts");

    var _c0 = ["search"];

    function ShopComponent_ng_container_3_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sort_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", sort_r7.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sort_r7.name, " ");
      }
    }

    function ShopComponent_ng_container_3_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopComponent_ng_container_3_li_8_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var brand_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r9.onBrandSelected(brand_r8.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brand_r8 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", brand_r8.id === ctx_r5.shopParams.brandId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", brand_r8.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", brand_r8.name, " ");
      }
    }

    function ShopComponent_ng_container_3_li_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopComponent_ng_container_3_li_12_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var type_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r12.onTypeSelected(type_r11.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r11 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", type_r11.id == ctx_r6.shopParams.typeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r11.name, " ");
      }
    }

    function ShopComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sort");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ShopComponent_ng_container_3_Template_select_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.onSortSelected($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShopComponent_ng_container_3_option_4_Template, 2, 2, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Brands");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ShopComponent_ng_container_3_li_8_Template, 2, 4, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ShopComponent_ng_container_3_li_12_Template, 2, 4, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sortOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.brands);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.types);
      }
    }

    function ShopComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ShopComponent_div_7_Template_input_keyup_enter_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.onSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopComponent_div_7_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.onSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopComponent_div_7_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.onReset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ShopComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-product-item", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r21);
      }
    }

    function ShopComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-pager", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChanged", function ShopComponent_div_10_Template_app_pager_pageChanged_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.onPageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx_r3.shopParams.pageSize)("totalCount", ctx_r3.totalCount);
      }
    }

    var ShopComponent = /*#__PURE__*/function () {
      function ShopComponent(shopService) {
        _classCallCheck(this, ShopComponent);

        this.shopService = shopService;
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_0__["ShopParams"]();
        this.sortOptions = [{
          name: 'Alphabetical',
          value: 'name'
        }, {
          name: 'Price: Low to High',
          value: 'priceAsc'
        }, {
          name: 'Price: High to Low',
          value: 'priceDesc'
        }];
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
          this.getBrands();
          this.getTypes();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this2 = this;

          this.shopService.getProducts(this.shopParams).subscribe(function (response) {
            _this2.products = response.data;
            _this2.shopParams.pageNumber = response.pageIndex;
            _this2.shopParams.pageSize = response.pageSize;
            _this2.totalCount = response.count;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          var _this3 = this;

          this.shopService.getBrands().subscribe(function (response) {
            _this3.brands = [{
              id: 0,
              name: 'All'
            }].concat(_toConsumableArray(response));
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var _this4 = this;

          this.shopService.getTypes().subscribe(function (response) {
            _this4.types = [{
              id: 0,
              name: 'All'
            }].concat(_toConsumableArray(response));
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onBrandSelected",
        value: function onBrandSelected(brandId) {
          this.shopParams.brandId = brandId;
          this.shopParams.pageNumber = 1;
          this.getProducts();
        }
      }, {
        key: "onTypeSelected",
        value: function onTypeSelected(typeId) {
          this.shopParams.typeId = typeId;
          this.shopParams.pageNumber = 1;
          this.getProducts();
        }
      }, {
        key: "onSortSelected",
        value: function onSortSelected(sort) {
          this.shopParams.sort = sort;
          this.getProducts();
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          if (this.shopParams.pageNumber !== event) {
            this.shopParams.pageNumber = event;
            this.getProducts();
          }
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.shopParams.search = this.searchTerm.nativeElement.value;
          this.shopParams.pageNumber = 1;
          this.getProducts();
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.searchTerm.nativeElement.value = '';
          this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_0__["ShopParams"]();
          this.getProducts();
        }
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]));
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["app-shop"]],
      viewQuery: function ShopComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchTerm = _t.first);
        }
      },
      decls: 11,
      vars: 7,
      consts: [[1, "container", "mt-3"], [1, "row"], [1, "col-3"], [4, "ngIf"], [1, "col-9"], [1, "d-flex", "justify-content-between", "align-items-center", "pb-2"], [3, "totalCount", "pageNumber", "pageSize"], ["class", "form-inline", 4, "ngIf"], ["class", "col-4 mb-4", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "text-warning", "ml-3", "mt-4", "mb-3"], [1, "custom-select", "mb-3", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-warning", "ml-3"], [1, "list-group", "my-3"], ["class", "list-group-item", 3, "active", "value", "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "list-group-item", 3, "value", "click"], [1, "form-inline"], ["type", "text", "placeholder", "Search", 1, "form-control", "mr-2", 2, "width", "300px", 3, "keyup.enter"], ["search", ""], [1, "btn", "btn-outline-primary", "my-2", 3, "click"], [1, "btn", "btn-outline-success", "my-2", "ml-2", 3, "click"], [1, "col-4", "mb-4"], [3, "product"], [1, "d-flex", "justify-content-center"], [3, "pageSize", "totalCount", "pageChanged"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShopComponent_ng_container_3_Template, 13, 3, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-paging-header", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ShopComponent_div_7_Template, 7, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ShopComponent_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ShopComponent_div_10_Template, 2, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.brands && ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("totalCount", ctx.totalCount)("pageNumber", ctx.shopParams.pageNumber)("pageSize", ctx.shopParams.pageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalCount > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemComponent"], _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_7__["PagerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.scss']
        }]
      }], function () {
        return [{
          type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
        }];
      }, {
        searchTerm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['search', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop.module.ts":
  /*!*************************************!*\
    !*** ./src/app/shop/shop.module.ts ***!
    \*************************************/

  /*! exports provided: ShopModule */

  /***/
  function srcAppShopShopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopModule", function () {
      return ShopModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shop_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shop-routing.module */
    "./src/app/shop/shop-routing.module.ts");
    /* harmony import */


    var _shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-item/product-item.component */
    "./src/app/shop/product-item/product-item.component.ts");
    /* harmony import */


    var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-details/product-details.component */
    "./src/app/shop/product-details/product-details.component.ts");

    var ShopModule = function ShopModule() {
      _classCallCheck(this, ShopModule);
    };

    ShopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ShopModule
    });
    ShopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ShopModule_Factory(t) {
        return new (t || ShopModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShopRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShopModule, {
        declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductItemComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShopRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductItemComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShopRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop.service.ts":
  /*!**************************************!*\
    !*** ./src/app/shop/shop.service.ts ***!
    \**************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppShopShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ShopService = /*#__PURE__*/function () {
      function ShopService(http) {
        _classCallCheck(this, ShopService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
        this.products = [];
        this.brands = [];
        this.types = [];
      }

      _createClass(ShopService, [{
        key: "getProducts",
        value: function getProducts(shopParams) {
          var _this5 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

          if (shopParams.brandId !== 0) {
            params = params.append('brandId', shopParams.brandId.toString());
          }

          if (shopParams.typeId !== 0) {
            params = params.append('typeId', shopParams.typeId.toString());
          }

          if (shopParams.search) {
            params = params.append('search', shopParams.search);
          }

          params = params.append('sort', shopParams.sort);
          params = params.append('pageIndex', shopParams.pageNumber.toString());
          params = params.append('pageSize', shopParams.pageSize.toString());
          return this.http.get(this.baseUrl + 'products', {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this5.products = response.body.data;
            return response.body;
          }));
        }
      }, {
        key: "getBrands",
        value: function getBrands() {
          var _this6 = this;

          if (this.brands.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.brands);
          }

          return this.http.get(this.baseUrl + 'products/brands').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this6.brands = response;
            return response;
          }));
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var _this7 = this;

          if (this.types.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.types);
          }

          return this.http.get(this.baseUrl + 'products/types').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this7.types = response;
            return response;
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          var product = this.products.find(function (p) {
            return p.id === id;
          });

          if (product) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(product);
          }

          return this.http.get(this.baseUrl + 'products/' + id);
        }
      }]);

      return ShopService;
    }();

    ShopService.ɵfac = function ShopService_Factory(t) {
      return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ShopService,
      factory: ShopService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=shop-shop-module-es5.js.map