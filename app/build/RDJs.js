// var exports ={}; 
/**
 * Instance is an RDJs controller.
 */
"use strict";
var RDJs = (function () {
    function RDJs() {
    }
    RDJs.prototype.baseXhr = function (type, url, headers, resolve, reject, async) {
        if (async === void 0) { async = true; }
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, async);
        if (headers !== undefined && headers.length > 0) {
            headers.forEach(function (element) {
                xhr.setRequestHeader(element.key, element.value);
            });
        }
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(xhr.responseText);
                }
            }
        };
        return xhr;
    };
    RDJs.prototype.get = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("GET", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RDJs.prototype.post = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("POST", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RDJs.prototype.put = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("PUT", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    RDJs.prototype["delete"] = function (url, params, headers, async) {
        var _this = this;
        if (async === void 0) { async = true; }
        var results = new Promise(function (resolve, reject) {
            _this.baseXhr("DELETE", url, headers, resolve, reject)
                .send(params === undefined ? undefined : params);
        });
        return results;
    };
    return RDJs;
}());
window.RDJs =  new RDJs();  