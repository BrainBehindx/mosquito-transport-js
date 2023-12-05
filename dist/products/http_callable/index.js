"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mfetch = void 0;
var _buffer = require("buffer");
var _peripherals = require("../../helpers/peripherals");
var _utils = require("../../helpers/utils");
var _values = require("../../helpers/values");
var _variables = require("../../helpers/variables");
var _accessor = require("../auth/accessor");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mfetch = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var _init$headers, _init$headers2;
    var input,
      init,
      config,
      projectUrl,
      apiUrl,
      method,
      _config$maxRetries,
      maxRetries,
      disableCache,
      accessKey,
      uglify,
      _ref2,
      _ref2$retrieval,
      retrieval,
      enableMinimizer,
      isBaseUrl,
      disableAuth,
      shouldCache,
      reqId,
      retries,
      hasFinalize,
      callFetch,
      r,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          input = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : '';
          init = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
          config = _args10.length > 2 ? _args10[2] : undefined;
          projectUrl = config.projectUrl, apiUrl = config.apiUrl, method = config.method, _config$maxRetries = config.maxRetries, maxRetries = _config$maxRetries === void 0 ? 7 : _config$maxRetries, disableCache = config.disableCache, accessKey = config.accessKey, uglify = config.uglify;
          (0, _utils.validateRequestMethod)(method);
          _ref2 = method || {}, _ref2$retrieval = _ref2.retrieval, retrieval = _ref2$retrieval === void 0 ? _values.RETRIEVAL.DEFAULT : _ref2$retrieval, enableMinimizer = _ref2.enableMinimizer, isBaseUrl = input.includes('://'), disableAuth = (method === null || method === void 0 ? void 0 : method.disableAuth) || isBaseUrl, shouldCache = (retrieval === _values.RETRIEVAL.DEFAULT ? !disableCache : true) && retrieval !== _values.RETRIEVAL.NO_CACHE_NO_AWAIT, reqId = (0, _peripherals.objToUniqueString)(_objectSpread(_objectSpread({}, init), {}, {
            jij: {
              disableAuth: !!disableAuth,
              url: input,
              projectUrl: projectUrl,
              retrieval: retrieval
            }
          }));
          if (!(init !== null && init !== void 0 && (_init$headers = init.headers) !== null && _init$headers !== void 0 && _init$headers.mtoken)) {
            _context10.next = 8;
            break;
          }
          throw '"mtoken" in header is a reserved prop';
        case 8:
          if (!(init !== null && init !== void 0 && (_init$headers2 = init.headers) !== null && _init$headers2 !== void 0 && _init$headers2.uglified)) {
            _context10.next = 10;
            break;
          }
          throw '"uglified" in header is a reserved prop';
        case 10:
          if (!input.startsWith(projectUrl)) {
            _context10.next = 12;
            break;
          }
          throw "makeRequest can not starts with projectUrl:\"".concat(projectUrl, "\"");
        case 12:
          if (!(!isBaseUrl && init.body && typeof init.body !== 'string')) {
            _context10.next = 14;
            break;
          }
          throw "\"body\" must be a string value";
        case 14:
          retries = 0;
          callFetch = function callFetch() {
            return new Promise( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
                var retryProcess, finalize, reqData, resolveCache, _CacheStore$AuthStore, _CacheStore$AuthStore2, _ref4, _ref4$encryptionKey, encryptionKey, mtoken, uglified, f, ok, type, status, statusText, redirected, url, headers, simple, _yield$Promise$all, _yield$Promise$all2, arrayBuffer, _json3, base64, resObj, cloneObj, listener;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      retryProcess = ++retries;
                      finalize = function finalize(a, b) {
                        if (a) resolve(a);else reject(b);
                        if (hasFinalize || retryProcess !== 1) return;
                        hasFinalize = true;
                        if (enableMinimizer) {
                          (_variables.Scoped.PendingFetchCollective.pendingResolution[reqId] || []).forEach(function (e) {
                            e((0, _peripherals.cloneInstance)(a), b);
                          });
                          if (_variables.Scoped.PendingFetchCollective.pendingResolution[reqId]) delete _variables.Scoped.PendingFetchCollective.pendingResolution[reqId];
                          if (_variables.Scoped.PendingFetchCollective.pendingProcess[reqId]) delete _variables.Scoped.PendingFetchCollective.pendingProcess[reqId];
                        }
                      };
                      _context9.next = 4;
                      return (0, _utils.awaitStore)();
                    case 4:
                      reqData = _variables.CacheStore.FetchedStore[reqId], resolveCache = function resolveCache() {
                        var ok = reqData.ok,
                          type = reqData.type,
                          status = reqData.status,
                          statusText = reqData.statusText,
                          redirected = reqData.redirected,
                          url = reqData.url,
                          headers = reqData.headers,
                          base64 = reqData.base64,
                          _json = reqData.json;
                        var bj = {
                          arrayBuffer: function () {
                            var _arrayBuffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    return _context.abrupt("return", _buffer.Buffer.from(base64, 'base64'));
                                  case 1:
                                  case "end":
                                    return _context.stop();
                                }
                              }, _callee);
                            }));
                            function arrayBuffer() {
                              return _arrayBuffer.apply(this, arguments);
                            }
                            return arrayBuffer;
                          }(),
                          json: function () {
                            var _json2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                while (1) switch (_context2.prev = _context2.next) {
                                  case 0:
                                    return _context2.abrupt("return", JSON.parse(_json));
                                  case 1:
                                  case "end":
                                    return _context2.stop();
                                }
                              }, _callee2);
                            }));
                            function json() {
                              return _json2.apply(this, arguments);
                            }
                            return json;
                          }(),
                          text: function () {
                            var _text = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                              var txt;
                              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                while (1) switch (_context3.prev = _context3.next) {
                                  case 0:
                                    txt = _buffer.Buffer.from(base64, 'base64').toString('utf8');
                                    return _context3.abrupt("return", txt);
                                  case 2:
                                  case "end":
                                    return _context3.stop();
                                }
                              }, _callee3);
                            }));
                            function text() {
                              return _text.apply(this, arguments);
                            }
                            return text;
                          }(),
                          clone: function clone() {
                            return _objectSpread({}, bj);
                          },
                          type: type,
                          status: status,
                          statusText: statusText,
                          redirected: redirected,
                          url: url,
                          ok: ok,
                          headers: new Headers(_objectSpread({}, headers)),
                          fromCache: true
                        };
                        finalize(bj);
                      };
                      _context9.prev = 5;
                      if (!(retryProcess === 1)) {
                        _context9.next = 17;
                        break;
                      }
                      if (!enableMinimizer) {
                        _context9.next = 13;
                        break;
                      }
                      if (!_variables.Scoped.PendingFetchCollective.pendingProcess[reqId]) {
                        _context9.next = 12;
                        break;
                      }
                      if (!_variables.Scoped.PendingFetchCollective.pendingResolution[reqId]) _variables.Scoped.PendingFetchCollective.pendingResolution[reqId] = [];
                      _variables.Scoped.PendingFetchCollective.pendingResolution[reqId].push(function (a, b) {
                        if (a) resolve(a.result);else reject(b);
                      });
                      return _context9.abrupt("return");
                    case 12:
                      _variables.Scoped.PendingFetchCollective.pendingProcess[reqId] = true;
                    case 13:
                      if (!(retrieval.startsWith('sticky') && reqData)) {
                        _context9.next = 17;
                        break;
                      }
                      resolveCache();
                      if (!(retrieval !== _values.RETRIEVAL.STICKY_RELOAD)) {
                        _context9.next = 17;
                        break;
                      }
                      return _context9.abrupt("return");
                    case 17:
                      _context9.t0 = !disableAuth;
                      if (!_context9.t0) {
                        _context9.next = 22;
                        break;
                      }
                      _context9.next = 21;
                      return (0, _utils.getReachableServer)(projectUrl);
                    case 21:
                      _context9.t0 = _context9.sent;
                    case 22:
                      if (!_context9.t0) {
                        _context9.next = 25;
                        break;
                      }
                      _context9.next = 25;
                      return (0, _accessor.awaitRefreshToken)(projectUrl);
                    case 25:
                      _ref4 = ((_CacheStore$AuthStore = _variables.CacheStore.AuthStore) === null || _CacheStore$AuthStore === void 0 ? void 0 : (_CacheStore$AuthStore2 = _CacheStore$AuthStore[projectUrl]) === null || _CacheStore$AuthStore2 === void 0 ? void 0 : _CacheStore$AuthStore2.tokenData) || {}, _ref4$encryptionKey = _ref4.encryptionKey, encryptionKey = _ref4$encryptionKey === void 0 ? accessKey : _ref4$encryptionKey, mtoken = _variables.Scoped.AuthJWTToken[projectUrl], uglified = !isBaseUrl && (init === null || init === void 0 ? void 0 : init.body) && typeof (init === null || init === void 0 ? void 0 : init.body) === 'string' && uglify;
                      _context9.next = 28;
                      return fetch(isBaseUrl ? input : "".concat(apiUrl, "/").concat(input), _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, isBaseUrl ? {} : {
                        method: 'POST'
                      }), init), uglified ? {
                        body: {
                          __: (0, _peripherals.encryptString)(init.body, accessKey, disableAuth ? accessKey : encryptionKey)
                        }
                      } : {}), {}, {
                        cache: 'no-cache',
                        headers: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, isBaseUrl ? {} : {
                          'Content-type': 'application/json'
                        }), init === null || init === void 0 ? void 0 : init.headers), uglified ? {
                          uglified: uglified
                        } : {}), disableAuth || !mtoken ? {} : {
                          mtoken: mtoken
                        }), isBaseUrl ? {} : {
                          authorization: "Bearer ".concat((0, _peripherals.encryptString)(accessKey, accessKey, '_'))
                        })
                      }));
                    case 28:
                      f = _context9.sent;
                      ok = f.ok;
                      type = f.type;
                      status = f.status;
                      statusText = f.statusText;
                      redirected = f.redirected;
                      url = f.url;
                      headers = f.headers;
                      simple = headers.get('simple_error');
                      _context9.next = 39;
                      return Promise.all([(0, _peripherals.niceTry)(function () {
                        return f.clone().arrayBuffer();
                      }), (0, _peripherals.niceTry)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var j, json;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return f.clone().json();
                            case 2:
                              j = _context4.sent;
                              json = uglified ? JSON.parse((0, _peripherals.decryptString)(j.__, accessKey, disableAuth ? accessKey : encryptionKey)) : j;
                              return _context4.abrupt("return", JSON.stringify(json));
                            case 5:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4);
                      })))]);
                    case 39:
                      _yield$Promise$all = _context9.sent;
                      _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                      arrayBuffer = _yield$Promise$all2[0];
                      _json3 = _yield$Promise$all2[1];
                      base64 = arrayBuffer ? _buffer.Buffer.from(arrayBuffer).toString('base64') : '';
                      resObj = {
                        json: _json3,
                        type: type,
                        status: status,
                        statusText: statusText,
                        redirected: redirected,
                        url: url,
                        ok: ok,
                        headers: headerObj(headers)
                      };
                      if (!(!isBaseUrl && simple)) {
                        _context9.next = 47;
                        break;
                      }
                      throw {
                        simpleError: JSON.parse(simple)
                      };
                    case 47:
                      if (shouldCache) {
                        _variables.CacheStore.FetchedStore[reqId] = _objectSpread(_objectSpread({}, resObj), {}, {
                          base64: base64
                        });
                        (0, _utils.updateCacheStore)();
                      }
                      cloneObj = _objectSpread(_objectSpread({}, resObj), {}, {
                        headers: new Headers(resObj.headers),
                        arrayBuffer: function () {
                          var _arrayBuffer2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                              while (1) switch (_context5.prev = _context5.next) {
                                case 0:
                                  return _context5.abrupt("return", _buffer.Buffer.from(base64, 'base64'));
                                case 1:
                                case "end":
                                  return _context5.stop();
                              }
                            }, _callee5);
                          }));
                          function arrayBuffer() {
                            return _arrayBuffer2.apply(this, arguments);
                          }
                          return arrayBuffer;
                        }(),
                        json: function () {
                          var _json4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                              while (1) switch (_context6.prev = _context6.next) {
                                case 0:
                                  return _context6.abrupt("return", JSON.parse(_json3));
                                case 1:
                                case "end":
                                  return _context6.stop();
                              }
                            }, _callee6);
                          }));
                          function json() {
                            return _json4.apply(this, arguments);
                          }
                          return json;
                        }(),
                        text: function () {
                          var _text2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                            var txt;
                            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                              while (1) switch (_context7.prev = _context7.next) {
                                case 0:
                                  txt = _buffer.Buffer.from(base64, 'base64').toString('utf8');
                                  return _context7.abrupt("return", txt);
                                case 2:
                                case "end":
                                  return _context7.stop();
                              }
                            }, _callee7);
                          }));
                          function text() {
                            return _text2.apply(this, arguments);
                          }
                          return text;
                        }(),
                        clone: function clone() {
                          return _objectSpread({}, cloneObj);
                        }
                      });
                      finalize(cloneObj);
                      _context9.next = 55;
                      break;
                    case 52:
                      _context9.prev = 52;
                      _context9.t1 = _context9["catch"](5);
                      if (_context9.t1 !== null && _context9.t1 !== void 0 && _context9.t1.simpleError) {
                        finalize(undefined, _context9.t1.simpleError);
                      } else if (retrieval === _values.RETRIEVAL.CACHE_NO_AWAIT && !reqData || retrieval === _values.RETRIEVAL.STICKY_NO_AWAIT || retrieval === _values.RETRIEVAL.NO_CACHE_NO_AWAIT) {
                        finalize(undefined, (0, _peripherals.simplifyCaughtError)(_context9.t1).simpleError);
                      } else if (shouldCache && (retrieval === _values.RETRIEVAL.DEFAULT || retrieval === _values.RETRIEVAL.CACHE_NO_AWAIT) && reqData) {
                        resolveCache();
                      } else if (retries >= maxRetries) {
                        finalize(undefined, (0, _peripherals.simplifyCaughtError)(_context9.t1).simpleError);
                      } else {
                        listener = (0, _peripherals.listenReachableServer)( /*#__PURE__*/function () {
                          var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(online) {
                            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                              while (1) switch (_context8.prev = _context8.next) {
                                case 0:
                                  if (online) {
                                    listener();
                                    callFetch().then(function (e) {
                                      if (retryProcess === 1) {
                                        finalize(e);
                                      } else resolve(e);
                                    }, function (e) {
                                      if (retryProcess === 1) {
                                        finalize(undefined, e);
                                      } else reject(e);
                                    });
                                  }
                                case 1:
                                case "end":
                                  return _context8.stop();
                              }
                            }, _callee8);
                          }));
                          return function (_x3) {
                            return _ref6.apply(this, arguments);
                          };
                        }(), projectUrl);
                      }
                    case 55:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[5, 52]]);
              }));
              return function (_x, _x2) {
                return _ref3.apply(this, arguments);
              };
            }());
          };
          _context10.next = 18;
          return callFetch();
        case 18:
          r = _context10.sent;
          return _context10.abrupt("return", r);
        case 20:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function mfetch() {
    return _ref.apply(this, arguments);
  };
}();
exports.mfetch = mfetch;
var headerObj = function headerObj(header) {
  var h = {};
  header.forEach(function (v, k) {
    h[k] = v;
  });
  return h;
};