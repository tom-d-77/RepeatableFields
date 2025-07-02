(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
    mod
  ));

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-dom/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().ReactDOM;
    }
  });

  // node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant2 = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant2;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();

  // node_modules/.pnpm/@neos-project+positional-array-sorter@8.3.14/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var positionalArraySorter = (subject, position = "position", idKey = "key") => {
    const positionAccessor = typeof position === "string" ? (value2) => value2[position] : position;
    const indexMapping = {};
    const middleKeys = {};
    const startKeys = {};
    const endKeys = {};
    const beforeKeys = {};
    const afterKeys = {};
    subject.forEach((item, index) => {
      const key = item[idKey] ? item[idKey] : String(index);
      indexMapping[key] = index;
      const positionValue = positionAccessor(item);
      const position2 = String(positionValue ? positionValue : index);
      let invalid = false;
      if (position2.startsWith("start")) {
        const weightMatch = position2.match(/start\s+(\d+)/);
        const weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
        if (!startKeys[weight]) {
          startKeys[weight] = [];
        }
        startKeys[weight].push(key);
      } else if (position2.startsWith("end")) {
        const weightMatch = position2.match(/end\s+(\d+)/);
        const weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
        if (!endKeys[weight]) {
          endKeys[weight] = [];
        }
        endKeys[weight].push(key);
      } else if (position2.startsWith("before")) {
        const match = position2.match(/before\s+(\S+)(\s+(\d+))?/);
        if (!match) {
          invalid = true;
        } else {
          const reference = match[1];
          const weight = match[3] ? Number(match[3]) : 0;
          if (!beforeKeys[reference]) {
            beforeKeys[reference] = {};
          }
          if (!beforeKeys[reference][weight]) {
            beforeKeys[reference][weight] = [];
          }
          beforeKeys[reference][weight].push(key);
        }
      } else if (position2.startsWith("after")) {
        const match = position2.match(/after\s+(\S+)(\s+(\d+))?/);
        if (!match) {
          invalid = true;
        } else {
          const reference = match[1];
          const weight = match[3] ? Number(match[3]) : 0;
          if (!afterKeys[reference]) {
            afterKeys[reference] = {};
          }
          if (!afterKeys[reference][weight]) {
            afterKeys[reference][weight] = [];
          }
          afterKeys[reference][weight].push(key);
        }
      } else {
        invalid = true;
      }
      if (invalid) {
        let numberPosition = parseFloat(position2);
        if (isNaN(numberPosition) || !isFinite(numberPosition)) {
          numberPosition = index;
        }
        if (!middleKeys[numberPosition]) {
          middleKeys[numberPosition] = [];
        }
        middleKeys[numberPosition].push(key);
      }
    });
    const resultStart = [];
    const resultMiddle = [];
    const resultEnd = [];
    const processedKeys = [];
    const sortedWeights = (dict, asc) => {
      const weights = Object.keys(dict).map((x) => Number(x)).sort((a, b) => a - b);
      return asc ? weights : weights.reverse();
    };
    const addToResults = (keys, result) => {
      keys.forEach((key) => {
        if (processedKeys.indexOf(key) >= 0) {
          return;
        }
        processedKeys.push(key);
        if (beforeKeys[key]) {
          const beforeWeights = sortedWeights(beforeKeys[key], true);
          for (const i of beforeWeights) {
            addToResults(beforeKeys[key][i], result);
          }
        }
        result.push(key);
        if (afterKeys[key]) {
          const afterWeights = sortedWeights(afterKeys[key], false);
          for (const i of afterWeights) {
            addToResults(afterKeys[key][i], result);
          }
        }
      });
    };
    for (const i of sortedWeights(startKeys, false)) {
      addToResults(startKeys[i], resultStart);
    }
    for (const i of sortedWeights(middleKeys, true)) {
      addToResults(middleKeys[i], resultMiddle);
    }
    for (const i of sortedWeights(endKeys, true)) {
      addToResults(endKeys[i], resultEnd);
    }
    for (const key of Object.keys(beforeKeys)) {
      if (processedKeys.indexOf(key) >= 0) {
        continue;
      }
      for (const i of sortedWeights(beforeKeys[key], false)) {
        addToResults(beforeKeys[key][i], resultStart);
      }
    }
    for (const key of Object.keys(afterKeys)) {
      if (processedKeys.indexOf(key) >= 0) {
        continue;
      }
      for (const i of sortedWeights(afterKeys[key], false)) {
        addToResults(afterKeys[key][i], resultMiddle);
      }
    }
    const sortedKeys = [...resultStart, ...resultMiddle, ...resultEnd];
    return sortedKeys.map((key) => indexMapping[key]).map((i) => subject[i]);
  };
  var positionalArraySorter_default = positionalArraySorter;

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default = readFromConsumerApi("manifest");

  // Resources/Private/Editor/Repeatable/index.jsx
  var import_react8 = __toESM(require_react());
  var import_react_redux = __toESM(require_react_redux());
  var import_prop_types4 = __toESM(require_prop_types());

  // node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/url-alphabet/index.js
  var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

  // node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.browser.js
  var nanoid = (size = 21) => {
    let id = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
    while (size--) {
      id += urlAlphabet[bytes[size] & 63];
    }
    return id;
  };

  // node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // Resources/Private/Editor/Repeatable/index.jsx
  var import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
  var import_neos_ui_decorators3 = __toESM(require_neos_ui_decorators());
  var import_react_ui_components2 = __toESM(require_react_ui_components());

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.14/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-backend-connector/index.js
  init_readFromConsumerApi();
  var neos_ui_backend_connector_default = readFromConsumerApi("NeosProjectPackages")().NeosUiBackendConnectorDefault;
  var { fetchWithErrorHandling } = readFromConsumerApi("NeosProjectPackages")().NeosUiBackendConnector;

  // node_modules/.pnpm/carbon-neos-loadinganimation@1.2.0_@neos-project+neos-ui-extensibility@8.3.14/node_modules/carbon-neos-loadinganimation/src/LoadingWithStyles.jsx
  var import_react2 = __toESM(require_react());

  // node_modules/.pnpm/carbon-neos-loadinganimation@1.2.0_@neos-project+neos-ui-extensibility@8.3.14/node_modules/carbon-neos-loadinganimation/src/Elements.jsx
  var import_react = __toESM(require_react());
  function Circle({ style: style2, className, size = 30 }) {
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: size, height: size, stroke: "currentColor", viewBox: "0 0 24 24", style: style2, className }, /* @__PURE__ */ import_react.default.createElement("g", null, /* @__PURE__ */ import_react.default.createElement("circle", { cx: "12", cy: "12", r: "9.5", fill: "none", "stroke-width": "2", "stroke-linecap": "round" }, [
      {
        attribute: "dasharray",
        values: "0 150;42 150;42 150;42 150"
      },
      {
        attribute: "dashoffset",
        values: "0;-16;-59;-59"
      }
    ].map(({ attribute, values }) => /* @__PURE__ */ import_react.default.createElement(
      "animate",
      {
        key: attribute,
        attributeName: `stroke-${attribute}`,
        values,
        dur: "1.5s",
        calcMode: "spline",
        keyTimes: "0;0.475;0.95;1",
        keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",
        repeatCount: "indefinite"
      }
    ))), /* @__PURE__ */ import_react.default.createElement(
      "animateTransform",
      {
        attributeName: "transform",
        type: "rotate",
        dur: "2s",
        values: "0 12 12;360 12 12",
        repeatCount: "indefinite"
      }
    )));
  }
  function Dots({ style: style2, className, size = 30 }) {
    return /* @__PURE__ */ import_react.default.createElement("svg", { width: size * 2, height: size, viewBox: "0 0 24 12", class: className, style: style2 }, [1, 2, 3].map((number) => {
      const cx = number * 6;
      const beginn = Math.round(100 / 3 * (number - 1)) / 100;
      return /* @__PURE__ */ import_react.default.createElement("circle", { cx, cy: "6", r: "0", fill: "currentColor" }, /* @__PURE__ */ import_react.default.createElement(
        "animate",
        {
          attributeName: "r",
          begin: beginn,
          calcMode: "spline",
          dur: "1.5s",
          keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
          repeatCount: "indefinite",
          values: "0;2;0;0"
        }
      ));
    }));
  }

  // node_modules/.pnpm/carbon-neos-loadinganimation@1.2.0_@neos-project+neos-ui-extensibility@8.3.14/node_modules/carbon-neos-loadinganimation/src/LoadingWithStyles.jsx
  var import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
  var style = {
    container: (heightMultiplier = 1) => ({
      display: "grid",
      gridTemplate: "'content' 1fr / 1fr",
      alignItems: "center",
      justifyItems: "center",
      width: "100%",
      minHeight: `calc(var(--spacing-GoldenUnit) * ${heightMultiplier})`
    }),
    item: (active = false) => ({
      gridArea: "content",
      transition: "opacity var(--transition-Default), transform var(--transition-Default) ease",
      opacity: active ? 1 : 0,
      transform: `scale(${active ? 1 : 0})`
    })
  };
  function Loading({
    id,
    title = "Neos.Neos:Main:loading",
    isLoading = false,
    delayTime = 500,
    timeoutTime = 5e3,
    i18nRegistry,
    heightMultiplier = 1,
    width = 60
  }) {
    const [showLoading, setShowLoading] = (0, import_react2.useState)(0);
    const translatedTitle = title ? i18nRegistry.translate(title) : null;
    (0, import_react2.useEffect)(() => {
      if (!isLoading) {
        setShowLoading(0);
        return;
      }
      const delay = setTimeout(() => {
        setShowLoading(1);
      }, delayTime);
      const timeout = setTimeout(() => {
        setShowLoading(2);
      }, delayTime + timeoutTime);
      return () => {
        clearTimeout(delay);
        clearTimeout(timeout);
      };
    }, [isLoading]);
    if (!isLoading) {
      return null;
    }
    return /* @__PURE__ */ import_react2.default.createElement("div", { id, style: style.container(heightMultiplier), title: translatedTitle }, /* @__PURE__ */ import_react2.default.createElement(Circle, { size: width / 2, style: style.item(showLoading == 1) }), /* @__PURE__ */ import_react2.default.createElement(Dots, { size: width / 2, style: style.item(showLoading == 2) }));
  }
  var neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n")
  }));
  var LoadingWithStyles_default = neosifier(Loading);

  // Resources/Private/Editor/Repeatable/Sortable.jsx
  var import_react5 = __toESM(require_react());

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
  function _arrayWithHoles(r2) {
    if (Array.isArray(r2)) return r2;
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
  function _iterableToArrayLimit(r2, l) {
    var t = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r2)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = false;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
      } catch (r3) {
        o = true, n = r3;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(r2, a) {
    (null == a || a > r2.length) && (a = r2.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
    return n;
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(r2, a) {
    if (r2) {
      if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
      var t = {}.toString.call(r2).slice(8, -1);
      return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r2, a) : void 0;
    }
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
  function _slicedToArray(r2, e) {
    return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e) || _unsupportedIterableToArray(r2, e) || _nonIterableRest();
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function toPrimitive(t, r2) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r2 || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(e, r2, t) {
    return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r2] = t, e;
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/objectSpread.js
  function _objectSpread(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = null != arguments[r2] ? Object(arguments[r2]) : {}, o = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function(e2) {
        return Object.getOwnPropertyDescriptor(t, e2).enumerable;
      })), o.forEach(function(r3) {
        _defineProperty(e, r3, t[r3]);
      });
    }
    return e;
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/createClass.js
  function _defineProperties(e, r2) {
    for (var t = 0; t < r2.length; t++) {
      var o = r2[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r2, t) {
    return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/inherits.js
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }

  // node_modules/.pnpm/react-sortable-hoc@2.0.0_prop-types@15.8.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js
  var import_react3 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());
  var import_invariant = __toESM(require_browser());

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
  function _arrayWithoutHoles(r2) {
    if (Array.isArray(r2)) return _arrayLikeToArray(r2);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(r2) {
    if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
  function _toConsumableArray(r2) {
    return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
  }

  // node_modules/.pnpm/react-sortable-hoc@2.0.0_prop-types@15.8.1_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js
  var import_prop_types = __toESM(require_prop_types());
  var Manager = function() {
    function Manager2() {
      _classCallCheck(this, Manager2);
      _defineProperty(this, "refs", {});
    }
    _createClass(Manager2, [{
      key: "add",
      value: function add2(collection, ref) {
        if (!this.refs[collection]) {
          this.refs[collection] = [];
        }
        this.refs[collection].push(ref);
      }
    }, {
      key: "remove",
      value: function remove2(collection, ref) {
        var index = this.getIndex(collection, ref);
        if (index !== -1) {
          this.refs[collection].splice(index, 1);
        }
      }
    }, {
      key: "isActive",
      value: function isActive() {
        return this.active;
      }
    }, {
      key: "getActive",
      value: function getActive() {
        var _this = this;
        return this.refs[this.active.collection].find(function(_ref) {
          var node = _ref.node;
          return node.sortableInfo.index == _this.active.index;
        });
      }
    }, {
      key: "getIndex",
      value: function getIndex(collection, ref) {
        return this.refs[collection].indexOf(ref);
      }
    }, {
      key: "getOrderedRefs",
      value: function getOrderedRefs() {
        var collection = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.active.collection;
        return this.refs[collection].sort(sortByIndex);
      }
    }]);
    return Manager2;
  }();
  function sortByIndex(_ref2, _ref3) {
    var index1 = _ref2.node.sortableInfo.index;
    var index2 = _ref3.node.sortableInfo.index;
    return index1 - index2;
  }
  function omit2(obj, keysToOmit) {
    return Object.keys(obj).reduce(function(acc, key) {
      if (keysToOmit.indexOf(key) === -1) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  }
  var events = {
    end: ["touchend", "touchcancel", "mouseup"],
    move: ["touchmove", "mousemove"],
    start: ["touchstart", "mousedown"]
  };
  var vendorPrefix = function() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return "";
    }
    var styles = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"];
    var pre = (Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) || styles.OLink === "" && ["", "o"])[1];
    switch (pre) {
      case "ms":
        return "ms";
      default:
        return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : "";
    }
  }();
  function setInlineStyles(node, styles) {
    Object.keys(styles).forEach(function(key) {
      node.style[key] = styles[key];
    });
  }
  function setTranslate3d(node, translate) {
    node.style["".concat(vendorPrefix, "Transform")] = translate == null ? "" : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
  }
  function setTransitionDuration(node, duration) {
    node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? "" : "".concat(duration, "ms");
  }
  function closest(el, fn) {
    while (el) {
      if (fn(el)) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }
  function limit(min, max, value2) {
    return Math.max(min, Math.min(value2, max));
  }
  function getPixelValue(stringValue) {
    if (stringValue.substr(-2) === "px") {
      return parseFloat(stringValue);
    }
    return 0;
  }
  function getElementMargin(element) {
    var style2 = window.getComputedStyle(element);
    return {
      bottom: getPixelValue(style2.marginBottom),
      left: getPixelValue(style2.marginLeft),
      right: getPixelValue(style2.marginRight),
      top: getPixelValue(style2.marginTop)
    };
  }
  function provideDisplayName(prefix, Component$$1) {
    var componentName = Component$$1.displayName || Component$$1.name;
    return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
  }
  function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
    var boundingClientRect = node.getBoundingClientRect();
    return {
      top: boundingClientRect.top + scrollDelta.top,
      left: boundingClientRect.left + scrollDelta.left
    };
  }
  function getPosition(event) {
    if (event.touches && event.touches.length) {
      return {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      return {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY
      };
    } else {
      return {
        x: event.pageX,
        y: event.pageY
      };
    }
  }
  function isTouchEvent(event) {
    return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
  }
  function getEdgeOffset(node, parent) {
    var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      left: 0,
      top: 0
    };
    if (!node) {
      return void 0;
    }
    var nodeOffset = {
      left: offset.left + node.offsetLeft,
      top: offset.top + node.offsetTop
    };
    if (node.parentNode === parent) {
      return nodeOffset;
    }
    return getEdgeOffset(node.parentNode, parent, nodeOffset);
  }
  function getTargetIndex(newIndex, prevIndex, oldIndex) {
    if (newIndex < oldIndex && newIndex > prevIndex) {
      return newIndex - 1;
    } else if (newIndex > oldIndex && newIndex < prevIndex) {
      return newIndex + 1;
    } else {
      return newIndex;
    }
  }
  function getLockPixelOffset(_ref) {
    var lockOffset = _ref.lockOffset, width = _ref.width, height = _ref.height;
    var offsetX = lockOffset;
    var offsetY = lockOffset;
    var unit = "px";
    if (typeof lockOffset === "string") {
      var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
      (0, import_invariant.default)(match !== null, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', lockOffset);
      offsetX = parseFloat(lockOffset);
      offsetY = parseFloat(lockOffset);
      unit = match[1];
    }
    (0, import_invariant.default)(isFinite(offsetX) && isFinite(offsetY), "lockOffset value should be a finite. Given %s", lockOffset);
    if (unit === "%") {
      offsetX = offsetX * width / 100;
      offsetY = offsetY * height / 100;
    }
    return {
      x: offsetX,
      y: offsetY
    };
  }
  function getLockPixelOffsets(_ref2) {
    var height = _ref2.height, width = _ref2.width, lockOffset = _ref2.lockOffset;
    var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
    (0, import_invariant.default)(offsets.length === 2, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", lockOffset);
    var _offsets = _slicedToArray(offsets, 2), minLockOffset = _offsets[0], maxLockOffset = _offsets[1];
    return [getLockPixelOffset({
      height,
      lockOffset: minLockOffset,
      width
    }), getLockPixelOffset({
      height,
      lockOffset: maxLockOffset,
      width
    })];
  }
  function isScrollable(el) {
    var computedStyle = window.getComputedStyle(el);
    var overflowRegex = /(auto|scroll)/;
    var properties = ["overflow", "overflowX", "overflowY"];
    return properties.find(function(property) {
      return overflowRegex.test(computedStyle[property]);
    });
  }
  function getScrollingParent(el) {
    if (!(el instanceof HTMLElement)) {
      return null;
    } else if (isScrollable(el)) {
      return el;
    } else {
      return getScrollingParent(el.parentNode);
    }
  }
  function getContainerGridGap(element) {
    var style2 = window.getComputedStyle(element);
    if (style2.display === "grid") {
      return {
        x: getPixelValue(style2.gridColumnGap),
        y: getPixelValue(style2.gridRowGap)
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  var KEYCODE = {
    TAB: 9,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  var NodeType = {
    Anchor: "A",
    Button: "BUTTON",
    Canvas: "CANVAS",
    Input: "INPUT",
    Option: "OPTION",
    Textarea: "TEXTAREA",
    Select: "SELECT"
  };
  function cloneNode(node) {
    var selector = "input, textarea, select, canvas, [contenteditable]";
    var fields = node.querySelectorAll(selector);
    var clonedNode = node.cloneNode(true);
    var clonedFields = _toConsumableArray(clonedNode.querySelectorAll(selector));
    clonedFields.forEach(function(field, i) {
      if (field.type !== "file") {
        field.value = fields[i].value;
      }
      if (field.type === "radio" && field.name) {
        field.name = "__sortableClone__".concat(field.name);
      }
      if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
        var destCtx = field.getContext("2d");
        destCtx.drawImage(fields[i], 0, 0);
      }
    });
    return clonedNode;
  }
  function sortableHandle(WrappedComponent) {
    var _class, _temp;
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      withRef: false
    };
    return _temp = _class = function(_React$Component) {
      _inherits(WithSortableHandle, _React$Component);
      function WithSortableHandle() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, WithSortableHandle);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithSortableHandle)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrappedInstance", (0, import_react3.createRef)());
        return _this;
      }
      _createClass(WithSortableHandle, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var node = (0, import_react_dom.findDOMNode)(this);
          node.sortableHandle = true;
        }
      }, {
        key: "getWrappedInstance",
        value: function getWrappedInstance() {
          (0, import_invariant.default)(config.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call");
          return this.wrappedInstance.current;
        }
      }, {
        key: "render",
        value: function render() {
          var ref = config.withRef ? this.wrappedInstance : null;
          return (0, import_react3.createElement)(WrappedComponent, _extends({
            ref
          }, this.props));
        }
      }]);
      return WithSortableHandle;
    }(import_react3.Component), _defineProperty(_class, "displayName", provideDisplayName("sortableHandle", WrappedComponent)), _temp;
  }
  function isSortableHandle(node) {
    return node.sortableHandle != null;
  }
  var AutoScroller = function() {
    function AutoScroller2(container, onScrollCallback) {
      _classCallCheck(this, AutoScroller2);
      this.container = container;
      this.onScrollCallback = onScrollCallback;
    }
    _createClass(AutoScroller2, [{
      key: "clear",
      value: function clear() {
        if (this.interval == null) {
          return;
        }
        clearInterval(this.interval);
        this.interval = null;
      }
    }, {
      key: "update",
      value: function update(_ref) {
        var _this = this;
        var translate = _ref.translate, minTranslate = _ref.minTranslate, maxTranslate = _ref.maxTranslate, width = _ref.width, height = _ref.height;
        var direction = {
          x: 0,
          y: 0
        };
        var speed = {
          x: 1,
          y: 1
        };
        var acceleration = {
          x: 10,
          y: 10
        };
        var _this$container = this.container, scrollTop = _this$container.scrollTop, scrollLeft = _this$container.scrollLeft, scrollHeight = _this$container.scrollHeight, scrollWidth = _this$container.scrollWidth, clientHeight = _this$container.clientHeight, clientWidth = _this$container.clientWidth;
        var isTop = scrollTop === 0;
        var isBottom = scrollHeight - scrollTop - clientHeight === 0;
        var isLeft = scrollLeft === 0;
        var isRight = scrollWidth - scrollLeft - clientWidth === 0;
        if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
          direction.y = 1;
          speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
        } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
          direction.x = 1;
          speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
        } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
          direction.y = -1;
          speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
        } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
          direction.x = -1;
          speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
        }
        if (this.interval) {
          this.clear();
          this.isAutoScrolling = false;
        }
        if (direction.x !== 0 || direction.y !== 0) {
          this.interval = setInterval(function() {
            _this.isAutoScrolling = true;
            var offset = {
              left: speed.x * direction.x,
              top: speed.y * direction.y
            };
            _this.container.scrollTop += offset.top;
            _this.container.scrollLeft += offset.left;
            _this.onScrollCallback(offset);
          }, 5);
        }
      }
    }]);
    return AutoScroller2;
  }();
  function defaultGetHelperDimensions(_ref) {
    var node = _ref.node;
    return {
      height: node.offsetHeight,
      width: node.offsetWidth
    };
  }
  function defaultShouldCancelStart(event) {
    var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];
    if (interactiveElements.indexOf(event.target.tagName) !== -1) {
      return true;
    }
    if (closest(event.target, function(el) {
      return el.contentEditable === "true";
    })) {
      return true;
    }
    return false;
  }
  var propTypes = {
    axis: import_prop_types.default.oneOf(["x", "y", "xy"]),
    contentWindow: import_prop_types.default.any,
    disableAutoscroll: import_prop_types.default.bool,
    distance: import_prop_types.default.number,
    getContainer: import_prop_types.default.func,
    getHelperDimensions: import_prop_types.default.func,
    helperClass: import_prop_types.default.string,
    helperContainer: import_prop_types.default.oneOfType([import_prop_types.default.func, typeof HTMLElement === "undefined" ? import_prop_types.default.any : import_prop_types.default.instanceOf(HTMLElement)]),
    hideSortableGhost: import_prop_types.default.bool,
    keyboardSortingTransitionDuration: import_prop_types.default.number,
    lockAxis: import_prop_types.default.string,
    lockOffset: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]))]),
    lockToContainerEdges: import_prop_types.default.bool,
    onSortEnd: import_prop_types.default.func,
    onSortMove: import_prop_types.default.func,
    onSortOver: import_prop_types.default.func,
    onSortStart: import_prop_types.default.func,
    pressDelay: import_prop_types.default.number,
    pressThreshold: import_prop_types.default.number,
    keyCodes: import_prop_types.default.shape({
      lift: import_prop_types.default.arrayOf(import_prop_types.default.number),
      drop: import_prop_types.default.arrayOf(import_prop_types.default.number),
      cancel: import_prop_types.default.arrayOf(import_prop_types.default.number),
      up: import_prop_types.default.arrayOf(import_prop_types.default.number),
      down: import_prop_types.default.arrayOf(import_prop_types.default.number)
    }),
    shouldCancelStart: import_prop_types.default.func,
    transitionDuration: import_prop_types.default.number,
    updateBeforeSortStart: import_prop_types.default.func,
    useDragHandle: import_prop_types.default.bool,
    useWindowAsScrollContainer: import_prop_types.default.bool
  };
  var defaultKeyCodes = {
    lift: [KEYCODE.SPACE],
    drop: [KEYCODE.SPACE],
    cancel: [KEYCODE.ESC],
    up: [KEYCODE.UP, KEYCODE.LEFT],
    down: [KEYCODE.DOWN, KEYCODE.RIGHT]
  };
  var defaultProps = {
    axis: "y",
    disableAutoscroll: false,
    distance: 0,
    getHelperDimensions: defaultGetHelperDimensions,
    hideSortableGhost: true,
    lockOffset: "50%",
    lockToContainerEdges: false,
    pressDelay: 0,
    pressThreshold: 5,
    keyCodes: defaultKeyCodes,
    shouldCancelStart: defaultShouldCancelStart,
    transitionDuration: 300,
    useWindowAsScrollContainer: false
  };
  var omittedProps = Object.keys(propTypes);
  function validateProps(props) {
    (0, import_invariant.default)(!(props.distance && props.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.");
  }
  function _finallyRethrows(body, finalizer) {
    try {
      var result = body();
    } catch (e) {
      return finalizer(true, e);
    }
    if (result && result.then) {
      return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
    }
    return finalizer(false, value);
  }
  var SortableContext = (0, import_react3.createContext)({
    manager: {}
  });
  function sortableContainer(WrappedComponent) {
    var _class, _temp;
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      withRef: false
    };
    return _temp = _class = function(_React$Component) {
      _inherits(WithSortableContainer, _React$Component);
      function WithSortableContainer(props) {
        var _this;
        _classCallCheck(this, WithSortableContainer);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithSortableContainer).call(this, props));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStart", function(event) {
          var _this$props = _this.props, distance = _this$props.distance, shouldCancelStart = _this$props.shouldCancelStart;
          if (event.button === 2 || shouldCancelStart(event)) {
            return;
          }
          _this.touched = true;
          _this.position = getPosition(event);
          var node = closest(event.target, function(el) {
            return el.sortableInfo != null;
          });
          if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
            var useDragHandle = _this.props.useDragHandle;
            var _node$sortableInfo = node.sortableInfo, index = _node$sortableInfo.index, collection = _node$sortableInfo.collection, disabled = _node$sortableInfo.disabled;
            if (disabled) {
              return;
            }
            if (useDragHandle && !closest(event.target, isSortableHandle)) {
              return;
            }
            _this.manager.active = {
              collection,
              index
            };
            if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
              event.preventDefault();
            }
            if (!distance) {
              if (_this.props.pressDelay === 0) {
                _this.handlePress(event);
              } else {
                _this.pressTimer = setTimeout(function() {
                  return _this.handlePress(event);
                }, _this.props.pressDelay);
              }
            }
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nodeIsChild", function(node) {
          return node.sortableInfo.manager === _this.manager;
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMove", function(event) {
          var _this$props2 = _this.props, distance = _this$props2.distance, pressThreshold = _this$props2.pressThreshold;
          if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
            var position = getPosition(event);
            var delta = {
              x: _this.position.x - position.x,
              y: _this.position.y - position.y
            };
            var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
            _this.delta = delta;
            if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
              clearTimeout(_this.cancelTimer);
              _this.cancelTimer = setTimeout(_this.cancel, 0);
            } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
              _this.handlePress(event);
            }
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnd", function() {
          _this.touched = false;
          _this.cancel();
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancel", function() {
          var distance = _this.props.distance;
          var sorting = _this.state.sorting;
          if (!sorting) {
            if (!distance) {
              clearTimeout(_this.pressTimer);
            }
            _this.manager.active = null;
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePress", function(event) {
          try {
            var active = _this.manager.getActive();
            var _temp6 = function() {
              if (active) {
                var _temp7 = function _temp72() {
                  var index = _node.sortableInfo.index;
                  var margin = getElementMargin(_node);
                  var gridGap = getContainerGridGap(_this.container);
                  var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();
                  var dimensions = _getHelperDimensions({
                    index,
                    node: _node,
                    collection: _collection
                  });
                  _this.node = _node;
                  _this.margin = margin;
                  _this.gridGap = gridGap;
                  _this.width = dimensions.width;
                  _this.height = dimensions.height;
                  _this.marginOffset = {
                    x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                    y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                  };
                  _this.boundingClientRect = _node.getBoundingClientRect();
                  _this.containerBoundingRect = containerBoundingRect;
                  _this.index = index;
                  _this.newIndex = index;
                  _this.axis = {
                    x: _axis.indexOf("x") >= 0,
                    y: _axis.indexOf("y") >= 0
                  };
                  _this.offsetEdge = getEdgeOffset(_node, _this.container);
                  if (_isKeySorting) {
                    _this.initialOffset = getPosition(_objectSpread({}, event, {
                      pageX: _this.boundingClientRect.left,
                      pageY: _this.boundingClientRect.top
                    }));
                  } else {
                    _this.initialOffset = getPosition(event);
                  }
                  _this.initialScroll = {
                    left: _this.scrollContainer.scrollLeft,
                    top: _this.scrollContainer.scrollTop
                  };
                  _this.initialWindowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                  };
                  _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                  setInlineStyles(_this.helper, {
                    boxSizing: "border-box",
                    height: "".concat(_this.height, "px"),
                    left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                    pointerEvents: "none",
                    position: "fixed",
                    top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                    width: "".concat(_this.width, "px")
                  });
                  if (_isKeySorting) {
                    _this.helper.focus();
                  }
                  if (_hideSortableGhost) {
                    _this.sortableGhost = _node;
                    setInlineStyles(_node, {
                      opacity: 0,
                      visibility: "hidden"
                    });
                  }
                  _this.minTranslate = {};
                  _this.maxTranslate = {};
                  if (_isKeySorting) {
                    var _ref = _useWindowAsScrollContainer ? {
                      top: 0,
                      left: 0,
                      width: _this.contentWindow.innerWidth,
                      height: _this.contentWindow.innerHeight
                    } : _this.containerBoundingRect, containerTop = _ref.top, containerLeft = _ref.left, containerWidth = _ref.width, containerHeight = _ref.height;
                    var containerBottom = containerTop + containerHeight;
                    var containerRight = containerLeft + containerWidth;
                    if (_this.axis.x) {
                      _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                      _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                    }
                    if (_this.axis.y) {
                      _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                      _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                    }
                  } else {
                    if (_this.axis.x) {
                      _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                      _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                    }
                    if (_this.axis.y) {
                      _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                      _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                    }
                  }
                  if (_helperClass) {
                    _helperClass.split(" ").forEach(function(className) {
                      return _this.helper.classList.add(className);
                    });
                  }
                  _this.listenerNode = event.touches ? event.target : _this.contentWindow;
                  if (_isKeySorting) {
                    _this.listenerNode.addEventListener("wheel", _this.handleKeyEnd, true);
                    _this.listenerNode.addEventListener("mousedown", _this.handleKeyEnd, true);
                    _this.listenerNode.addEventListener("keydown", _this.handleKeyDown);
                  } else {
                    events.move.forEach(function(eventName) {
                      return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                    });
                    events.end.forEach(function(eventName) {
                      return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                    });
                  }
                  _this.setState({
                    sorting: true,
                    sortingIndex: index
                  });
                  if (_onSortStart) {
                    _onSortStart({
                      node: _node,
                      index,
                      collection: _collection,
                      isKeySorting: _isKeySorting,
                      nodes: _this.manager.getOrderedRefs(),
                      helper: _this.helper
                    }, event);
                  }
                  if (_isKeySorting) {
                    _this.keyMove(0);
                  }
                };
                var _this$props3 = _this.props, _axis = _this$props3.axis, _getHelperDimensions = _this$props3.getHelperDimensions, _helperClass = _this$props3.helperClass, _hideSortableGhost = _this$props3.hideSortableGhost, updateBeforeSortStart = _this$props3.updateBeforeSortStart, _onSortStart = _this$props3.onSortStart, _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
                var _node = active.node, _collection = active.collection;
                var _isKeySorting = _this.manager.isKeySorting;
                var _temp8 = function() {
                  if (typeof updateBeforeSortStart === "function") {
                    _this._awaitingUpdateBeforeSortStart = true;
                    var _temp9 = _finallyRethrows(function() {
                      var index = _node.sortableInfo.index;
                      return Promise.resolve(updateBeforeSortStart({
                        collection: _collection,
                        index,
                        node: _node,
                        isKeySorting: _isKeySorting
                      }, event)).then(function() {
                      });
                    }, function(_wasThrown, _result) {
                      _this._awaitingUpdateBeforeSortStart = false;
                      if (_wasThrown) throw _result;
                      return _result;
                    });
                    if (_temp9 && _temp9.then) return _temp9.then(function() {
                    });
                  }
                }();
                return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
              }
            }();
            return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function() {
            }) : void 0);
          } catch (e) {
            return Promise.reject(e);
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortMove", function(event) {
          var onSortMove = _this.props.onSortMove;
          if (typeof event.preventDefault === "function" && event.cancelable) {
            event.preventDefault();
          }
          _this.updateHelperPosition(event);
          _this.animateNodes();
          _this.autoscroll();
          if (onSortMove) {
            onSortMove(event);
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortEnd", function(event) {
          var _this$props4 = _this.props, hideSortableGhost = _this$props4.hideSortableGhost, onSortEnd = _this$props4.onSortEnd;
          var _this$manager = _this.manager, collection = _this$manager.active.collection, isKeySorting = _this$manager.isKeySorting;
          var nodes = _this.manager.getOrderedRefs();
          if (_this.listenerNode) {
            if (isKeySorting) {
              _this.listenerNode.removeEventListener("wheel", _this.handleKeyEnd, true);
              _this.listenerNode.removeEventListener("mousedown", _this.handleKeyEnd, true);
              _this.listenerNode.removeEventListener("keydown", _this.handleKeyDown);
            } else {
              events.move.forEach(function(eventName) {
                return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
              });
              events.end.forEach(function(eventName) {
                return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
              });
            }
          }
          _this.helper.parentNode.removeChild(_this.helper);
          if (hideSortableGhost && _this.sortableGhost) {
            setInlineStyles(_this.sortableGhost, {
              opacity: "",
              visibility: ""
            });
          }
          for (var i = 0, len = nodes.length; i < len; i++) {
            var _node2 = nodes[i];
            var el = _node2.node;
            _node2.edgeOffset = null;
            _node2.boundingClientRect = null;
            setTranslate3d(el, null);
            setTransitionDuration(el, null);
            _node2.translate = null;
          }
          _this.autoScroller.clear();
          _this.manager.active = null;
          _this.manager.isKeySorting = false;
          _this.setState({
            sorting: false,
            sortingIndex: null
          });
          if (typeof onSortEnd === "function") {
            onSortEnd({
              collection,
              newIndex: _this.newIndex,
              oldIndex: _this.index,
              isKeySorting,
              nodes
            }, event);
          }
          _this.touched = false;
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autoscroll", function() {
          var disableAutoscroll = _this.props.disableAutoscroll;
          var isKeySorting = _this.manager.isKeySorting;
          if (disableAutoscroll) {
            _this.autoScroller.clear();
            return;
          }
          if (isKeySorting) {
            var translate = _objectSpread({}, _this.translate);
            var scrollX2 = 0;
            var scrollY2 = 0;
            if (_this.axis.x) {
              translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
              scrollX2 = _this.translate.x - translate.x;
            }
            if (_this.axis.y) {
              translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
              scrollY2 = _this.translate.y - translate.y;
            }
            _this.translate = translate;
            setTranslate3d(_this.helper, _this.translate);
            _this.scrollContainer.scrollLeft += scrollX2;
            _this.scrollContainer.scrollTop += scrollY2;
            return;
          }
          _this.autoScroller.update({
            height: _this.height,
            maxTranslate: _this.maxTranslate,
            minTranslate: _this.minTranslate,
            translate: _this.translate,
            width: _this.width
          });
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAutoScroll", function(offset) {
          _this.translate.x += offset.left;
          _this.translate.y += offset.top;
          _this.animateNodes();
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function(event) {
          var keyCode = event.keyCode;
          var _this$props5 = _this.props, shouldCancelStart = _this$props5.shouldCancelStart, _this$props5$keyCodes = _this$props5.keyCodes, customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;
          var keyCodes = _objectSpread({}, defaultKeyCodes, customKeyCodes);
          if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
            return;
          }
          event.stopPropagation();
          event.preventDefault();
          if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
            _this.keyLift(event);
          } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
            _this.keyDrop(event);
          } else if (keyCodes.cancel.includes(keyCode)) {
            _this.newIndex = _this.manager.active.index;
            _this.keyDrop(event);
          } else if (keyCodes.up.includes(keyCode)) {
            _this.keyMove(-1);
          } else if (keyCodes.down.includes(keyCode)) {
            _this.keyMove(1);
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyLift", function(event) {
          var target2 = event.target;
          var node = closest(target2, function(el) {
            return el.sortableInfo != null;
          });
          var _node$sortableInfo2 = node.sortableInfo, index = _node$sortableInfo2.index, collection = _node$sortableInfo2.collection;
          _this.initialFocusedNode = target2;
          _this.manager.isKeySorting = true;
          _this.manager.active = {
            index,
            collection
          };
          _this.handlePress(event);
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyMove", function(shift) {
          var nodes = _this.manager.getOrderedRefs();
          var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
          var newIndex = _this.newIndex + shift;
          var prevIndex = _this.newIndex;
          if (newIndex < 0 || newIndex > lastIndex) {
            return;
          }
          _this.prevIndex = prevIndex;
          _this.newIndex = newIndex;
          var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
          var target2 = nodes.find(function(_ref2) {
            var node = _ref2.node;
            return node.sortableInfo.index === targetIndex;
          });
          var targetNode = target2.node;
          var scrollDelta = _this.containerScrollDelta;
          var targetBoundingClientRect = target2.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
          var targetTranslate = target2.translate || {
            x: 0,
            y: 0
          };
          var targetPosition = {
            top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
            left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
          };
          var shouldAdjustForSize = prevIndex < newIndex;
          var sizeAdjustment = {
            x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
            y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
          };
          _this.handleSortMove({
            pageX: targetPosition.left + sizeAdjustment.x,
            pageY: targetPosition.top + sizeAdjustment.y,
            ignoreTransition: shift === 0
          });
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyDrop", function(event) {
          _this.handleSortEnd(event);
          if (_this.initialFocusedNode) {
            _this.initialFocusedNode.focus();
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyEnd", function(event) {
          if (_this.manager.active) {
            _this.keyDrop(event);
          }
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isValidSortingTarget", function(event) {
          var useDragHandle = _this.props.useDragHandle;
          var target2 = event.target;
          var node = closest(target2, function(el) {
            return el.sortableInfo != null;
          });
          return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target2) : target2.sortableInfo);
        });
        var manager = new Manager();
        validateProps(props);
        _this.manager = manager;
        _this.wrappedInstance = (0, import_react3.createRef)();
        _this.sortableContextValue = {
          manager
        };
        _this.events = {
          end: _this.handleEnd,
          move: _this.handleMove,
          start: _this.handleStart
        };
        return _this;
      }
      _createClass(WithSortableContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
          var container = this.getContainer();
          Promise.resolve(container).then(function(containerNode) {
            _this2.container = containerNode;
            _this2.document = _this2.container.ownerDocument || document;
            var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
            _this2.contentWindow = typeof contentWindow === "function" ? contentWindow() : contentWindow;
            _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
            _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
            Object.keys(_this2.events).forEach(function(key) {
              return events[key].forEach(function(eventName) {
                return _this2.container.addEventListener(eventName, _this2.events[key], false);
              });
            });
            _this2.container.addEventListener("keydown", _this2.handleKeyDown);
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;
          if (this.helper && this.helper.parentNode) {
            this.helper.parentNode.removeChild(this.helper);
          }
          if (!this.container) {
            return;
          }
          Object.keys(this.events).forEach(function(key) {
            return events[key].forEach(function(eventName) {
              return _this3.container.removeEventListener(eventName, _this3.events[key]);
            });
          });
          this.container.removeEventListener("keydown", this.handleKeyDown);
        }
      }, {
        key: "updateHelperPosition",
        value: function updateHelperPosition(event) {
          var _this$props6 = this.props, lockAxis = _this$props6.lockAxis, lockOffset = _this$props6.lockOffset, lockToContainerEdges = _this$props6.lockToContainerEdges, transitionDuration = _this$props6.transitionDuration, _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration, keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
          var isKeySorting = this.manager.isKeySorting;
          var ignoreTransition = event.ignoreTransition;
          var offset = getPosition(event);
          var translate = {
            x: offset.x - this.initialOffset.x,
            y: offset.y - this.initialOffset.y
          };
          translate.y -= window.pageYOffset - this.initialWindowScroll.top;
          translate.x -= window.pageXOffset - this.initialWindowScroll.left;
          this.translate = translate;
          if (lockToContainerEdges) {
            var _getLockPixelOffsets = getLockPixelOffsets({
              height: this.height,
              lockOffset,
              width: this.width
            }), _getLockPixelOffsets2 = _slicedToArray(_getLockPixelOffsets, 2), minLockOffset = _getLockPixelOffsets2[0], maxLockOffset = _getLockPixelOffsets2[1];
            var minOffset = {
              x: this.width / 2 - minLockOffset.x,
              y: this.height / 2 - minLockOffset.y
            };
            var maxOffset = {
              x: this.width / 2 - maxLockOffset.x,
              y: this.height / 2 - maxLockOffset.y
            };
            translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
            translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
          }
          if (lockAxis === "x") {
            translate.y = 0;
          } else if (lockAxis === "y") {
            translate.x = 0;
          }
          if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
            setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
          }
          setTranslate3d(this.helper, translate);
        }
      }, {
        key: "animateNodes",
        value: function animateNodes() {
          var _this$props7 = this.props, transitionDuration = _this$props7.transitionDuration, hideSortableGhost = _this$props7.hideSortableGhost, onSortOver = _this$props7.onSortOver;
          var containerScrollDelta = this.containerScrollDelta, windowScrollDelta = this.windowScrollDelta;
          var nodes = this.manager.getOrderedRefs();
          var sortingOffset = {
            left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
            top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
          };
          var isKeySorting = this.manager.isKeySorting;
          var prevIndex = this.newIndex;
          this.newIndex = null;
          for (var i = 0, len = nodes.length; i < len; i++) {
            var _node3 = nodes[i].node;
            var index = _node3.sortableInfo.index;
            var width = _node3.offsetWidth;
            var height = _node3.offsetHeight;
            var offset = {
              height: this.height > height ? height / 2 : this.height / 2,
              width: this.width > width ? width / 2 : this.width / 2
            };
            var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
            var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
            var translate = {
              x: 0,
              y: 0
            };
            var edgeOffset = nodes[i].edgeOffset;
            if (!edgeOffset) {
              edgeOffset = getEdgeOffset(_node3, this.container);
              nodes[i].edgeOffset = edgeOffset;
              if (isKeySorting) {
                nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
              }
            }
            var nextNode = i < nodes.length - 1 && nodes[i + 1];
            var prevNode = i > 0 && nodes[i - 1];
            if (nextNode && !nextNode.edgeOffset) {
              nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);
              if (isKeySorting) {
                nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
              }
            }
            if (index === this.index) {
              if (hideSortableGhost) {
                this.sortableGhost = _node3;
                setInlineStyles(_node3, {
                  opacity: 0,
                  visibility: "hidden"
                });
              }
              continue;
            }
            if (transitionDuration) {
              setTransitionDuration(_node3, transitionDuration);
            }
            if (this.axis.x) {
              if (this.axis.y) {
                if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                  translate.x = this.width + this.marginOffset.x;
                  if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                    if (nextNode) {
                      translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                      translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                    }
                  }
                  if (this.newIndex === null) {
                    this.newIndex = index;
                  }
                } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                  translate.x = -(this.width + this.marginOffset.x);
                  if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                    if (prevNode) {
                      translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                      translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                    }
                  }
                  this.newIndex = index;
                }
              } else {
                if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                  translate.x = -(this.width + this.marginOffset.x);
                  this.newIndex = index;
                } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                  translate.x = this.width + this.marginOffset.x;
                  if (this.newIndex == null) {
                    this.newIndex = index;
                  }
                }
              }
            } else if (this.axis.y) {
              if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
                translate.y = -(this.height + this.marginOffset.y);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
                translate.y = this.height + this.marginOffset.y;
                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
            setTranslate3d(_node3, translate);
            nodes[i].translate = translate;
          }
          if (this.newIndex == null) {
            this.newIndex = this.index;
          }
          if (isKeySorting) {
            this.newIndex = prevIndex;
          }
          var oldIndex = isKeySorting ? this.prevIndex : prevIndex;
          if (onSortOver && this.newIndex !== oldIndex) {
            onSortOver({
              collection: this.manager.active.collection,
              index: this.index,
              newIndex: this.newIndex,
              oldIndex,
              isKeySorting,
              nodes,
              helper: this.helper
            });
          }
        }
      }, {
        key: "getWrappedInstance",
        value: function getWrappedInstance() {
          (0, import_invariant.default)(config.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call");
          return this.wrappedInstance.current;
        }
      }, {
        key: "getContainer",
        value: function getContainer() {
          var getContainer2 = this.props.getContainer;
          if (typeof getContainer2 !== "function") {
            return (0, import_react_dom.findDOMNode)(this);
          }
          return getContainer2(config.withRef ? this.getWrappedInstance() : void 0);
        }
      }, {
        key: "render",
        value: function render() {
          var ref = config.withRef ? this.wrappedInstance : null;
          return (0, import_react3.createElement)(SortableContext.Provider, {
            value: this.sortableContextValue
          }, (0, import_react3.createElement)(WrappedComponent, _extends({
            ref
          }, omit2(this.props, omittedProps))));
        }
      }, {
        key: "helperContainer",
        get: function get() {
          var helperContainer = this.props.helperContainer;
          if (typeof helperContainer === "function") {
            return helperContainer();
          }
          return this.props.helperContainer || this.document.body;
        }
      }, {
        key: "containerScrollDelta",
        get: function get() {
          var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
          if (useWindowAsScrollContainer) {
            return {
              left: 0,
              top: 0
            };
          }
          return {
            left: this.scrollContainer.scrollLeft - this.initialScroll.left,
            top: this.scrollContainer.scrollTop - this.initialScroll.top
          };
        }
      }, {
        key: "windowScrollDelta",
        get: function get() {
          return {
            left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
            top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
          };
        }
      }]);
      return WithSortableContainer;
    }(import_react3.Component), _defineProperty(_class, "displayName", provideDisplayName("sortableList", WrappedComponent)), _defineProperty(_class, "defaultProps", defaultProps), _defineProperty(_class, "propTypes", propTypes), _temp;
  }
  var propTypes$1 = {
    index: import_prop_types.default.number.isRequired,
    collection: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
    disabled: import_prop_types.default.bool
  };
  var omittedProps$1 = Object.keys(propTypes$1);
  function sortableElement(WrappedComponent) {
    var _class, _temp;
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      withRef: false
    };
    return _temp = _class = function(_React$Component) {
      _inherits(WithSortableElement, _React$Component);
      function WithSortableElement() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, WithSortableElement);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithSortableElement)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrappedInstance", (0, import_react3.createRef)());
        return _this;
      }
      _createClass(WithSortableElement, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.register();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.node) {
            if (prevProps.index !== this.props.index) {
              this.node.sortableInfo.index = this.props.index;
            }
            if (prevProps.disabled !== this.props.disabled) {
              this.node.sortableInfo.disabled = this.props.disabled;
            }
          }
          if (prevProps.collection !== this.props.collection) {
            this.unregister(prevProps.collection);
            this.register();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unregister();
        }
      }, {
        key: "register",
        value: function register() {
          var _this$props = this.props, collection = _this$props.collection, disabled = _this$props.disabled, index = _this$props.index;
          var node = (0, import_react_dom.findDOMNode)(this);
          node.sortableInfo = {
            collection,
            disabled,
            index,
            manager: this.context.manager
          };
          this.node = node;
          this.ref = {
            node
          };
          this.context.manager.add(collection, this.ref);
        }
      }, {
        key: "unregister",
        value: function unregister() {
          var collection = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.collection;
          this.context.manager.remove(collection, this.ref);
        }
      }, {
        key: "getWrappedInstance",
        value: function getWrappedInstance() {
          (0, import_invariant.default)(config.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call");
          return this.wrappedInstance.current;
        }
      }, {
        key: "render",
        value: function render() {
          var ref = config.withRef ? this.wrappedInstance : null;
          return (0, import_react3.createElement)(WrappedComponent, _extends({
            ref
          }, omit2(this.props, omittedProps$1)));
        }
      }]);
      return WithSortableElement;
    }(import_react3.Component), _defineProperty(_class, "displayName", provideDisplayName("sortableElement", WrappedComponent)), _defineProperty(_class, "contextType", SortableContext), _defineProperty(_class, "propTypes", propTypes$1), _defineProperty(_class, "defaultProps", {
      collection: 0
    }), _temp;
  }

  // node_modules/.pnpm/@formkit+auto-animate@0.8.2/node_modules/@formkit/auto-animate/react/index.mjs
  var import_react4 = __toESM(require_react(), 1);

  // node_modules/.pnpm/@formkit+auto-animate@0.8.2/node_modules/@formkit/auto-animate/index.mjs
  var parents = /* @__PURE__ */ new Set();
  var coords = /* @__PURE__ */ new WeakMap();
  var siblings = /* @__PURE__ */ new WeakMap();
  var animations = /* @__PURE__ */ new WeakMap();
  var intersections = /* @__PURE__ */ new WeakMap();
  var intervals = /* @__PURE__ */ new WeakMap();
  var options = /* @__PURE__ */ new WeakMap();
  var debounces = /* @__PURE__ */ new WeakMap();
  var enabled = /* @__PURE__ */ new WeakSet();
  var root;
  var scrollX = 0;
  var scrollY = 0;
  var TGT = "__aa_tgt";
  var DEL = "__aa_del";
  var NEW = "__aa_new";
  var handleMutations = (mutations2) => {
    const elements = getElements(mutations2);
    if (elements) {
      elements.forEach((el) => animate(el));
    }
  };
  var handleResizes = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === root)
        updateAllPos();
      if (coords.has(entry.target))
        updatePos(entry.target);
    });
  };
  function observePosition(el) {
    const oldObserver = intersections.get(el);
    oldObserver === null || oldObserver === void 0 ? void 0 : oldObserver.disconnect();
    let rect = coords.get(el);
    let invocations = 0;
    const buffer = 5;
    if (!rect) {
      rect = getCoords(el);
      coords.set(el, rect);
    }
    const { offsetWidth, offsetHeight } = root;
    const rootMargins = [
      rect.top - buffer,
      offsetWidth - (rect.left + buffer + rect.width),
      offsetHeight - (rect.top + buffer + rect.height),
      rect.left - buffer
    ];
    const rootMargin = rootMargins.map((px) => `${-1 * Math.floor(px)}px`).join(" ");
    const observer = new IntersectionObserver(() => {
      ++invocations > 1 && updatePos(el);
    }, {
      root,
      threshold: 1,
      rootMargin
    });
    observer.observe(el);
    intersections.set(el, observer);
  }
  function updatePos(el) {
    clearTimeout(debounces.get(el));
    const optionsOrPlugin = getOptions(el);
    const delay = isPlugin(optionsOrPlugin) ? 500 : optionsOrPlugin.duration;
    debounces.set(el, setTimeout(async () => {
      const currentAnimation = animations.get(el);
      try {
        await (currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.finished);
        coords.set(el, getCoords(el));
        observePosition(el);
      } catch {
      }
    }, delay));
  }
  function updateAllPos() {
    clearTimeout(debounces.get(root));
    debounces.set(root, setTimeout(() => {
      parents.forEach((parent) => forEach(parent, (el) => lowPriority(() => updatePos(el))));
    }, 100));
  }
  function poll(el) {
    setTimeout(() => {
      intervals.set(el, setInterval(() => lowPriority(updatePos.bind(null, el)), 2e3));
    }, Math.round(2e3 * Math.random()));
  }
  function lowPriority(callback) {
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(() => callback());
    } else {
      requestAnimationFrame(() => callback());
    }
  }
  var mutations;
  var resize;
  var supportedBrowser = typeof window !== "undefined" && "ResizeObserver" in window;
  if (supportedBrowser) {
    root = document.documentElement;
    mutations = new MutationObserver(handleMutations);
    resize = new ResizeObserver(handleResizes);
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      scrollX = window.scrollX;
    });
    resize.observe(root);
  }
  function getElements(mutations2) {
    const observedNodes = mutations2.reduce((nodes, mutation) => {
      return [
        ...nodes,
        ...Array.from(mutation.addedNodes),
        ...Array.from(mutation.removedNodes)
      ];
    }, []);
    const onlyCommentNodesObserved = observedNodes.every((node) => node.nodeName === "#comment");
    if (onlyCommentNodesObserved)
      return false;
    return mutations2.reduce((elements, mutation) => {
      if (elements === false)
        return false;
      if (mutation.target instanceof Element) {
        target(mutation.target);
        if (!elements.has(mutation.target)) {
          elements.add(mutation.target);
          for (let i = 0; i < mutation.target.children.length; i++) {
            const child = mutation.target.children.item(i);
            if (!child)
              continue;
            if (DEL in child) {
              return false;
            }
            target(mutation.target, child);
            elements.add(child);
          }
        }
        if (mutation.removedNodes.length) {
          for (let i = 0; i < mutation.removedNodes.length; i++) {
            const child = mutation.removedNodes[i];
            if (DEL in child) {
              return false;
            }
            if (child instanceof Element) {
              elements.add(child);
              target(mutation.target, child);
              siblings.set(child, [
                mutation.previousSibling,
                mutation.nextSibling
              ]);
            }
          }
        }
      }
      return elements;
    }, /* @__PURE__ */ new Set());
  }
  function target(el, child) {
    if (!child && !(TGT in el))
      Object.defineProperty(el, TGT, { value: el });
    else if (child && !(TGT in child))
      Object.defineProperty(child, TGT, { value: el });
  }
  function animate(el) {
    var _a;
    const isMounted = el.isConnected;
    const preExisting = coords.has(el);
    if (isMounted && siblings.has(el))
      siblings.delete(el);
    if (animations.has(el)) {
      (_a = animations.get(el)) === null || _a === void 0 ? void 0 : _a.cancel();
    }
    if (NEW in el) {
      add(el);
    } else if (preExisting && isMounted) {
      remain(el);
    } else if (preExisting && !isMounted) {
      remove(el);
    } else {
      add(el);
    }
  }
  function raw(str) {
    return Number(str.replace(/[^0-9.\-]/g, ""));
  }
  function getScrollOffset(el) {
    let p = el.parentElement;
    while (p) {
      if (p.scrollLeft || p.scrollTop) {
        return { x: p.scrollLeft, y: p.scrollTop };
      }
      p = p.parentElement;
    }
    return { x: 0, y: 0 };
  }
  function getCoords(el) {
    const rect = el.getBoundingClientRect();
    const { x, y } = getScrollOffset(el);
    return {
      top: rect.top + y,
      left: rect.left + x,
      width: rect.width,
      height: rect.height
    };
  }
  function getTransitionSizes(el, oldCoords, newCoords) {
    let widthFrom = oldCoords.width;
    let heightFrom = oldCoords.height;
    let widthTo = newCoords.width;
    let heightTo = newCoords.height;
    const styles = getComputedStyle(el);
    const sizing = styles.getPropertyValue("box-sizing");
    if (sizing === "content-box") {
      const paddingY = raw(styles.paddingTop) + raw(styles.paddingBottom) + raw(styles.borderTopWidth) + raw(styles.borderBottomWidth);
      const paddingX = raw(styles.paddingLeft) + raw(styles.paddingRight) + raw(styles.borderRightWidth) + raw(styles.borderLeftWidth);
      widthFrom -= paddingX;
      widthTo -= paddingX;
      heightFrom -= paddingY;
      heightTo -= paddingY;
    }
    return [widthFrom, widthTo, heightFrom, heightTo].map(Math.round);
  }
  function getOptions(el) {
    return TGT in el && options.has(el[TGT]) ? options.get(el[TGT]) : { duration: 250, easing: "ease-in-out" };
  }
  function getTarget(el) {
    if (TGT in el)
      return el[TGT];
    return void 0;
  }
  function isEnabled(el) {
    const target2 = getTarget(el);
    return target2 ? enabled.has(target2) : false;
  }
  function forEach(parent, ...callbacks) {
    callbacks.forEach((callback) => callback(parent, options.has(parent)));
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children.item(i);
      if (child) {
        callbacks.forEach((callback) => callback(child, options.has(child)));
      }
    }
  }
  function getPluginTuple(pluginReturn) {
    if (Array.isArray(pluginReturn))
      return pluginReturn;
    return [pluginReturn];
  }
  function isPlugin(config) {
    return typeof config === "function";
  }
  function remain(el) {
    const oldCoords = coords.get(el);
    const newCoords = getCoords(el);
    if (!isEnabled(el))
      return coords.set(el, newCoords);
    let animation;
    if (!oldCoords)
      return;
    const pluginOrOptions = getOptions(el);
    if (typeof pluginOrOptions !== "function") {
      const deltaX = oldCoords.left - newCoords.left;
      const deltaY = oldCoords.top - newCoords.top;
      const [widthFrom, widthTo, heightFrom, heightTo] = getTransitionSizes(el, oldCoords, newCoords);
      const start = {
        transform: `translate(${deltaX}px, ${deltaY}px)`
      };
      const end = {
        transform: `translate(0, 0)`
      };
      if (widthFrom !== widthTo) {
        start.width = `${widthFrom}px`;
        end.width = `${widthTo}px`;
      }
      if (heightFrom !== heightTo) {
        start.height = `${heightFrom}px`;
        end.height = `${heightTo}px`;
      }
      animation = el.animate([start, end], {
        duration: pluginOrOptions.duration,
        easing: pluginOrOptions.easing
      });
    } else {
      const [keyframes] = getPluginTuple(pluginOrOptions(el, "remain", oldCoords, newCoords));
      animation = new Animation(keyframes);
      animation.play();
    }
    animations.set(el, animation);
    coords.set(el, newCoords);
    animation.addEventListener("finish", updatePos.bind(null, el));
  }
  function add(el) {
    if (NEW in el)
      delete el[NEW];
    const newCoords = getCoords(el);
    coords.set(el, newCoords);
    const pluginOrOptions = getOptions(el);
    if (!isEnabled(el))
      return;
    let animation;
    if (typeof pluginOrOptions !== "function") {
      animation = el.animate([
        { transform: "scale(.98)", opacity: 0 },
        { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
        { transform: "scale(1)", opacity: 1 }
      ], {
        duration: pluginOrOptions.duration * 1.5,
        easing: "ease-in"
      });
    } else {
      const [keyframes] = getPluginTuple(pluginOrOptions(el, "add", newCoords));
      animation = new Animation(keyframes);
      animation.play();
    }
    animations.set(el, animation);
    animation.addEventListener("finish", updatePos.bind(null, el));
  }
  function cleanUp(el, styles) {
    var _a;
    el.remove();
    coords.delete(el);
    siblings.delete(el);
    animations.delete(el);
    (_a = intersections.get(el)) === null || _a === void 0 ? void 0 : _a.disconnect();
    setTimeout(() => {
      if (DEL in el)
        delete el[DEL];
      Object.defineProperty(el, NEW, { value: true, configurable: true });
      if (styles && el instanceof HTMLElement) {
        for (const style2 in styles) {
          el.style[style2] = "";
        }
      }
    }, 0);
  }
  function remove(el) {
    var _a;
    if (!siblings.has(el) || !coords.has(el))
      return;
    const [prev, next] = siblings.get(el);
    Object.defineProperty(el, DEL, { value: true, configurable: true });
    const finalX = window.scrollX;
    const finalY = window.scrollY;
    if (next && next.parentNode && next.parentNode instanceof Element) {
      next.parentNode.insertBefore(el, next);
    } else if (prev && prev.parentNode) {
      prev.parentNode.appendChild(el);
    } else {
      (_a = getTarget(el)) === null || _a === void 0 ? void 0 : _a.appendChild(el);
    }
    if (!isEnabled(el))
      return cleanUp(el);
    const [top, left, width, height] = deletePosition(el);
    const optionsOrPlugin = getOptions(el);
    const oldCoords = coords.get(el);
    if (finalX !== scrollX || finalY !== scrollY) {
      adjustScroll(el, finalX, finalY, optionsOrPlugin);
    }
    let animation;
    let styleReset = {
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
      margin: "0",
      pointerEvents: "none",
      transformOrigin: "center",
      zIndex: "100"
    };
    if (!isPlugin(optionsOrPlugin)) {
      Object.assign(el.style, styleReset);
      animation = el.animate([
        {
          transform: "scale(1)",
          opacity: 1
        },
        {
          transform: "scale(.98)",
          opacity: 0
        }
      ], { duration: optionsOrPlugin.duration, easing: "ease-out" });
    } else {
      const [keyframes, options2] = getPluginTuple(optionsOrPlugin(el, "remove", oldCoords));
      if ((options2 === null || options2 === void 0 ? void 0 : options2.styleReset) !== false) {
        styleReset = (options2 === null || options2 === void 0 ? void 0 : options2.styleReset) || styleReset;
        Object.assign(el.style, styleReset);
      }
      animation = new Animation(keyframes);
      animation.play();
    }
    animations.set(el, animation);
    animation.addEventListener("finish", cleanUp.bind(null, el, styleReset));
  }
  function adjustScroll(el, finalX, finalY, optionsOrPlugin) {
    const scrollDeltaX = scrollX - finalX;
    const scrollDeltaY = scrollY - finalY;
    const scrollBefore = document.documentElement.style.scrollBehavior;
    const scrollBehavior = getComputedStyle(root).scrollBehavior;
    if (scrollBehavior === "smooth") {
      document.documentElement.style.scrollBehavior = "auto";
    }
    window.scrollTo(window.scrollX + scrollDeltaX, window.scrollY + scrollDeltaY);
    if (!el.parentElement)
      return;
    const parent = el.parentElement;
    let lastHeight = parent.clientHeight;
    let lastWidth = parent.clientWidth;
    const startScroll = performance.now();
    function smoothScroll() {
      requestAnimationFrame(() => {
        if (!isPlugin(optionsOrPlugin)) {
          const deltaY = lastHeight - parent.clientHeight;
          const deltaX = lastWidth - parent.clientWidth;
          if (startScroll + optionsOrPlugin.duration > performance.now()) {
            window.scrollTo({
              left: window.scrollX - deltaX,
              top: window.scrollY - deltaY
            });
            lastHeight = parent.clientHeight;
            lastWidth = parent.clientWidth;
            smoothScroll();
          } else {
            document.documentElement.style.scrollBehavior = scrollBefore;
          }
        }
      });
    }
    smoothScroll();
  }
  function deletePosition(el) {
    const oldCoords = coords.get(el);
    const [width, , height] = getTransitionSizes(el, oldCoords, getCoords(el));
    let offsetParent = el.parentElement;
    while (offsetParent && (getComputedStyle(offsetParent).position === "static" || offsetParent instanceof HTMLBodyElement)) {
      offsetParent = offsetParent.parentElement;
    }
    if (!offsetParent)
      offsetParent = document.body;
    const parentStyles = getComputedStyle(offsetParent);
    const parentCoords = coords.get(offsetParent) || getCoords(offsetParent);
    const top = Math.round(oldCoords.top - parentCoords.top) - raw(parentStyles.borderTopWidth);
    const left = Math.round(oldCoords.left - parentCoords.left) - raw(parentStyles.borderLeftWidth);
    return [top, left, width, height];
  }
  function autoAnimate(el, config = {}) {
    if (mutations && resize) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const isDisabledDueToReduceMotion = mediaQuery.matches && !isPlugin(config) && !config.disrespectUserMotionPreference;
      if (!isDisabledDueToReduceMotion) {
        enabled.add(el);
        if (getComputedStyle(el).position === "static") {
          Object.assign(el.style, { position: "relative" });
        }
        forEach(el, updatePos, poll, (element) => resize === null || resize === void 0 ? void 0 : resize.observe(element));
        if (isPlugin(config)) {
          options.set(el, config);
        } else {
          options.set(el, { duration: 250, easing: "ease-in-out", ...config });
        }
        mutations.observe(el, { childList: true });
        parents.add(el);
      }
    }
    return Object.freeze({
      parent: el,
      enable: () => {
        enabled.add(el);
      },
      disable: () => {
        enabled.delete(el);
      },
      isEnabled: () => enabled.has(el)
    });
  }

  // node_modules/.pnpm/@formkit+auto-animate@0.8.2/node_modules/@formkit/auto-animate/react/index.mjs
  function useAutoAnimate(options2) {
    const [controller, setController] = (0, import_react4.useState)();
    const memoizedOptions = (0, import_react4.useMemo)(() => options2, []);
    const element = (0, import_react4.useCallback)((node) => {
      if (node instanceof HTMLElement) {
        setController(autoAnimate(node, memoizedOptions));
      } else {
        setController(void 0);
      }
    }, [memoizedOptions]);
    const setEnabled = (0, import_react4.useCallback)((enabled2) => {
      if (controller) {
        enabled2 ? controller.enable() : controller.disable();
      }
    }, [controller]);
    return [element, setEnabled];
  }

  // Resources/Private/Editor/Repeatable/Sortable.jsx
  var import_react_ui_components = __toESM(require_react_ui_components());

  // node_modules/.pnpm/array-move@4.0.0/node_modules/array-move/index.js
  function arrayMoveMutable(array, fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < array.length) {
      const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;
      const [item] = array.splice(fromIndex, 1);
      array.splice(endIndex, 0, item);
    }
  }
  function arrayMoveImmutable(array, fromIndex, toIndex) {
    array = [...array];
    arrayMoveMutable(array, fromIndex, toIndex);
    return array;
  }

  // Resources/Private/Editor/Repeatable/Sortable.jsx
  var import_prop_types2 = __toESM(require_prop_types());

  // Resources/Private/Editor/Repeatable/style.module.css
  var style_default = { "simpleWrapperTwoButtons": "mireo91-repeatablefields-xY17aG-simpleWrapperTwoButtons", "delete": "mireo91-repeatablefields-xY17aG-delete", "simpleWrapper": "mireo91-repeatablefields-xY17aG-simpleWrapper", "wrapper": "mireo91-repeatablefields-xY17aG-wrapper", "move": "mireo91-repeatablefields-xY17aG-move", "noSelect": "mireo91-repeatablefields-xY17aG-noSelect", "group": "mireo91-repeatablefields-xY17aG-group", "simpleWrapperOneButton": "mireo91-repeatablefields-xY17aG-simpleWrapperOneButton", "simpleButtons": "mireo91-repeatablefields-xY17aG-simpleButtons", "buttons": "mireo91-repeatablefields-xY17aG-buttons", "property": "mireo91-repeatablefields-xY17aG-property" };

  // Resources/Private/Editor/Repeatable/Sortable.jsx
  var DragHandle = sortableHandle(() => /* @__PURE__ */ import_react5.default.createElement("span", { type: "button", className: style_default.move }, /* @__PURE__ */ import_react5.default.createElement(import_react_ui_components.Icon, { icon: "sort" })));
  var animateOptions = { disrespectUserMotionPreferences: true };
  var SortableItem = sortableElement(({ value: value2 }) => {
    return /* @__PURE__ */ import_react5.default.createElement("div", null, value2);
  });
  var SortableList = sortableContainer(({ children, automaticSorting, manualSort }) => {
    const [animationParent, enable] = useAutoAnimate(animateOptions);
    (0, import_react5.useEffect)(() => {
      document.body.style.cursor = manualSort ? "grabbing" : null;
      enable(false);
      const timeout = setTimeout(() => {
        enable(!manualSort);
      }, 500);
      return () => clearTimeout(timeout);
    }, [manualSort]);
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: manualSort && style_default.noSelect, ref: automaticSorting ? animationParent : null }, children);
  });
  function Sortable({ onChange, value: value2, element, items, enable, automaticSorting, KEY_PROPERTY: KEY_PROPERTY2 }) {
    if (!enable) {
      const [animationParent] = useAutoAnimate(animateOptions);
      return /* @__PURE__ */ import_react5.default.createElement("div", { ref: automaticSorting ? animationParent : null }, items.map((value3, idx) => /* @__PURE__ */ import_react5.default.createElement("div", { key: value3[KEY_PROPERTY2] }, element(idx))));
    }
    const [manualSort, setManualSort] = (0, import_react5.useState)(false);
    function onSortEnd({ oldIndex, newIndex }) {
      onChange(arrayMoveImmutable(value2, oldIndex, newIndex));
      setManualSort(false);
    }
    return /* @__PURE__ */ import_react5.default.createElement(
      SortableList,
      {
        onSortStart: () => setManualSort(true),
        manualSort,
        onSortEnd,
        automaticSorting,
        useDragHandle: true,
        axis: "y",
        lockAxis: "y"
      },
      items.map((value3, idx) => /* @__PURE__ */ import_react5.default.createElement(SortableItem, { key: value3[KEY_PROPERTY2], index: idx, value: element(idx) }))
    );
  }
  Sortable.propTypes = {
    items: import_prop_types2.default.array.isRequired,
    onSortEndAction: import_prop_types2.default.func.isRequired,
    element: import_prop_types2.default.func.isRequired
  };

  // Resources/Private/Editor/Repeatable/Envelope.jsx
  var import_react7 = __toESM(require_react());
  var import_prop_types3 = __toESM(require_prop_types());
  var import_neos_ui_decorators2 = __toESM(require_neos_ui_decorators());
  var EditorEnvelope = window["@Neos:HostPluginAPI"]["@NeosProjectPackages"]().NeosUiEditors.EditorEnvelope;
  function Envelope({ commit, editorId, editorOptions, id, ...props }) {
    function commitEnvelope(event, hook) {
      const { property, hooksRegistry } = props;
      if (hook) {
        Object.keys(hook).map((h) => {
          const hookPromise = hooksRegistry.get(h);
          hookPromise(event, hook[h]).then((json) => {
            const value2 = omit(json, ["__type"]);
            commit(id, property, value2);
          });
        });
        return;
      }
      commit(id, property, event);
    }
    return /* @__PURE__ */ import_react7.default.createElement(
      EditorEnvelope,
      {
        ...props,
        commit: commitEnvelope,
        options: editorOptions || {},
        id: `${editorId}-${id}`
      }
    );
  }
  Envelope.propTypes = {
    identifier: import_prop_types3.default.string.isRequired,
    label: import_prop_types3.default.string.isRequired,
    options: import_prop_types3.default.object,
    value: import_prop_types3.default.any,
    renderSecondaryInspector: import_prop_types3.default.func,
    editor: import_prop_types3.default.string.isRequired,
    editorRegistry: import_prop_types3.default.object.isRequired,
    i18nRegistry: import_prop_types3.default.object.isRequired,
    validationErrors: import_prop_types3.default.array,
    onEnterKey: import_prop_types3.default.func,
    helpMessage: import_prop_types3.default.string,
    helpThumbnail: import_prop_types3.default.string,
    highlight: import_prop_types3.default.bool,
    property: import_prop_types3.default.string.isRequired,
    id: import_prop_types3.default.number.isRequired,
    commit: import_prop_types3.default.func.isRequired
  };
  var neosifier2 = (0, import_neos_ui_decorators2.neos)((globalRegistry) => ({
    hooksRegistry: globalRegistry.get("inspector").get("saveHooks")
  }));
  var Envelope_default = neosifier2(Envelope);

  // Resources/Private/Editor/Repeatable/helper.js
  function set(path, value2, object) {
    path = getPath(path);
    return recursivelySetValueInObject(object, value2, path);
  }
  var clone = (input) => JSON.parse(JSON.stringify(input));
  var isSame = (a, b) => JSON.stringify(a) == JSON.stringify(b);
  function isNumeric(str) {
    if (typeof str == "number") {
      return true;
    }
    if (typeof str != "string") {
      return false;
    }
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  function ClientEvalIsNotFinished(input) {
    if (!input) {
      return false;
    }
    if (typeof input == "string") {
      return input.includes("ClientEval:");
    }
    if (Array.isArray(input)) {
      return input.some((value2) => ClientEvalIsNotFinished(value2));
    }
    if (isObject(input)) {
      return ClientEvalIsNotFinished(Object.values(input));
    }
    return false;
  }
  function ItemEval(propertyValue, item, node, parentNode, documentNode) {
    if (typeof propertyValue === "string" && propertyValue.startsWith("ItemEval:")) {
      try {
        const evaluateFn = new Function(
          "item,node,parentNode,documentNode",
          "return " + propertyValue.replace("ItemEval:", "")
        );
        return evaluateFn(item, node, parentNode, documentNode);
      } catch (e) {
        console.warn('An error occurred while trying to evaluate "' + propertyValue + '"\n', e);
        return propertyValue;
      }
    }
    return propertyValue;
  }
  function isObject(input) {
    return input != null && (input.constructor === Object || !input.constructor && typeof input === "object");
  }
  function dynamicSort(arrayToSort, sortBy) {
    const array = clone(arrayToSort);
    if (!Array.isArray(array) || !array.length || !Array.isArray(sortBy) || !sortBy.length) {
      return array;
    }
    return array.sort((a, b) => {
      return sortBy.reduce((result, current) => {
        if (result !== 0) {
          return result;
        }
        const { property, order = "asc" } = current;
        const propA = a[property];
        const propB = b[property];
        let comparison = 0;
        if (isNumeric(propA) && isNumeric(propB)) {
          if (propA > propB) {
            comparison = 1;
          } else if (propA < propB) {
            comparison = -1;
          }
        } else {
          comparison = propA.localeCompare(propB);
        }
        if (order === "desc") {
          comparison *= -1;
        }
        return comparison;
      }, 0);
    });
  }
  function deepMerge(obj1, obj2) {
    const copy = clone(obj1);
    for (let key in obj2) {
      if (key in obj2) {
        if (obj2[key] instanceof Object && copy[key] instanceof Object) {
          copy[key] = deepMerge(copy[key], obj2[key]);
        } else {
          copy[key] = obj2[key];
        }
      }
    }
    return copy;
  }
  function getPath(path) {
    if (Array.isArray(path)) {
      return path;
    }
    if (typeof path === "number") {
      return [path];
    }
    return path.split(".").map((part) => {
      const partAsInteger = parseInt(part);
      if (!isNaN(partAsInteger) && String(partAsInteger) === part) {
        return partAsInteger;
      }
      return part;
    });
  }
  function recursivelySetValueInObject(object, value2, path) {
    if (path.length === 0) {
      return value2;
    }
    if (typeof object === "undefined") {
      if (typeof path[0] === "number") {
        object = [];
      } else {
        object = {};
      }
    }
    if (Array.isArray(object)) {
      if (typeof path[0] === "number" && object.length < path[0]) {
        path[0] = object.length;
      }
      const result = [...object];
      result[path[0]] = recursivelySetValueInObject(object[path[0]], value2, path.slice(1));
      return result;
    }
    return Object.assign({}, object, { [path[0]]: recursivelySetValueInObject(object[path[0]], value2, path.slice(1)) });
  }

  // Resources/Private/Editor/Repeatable/index.jsx
  var KEY_PROPERTY = "_UUID_";
  var getDataLoaderOptionsForProps = (props) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: props.options.dataSourceIdentifier,
    dataSourceUri: props.options.dataSourceUri,
    dataSourceAdditionalData: props.options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching)
  });
  function Repeatable({
    commit,
    dataSourcesDataLoader,
    editorRegistry,
    i18nRegistry,
    id,
    validatorRegistry,
    value: value2,
    renderHelpIcon,
    identifier,
    ...props
  }) {
    const { dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData } = props.options;
    const hasDataSource = !!(dataSourceIdentifier || dataSourceUri);
    const label = i18nRegistry.translate(props.label);
    const [isLoading, setLoading] = (0, import_react8.useState)(true);
    const [dataTypes, setDataTypes] = (0, import_react8.useState)({});
    const [allowAdd, setAllowAdd] = (0, import_react8.useState)(true);
    const [allowRemove, setAllowRemove] = (0, import_react8.useState)(true);
    const [currentValue, setCurrentValue] = (0, import_react8.useState)([]);
    const [options2, setOptions] = (0, import_react8.useState)(hasDataSource ? null : props.options);
    const [emptyGroup, setEmptyGroup] = (0, import_react8.useState)({});
    const [collapsed, setCollapsed] = (0, import_react8.useState)({});
    const returnCurrentValueAsJSON = () => JSON.stringify(currentValue);
    const [currentValueAsJSON, setCurrentValueAsJSON] = (0, import_react8.useState)([]);
    (0, import_react8.useEffect)(() => {
      setLoading(true);
      neos_ui_backend_connector_default.get().endpoints.dataSource("get-property-types", null, {}).then((json) => {
        setDataTypes(json);
        setLoading(false);
      });
    }, []);
    (0, import_react8.useEffect)(() => {
      const dataAsJSON = returnCurrentValueAsJSON();
      if (currentValueAsJSON === dataAsJSON || !options2) {
        return;
      }
      setCurrentValueAsJSON(dataAsJSON);
      testIfAdd(currentValue);
      testIfRemove(currentValue);
      if (options2.sortBy) {
        const timeout = setTimeout(() => {
          const sorted = dynamicSort(currentValue, options2.sortBy);
          handleValueChange(sorted);
        }, 2e3);
        return () => clearTimeout(timeout);
      }
    }, [currentValue]);
    (0, import_react8.useEffect)(() => {
      if (!options2 || ClientEvalIsNotFinished(options2)) {
        return;
      }
      const group = getEmptyGroup();
      setEmptyGroup(group);
      initialValue(group);
    }, [options2, dataTypes]);
    const returnDataSourceOptionsAsJSON = () => JSON.stringify({ dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData });
    const [dataSourceOptionsAsJSON, setDataSourceOptionsAsJSON] = (0, import_react8.useState)(null);
    (0, import_react8.useEffect)(() => {
      if (!hasDataSource) {
        return;
      }
      const dataAsJSON = returnDataSourceOptionsAsJSON();
      if (dataSourceOptionsAsJSON === dataAsJSON) {
        return;
      }
      setLoading(true);
      setDataSourceOptionsAsJSON(dataAsJSON);
      dataSourcesDataLoader.resolveValue(getDataLoaderOptionsForProps(props), currentValue).then((values) => {
        setOptions(deepMerge(props.options, values));
        setLoading(false);
      });
    }, [dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData]);
    function getEmptyGroup() {
      let group = {};
      const properties = options2.properties;
      if (properties) {
        const array = [];
        for (const key in properties) {
          const item = properties[key];
          array.push({ key, position: item?.position ?? null, item });
        }
        positionalArraySorter_default(array).forEach(({ key, item }) => {
          const defaultValue = item && item.defaultValue;
          group[key] = returnValueIfSet(defaultValue, "");
        });
      }
      return group;
    }
    function initialValue(group) {
      let newValue = value2 ? clone(value2) : [];
      newValue = newValue.map((item) => {
        if (item[KEY_PROPERTY]) {
          return item;
        }
        return {
          ...item,
          [KEY_PROPERTY]: nanoid()
        };
      });
      const { min, max } = options2;
      if (min) {
        if (newValue.length < min) {
          for (var i = 0; i < min; ++i) {
            if (newValue[i]) {
              newValue[i] = value2[i];
            } else {
              newValue[i] = group;
            }
          }
        }
      }
      if (max && newValue.length > max) {
        newValue = newValue.slice(0, max);
      }
      if (newValue.length) {
        for (let key = 0; key < newValue.length; key++) {
          const predefined = options2.predefinedProperties?.[key]?.properties;
          const currentEntry = clone(newValue[key]);
          const availableKeys = Object.keys(currentEntry).filter((key2) => key2 == KEY_PROPERTY || key2 in group);
          const cleanedUpEntry = availableKeys.reduce((cur, keyname) => {
            const isPredefined = predefined?.[keyname]?.defaultValue != void 0;
            let value3 = isPredefined ? predefined[keyname].defaultValue : currentEntry[keyname];
            if (isNumeric(value3)) {
              value3 = parseFloat(value3);
            }
            return {
              ...cur,
              [keyname]: value3
            };
          }, {});
          newValue[key] = cleanedUpEntry;
        }
      }
      setCurrentValue(newValue);
    }
    function handleValueChange(inputValue) {
      if (isSame(inputValue, currentValue)) {
        return;
      }
      const commitValue = clone(inputValue).map((item) => {
        delete item[KEY_PROPERTY];
        return item;
      });
      if (!isSame(commitValue, value2)) {
        commit(commitValue);
      }
      setCurrentValue(inputValue);
    }
    function testIfAdd(value3) {
      if (options2 && options2.max) {
        setAllowAdd(options2.max > value3.length);
      }
    }
    function testIfRemove(value3) {
      if (options2 && options2.min) {
        setAllowRemove(options2.min < value3.length);
      }
    }
    function handleAdd() {
      handleValueChange([...currentValue, emptyGroup]);
    }
    function handleRemove(idx) {
      const value3 = currentValue.filter((s, sidx) => idx !== sidx);
      handleValueChange(value3);
    }
    handleCollapse = (idx) => {
      const value3 = !collapsed[idx];
      setCollapsed({
        ...collapsed,
        [idx]: value3
      });
    };
    function commitChange(idx, property, event) {
      handleValueChange(set(property, event, currentValue));
    }
    function validateElement(elementValue, elementConfiguration, idx, identifier2) {
      if (!elementConfiguration || !elementConfiguration.validation) {
        return;
      }
      const validators = elementConfiguration.validation;
      const validationResults = Object.keys(validators).map((validatorName) => {
        const validatorConfiguration = validators[validatorName];
        return checkValidator(elementValue, validatorName, validatorConfiguration);
      });
      const validationResultsArray = validationResults.filter((result) => result);
      if (options2.controls && options2.controls.add) {
        const allowed = options2?.max ? options2.max > currentValue.length : true;
        setAllowAdd(allowed && validationResultsArray.length <= 0);
      }
      return validationResultsArray;
    }
    function checkValidator(elementValue, validatorName, validatorConfiguration) {
      const validator = validatorRegistry.get(validatorName);
      if (validator) {
        return validator(elementValue, validatorConfiguration);
      }
      console.warn(`Validator ${validatorName} not found`);
    }
    function createElement2(idx) {
      const isPredefined = !!options2.predefinedProperties && options2.predefinedProperties[idx];
      const { controls, sortBy, properties } = options2;
      const hasRemove = !isPredefined && controls.remove && allowRemove;
      const hasMove = !isPredefined && controls.move && currentValue.length > 1;
      const hasTwoButtons = hasRemove && hasMove;
      const hasOneButton = hasRemove || hasMove;
      const propertiesCount = Object.keys(properties).length;
      if (propertiesCount === 1) {
        return /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            className: clsx_default(
              style_default.simpleWrapper,
              hasTwoButtons ? style_default.simpleWrapperTwoButtons : hasOneButton && style_default.simpleWrapperOneButton
            )
          },
          getProperties(idx),
          hasOneButton && /* @__PURE__ */ import_react8.default.createElement("div", { class: style_default.simpleButtons }, hasRemove && /* @__PURE__ */ import_react8.default.createElement(import_react_ui_components2.IconButton, { onClick: () => handleRemove(idx), className: style_default.delete, icon: "trash" }), hasMove && /* @__PURE__ */ import_react8.default.createElement(DragHandle, null))
        );
      }
      const hasCollapse = !!controls.collapse;
      return /* @__PURE__ */ import_react8.default.createElement("div", { className: style_default.wrapper }, Boolean(hasOneButton || hasCollapse) && /* @__PURE__ */ import_react8.default.createElement("div", { class: style_default.buttons }, hasMove && /* @__PURE__ */ import_react8.default.createElement(DragHandle, null), hasCollapse && /* @__PURE__ */ import_react8.default.createElement(
        import_react_ui_components2.IconButton,
        {
          onClick: () => handleCollapse(idx),
          icon: collapsed[idx] ? "chevron-down" : "chevron-up"
        }
      ), hasRemove && /* @__PURE__ */ import_react8.default.createElement(import_react_ui_components2.IconButton, { onClick: () => handleRemove(idx), className: style_default.delete, icon: "trash" })), !collapsed[idx] && getProperties(idx));
    }
    function getProperties(idx) {
      const { predefinedProperties } = options2;
      const groupLabel = predefinedProperties && predefinedProperties[idx] ? predefinedProperties[idx].label : null;
      let properties = [];
      Object.keys(emptyGroup).map((property) => {
        properties.push(getProperty(property, idx));
      });
      properties = properties.filter(Boolean);
      if (properties.length === 0) {
        return null;
      }
      return /* @__PURE__ */ import_react8.default.createElement("div", { className: style_default.group }, groupLabel && /* @__PURE__ */ import_react8.default.createElement("span", { dangerouslySetInnerHTML: { __html: groupLabel } }), properties);
    }
    function checkIfValueIsSet(value3) {
      return !!(value3 !== null && value3 !== void 0);
    }
    function returnValueIfSet(value3, fallback = "") {
      return checkIfValueIsSet(value3) ? value3 : fallback;
    }
    function getProperty(property, idx) {
      const repeatableValue = clone(currentValue);
      const { properties, predefinedProperties } = options2;
      let propertyDefinition = properties[property];
      if (predefinedProperties && predefinedProperties[idx] && predefinedProperties[idx].properties && predefinedProperties[idx].properties[property]) {
        propertyDefinition = deepMerge(propertyDefinition, predefinedProperties[idx]["properties"][property]);
      }
      const defaultDataType = propertyDefinition.type ? dataTypes[propertyDefinition.type] : {};
      if (defaultDataType) {
        propertyDefinition = deepMerge(defaultDataType, propertyDefinition);
      }
      let editorOptions = returnValueIfSet(propertyDefinition.editorOptions, {});
      const editor = returnValueIfSet(propertyDefinition.editor, "Neos.Neos/Inspector/Editors/TextFieldEditor");
      let value3 = returnValueIfSet(repeatableValue[idx][property]);
      if (!value3 && checkIfValueIsSet(propertyDefinition.defaultValue)) {
        value3 = propertyDefinition.defaultValue;
      }
      if (editorOptions.hasOwnProperty("dataSourceUri") || editorOptions.hasOwnProperty("dataSourceIdentifier")) {
        editorOptions = { ...editorOptions };
        if (!editorOptions.dataSourceAdditionalData) {
          editorOptions.dataSourceAdditionalData = {};
        } else {
          if (editorOptions.dataSourceAdditionalData.hasOwnProperty("repeatableIndex")) {
            editorOptions.dataSourceAdditionalData["repeatableIndex"] = idx;
          }
          if (editorOptions.dataSourceAdditionalData.hasOwnProperty("repeatableValue")) {
            editorOptions.dataSourceAdditionalData["repeatableValue"] = currentValue;
          }
        }
      }
      const isSimpleView = Object.keys(properties).length <= 1;
      const hidden = ItemEval(
        propertyDefinition.hidden,
        repeatableValue[idx],
        props.node,
        props.parentNode,
        props.documentNode
      );
      return /* @__PURE__ */ import_react8.default.createElement("div", { className: !isSimpleView && style_default.property, hidden }, /* @__PURE__ */ import_react8.default.createElement(
        Envelope_default,
        {
          identifier: `${identifier}-repeatable-${idx}-${property}`,
          options: editorOptions,
          value: value3,
          renderSecondaryInspector: props.renderSecondaryInspector,
          editor,
          editorRegistry,
          i18nRegistry,
          validationErrors: validateElement(value3, propertyDefinition, idx, property),
          highlight: false,
          property: `${idx}.${property}`,
          id: `repeatable-${idx}-${property}`,
          editorId: id,
          commit: commitChange,
          ...propertyDefinition
        }
      ));
    }
    if (isLoading || !options2) {
      return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, Boolean(label) && /* @__PURE__ */ import_react8.default.createElement(import_react_ui_components2.Label, { htmlFor: id }, label, " ", renderHelpIcon()), /* @__PURE__ */ import_react8.default.createElement(LoadingWithStyles_default, { id, isLoading, heightMultiplier: 2 }));
    }
    if (options2.hidden) {
      return null;
    }
    const { buttonAddLabel = "Mireo.RepeatableFields:Main:addRow" } = options2;
    return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, Boolean(label) && /* @__PURE__ */ import_react8.default.createElement(import_react_ui_components2.Label, { htmlFor: id }, label, " ", renderHelpIcon()), /* @__PURE__ */ import_react8.default.createElement(
      Sortable,
      {
        element: createElement2,
        items: currentValue,
        onChange: handleValueChange,
        enable: options2.controls?.move,
        automaticSorting: options2.sortBy,
        value: currentValue,
        KEY_PROPERTY
      }
    ), options2.controls.add && allowAdd && /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(import_react_ui_components2.Button, { onClick: handleAdd, id }, i18nRegistry.translate(buttonAddLabel)), Boolean(label) || renderHelpIcon()));
  }
  Repeatable.propTypes = {
    identifier: import_prop_types4.default.string.isRequired,
    label: import_prop_types4.default.string.isRequired,
    // options: PropTypes.object,
    value: import_prop_types4.default.arrayOf(import_prop_types4.default.object),
    renderSecondaryInspector: import_prop_types4.default.func,
    editor: import_prop_types4.default.string.isRequired,
    editorRegistry: import_prop_types4.default.object.isRequired,
    i18nRegistry: import_prop_types4.default.object.isRequired,
    validationErrors: import_prop_types4.default.array,
    onEnterKey: import_prop_types4.default.func,
    helpMessage: import_prop_types4.default.string,
    helpThumbnail: import_prop_types4.default.string,
    highlight: import_prop_types4.default.bool,
    commit: import_prop_types4.default.func.isRequired,
    options: import_prop_types4.default.shape({
      hidden: import_prop_types4.default.bool,
      buttonAddLabel: import_prop_types4.default.string,
      dataSourceIdentifier: import_prop_types4.default.string,
      dataSourceUri: import_prop_types4.default.string,
      dataSourceDisableCaching: import_prop_types4.default.bool,
      dataSourceAdditionalData: import_prop_types4.default.objectOf(import_prop_types4.default.any),
      predefinedProperties: import_prop_types4.default.arrayOf(
        import_prop_types4.default.shape({
          label: import_prop_types4.default.string,
          value: import_prop_types4.default.object
        })
      ),
      max: import_prop_types4.default.number,
      min: import_prop_types4.default.number,
      controls: import_prop_types4.default.shape({
        move: import_prop_types4.default.bool,
        remove: import_prop_types4.default.bool,
        add: import_prop_types4.default.bool,
        collapse: import_prop_types4.default.bool
      }),
      sortBy: import_prop_types4.default.arrayOf(
        import_prop_types4.default.shape({
          property: import_prop_types4.default.string,
          direction: import_prop_types4.default.oneOf(["asc", "desc"])
        })
      )
      //
      // 	properties: PropTypes.objectOf(
      // 		PropTypes.object()
      // 	),
      //
      // 	placeholder: PropTypes.integersOnly,
      // 	// disabled: PropTypes.bool,
      // 	//
      // 	// multiple: PropTypes.bool,
      //
      // 	dataSourceIdentifier: PropTypes.string,
      // 	dataSourceUri: PropTypes.string,
      // 	dataSourceDisableCaching: PropTypes.bool,
      // 	dataSourceAdditionalData: PropTypes.objectOf(PropTypes.any),
      //
      // 	// minimumResultsForSearch: PropTypes.number,
      //
      // properties: PropTypes.objectOf(
      // 	PropTypes.shape({
      // 		label: PropTypes.string,
      // 		icon: PropTypes.string,
      // 		preview: PropTypes.string,
      //
      // 		// TODO
      // 		group: PropTypes.string
      // 	})
      // )
      //
    }).isRequired,
    dataSourcesDataLoader: import_prop_types4.default.shape({
      resolveValue: import_prop_types4.default.func.isRequired
    }).isRequired,
    focusedNodePath: import_prop_types4.default.string.isRequired
  };
  var neosifier3 = (0, import_neos_ui_decorators3.neos)((globalRegistry) => ({
    editorRegistry: globalRegistry.get("inspector").get("editors"),
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources")
  }));
  var connector = (0, import_react_redux.connect)((state) => ({
    focusedNodePath: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodePathSelector(state),
    node: import_neos_ui_redux_store.selectors.CR.Nodes.focusedSelector(state),
    parentNode: import_neos_ui_redux_store.selectors.CR.Nodes.focusedParentSelector(state),
    documentNode: import_neos_ui_redux_store.selectors.CR.Nodes.documentNodeSelector(state)
  }));
  var Repeatable_default = neosifier3(connector(Repeatable));

  // Resources/Private/Editor/manifest.js
  dist_default("Mireo.RepeatableFields:RepeatableField", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    editorsRegistry.set("Mireo.RepeatableFields/Inspector/Editors/RepeatableFieldEditor", {
      component: Repeatable_default,
      hasOwnLabel: true
    });
  });
})();
//# sourceMappingURL=Plugin.js.map
