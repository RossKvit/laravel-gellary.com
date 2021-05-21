/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Gallery.js":
/*!*********************************!*\
  !*** ./resources/js/Gallery.js ***!
  \*********************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    _classCallCheck(this, Gallery);

    this.imagesFormsList = document.querySelector('.gallery-images__forms-list');
    this.imagesFormsListExample = document.querySelector('.gallery-images__form_example');
    this.galleryImagesList = [];
    this.addNewImageForm();
    this.initEventListeners();
  }

  _createClass(Gallery, [{
    key: "initEventListeners",
    value: function initEventListeners() {
      var self = this;
      document.querySelector('.gallery-images__forms-add-item').addEventListener('click', function (e) {
        self.addNewImageForm();
      });

      if (document.querySelector('.gallery-images__load-btn')) {
        document.querySelector('.gallery-images__load-btn').addEventListener('click', function (e) {
          e.preventDefault();
          self.loadToServerImageFormsData();
        });
      }

      var fileReader = new FileReader();
    }
  }, {
    key: "addNewImageForm",
    value: function addNewImageForm() {
      var self = this,
          currentForm = self.imagesFormsListExample.cloneNode(true);
      currentForm.classList.remove('gallery-images__form_example');
      self.imagesFormsList.appendChild(currentForm);
    }
  }, {
    key: "loadToServerImageFormsData",
    value: function loadToServerImageFormsData() {
      var formDataList = [],
          self = this,
          fileReader = new FileReader();
      document.querySelectorAll('.gallery-images__form').forEach(function (form) {
        if (!form.classList.contains('gallery-images__form_example')) {
          var imageFormData = new FormData();
          imageFormData.append('title', form.querySelector('.gallery-images__input-title').value);
          imageFormData.append('tag', form.querySelector('.gallery-images__input-tag').value);
          imageFormData.append('file', form.querySelector('.gallery-images__input-file').files[0]);
          self.loadImageFormToServer(imageFormData);
        }
      });
      return formDataList;
    }
  }, {
    key: "loadImageFormToServer",
    value: function loadImageFormToServer(formData) {
      var self = this; // Check file selected or not

      if (formData.has('file')) {
        self.httpRequest(document.querySelector('.gallery-images').getAttribute('data-action'), function (httpRequest) {
          if (httpRequest.status == 200) {
            alert('Images loaded!'); //window.location.replace("/");
          } else {
            alert('Sorry. Images loaning failed by unexpected error =(');
          }
        }, formData);
      } else {
        alert("Please select a file.");
      }
    }
  }, {
    key: "httpRequest",
    value: function httpRequest(url, callback, params) {
      var httpRequest = new XMLHttpRequest(),
          csrfToken = document.querySelector('.gallery-images').getAttribute('data-csrf-token');

      if (!csrfToken) {
        return;
      }

      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
          // XMLHttpRequest.DONE == 4
          callback(httpRequest);
        }
      };

      httpRequest.open("POST", url, true); //httpRequest.setRequestHeader("Content-Type", "application/json"); // "application/json"

      httpRequest.setRequestHeader("X-CSRF-TOKEN", csrfToken);
      httpRequest.send(params);
    }
  }]);

  return Gallery;
}();



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery */ "./resources/js/Gallery.js");

document.addEventListener('DOMContentLoaded', function () {
  new _Gallery__WEBPACK_IMPORTED_MODULE_0__["Gallery"]();
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\OSPanel\domains\local.one.tm.com\gallery.com\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\OSPanel\domains\local.one.tm.com\gallery.com\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });