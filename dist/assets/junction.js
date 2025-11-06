'use strict';



;define("junction/adapters/application", ["exports", "@ember-data/adapter/json-api", "junction/config/environment", "@ember/string"], function (_exports, _jsonApi, _environment, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api",0,"junction/config/environment",0,"@ember/string"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "host", _environment.default.TribeENV.API_URL);
      _defineProperty(this, "namespace", 'api.php');
      _defineProperty(this, "headers", {
        Authorization: `Bearer ${_environment.default.TribeENV.API_KEY}`
      });
    }
    pathForType(type) {
      return (0, _string.underscore)(type);
    }
  }
  _exports.default = ApplicationAdapter;
});
;define("junction/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "junction/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"junction/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("junction/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("junction/components/animated-beacon", ["exports", "ember-animated/components/animated-beacon"], function (_exports, _animatedBeacon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedBeacon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-beacon"eaimeta@70e063a35619d71f
});
;define("junction/components/animated-container", ["exports", "ember-animated/components/animated-container"], function (_exports, _animatedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-container"eaimeta@70e063a35619d71f
});
;define("junction/components/animated-each", ["exports", "ember-animated/components/animated-each"], function (_exports, _animatedEach) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedEach.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-each"eaimeta@70e063a35619d71f
});
;define("junction/components/animated-if", ["exports", "ember-animated/components/animated-if"], function (_exports, _animatedIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedIf.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-if"eaimeta@70e063a35619d71f
});
;define("junction/components/animated-orphans", ["exports", "ember-animated/components/animated-orphans"], function (_exports, _animatedOrphans) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedOrphans.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-orphans"eaimeta@70e063a35619d71f
});
;define("junction/components/animated-value", ["exports", "ember-animated/components/animated-value"], function (_exports, _animatedValue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedValue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-value"eaimeta@70e063a35619d71f
});
;define("junction/components/api/auth-reference", ["exports", "@ember/component", "@glimmer/component", "highlight.js", "@ember/object", "@ember/service", "@glimmer/tracking", "junction/config/environment", "@ember/template-factory"], function (_exports, _component, _component2, _highlight, _object, _service, _tracking, _environment, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"highlight.js",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"junction/config/environment",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1 class="text-capitalize text-center mt-5 px-0 display-2 mb-4"><i
      class="fa-solid fa-plug"
    ></i>
    Junction API</h1>
  
  <ul
    class="nav nav-tabs justify-content-center"
    id="apiAuthReference"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="apiAuthReference-javascript-tab"
        data-bs-toggle="tab"
        data-bs-target="#apiAuthReference-javascript-tab-pane"
        type="button"
        role="tab"
        aria-controls="apiAuthReference-javascript-tab-pane"
        aria-selected="true"
      >Javascript</button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="apiAuthReference-curl-tab"
        data-bs-toggle="tab"
        data-bs-target="#apiAuthReference-curl-tab-pane"
        type="button"
        role="tab"
        aria-controls="apiAuthReference-curl-tab-pane"
        aria-selected="false"
      >cURL</button>
    </li>
  </ul>
  
  <div class="text-center my-4 d-none">
    <div class="input-group mx-auto" style="max-width: 600px;">
      <input
        type="text"
        class="form-control"
        value={{concat this.apiUrl "/api.php/webapp/0"}}
        readonly
        aria-label="API URL"
      />
      <button
        class="btn btn-primary"
        type="button"
        {{on "click" this.copyApiWebappUrl}}
      >
        {{#if this.copiedWebappUrl}}
          <i class="fa-solid fa-check"></i>
          Copied!
        {{else}}
          <i class="fa-solid fa-copy"></i>
          Copy Fetch URL
        {{/if}}
      </button>
    </div>
  </div>
  
  <div class="text-center my-4">
    <div class="input-group mx-auto" style="max-width: 600px;">
      <input
        type="text"
        class="form-control"
        value={{this.apiUrl}}
        readonly
        aria-label="API URL"
      />
      <button
        class="btn btn-primary"
        type="button"
        {{on "click" this.copyApiUrl}}
      >
        {{#if this.copiedUrl}}
          <i class="fa-solid fa-check"></i>
          Copied!
        {{else}}
          <i class="fa-solid fa-copy"></i>
          Copy Tribe URL
        {{/if}}
      </button>
    </div>
  </div>
  
  <div class="tab-content" id="apiAuthReferenceContent">
    <div
      class="tab-pane fade show active"
      id="apiAuthReference-javascript-tab-pane"
      role="tabpanel"
      aria-labelledby="apiAuthReference-javascript-tab"
      tabindex="0"
    >
      <div
        class="code-container position-relative p-3 border rounded bg-{{this.colormodes.mode}}"
      >
        <button
          class="btn btn-sm btn-primary position-absolute top-0 end-0 m-2"
          type="button"
          {{on "click" this.copyJsSnippet}}
        >
          {{#if this.copiedJs}}
            <i class="fa-solid fa-check"></i>
            Copied!
          {{else}}
            <i class="fa-solid fa-copy"></i>
            Copy
          {{/if}}
        </button>
        <pre class="mb-0"><code
            class="language-javascript"
          >{{this.javascriptSnippet}}</code></pre>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="apiAuthReference-curl-tab-pane"
      role="tabpanel"
      aria-labelledby="apiAuthReference-curl-tab"
      tabindex="0"
    >
      <div
        class="code-container position-relative p-3 border rounded bg-{{this.colormodes.mode}}"
      >
        <button
          class="btn btn-sm btn-primary position-absolute top-0 end-0 m-2"
          type="button"
          {{on "click" this.copyCurlSnippet}}
        >
          {{#if this.copiedCurl}}
            <i class="fa-solid fa-check"></i>
            Copied!
          {{else}}
            <i class="fa-solid fa-copy"></i>
            Copy
          {{/if}}
        </button>
        <pre class="mb-0"><code
            class="language-bash"
          >{{this.curlSnippet}}</code></pre>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "LK+TZs1v",
    "block": "[[[10,\"h1\"],[14,0,\"text-capitalize text-center mt-5 px-0 display-2 mb-4\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-plug\"],[12],[13],[1,\"\\n  Junction API\"],[13],[1,\"\\n\\n\"],[10,\"ul\"],[14,0,\"nav nav-tabs justify-content-center\"],[14,1,\"apiAuthReference\"],[14,\"role\",\"tablist\"],[12],[1,\"\\n  \"],[10,\"li\"],[14,0,\"nav-item\"],[14,\"role\",\"presentation\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"nav-link active\"],[14,1,\"apiAuthReference-javascript-tab\"],[14,\"data-bs-toggle\",\"tab\"],[14,\"data-bs-target\",\"#apiAuthReference-javascript-tab-pane\"],[14,\"role\",\"tab\"],[14,\"aria-controls\",\"apiAuthReference-javascript-tab-pane\"],[14,\"aria-selected\",\"true\"],[14,4,\"button\"],[12],[1,\"Javascript\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"li\"],[14,0,\"nav-item\"],[14,\"role\",\"presentation\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"nav-link\"],[14,1,\"apiAuthReference-curl-tab\"],[14,\"data-bs-toggle\",\"tab\"],[14,\"data-bs-target\",\"#apiAuthReference-curl-tab-pane\"],[14,\"role\",\"tab\"],[14,\"aria-controls\",\"apiAuthReference-curl-tab-pane\"],[14,\"aria-selected\",\"false\"],[14,4,\"button\"],[12],[1,\"cURL\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"text-center my-4 d-none\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"input-group mx-auto\"],[14,5,\"max-width: 600px;\"],[12],[1,\"\\n    \"],[10,\"input\"],[14,0,\"form-control\"],[15,2,[28,[37,7],[[30,0,[\"apiUrl\"]],\"/api.php/webapp/0\"],null]],[14,\"readonly\",\"\"],[14,\"aria-label\",\"API URL\"],[14,4,\"text\"],[12],[13],[1,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"copyApiWebappUrl\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedWebappUrl\"]],[[[1,\"        \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\"\\n        Copied!\\n\"]],[]],[[[1,\"        \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\"\\n        Copy Fetch URL\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"text-center my-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"input-group mx-auto\"],[14,5,\"max-width: 600px;\"],[12],[1,\"\\n    \"],[10,\"input\"],[14,0,\"form-control\"],[15,2,[30,0,[\"apiUrl\"]]],[14,\"readonly\",\"\"],[14,\"aria-label\",\"API URL\"],[14,4,\"text\"],[12],[13],[1,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"copyApiUrl\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedUrl\"]],[[[1,\"        \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\"\\n        Copied!\\n\"]],[]],[[[1,\"        \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\"\\n        Copy Tribe URL\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"tab-content\"],[14,1,\"apiAuthReferenceContent\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"tab-pane fade show active\"],[14,1,\"apiAuthReference-javascript-tab-pane\"],[14,\"role\",\"tabpanel\"],[14,\"aria-labelledby\",\"apiAuthReference-javascript-tab\"],[14,\"tabindex\",\"0\"],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[\"code-container position-relative p-3 border rounded bg-\",[30,0,[\"colormodes\",\"mode\"]]]]],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary position-absolute top-0 end-0 m-2\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"copyJsSnippet\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedJs\"]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\"\\n          Copied!\\n\"]],[]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\"\\n          Copy\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"pre\"],[14,0,\"mb-0\"],[12],[10,\"code\"],[14,0,\"language-javascript\"],[12],[1,[30,0,[\"javascriptSnippet\"]]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"tab-pane fade\"],[14,1,\"apiAuthReference-curl-tab-pane\"],[14,\"role\",\"tabpanel\"],[14,\"aria-labelledby\",\"apiAuthReference-curl-tab\"],[14,\"tabindex\",\"0\"],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[\"code-container position-relative p-3 border rounded bg-\",[30,0,[\"colormodes\",\"mode\"]]]]],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary position-absolute top-0 end-0 m-2\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"copyCurlSnippet\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedCurl\"]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\"\\n          Copied!\\n\"]],[]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\"\\n          Copy\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"pre\"],[14,0,\"mb-0\"],[12],[10,\"code\"],[14,0,\"language-bash\"],[12],[1,[30,0,[\"curlSnippet\"]]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"h1\",\"i\",\"ul\",\"li\",\"button\",\"div\",\"input\",\"concat\",\"on\",\"if\",\"pre\",\"code\"]]",
    "moduleName": "junction/components/api/auth-reference.hbs",
    "isStrictMode": false
  });
  let ApiAuthReference = _exports.default = (_class = class ApiAuthReference extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "session", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "store", _descriptor3, this);
      _initializerDefineProperty(this, "apiUrl", _descriptor4, this);
      _initializerDefineProperty(this, "copiedUrl", _descriptor5, this);
      _initializerDefineProperty(this, "copiedWebappUrl", _descriptor6, this);
      _initializerDefineProperty(this, "copiedJs", _descriptor7, this);
      _initializerDefineProperty(this, "copiedCurl", _descriptor8, this);
      this.setApiUrl();
    }
    get javascriptSnippet() {
      return `// Using fetch to access your Junction API
const response = await fetch('${this.apiUrl}/api.php/webapp/0', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  }
});
const data = await response.json();
console.log(data);`;
    }
    get curlSnippet() {
      return `curl -X GET \\
  '${this.apiUrl}/api.php/webapp/0' \\
  -H 'Content-Type: application/vnd.api+json' \\
  -H 'Authorization: Bearer YOUR_API_KEY_HERE'`;
    }
    setApiUrl() {
      this.apiUrl = _environment.default.TribeENV.API_URL;
    }
    async copyApiWebappUrl() {
      try {
        await navigator.clipboard.writeText(this.apiUrl + '/api.php/webapp/0');
        this.copiedWebappUrl = true;

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          this.copiedWebappUrl = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    async copyApiUrl() {
      try {
        await navigator.clipboard.writeText(this.apiUrl);
        this.copiedUrl = true;

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          this.copiedUrl = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    async copyJsSnippet() {
      try {
        await navigator.clipboard.writeText(this.javascriptSnippet);
        this.copiedJs = true;
        setTimeout(() => {
          this.copiedJs = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    async copyCurlSnippet() {
      try {
        await navigator.clipboard.writeText(this.curlSnippet);
        this.copiedCurl = true;
        setTimeout(() => {
          this.copiedCurl = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "apiUrl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "copiedUrl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "copiedWebappUrl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "copiedJs", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "copiedCurl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "copyApiWebappUrl", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyApiWebappUrl"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyApiUrl", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyApiUrl"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyJsSnippet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyJsSnippet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyCurlSnippet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyCurlSnippet"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ApiAuthReference);
});
;define("junction/components/api/code-reference", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <ul class="nav nav-tabs" id="apiCodeReference" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="apiCodeReference-javascript-tab"
        data-bs-toggle="tab"
        data-bs-target="#apiCodeReference-javascript-tab-pane"
        type="button"
        role="tab"
        aria-controls="apiCodeReference-javascript-tab-pane"
        aria-selected="true"
      >Javascript</button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="apiCodeReference-curl-tab"
        data-bs-toggle="tab"
        data-bs-target="#apiCodeReference-curl-tab-pane"
        type="button"
        role="tab"
        aria-controls="apiCodeReference-curl-tab-pane"
        aria-selected="false"
      >cURL</button>
    </li>
  </ul>
  
  <div class="text-center my-4">
    <div class="input-group mx-auto" style="max-width: 600px;">
      <input
        type="text"
        class="form-control"
        value={{this.type.apiUrl}}
        readonly
        aria-label="API URL"
      >
      <button
        class="btn btn-primary"
        type="button"
        {{on "click" this.copyApiUrl}}
      >
        {{#if this.copiedUrl}}
          <i class="fa-solid fa-check"></i> Copied!
        {{else}}
          <i class="fa-solid fa-copy"></i> Copy Track API URL
        {{/if}}
      </button>
    </div>
  </div>
  
  <div class="tab-content" id="apiCodeReferenceContent">
    <div
      class="tab-pane fade show active"
      id="apiCodeReference-javascript-tab-pane"
      role="tabpanel"
      aria-labelledby="apiCodeReference-javascript-tab"
      tabindex="0"
    >
      <div class="code-container position-relative p-3 border rounded bg-{{this.colormodes.mode}}">
        <button
          class="btn btn-sm btn-primary position-absolute top-0 end-0 m-2" type="button" {{on "click" this.copyJsSnippet}}
        >
          {{#if this.copiedJs}}
            <i class="fa-solid fa-check"></i> Copied!
          {{else}}
            <i class="fa-solid fa-copy"></i> Copy
          {{/if}}
        </button>
        <pre class="mb-0"><code class="language-javascript">{{this.javascriptSnippet}}</code></pre>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="apiCodeReference-curl-tab-pane"
      role="tabpanel"
      aria-labelledby="apiCodeReference-curl-tab"
      tabindex="0"
    >
      <div class="code-container position-relative p-3 border rounded bg-{{this.colormodes.mode}}">
        <button
          class="btn btn-sm btn-primary position-absolute top-0 end-0 m-2" type="button" {{on "click" this.copyCurlSnippet}}
        >
          {{#if this.copiedCurl}}
            <i class="fa-solid fa-check"></i> Copied!
          {{else}}
            <i class="fa-solid fa-copy"></i> Copy
          {{/if}}
        </button>
        <pre class="mb-0"><code class="language-bash">{{this.curlSnippet}}</code></pre>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "6YfjG5Cw",
    "block": "[[[10,\"ul\"],[14,0,\"nav nav-tabs\"],[14,1,\"apiCodeReference\"],[14,\"role\",\"tablist\"],[12],[1,\"\\n  \"],[10,\"li\"],[14,0,\"nav-item\"],[14,\"role\",\"presentation\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"nav-link active\"],[14,1,\"apiCodeReference-javascript-tab\"],[14,\"data-bs-toggle\",\"tab\"],[14,\"data-bs-target\",\"#apiCodeReference-javascript-tab-pane\"],[14,\"role\",\"tab\"],[14,\"aria-controls\",\"apiCodeReference-javascript-tab-pane\"],[14,\"aria-selected\",\"true\"],[14,4,\"button\"],[12],[1,\"Javascript\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"li\"],[14,0,\"nav-item\"],[14,\"role\",\"presentation\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"nav-link\"],[14,1,\"apiCodeReference-curl-tab\"],[14,\"data-bs-toggle\",\"tab\"],[14,\"data-bs-target\",\"#apiCodeReference-curl-tab-pane\"],[14,\"role\",\"tab\"],[14,\"aria-controls\",\"apiCodeReference-curl-tab-pane\"],[14,\"aria-selected\",\"false\"],[14,4,\"button\"],[12],[1,\"cURL\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"text-center my-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"input-group mx-auto\"],[14,5,\"max-width: 600px;\"],[12],[1,\"\\n    \"],[10,\"input\"],[14,0,\"form-control\"],[15,2,[30,0,[\"type\",\"apiUrl\"]]],[14,\"readonly\",\"\"],[14,\"aria-label\",\"API URL\"],[14,4,\"text\"],[12],[13],[1,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"copyApiUrl\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedUrl\"]],[[[1,\"        \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\" Copied!\\n\"]],[]],[[[1,\"        \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy Track API URL\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"tab-content\"],[14,1,\"apiCodeReferenceContent\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"tab-pane fade show active\"],[14,1,\"apiCodeReference-javascript-tab-pane\"],[14,\"role\",\"tabpanel\"],[14,\"aria-labelledby\",\"apiCodeReference-javascript-tab\"],[14,\"tabindex\",\"0\"],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[\"code-container position-relative p-3 border rounded bg-\",[30,0,[\"colormodes\",\"mode\"]]]]],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary position-absolute top-0 end-0 m-2\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"copyJsSnippet\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedJs\"]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\" Copied!\\n\"]],[]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"pre\"],[14,0,\"mb-0\"],[12],[10,\"code\"],[14,0,\"language-javascript\"],[12],[1,[30,0,[\"javascriptSnippet\"]]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"tab-pane fade\"],[14,1,\"apiCodeReference-curl-tab-pane\"],[14,\"role\",\"tabpanel\"],[14,\"aria-labelledby\",\"apiCodeReference-curl-tab\"],[14,\"tabindex\",\"0\"],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[\"code-container position-relative p-3 border rounded bg-\",[30,0,[\"colormodes\",\"mode\"]]]]],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary position-absolute top-0 end-0 m-2\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"copyCurlSnippet\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copiedCurl\"]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-check\"],[12],[13],[1,\" Copied!\\n\"]],[]],[[[1,\"          \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"pre\"],[14,0,\"mb-0\"],[12],[10,\"code\"],[14,0,\"language-bash\"],[12],[1,[30,0,[\"curlSnippet\"]]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"ul\",\"li\",\"button\",\"div\",\"input\",\"on\",\"if\",\"i\",\"pre\",\"code\"]]",
    "moduleName": "junction/components/api/code-reference.hbs",
    "isStrictMode": false
  });
  let ApiCodeReference = _exports.default = (_class = class ApiCodeReference extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "copiedJs", _descriptor3, this);
      _initializerDefineProperty(this, "copiedCurl", _descriptor4, this);
      _initializerDefineProperty(this, "copiedUrl", _descriptor5, this);
    }
    async copyApiUrl() {
      try {
        await navigator.clipboard.writeText(this.type.apiUrl);
        this.copiedUrl = true;

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          this.copiedUrl = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    get javascriptSnippet() {
      return `
// Example of fetching data from your Junction API
const fetchJunctionData = async () => {
  const response = await fetch('${this.type.apiUrl}', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return await response.json();
};

// Example of creating data in your Junction API
const createJunctionData = async (data) => {
  const response = await fetch('${this.type.apiUrl}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Authorization': 'Bearer YOUR_API_KEY_HERE'
    },
    body: JSON.stringify({
      data: {
        type: '${this.type.slug}',
        attributes: {
          modules: {
            title: data.title,
            content_privacy: data.privacy || 'public',
            // Add other attributes as needed
            type: '${this.type.slug}'
          }
        }
      }
    })
  });
  
  if (!response.ok) {
    throw new Error('Failed to create data');
  }
  
  return await response.json();
};

// GET usage example
try {
  const data = await fetchJunctionData();
  console.log('Junction data:', data);
} catch (error) {
  console.error('Error fetching junction data:', error);
}

// POST usage example
try {
  const newData = await createJunctionData({
    title: 'New ${this.type.title}',
    privacy: 'public'
  });
  console.log('Created new data:', newData);
} catch (error) {
  console.error('Error creating data:', error);
}`;
    }
    get curlSnippet() {
      return `
# Basic GET request to fetch ${this.type.title} data
curl -X GET \\
  '${this.type.apiUrl}' \\
  -H 'Content-Type: application/vnd.api+json'

# POST request to create ${this.type.title} with authorization
curl -X POST \\
  '${this.type.apiUrl}' \\
  -H 'Content-Type: application/vnd.api+json' \\
  -H 'Authorization: Bearer YOUR_API_KEY_HERE' \\
  -d '{
    "data": {
      "type": "${this.type.slug}",
      "attributes": {
        "modules": {
          "title": "New ${this.type.title}",
          "content_privacy": "public",
          "type": "${this.type.slug}"
        }
      }
    }
  }'`;
    }
    async copyJsSnippet() {
      try {
        await navigator.clipboard.writeText(this.javascriptSnippet);
        this.copiedJs = true;
        setTimeout(() => {
          this.copiedJs = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    async copyCurlSnippet() {
      try {
        await navigator.clipboard.writeText(this.curlSnippet);
        this.copiedCurl = true;
        setTimeout(() => {
          this.copiedCurl = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "copiedJs", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "copiedCurl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "copiedUrl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "copyApiUrl", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyApiUrl"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyJsSnippet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyJsSnippet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyCurlSnippet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyCurlSnippet"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ApiCodeReference);
});
;define("junction/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-content"eaimeta@70e063a35619d71f
});
;define("junction/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("junction/components/basic-dropdown-wormhole", ["exports", "ember-basic-dropdown/components/basic-dropdown-wormhole"], function (_exports, _basicDropdownWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownWormhole.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-wormhole"eaimeta@70e063a35619d71f
});
;define("junction/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown"eaimeta@70e063a35619d71f
});
;define("junction/components/billing/modal", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="billingModal"
    tabindex="-1"
    aria-labelledby="billingModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="billingModalLabel"><span
              class="text-primary fst-italic"
            >Billing for</span>
            {{this.billing.currentJunction.name}}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
  
        <div class="modal-body">
        </div>
  
        {{#if this.billing.isPaymentDue}}
          <div
            class="modal-footer d-flex align-items-center justify-content-end p-0"
          >
            <div class="d-flex align-items-center justify-content-end">
              <button
                {{on "click" this.payNow}}
                type="button"
                class="btn btn-sm btn-secondary ms-2"
              ><i class="fa-solid fa-money-bill"></i> Pay Now</button>
            </div>
          </div>
        {{else}}
          <div
            class="modal-footer d-flex align-items-center justify-content-end p-0"
          >
            <div class="d-flex align-items-center justify-content-end">
              <i class="fa-solid fa-circle-check text-success"></i>
              No payment due.
            </div>
          </div>
        {{/if}}
      </div>
    </div>
  </div>
  */
  {
    "id": "CcKaxPy9",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"billingModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"billingModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-xl modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"billingModalLabel\"],[12],[10,1],[14,0,\"text-primary fst-italic\"],[12],[1,\"Billing for\"],[13],[1,\"\\n          \"],[1,[30,0,[\"billing\",\"currentJunction\",\"name\"]]],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"billing\",\"isPaymentDue\"]],[[[1,\"        \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-end p-0\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n            \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary ms-2\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"payNow\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-money-bill\"],[12],[13],[1,\" Pay Now\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-end p-0\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n            \"],[10,\"i\"],[14,0,\"fa-solid fa-circle-check text-success\"],[12],[13],[1,\"\\n            No payment due.\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"span\",\"button\",\"if\",\"on\",\"i\"]]",
    "moduleName": "junction/components/billing/modal.hbs",
    "isStrictMode": false
  });
  class BillingModalComponent extends _component2.default {}
  _exports.default = BillingModalComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, BillingModalComponent);
});
;define("junction/components/ea-list-element", ["exports", "ember-animated/components/ea-list-element"], function (_exports, _eaListElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eaListElement.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/ea-list-element"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-table-loading-more", ["exports", "ember-table/components/ember-table-loading-more/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-table-loading-more/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-table-private/row-wrapper", ["exports", "ember-table/components/-private/row-wrapper"], function (_exports, _rowWrapper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowWrapper.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/-private/row-wrapper"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-table-private/scroll-indicators", ["exports", "ember-table/components/-private/scroll-indicators/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/-private/scroll-indicators/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-table-simple-checkbox", ["exports", "ember-table/components/ember-table-simple-checkbox"], function (_exports, _emberTableSimpleCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTableSimpleCheckbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-table-simple-checkbox"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-table", ["exports", "ember-table/components/ember-table/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-table/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-tbody", ["exports", "ember-table/components/ember-tbody/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-tbody/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-td", ["exports", "ember-table/components/ember-td/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-td/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-tfoot", ["exports", "ember-table/components/ember-tfoot/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-tfoot/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-th", ["exports", "ember-table/components/ember-th/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-th/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-th/resize-handle", ["exports", "ember-table/components/ember-th/resize-handle/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-th/resize-handle/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-th/sort-indicator", ["exports", "ember-table/components/ember-th/sort-indicator/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-th/sort-indicator/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-thead", ["exports", "ember-table/components/ember-thead/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-thead/component"eaimeta@70e063a35619d71f
});
;define("junction/components/ember-tr", ["exports", "ember-table/components/ember-tr/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-tr/component"eaimeta@70e063a35619d71f
});
;define("junction/components/file-dropzone", ["exports", "ember-file-upload/components/file-dropzone"], function (_exports, _fileDropzone) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileDropzone.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/components/file-dropzone"eaimeta@70e063a35619d71f
});
;define("junction/components/files/csv-uploader", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "papaparse", "@ember/template-factory"], function (_exports, _component, _component2, _service, _object, _tracking, _papaparse, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"papaparse",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="row mt-3 row-cols-1 g-3 mx-0">
    <div class="card px-0 mx-0 border-0">
      <div
        class="card-body p-0"
        {{on "click" (fn this.triggerSelectFile "csv-file-uploader")}}
      >
        <div class="d-none">
          <input
            class="form-control"
            type="file"
            id="csv-file-uploader"
            accept=".csv"
            {{on "change" this.handleFileSelect}}
          />
        </div>
  
        {{#if this.isProcessing}}
          <div
            class="text-center text-{{this.colormodes.inverseMode}}
              w-100 fs-4 p-5"
            style="border: 2px dashed #eee;"
          >
            <i class="fa-solid fa-cog fa-spin"></i>&nbsp;Processing CSV file ({{this.processingProgress}}%
            done)
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="{{this.processingProgress}}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              style="width: {{this.processingProgress}}%"
            ></div>
          </div>
        {{else if this.type.csvData}}
          <div
            class="text-center text-{{this.colormodes.inverseMode}}
              w-100 fs-4 p-3"
            style="border: 2px solid #eee;"
          >
            <div>
              <i class="fa-solid fa-hourglass-start"></i>&nbsp;CSV
              has been read.<br /><span class="text-primary">Would you like to save these records?</span>
            </div>
            <div class="fs-6 mt-2">
              <strong>{{this.rowCount}}</strong>
              records found with
              <strong>{{this.headers.length}}</strong>
              fields
            </div>
            {{#if this.processingErrors.length}}
              <div class="alert alert-warning mt-2 fs-6">
                <strong>{{this.processingErrors.length}} issues found</strong>
                <ul class="text-start small">
                  {{#each this.processingErrors as |error|}}
                    <li>{{error.message}}</li>
                  {{/each}}
                </ul>
              </div>
            {{/if}}
          </div>
        {{else}}
          <div
            class="text-center text-muted w-100 fs-4 p-5"
            style="border: 2px dashed #eee;"
            ondragover="event.preventDefault();"
            ondrop="event.preventDefault(); this.dispatchEvent(new CustomEvent('file-drop', {detail: event.dataTransfer.files}));"
            {{on "file-drop" this.handleFileDrop}}
          >
            <i class="fa-solid fa-file-csv"></i>&nbsp;&nbsp;{{if
              @placeholder
              @placeholder
              "Drag and drop CSV file here or click to select"
            }}
          </div>
        {{/if}}
  
        {{#if this.type.csvData}}
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm me-2"
              {{on "click" (fn (mut this.type.csvData) null)}}
            >
              <i class="fa-solid fa-undo"></i>
              Clear and Upload Different File
            </button>
          </div>
        {{/if}}
      </div>
    </div>
  </div>
  */
  {
    "id": "gKzfGYRH",
    "block": "[[[10,0],[14,0,\"row mt-3 row-cols-1 g-3 mx-0\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"card px-0 mx-0 border-0\"],[12],[1,\"\\n    \"],[11,0],[24,0,\"card-body p-0\"],[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"triggerSelectFile\"]],\"csv-file-uploader\"],null]],null],[12],[1,\"\\n      \"],[10,0],[14,0,\"d-none\"],[12],[1,\"\\n        \"],[11,\"input\"],[24,0,\"form-control\"],[24,1,\"csv-file-uploader\"],[24,\"accept\",\".csv\"],[24,4,\"file\"],[4,[38,1],[\"change\",[30,0,[\"handleFileSelect\"]]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isProcessing\"]],[[[1,\"        \"],[10,0],[15,0,[29,[\"text-center text-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            w-100 fs-4 p-5\"]]],[14,5,\"border: 2px dashed #eee;\"],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"fa-solid fa-cog fa-spin\"],[12],[13],[1,\" Processing CSV file (\"],[1,[30,0,[\"processingProgress\"]]],[1,\"%\\n          done)\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"progress\"],[14,\"role\",\"progressbar\"],[15,\"aria-valuenow\",[29,[[30,0,[\"processingProgress\"]]]]],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"progress-bar progress-bar-striped progress-bar-animated\"],[15,5,[29,[\"width: \",[30,0,[\"processingProgress\"]],\"%\"]]],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"type\",\"csvData\"]],[[[1,\"        \"],[10,0],[15,0,[29,[\"text-center text-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            w-100 fs-4 p-3\"]]],[14,5,\"border: 2px solid #eee;\"],[12],[1,\"\\n          \"],[10,0],[12],[1,\"\\n            \"],[10,\"i\"],[14,0,\"fa-solid fa-hourglass-start\"],[12],[13],[1,\" CSV\\n            has been read.\"],[10,\"br\"],[12],[13],[10,1],[14,0,\"text-primary\"],[12],[1,\"Would you like to save these records?\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"fs-6 mt-2\"],[12],[1,\"\\n            \"],[10,\"strong\"],[12],[1,[30,0,[\"rowCount\"]]],[13],[1,\"\\n            records found with\\n            \"],[10,\"strong\"],[12],[1,[30,0,[\"headers\",\"length\"]]],[13],[1,\"\\n            fields\\n          \"],[13],[1,\"\\n\"],[41,[30,0,[\"processingErrors\",\"length\"]],[[[1,\"            \"],[10,0],[14,0,\"alert alert-warning mt-2 fs-6\"],[12],[1,\"\\n              \"],[10,\"strong\"],[12],[1,[30,0,[\"processingErrors\",\"length\"]]],[1,\" issues found\"],[13],[1,\"\\n              \"],[10,\"ul\"],[14,0,\"text-start small\"],[12],[1,\"\\n\"],[42,[28,[37,11],[[28,[37,11],[[30,0,[\"processingErrors\"]]],null]],null],null,[[[1,\"                  \"],[10,\"li\"],[12],[1,[30,1,[\"message\"]]],[13],[1,\"\\n\"]],[1]],null],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[11,0],[24,0,\"text-center text-muted w-100 fs-4 p-5\"],[24,5,\"border: 2px dashed #eee;\"],[24,\"ondragover\",\"event.preventDefault();\"],[24,\"ondrop\",\"event.preventDefault(); this.dispatchEvent(new CustomEvent('file-drop', {detail: event.dataTransfer.files}));\"],[4,[38,1],[\"file-drop\",[30,0,[\"handleFileDrop\"]]],null],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"fa-solid fa-file-csv\"],[12],[13],[1,\"  \"],[1,[52,[30,2],[30,2],\"Drag and drop CSV file here or click to select\"]],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]],[]]],[1,\"\\n\"],[41,[30,0,[\"type\",\"csvData\"]],[[[1,\"        \"],[10,0],[14,0,\"mt-3\"],[12],[1,\"\\n          \"],[11,\"button\"],[24,0,\"btn btn-outline-secondary btn-sm me-2\"],[24,4,\"button\"],[4,[38,1],[\"click\",[28,[37,2],[[28,[37,14],[[30,0,[\"type\",\"csvData\"]]],null],null],null]],null],[12],[1,\"\\n            \"],[10,\"i\"],[14,0,\"fa-solid fa-undo\"],[12],[13],[1,\"\\n            Clear and Upload Different File\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"error\",\"@placeholder\"],false,[\"div\",\"on\",\"fn\",\"input\",\"if\",\"i\",\"br\",\"span\",\"strong\",\"ul\",\"each\",\"-track-array\",\"li\",\"button\",\"mut\"]]",
    "moduleName": "junction/components/files/csv-uploader.hbs",
    "isStrictMode": false
  });
  let FilesCsvUploader = _exports.default = (_class = class FilesCsvUploader extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "isProcessing", _descriptor4, this);
      _initializerDefineProperty(this, "processingProgress", _descriptor5, this);
      _initializerDefineProperty(this, "processingErrors", _descriptor6, this);
      _initializerDefineProperty(this, "headers", _descriptor7, this);
      _initializerDefineProperty(this, "rowCount", _descriptor8, this);
    }
    triggerSelectFile(e) {
      document.querySelector('#' + e).click();
    }
    async processFile(file) {
      this.isProcessing = true;
      this.processingProgress = 0;
      this.processingErrors = [];
      this.rowCount = 0;
      try {
        // Read the file as text first
        const reader = new FileReader();
        reader.onload = event => {
          const csvText = event.target.result;

          // Now parse the CSV text with PapaParse
          _papaparse.default.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: results => {
              if (results) {
                this.type.csvData = results.data;
                this.headers = results.meta.fields || [];
                this.rowCount = results.data.length;
                this.processingErrors = results.errors || [];
                if (this.args.onCsvProcessed) {
                  this.args.onCsvProcessed({
                    data: this.type.csvData,
                    headers: this.headers,
                    rowCount: this.rowCount,
                    errors: this.processingErrors
                  });
                }
              } else {
                this.processingErrors.push({
                  message: 'Failed to process CSV: Results object is undefined'
                });
              }
              this.processingProgress = 100;
              this.isProcessing = false;
            },
            error: error => {
              this.processingErrors.push(error);
              this.isProcessing = false;
            }
          });
        };
        reader.onerror = error => {
          this.processingErrors.push({
            message: 'Error reading file: ' + error
          });
          this.isProcessing = false;
        };

        // Start reading the file
        reader.readAsText(file);
      } catch (error) {
        this.processingErrors.push({
          message: 'Exception while processing file: ' + error.message
        });
        this.isProcessing = false;
      }
    }
    handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) {
        this.processFile(file);
      }
    }
    handleFileDrop(event) {
      const files = event.detail;
      if (files && files.length > 0) {
        this.processFile(files[0]);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isProcessing", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "processingProgress", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "processingErrors", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "headers", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "rowCount", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "triggerSelectFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "triggerSelectFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "processFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "processFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFileSelect", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFileSelect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFileDrop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFileDrop"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, FilesCsvUploader);
});
;define("junction/components/files/uploader", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "ember-file-upload", "junction/config/environment", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _emberFileUpload, _environment, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"ember-file-upload",0,"junction/config/environment",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="row mt-3 row-cols-1 g-3 mx-0">
  	<div class="card px-0 mx-0 border-0">
  
  	  <div class="card-body p-0" {{on 'click' (fn this.triggerSelectFile "main-files-uploader")}}>
  
  		{{#let (file-queue name="main-files-uploader" onFileAdded=this.uploadFile) as |queue|}}
  			<div class="d-none">
  				<input class="form-control" type="file" id="main-files-uploader" {{queue.selectFile}}>
  			</div>
  			<FileDropzone @queue={{queue}} as |dropzone|>
  			    {{#if dropzone.active}}
  			      <div class="text-center text-{{this.colormodes.inverseMode}} w-100 fs-4 p-5" style="border: 2px dashed #000;"><i class="fa-solid fa-wand-magic-sparkles fa-spin"></i>&nbsp;&nbsp;Drop to upload</div>
  			    {{else if queue.files.length}}
  			      <div class="text-center text-{{this.colormodes.inverseMode}} w-100 fs-4 p-5" style="border: 2px dashed #eee;"><i class="fa-solid fa-clock"></i>&nbsp;Uploading {{queue.files.length}} file(s) ({{queue.progress}}% done).</div>
  			      	<div class="progress" role="progressbar" aria-valuenow="{{queue.progress}}" aria-valuemin="0" aria-valuemax="100">
  					  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: {{queue.progress}}%"></div>
  					</div>
  			    {{else if dropzone.supported}}
  			      <div class="text-center text-muted w-100 fs-4 p-5" style="border: 2px dashed #eee;"><i class="fa-solid fa-cloud-arrow-up"></i>&nbsp;&nbsp;{{if @placeholder @placeholder "Drag and drop files here to upload them"}}</div>
  			    {{/if}}
  		  	</FileDropzone>
  		{{/let}}
  
  	  </div>
  
  	</div>
  </div>
  */
  {
    "id": "ck47KpQq",
    "block": "[[[10,0],[14,0,\"row mt-3 row-cols-1 g-3 mx-0\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"card px-0 mx-0 border-0\"],[12],[1,\"\\n\\n\\t  \"],[11,0],[24,0,\"card-body p-0\"],[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"triggerSelectFile\"]],\"main-files-uploader\"],null]],null],[12],[1,\"\\n\\n\"],[44,[[28,[37,4],null,[[\"name\",\"onFileAdded\"],[\"main-files-uploader\",[30,0,[\"uploadFile\"]]]]]],[[[1,\"\\t\\t\\t\"],[10,0],[14,0,\"d-none\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[11,\"input\"],[24,0,\"form-control\"],[24,1,\"main-files-uploader\"],[24,4,\"file\"],[4,[30,1,[\"selectFile\"]],null,null],[12],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[8,[39,6],null,[[\"@queue\"],[[30,1]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,2,[\"active\"]],[[[1,\"\\t\\t\\t      \"],[10,0],[15,0,[29,[\"text-center text-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" w-100 fs-4 p-5\"]]],[14,5,\"border: 2px dashed #000;\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-wand-magic-sparkles fa-spin\"],[12],[13],[1,\"  Drop to upload\"],[13],[1,\"\\n\"]],[]],[[[41,[30,1,[\"files\",\"length\"]],[[[1,\"\\t\\t\\t      \"],[10,0],[15,0,[29,[\"text-center text-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" w-100 fs-4 p-5\"]]],[14,5,\"border: 2px dashed #eee;\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-clock\"],[12],[13],[1,\" Uploading \"],[1,[30,1,[\"files\",\"length\"]]],[1,\" file(s) (\"],[1,[30,1,[\"progress\"]]],[1,\"% done).\"],[13],[1,\"\\n\\t\\t\\t      \\t\"],[10,0],[14,0,\"progress\"],[14,\"role\",\"progressbar\"],[15,\"aria-valuenow\",[29,[[30,1,[\"progress\"]]]]],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[12],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,0],[14,0,\"progress-bar progress-bar-striped progress-bar-animated\"],[15,5,[29,[\"width: \",[30,1,[\"progress\"]],\"%\"]]],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[]],[[[41,[30,2,[\"supported\"]],[[[1,\"\\t\\t\\t      \"],[10,0],[14,0,\"text-center text-muted w-100 fs-4 p-5\"],[14,5,\"border: 2px dashed #eee;\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-cloud-arrow-up\"],[12],[13],[1,\"  \"],[1,[52,[30,3],[30,3],\"Drag and drop files here to upload them\"]],[13],[1,\"\\n\\t\\t\\t    \"]],[]],null]],[]]]],[]]],[1,\"\\t\\t  \\t\"]],[2]]]]],[1,\"\\n\"]],[1]]],[1,\"\\n\\t  \"],[13],[1,\"\\n\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"queue\",\"dropzone\",\"@placeholder\"],false,[\"div\",\"on\",\"fn\",\"let\",\"file-queue\",\"input\",\"file-dropzone\",\"if\",\"i\"]]",
    "moduleName": "junction/components/files/uploader.hbs",
    "isStrictMode": false
  });
  let FilesUploaderComponent = _exports.default = (_class = class FilesUploaderComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "fileQueue", _descriptor, this);
      _initializerDefineProperty(this, "store", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
      _initializerDefineProperty(this, "type", _descriptor4, this);
      _defineProperty(this, "explodeFilename", filename => {
        var base = new String(filename).substring(filename.lastIndexOf('/') + 1);
        if (base.lastIndexOf('.') != -1) base = base.substring(0, base.lastIndexOf('.'));
        return base;
      });
    }
    get queue() {
      return this.fileQueue.findOrCreate('main-files-uploader');
    }
    triggerSelectFile(e) {
      document.querySelector('#' + e).click();
    }
    async uploadFile(file) {
      try {
        const response = await file.upload(_environment.default.TribeENV.API_URL + '/uploads.php');
        response.json().then(async data => {
          if (data.status == 'success') {
            let obj = this.store.createRecord('file_record', {
              modules: {
                title: data.file.name,
                mime: data.file.mime,
                url: data.file.url,
                file: data.file,
                content_privacy: 'private'
              }
            });
            await obj.save();
            if (this.args.updateOnUpload !== undefined) this.args.updateOnUpload(data.file);else this.type.changeType(this.type.currentType);
          } else if (data.status == 'error') {
            alert(data.error_message);
          }
        });
      } catch (error) {
        file.state = 'aborted';
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "fileQueue", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "triggerSelectFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "triggerSelectFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "uploadFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "uploadFile"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, FilesUploaderComponent);
});
;define("junction/components/footer", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "junction/config/environment", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _environment, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"junction/config/environment",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <footer
    class="mt-auto text-{{if @index 'light' this.colormodes.inverseMode}}
      bg-{{if @index 'black' this.colormodes.mode}}
      border-0 pt-6 mt-5 pb-5 mb-0"
  >
  
    <div class="container">
      <div class="row">
        <div class="col-md small my-2">
          <div
            class="d-flex align-items-center justify-content-lg-start justify-content-center"
          >
            <div class="d-flex align-items-center justify-content-start">
              <span class="me-2">Built with</span><i
                class="fa-solid fa-heart text-danger fs-5"
              ></i><span class="mx-2">by</span>
            </div>
            <div class="d-flex align-items-center justify-content-start mt-n1">
              <a
                href="https://wildfiretech.co"
                target="_blank"
                rel="noopener noreferrer"
              ><Logo::Flame
                  @width="25"
                  @color="var(--bs-{{if
                    @index
                    'light'
                    this.colormodes.inverseMode
                  }})"
                /></a>
            </div>
          </div>
          <div
            class="d-flex align-items-center my-3 justify-content-lg-start justify-content-center"
          ><span style="transform: scaleX(-1);">&copy;</span>&nbsp;2019 -
            {{this.yearNow}}&nbsp;&nbsp;
            <a
              href="https://github.com/tribe-framework"
              class="text-decoration-none text-{{if
                  @index
                  'light'
                  this.colormodes.inverseMode
                }}"
            ><i class="fa-brands fa-github fs-5"></i></a></div>
        </div>
  
        <div class="col-md small my-2">
          <ul class="list-unstyled small text-center text-lg-end fw-light">
            <li><a
                class="text-decoration-none text-{{if
                    @index
                    'light'
                    this.colormodes.inverseMode
                  }}"
                href="https://junction.express/page/get-in-touch"
              >Get in touch</a></li>
            <li><a
                class="text-decoration-none text-{{if
                    @index
                    'light'
                    this.colormodes.inverseMode
                  }}"
                href="https://junction.express/page/user-agreement"
              >User agreement</a></li>
            <li><a
                class="text-decoration-none text-{{if
                    @index
                    'light'
                    this.colormodes.inverseMode
                  }}"
                href="https://junction.express/page/privacy-policy"
              >Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  */
  {
    "id": "l7uXRZEg",
    "block": "[[[10,\"footer\"],[15,0,[29,[\"mt-auto text-\",[52,[30,1],\"light\",[30,0,[\"colormodes\",\"inverseMode\"]]],\"\\n    bg-\",[52,[30,1],\"black\",[30,0,[\"colormodes\",\"mode\"]]],\"\\n    border-0 pt-6 mt-5 pb-5 mb-0\"]]],[12],[1,\"\\n\\n  \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"col-md small my-2\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-lg-start justify-content-center\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"d-flex align-items-center justify-content-start\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"me-2\"],[12],[1,\"Built with\"],[13],[10,\"i\"],[14,0,\"fa-solid fa-heart text-danger fs-5\"],[12],[13],[10,1],[14,0,\"mx-2\"],[12],[1,\"by\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"d-flex align-items-center justify-content-start mt-n1\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"https://wildfiretech.co\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[8,[39,6],null,[[\"@width\",\"@color\"],[\"25\",[29,[\"var(--bs-\",[52,[30,1],\"light\",[30,0,[\"colormodes\",\"inverseMode\"]]],\")\"]]]],null],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center my-3 justify-content-lg-start justify-content-center\"],[12],[10,1],[14,5,\"transform: scaleX(-1);\"],[12],[1,\"©\"],[13],[1,\" 2019 -\\n          \"],[1,[30,0,[\"yearNow\"]]],[1,\"  \\n          \"],[10,3],[14,6,\"https://github.com/tribe-framework\"],[15,0,[29,[\"text-decoration-none text-\",[52,[30,1],\"light\",[30,0,[\"colormodes\",\"inverseMode\"]]]]]],[12],[10,\"i\"],[14,0,\"fa-brands fa-github fs-5\"],[12],[13],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"col-md small my-2\"],[12],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"list-unstyled small text-center text-lg-end fw-light\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[10,3],[15,0,[29,[\"text-decoration-none text-\",[52,[30,1],\"light\",[30,0,[\"colormodes\",\"inverseMode\"]]]]]],[14,6,\"https://junction.express/page/get-in-touch\"],[12],[1,\"Get in touch\"],[13],[13],[1,\"\\n          \"],[10,\"li\"],[12],[10,3],[15,0,[29,[\"text-decoration-none text-\",[52,[30,1],\"light\",[30,0,[\"colormodes\",\"inverseMode\"]]]]]],[14,6,\"https://junction.express/page/user-agreement\"],[12],[1,\"User agreement\"],[13],[13],[1,\"\\n          \"],[10,\"li\"],[12],[10,3],[15,0,[29,[\"text-decoration-none text-\",[52,[30,1],\"light\",[30,0,[\"colormodes\",\"inverseMode\"]]]]]],[14,6,\"https://junction.express/page/privacy-policy\"],[12],[1,\"Privacy policy\"],[13],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@index\"],false,[\"footer\",\"if\",\"div\",\"span\",\"i\",\"a\",\"logo/flame\",\"ul\",\"li\"]]",
    "moduleName": "junction/components/footer.hbs",
    "isStrictMode": false
  });
  let FooterComponent = _exports.default = (_class = class FooterComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
      _initializerDefineProperty(this, "yearNow", _descriptor2, this);
    }
    get hidePostcodeAttribution() {
      if (_environment.default.HIDE_POSTCODE_ATTRIBUTION !== undefined) return _environment.default.HIDE_POSTCODE_ATTRIBUTION;else return false;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "yearNow", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new Date().getFullYear();
    }
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, FooterComponent);
});
;define("junction/components/go-to-top", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="position-fixed bottom-0 end-0 m-3">
  	<div class="text-{{this.colormodes.inverseMode}}" {{on 'click' this.goToTop}}><i class="fa-solid fa-circle-chevron-up fa-2x"></i></div>
  </div>
  */
  {
    "id": "Y8zdS+jK",
    "block": "[[[10,0],[14,0,\"position-fixed bottom-0 end-0 m-3\"],[12],[1,\"\\n\\t\"],[11,0],[16,0,[29,[\"text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[4,[38,1],[\"click\",[30,0,[\"goToTop\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-chevron-up fa-2x\"],[12],[13],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"on\",\"i\"]]",
    "moduleName": "junction/components/go-to-top.hbs",
    "isStrictMode": false
  });
  let GoToTopComponent = _exports.default = (_class = class GoToTopComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
    }
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "goToTop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "goToTop"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GoToTopComponent);
});
;define("junction/components/header-nav-item", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if @navtitle}}
  	<li class="nav-item d-flex align-items-stretch">
        <LinkTo {{on 'click' @collapseMenu}} class="nav-link pt-2 px-3 px-lg-4 d-flex align-items-center justify-content-start" @route="{{@navroute}}">
        	<span class="mt-1">{{@navtitle}}</span>
        </LinkTo>
      </li>
  {{else if @navroute}}
  	<li class="nav-item d-flex align-items-stretch">
        <LinkTo {{on 'click' @collapseMenu}} class="nav-link pt-2 px-3 px-lg-4 d-flex align-items-center justify-content-start" @route="{{@navroute}}">
        	{{yield}}
        </LinkTo>
      </li>
  {{else}}
  	<li class="nav-item d-flex align-items-stretch">
  		{{yield}}
  	</li>
  {{/if}}
  */
  {
    "id": "37rYNGmX",
    "block": "[[[41,[30,1],[[[1,\"\\t\"],[10,\"li\"],[14,0,\"nav-item d-flex align-items-stretch\"],[12],[1,\"\\n      \"],[8,[39,2],[[24,0,\"nav-link pt-2 px-3 px-lg-4 d-flex align-items-center justify-content-start\"],[4,[38,3],[\"click\",[30,3]],null]],[[\"@route\"],[[29,[[30,2]]]]],[[\"default\"],[[[[1,\"\\n      \\t\"],[10,1],[14,0,\"mt-1\"],[12],[1,[30,1]],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,2],[[[1,\"\\t\"],[10,\"li\"],[14,0,\"nav-item d-flex align-items-stretch\"],[12],[1,\"\\n      \"],[8,[39,2],[[24,0,\"nav-link pt-2 px-3 px-lg-4 d-flex align-items-center justify-content-start\"],[4,[38,3],[\"click\",[30,3]],null]],[[\"@route\"],[[29,[[30,2]]]]],[[\"default\"],[[[[1,\"\\n      \\t\"],[18,4,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\"],[10,\"li\"],[14,0,\"nav-item d-flex align-items-stretch\"],[12],[1,\"\\n\\t\\t\"],[18,4,null],[1,\"\\n\\t\"],[13],[1,\"\\n\"]],[]]]],[]]]],[\"@navtitle\",\"@navroute\",\"@collapseMenu\",\"&default\"],false,[\"if\",\"li\",\"link-to\",\"on\",\"span\",\"yield\"]]",
    "moduleName": "junction/components/header-nav-item.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "header-nav-item"));
});
;define("junction/components/header", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav
    class="fs-4 fs-light border-bottom border-5 border-primary navbar navbar-expand bg-{{this.colormodes.mode}}
      sticky-top py-0"
    {{did-insert this.colormodes.initMode}}
  >
    {{#if @public}}
  
      <div class="p-3 container-fluid">
        <button
          id="main-menu-toggler"
          class="shadow-none navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bars-staggered fs-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto text-end d-flex align-items-stretch">
            {{#if (eq this.colormodes.mode "light")}}
              <div class="py-1"><Logo::Icon
                  @width="100"
                  @color="var(--bs-black)"
                /></div>
            {{else}}
              <div class="py-1"><Logo::Icon
                  @width="100"
                  @color="var(--bs-white)"
                /></div>
            {{/if}}
          </ul>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <div
            class="fs-4 px-2 px-md-3 cursor-pointer"
            {{on "click" this.colormodes.changeMode}}
          >
            {{#if (eq this.colormodes.mode "dark")}}
              <i class="fa-solid fa-sun"></i>
            {{else}}
              <i class="fa-solid fa-moon"></i>
            {{/if}}
          </div>
        </div>
      </div>
  
    {{else}}
      <div class="container-fluid px-0">
        <button
          id="main-menu-toggler"
          {{on "click" this.toggleBarsIcon}}
          class="shadow-none navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bars-staggered fs-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto text-end d-flex align-items-stretch">
            <li class="nav-item d-flex align-items-stretch">
              <a
                href="/"
                class="nav-link pt-2 px-3 px-lg-4 d-flex align-items-center justify-content-start"
              >
                {{#if (eq this.colormodes.mode "light")}}
                  <div class="py-1"><Logo::Icon
                      @width="100"
                      @color="var(--bs-black)"
                    /></div>
                {{else}}
                  <div class="py-1"><Logo::Icon
                      @width="100"
                      @color="var(--bs-white)"
                    /></div>
                {{/if}}
              </a>
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center justify-content-end px-md-2">
  
          <div
            class="fs-4 px-2 px-md-3 cursor-pointer"
            {{on "click" this.colormodes.changeMode}}
          >
            {{#if (eq this.colormodes.mode "dark")}}
              <i class="fa-solid fa-sun"></i>
            {{else}}
              <i class="fa-solid fa-moon"></i>
            {{/if}}
          </div>
  
          <HeaderNavItem>
            <div class="fs-4 px-2 px-md-3 cursor-pointer btn-group">
              <div
                id="blueprints-dropdown-btn"
                class="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i class="fa-solid fa-circle-nodes"></i>
              </div>
              <ul
                class="dropdown-menu dropdown-menu-end overflow-x-scroll overflow-y-scroll"
                style="max-height:400px"
              >
                <li><h6 class="dropdown-header text-capitalize">Current blueprint</h6></li>
                <li><a
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#blueprintConsultationModal"
                    href="#"
                  >Implementation summary</a></li>
                <li><a
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#blueprintAIPromptModal"
                    href="#"
                  >Generate new blueprint</a></li>
                <li><a
                    {{on "click" this.blueprints.downloadCurrentBlueprint}}
                    class="dropdown-item"
                    href="#"
                  >Download current blueprint</a></li>
                <li><a
                    {{on "click" this.blueprints.downloadCurrentSimplifiedBlueprint}}
                    class="dropdown-item"
                    href="#"
                  >Download current simplified blueprint</a></li>
                <li><a
                    {{on "click" this.blueprints.clearBlueprint}}
                    class="dropdown-item"
                    href="#"
                  >Reset blueprint</a></li>
  
                <li><hr class="dropdown-divider" /></li>
  
                <li><h6 class="dropdown-header text-capitalize">Switch blueprint</h6></li>
                {{#each this.blueprints.junctionBlueprints as |blueprint|}}
                  <li><a
                      {{on
                        "click"
                        (fn
                          this.blueprints.changeBlueprint
                          blueprint.attributes.modules.link
                        )
                      }}
                      href="#"
                      class="dropdown-item"
                    >{{blueprint.attributes.modules.title}}</a></li>
                {{/each}}
  
                {{#if this.blueprints.myBlueprints}}
                  <li><hr class="dropdown-divider" /></li>
  
                  <li><h6 class="dropdown-header text-capitalize">Recently used</h6></li>
                  {{#each this.blueprints.myBlueprints as |blueprint|}}
                    <li><a
                        {{on
                          "click"
                          (fn
                            this.blueprints.revertBlueprint
                            blueprint.modules.types_json
                          )
                        }}
                        class="dropdown-item"
                        href="#"
                      >{{blueprint.modules.title}}</a></li>
                  {{/each}}
                {{/if}}
  
              </ul>
            </div>
          </HeaderNavItem>
  
          <HeaderNavItem>
            <div class="fs-3 cursor-pointer btn-group">
              <div class="dropdown-toggle px-2 px-md-3" data-bs-toggle="dropdown">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a
                    class="dropdown-item"
                    {{on
                      "click"
                      (fn
                        this.changeType
                        (get this.types.json.modules "file_record")
                      )
                    }}
                  ><i class="fa-solid fa-cloud"></i> File Uploads</a></li>
                <li class="d-none"><a
                    class="dropdown-item"
                    {{on
                      "click"
                      (fn
                        this.changeType
                        (get this.types.json.modules "platform_record")
                      )
                    }}
                  ><i class="fa-solid fa-layer-group"></i> Platforms</a></li>
                <li><LinkTo class="dropdown-item" @route="files"><i
                      class="fa-solid fa-magnifying-glass"
                    ></i>
                    Search Uploads</LinkTo></li>
                <li><a
                    class="dropdown-item"
                    {{on
                      "click"
                      (fn
                        this.changeType
                        (get this.types.json.modules "deleted_record")
                      )
                    }}
                  ><i class="fa-solid fa-recycle"></i> Deleted Records</a></li>
                <li><a
                    class="dropdown-item"
                    {{on
                      "click"
                      (fn
                        this.changeType
                        (get this.types.json.modules "apikey_record")
                      )
                    }}
                  ><i class="fa-solid fa-plug"></i> Junction API</a></li>
                <li><a
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#typesWebapp"
                  ><i class="fa-solid fa-gear"></i> Settings</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a
                    target="new"
                    class="dropdown-item"
                    href="https://junction.express/junctions"
                  ><i class="fa-solid fa-table-cells-large"></i>
                    My Junctions</a></li>
                <li><a
                    target="new"
                    class="dropdown-item"
                    href="https://junction.express/?showHome=true"
                  ><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit homepage</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a
                    {{on "click" this.auth.logout}}
                    class="dropdown-item"
                    href="#"
                  ><i class="fa-solid fa-arrow-right-from-bracket"></i>
                    Logout</a></li>
              </ul>
            </div>
          </HeaderNavItem>
        </div>
      </div>
  
    {{/if}}
  </nav>
  
  {{yield}}
  */
  {
    "id": "YUFmKdq5",
    "block": "[[[11,\"nav\"],[16,0,[29,[\"fs-4 fs-light border-bottom border-5 border-primary navbar navbar-expand bg-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n    sticky-top py-0\"]]],[4,[38,1],[[30,0,[\"colormodes\",\"initMode\"]]],null],[12],[1,\"\\n\"],[41,[30,1],[[[1,\"\\n    \"],[10,0],[14,0,\"p-3 container-fluid\"],[12],[1,\"\\n      \"],[10,\"button\"],[14,1,\"main-menu-toggler\"],[14,0,\"shadow-none navbar-toggler p-0\"],[14,\"data-bs-toggle\",\"collapse\"],[14,\"data-bs-target\",\"#navbarSupportedContent\"],[14,\"aria-controls\",\"navbarSupportedContent\"],[14,\"aria-expanded\",\"false\"],[14,\"aria-label\",\"Toggle navigation\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"bars-staggered fs-1\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"collapse navbar-collapse\"],[14,1,\"navbarSupportedContent\"],[12],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"navbar-nav me-auto text-end d-flex align-items-stretch\"],[12],[1,\"\\n\"],[41,[28,[37,7],[[30,0,[\"colormodes\",\"mode\"]],\"light\"],null],[[[1,\"            \"],[10,0],[14,0,\"py-1\"],[12],[8,[39,8],null,[[\"@width\",\"@color\"],[\"100\",\"var(--bs-black)\"]],null],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,0],[14,0,\"py-1\"],[12],[8,[39,8],null,[[\"@width\",\"@color\"],[\"100\",\"var(--bs-white)\"]],null],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n        \"],[11,0],[24,0,\"fs-4 px-2 px-md-3 cursor-pointer\"],[4,[38,9],[\"click\",[30,0,[\"colormodes\",\"changeMode\"]]],null],[12],[1,\"\\n\"],[41,[28,[37,7],[[30,0,[\"colormodes\",\"mode\"]],\"dark\"],null],[[[1,\"            \"],[10,\"i\"],[14,0,\"fa-solid fa-sun\"],[12],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,\"i\"],[14,0,\"fa-solid fa-moon\"],[12],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"]],[]],[[[1,\"    \"],[10,0],[14,0,\"container-fluid px-0\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,1,\"main-menu-toggler\"],[24,0,\"shadow-none navbar-toggler p-0\"],[24,\"data-bs-toggle\",\"collapse\"],[24,\"data-bs-target\",\"#navbarSupportedContent\"],[24,\"aria-controls\",\"navbarSupportedContent\"],[24,\"aria-expanded\",\"false\"],[24,\"aria-label\",\"Toggle navigation\"],[24,4,\"button\"],[4,[38,9],[\"click\",[30,0,[\"toggleBarsIcon\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"bars-staggered fs-1\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"collapse navbar-collapse\"],[14,1,\"navbarSupportedContent\"],[12],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"navbar-nav me-auto text-end d-flex align-items-stretch\"],[12],[1,\"\\n          \"],[10,\"li\"],[14,0,\"nav-item d-flex align-items-stretch\"],[12],[1,\"\\n            \"],[10,3],[14,6,\"/\"],[14,0,\"nav-link pt-2 px-3 px-lg-4 d-flex align-items-center justify-content-start\"],[12],[1,\"\\n\"],[41,[28,[37,7],[[30,0,[\"colormodes\",\"mode\"]],\"light\"],null],[[[1,\"                \"],[10,0],[14,0,\"py-1\"],[12],[8,[39,8],null,[[\"@width\",\"@color\"],[\"100\",\"var(--bs-black)\"]],null],[13],[1,\"\\n\"]],[]],[[[1,\"                \"],[10,0],[14,0,\"py-1\"],[12],[8,[39,8],null,[[\"@width\",\"@color\"],[\"100\",\"var(--bs-white)\"]],null],[13],[1,\"\\n\"]],[]]],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end px-md-2\"],[12],[1,\"\\n\\n        \"],[11,0],[24,0,\"fs-4 px-2 px-md-3 cursor-pointer\"],[4,[38,9],[\"click\",[30,0,[\"colormodes\",\"changeMode\"]]],null],[12],[1,\"\\n\"],[41,[28,[37,7],[[30,0,[\"colormodes\",\"mode\"]],\"dark\"],null],[[[1,\"            \"],[10,\"i\"],[14,0,\"fa-solid fa-sun\"],[12],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,\"i\"],[14,0,\"fa-solid fa-moon\"],[12],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n\\n        \"],[8,[39,12],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,0],[14,0,\"fs-4 px-2 px-md-3 cursor-pointer btn-group\"],[12],[1,\"\\n            \"],[10,0],[14,1,\"blueprints-dropdown-btn\"],[14,0,\"dropdown-toggle\"],[14,\"data-bs-toggle\",\"dropdown\"],[12],[1,\"\\n              \"],[10,\"i\"],[14,0,\"fa-solid fa-circle-nodes\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"dropdown-menu dropdown-menu-end overflow-x-scroll overflow-y-scroll\"],[14,5,\"max-height:400px\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"h6\"],[14,0,\"dropdown-header text-capitalize\"],[12],[1,\"Current blueprint\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#blueprintConsultationModal\"],[14,6,\"#\"],[12],[1,\"Implementation summary\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#blueprintAIPromptModal\"],[14,6,\"#\"],[12],[1,\"Generate new blueprint\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,9],[\"click\",[30,0,[\"blueprints\",\"downloadCurrentBlueprint\"]]],null],[12],[1,\"Download current blueprint\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,9],[\"click\",[30,0,[\"blueprints\",\"downloadCurrentSimplifiedBlueprint\"]]],null],[12],[1,\"Download current simplified blueprint\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,9],[\"click\",[30,0,[\"blueprints\",\"clearBlueprint\"]]],null],[12],[1,\"Reset blueprint\"],[13],[13],[1,\"\\n\\n              \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n\\n              \"],[10,\"li\"],[12],[10,\"h6\"],[14,0,\"dropdown-header text-capitalize\"],[12],[1,\"Switch blueprint\"],[13],[13],[1,\"\\n\"],[42,[28,[37,16],[[28,[37,16],[[30,0,[\"blueprints\",\"junctionBlueprints\"]]],null]],null],null,[[[1,\"                \"],[10,\"li\"],[12],[11,3],[24,6,\"#\"],[24,0,\"dropdown-item\"],[4,[38,9],[\"click\",[28,[37,17],[[30,0,[\"blueprints\",\"changeBlueprint\"]],[30,2,[\"attributes\",\"modules\",\"link\"]]],null]],null],[12],[1,[30,2,[\"attributes\",\"modules\",\"title\"]]],[13],[13],[1,\"\\n\"]],[2]],null],[1,\"\\n\"],[41,[30,0,[\"blueprints\",\"myBlueprints\"]],[[[1,\"                \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n\\n                \"],[10,\"li\"],[12],[10,\"h6\"],[14,0,\"dropdown-header text-capitalize\"],[12],[1,\"Recently used\"],[13],[13],[1,\"\\n\"],[42,[28,[37,16],[[28,[37,16],[[30,0,[\"blueprints\",\"myBlueprints\"]]],null]],null],null,[[[1,\"                  \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,9],[\"click\",[28,[37,17],[[30,0,[\"blueprints\",\"revertBlueprint\"]],[30,3,[\"modules\",\"types_json\"]]],null]],null],[12],[1,[30,3,[\"modules\",\"title\"]]],[13],[13],[1,\"\\n\"]],[3]],null]],[]],null],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n\\n        \"],[8,[39,12],null,null,[[\"default\"],[[[[1,\"\\n          \"],[10,0],[14,0,\"fs-3 cursor-pointer btn-group\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"dropdown-toggle px-2 px-md-3\"],[14,\"data-bs-toggle\",\"dropdown\"],[12],[1,\"\\n              \"],[10,\"i\"],[14,0,\"fa-solid fa-ellipsis-vertical\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"dropdown-menu dropdown-menu-end\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[4,[38,9],[\"click\",[28,[37,17],[[30,0,[\"changeType\"]],[28,[37,18],[[30,0,[\"types\",\"json\",\"modules\"]],\"file_record\"],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-cloud\"],[12],[13],[1,\" File Uploads\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[14,0,\"d-none\"],[12],[11,3],[24,0,\"dropdown-item\"],[4,[38,9],[\"click\",[28,[37,17],[[30,0,[\"changeType\"]],[28,[37,18],[[30,0,[\"types\",\"json\",\"modules\"]],\"platform_record\"],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-layer-group\"],[12],[13],[1,\" Platforms\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[8,[39,19],[[24,0,\"dropdown-item\"]],[[\"@route\"],[\"files\"]],[[\"default\"],[[[[10,\"i\"],[14,0,\"fa-solid fa-magnifying-glass\"],[12],[13],[1,\"\\n                  Search Uploads\"]],[]]]]],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[4,[38,9],[\"click\",[28,[37,17],[[30,0,[\"changeType\"]],[28,[37,18],[[30,0,[\"types\",\"json\",\"modules\"]],\"deleted_record\"],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-recycle\"],[12],[13],[1,\" Deleted Records\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[4,[38,9],[\"click\",[28,[37,17],[[30,0,[\"changeType\"]],[28,[37,18],[[30,0,[\"types\",\"json\",\"modules\"]],\"apikey_record\"],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-plug\"],[12],[13],[1,\" Junction API\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#typesWebapp\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-gear\"],[12],[13],[1,\" Settings\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,\"target\",\"new\"],[14,0,\"dropdown-item\"],[14,6,\"https://junction.express/junctions\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-table-cells-large\"],[12],[13],[1,\"\\n                  My Junctions\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,\"target\",\"new\"],[14,0,\"dropdown-item\"],[14,6,\"https://junction.express/?showHome=true\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-arrow-up-right-from-square\"],[12],[13],[1,\" Visit homepage\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,9],[\"click\",[30,0,[\"auth\",\"logout\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-arrow-right-from-bracket\"],[12],[13],[1,\"\\n                  Logout\"],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"]],[]]],[13],[1,\"\\n\\n\"],[18,4,null]],[\"@public\",\"blueprint\",\"blueprint\",\"&default\"],false,[\"nav\",\"did-insert\",\"if\",\"div\",\"button\",\"i\",\"ul\",\"eq\",\"logo/icon\",\"on\",\"li\",\"a\",\"header-nav-item\",\"h6\",\"hr\",\"each\",\"-track-array\",\"fn\",\"get\",\"link-to\",\"yield\"]]",
    "moduleName": "junction/components/header.hbs",
    "isStrictMode": false
  });
  let HeaderComponent = _exports.default = (_class = class HeaderComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "auth", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "blueprints", _descriptor3, this);
      _initializerDefineProperty(this, "types", _descriptor4, this);
      _initializerDefineProperty(this, "router", _descriptor5, this);
      _initializerDefineProperty(this, "type", _descriptor6, this);
    }
    blueprintsDropdown() {
      document.querySelector('#blueprints-dropdown-btn').click();
    }
    changeType(type) {
      this.type.clearSearchQuery();
      this.type.editorJSOnTypeChange();
      this.type.currentType = type;
      this.type.loadTypeObjects();
      this.router.transitionTo('type', type);
    }
    toggleBarsIcon() {
      let el = document.querySelector('#main-menu-toggler');
      if (el.attributes['aria-expanded'].value == 'true') el.innerHTML = '<i class="fa-solid fa-xmark fs-1"></i>';else el.innerHTML = '<i class="fa-solid fa-bars-staggered fs-1"></i>';
    }
    collapseMenu() {
      document.querySelector('#navbarSupportedContent').classList.remove('navbar-expand');
      document.querySelector('#navbarSupportedContent').classList.remove('show');
      document.querySelector('#navbarSupportedContent').classList.add('navbar-collapse');
      document.querySelector('#main-menu-toggler').attributes['aria-expanded'].value = 'false';
      //document.querySelector('.tooltip.show').classList.remove('show');
      this.toggleBarsIcon();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "auth", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "blueprintsDropdown", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "blueprintsDropdown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleBarsIcon", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleBarsIcon"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "collapseMenu", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "collapseMenu"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, HeaderComponent);
});
;define("junction/components/hooks/row-options", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "WOEv3VH7",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "junction/components/hooks/row-options.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "row-options"));
});
;define("junction/components/input-fields/checkbox", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-5 d-flex align-items-center justify-content-start">
    <div class="mx-n1"><XToggle
        @value={{get @object @module.input_slug}}
        @onToggle={{fn (mut (get @object @module.input_slug))}}
        @theme="ios"
        @variant={{this.colormodes.mode}}
      /></div>
    <div class="form-text text-end ms-4">{{if
        @module.input_placeholder
        @module.input_placeholder
        (concat "Choose " @module.input_slug)
      }}
      {{if
        @module.input_required
        (html-safe '<span class="text-danger">*</span>')
      }}</div>
  </div>
  */
  {
    "id": "1P83KpbU",
    "block": "[[[10,0],[14,0,\"mb-5 d-flex align-items-center justify-content-start\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"mx-n1\"],[12],[8,[39,1],null,[[\"@value\",\"@onToggle\",\"@theme\",\"@variant\"],[[28,[37,2],[[30,1],[30,2,[\"input_slug\"]]],null],[28,[37,3],[[28,[37,4],[[28,[37,2],[[30,1],[30,2,[\"input_slug\"]]],null]],null]],null],\"ios\",[30,0,[\"colormodes\",\"mode\"]]]],null],[13],[1,\"\\n  \"],[10,0],[14,0,\"form-text text-end ms-4\"],[12],[1,[52,[30,2,[\"input_placeholder\"]],[30,2,[\"input_placeholder\"]],[28,[37,6],[\"Choose \",[30,2,[\"input_slug\"]]],null]]],[1,\"\\n    \"],[1,[52,[30,2,[\"input_required\"]],[28,[37,7],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"],[13]],[\"@object\",\"@module\"],false,[\"div\",\"x-toggle\",\"get\",\"fn\",\"mut\",\"if\",\"concat\",\"html-safe\"]]",
    "moduleName": "junction/components/input-fields/checkbox.hbs",
    "isStrictMode": false
  });
  let InputFieldsCheckboxComponent = _exports.default = (_class = class InputFieldsCheckboxComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsCheckboxComponent);
});
;define("junction/components/input-fields/color", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "GtPQWae7",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/color.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "color"));
});
;define("junction/components/input-fields/date", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "tKvkV/CE",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/date.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "date"));
});
;define("junction/components/input-fields/datetime-local", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>\
    {{/if}}
  </div>
  */
  {
    "id": "U6mEgTog",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\\\\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/datetime-local.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "datetime-local"));
});
;define("junction/components/input-fields/editorjs", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "@ember/runloop", "bootstrap", "ember-modifier", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _runloop, _bootstrap, _emberModifier, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/runloop",0,"bootstrap",0,"ember-modifier",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="w-100 mb-3">
    <div
      class="border border-1 w-100 py-3 px-n3"
      id="{{concat @type.slug '-' @module.input_slug}}"
    ></div>
  
    <div class="d-flex justify-content-end">
      <div class="form-text text-end">
        {{if
          @module.input_placeholder
          @module.input_placeholder
          (concat "Enter " @module.input_slug)
        }}
      </div>
    </div>
  </div>
  
  {{this.onload @module.input_slug}}
  */
  {
    "id": "tRV/fHvH",
    "block": "[[[10,0],[14,0,\"w-100 mb-3\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"border border-1 w-100 py-3 px-n3\"],[15,1,[29,[[28,[37,1],[[30,1,[\"slug\"]],\"-\",[30,2,[\"input_slug\"]]],null]]]],[12],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"d-flex justify-content-end\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"\\n      \"],[1,[52,[30,2,[\"input_placeholder\"]],[30,2,[\"input_placeholder\"]],[28,[37,1],[\"Enter \",[30,2,[\"input_slug\"]]],null]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[1,[28,[30,0,[\"onload\"]],[[30,2,[\"input_slug\"]]],null]]],[\"@type\",\"@module\"],false,[\"div\",\"concat\",\"if\"]]",
    "moduleName": "junction/components/input-fields/editorjs.hbs",
    "isStrictMode": false
  });
  let InputFieldsEditorjsComponent = _exports.default = (_class = class InputFieldsEditorjsComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "object", _descriptor, this);
      _initializerDefineProperty(this, "type", _descriptor2, this);
      _defineProperty(this, "onload", (0, _emberModifier.modifier)(input_slug => {
        // initialize EditorJS when BS Modal is displayed
        this.type.editObjectModal.addEventListener('show.bs.modal', () => {
          this.type.showModalEvents.push(this.args.initEditorJS(input_slug));
        });

        // remove EditorJS when BS Modal is hidden
        this.type.editObjectModal.addEventListener('hidden.bs.modal', () => {
          this.type.hideModalEvents.push(this.args.uninitEditorJS(input_slug));
        });
      }));
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsEditorjsComponent);
});
;define("junction/components/input-fields/email", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "KY1gFLrb",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/email.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "email"));
});
;define("junction/components/input-fields/file-uploader", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "ember-file-upload", "junction/config/environment", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _emberFileUpload, _environment, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"ember-file-upload",0,"junction/config/environment",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3"><div class="card px-0">
  
      <div class="card-header border-0 text-uppercase">
        <i class="fa-solid fa-file-import"></i>
        <span class="ms-1">{{if
            @module.input_placeholder
            @module.input_placeholder
            "File Uploader"
          }}
          {{if
            @module.input_required
            (html-safe '<span class="text-danger">*</span>')
          }}</span>
      </div>
  
      <div
        class="card-body p-0"
        {{on
          "click"
          (fn
            this.triggerSelectFile
            (concat @type.slug "-" @module.input_slug "-" @id "-uploader")
          )
        }}
      >
  
        {{#let
          (file-queue
            name=(concat @type.slug "/" @module.input_slug "/" @id)
            onFileAdded=this.uploadFile
          )
          as |queue|
        }}
          <div class="d-none">
            <input
              class="form-control"
              type="file"
              id="{{concat
                @type.slug
                '-'
                @module.input_slug
                '-'
                @id
                '-uploader'
              }}"
              {{queue.selectFile}}
            />
          </div>
          <FileDropzone @queue={{queue}} as |dropzone|>
            {{#if dropzone.active}}
              <div
                class="text-center w-100 fs-4 p-3"
                style="border: 2px dashed #000;"
              ><i
                  class="fa-solid fa-wand-magic-sparkles fa-spin"
                ></i>&nbsp;&nbsp;Drop to upload</div>
            {{else if queue.files.length}}
              <div
                class="text-center w-100 fs-4 p-3"
                style="border: 2px dashed #eee;"
              ><i class="fa-solid fa-clock"></i>&nbsp;Uploading
                {{queue.files.length}}
                file(s) ({{queue.progress}}% done).</div>
              <div
                class="progress"
                role="progressbar"
                aria-valuenow="{{queue.progress}}"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  style="width: {{queue.progress}}%"
                ></div>
              </div>
            {{else if dropzone.supported}}
              <div
                class="text-center text-muted w-100 fs-4 p-3"
                style="border: 2px dashed #eee;"
              ><i class="fa-solid fa-cloud-arrow-up"></i>&nbsp;&nbsp;Drag and drop
                files here to upload them</div>
            {{/if}}
          </FileDropzone>
        {{/let}}
  
      </div>
  
      <div class="card-footer border-0" style="overflow-x: scroll;">
        {{#each (get @object @module.input_slug) as |file index|}}
          {{#if (this.isString file)}}
  
            <div class="my-1 d-flex align-items-center justify-content-start">
              <a
                href="{{file}}"
                class="me-2 btn btn-sm btn-outline-{{this.colormodes.inverseMode}}"
                target="new"
              >View file <i class="fa-solid fa-up-right-from-square"></i></a>
              <button
                {{on "click" (fn this.copyLink file index)}}
                type="button"
                class="me-2 btn btn-sm btn-outline-{{this.colormodes.inverseMode}}"
                target="new"
              ><span id="copy-{{index}}">Copy link</span>
                <i class="fa-solid fa-copy"></i></button>
              <span
                class="me-3 text-danger cursor-pointer"
                {{on "click" (fn this.deleteFile index)}}
              ><i class="fa-solid fa-circle-xmark"></i></span>
              <span class="text-muted">{{this.explodeFilename file}}</span>
            </div>
  
          {{else}}
  
            <div class="my-1 d-flex align-items-center justify-content-start">
  
              {{#if file.cloudflare_stream}}
  
                {{#if (get (get file.cloudflare_stream "result") "thumbnail")}}
                  <div class="me-2"><img
                      src="{{get
                        (get file.cloudflare_stream 'result')
                        'thumbnail'
                      }}"
                      height="31"
                    /></div>
                {{/if}}
                <a
                  href="{{file.url}}"
                  class="me-2 btn btn-sm btn-outline-{{this.colormodes.inverseMode}}"
                  target="new"
                >View file <i class="fa-solid fa-up-right-from-square"></i></a>
                <button
                  {{on
                    "click"
                    (fn
                      this.copyLink
                      (get
                        (get (get file.cloudflare_stream "result") "playback")
                        "hls"
                      )
                      index
                    )
                  }}
                  type="button"
                  class="me-2 btn btn-sm btn-outline-{{this.colormodes.inverseMode}}"
                  target="new"
                ><span id="copy-{{index}}">Copy link</span>
                  <i class="fa-solid fa-copy"></i></button>
  
              {{else}}
  
                {{#if file.xs.url}}
                  <div class="me-2"><img
                      src="{{file.xs.url}}"
                      height="31"
                    /></div>
                {{/if}}
                <a
                  href="{{file.url}}"
                  class="me-2 btn btn-sm btn-outline-{{this.colormodes.inverseMode}}"
                  target="new"
                >View file <i class="fa-solid fa-up-right-from-square"></i></a>
                <button
                  {{on "click" (fn this.copyLink file.url index)}}
                  type="button"
                  class="me-2 btn btn-sm btn-outline-{{this.colormodes.inverseMode}}"
                  target="new"
                ><span id="copy-{{index}}">Copy link</span>
                  <i class="fa-solid fa-copy"></i></button>
  
              {{/if}}
  
              <span
                class="me-3 text-danger cursor-pointer"
                {{on "click" (fn this.deleteFile index)}}
              ><i class="fa-solid fa-circle-xmark"></i></span>
              <span class="text-muted">{{this.explodeFilename file.url}}</span>
            </div>
  
          {{/if}}
        {{/each}}
      </div>
  
    </div>
    <div class="form-text text-end">{{if
        @module.input_placeholder
        @module.input_placeholder
        (concat "Enter " @module.input_slug)
      }}</div>
  </div>
  */
  {
    "id": "8g67JB/z",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[10,0],[14,0,\"card px-0\"],[12],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-header border-0 text-uppercase\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-file-import\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"ms-1\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],\"File Uploader\"]],[1,\"\\n        \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,4],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[11,0],[24,0,\"card-body p-0\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"triggerSelectFile\"]],[28,[37,7],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-uploader\"],null]],null]],null],[12],[1,\"\\n\\n\"],[44,[[28,[37,9],null,[[\"name\",\"onFileAdded\"],[[28,[37,7],[[30,2,[\"slug\"]],\"/\",[30,1,[\"input_slug\"]],\"/\",[30,3]],null],[30,0,[\"uploadFile\"]]]]]],[[[1,\"        \"],[10,0],[14,0,\"d-none\"],[12],[1,\"\\n          \"],[11,\"input\"],[24,0,\"form-control\"],[16,1,[29,[[28,[37,7],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-uploader\"],null]]]],[24,4,\"file\"],[4,[30,4,[\"selectFile\"]],null,null],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[8,[39,11],null,[[\"@queue\"],[[30,4]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,5,[\"active\"]],[[[1,\"            \"],[10,0],[14,0,\"text-center w-100 fs-4 p-3\"],[14,5,\"border: 2px dashed #000;\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-wand-magic-sparkles fa-spin\"],[12],[13],[1,\"  Drop to upload\"],[13],[1,\"\\n\"]],[]],[[[41,[30,4,[\"files\",\"length\"]],[[[1,\"            \"],[10,0],[14,0,\"text-center w-100 fs-4 p-3\"],[14,5,\"border: 2px dashed #eee;\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-clock\"],[12],[13],[1,\" Uploading\\n              \"],[1,[30,4,[\"files\",\"length\"]]],[1,\"\\n              file(s) (\"],[1,[30,4,[\"progress\"]]],[1,\"% done).\"],[13],[1,\"\\n            \"],[10,0],[14,0,\"progress\"],[14,\"role\",\"progressbar\"],[15,\"aria-valuenow\",[29,[[30,4,[\"progress\"]]]]],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"progress-bar progress-bar-striped progress-bar-animated\"],[15,5,[29,[\"width: \",[30,4,[\"progress\"]],\"%\"]]],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],[[[41,[30,5,[\"supported\"]],[[[1,\"            \"],[10,0],[14,0,\"text-center text-muted w-100 fs-4 p-3\"],[14,5,\"border: 2px dashed #eee;\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-cloud-arrow-up\"],[12],[13],[1,\"  Drag and drop\\n              files here to upload them\"],[13],[1,\"\\n          \"]],[]],null]],[]]]],[]]],[1,\"        \"]],[5]]]]],[1,\"\\n\"]],[4]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-footer border-0\"],[14,5,\"overflow-x: scroll;\"],[12],[1,\"\\n\"],[42,[28,[37,13],[[28,[37,13],[[28,[37,14],[[30,6],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[41,[28,[30,0,[\"isString\"]],[[30,7]],null],[[[1,\"\\n          \"],[10,0],[14,0,\"my-1 d-flex align-items-center justify-content-start\"],[12],[1,\"\\n            \"],[10,3],[15,6,[29,[[30,7]]]],[15,0,[29,[\"me-2 btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"target\",\"new\"],[12],[1,\"View file \"],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[13],[1,\"\\n            \"],[11,\"button\"],[16,0,[29,[\"me-2 btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[24,\"target\",\"new\"],[24,4,\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"copyLink\"]],[30,7],[30,8]],null]],null],[12],[10,1],[15,1,[29,[\"copy-\",[30,8]]]],[12],[1,\"Copy link\"],[13],[1,\"\\n              \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[13],[1,\"\\n            \"],[11,1],[24,0,\"me-3 text-danger cursor-pointer\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"deleteFile\"]],[30,8]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-xmark\"],[12],[13],[13],[1,\"\\n            \"],[10,1],[14,0,\"text-muted\"],[12],[1,[28,[30,0,[\"explodeFilename\"]],[[30,7]],null]],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n\"]],[]],[[[1,\"\\n          \"],[10,0],[14,0,\"my-1 d-flex align-items-center justify-content-start\"],[12],[1,\"\\n\\n\"],[41,[30,7,[\"cloudflare_stream\"]],[[[1,\"\\n\"],[41,[28,[37,14],[[28,[37,14],[[30,7,[\"cloudflare_stream\"]],\"result\"],null],\"thumbnail\"],null],[[[1,\"                \"],[10,0],[14,0,\"me-2\"],[12],[10,\"img\"],[15,\"src\",[29,[[28,[37,14],[[28,[37,14],[[30,7,[\"cloudflare_stream\"]],\"result\"],null],\"thumbnail\"],null]]]],[14,\"height\",\"31\"],[12],[13],[13],[1,\"\\n\"]],[]],null],[1,\"              \"],[10,3],[15,6,[29,[[30,7,[\"url\"]]]]],[15,0,[29,[\"me-2 btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"target\",\"new\"],[12],[1,\"View file \"],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[13],[1,\"\\n              \"],[11,\"button\"],[16,0,[29,[\"me-2 btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[24,\"target\",\"new\"],[24,4,\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"copyLink\"]],[28,[37,14],[[28,[37,14],[[28,[37,14],[[30,7,[\"cloudflare_stream\"]],\"result\"],null],\"playback\"],null],\"hls\"],null],[30,8]],null]],null],[12],[10,1],[15,1,[29,[\"copy-\",[30,8]]]],[12],[1,\"Copy link\"],[13],[1,\"\\n                \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[13],[1,\"\\n\\n\"]],[]],[[[1,\"\\n\"],[41,[30,7,[\"xs\",\"url\"]],[[[1,\"                \"],[10,0],[14,0,\"me-2\"],[12],[10,\"img\"],[15,\"src\",[29,[[30,7,[\"xs\",\"url\"]]]]],[14,\"height\",\"31\"],[12],[13],[13],[1,\"\\n\"]],[]],null],[1,\"              \"],[10,3],[15,6,[29,[[30,7,[\"url\"]]]]],[15,0,[29,[\"me-2 btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"target\",\"new\"],[12],[1,\"View file \"],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[13],[1,\"\\n              \"],[11,\"button\"],[16,0,[29,[\"me-2 btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[24,\"target\",\"new\"],[24,4,\"button\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"copyLink\"]],[30,7,[\"url\"]],[30,8]],null]],null],[12],[10,1],[15,1,[29,[\"copy-\",[30,8]]]],[12],[1,\"Copy link\"],[13],[1,\"\\n                \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[13],[1,\"\\n\\n\"]],[]]],[1,\"\\n            \"],[11,1],[24,0,\"me-3 text-danger cursor-pointer\"],[4,[38,5],[\"click\",[28,[37,6],[[30,0,[\"deleteFile\"]],[30,8]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-xmark\"],[12],[13],[13],[1,\"\\n            \"],[10,1],[14,0,\"text-muted\"],[12],[1,[28,[30,0,[\"explodeFilename\"]],[[30,7,[\"url\"]]],null]],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n\"]],[]]]],[7,8]],null],[1,\"    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,7],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[13],[1,\"\\n\"],[13]],[\"@module\",\"@type\",\"@id\",\"queue\",\"dropzone\",\"@object\",\"file\",\"index\"],false,[\"div\",\"i\",\"span\",\"if\",\"html-safe\",\"on\",\"fn\",\"concat\",\"let\",\"file-queue\",\"input\",\"file-dropzone\",\"each\",\"-track-array\",\"get\",\"a\",\"button\",\"img\"]]",
    "moduleName": "junction/components/input-fields/file-uploader.hbs",
    "isStrictMode": false
  });
  let InputFieldsFileUploaderComponent = _exports.default = (_class = class InputFieldsFileUploaderComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "isString", object => {
        return typeof object === 'string' ? true : false;
      });
      _defineProperty(this, "explodeFilename", filename => {
        var myarr = filename.split('/uploads/');
        return myarr[1];
      });
      _initializerDefineProperty(this, "fileQueue", _descriptor, this);
      _initializerDefineProperty(this, "store", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
    }
    get queue() {
      return this.fileQueue.findOrCreate(this.args.type.slug + '-' + this.args.module.input_slug + '-' + this.args.id);
    }
    triggerSelectFile(e) {
      document.querySelector('#' + e).click();
    }
    async uploadFile(file) {
      try {
        const response = await file.upload(_environment.default.TribeENV.API_URL + '/uploads.php');
        response.json().then(async data => {
          if (data.status == 'success') {
            let files = this.args.object[this.args.module.input_slug] ?? [];
            files.push(data.file);
            this.args.mutObjectModuleValue(this.args.module.input_slug, files);
            let obj = this.store.createRecord('file_record', {
              modules: {
                title: data.file.name,
                mime: data.file.mime,
                url: data.file.url,
                file: data.file,
                content_privacy: 'private'
              }
            });
            await obj.save();
          } else if (data.status == 'error') {
            alert(data.error_message);
          }
        });
      } catch (error) {
        file.state = 'aborted';
      }
    }
    deleteFile(index) {
      let files = this.args.object[this.args.module.input_slug] ?? [];
      if (index > -1) {
        files.splice(index, 1);
      }
      this.args.mutObjectModuleValue(this.args.module.input_slug, files);
    }
    copyLink(text, index) {
      document.querySelector('#copy-' + index).innerHTML = 'Copied!';
      navigator.clipboard.writeText(text);
      (0, _runloop.later)(this, () => {
        document.querySelector('#copy-' + index).innerHTML = 'Copy link';
      }, 2000);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "fileQueue", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "triggerSelectFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "triggerSelectFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "uploadFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "uploadFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteFile", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyLink", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyLink"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsFileUploaderComponent);
});
;define("junction/components/input-fields/hidden", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Input
    id={{concat @type.slug "-" @module.input_slug "-" @id}}
    @value={{mut (get @object @module.input_slug)}}
    @type={{@module.input_type}}
    autocomplete="off"
  />
  */
  {
    "id": "f4cgtRet",
    "block": "[[[8,[39,0],[[16,1,[28,[37,1],[[30,1,[\"slug\"]],\"-\",[30,2,[\"input_slug\"]],\"-\",[30,3]],null]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,2],[[28,[37,3],[[30,4],[30,2,[\"input_slug\"]]],null]],null],[30,2,[\"input_type\"]]]],null]],[\"@type\",\"@module\",\"@id\",\"@object\"],false,[\"input\",\"concat\",\"mut\",\"get\"]]",
    "moduleName": "junction/components/input-fields/hidden.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "hidden"));
});
;define("junction/components/input-fields/json", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    <Textarea
      id={{concat @type.slug "-" @module.input_slug "-" @id}}
      @value={{mut (get @object @module.input_slug)}}
      class="form-control"
      placeholder={{@module.input_placeholder}}
      autocomplete="off"
    />
    <div class="form-text text-end">{{@module.input_placeholder}}
      {{if
        @module.input_required
        (html-safe '<span class="text-danger">*</span>')
      }}</div>
  </div>
  */
  {
    "id": "4Go/L+LY",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n  \"],[8,[39,1],[[16,1,[28,[37,2],[[30,1,[\"slug\"]],\"-\",[30,2,[\"input_slug\"]],\"-\",[30,3]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,2,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\"],[[28,[37,3],[[28,[37,4],[[30,4],[30,2,[\"input_slug\"]]],null]],null]]],null],[1,\"  \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,2,[\"input_placeholder\"]]],[1,\"\\n    \"],[1,[52,[30,2,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"],[13]],[\"@type\",\"@module\",\"@id\",\"@object\"],false,[\"div\",\"textarea\",\"concat\",\"mut\",\"get\",\"if\",\"html-safe\"]]",
    "moduleName": "junction/components/input-fields/json.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "json"));
});
;define("junction/components/input-fields/multi/input", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="input-group">
  
    {{#if @isTextarea}}
  
      <Textarea
        @value={{mut
          (get (get this.object.currentObject.modules @module.input_slug) @index)
        }}
        name="{{@type.slug}}-{{@module.input_slug}}-{{@id}}[]"
        class="form-control"
        placeholder={{concat "[" @index "] " @module.input_placeholder}}
        autocomplete="off"
      />
  
    {{else}}
  
      <Input
        @value={{mut
          (get (get this.object.currentObject.modules @module.input_slug) @index)
        }}
        @type={{@module.input_type}}
        name="{{@type.slug}}-{{@module.input_slug}}-{{@id}}[]"
        class="form-control {{if (eq @module.input_type 'hidden') 'd-none'}}"
        placeholder={{concat "[" @index "] " @module.input_placeholder}}
        min={{@module.input_min}}
        max={{@module.input_max}}
        autocomplete="off"
      />
  
    {{/if}}
  
    {{#if (eq @index 0)}}
      <span
        class="input-group-text"
        {{on "click" (fn @addToMultiField @module.input_slug @index)}}
      ><i class="fa-solid fa-circle-plus"></i></span>
    {{/if}}
  
    {{#if (not-eq @index 0)}}
      <span
        class="input-group-text text-danger"
        {{on "click" (fn @removeFromMultiField @module.input_slug @index)}}
      ><i class="fa-solid fa-circle-xmark"></i></span>
    {{/if}}
  
  </div>
  */
  {
    "id": "EOcvu6vl",
    "block": "[[[10,0],[14,0,\"input-group\"],[12],[1,\"\\n\\n\"],[41,[30,1],[[[1,\"\\n    \"],[8,[39,2],[[16,3,[29,[[30,2,[\"slug\"]],\"-\",[30,3,[\"input_slug\"]],\"-\",[30,4],\"[]\"]]],[24,0,\"form-control\"],[16,\"placeholder\",[28,[37,3],[\"[\",[30,5],\"] \",[30,3,[\"input_placeholder\"]]],null]],[24,\"autocomplete\",\"off\"]],[[\"@value\"],[[28,[37,4],[[28,[37,5],[[28,[37,5],[[30,0,[\"object\",\"currentObject\",\"modules\"]],[30,3,[\"input_slug\"]]],null],[30,5]],null]],null]]],null],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,6],[[16,3,[29,[[30,2,[\"slug\"]],\"-\",[30,3,[\"input_slug\"]],\"-\",[30,4],\"[]\"]]],[16,0,[29,[\"form-control \",[52,[28,[37,7],[[30,3,[\"input_type\"]],\"hidden\"],null],\"d-none\"]]]],[16,\"placeholder\",[28,[37,3],[\"[\",[30,5],\"] \",[30,3,[\"input_placeholder\"]]],null]],[16,\"min\",[30,3,[\"input_min\"]]],[16,\"max\",[30,3,[\"input_max\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,4],[[28,[37,5],[[28,[37,5],[[30,0,[\"object\",\"currentObject\",\"modules\"]],[30,3,[\"input_slug\"]]],null],[30,5]],null]],null],[30,3,[\"input_type\"]]]],null],[1,\"\\n\\n\"]],[]]],[1,\"\\n\"],[41,[28,[37,7],[[30,5],0],null],[[[1,\"    \"],[11,1],[24,0,\"input-group-text\"],[4,[38,9],[\"click\",[28,[37,10],[[30,6],[30,3,[\"input_slug\"]],[30,5]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-plus\"],[12],[13],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,12],[[30,5],0],null],[[[1,\"    \"],[11,1],[24,0,\"input-group-text text-danger\"],[4,[38,9],[\"click\",[28,[37,10],[[30,7],[30,3,[\"input_slug\"]],[30,5]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-xmark\"],[12],[13],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[13]],[\"@isTextarea\",\"@type\",\"@module\",\"@id\",\"@index\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"textarea\",\"concat\",\"mut\",\"get\",\"input\",\"eq\",\"span\",\"on\",\"fn\",\"i\",\"not-eq\"]]",
    "moduleName": "junction/components/input-fields/multi/input.hbs",
    "isStrictMode": false
  });
  let InputFieldsMultiInput = _exports.default = (_class = class InputFieldsMultiInput extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "object", _descriptor, this);
    }
    get lengthMinusOne() {
      if (this.object.currentObject === null || this.object.currentObject.modules[this.args.module.input_slug] === undefined) return 0;else return this.object.currentObject.modules[this.args.module.input_slug].length - 1;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsMultiInput);
});
;define("junction/components/input-fields/number", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        min={{@module.input_min}}
        max={{@module.input_max}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "pOKxZN2c",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[16,\"min\",[30,1,[\"input_min\"]]],[16,\"max\",[30,1,[\"input_max\"]]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/number.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "number"));
});
;define("junction/components/input-fields/password", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    <Input
      id={{concat @type.slug "-" @module.input_slug "-" @id}}
      @value={{mut (get @object @module.input_slug)}}
      @type={{@module.input_type}}
      class="form-control"
      placeholder={{@module.input_placeholder}}
      autocomplete="off"
    />
    <div class="form-text text-end">{{@module.input_placeholder}}
      {{if
        @module.input_required
        (html-safe '<span class="text-danger">*</span>')
      }}</div>
  </div>
  */
  {
    "id": "Geuz5Q+e",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n  \"],[8,[39,1],[[16,1,[28,[37,2],[[30,1,[\"slug\"]],\"-\",[30,2,[\"input_slug\"]],\"-\",[30,3]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,2,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,3],[[28,[37,4],[[30,4],[30,2,[\"input_slug\"]]],null]],null],[30,2,[\"input_type\"]]]],null],[1,\"\\n  \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,2,[\"input_placeholder\"]]],[1,\"\\n    \"],[1,[52,[30,2,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"],[13]],[\"@type\",\"@module\",\"@id\",\"@object\"],false,[\"div\",\"input\",\"concat\",\"mut\",\"get\",\"if\",\"html-safe\"]]",
    "moduleName": "junction/components/input-fields/password.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "password"));
});
;define("junction/components/input-fields/select", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "@ember/array", "bootstrap", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _array, _bootstrap, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/array",0,"bootstrap",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if @multiEdit}}
    <div class="d-none" {{did-insert this.cleanVarsOnMultiModalOpen}}></div>
  {{else}}
    <div class="d-none" {{did-insert this.cleanVarsOnNewModalOpen}}></div>
  {{/if}}
  
  <div class="mb-3">
  
    {{#if @module.input_multiple}}
  
      <PowerSelectMultiple
        class="form-control"
        @selected={{this.selectedMultiOptions}}
        @searchEnabled={{true}}
        @searchField="title"
        @placeholder={{@module.input_placeholder}}
        @options={{this.options}}
        @dropdownClass="in-modal-dropdown"
        @onChange={{this.updateMultiValue}}
        as |opt|
      >
        {{get opt this.titleSlug}}
      </PowerSelectMultiple>
  
    {{else}}
  
      <PowerSelect
        class="form-control"
        @selected={{this.selectedOption}}
        @searchEnabled={{true}}
        @searchField="title"
        @allowClear={{true}}
        @placeholder={{@module.input_placeholder}}
        @options={{this.options}}
        @renderInPlace={{true}}
        @verticalPosition={{if
          (eq @module.input_slug "content_privacy")
          "above"
          "auto"
        }}
        @dropdownClass="in-modal-dropdown"
        @onChange={{this.updateValue}}
        as |opt|
      >
        {{get opt this.titleSlug}}
      </PowerSelect>
  
    {{/if}}
  
    <div class="form-text text-end">{{if
        @module.input_placeholder
        @module.input_placeholder
        (concat "Enter " @module.input_slug)
      }}
      {{if
        @module.input_required
        (html-safe '<span class="text-danger">*</span>')
      }}</div>
  
  </div>
  */
  {
    "id": "OUzabaaM",
    "block": "[[[41,[30,1],[[[1,\"  \"],[11,0],[24,0,\"d-none\"],[4,[38,2],[[30,0,[\"cleanVarsOnMultiModalOpen\"]]],null],[12],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[11,0],[24,0,\"d-none\"],[4,[38,2],[[30,0,[\"cleanVarsOnNewModalOpen\"]]],null],[12],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\\n\"],[41,[30,2,[\"input_multiple\"]],[[[1,\"\\n    \"],[8,[39,3],[[24,0,\"form-control\"]],[[\"@selected\",\"@searchEnabled\",\"@searchField\",\"@placeholder\",\"@options\",\"@dropdownClass\",\"@onChange\"],[[30,0,[\"selectedMultiOptions\"]],true,\"title\",[30,2,[\"input_placeholder\"]],[30,0,[\"options\"]],\"in-modal-dropdown\",[30,0,[\"updateMultiValue\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[28,[35,4],[[30,3],[30,0,[\"titleSlug\"]]],null]],[1,\"\\n    \"]],[3]]]]],[1,\"\\n\\n\"]],[]],[[[1,\"\\n    \"],[8,[39,5],[[24,0,\"form-control\"]],[[\"@selected\",\"@searchEnabled\",\"@searchField\",\"@allowClear\",\"@placeholder\",\"@options\",\"@renderInPlace\",\"@verticalPosition\",\"@dropdownClass\",\"@onChange\"],[[30,0,[\"selectedOption\"]],true,\"title\",true,[30,2,[\"input_placeholder\"]],[30,0,[\"options\"]],true,[52,[28,[37,6],[[30,2,[\"input_slug\"]],\"content_privacy\"],null],\"above\",\"auto\"],\"in-modal-dropdown\",[30,0,[\"updateValue\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[1,[28,[35,4],[[30,4],[30,0,[\"titleSlug\"]]],null]],[1,\"\\n    \"]],[4]]]]],[1,\"\\n\\n\"]],[]]],[1,\"\\n  \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[52,[30,2,[\"input_placeholder\"]],[30,2,[\"input_placeholder\"]],[28,[37,7],[\"Enter \",[30,2,[\"input_slug\"]]],null]]],[1,\"\\n    \"],[1,[52,[30,2,[\"input_required\"]],[28,[37,8],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\\n\"],[13]],[\"@multiEdit\",\"@module\",\"opt\",\"opt\"],false,[\"if\",\"div\",\"did-insert\",\"power-select-multiple\",\"get\",\"power-select\",\"eq\",\"concat\",\"html-safe\"]]",
    "moduleName": "junction/components/input-fields/select.hbs",
    "isStrictMode": false
  });
  let InputFieldsSelectComponent = _exports.default = (_class = class InputFieldsSelectComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "options", _descriptor3, this);
      _initializerDefineProperty(this, "inputOptions", _descriptor4, this);
      _initializerDefineProperty(this, "typeOptions", _descriptor5, this);
      _initializerDefineProperty(this, "selectedOption", _descriptor6, this);
      _initializerDefineProperty(this, "selectedMultiOptions", _descriptor7, this);
      _initializerDefineProperty(this, "moduleisAlsoAType", _descriptor8, this);
      _initializerDefineProperty(this, "selectedMultiOptionSlugs", _descriptor9, this);
      _initializerDefineProperty(this, "titleSlug", _descriptor0, this);
    }
    async cleanVarsOnNewModalOpen() {
      const myModalNew = document.getElementById('editObjectModal');
      await myModalNew.addEventListener('show.bs.modal', async event => {
        this.selectedOption = null;
        this.selectedMultiOptions = (0, _array.A)([]);
        this.selectedOption = this.selectedOption;
        this.selectedMultiOptions = this.selectedMultiOptions;
        await this.isModuleAlsoAType();
      });
    }
    async cleanVarsOnMultiModalOpen() {
      const myModalMulti = document.getElementById('editObjectModal-' + this.args.type.slug + '-multi');
      await myModalMulti.addEventListener('show.bs.modal', async event => {
        this.selectedOption = null;
        this.selectedMultiOptions = (0, _array.A)([]);
        this.selectedOption = this.selectedOption;
        this.selectedMultiOptions = this.selectedMultiOptions;
        await this.isModuleAlsoAType();
      });
    }
    updateValue(e) {
      if (e === null) {
        this.selectedOption = e;
        this.args.mutObjectModuleValue(this.args.module.input_slug, null, false);
        return;
      }
      this.selectedOption = e;
      this.args.mutObjectModuleValue(this.args.module.input_slug, e.slug, false);
    }
    updateMultiValue(e) {
      this.selectedMultiOptions = (0, _array.A)([]);
      this.selectedMultiOptionSlugs = (0, _array.A)([]);
      this.selectedMultiOptions = this.selectedMultiOptions;
      e.forEach(f => {
        this.options.forEach(element => {
          if (element.slug == f.slug) {
            this.selectedMultiOptions.push(f);
          }
        });
        if (this.selectedMultiOptionSlugs.indexOf(f.slug) === -1) this.selectedMultiOptionSlugs.push(f.slug);
      });
      this.selectedMultiOptions = this.selectedMultiOptions;
      this.selectedMultiOptionSlugs = this.selectedMultiOptionSlugs;
      this.args.mutObjectModuleValue(this.args.module.input_slug, this.selectedMultiOptionSlugs, false);
    }
    isModuleAlsoATypeModal() {
      const myModalNew = document.getElementById('editObjectModal');
      myModalNew.addEventListener('show.bs.modal', async event => {
        await this.isModuleAlsoAType();
      });
    }
    async isModuleAlsoAType() {
      if (this.types.json.modules[this.args.module.input_slug] !== undefined || this.types.json.modules[this.args.module.linked_type] !== undefined) {
        if (this.types.json.modules[this.args.module.input_slug] !== undefined) var linked_type = this.args.module.input_slug;else if (this.types.json.modules[this.args.module.linked_type] !== undefined) var linked_type = this.args.module.linked_type;
        this.types.json.modules[linked_type].modules.forEach(async m => {
          if (m.input_primary !== undefined && m.input_primary !== false) this.titleSlug = await m.input_slug;
        });
        this.typeOptions = await this.store.peekAll(linked_type);
        this.options = [];
        this.typeOptions.forEach(element => {
          this.options.push(element.modules);
          if (typeof this.args.object[this.args.module.input_slug] !== 'undefined') {
            //selected option
            if (typeof this.args.object[this.args.module.input_slug] === 'string' && element.modules.slug == this.args.object[this.args.module.input_slug]) {
              this.selectedOption = element.modules;
              this.selectedMultiOptions[0] = element.modules;
            }

            //part of selected multi options
            if (typeof this.args.object[this.args.module.input_slug] !== 'string' && inArray(element.modules.slug, this.args.object[this.args.module.input_slug])) {
              this.selectedOption = element.modules;
              this.selectedMultiOptions.push(element.modules);
            }
          }
        });
      } else if (this.inputOptions !== null) {
        this.options = [];
        this.inputOptions.forEach(element => {
          this.options.push(element);
          if (typeof this.args.object[this.args.module.input_slug] !== 'undefined') {
            //selected option
            if (typeof this.args.object[this.args.module.input_slug] === 'string' && element.slug == this.args.object[this.args.module.input_slug]) {
              this.selectedOption = element;
              this.selectedMultiOptions[0] = element;
            }

            //part of selected multi options
            if (typeof this.args.object[this.args.module.input_slug] !== 'string' && inArray(element.slug, this.args.object[this.args.module.input_slug])) {
              this.selectedOption = element;
              this.selectedMultiOptions.push(element);
            }
          }
        });
      }
      this.options = this.options;
      this.selectedMultiOptions = this.selectedMultiOptions;
      function inArray(needle, haystack) {
        if (haystack !== null) {
          var length = haystack.length;
          for (var i = 0; i < length; i++) {
            if (haystack[i] == needle) return true;
          }
        }
        return false;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "options", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "inputOptions", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.module.input_options ?? null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "typeOptions", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "selectedOption", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "selectedMultiOptions", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "moduleisAlsoAType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "selectedMultiOptionSlugs", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "titleSlug", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'title';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "cleanVarsOnNewModalOpen", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cleanVarsOnNewModalOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cleanVarsOnMultiModalOpen", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cleanVarsOnMultiModalOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateValue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateMultiValue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateMultiValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isModuleAlsoATypeModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "isModuleAlsoATypeModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isModuleAlsoAType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "isModuleAlsoAType"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsSelectComponent);
});
;define("junction/components/input-fields/storylang-stack", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.object.currentObject}}
  <div class="mb-3">
    <div class="card px-0">
  
      <div class="card-header border-0 text-uppercase">
        <i class="fa-solid fa-file-code"></i>
        <span class="ms-1">{{if
            @module.input_placeholder
            @module.input_placeholder
            "Storylang Stack"
          }}
          {{if
            @module.input_required
            (html-safe '<span class="text-danger">*</span>')
          }}</span>
      </div>
  
      <div
        class="card-body px-3 mx-0 overflow-y-scroll overflow-x-hidden"
        style="height:40vh;"
      >
        <div class="my-3">
          <Textarea
            @value={{this.object.currentObject.modules.storylang_stack.platformDescription}}
            placeholder="Describe your platform for AI to generate your initial codebase architecture"
            class="form-control border border-1 border-primary"
            rows="6"
            {{on "change" this.updateObject}}
          />
            <button
              class="btn btn-sm btn-primary mt-2" type="button" {{on "click" this.getAI}}
            >Generate platform map using AI</button>
        </div>
      </div>
  
      <div class="card-footer border-0">
      </div>
  
    </div>
  
    <div class="form-text text-end">{{if
        @module.input_placeholder
        @module.input_placeholder
        (concat "Enter " @module.input_slug)
      }}</div>
  </div>
  {{/if}}
  */
  {
    "id": "tdy0rUPM",
    "block": "[[[41,[30,0,[\"object\",\"currentObject\"]],[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"card px-0\"],[12],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-header border-0 text-uppercase\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-file-code\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"ms-1\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],\"Storylang Stack\"]],[1,\"\\n        \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,4],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-body px-3 mx-0 overflow-y-scroll overflow-x-hidden\"],[14,5,\"height:40vh;\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n        \"],[8,[39,5],[[24,\"placeholder\",\"Describe your platform for AI to generate your initial codebase architecture\"],[24,0,\"form-control border border-1 border-primary\"],[24,\"rows\",\"6\"],[4,[38,6],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\"],[[30,0,[\"object\",\"currentObject\",\"modules\",\"storylang_stack\",\"platformDescription\"]]]],null],[1,\"          \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary mt-2\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"getAI\"]]],null],[12],[1,\"Generate platform map using AI\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-footer border-0\"],[12],[1,\"\\n    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,8],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]],null]],[\"@module\"],false,[\"if\",\"div\",\"i\",\"span\",\"html-safe\",\"textarea\",\"on\",\"button\",\"concat\"]]",
    "moduleName": "junction/components/input-fields/storylang-stack.hbs",
    "isStrictMode": false
  });
  let InputFieldsStorylangStack = _exports.default = (_class = class InputFieldsStorylangStack extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "object", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "types", _descriptor3, this);
      _initializerDefineProperty(this, "type", _descriptor4, this);
    }
    updateObject() {
      this.args.mutObjectModuleValue(this.args.module.input_slug, this.obj);
    }
    get obj() {
      if (this.object.currentObject && this.object.currentObject.modules && this.object.currentObject.modules.storylang_stack) {
        return {
          platformDescription: this.object.currentObject.modules.storylang_stack.platformDescription
        };
      } else {
        return {
          platformDescription: this.types.json.modules.webapp.project_description ?? ''
        };
      }
    }
    async getAI() {
      if (this.object.currentObject.modules.storylang_stack.platformDescription != '') {
        console.log(this.object.currentObject.modules.storylang_stack.platformDescription);
        console.log(this.types.simplifiedJson);
        this.type.loadingSearchResults = true;
        let response = await fetch('https://tribe.junction.express/custom/anthropic/get-storylang.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            platform_description: this.object.currentObject.modules.storylang_stack.platformDescription,
            simplified_types: this.types.simplifiedJson
          })
        });
        let data = await response.json();
        if (data !== undefined && data && data.json) {
          let data_json = data.json;
          console.log(data_json);
        }
        this.type.loadingSearchResults = false;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateObject", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateObject"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getAI", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getAI"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsStorylangStack);
});
;define("junction/components/input-fields/tel", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        {{#if field}}
          <InputFields::Multi::Input
            @mutObjectModuleValue={{@mutObjectModuleValue}}
            @type={{@type}}
            @module={{@module}}
            @id={{@id}}
            @object={{@object}}
            @addToMultiField={{@addToMultiField}}
            @removeFromMultiField={{@removeFromMultiField}}
            @index={{index}}
          />
        {{/if}}
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "784q6HAv",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[41,[30,3],[[[1,\"        \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[]],null]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/tel.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "tel"));
});
;define("junction/components/input-fields/text", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3 {{if (eq @module.input_type 'hidden') 'd-none'}}">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
  
      <div class="form-text text-end">
        {{if
          @module.input_placeholder
          @module.input_placeholder
          (concat "Enter " @module.input_slug)
        }}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}
      </div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        class="form-control {{if (eq @module.input_type 'hidden') 'd-none'}}"
        placeholder={{@module.input_placeholder}}
        min={{@module.input_min}}
        max={{@module.input_max}}
        inputmode="{{this.inputMode @module.input_type}}"
        autocomplete="off"
        @value={{mut (get @object @module.input_slug)}}
        @type={{this.inputType @module.input_type}}
      />
  
      <div
        class="form-text text-end
          {{if
            (eq @module.input_type 'hidden')
            'd-none'
            'd-flex w-100 align-items-center justify-content-end'
          }}"
      >
        {{#if @module.input_primary}}
          {{#unless this.object.viaPublicForm}}
            {{#if
              (not (and (get @object @module.input_slug) (not-eq @id "new")))
            }}
              <div
                {{on "click" this.generateTitle}}
                role="button"
                class="text-decoration-underline text-end mt-0 cursor-pointer"
              >Generate text</div>
              <div class="mx-1"> or </div>
            {{/if}}
          {{/unless}}
        {{/if}}
  
        <div>
          {{if
            @module.input_placeholder
            @module.input_placeholder
            (concat "Enter " @module.input_slug)
          }}
          {{if
            @module.input_required
            (html-safe '<span class="text-danger">*</span>')
          }}
        </div>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "zOpnQMuj",
    "block": "[[[10,0],[15,0,[29,[\"mb-3 \",[52,[28,[37,2],[[30,1,[\"input_type\"]],\"hidden\"],null],\"d-none\"]]]],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,4],[[28,[37,4],[[28,[37,5],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,6],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,6],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"\\n      \"],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,7],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,8],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,9],[[16,1,[28,[37,7],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[16,0,[29,[\"form-control \",[52,[28,[37,2],[[30,1,[\"input_type\"]],\"hidden\"],null],\"d-none\"]]]],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[16,\"min\",[30,1,[\"input_min\"]]],[16,\"max\",[30,1,[\"input_max\"]]],[16,\"inputmode\",[29,[[28,[30,0,[\"inputMode\"]],[[30,1,[\"input_type\"]]],null]]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,10],[[28,[37,5],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[28,[30,0,[\"inputType\"]],[[30,1,[\"input_type\"]]],null]]],null],[1,\"\\n\\n    \"],[10,0],[15,0,[29,[\"form-text text-end\\n        \",[52,[28,[37,2],[[30,1,[\"input_type\"]],\"hidden\"],null],\"d-none\",\"d-flex w-100 align-items-center justify-content-end\"]]]],[12],[1,\"\\n\"],[41,[30,1,[\"input_primary\"]],[[[41,[51,[30,0,[\"object\",\"viaPublicForm\"]]],[[[41,[28,[37,12],[[28,[37,13],[[28,[37,5],[[30,2],[30,1,[\"input_slug\"]]],null],[28,[37,14],[[30,7],\"new\"],null]],null]],null],[[[1,\"            \"],[11,0],[24,\"role\",\"button\"],[24,0,\"text-decoration-underline text-end mt-0 cursor-pointer\"],[4,[38,15],[\"click\",[30,0,[\"generateTitle\"]]],null],[12],[1,\"Generate text\"],[13],[1,\"\\n            \"],[10,0],[14,0,\"mx-1\"],[12],[1,\" or \"],[13],[1,\"\\n\"]],[]],null]],[]],null]],[]],null],[1,\"\\n      \"],[10,0],[12],[1,\"\\n        \"],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,7],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[1,\"\\n        \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,8],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"eq\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"concat\",\"html-safe\",\"input\",\"mut\",\"unless\",\"not\",\"and\",\"not-eq\",\"on\"]]",
    "moduleName": "junction/components/input-fields/text.hbs",
    "isStrictMode": false
  });
  let InputFieldsTextComponent = _exports.default = (_class = class InputFieldsTextComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "object", _descriptor, this);
      _defineProperty(this, "inputType", type => {
        if (type === 'number') {
          return 'text';
        }
        return type;
      });
      _defineProperty(this, "inputMode", type => {
        switch (type) {
          case 'password':
            type = 'text';
            break;
          case 'number':
            type = 'numeric';
            break;
          default:
            break;
        }
        return type;
      });
    }
    async generateTitle() {
      let Passphrase = window.Passphrase;
      let passphrase = await Passphrase.generate(36);
      this.args.mutObjectModuleValue(this.args.module.input_slug, passphrase);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "generateTitle", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "generateTitle"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsTextComponent);
});
;define("junction/components/input-fields/textarea", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        <InputFields::Multi::Input
          @isTextarea={{true}}
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{index}}
        />
      {{else}}
        <InputFields::Multi::Input
          @isTextarea={{true}}
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{if
          @module.input_placeholder
          @module.input_placeholder
          (concat "Enter " @module.input_slug)
        }}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Textarea
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{if
          @module.input_placeholder
          @module.input_placeholder
          (concat "Enter " @module.input_slug)
        }}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "UVlvGL4Q",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@isTextarea\",\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[true,[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@isTextarea\",\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[true,[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,6],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,7],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,8],[[16,1,[28,[37,6],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]]],null],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,6],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,7],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"concat\",\"html-safe\",\"textarea\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/textarea.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "textarea"));
});
;define("junction/components/input-fields/typeout", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
  	{{#if this.disabled}}
  		<Textarea disabled="disabled" @value={{get @object @module.input_slug}} class="form-control" placeholder={{@module.input_placeholder}} />
  	{{else}}
  		<Textarea id={{concat @type.slug "-" @module.input_slug "-" @id}} @value={{get @object @module.input_slug}} class="form-control" placeholder={{@module.input_placeholder}} autocomplete="off" />
  	{{/if}}
  
  	<div class="form-text text-end d-flex align-items-center justify-content-end">
  		<span class="me-2">{{if @module.input_placeholder @module.input_placeholder (concat "Enter " @module.input_slug)}} {{if @module.input_required (html-safe "<span class=\"text-danger\">*</span>")}}</span>
  
  		{{#if this.disabled}}
  			<button class="btn btn-sm btn-outline-primary" type="button" {{on 'click' this.initTypeout}}>Edit (Typeout)</button>
  		{{else}}
  			<button class="btn btn-sm btn-secondary" type="button" {{on 'click' this.saveTypeout}}>Save changes</button>
  		{{/if}}
  	</div>
  </div>
  
  */
  {
    "id": "4UHCWAhz",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,0,[\"disabled\"]],[[[1,\"\\t\\t\"],[8,[39,2],[[24,\"disabled\",\"disabled\"],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]]],[[\"@value\"],[[28,[37,3],[[30,2],[30,1,[\"input_slug\"]]],null]]],null],[1,\"\"]],[]],[[[1,\"\\t\\t\"],[8,[39,2],[[16,1,[28,[37,4],[[30,3,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,4]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\"],[[28,[37,3],[[30,2],[30,1,[\"input_slug\"]]],null]]],null],[1,\"\"]],[]]],[1,\"\\t\"],[10,0],[14,0,\"form-text text-end d-flex align-items-center justify-content-end\"],[12],[1,\"\\n\\t\\t\"],[10,1],[14,0,\"me-2\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,4],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[1,\" \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\\n\"],[41,[30,0,[\"disabled\"]],[[[1,\"\\t\\t\\t\"],[11,\"button\"],[24,0,\"btn btn-sm btn-outline-primary\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"initTypeout\"]]],null],[12],[1,\"Edit (Typeout)\"],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\\t\\t\"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"saveTypeout\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n\"]],[]]],[1,\"\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@module\",\"@object\",\"@type\",\"@id\"],false,[\"div\",\"if\",\"textarea\",\"get\",\"concat\",\"span\",\"html-safe\",\"button\",\"on\"]]",
    "moduleName": "junction/components/input-fields/typeout.hbs",
    "isStrictMode": false
  });
  let InputFieldsTypeoutComponent = _exports.default = (_class = class InputFieldsTypeoutComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "t", _descriptor, this);
      _initializerDefineProperty(this, "disabled", _descriptor2, this);
    }
    initTypeout() {
      this.disabled = false;
      this.t = null;
      (0, _runloop.later)(this, () => {
        this.t = tinymce.init({
          selector: 'textarea#' + this.args.type.slug + '-' + this.args.module.input_slug + '-' + this.args.id,
          plugins: 'advlist link image lists',
          license_key: 'gpl'
        });
        this.t = this.t;
      }, 300);
    }
    saveTypeout() {
      this.args.mutObjectModuleValue(this.args.module.input_slug, tinymce.get(this.args.type.slug + '-' + this.args.module.input_slug + '-' + this.args.id).getContent());
      (0, _runloop.later)(this, () => {
        this.disabled = true;
      }, 300);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "t", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "disabled", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initTypeout", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initTypeout"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveTypeout", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveTypeout"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsTypeoutComponent);
});
;define("junction/components/input-fields/url", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        {{#if field}}
          <InputFields::Multi::Input
            @mutObjectModuleValue={{@mutObjectModuleValue}}
            @type={{@type}}
            @module={{@module}}
            @id={{@id}}
            @object={{@object}}
            @addToMultiField={{@addToMultiField}}
            @removeFromMultiField={{@removeFromMultiField}}
            @index={{index}}
          />
        {{/if}}
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type={{@type}}
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "Ud+X/LK3",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[41,[30,3],[[[1,\"        \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],[30,4]]],null],[1,\"\\n\"]],[]],null]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],[30,6],[30,1],[30,7],[30,2],[30,8],[30,9],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,6,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,7]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@type\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/url.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "url"));
});
;define("junction/components/input-fields/uuid-v4", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "uuid", "@ember/template-factory"], function (_exports, _component, _component2, _object, _uuid, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"uuid",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        {{#if field}}
          <InputFields::Multi::Input
            @mutObjectModuleValue={{@mutObjectModuleValue}}
            @type="text"
            @module={{@module}}
            @id={{@id}}
            @object={{@object}}
            @addToMultiField={{@addToMultiField}}
            @removeFromMultiField={{@removeFromMultiField}}
            @index={{index}}
          />
        {{/if}}
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type="text"
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
  
      <div
        class="form-text text-end d-flex w-100 align-items-center justify-content-end"
      >
        <div
          {{on "click" this.generateUUIDv4}}
          role="button"
          class="text-decoration-underline text-end mt-0 cursor-pointer"
        >Generate</div>
        <div class="mx-1"> or </div>
        <div>{{@module.input_placeholder}}</div>
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "wM88cU8P",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[41,[30,3],[[[1,\"        \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],\"text\",[30,1],[30,6],[30,2],[30,7],[30,8],[30,4]]],null],[1,\"\\n\"]],[]],null]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],\"text\",[30,1],[30,6],[30,2],[30,7],[30,8],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,9,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,6]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n\\n    \"],[10,0],[14,0,\"form-text text-end d-flex w-100 align-items-center justify-content-end\"],[12],[1,\"\\n      \"],[11,0],[24,\"role\",\"button\"],[24,0,\"text-decoration-underline text-end mt-0 cursor-pointer\"],[4,[38,10],[\"click\",[30,0,[\"generateUUIDv4\"]]],null],[12],[1,\"Generate\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mx-1\"],[12],[1,\" or \"],[13],[1,\"\\n      \"],[10,0],[12],[1,[30,1,[\"input_placeholder\"]]],[13],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\",\"@type\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\",\"on\"]]",
    "moduleName": "junction/components/input-fields/uuid-v4.hbs",
    "isStrictMode": false
  });
  let InputFieldsUuidV4 = _exports.default = (_class = class InputFieldsUuidV4 extends _component2.default {
    generateUUIDv4() {
      this.args.mutObjectModuleValue(this.args.module.input_slug, (0, _uuid.v4)());
    }
  }, _applyDecoratedDescriptor(_class.prototype, "generateUUIDv4", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "generateUUIDv4"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsUuidV4);
});
;define("junction/components/input-fields/uuidv4", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mb-3">
    {{#if @module.input_multiple}}
      {{#each (get @object @module.input_slug) as |field index|}}
        {{#if field}}
          <InputFields::Multi::Input
            @mutObjectModuleValue={{@mutObjectModuleValue}}
            @type="text"
            @module={{@module}}
            @id={{@id}}
            @object={{@object}}
            @addToMultiField={{@addToMultiField}}
            @removeFromMultiField={{@removeFromMultiField}}
            @index={{index}}
          />
        {{/if}}
      {{else}}
        <InputFields::Multi::Input
          @mutObjectModuleValue={{@mutObjectModuleValue}}
          @type="text"
          @module={{@module}}
          @id={{@id}}
          @object={{@object}}
          @addToMultiField={{@addToMultiField}}
          @removeFromMultiField={{@removeFromMultiField}}
          @index={{0}}
        />
      {{/each}}
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{else}}
      <Input
        id={{concat @type.slug "-" @module.input_slug "-" @id}}
        @value={{mut (get @object @module.input_slug)}}
        @type={{@module.input_type}}
        class="form-control"
        placeholder={{@module.input_placeholder}}
        autocomplete="off"
      />
      <div class="form-text text-end">{{@module.input_placeholder}}
        {{if
          @module.input_required
          (html-safe '<span class="text-danger">*</span>')
        }}</div>
    {{/if}}
  </div>
  */
  {
    "id": "oFkLkrZn",
    "block": "[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n\"],[41,[30,1,[\"input_multiple\"]],[[[42,[28,[37,3],[[28,[37,3],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null]],null],null,[[[41,[30,3],[[[1,\"        \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],\"text\",[30,1],[30,6],[30,2],[30,7],[30,8],[30,4]]],null],[1,\"\\n\"]],[]],null]],[3,4]],[[[1,\"      \"],[8,[39,5],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@index\"],[[30,5],\"text\",[30,1],[30,6],[30,2],[30,7],[30,8],0]],null],[1,\"\\n\"]],[]]],[1,\"    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,7],[[16,1,[28,[37,8],[[30,9,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,6]],null]],[24,0,\"form-control\"],[16,\"placeholder\",[30,1,[\"input_placeholder\"]]],[24,\"autocomplete\",\"off\"]],[[\"@value\",\"@type\"],[[28,[37,9],[[28,[37,4],[[30,2],[30,1,[\"input_slug\"]]],null]],null],[30,1,[\"input_type\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[30,1,[\"input_placeholder\"]]],[1,\"\\n      \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,6],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n\"]],[]]],[13]],[\"@module\",\"@object\",\"field\",\"index\",\"@mutObjectModuleValue\",\"@id\",\"@addToMultiField\",\"@removeFromMultiField\",\"@type\"],false,[\"div\",\"if\",\"each\",\"-track-array\",\"get\",\"input-fields/multi/input\",\"html-safe\",\"input\",\"concat\",\"mut\"]]",
    "moduleName": "junction/components/input-fields/uuidv4.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "uuidv4"));
});
;define("junction/components/input-fields/visual-guide", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.object.currentObject}}
  <div class="mb-3">
    <div class="card px-0">
      <div class="card-header border-0 text-uppercase">
        <i class="fa-solid fa-file-code"></i>
        <span class="ms-1">{{if
            @module.input_placeholder
            @module.input_placeholder
            "Visual Guide"
          }}
          {{if
            @module.input_required
            (html-safe '<span class="text-danger">*</span>')
          }}</span>
      </div>
  
      <div
        class="card-body px-3 mx-0 overflow-y-scroll overflow-x-hidden"
        style="height:40vh;"
      >
        <div class="row">
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-primary"
              }}
              @value={{this.obj.colorPrimary}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Primary Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-secondary"
              }}
              @value={{this.obj.colorSecondary}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Secondary Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-info"
              }}
              @value={{this.obj.colorInfo}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Info Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-success"
              }}
              @value={{this.obj.colorSuccess}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Success Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-warning"
              }}
              @value={{this.obj.colorWarning}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Warning Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-danger"
              }}
              @value={{this.obj.colorDanger}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Danger Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-dark"
              }}
              @value={{this.obj.colorDark}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Dark Colour</div>
          </div>
          <div class="col-6 my-3">
            <Input
              id={{concat
                @type.slug
                "-"
                @module.input_slug
                "-"
                @id
                "-color-light"
              }}
              @value={{this.obj.colorLight}}
              @type="color"
              class="form-control"
              placeholder=""
              autocomplete="off"
              {{on "change" this.updateObject}}
            />
            <div class="form-text text-end">Light Colour</div>
          </div>
        </div>
  
        {{!-- Font Input Fields Start --}}
        <div class="my-3">
          <Input
            id={{concat
              @type.slug
              "-"
              @module.input_slug
              "-"
              @id
              "-import-font-url1"
            }}
            @value={{this.obj.importFontURL1}}
            @type="text"
            class="form-control"
            placeholder="Enter Font URL"
            autocomplete="off"
            {{on "change" this.updateObject}}
          />
          <div class="form-text text-end">Import Font URL 1</div>
        </div>
  
        <div class="my-3">
          <Input
            id={{concat
              @type.slug
              "-"
              @module.input_slug
              "-"
              @id
              "-import-font-url2"
            }}
            @value={{this.obj.importFontURL2}}
            @type="text"
            class="form-control"
            placeholder="Enter Font URL"
            autocomplete="off"
            {{on "change" this.updateObject}}
          />
          <div class="form-text text-end">Import Font URL 2</div>
        </div>
  
        <div class="my-3">
          <Input
            id={{concat
              @type.slug
              "-"
              @module.input_slug
              "-"
              @id
              "-font-family1"
            }}
            @value={{this.obj.fontFamily1}}
            @type="text"
            class="form-control"
            placeholder="Enter Font Family"
            autocomplete="off"
            {{on "change" this.updateObject}}
          />
          <div class="form-text text-end">Font Family 1</div>
        </div>
  
        <div class="my-3">
          <Input
            id={{concat
              @type.slug
              "-"
              @module.input_slug
              "-"
              @id
              "-font-family2"
            }}
            @value={{this.obj.fontFamily2}}
            @type="text"
            class="form-control"
            placeholder="Enter Font Family"
            autocomplete="off"
            {{on "change" this.updateObject}}
          />
          <div class="form-text text-end">Font Family 2</div>
        </div>
        {{!-- Font Input Fields End --}}
  
        <div class="my-3 d-flex align-items-center justify-content-start">
          <div class="mx-n1"><XToggle
              @value={{this.object.currentObject.modules.visual_guide.isRounded}}
              @onToggle={{fn
                (mut this.object.currentObject.modules.visual_guide.isRounded)
              }}
              @theme="ios"
              @variant={{this.colormodes.mode}}
            /></div>
          <div class="form-text text-end ms-4">Is rounded?</div>
        </div>
  
        <div class="mt-5 position-relative">
          <Textarea
            readonly
            @value={{this.scss}}
            class="form-control border border-1 border-primary"
            rows="6"
            id="scss-textarea"
          />
          <button
            type="button"
            class="btn btn-sm btn-primary position-absolute"
            style="top: 10px; right: 10px;"
            {{on "click" this.copySCSS}}
          >
            <i class="fa-solid fa-copy"></i>
            Copy
          </button>
          <div class="form-text text-end">app.scss</div>
        </div>
      </div>
  
      <div class="card-footer border-0">
  
      </div>
  
    </div>
  
    <div class="form-text text-end">{{if
        @module.input_placeholder
        @module.input_placeholder
        (concat "Enter " @module.input_slug)
      }}</div>
  </div>
  {{/if}}
  */
  {
    "id": "sW3yb95i",
    "block": "[[[41,[30,0,[\"object\",\"currentObject\"]],[[[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"card px-0\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"card-header border-0 text-uppercase\"],[12],[1,\"\\n      \"],[10,\"i\"],[14,0,\"fa-solid fa-file-code\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"ms-1\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],\"Visual Guide\"]],[1,\"\\n        \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,4],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-body px-3 mx-0 overflow-y-scroll overflow-x-hidden\"],[14,5,\"height:40vh;\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-primary\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorPrimary\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Primary Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-secondary\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorSecondary\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Secondary Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-info\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorInfo\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Info Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-success\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorSuccess\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Success Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-warning\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorWarning\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Warning Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-danger\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorDanger\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Danger Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-dark\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorDark\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Dark Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-6 my-3\"],[12],[1,\"\\n          \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-color-light\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"colorLight\"]],\"color\"]],null],[1,\"\\n          \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Light Colour\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n        \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-import-font-url1\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"Enter Font URL\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"importFontURL1\"]],\"text\"]],null],[1,\"\\n        \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Import Font URL 1\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n        \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-import-font-url2\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"Enter Font URL\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"importFontURL2\"]],\"text\"]],null],[1,\"\\n        \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Import Font URL 2\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n        \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-font-family1\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"Enter Font Family\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"fontFamily1\"]],\"text\"]],null],[1,\"\\n        \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Font Family 1\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n        \"],[8,[39,5],[[16,1,[28,[37,6],[[30,2,[\"slug\"]],\"-\",[30,1,[\"input_slug\"]],\"-\",[30,3],\"-font-family2\"],null]],[24,0,\"form-control\"],[24,\"placeholder\",\"Enter Font Family\"],[24,\"autocomplete\",\"off\"],[4,[38,7],[\"change\",[30,0,[\"updateObject\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"obj\",\"fontFamily2\"]],\"text\"]],null],[1,\"\\n        \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"Font Family 2\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"],[1,\"\\n      \"],[10,0],[14,0,\"my-3 d-flex align-items-center justify-content-start\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"mx-n1\"],[12],[8,[39,8],null,[[\"@value\",\"@onToggle\",\"@theme\",\"@variant\"],[[30,0,[\"object\",\"currentObject\",\"modules\",\"visual_guide\",\"isRounded\"]],[28,[37,9],[[28,[37,10],[[30,0,[\"object\",\"currentObject\",\"modules\",\"visual_guide\",\"isRounded\"]]],null]],null],\"ios\",[30,0,[\"colormodes\",\"mode\"]]]],null],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-text text-end ms-4\"],[12],[1,\"Is rounded?\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"mt-5 position-relative\"],[12],[1,\"\\n        \"],[8,[39,11],[[24,\"readonly\",\"\"],[24,0,\"form-control border border-1 border-primary\"],[24,\"rows\",\"6\"],[24,1,\"scss-textarea\"]],[[\"@value\"],[[30,0,[\"scss\"]]]],null],[1,\"        \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary position-absolute\"],[24,5,\"top: 10px; right: 10px;\"],[24,4,\"button\"],[4,[38,7],[\"click\",[30,0,[\"copySCSS\"]]],null],[12],[1,\"\\n          \"],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\"\\n          Copy\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,\"app.scss\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"card-footer border-0\"],[12],[1,\"\\n\\n    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"form-text text-end\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[28,[37,6],[\"Enter \",[30,1,[\"input_slug\"]]],null]]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]],null]],[\"@module\",\"@type\",\"@id\"],false,[\"if\",\"div\",\"i\",\"span\",\"html-safe\",\"input\",\"concat\",\"on\",\"x-toggle\",\"fn\",\"mut\",\"textarea\",\"button\"]]",
    "moduleName": "junction/components/input-fields/visual-guide.hbs",
    "isStrictMode": false
  });
  let InputFieldsVisualGuide = _exports.default = (_class = class InputFieldsVisualGuide extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "object", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
    }
    updateObject() {
      this.args.mutObjectModuleValue(this.args.module.input_slug, this.obj);
    }
    copySCSS() {
      // Create a temporary textarea to handle the copying
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = this.scss;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      try {
        // Execute copy command
        document.execCommand('copy');
        // Show a temporary success visual feedback (could be improved with a toast/notification)
        const copyButton = event.currentTarget;
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyButton.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }

      // Clean up
      document.body.removeChild(tempTextArea);
    }
    get obj() {
      if (this.object.currentObject && this.object.currentObject.modules && this.object.currentObject.modules.visual_guide) {
        return {
          colorPrimary: this.object.currentObject.modules.visual_guide.colorPrimary,
          colorSecondary: this.object.currentObject.modules.visual_guide.colorSecondary,
          colorSuccess: this.object.currentObject.modules.visual_guide.colorSuccess,
          colorInfo: this.object.currentObject.modules.visual_guide.colorInfo,
          colorWarning: this.object.currentObject.modules.visual_guide.colorWarning,
          colorDanger: this.object.currentObject.modules.visual_guide.colorDanger,
          colorDark: this.object.currentObject.modules.visual_guide.colorDark,
          colorLight: this.object.currentObject.modules.visual_guide.colorLight,
          isRounded: this.object.currentObject.modules.visual_guide.isRounded,
          importFontURL1: this.object.currentObject.modules.visual_guide.importFontURL1,
          importFontURL2: this.object.currentObject.modules.visual_guide.importFontURL2,
          fontFamily1: this.object.currentObject.modules.visual_guide.fontFamily1,
          fontFamily2: this.object.currentObject.modules.visual_guide.fontFamily2
        };
      } else {
        return {
          colorPrimary: '#000000',
          colorSecondary: '#cccccc',
          colorSuccess: '#00ff00',
          colorInfo: '#0000ff',
          colorWarning: '#ffff00',
          colorDanger: '#ff0000',
          colorDark: '#333333',
          colorLight: '#eeeeee',
          isRounded: false,
          importFontURL1: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
          importFontURL2: '',
          fontFamily1: '"IBM Plex Mono", serif',
          fontFamily2: '"IBM Plex Mono", serif'
        };
      }
    }
    get scss() {
      let font1 = '';
      if (this.obj.importFontURL1) {
        font1 = `@import url('${this.obj.importFontURL1}');`;
      }
      let font2 = '';
      if (this.obj.importFontURL2) {
        font2 = `
@import url('${this.obj.importFontURL2}');`;
      }
      return font1 + font2 + `

$font-family-sans-serif: ${this.obj.fontFamily1} !default;
$display-font-family: ${this.obj.fontFamily2} !default;

$primary: ${this.obj.colorPrimary} !default;
$secondary: ${this.obj.colorSecondary} !default;
$info: ${this.obj.colorInfo} !default;
$success: ${this.obj.colorSuccess} !default;
$warning: ${this.obj.colorWarning} !default;
$danger: ${this.obj.colorDanger} !default;
$light: ${this.obj.colorDark} !default;
$dark: ${this.obj.colorLight} !default;

$enable-rounded: ${this.obj.isRounded} !default;
$enable-negative-margins: true !default;
$enable-cssgrid: true !default;

$spacer: 1rem !default;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
  6: $spacer * 4.5,
  7: $spacer * 6,
  8: $spacer * 7.5,
  9: $spacer * 9,
  10: $spacer * 12,
) !default;

@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/animate.css/animate";
	    `;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateObject", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateObject"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copySCSS", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copySCSS"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InputFieldsVisualGuide);
});
;define("junction/components/interfaces/new-modal", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "uV1+Y6I+",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "junction/components/interfaces/new-modal.hbs",
    "isStrictMode": false
  });
  class InterfacesNewModalComponent extends _component2.default {}
  _exports.default = InterfacesNewModalComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, InterfacesNewModalComponent);
});
;define("junction/components/loading", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class="{{if this.type.loadingSearchResults 'd-flex' 'd-none'}}
      align-items-center justify-content-center vh-100 w-100 position-fixed animate__animated animate__fadeIn animate__faster"
    id="loading"
    style="z-index:11001"
  >
    <div class="position-relative" role="status" style="z-index:1">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div
      style="z-index:0;"
      class="position-absolute vh-100 w-100 bg-{{this.colormodes.mode}}
        opacity-75"
    ></div>
  </div>
  
  <div
    class="{{if this.blueprints.loadingProgress 'd-flex' 'd-none'}}
      align-items-center justify-content-center vh-100 w-100 position-fixed animate__animated animate__fadeIn animate__faster flex-column text-center"
    style="z-index:11002"
  >
    <div class="position-relative w-50" role="status" style="z-index:1">
  
      <div
        class="progress"
        role="progressbar"
        aria-valuenow="{{this.blueprints.loadingProgress}}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: {{this.blueprints.loadingProgress}}%"
        ></div>
      </div>
    </div>
  
    <div
      class="my-2 mx-auto col-lg-7 col-10 text-uppercase text-secondary subway small"
      style="z-index:1"
    >⏳ Generating blueprint. This can take upto 2 minutes.</div>
  
    <div
      style="z-index:0; opacity:0.96"
      class="position-absolute vh-100 w-100 bg-{{this.colormodes.mode}}"
    ></div>
  </div>
  */
  {
    "id": "PY0chJeA",
    "block": "[[[10,0],[15,0,[29,[[52,[30,0,[\"type\",\"loadingSearchResults\"]],\"d-flex\",\"d-none\"],\"\\n    align-items-center justify-content-center vh-100 w-100 position-fixed animate__animated animate__fadeIn animate__faster\"]]],[14,1,\"loading\"],[14,5,\"z-index:11001\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"position-relative\"],[14,\"role\",\"status\"],[14,5,\"z-index:1\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"spinner-border text-primary\"],[14,\"role\",\"status\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"visually-hidden\"],[12],[1,\"Loading...\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,5,\"z-index:0;\"],[15,0,[29,[\"position-absolute vh-100 w-100 bg-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n      opacity-75\"]]],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[15,0,[29,[[52,[30,0,[\"blueprints\",\"loadingProgress\"]],\"d-flex\",\"d-none\"],\"\\n    align-items-center justify-content-center vh-100 w-100 position-fixed animate__animated animate__fadeIn animate__faster flex-column text-center\"]]],[14,5,\"z-index:11002\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"position-relative w-50\"],[14,\"role\",\"status\"],[14,5,\"z-index:1\"],[12],[1,\"\\n\\n    \"],[10,0],[14,0,\"progress\"],[14,\"role\",\"progressbar\"],[15,\"aria-valuenow\",[29,[[30,0,[\"blueprints\",\"loadingProgress\"]]]]],[14,\"aria-valuemin\",\"0\"],[14,\"aria-valuemax\",\"100\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"progress-bar progress-bar-striped progress-bar-animated\"],[15,5,[29,[\"width: \",[30,0,[\"blueprints\",\"loadingProgress\"]],\"%\"]]],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"my-2 mx-auto col-lg-7 col-10 text-uppercase text-secondary subway small\"],[14,5,\"z-index:1\"],[12],[1,\"⏳ Generating blueprint. This can take upto 2 minutes.\"],[13],[1,\"\\n\\n  \"],[10,0],[14,5,\"z-index:0; opacity:0.96\"],[15,0,[29,[\"position-absolute vh-100 w-100 bg-\",[30,0,[\"colormodes\",\"mode\"]]]]],[12],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"if\",\"span\"]]",
    "moduleName": "junction/components/loading.hbs",
    "isStrictMode": false
  });
  let LoadingComponent = _exports.default = (_class = class LoadingComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "blueprints", _descriptor3, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LoadingComponent);
});
;define("junction/components/logo/arrows", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg viewBox="0 0 822.6 365.9" width="{{if @width @width "100%"}}" style="max-width:100%;" xmlns="http://www.w3.org/2000/svg" fill="{{if @color @color "#ffffff"}}"><path d="M0.000,214.000C0.000,214.000,229.300,287.100,298.600,365.900C298.600,365.900,285.300,297.200,298.600,228.000L822.600,228.000L822.600,214.000L0.000,214.000ZZ" class="fills"/><path d="M822.600,151.900C822.600,151.900,593.300,78.800,524.000,0.000C524.000,0.000,537.300,68.700,524.000,137.900L0.000,137.900L0.000,151.900L822.600,151.900ZZ" class="fills"/></svg>
  */
  {
    "id": "sm8t4n49",
    "block": "[[[10,\"svg\"],[14,\"viewBox\",\"0 0 822.6 365.9\"],[15,\"width\",[29,[[52,[30,1],[30,1],\"100%\"]]]],[14,5,\"max-width:100%;\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"fill\",[29,[[52,[30,2],[30,2],\"#ffffff\"]]]],[12],[10,\"path\"],[14,\"d\",\"M0.000,214.000C0.000,214.000,229.300,287.100,298.600,365.900C298.600,365.900,285.300,297.200,298.600,228.000L822.600,228.000L822.600,214.000L0.000,214.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M822.600,151.900C822.600,151.900,593.300,78.800,524.000,0.000C524.000,0.000,537.300,68.700,524.000,137.900L0.000,137.900L0.000,151.900L822.600,151.900ZZ\"],[14,0,\"fills\"],[12],[13],[13]],[\"@width\",\"@color\"],false,[\"svg\",\"if\",\"path\"]]",
    "moduleName": "junction/components/logo/arrows.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "arrows"));
});
;define("junction/components/logo/center", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg viewBox="0 0 1165.6 562.9" width="{{if @width @width "100%"}}" style="max-width:100%;" xmlns="http://www.w3.org/2000/svg" fill="{{if @color @color "#ffffff"}}"><path d="M172.600,288.700L186.700,288.700L186.700,291.800C186.700,294.000,187.100,295.600,187.800,296.600C188.800,298.100,190.400,298.700,192.000,298.700C195.000,298.700,197.100,296.800,197.100,292.600L197.100,265.100L197.100,265.100L197.100,253.000L211.200,253.000L211.200,293.000C211.200,305.700,201.500,311.700,191.800,311.700C182.100,311.700,172.500,305.500,172.500,293.000L172.600,288.700ZZ" class="fills"/><path d="M281.200,252.900L295.300,252.900L295.300,289.400C295.300,295.500,299.300,298.700,305.300,298.700C311.400,298.700,315.300,295.500,315.300,289.400L315.300,252.900L329.400,252.900L329.400,289.400C329.400,302.400,319.900,311.600,305.300,311.600C290.600,311.600,281.100,302.400,281.100,289.400L281.200,252.900ZZ" class="fills"/><path d="M408.200,252.800L420.900,252.800L420.900,252.800L422.300,252.800L422.300,280.700C429.000,273.200,435.000,255.500,435.800,253.100L435.800,252.800L435.900,252.800C435.900,252.800,435.900,252.800,435.900,252.800L435.900,252.800L448.600,252.800L448.600,310.300L435.900,310.300L435.800,310.300L434.500,310.300L434.500,282.200C427.300,290.300,420.900,310.300,420.900,310.300L420.900,310.300L408.200,310.300L408.200,252.800ZZ" class="fills"/><path d="M546.600,251.900C560.900,251.900,568.300,260.100,568.300,260.100L561.800,270.800C561.800,270.800,555.300,264.900,547.300,264.900C536.200,264.900,531.000,273.100,531.000,281.400C531.000,290.000,536.700,298.800,547.300,298.800C556.000,298.800,562.600,291.700,562.600,291.700L569.900,302.000C569.900,302.000,561.700,311.700,546.600,311.700C528.500,311.700,516.300,298.900,516.300,281.700C516.300,264.800,529.300,251.900,546.600,251.900ZZ" class="fills"/><path d="M647.400,265.000L629.900,265.000L629.900,252.900L679.100,252.900L679.100,265.000L661.600,265.000L661.600,310.600L647.500,310.600L647.500,265.000Z" class="fills"/><path d="M743.000,252.900L757.100,252.900L757.100,310.700L743.000,310.700L743.000,252.900ZZ" class="fills"/><path d="M854.800,251.900C872.300,251.900,885.000,264.800,885.000,281.400C885.000,298.400,872.200,311.600,854.800,311.600C837.400,311.600,824.600,298.400,824.600,281.400C824.600,264.800,837.300,251.900,854.800,251.900ZZM854.800,298.700C863.400,298.700,870.400,291.300,870.400,281.400C870.400,271.900,863.500,264.800,854.800,264.800C846.200,264.800,839.200,271.900,839.200,281.400C839.200,291.200,846.100,298.700,854.800,298.700ZZ" class="fills"/><path d="M992.900,252.800L980.200,252.800L980.200,252.800L978.800,252.800L978.800,280.700C972.100,273.200,966.100,255.500,965.300,253.100L965.300,252.800L965.200,252.800C965.200,252.800,965.200,252.800,965.200,252.800L965.200,252.800L952.500,252.800L952.500,310.300L965.200,310.300L965.300,310.300L966.600,310.300L966.600,282.200C973.800,290.300,980.200,310.300,980.200,310.300L980.200,310.300L992.900,310.300L992.900,252.800ZZ" class="fills"/><path d="M822.600,562.900C822.600,562.900,582.690,489.800,513.390,411.000C513.390,411.000,505.600,495.900,524.000,548.900L0.000,548.900L0.000,562.900L822.600,562.900ZL822.600,562.900Z" class="fills"/><path d="M171.000,342.100C171.000,342.100,400.300,415.200,469.600,494.000C469.600,494.000,456.300,425.300,469.600,356.100L993.600,356.100L993.600,342.100L171.000,342.100ZZ" class="fills"/><path d="M993.600,221.000C993.600,221.000,764.300,147.900,695.000,69.100C695.000,69.100,708.300,137.800,695.000,207.000L171.000,207.000L171.000,221.000L993.600,221.000ZZ" class="fills"/><path d="M343.000,0.000C343.000,0.000,582.910,73.100,652.210,151.900C652.210,151.900,660.000,67.000,641.600,14.000L1165.600,14.000L1165.600,0.000L343.000,0.000ZL343.000,0.000Z" class="fills"/></svg>
  */
  {
    "id": "Xyaftjxy",
    "block": "[[[10,\"svg\"],[14,\"viewBox\",\"0 0 1165.6 562.9\"],[15,\"width\",[29,[[52,[30,1],[30,1],\"100%\"]]]],[14,5,\"max-width:100%;\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"fill\",[29,[[52,[30,2],[30,2],\"#ffffff\"]]]],[12],[10,\"path\"],[14,\"d\",\"M172.600,288.700L186.700,288.700L186.700,291.800C186.700,294.000,187.100,295.600,187.800,296.600C188.800,298.100,190.400,298.700,192.000,298.700C195.000,298.700,197.100,296.800,197.100,292.600L197.100,265.100L197.100,265.100L197.100,253.000L211.200,253.000L211.200,293.000C211.200,305.700,201.500,311.700,191.800,311.700C182.100,311.700,172.500,305.500,172.500,293.000L172.600,288.700ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M281.200,252.900L295.300,252.900L295.300,289.400C295.300,295.500,299.300,298.700,305.300,298.700C311.400,298.700,315.300,295.500,315.300,289.400L315.300,252.900L329.400,252.900L329.400,289.400C329.400,302.400,319.900,311.600,305.300,311.600C290.600,311.600,281.100,302.400,281.100,289.400L281.200,252.900ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M408.200,252.800L420.900,252.800L420.900,252.800L422.300,252.800L422.300,280.700C429.000,273.200,435.000,255.500,435.800,253.100L435.800,252.800L435.900,252.800C435.900,252.800,435.900,252.800,435.900,252.800L435.900,252.800L448.600,252.800L448.600,310.300L435.900,310.300L435.800,310.300L434.500,310.300L434.500,282.200C427.300,290.300,420.900,310.300,420.900,310.300L420.900,310.300L408.200,310.300L408.200,252.800ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M546.600,251.900C560.900,251.900,568.300,260.100,568.300,260.100L561.800,270.800C561.800,270.800,555.300,264.900,547.300,264.900C536.200,264.900,531.000,273.100,531.000,281.400C531.000,290.000,536.700,298.800,547.300,298.800C556.000,298.800,562.600,291.700,562.600,291.700L569.900,302.000C569.900,302.000,561.700,311.700,546.600,311.700C528.500,311.700,516.300,298.900,516.300,281.700C516.300,264.800,529.300,251.900,546.600,251.900ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M647.400,265.000L629.900,265.000L629.900,252.900L679.100,252.900L679.100,265.000L661.600,265.000L661.600,310.600L647.500,310.600L647.500,265.000Z\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M743.000,252.900L757.100,252.900L757.100,310.700L743.000,310.700L743.000,252.900ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M854.800,251.900C872.300,251.900,885.000,264.800,885.000,281.400C885.000,298.400,872.200,311.600,854.800,311.600C837.400,311.600,824.600,298.400,824.600,281.400C824.600,264.800,837.300,251.900,854.800,251.900ZZM854.800,298.700C863.400,298.700,870.400,291.300,870.400,281.400C870.400,271.900,863.500,264.800,854.800,264.800C846.200,264.800,839.200,271.900,839.200,281.400C839.200,291.200,846.100,298.700,854.800,298.700ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M992.900,252.800L980.200,252.800L980.200,252.800L978.800,252.800L978.800,280.700C972.100,273.200,966.100,255.500,965.300,253.100L965.300,252.800L965.200,252.800C965.200,252.800,965.200,252.800,965.200,252.800L965.200,252.800L952.500,252.800L952.500,310.300L965.200,310.300L965.300,310.300L966.600,310.300L966.600,282.200C973.800,290.300,980.200,310.300,980.200,310.300L980.200,310.300L992.900,310.300L992.900,252.800ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M822.600,562.900C822.600,562.900,582.690,489.800,513.390,411.000C513.390,411.000,505.600,495.900,524.000,548.900L0.000,548.900L0.000,562.900L822.600,562.900ZL822.600,562.900Z\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M171.000,342.100C171.000,342.100,400.300,415.200,469.600,494.000C469.600,494.000,456.300,425.300,469.600,356.100L993.600,356.100L993.600,342.100L171.000,342.100ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M993.600,221.000C993.600,221.000,764.300,147.900,695.000,69.100C695.000,69.100,708.300,137.800,695.000,207.000L171.000,207.000L171.000,221.000L993.600,221.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M343.000,0.000C343.000,0.000,582.910,73.100,652.210,151.900C652.210,151.900,660.000,67.000,641.600,14.000L1165.600,14.000L1165.600,0.000L343.000,0.000ZL343.000,0.000Z\"],[14,0,\"fills\"],[12],[13],[13]],[\"@width\",\"@color\"],false,[\"svg\",\"if\",\"path\"]]",
    "moduleName": "junction/components/logo/center.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "center"));
});
;define("junction/components/logo/flame", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg viewBox="0 0 828.147 679.138" width="{{if @width @width "100%"}}" style="max-width:100%;" xmlns="http://www.w3.org/2000/svg" fill="{{if @color @color "#ffffff"}}"><path d="M604.128 679.138s37.641-.731 101-26c48.641-19.398 66-37 66-37s21.606-13.506 40-62c18.272-48.172 17-88 17-88V245s-109 7.138-170 58.138c0 0-22.221 14.746-43 64-3.329 7.892-8.209 31.703-10 57-6.398 90.349-1 255-1 255ZM312.059 678s61.873 10 151.873-51c59.347-40.224 71-141 71-141l.981-352s-121.366 10.386-174.981 64c-64 64-52.209 132.301-54 164-6.393 113.212 5.127 316 5.127 316ZM.114 673.001s76.874 6 162.874-57c64.631-47.347 61-118 61-118l-.019-498s-108.981-1-179.981 68c0 0-34 23-43 101-1.454 12.595-.874 504-.874 504Z" style="fill: {{if @color @color "#ffffff"}}" class="fills"/></svg>
  */
  {
    "id": "f5nuHkeM",
    "block": "[[[10,\"svg\"],[14,\"viewBox\",\"0 0 828.147 679.138\"],[15,\"width\",[29,[[52,[30,1],[30,1],\"100%\"]]]],[14,5,\"max-width:100%;\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"fill\",[29,[[52,[30,2],[30,2],\"#ffffff\"]]]],[12],[10,\"path\"],[14,\"d\",\"M604.128 679.138s37.641-.731 101-26c48.641-19.398 66-37 66-37s21.606-13.506 40-62c18.272-48.172 17-88 17-88V245s-109 7.138-170 58.138c0 0-22.221 14.746-43 64-3.329 7.892-8.209 31.703-10 57-6.398 90.349-1 255-1 255ZM312.059 678s61.873 10 151.873-51c59.347-40.224 71-141 71-141l.981-352s-121.366 10.386-174.981 64c-64 64-52.209 132.301-54 164-6.393 113.212 5.127 316 5.127 316ZM.114 673.001s76.874 6 162.874-57c64.631-47.347 61-118 61-118l-.019-498s-108.981-1-179.981 68c0 0-34 23-43 101-1.454 12.595-.874 504-.874 504Z\"],[15,5,[29,[\"fill: \",[52,[30,2],[30,2],\"#ffffff\"]]]],[14,0,\"fills\"],[12],[13],[13]],[\"@width\",\"@color\"],false,[\"svg\",\"if\",\"path\"]]",
    "moduleName": "junction/components/logo/flame.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "flame"));
});
;define("junction/components/logo/full", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg viewBox="0 0 1165.6 597.8" width="{{if @width @width "100%"}}" style="max-width:100%;" xmlns="http://www.w3.org/2000/svg" fill="{{if @color @color "#ffffff"}}"><path d="M822.600,503.900C822.600,503.900,582.690,430.800,513.390,352.000C513.390,352.000,505.600,436.900,524.000,489.900L0.000,489.900L0.000,503.900L822.600,503.900ZL822.600,503.900Z" class="fills"/><path d="M171.000,284.000C171.000,284.000,400.300,357.100,469.600,435.900C469.600,435.900,456.300,367.200,469.600,298.000L993.600,298.000L993.600,284.000L171.000,284.000ZZ" class="fills"/><path d="M993.600,221.900C993.600,221.900,764.300,148.800,695.000,70.000C695.000,70.000,708.300,138.700,695.000,207.900L171.000,207.900L171.000,221.900L993.600,221.900ZZ" class="fills"/><path d="M343.000,0.000C343.000,0.000,582.910,73.100,652.210,151.900C652.210,151.900,660.000,67.000,641.600,14.000L1165.600,14.000L1165.600,0.000L343.000,0.000ZL343.000,0.000Z" class="fills"/><path d="M0.100,574.800L14.200,574.800L14.200,577.900C14.200,580.100,14.600,581.700,15.300,582.700C16.300,584.200,17.900,584.800,19.500,584.800C22.500,584.800,24.600,582.900,24.600,578.700L24.600,551.200L24.600,551.200L24.600,539.100L38.700,539.100L38.700,579.100C38.700,591.800,29.000,597.800,19.300,597.800C9.600,597.800,0.000,591.600,0.000,579.100L0.100,574.800ZZ" class="fills"/><path d="M108.700,539.000L122.800,539.000L122.800,575.500C122.800,581.600,126.800,584.800,132.800,584.800C138.900,584.800,142.800,581.600,142.800,575.500L142.800,539.000L156.900,539.000L156.900,575.500C156.900,588.500,147.400,597.700,132.800,597.700C118.100,597.700,108.600,588.500,108.600,575.500L108.700,539.000ZZ" class="fills"/><path d="M235.700,538.900L248.400,538.900L248.400,538.900L249.800,538.900L249.800,566.800C256.500,559.300,262.500,541.600,263.300,539.200L263.300,538.900L263.400,538.900C263.400,538.900,263.400,538.900,263.400,538.900L263.400,538.900L276.100,538.900L276.100,596.400L263.400,596.400L263.300,596.400L262.000,596.400L262.000,568.300C254.800,576.400,248.400,596.400,248.400,596.400L248.400,596.400L235.700,596.400L235.700,538.900ZZ" class="fills"/><path d="M374.100,538.000C388.400,538.000,395.800,546.200,395.800,546.200L389.300,556.900C389.300,556.900,382.800,551.000,374.800,551.000C363.700,551.000,358.500,559.200,358.500,567.500C358.500,576.100,364.200,584.900,374.800,584.900C383.500,584.900,390.100,577.800,390.100,577.800L397.400,588.100C397.400,588.100,389.200,597.800,374.100,597.800C356.000,597.800,343.800,585.000,343.800,567.800C343.800,550.900,356.800,538.000,374.100,538.000ZZ" class="fills"/><path d="M474.900,551.100L457.400,551.100L457.400,539.000L506.600,539.000L506.600,551.100L489.100,551.100L489.100,596.700L475.000,596.700L475.000,551.100Z" class="fills"/><path d="M570.500,539.000L584.600,539.000L584.600,596.800L570.500,596.800L570.500,539.000ZZ" class="fills"/><path d="M682.300,538.000C699.800,538.000,712.500,550.900,712.500,567.500C712.500,584.500,699.700,597.700,682.300,597.700C664.900,597.700,652.100,584.500,652.100,567.500C652.100,550.900,664.800,538.000,682.300,538.000ZZM682.300,584.800C690.900,584.800,697.900,577.400,697.900,567.500C697.900,558.000,691.000,550.900,682.300,550.900C673.700,550.900,666.700,558.000,666.700,567.500C666.700,577.300,673.600,584.800,682.300,584.800ZZ" class="fills"/><path d="M820.400,538.900L807.700,538.900L807.700,538.900L806.300,538.900L806.300,566.800C799.600,559.300,793.600,541.600,792.800,539.200L792.800,538.900L792.700,538.900C792.700,538.900,792.700,538.900,792.700,538.900L792.700,538.900L780.000,538.900L780.000,596.400L792.700,596.400L792.800,596.400L794.100,596.400L794.100,568.300C801.300,576.400,807.700,596.400,807.700,596.400L807.700,596.400L820.400,596.400L820.400,538.900ZZ" class="fills"/></svg>
  */
  {
    "id": "nLJsarDs",
    "block": "[[[10,\"svg\"],[14,\"viewBox\",\"0 0 1165.6 597.8\"],[15,\"width\",[29,[[52,[30,1],[30,1],\"100%\"]]]],[14,5,\"max-width:100%;\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"fill\",[29,[[52,[30,2],[30,2],\"#ffffff\"]]]],[12],[10,\"path\"],[14,\"d\",\"M822.600,503.900C822.600,503.900,582.690,430.800,513.390,352.000C513.390,352.000,505.600,436.900,524.000,489.900L0.000,489.900L0.000,503.900L822.600,503.900ZL822.600,503.900Z\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M171.000,284.000C171.000,284.000,400.300,357.100,469.600,435.900C469.600,435.900,456.300,367.200,469.600,298.000L993.600,298.000L993.600,284.000L171.000,284.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M993.600,221.900C993.600,221.900,764.300,148.800,695.000,70.000C695.000,70.000,708.300,138.700,695.000,207.900L171.000,207.900L171.000,221.900L993.600,221.900ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M343.000,0.000C343.000,0.000,582.910,73.100,652.210,151.900C652.210,151.900,660.000,67.000,641.600,14.000L1165.600,14.000L1165.600,0.000L343.000,0.000ZL343.000,0.000Z\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M0.100,574.800L14.200,574.800L14.200,577.900C14.200,580.100,14.600,581.700,15.300,582.700C16.300,584.200,17.900,584.800,19.500,584.800C22.500,584.800,24.600,582.900,24.600,578.700L24.600,551.200L24.600,551.200L24.600,539.100L38.700,539.100L38.700,579.100C38.700,591.800,29.000,597.800,19.300,597.800C9.600,597.800,0.000,591.600,0.000,579.100L0.100,574.800ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M108.700,539.000L122.800,539.000L122.800,575.500C122.800,581.600,126.800,584.800,132.800,584.800C138.900,584.800,142.800,581.600,142.800,575.500L142.800,539.000L156.900,539.000L156.900,575.500C156.900,588.500,147.400,597.700,132.800,597.700C118.100,597.700,108.600,588.500,108.600,575.500L108.700,539.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M235.700,538.900L248.400,538.900L248.400,538.900L249.800,538.900L249.800,566.800C256.500,559.300,262.500,541.600,263.300,539.200L263.300,538.900L263.400,538.900C263.400,538.900,263.400,538.900,263.400,538.900L263.400,538.900L276.100,538.900L276.100,596.400L263.400,596.400L263.300,596.400L262.000,596.400L262.000,568.300C254.800,576.400,248.400,596.400,248.400,596.400L248.400,596.400L235.700,596.400L235.700,538.900ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M374.100,538.000C388.400,538.000,395.800,546.200,395.800,546.200L389.300,556.900C389.300,556.900,382.800,551.000,374.800,551.000C363.700,551.000,358.500,559.200,358.500,567.500C358.500,576.100,364.200,584.900,374.800,584.900C383.500,584.900,390.100,577.800,390.100,577.800L397.400,588.100C397.400,588.100,389.200,597.800,374.100,597.800C356.000,597.800,343.800,585.000,343.800,567.800C343.800,550.900,356.800,538.000,374.100,538.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M474.900,551.100L457.400,551.100L457.400,539.000L506.600,539.000L506.600,551.100L489.100,551.100L489.100,596.700L475.000,596.700L475.000,551.100Z\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M570.500,539.000L584.600,539.000L584.600,596.800L570.500,596.800L570.500,539.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M682.300,538.000C699.800,538.000,712.500,550.900,712.500,567.500C712.500,584.500,699.700,597.700,682.300,597.700C664.900,597.700,652.100,584.500,652.100,567.500C652.100,550.900,664.800,538.000,682.300,538.000ZZM682.300,584.800C690.900,584.800,697.900,577.400,697.900,567.500C697.900,558.000,691.000,550.900,682.300,550.900C673.700,550.900,666.700,558.000,666.700,567.500C666.700,577.300,673.600,584.800,682.300,584.800ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M820.400,538.900L807.700,538.900L807.700,538.900L806.300,538.900L806.300,566.800C799.600,559.300,793.600,541.600,792.800,539.200L792.800,538.900L792.700,538.900C792.700,538.900,792.700,538.900,792.700,538.900L792.700,538.900L780.000,538.900L780.000,596.400L792.700,596.400L792.800,596.400L794.100,596.400L794.100,568.300C801.300,576.400,807.700,596.400,807.700,596.400L807.700,596.400L820.400,596.400L820.400,538.900ZZ\"],[14,0,\"fills\"],[12],[13],[13]],[\"@width\",\"@color\"],false,[\"svg\",\"if\",\"path\"]]",
    "moduleName": "junction/components/logo/full.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "full"));
});
;define("junction/components/logo/icon", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg viewBox="0 0 1165.6 503.9" width="{{if @width @width "100%"}}" style="max-width:100%;" xmlns="http://www.w3.org/2000/svg" fill="{{if @color @color "#ffffff"}}"><path d="M822.600,503.900C822.600,503.900,582.690,430.800,513.390,352.000C513.390,352.000,505.600,436.900,524.000,489.900L0.000,489.900L0.000,503.900L822.600,503.900ZL822.600,503.900Z" class="fills"/><path d="M171.000,284.000C171.000,284.000,400.300,357.100,469.600,435.900C469.600,435.900,456.300,367.200,469.600,298.000L993.600,298.000L993.600,284.000L171.000,284.000ZZ" class="fills"/><path d="M993.600,221.900C993.600,221.900,764.300,148.800,695.000,70.000C695.000,70.000,708.300,138.700,695.000,207.900L171.000,207.900L171.000,221.900L993.600,221.900ZZ" class="fills"/><path d="M343.000,0.000C343.000,0.000,582.910,73.100,652.210,151.900C652.210,151.900,660.000,67.000,641.600,14.000L1165.600,14.000L1165.600,0.000L343.000,0.000ZL343.000,0.000Z" class="fills"/></svg>
  */
  {
    "id": "wdbcf2pG",
    "block": "[[[10,\"svg\"],[14,\"viewBox\",\"0 0 1165.6 503.9\"],[15,\"width\",[29,[[52,[30,1],[30,1],\"100%\"]]]],[14,5,\"max-width:100%;\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[15,\"fill\",[29,[[52,[30,2],[30,2],\"#ffffff\"]]]],[12],[10,\"path\"],[14,\"d\",\"M822.600,503.900C822.600,503.900,582.690,430.800,513.390,352.000C513.390,352.000,505.600,436.900,524.000,489.900L0.000,489.900L0.000,503.900L822.600,503.900ZL822.600,503.900Z\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M171.000,284.000C171.000,284.000,400.300,357.100,469.600,435.900C469.600,435.900,456.300,367.200,469.600,298.000L993.600,298.000L993.600,284.000L171.000,284.000ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M993.600,221.900C993.600,221.900,764.300,148.800,695.000,70.000C695.000,70.000,708.300,138.700,695.000,207.900L171.000,207.900L171.000,221.900L993.600,221.900ZZ\"],[14,0,\"fills\"],[12],[13],[10,\"path\"],[14,\"d\",\"M343.000,0.000C343.000,0.000,582.910,73.100,652.210,151.900C652.210,151.900,660.000,67.000,641.600,14.000L1165.600,14.000L1165.600,0.000L343.000,0.000ZL343.000,0.000Z\"],[14,0,\"fills\"],[12],[13],[13]],[\"@width\",\"@color\"],false,[\"svg\",\"if\",\"path\"]]",
    "moduleName": "junction/components/logo/icon.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "icon"));
});
;define("junction/components/logo/wordmark", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg viewBox="0 0 1206 146.1" width="{{if @width @width "100%"}}" style="max-width:100%;" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M0 89.9h34.6v7.5c0 5.3 1 9.3 2.8 11.9 2.4 3.8 6.3 5.1 10.3 5.1 7.3 0 12.4-4.7 12.4-15v-97h34.6v97.8c0 31-23.7 45.8-47.4 45.8S.1 130.8.1 100.2V89.9H0ZM154.9 2.4h34.6v89.3c0 14.8 9.7 22.7 24.5 22.7s24.5-7.9 24.5-22.7V2.4H273v89.3c0 31.8-23.3 54.3-58.9 54.3-36 0-59.3-22.5-59.3-54.3l.1-89.3Zm179.2-.1h34.5v68.3C385.1 52.3 399.7 9 401.7 3v-.7h31.2v140.6h-34.4V74.3c-17.7 19.8-33.3 68.7-33.3 68.7v-.1h-31.1V2.3Zm871.9 0h-34.5v68.3C1155 52.3 1140.4 9 1138.4 3v-.7h-31.2v140.6h34.4V74.3c17.7 19.8 33.3 68.7 33.3 68.7v-.1h31.1V2.3ZM559.9 0c35 0 53 20 53 20l-16 26.1s-15.8-14.4-35.4-14.4c-27.1 0-39.9 20-39.9 40.3 0 20.9 13.8 42.5 39.9 42.5 21.3 0 37.5-17.4 37.5-17.4l17.8 25.3s-20 23.7-56.9 23.7c-44.3 0-74.1-31.4-74.1-73.3 0-41.2 31.6-72.8 74.1-72.8Zm420.8 0c42.7 0 73.9 31.6 73.9 72.1 0 41.5-31.2 73.9-73.9 73.9s-73.9-32.4-73.9-73.9c0-40.5 31.3-72.1 73.9-72.1Zm0 114.4c21.1 0 38.1-18.2 38.1-42.3 0-23.1-17-40.5-38.1-40.5S942.6 49 942.6 72.1c0 24.1 17 42.3 38.1 42.3ZM694.9 32H652V2.4h120.3V32h-42.9v111.6h-34.6V32h.1ZM820 2.4h34.6v141.3H820V2.4Z" xml:space="preserve" style="fill:{{if @color @color "#ffffff"}};" class="fills"/></svg>
  */
  {
    "id": "CWxdxtQI",
    "block": "[[[10,\"svg\"],[14,\"viewBox\",\"0 0 1206 146.1\"],[15,\"width\",[29,[[52,[30,1],[30,1],\"100%\"]]]],[14,5,\"max-width:100%;\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,\"fill\",\"none\"],[12],[10,\"path\"],[14,\"d\",\"M0 89.9h34.6v7.5c0 5.3 1 9.3 2.8 11.9 2.4 3.8 6.3 5.1 10.3 5.1 7.3 0 12.4-4.7 12.4-15v-97h34.6v97.8c0 31-23.7 45.8-47.4 45.8S.1 130.8.1 100.2V89.9H0ZM154.9 2.4h34.6v89.3c0 14.8 9.7 22.7 24.5 22.7s24.5-7.9 24.5-22.7V2.4H273v89.3c0 31.8-23.3 54.3-58.9 54.3-36 0-59.3-22.5-59.3-54.3l.1-89.3Zm179.2-.1h34.5v68.3C385.1 52.3 399.7 9 401.7 3v-.7h31.2v140.6h-34.4V74.3c-17.7 19.8-33.3 68.7-33.3 68.7v-.1h-31.1V2.3Zm871.9 0h-34.5v68.3C1155 52.3 1140.4 9 1138.4 3v-.7h-31.2v140.6h34.4V74.3c17.7 19.8 33.3 68.7 33.3 68.7v-.1h31.1V2.3ZM559.9 0c35 0 53 20 53 20l-16 26.1s-15.8-14.4-35.4-14.4c-27.1 0-39.9 20-39.9 40.3 0 20.9 13.8 42.5 39.9 42.5 21.3 0 37.5-17.4 37.5-17.4l17.8 25.3s-20 23.7-56.9 23.7c-44.3 0-74.1-31.4-74.1-73.3 0-41.2 31.6-72.8 74.1-72.8Zm420.8 0c42.7 0 73.9 31.6 73.9 72.1 0 41.5-31.2 73.9-73.9 73.9s-73.9-32.4-73.9-73.9c0-40.5 31.3-72.1 73.9-72.1Zm0 114.4c21.1 0 38.1-18.2 38.1-42.3 0-23.1-17-40.5-38.1-40.5S942.6 49 942.6 72.1c0 24.1 17 42.3 38.1 42.3ZM694.9 32H652V2.4h120.3V32h-42.9v111.6h-34.6V32h.1ZM820 2.4h34.6v141.3H820V2.4Z\"],[14,\"xml:space\",\"preserve\",\"http://www.w3.org/XML/1998/namespace\"],[15,5,[29,[\"fill:\",[52,[30,2],[30,2],\"#ffffff\"],\";\"]]],[14,0,\"fills\"],[12],[13],[13]],[\"@width\",\"@color\"],false,[\"svg\",\"if\",\"path\"]]",
    "moduleName": "junction/components/logo/wordmark.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "wordmark"));
});
;define("junction/components/page-summary-card", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/runloop", "sortablejs", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _runloop, _sortablejs, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/runloop",0,"sortablejs",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div {{on-click-outside this.ignoreReordering}} class="card p-0 mt-5 border-0">
    <h1
      class="display-6 mb-4 fw-normal text-muted
        {{if (lte this.typesCount 6) 'text-center' 'text-center'}}"
    >{{this.types.json.modules.webapp.name}}</h1>
  
    {{#unless this.reloadTypes}}
      <div
        id="track-names"
        class="card-body d-flex align-items-center justify-content-center flex-wrap p-0 col-lg-10 mx-auto"
      >
        {{#if this.types.json.modules.webapp.interfaces}}{{else}}
        {{/if}}
        {{#each-in this.types.json.modules as |key type|}}
          {{#if
            (and
              (and type.slug (not-eq type.slug "webapp"))
              (not-eq type.hidden true)
            )
          }}
            <div
              class="btn-group
                {{if this.activateReordering 'wobble'}}
                m-2 track-name-btn"
              data-type-slug={{type.slug}}
              role="group"
            ><button
                title="{{if
                  this.activateReordering
                  'Hold and drag to reorder'
                  'Click to switch to this track'
                }}"
                id="track-{{type.slug}}"
                {{on "click" (fn this.changeType type)}}
                type="button"
                class="text-capitalize fw-normal btn btn-{{if
                    (eq type.slug this.type.currentType.slug)
                    'primary'
                    (concat 'outline-' this.colormodes.inverseMode)
                  }}"
              >{{type.plural}}
                <span
                  class="badge text-bg-light fw-light rounded-2 small"
                >{{type.total_objects}}</span></button></div>
          {{/if}}
        {{/each-in}}
  
        {{#if (gt this.typesCount 6)}}
          {{#if this.types.json.modules.webapp.implementation_summary}}
            <div class="ignore-elements btn-group m-2" role="group"><button
                type="button"
                id="blueprintConsultationModal-btn"
                data-bs-toggle="modal"
                data-bs-target="#blueprintConsultationModal"
                class="text-capitalize fw-normal btn btn-outline-{{this.colormodes.inverseMode}}"
              ><i class="fa-solid fa-circle-info"></i></button></div>
          {{/if}}
          <div class="ignore-elements btn-group m-2" role="group"><button
              id="track-new"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#newModel"
              class="text-capitalize fw-normal btn btn-outline-{{this.colormodes.inverseMode}}"
            ><i class="fa-solid fa-plus"></i></button></div>
        {{else}}
          <div
            class="d-flex flex-column align-items-center justify-content-center text-center"
          >
            <div class="ignore-elements my-3 mx-auto text-center">
              <button
                type="button"
                class="btn-lg fw-light fs-5 btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-circle-nodes"></i>
                Use a blueprint
                <i class="fa-solid fa-caret-down"></i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-md-end overflow-y-scroll"
                style="max-height:360px"
              >
                <li><a class="dropdown-item fs-5 fw-light" href="#blueprintAIPromptModal" data-bs-toggle="modal"><i class="fa-solid fa-plus"></i> Generate your custom blueprint</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><h6 class="dropdown-header text-capitalize">Choose from available blueprints</h6></li>
                {{#each this.blueprints.junctionBlueprints as |blueprint|}}
                  <li><a
                      {{on
                        "click"
                        (fn
                          this.blueprints.changeBlueprint
                          blueprint.attributes
                          blueprint.attributes.modules.implementation_summary
                        )
                      }}
                      href="#"
                      class="dropdown-item fs-5 fw-light"
                    >{{blueprint.attributes.modules.title}}</a></li>
                {{/each}}
  
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header text-capitalize">Start Again</h6></li>
                <li><a
                    {{on "click" this.blueprints.clearBlueprint}}
                    class="dropdown-item"
                    href="#"
                  >Clear the canvas</a></li>
  
                {{#if this.blueprints.myBlueprints}}
                  <li><hr class="dropdown-divider" /></li>
  
                  <li><h6 class="dropdown-header text-capitalize">Recently used
                      blueprints</h6></li>
                  {{#each this.blueprints.myBlueprints as |blueprint|}}
                    <li><a
                        {{on
                          "click"
                          (fn
                            this.blueprints.revertBlueprint
                            blueprint.modules.types_json
                          )
                        }}
                        class="dropdown-item"
                        href="#"
                      >{{blueprint.modules.title}}</a></li>
                  {{/each}}
                {{/if}}
              </ul>
              <div class="fs-5 mt-4 fw-light mx-auto col-lg-7">Alternatively, you
                can start by adding a
                <a
                  class="text-{{this.colormodes.inverseMode}}"
                  href="#newModel"
                  data-bs-toggle="modal"
                >new track manually</a>
                or by
                <a
                  class="text-{{this.colormodes.inverseMode}}"
                  href="#blueprintAIPromptModal"
                  data-bs-toggle="modal"
                >generating a blueprint</a>
                to help you get started.</div>
            </div>
          </div>
        {{/if}}
  
        {{#if (gt this.typesCount 6)}}
          {{#if this.activateReordering}}
            <button
              id="track-new"
              type="button"
              {{on "click" this.ignoreReordering}}
              class="text-capitalize fw-normal border-0 btn me-n5"
            ><i class="fa-solid fa-lock-open"></i></button>
          {{else}}
            <button
              id="track-new"
              type="button"
              {{on "click" this.startWobble}}
              class="text-capitalize fw-normal border-0 btn me-n5"
            ><i class="fa-solid fa-lock"></i></button>
          {{/if}}
        {{/if}}
      </div>
    {{/unless}}
  
    {{#if this.activateReordering}}
      <div
        class="w-100 bg-{{this.colormodes.inverseMode}}
          p-1 d-flex align-items-center justify-content-between"
      >
        <button
          class="btn btn-outline-{{this.colormodes.mode}}"
          type="button"
          {{on "click" this.ignoreReordering}}
        ><i class="fa-solid fa-circle-xmark"></i> Do not save</button>
        <button
          class="btn btn-primary"
          type="button"
          {{on "click" this.saveReordering}}
        ><i class="fa-solid fa-circle-check"></i> Save reordering</button>
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "7LiHeDA8",
    "block": "[[[11,0],[24,0,\"card p-0 mt-5 border-0\"],[4,[38,1],[[30,0,[\"ignoreReordering\"]]],null],[12],[1,\"\\n  \"],[10,\"h1\"],[15,0,[29,[\"display-6 mb-4 fw-normal text-muted\\n      \",[52,[28,[37,4],[[30,0,[\"typesCount\"]],6],null],\"text-center\",\"text-center\"]]]],[12],[1,[30,0,[\"types\",\"json\",\"modules\",\"webapp\",\"name\"]]],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"reloadTypes\"]]],[[[1,\"    \"],[10,0],[14,1,\"track-names\"],[14,0,\"card-body d-flex align-items-center justify-content-center flex-wrap p-0 col-lg-10 mx-auto\"],[12],[1,\"\\n      \"],[41,[30,0,[\"types\",\"json\",\"modules\",\"webapp\",\"interfaces\"]],[[],[]],[[[1,\"\\n\"]],[]]],[42,[28,[37,7],[[30,0,[\"types\",\"json\",\"modules\"]]],null],null,[[[41,[28,[37,8],[[28,[37,8],[[30,1,[\"slug\"]],[28,[37,9],[[30,1,[\"slug\"]],\"webapp\"],null]],null],[28,[37,9],[[30,1,[\"hidden\"]],true],null]],null],[[[1,\"          \"],[10,0],[15,0,[29,[\"btn-group\\n              \",[52,[30,0,[\"activateReordering\"]],\"wobble\"],\"\\n              m-2 track-name-btn\"]]],[15,\"data-type-slug\",[30,1,[\"slug\"]]],[14,\"role\",\"group\"],[12],[11,\"button\"],[16,\"title\",[29,[[52,[30,0,[\"activateReordering\"]],\"Hold and drag to reorder\",\"Click to switch to this track\"]]]],[16,1,[29,[\"track-\",[30,1,[\"slug\"]]]]],[16,0,[29,[\"text-capitalize fw-normal btn btn-\",[52,[28,[37,11],[[30,1,[\"slug\"]],[30,0,[\"type\",\"currentType\",\"slug\"]]],null],\"primary\",[28,[37,12],[\"outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]],null]]]]],[24,4,\"button\"],[4,[38,13],[\"click\",[28,[37,14],[[30,0,[\"changeType\"]],[30,1]],null]],null],[12],[1,[30,1,[\"plural\"]]],[1,\"\\n              \"],[10,1],[14,0,\"badge text-bg-light fw-light rounded-2 small\"],[12],[1,[30,1,[\"total_objects\"]]],[13],[13],[13],[1,\"\\n\"]],[]],null]],[1,2]],null],[1,\"\\n\"],[41,[28,[37,16],[[30,0,[\"typesCount\"]],6],null],[[[41,[30,0,[\"types\",\"json\",\"modules\",\"webapp\",\"implementation_summary\"]],[[[1,\"          \"],[10,0],[14,0,\"ignore-elements btn-group m-2\"],[14,\"role\",\"group\"],[12],[10,\"button\"],[14,1,\"blueprintConsultationModal-btn\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#blueprintConsultationModal\"],[15,0,[29,[\"text-capitalize fw-normal btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-info\"],[12],[13],[13],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[10,0],[14,0,\"ignore-elements btn-group m-2\"],[14,\"role\",\"group\"],[12],[10,\"button\"],[14,1,\"track-new\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#newModel\"],[15,0,[29,[\"text-capitalize fw-normal btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-plus\"],[12],[13],[13],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,0],[14,0,\"d-flex flex-column align-items-center justify-content-center text-center\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"ignore-elements my-3 mx-auto text-center\"],[12],[1,\"\\n            \"],[10,\"button\"],[14,0,\"btn-lg fw-light fs-5 btn btn-outline-primary dropdown-toggle\"],[14,\"data-bs-toggle\",\"dropdown\"],[14,\"aria-expanded\",\"false\"],[14,4,\"button\"],[12],[1,\"\\n              \"],[10,\"i\"],[14,0,\"fa-solid fa-circle-nodes\"],[12],[13],[1,\"\\n              Use a blueprint\\n              \"],[10,\"i\"],[14,0,\"fa-solid fa-caret-down\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"dropdown-menu dropdown-menu-md-end overflow-y-scroll\"],[14,5,\"max-height:360px\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,0,\"dropdown-item fs-5 fw-light\"],[14,6,\"#blueprintAIPromptModal\"],[14,\"data-bs-toggle\",\"modal\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-plus\"],[12],[13],[1,\" Generate your custom blueprint\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"h6\"],[14,0,\"dropdown-header text-capitalize\"],[12],[1,\"Choose from available blueprints\"],[13],[13],[1,\"\\n\"],[42,[28,[37,23],[[28,[37,23],[[30,0,[\"blueprints\",\"junctionBlueprints\"]]],null]],null],null,[[[1,\"                \"],[10,\"li\"],[12],[11,3],[24,6,\"#\"],[24,0,\"dropdown-item fs-5 fw-light\"],[4,[38,13],[\"click\",[28,[37,14],[[30,0,[\"blueprints\",\"changeBlueprint\"]],[30,3,[\"attributes\"]],[30,3,[\"attributes\",\"modules\",\"implementation_summary\"]]],null]],null],[12],[1,[30,3,[\"attributes\",\"modules\",\"title\"]]],[13],[13],[1,\"\\n\"]],[3]],null],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,\"h6\"],[14,0,\"dropdown-header text-capitalize\"],[12],[1,\"Start Again\"],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,13],[\"click\",[30,0,[\"blueprints\",\"clearBlueprint\"]]],null],[12],[1,\"Clear the canvas\"],[13],[13],[1,\"\\n\\n\"],[41,[30,0,[\"blueprints\",\"myBlueprints\"]],[[[1,\"                \"],[10,\"li\"],[12],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[13],[1,\"\\n\\n                \"],[10,\"li\"],[12],[10,\"h6\"],[14,0,\"dropdown-header text-capitalize\"],[12],[1,\"Recently used\\n                    blueprints\"],[13],[13],[1,\"\\n\"],[42,[28,[37,23],[[28,[37,23],[[30,0,[\"blueprints\",\"myBlueprints\"]]],null]],null],null,[[[1,\"                  \"],[10,\"li\"],[12],[11,3],[24,0,\"dropdown-item\"],[24,6,\"#\"],[4,[38,13],[\"click\",[28,[37,14],[[30,0,[\"blueprints\",\"revertBlueprint\"]],[30,4,[\"modules\",\"types_json\"]]],null]],null],[12],[1,[30,4,[\"modules\",\"title\"]]],[13],[13],[1,\"\\n\"]],[4]],null]],[]],null],[1,\"            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"fs-5 mt-4 fw-light mx-auto col-lg-7\"],[12],[1,\"Alternatively, you\\n              can start by adding a\\n              \"],[10,3],[15,0,[29,[\"text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,6,\"#newModel\"],[14,\"data-bs-toggle\",\"modal\"],[12],[1,\"new track manually\"],[13],[1,\"\\n              or by\\n              \"],[10,3],[15,0,[29,[\"text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,6,\"#blueprintAIPromptModal\"],[14,\"data-bs-toggle\",\"modal\"],[12],[1,\"generating a blueprint\"],[13],[1,\"\\n              to help you get started.\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"],[41,[28,[37,16],[[30,0,[\"typesCount\"]],6],null],[[[41,[30,0,[\"activateReordering\"]],[[[1,\"          \"],[11,\"button\"],[24,1,\"track-new\"],[24,0,\"text-capitalize fw-normal border-0 btn me-n5\"],[24,4,\"button\"],[4,[38,13],[\"click\",[30,0,[\"ignoreReordering\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-lock-open\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[11,\"button\"],[24,1,\"track-new\"],[24,0,\"text-capitalize fw-normal border-0 btn me-n5\"],[24,4,\"button\"],[4,[38,13],[\"click\",[30,0,[\"startWobble\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-lock\"],[12],[13],[13],[1,\"\\n\"]],[]]]],[]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"activateReordering\"]],[[[1,\"    \"],[10,0],[15,0,[29,[\"w-100 bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n        p-1 d-flex align-items-center justify-content-between\"]]],[12],[1,\"\\n      \"],[11,\"button\"],[16,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"mode\"]]]]],[24,4,\"button\"],[4,[38,13],[\"click\",[30,0,[\"ignoreReordering\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-xmark\"],[12],[13],[1,\" Do not save\"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,13],[\"click\",[30,0,[\"saveReordering\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-check\"],[12],[13],[1,\" Save reordering\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[13]],[\"type\",\"key\",\"blueprint\",\"blueprint\"],false,[\"div\",\"on-click-outside\",\"h1\",\"if\",\"lte\",\"unless\",\"each\",\"-each-in\",\"and\",\"not-eq\",\"button\",\"eq\",\"concat\",\"on\",\"fn\",\"span\",\"gt\",\"i\",\"ul\",\"li\",\"a\",\"hr\",\"h6\",\"-track-array\"]]",
    "moduleName": "junction/components/page-summary-card.hbs",
    "isStrictMode": false
  });
  let PageSummaryCardComponent = _exports.default = (_class = class PageSummaryCardComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
      _initializerDefineProperty(this, "type", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "store", _descriptor4, this);
      _initializerDefineProperty(this, "colormodes", _descriptor5, this);
      _initializerDefineProperty(this, "blueprints", _descriptor6, this);
      _initializerDefineProperty(this, "sortable", _descriptor7, this);
      _initializerDefineProperty(this, "activateReordering", _descriptor8, this);
      _initializerDefineProperty(this, "modules", _descriptor9, this);
      _initializerDefineProperty(this, "reloadTypes", _descriptor0, this);
    }
    get typesCount() {
      return this.modules.length;
    }
    changeType(type) {
      this.type.clearSearchQuery();
      this.type.editorJSOnTypeChange();
      this.type.currentType = type;
      this.type.loadTypeObjects();
      this.router.transitionTo('type', type);
    }
    startWobble() {
      this.activateReordering = true;
      this.initDragDrop();
    }
    stopWobble() {
      this.activateReordering = false;
      this.stopDragDrop();
    }
    stopDragDrop() {
      this.sortable = null;
    }
    initDragDrop() {
      this.sortable = new _sortablejs.default(document.querySelector('#track-names'), {
        group: 'track-names',
        // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
        sort: true,
        // sorting inside list
        delay: 0,
        // time in milliseconds to define when the sorting should start
        delayOnTouchOnly: false,
        // only delay if user is using touch
        touchStartThreshold: 0,
        // px, how many pixels the point should move before cancelling a delayed drag event
        disabled: false,
        // Disables the sortable if set to true.
        store: null,
        // @see Store
        animation: 150,
        // ms, animation speed moving items when sorting, `0` — without animation
        easing: 'cubic-bezier(1, 0, 0, 1)',
        // Easing for animation. Defaults to null. See https://easings.net/ for examples.
        handle: '.track-name-btn',
        // Drag handle selector within list items
        filter: '.ignore-elements',
        // Selectors that do not lead to dragging (String or Function)
        preventOnFilter: true,
        // Call `event.preventDefault()` when triggered `filter`
        draggable: '.track-name-btn',
        // Specifies which items inside the element should be draggable

        dataIdAttr: 'data-type-slug',
        // HTML attribute that is used by the `toArray()` method

        ghostClass: 'sortable-ghost',
        // Class name for the drop placeholder
        chosenClass: 'sortable-chosen',
        // Class name for the chosen item
        dragClass: 'sortable-drag',
        // Class name for the dragging item

        swapThreshold: 1,
        // Threshold of the swap zone
        invertSwap: false,
        // Will always use inverted swap zone if set to true
        invertedSwapThreshold: 1,
        // Threshold of the inverted swap zone (will be set to swapThreshold value by default)
        direction: 'horizontal',
        // Direction of Sortable (will be detected automatically if not given)

        forceFallback: false,
        // ignore the HTML5 DnD behaviour and force the fallback to kick in

        fallbackClass: 'sortable-fallback',
        // Class name for the cloned DOM Element when using forceFallback
        fallbackOnBody: false,
        // Appends the cloned DOM Element into the Document's Body
        fallbackTolerance: 0,
        // Specify in pixels how far the mouse should move before it's considered as a drag.

        dragoverBubble: false,
        removeCloneOnHide: true,
        // Remove the clone element when it is not showing, rather than just hiding it
        emptyInsertThreshold: 5,
        // px, distance mouse must be from empty sortable to insert drag element into it

        // Element dragging ended
        onEnd: async evt => {
          this.modules = Object.entries(this.types.json.modules);
          this.modules = await array_move(this.modules, evt.oldIndex + 1, evt.newIndex + 1);
          function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
              var k = new_index - arr.length + 1;
              while (k--) {
                arr.push(undefined);
              }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr; // for testing
          }
        }
      });
      this.initialOrder = this.sortable.toArray();
    }
    async ignoreReordering() {
      if (this.activateReordering === true) {
        this.type.loadingSearchResults = true;
        this.stopWobble();
        this.reloadTypes = true;
        (0, _runloop.later)(this, () => {
          this.reloadTypes = false;
        }, 1);
        (0, _runloop.later)(this, () => {
          this.type.loadingSearchResults = false;
        }, 500);
      }
    }
    async saveReordering() {
      this.type.loadingSearchResults = true;
      this.types.json.modules = await Object.fromEntries(this.modules);
      await this.types.json.save();
      (0, _runloop.later)(this, async () => {
        window.location.reload(true);
      }, 500);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "sortable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "activateReordering", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "modules", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return Object.entries(this.types.json.modules);
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "reloadTypes", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "startWobble", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "startWobble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopWobble", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stopWobble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopDragDrop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stopDragDrop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initDragDrop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initDragDrop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ignoreReordering", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "ignoreReordering"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveReordering", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveReordering"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PageSummaryCardComponent);
});
;define("junction/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select-multiple/input", ["exports", "ember-power-select/components/power-select-multiple/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple/input"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple/trigger"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/before-options"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/input", ["exports", "ember-power-select/components/power-select/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/input"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/label", ["exports", "ember-power-select/components/power-select/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/label"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noMatchesMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/no-matches-message"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/options"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/placeholder"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/power-select-group"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/search-message"eaimeta@70e063a35619d71f
});
;define("junction/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/trigger"eaimeta@70e063a35619d71f
});
;define("junction/components/tag-input", ["exports", "ember-tag-input/components/tag-input"], function (_exports, _tagInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tagInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-tag-input/components/tag-input"eaimeta@70e063a35619d71f
});
;define("junction/components/types/blueprint-consultation-modal", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "bootstrap", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _service, _bootstrap, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"bootstrap",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="blueprintConsultationModal"
    tabindex="-1"
    aria-labelledby="blueprintConsultationModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fst-italic fs-5"
            id="blueprintConsultationModalLabel"
          ><i class="fa-solid fa-circle-info"></i> Implementation Summary</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{{this.types.json.modules.webapp.implementation_summary}}}
        </div>
        <div
          class="modal-footer d-flex align-items-center justify-content-end p-0"
        >
          <div class="d-flex align-items-center justify-content-end">
            <button
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#blueprintAIPromptModal"
              data-bs-toggle="modal"
              class="btn btn-outline-primary ms-2"
            >Edit your project description</button>
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary ms-2"
            >Start now &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "XWVXfQt7",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"blueprintConsultationModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"blueprintConsultationModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fst-italic fs-5\"],[14,1,\"blueprintConsultationModalLabel\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-info\"],[12],[13],[1,\" Implementation Summary\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[2,[30,0,[\"types\",\"json\",\"modules\",\"webapp\",\"implementation_summary\"]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-end p-0\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n          \"],[10,\"button\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"data-bs-target\",\"#blueprintAIPromptModal\"],[14,\"data-bs-toggle\",\"modal\"],[14,0,\"btn btn-outline-primary ms-2\"],[14,4,\"button\"],[12],[1,\"Edit your project description\"],[13],[1,\"\\n          \"],[10,\"button\"],[14,\"data-bs-dismiss\",\"modal\"],[14,0,\"btn btn-primary ms-2\"],[14,4,\"button\"],[12],[1,\"Start now →\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"i\",\"button\"]]",
    "moduleName": "junction/components/types/blueprint-consultation-modal.hbs",
    "isStrictMode": false
  });
  let TypesBlueprintConsultationModalComponent = _exports.default = (_class = class TypesBlueprintConsultationModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesBlueprintConsultationModalComponent);
});
;define("junction/components/types/blueprint-object-modal", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/runloop", "junction/config/environment", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _runloop, _environment, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/runloop",0,"junction/config/environment",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="blueprintObjectModal"
    tabindex="-1"
    aria-labelledby="blueprintObjectModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="blueprintObjectModalLabel"><span
              class="text-primary"
            >{ object-blueprint }</span>
            {{this.object.currentType.name}}
            #{{this.object.currentObject.id}}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"><Types::Blueprint::JsonDisplay
            @jsondata={{this.object.currentObject.modules}}
          /></div>
  
        {{#if this.object.currentObject}}
          <div
            class="modal-footer d-flex align-items-center justify-content-between p-0"
          >
            <div
              class="d-flex align-items-center justify-content-start text-uppercase text-muted ps-2"
            ><div
                {{tooltip}}
                data-bs-html="true"
                data-bs-toggle="tooltip"
                data-bs-title="Last updated<br>
              {{this.unixTimestampToLocalTime
                  this.object.currentObject.modules.updated_on
                }}<br><em>Created<br>
              {{this.unixTimestampToLocalTime
                  this.object.currentObject.modules.created_on
                }}</em>"
              ><i class="fa-solid fa-circle-info"></i></div></div>
            <div class="d-flex align-items-center justify-content-end">
              <button
                {{on
                  "click"
                  (fn this.copyJSON this.object.currentObject.modules)
                }}
                type="button"
                class="btn btn-sm btn-secondary ms-2"
              ><i class="fa-solid fa-copy"></i> Copy JSON</button>
              <button
                {{on
                  "click"
                  (fn
                    this.copyAPILink
                    this.object.currentType.slug
                    this.object.currentObject.id
                  )
                }}
                type="button"
                class="btn btn-sm btn-primary ms-2"
              ><i class="fa-solid fa-copy"></i> Copy API URL</button>
            </div>
          </div>
        {{/if}}
      </div>
    </div>
  </div>
  */
  {
    "id": "RGE5lF1e",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"blueprintObjectModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"blueprintObjectModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-xl modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"blueprintObjectModalLabel\"],[12],[10,1],[14,0,\"text-primary\"],[12],[1,\"{ object-blueprint }\"],[13],[1,\"\\n          \"],[1,[30,0,[\"object\",\"currentType\",\"name\"]]],[1,\"\\n          #\"],[1,[30,0,[\"object\",\"currentObject\",\"id\"]]],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[8,[39,4],null,[[\"@jsondata\"],[[30,0,[\"object\",\"currentObject\",\"modules\"]]]],null],[13],[1,\"\\n\\n\"],[41,[30,0,[\"object\",\"currentObject\"]],[[[1,\"        \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-between p-0\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"d-flex align-items-center justify-content-start text-uppercase text-muted ps-2\"],[12],[11,0],[24,\"data-bs-html\",\"true\"],[24,\"data-bs-toggle\",\"tooltip\"],[16,\"data-bs-title\",[29,[\"Last updated<br>\\n            \",[28,[30,0,[\"unixTimestampToLocalTime\"]],[[30,0,[\"object\",\"currentObject\",\"modules\",\"updated_on\"]]],null],\"<br><em>Created<br>\\n            \",[28,[30,0,[\"unixTimestampToLocalTime\"]],[[30,0,[\"object\",\"currentObject\",\"modules\",\"created_on\"]]],null],\"</em>\"]]],[4,[38,6],null,null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-info\"],[12],[13],[13],[13],[1,\"\\n          \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n            \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary ms-2\"],[24,4,\"button\"],[4,[38,8],[\"click\",[28,[37,9],[[30,0,[\"copyJSON\"]],[30,0,[\"object\",\"currentObject\",\"modules\"]]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy JSON\"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary ms-2\"],[24,4,\"button\"],[4,[38,8],[\"click\",[28,[37,9],[[30,0,[\"copyAPILink\"]],[30,0,[\"object\",\"currentType\",\"slug\"]],[30,0,[\"object\",\"currentObject\",\"id\"]]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy API URL\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"span\",\"button\",\"types/blueprint/json-display\",\"if\",\"tooltip\",\"i\",\"on\",\"fn\"]]",
    "moduleName": "junction/components/types/blueprint-object-modal.hbs",
    "isStrictMode": false
  });
  let TypesBlueprintObjectModalComponent = _exports.default = (_class = class TypesBlueprintObjectModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "object", _descriptor, this);
      _defineProperty(this, "unixTimestampToLocalTime", unixTimestamp => {
        const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds

        return date.toLocaleDateString('en-UK', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
      });
    }
    copyJSON(object, e) {
      e.target.innerHTML = 'Copied!';
      navigator.clipboard.writeText(JSON.stringify(object, null, '\t'));
      (0, _runloop.later)(this, () => {
        e.target.innerHTML = '<i class="fa-solid fa-copy"></i> Copy JSON';
      }, 2000);
    }
    copyAPILink(type, id, e) {
      e.target.innerHTML = 'Copied!';
      navigator.clipboard.writeText(_environment.default.TribeENV.API_URL + '/api.php/' + type + '/' + id);
      (0, _runloop.later)(this, () => {
        e.target.innerHTML = '<i class="fa-solid fa-copy"></i> Copy API URL';
      }, 2000);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "copyJSON", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyJSON"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyAPILink", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyAPILink"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesBlueprintObjectModalComponent);
});
;define("junction/components/types/blueprint/json-display", ["exports", "@ember/component", "@glimmer/component", "pretty-print-json", "@ember/template-factory"], function (_exports, _component, _component2, _prettyPrintJson, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"pretty-print-json",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <pre class="json-container">{{{this.prettify this.args.jsondata}}}</pre>
  */
  {
    "id": "AmblaUYK",
    "block": "[[[10,\"pre\"],[14,0,\"json-container\"],[12],[2,[28,[30,0,[\"prettify\"]],[[30,0,[\"args\",\"jsondata\"]]],null]],[13]],[],false,[\"pre\"]]",
    "moduleName": "junction/components/types/blueprint/json-display.hbs",
    "isStrictMode": false
  });
  class TypesBlueprintJsonDisplayComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "prettify", data => {
        if (data !== undefined && data !== null) {
          var newdata = {};
          newdata.type = data.type;
          newdata.id = data.id;
          newdata.slug = data.slug;
          newdata.modules = data;
        }
        return _prettyPrintJson.prettyPrintJson.toHtml(newdata, {
          quoteKeys: true,
          trailingCommas: false
        });
      });
    }
  }
  _exports.default = TypesBlueprintJsonDisplayComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesBlueprintJsonDisplayComponent);
});
;define("junction/components/types/blueprints/ai-prompt", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="blueprintAIPromptModal"
    tabindex="-1"
    aria-labelledby="blueprintAIPromptModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fst-italic fs-5"
            id="blueprintAIPromptModalLabel"
          >Project Description</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Textarea
            @value={{this.blueprints.projectDescription}}
            class="form-control w-100 border-primary"
            rows="7"
            placeholder="Write a prompt to describe your project in a few sentences ..."
          />
          {{#if this.tryAgain}}
            <div class="alert alert-warning my-2" role="alert">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Error in response. Please try submitting again. If problem persists,
              try editing your prompt slightly.
            </div>
          {{/if}}
        </div>
        <div
          class="modal-footer d-flex align-items-center justify-content-end p-0"
        >
          <div class="d-flex align-items-center justify-content-end">
            {{#if (gte this.blueprints.projectDescription.length 20)}}
              <button
                {{on "click" this.blueprints.getAI}}
                type="button"
                class="btn btn-primary ms-2"
              >Set up Junction &rarr;</button>
            {{else}}
              <button
                type="button"
                disabled
                class="btn btn-{{this.colormodes.mode}} ms-2"
              >Set up Junction &rarr;</button>
            {{/if}}
          </div>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "i0kHEavB",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"blueprintAIPromptModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"blueprintAIPromptModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fst-italic fs-5\"],[14,1,\"blueprintAIPromptModalLabel\"],[12],[1,\"Project Description\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[8,[39,3],[[24,0,\"form-control w-100 border-primary\"],[24,\"rows\",\"7\"],[24,\"placeholder\",\"Write a prompt to describe your project in a few sentences ...\"]],[[\"@value\"],[[30,0,[\"blueprints\",\"projectDescription\"]]]],null],[1,\"\"],[41,[30,0,[\"tryAgain\"]],[[[1,\"          \"],[10,0],[14,0,\"alert alert-warning my-2\"],[14,\"role\",\"alert\"],[12],[1,\"\\n            \"],[10,\"i\"],[14,0,\"fa-solid fa-triangle-exclamation\"],[12],[13],[1,\"\\n            Error in response. Please try submitting again. If problem persists,\\n            try editing your prompt slightly.\\n          \"],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-end p-0\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n\"],[41,[28,[37,6],[[30,0,[\"blueprints\",\"projectDescription\",\"length\"]],20],null],[[[1,\"            \"],[11,\"button\"],[24,0,\"btn btn-primary ms-2\"],[24,4,\"button\"],[4,[38,7],[\"click\",[30,0,[\"blueprints\",\"getAI\"]]],null],[12],[1,\"Set up Junction →\"],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,\"button\"],[14,\"disabled\",\"\"],[15,0,[29,[\"btn btn-\",[30,0,[\"colormodes\",\"mode\"]],\" ms-2\"]]],[14,4,\"button\"],[12],[1,\"Set up Junction →\"],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"button\",\"textarea\",\"if\",\"i\",\"gte\",\"on\"]]",
    "moduleName": "junction/components/types/blueprints/ai-prompt.hbs",
    "isStrictMode": false
  });
  let TypesBlueprintsAiPromptComponent = _exports.default = (_class = class TypesBlueprintsAiPromptComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "blueprints", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesBlueprintsAiPromptComponent);
});
;define("junction/components/types/blueprints/json-editor", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "6jNZ1RS7",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "junction/components/types/blueprints/json-editor.hbs",
    "isStrictMode": false
  });
  class TypesBlueprintsJsonEditorComponent extends _component2.default {}
  _exports.default = TypesBlueprintsJsonEditorComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesBlueprintsJsonEditorComponent);
});
;define("junction/components/types/blueprints/sample-data", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _service, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="sampleDataPromptModal"
    tabindex="-1"
    aria-labelledby="sampleDataPromptModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fst-italic fs-5"
            id="sampleDataPromptModalLabel"
          >Sample Data for
            <span
              class="text-capitalize"
            >{{this.type.currentType.plural}}</span></h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Are you sure you wish to generate sample data? Executing this will add 3
          to 10 sample objects to this track.
        </div>
        <div
          class="modal-footer d-flex align-items-center justify-content-end p-0"
        >
          <div class="d-flex align-items-center justify-content-end">
            <button
              {{on "click" this.blueprints.getSampleData}}
              type="button"
              class="btn btn-primary ms-2"
            >Generate sample data &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "2XSuvy5r",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"sampleDataPromptModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"sampleDataPromptModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fst-italic fs-5\"],[14,1,\"sampleDataPromptModalLabel\"],[12],[1,\"Sample Data for\\n          \"],[10,1],[14,0,\"text-capitalize\"],[12],[1,[30,0,[\"type\",\"currentType\",\"plural\"]]],[13],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        Are you sure you wish to generate sample data? Executing this will add 3\\n        to 10 sample objects to this track.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-end p-0\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n          \"],[11,\"button\"],[24,0,\"btn btn-primary ms-2\"],[24,4,\"button\"],[4,[38,4],[\"click\",[30,0,[\"blueprints\",\"getSampleData\"]]],null],[12],[1,\"Generate sample data →\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"h1\",\"span\",\"button\",\"on\"]]",
    "moduleName": "junction/components/types/blueprints/sample-data.hbs",
    "isStrictMode": false
  });
  let TypesBlueprintsSampleDataComponent = _exports.default = (_class = class TypesBlueprintsSampleDataComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "blueprints", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesBlueprintsSampleDataComponent);
});
;define("junction/components/types/copy-object-modal", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#unless this.object.reloadingVars}}
  {{!-- Modal --}}
  <div class="modal fade" id="copyObjectModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Make a copy of this object?</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body fw-bold">
          {{this.object.currentObject.modules.title}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" {{on 'click' this.pushObject}}>Yes, make a copy</button>
        </div>
      </div>
    </div>
  </div>
  {{/unless}}
  */
  {
    "id": "EEPmD9ug",
    "block": "[[[41,[51,[30,0,[\"object\",\"reloadingVars\"]]],[[[10,0],[14,0,\"modal fade\"],[14,1,\"copyObjectModal\"],[14,\"tabindex\",\"-1\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-centered\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[12],[1,\"Make a copy of this object?\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body fw-bold\"],[12],[1,\"\\n        \"],[1,[30,0,[\"object\",\"currentObject\",\"modules\",\"title\"]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn btn-secondary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,\"data-bs-dismiss\",\"modal\"],[24,4,\"button\"],[4,[38,4],[\"click\",[30,0,[\"pushObject\"]]],null],[12],[1,\"Yes, make a copy\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]],null]],[],false,[\"unless\",\"div\",\"h1\",\"button\",\"on\"]]",
    "moduleName": "junction/components/types/copy-object-modal.hbs",
    "isStrictMode": false
  });
  let TypesCopyObjectModalComponent = _exports.default = (_class = class TypesCopyObjectModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "object", _descriptor4, this);
    }
    async pushObject() {
      const vvv = this.object.currentObject.modules;
      delete vvv.id;
      delete vvv.slug;
      let obj = await this.store.createRecord(this.type.currentType.slug, {
        modules: {
          ...vvv
        }
      });
      await obj.save();
      this.type.loadTypeObjects(this.type.currentType);
      this.types.fetchAgain();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "pushObject", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pushObject"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesCopyObjectModalComponent);
});
;define("junction/components/types/delete-model", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "bootstrap", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _bootstrap, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Modal --}}
  <div class="modal fade" id="deleteModel" tabindex="-1" aria-labelledby="deleteModelLabel" aria-hidden="true" {{did-insert this.initModel}}>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="deleteModelLabel"><i class="fa-solid fa-triangle-exclamation"></i> Remove Track: <strong>{{this.type.currentType.slug}}</strong></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        	<h4>Are you sure you wish to disable this track? The objects in the track do NOT get deleted.</h4>
        	<h4 class="text-danger">{{this.type.currentType.slug}}</h4>
        </div>
        <div class="modal-footer p-1 d-flex align-items-center justify-content-between">
          <button type="button" {{on 'click' this.delete}} class="btn btn-danger">Confirm remove track</button>
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "637HM+mM",
    "block": "[[[11,0],[24,0,\"modal fade\"],[24,1,\"deleteModel\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"deleteModelLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[[30,0,[\"initModel\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"deleteModelLabel\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-triangle-exclamation\"],[12],[13],[1,\" Remove Track: \"],[10,\"strong\"],[12],[1,[30,0,[\"type\",\"currentType\",\"slug\"]]],[13],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n      \\t\"],[10,\"h4\"],[12],[1,\"Are you sure you wish to disable this track? The objects in the track do NOT get deleted.\"],[13],[1,\"\\n      \\t\"],[10,\"h4\"],[14,0,\"text-danger\"],[12],[1,[30,0,[\"type\",\"currentType\",\"slug\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer p-1 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-danger\"],[24,4,\"button\"],[4,[38,7],[\"click\",[30,0,[\"delete\"]]],null],[12],[1,\"Confirm remove track\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"div\",\"did-insert\",\"h1\",\"i\",\"strong\",\"button\",\"h4\",\"on\"]]",
    "moduleName": "junction/components/types/delete-model.hbs",
    "isStrictMode": false
  });
  let TypesDeleteModelComponent = _exports.default = (_class = class TypesDeleteModelComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "modelBox", _descriptor4, this);
    }
    initModel() {
      this.modelBox = new _bootstrap.Modal(document.getElementById('deleteModel'), {});
      const myModalEl = document.getElementById('deleteModel');
      myModalEl.addEventListener('hidden.bs.modal', async event => {
        this.types.fetchAgain();
      });
    }
    async delete() {
      if (this.type.currentType.slug !== undefined) {
        delete this.types.json.modules[this.type.currentType.slug];
        await this.types.json.save();
        this.modelBox.hide();
        (0, _runloop.later)(this, () => {
          this.router.transitionTo('index');
        }, 700);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "modelBox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initModel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesDeleteModelComponent);
});
;define("junction/components/types/edit-model", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "bootstrap", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _bootstrap, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="editModel"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="editModelLabel"
    aria-hidden="true"
    {{did-insert this.initModel}}
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editModelLabel"><i
              class="fa-solid fa-edit"
            ></i>
            Edit Track</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
  
        <div class="modal-body">
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">singular</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <Input
                @type="text"
                @value={{this.trackName}}
                class="form-control"
                placeholder="Eg. category"
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Please give a name in singular format</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">plural</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <Input
                @type="text"
                @value={{this.trackPlural}}
                class="form-control"
                placeholder="Eg. categories"
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Please give a name in plural format</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">URL</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <Input
                @type="text"
                @value={{this.trackURL}}
                class="form-control"
                placeholder="https://domain.tld/{{this.type.currentType.slug}}"
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Viewing URL to prepend (optional)</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">description</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <Input
                @type="text"
                @value={{this.trackDescription}}
                class="form-control"
                placeholder="(optional description)"
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">A short description (optional)</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-center my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">editable?</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <XToggle
                @theme="ios"
                @variant={{this.colormodes.mode}}
                @value={{this.editable}}
                @onToggle={{fn (mut this.editable)}}
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Editing allowed after creation</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-center my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">readonly?</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <XToggle
                @theme="ios"
                @variant={{this.colormodes.mode}}
                @value={{this.readonly}}
                @onToggle={{fn (mut this.readonly)}}
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">New creation not allowed</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-center my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">sendable?</label>
            </div>
  
            <div class="my-1 col-12 col-md-7">
              <XToggle
                @theme="ios"
                @variant={{this.colormodes.mode}}
                @value={{this.sendable}}
                @onToggle={{fn (mut this.sendable)}}
              />
            </div>
  
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Triggers the Hook URL on-send, and is
                non-editable after sending.</span>
            </div>
          </div>
  
          {{#if this.sendable}}
            <div class="row g-3 align-items-start my-3 pb-3">
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">on_create</label>
              </div>
  
              <div class="my-1 col-12 col-md-7">
                <Input
                  @type="url"
                  @value={{mut (get this.apiHooks "on_create")}}
                  class="form-control"
                  placeholder="https://...."
                />
              </div>
  
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Create Hook URL</span>
              </div>
            </div>
  
            <div class="row g-3 align-items-start my-3 pb-3">
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">on_read</label>
              </div>
  
              <div class="my-1 col-12 col-md-7">
                <Input
                  @type="url"
                  @value={{mut (get this.apiHooks "on_read")}}
                  class="form-control"
                  placeholder="https://...."
                />
              </div>
  
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Read Hook URL</span>
              </div>
            </div>
  
            <div class="row g-3 align-items-start my-3 pb-3">
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">on_update</label>
              </div>
  
              <div class="my-1 col-12 col-md-7">
                <Input
                  @type="url"
                  @value={{mut (get this.apiHooks "on_update")}}
                  class="form-control"
                  placeholder="https://...."
                />
              </div>
  
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Update Hook URL</span>
              </div>
            </div>
  
            <div class="row g-3 align-items-start my-3 pb-3">
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">on_delete</label>
              </div>
  
              <div class="my-1 col-12 col-md-7">
                <Input
                  @type="url"
                  @value={{mut (get this.apiHooks "on_delete")}}
                  class="form-control"
                  placeholder="https://...."
                />
              </div>
  
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Delete Hook URL</span>
              </div>
            </div>
          {{/if}}
        </div>
  
        <div
          class="modal-footer p-1 d-flex align-items-center justify-content-between"
        >
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >Close without saving</button>
          <button
            type="button"
            {{on "click" this.save}}
            class="btn btn-primary"
          >Save changes</button>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "7tn/IzKk",
    "block": "[[[11,0],[24,0,\"modal fade\"],[24,1,\"editModel\"],[24,\"tabindex\",\"-1\"],[24,\"data-bs-backdrop\",\"static\"],[24,\"aria-labelledby\",\"editModelLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[[30,0,[\"initModel\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"editModelLabel\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-edit\"],[12],[13],[1,\"\\n          Edit Track\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"singular\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"Eg. category\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackName\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Please give a name in singular format\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"plural\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"Eg. categories\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackPlural\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Please give a name in plural format\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"URL\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,6],[[24,0,\"form-control\"],[16,\"placeholder\",[29,[\"https://domain.tld/\",[30,0,[\"type\",\"currentType\",\"slug\"]]]]]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackURL\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Viewing URL to prepend (optional)\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"description\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"(optional description)\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackDescription\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"A short description (optional)\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-center my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"editable?\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,8],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"editable\"]],[28,[37,9],[[28,[37,10],[[30,0,[\"editable\"]]],null]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Editing allowed after creation\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-center my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"readonly?\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,8],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"readonly\"]],[28,[37,9],[[28,[37,10],[[30,0,[\"readonly\"]]],null]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"New creation not allowed\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-center my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"sendable?\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,8],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"sendable\"]],[28,[37,9],[[28,[37,10],[[30,0,[\"sendable\"]]],null]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Triggers the Hook URL on-send, and is\\n              non-editable after sending.\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"sendable\"]],[[[1,\"          \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"on_create\"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"https://....\"]],[[\"@type\",\"@value\"],[\"url\",[28,[37,10],[[28,[37,12],[[30,0,[\"apiHooks\"]],\"on_create\"],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Create Hook URL\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"on_read\"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"https://....\"]],[[\"@type\",\"@value\"],[\"url\",[28,[37,10],[[28,[37,12],[[30,0,[\"apiHooks\"]],\"on_read\"],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Read Hook URL\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"on_update\"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"https://....\"]],[[\"@type\",\"@value\"],[\"url\",[28,[37,10],[[28,[37,12],[[30,0,[\"apiHooks\"]],\"on_update\"],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Update Hook URL\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"on_delete\"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"https://....\"]],[[\"@type\",\"@value\"],[\"url\",[28,[37,10],[[28,[37,12],[[30,0,[\"apiHooks\"]],\"on_delete\"],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Delete Hook URL\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"modal-footer p-1 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close without saving\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,13],[\"click\",[30,0,[\"save\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"did-insert\",\"h1\",\"i\",\"button\",\"label\",\"input\",\"span\",\"x-toggle\",\"fn\",\"mut\",\"if\",\"get\",\"on\"]]",
    "moduleName": "junction/components/types/edit-model.hbs",
    "isStrictMode": false
  });
  let TypesEditModelComponent = _exports.default = (_class = class TypesEditModelComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "trackName", _descriptor, this);
      _initializerDefineProperty(this, "trackPlural", _descriptor2, this);
      _initializerDefineProperty(this, "trackURL", _descriptor3, this);
      _initializerDefineProperty(this, "trackDescription", _descriptor4, this);
      _initializerDefineProperty(this, "apiHooks", _descriptor5, this);
      _initializerDefineProperty(this, "sendable", _descriptor6, this);
      _initializerDefineProperty(this, "readonly", _descriptor7, this);
      _initializerDefineProperty(this, "editable", _descriptor8, this);
      _initializerDefineProperty(this, "trackPrimary", _descriptor9, this);
      _initializerDefineProperty(this, "types", _descriptor0, this);
      _initializerDefineProperty(this, "colormodes", _descriptor1, this);
      _initializerDefineProperty(this, "type", _descriptor10, this);
      _initializerDefineProperty(this, "modelBox", _descriptor11, this);
      _defineProperty(this, "convertToSlug", Text => {
        return Text.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '').replace(/-/g, '_');
      });
    }
    get initiatedType() {}
    initModel() {
      this.modelBox = new _bootstrap.Modal(document.getElementById('editModel'), {});
      const myModalEl = document.getElementById('editModel');
      myModalEl.addEventListener('hidden.bs.modal', async event => {
        this.types.fetchAgain();
      });
      myModalEl.addEventListener('show.bs.modal', async event => {
        let typeSlug = this.type.currentType.slug;
        this.trackName = this.types.json.modules[typeSlug]['name'];
        this.trackPlural = this.types.json.modules[typeSlug]['plural'];
        this.trackURL = this.types.json.modules[typeSlug]['url'];
        this.trackDescription = this.types.json.modules[typeSlug]['description'];
        this.apiHooks = this.types.json.modules[typeSlug]['api_hooks'];
        this.sendable = this.types.json.modules[typeSlug]['sendable'];
        this.readonly = this.types.json.modules[typeSlug]['readonly'];
        this.editable = this.types.json.modules[typeSlug]['editable'] !== undefined ? this.types.json.modules[typeSlug]['editable'] : true;
      });
    }
    async save(e) {
      if (this.trackName != '' && this.trackPlural != '') {
        this.colormodes.buttonLoading(e);
        let typeSlug = this.type.currentType.slug;
        this.types.json.modules[typeSlug]['name'] = this.trackName;
        this.types.json.modules[typeSlug]['plural'] = this.trackPlural;
        this.types.json.modules[typeSlug]['url'] = this.trackURL;
        this.types.json.modules[typeSlug]['description'] = this.trackDescription;
        this.types.json.modules[typeSlug]['api_hooks'] = this.apiHooks;
        this.types.json.modules[typeSlug]['sendable'] = this.sendable;
        this.types.json.modules[typeSlug]['readonly'] = this.readonly;
        this.types.json.modules[typeSlug]['editable'] = this.editable;
        await this.types.json.save();
        await this.types.fetchAgain();
        this.colormodes.buttonUnloading(e);
        this.modelBox.hide();
      } else {
        alert('Name and plural are compulsory.');
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "trackName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "trackPlural", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "trackURL", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "trackDescription", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "apiHooks", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "sendable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "readonly", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "editable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "trackPrimary", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'title';
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "modelBox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initModel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditModelComponent);
});
;define("junction/components/types/edit-object-modal", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "@ember/runloop", "@ember/array", "junction/config/environment", "@editorjs/editorjs", "@editorjs/image", "@editorjs/header", "@editorjs/raw", "@editorjs/code", "@editorjs/marker", "@editorjs/quote", "@editorjs/delimiter", "@editorjs/list", "@editorjs/attaches", "@editorjs/footnotes", "@editorjs/table", "editorjs-hyperlink", "fetch", "bootstrap", "ember-modifier", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _runloop, _array, _environment, _editorjs, _image, _header, _raw, _code, _marker, _quote, _delimiter, _list, _attaches, _footnotes, _table, _editorjsHyperlink, _fetch, _bootstrap, _emberModifier, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/runloop",0,"@ember/array",0,"junction/config/environment",0,"@editorjs/editorjs",0,"@editorjs/image",0,"@editorjs/header",0,"@editorjs/raw",0,"@editorjs/code",0,"@editorjs/marker",0,"@editorjs/quote",0,"@editorjs/delimiter",0,"@editorjs/list",0,"@editorjs/attaches",0,"@editorjs/footnotes",0,"@editorjs/table",0,"editorjs-hyperlink",0,"fetch",0,"bootstrap",0,"ember-modifier",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!
    This is the edit form modal which is able to edit
  }}
  {{#unless this.object.reloadingVars}}
    {{! Modal }}
    <div
      class="modal fade"
      id="editObjectModal{{if
        @multiEdit
        (concat '-' this.type.currentType.slug '-multi')
      }}"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="editObjectModalLabel"
      aria-hidden="true"
      {{this.onload}}
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
      >
        <div class="modal-content">
          <div class="modal-header align-items-center">
            <div class="modal-title" id="editObjectModalLabel">
              <div class="fs-5 text-capitalize">{{this.type.currentType.name}}
                #{{this.object.currentObject.id}}</div>
              {{#if this.object.currentObject.id}}
                <p
                  class="small text-muted fw-bold mb-0"
                >{{this.object.currentObject.modules.slug}}
                  <span {{on "click" this.updateSlug}}><i
                      class="fa-solid fa-arrows-rotate"
                    ></i></span></p>
              {{/if}}
            </div>
            <button
              type="button"
              id="editObjectModal-close{{if
                @multiEdit
                (concat '-' this.type.currentType.slug '-multi')
              }}"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {{yield}}
  
            {{#if (eq this.type.currentType.slug "deleted_record")}}
              <h4>Are you sure you wish the permanently delete the selected
                record(s)?</h4>
            {{else}}
  
              {{#each this.type.currentType.modules as |module|}}
  
                {{#if
                  (and
                    (or
                      (not this.object.viaPublicForm)
                      (this.indexOf
                        this.type.currentType.public_form.modules
                        module.input_slug
                      )
                    )
                    (not
                      (or
                        (and @multiEdit module.input_primary)
                        (and @multiEdit (eq module.input_multiple true))
                        (and @multiEdit (eq module.input_type "file_uploader"))
                        (and @multiEdit (eq module.input_type "editorjs"))
                      )
                    )
                  )
                }}
  
                  {{#if (eq module.input_type "checkbox")}}
                    <InputFields::Checkbox
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                    />
  
                  {{else if (eq module.input_type "editorjs")}}
                    <InputFields::Editorjs
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                      @initEditorJS={{this.initEditorJS}}
                      @uninitEditorJS={{this.uninitEditorJS}}
                      @saveEditorData={{this.saveEditorData}}
                    />
  
                  {{else if (eq module.input_type "typeout")}}
                    <InputFields::Typeout
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                    />
  
                  {{else if (eq module.input_type "file_uploader")}}
                    <InputFields::FileUploader
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                    />
  
                  {{else if (eq module.input_type "select")}}
                    <InputFields::Select
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                      @multiEdit={{@multiEdit}}
                    />
  
                  {{else if
                    (or
                      (eq module.input_type "textarea")
                      (eq module.input_type "json")
                    )
                  }}
                    <InputFields::Textarea
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                    />
  
                  {{else if (eq module.input_type "uuid-v4")}}
                    <InputFields::UuidV4
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                    />
  
                  {{else if (eq module.input_type "storylang-stack")}}
                    <InputFields::StorylangStack
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                    />
  
                  {{else if (eq module.input_type "visual-guide")}}
                    <InputFields::VisualGuide
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                    />
  
                  {{else}}
                    <InputFields::Text
                      @mutObjectModuleValue={{this.mutObjectModuleValue}}
                      @type={{this.type.currentType}}
                      @module={{module}}
                      @id={{this.objectID}}
                      @object={{this.objectModules}}
                      @addToMultiField={{this.addToMultiField}}
                      @removeFromMultiField={{this.removeFromMultiField}}
                    />
  
                  {{/if}}
  
                {{/if}}
  
              {{/each}}
            {{/if}}
          </div>
          <div class="modal-footer p-0">
            <InputFields::Text
              @module={{hash input_slug="type" input_type="hidden"}}
              @object={{this.objectModules}}
            />
            <div class="w-100 d-flex align-items-center justify-content-between">
  
              {{#if this.object.currentObject.id}}
                <InputFields::Text
                  @module={{hash input_slug="id" input_type="hidden"}}
                  @object={{this.objectModules}}
                />
  
                <div class="d-flex justify-content-start align-items-center">
                  <div class="d-flex justify-content-start align-items-start">
                    <button
                      {{on "click" this.areYouSure}}
                      type="button"
                      class="btn btn-danger"
                    ><i class="fa-solid fa-trash"></i></button>
                  </div>
                  <div
                    class="{{this.deleteSurity}}
                      justify-content-start align-items-center"
                    id="deleteObjectConfirmation-{{this.object.currentObject.id}}"
                  >
                    <div class="mx-2">Are you sure?</div>
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn btn-sm btn-danger me-1"
                      {{on "click" this.deleteObject}}
                    >Yes, delete it</button>
                    <button
                      type="button"
                      class="btn btn-sm btn-secondary me-1"
                      {{on "click" this.notSoSure}}
                    >No, keep it</button>
                  </div>
                </div>
  
                {{#if (eq this.type.currentType.slug "deleted_record")}}
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    data-bs-dismiss="modal"
                  >Close without deleting</button>
                {{else}}
                  <button
                    type="button"
                    class="btn btn-primary"
                    {{on "click" this.pushObject}}
                  >Save changes</button>
                {{/if}}
  
              {{else}}
                {{#if @multiEdit}}
  
                  <div class="d-flex justify-content-start align-items-center">
                    <div class="d-flex justify-content-start align-items-start">
                      <button
                        {{on "click" this.areYouSure}}
                        type="button"
                        class="btn btn-danger"
                      ><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div
                      class="{{this.deleteSurity}}
                        justify-content-start align-items-center"
                      id="deleteObjectConfirmation-{{this.type.currentType.slug}}-multi"
                    >
                      <div class="mx-2">Delete ALL selected objects?</div>
                      <button
                        data-bs-dismiss="modal"
                        type="button"
                        class="btn btn-sm btn-danger me-1"
                        {{on
                          "click"
                          (fn this.deleteObjects this.type.selectedRowIDs)
                        }}
                      >Yes, delete them</button>
                      <button
                        type="button"
                        class="btn btn-sm btn-secondary me-1"
                        {{on "click" this.notSoSure}}
                      >No, keep them</button>
                    </div>
                  </div>
  
                  {{#if (eq this.type.currentType.slug "deleted_record")}}
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      data-bs-dismiss="modal"
                    >Close without deleting</button>
                  {{else}}
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      class="btn btn-primary"
                      {{on
                        "click"
                        (fn this.pushObjects this.type.selectedRowIDs)
                      }}
                    >Multi-edit save {{this.type.currentType.name}}</button>
                  {{/if}}
                {{else}}
  
                  <div>&nbsp;</div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    {{on "click" this.pushObject}}
                  >Create new {{this.type.currentType.name}}</button>
  
                {{/if}}
              {{/if}}
            </div>
          </div>
        </div>
      </div>
    </div>
  {{/unless}}
  */
  {
    "id": "ff2UmHvv",
    "block": "[[[41,[51,[30,0,[\"object\",\"reloadingVars\"]]],[[[1,\"  \"],[11,0],[24,0,\"modal fade\"],[16,1,[29,[\"editObjectModal\",[52,[30,1],[28,[37,3],[\"-\",[30,0,[\"type\",\"currentType\",\"slug\"]],\"-multi\"],null]]]]],[24,\"data-bs-backdrop\",\"static\"],[24,\"data-bs-keyboard\",\"false\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"editObjectModalLabel\"],[24,\"aria-hidden\",\"true\"],[4,[30,0,[\"onload\"]],null,null],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"modal-header align-items-center\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"modal-title\"],[14,1,\"editObjectModalLabel\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"fs-5 text-capitalize\"],[12],[1,[30,0,[\"type\",\"currentType\",\"name\"]]],[1,\"\\n              #\"],[1,[30,0,[\"object\",\"currentObject\",\"id\"]]],[13],[1,\"\\n\"],[41,[30,0,[\"object\",\"currentObject\",\"id\"]],[[[1,\"              \"],[10,2],[14,0,\"small text-muted fw-bold mb-0\"],[12],[1,[30,0,[\"object\",\"currentObject\",\"modules\",\"slug\"]]],[1,\"\\n                \"],[11,1],[4,[38,6],[\"click\",[30,0,[\"updateSlug\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-arrows-rotate\"],[12],[13],[13],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n          \"],[10,\"button\"],[15,1,[29,[\"editObjectModal-close\",[52,[30,1],[28,[37,3],[\"-\",[30,0,[\"type\",\"currentType\",\"slug\"]],\"-multi\"],null]]]]],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n          \"],[18,3,null],[1,\"\\n\\n\"],[41,[28,[37,10],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[[[1,\"            \"],[10,\"h4\"],[12],[1,\"Are you sure you wish the permanently delete the selected\\n              record(s)?\"],[13],[1,\"\\n\"]],[]],[[[1,\"\\n\"],[42,[28,[37,13],[[28,[37,13],[[30,0,[\"type\",\"currentType\",\"modules\"]]],null]],null],null,[[[1,\"\\n\"],[41,[28,[37,14],[[28,[37,15],[[28,[37,16],[[30,0,[\"object\",\"viaPublicForm\"]]],null],[28,[30,0,[\"indexOf\"]],[[30,0,[\"type\",\"currentType\",\"public_form\",\"modules\"]],[30,2,[\"input_slug\"]]],null]],null],[28,[37,16],[[28,[37,15],[[28,[37,14],[[30,1],[30,2,[\"input_primary\"]]],null],[28,[37,14],[[30,1],[28,[37,10],[[30,2,[\"input_multiple\"]],true],null]],null],[28,[37,14],[[30,1],[28,[37,10],[[30,2,[\"input_type\"]],\"file_uploader\"],null]],null],[28,[37,14],[[30,1],[28,[37,10],[[30,2,[\"input_type\"]],\"editorjs\"],null]],null]],null]],null]],null],[[[1,\"\\n\"],[41,[28,[37,10],[[30,2,[\"input_type\"]],\"checkbox\"],null],[[[1,\"                  \"],[8,[39,17],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"editorjs\"],null],[[[1,\"                  \"],[8,[39,18],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@initEditorJS\",\"@uninitEditorJS\",\"@saveEditorData\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]],[30,0,[\"initEditorJS\"]],[30,0,[\"uninitEditorJS\"]],[30,0,[\"saveEditorData\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"typeout\"],null],[[[1,\"                  \"],[8,[39,19],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"file_uploader\"],null],[[[1,\"                  \"],[8,[39,20],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"select\"],null],[[[1,\"                  \"],[8,[39,21],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\",\"@multiEdit\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]],[30,1]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,15],[[28,[37,10],[[30,2,[\"input_type\"]],\"textarea\"],null],[28,[37,10],[[30,2,[\"input_type\"]],\"json\"],null]],null],[[[1,\"                  \"],[8,[39,22],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"uuid-v4\"],null],[[[1,\"                  \"],[8,[39,23],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"storylang-stack\"],null],[[[1,\"                  \"],[8,[39,24],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]]]],null],[1,\"\\n\\n\"]],[]],[[[41,[28,[37,10],[[30,2,[\"input_type\"]],\"visual-guide\"],null],[[[1,\"                  \"],[8,[39,25],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]]]],null],[1,\"\\n\\n\"]],[]],[[[1,\"                  \"],[8,[39,26],null,[[\"@mutObjectModuleValue\",\"@type\",\"@module\",\"@id\",\"@object\",\"@addToMultiField\",\"@removeFromMultiField\"],[[30,0,[\"mutObjectModuleValue\"]],[30,0,[\"type\",\"currentType\"]],[30,2],[30,0,[\"objectID\"]],[30,0,[\"objectModules\"]],[30,0,[\"addToMultiField\"]],[30,0,[\"removeFromMultiField\"]]]],null],[1,\"\\n\\n                \"]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]]],[]]],[1,\"\\n\"]],[]],null],[1,\"\\n\"]],[2]],null]],[]]],[1,\"        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"modal-footer p-0\"],[12],[1,\"\\n          \"],[8,[39,26],null,[[\"@module\",\"@object\"],[[28,[37,27],null,[[\"input_slug\",\"input_type\"],[\"type\",\"hidden\"]]],[30,0,[\"objectModules\"]]]],null],[1,\"\\n          \"],[10,0],[14,0,\"w-100 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"object\",\"currentObject\",\"id\"]],[[[1,\"              \"],[8,[39,26],null,[[\"@module\",\"@object\"],[[28,[37,27],null,[[\"input_slug\",\"input_type\"],[\"id\",\"hidden\"]]],[30,0,[\"objectModules\"]]]],null],[1,\"\\n\\n              \"],[10,0],[14,0,\"d-flex justify-content-start align-items-center\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"d-flex justify-content-start align-items-start\"],[12],[1,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-danger\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"areYouSure\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-trash\"],[12],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[15,0,[29,[[30,0,[\"deleteSurity\"]],\"\\n                    justify-content-start align-items-center\"]]],[15,1,[29,[\"deleteObjectConfirmation-\",[30,0,[\"object\",\"currentObject\",\"id\"]]]]],[12],[1,\"\\n                  \"],[10,0],[14,0,\"mx-2\"],[12],[1,\"Are you sure?\"],[13],[1,\"\\n                  \"],[11,\"button\"],[24,\"data-bs-dismiss\",\"modal\"],[24,0,\"btn btn-sm btn-danger me-1\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"deleteObject\"]]],null],[12],[1,\"Yes, delete it\"],[13],[1,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary me-1\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"notSoSure\"]]],null],[12],[1,\"No, keep it\"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\\n\"],[41,[28,[37,10],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[[[1,\"                \"],[10,\"button\"],[14,0,\"btn btn-outline-primary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close without deleting\"],[13],[1,\"\\n\"]],[]],[[[1,\"                \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"pushObject\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"]],[]],[[[41,[30,1],[[[1,\"\\n                \"],[10,0],[14,0,\"d-flex justify-content-start align-items-center\"],[12],[1,\"\\n                  \"],[10,0],[14,0,\"d-flex justify-content-start align-items-start\"],[12],[1,\"\\n                    \"],[11,\"button\"],[24,0,\"btn btn-danger\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"areYouSure\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-trash\"],[12],[13],[13],[1,\"\\n                  \"],[13],[1,\"\\n                  \"],[10,0],[15,0,[29,[[30,0,[\"deleteSurity\"]],\"\\n                      justify-content-start align-items-center\"]]],[15,1,[29,[\"deleteObjectConfirmation-\",[30,0,[\"type\",\"currentType\",\"slug\"]],\"-multi\"]]],[12],[1,\"\\n                    \"],[10,0],[14,0,\"mx-2\"],[12],[1,\"Delete ALL selected objects?\"],[13],[1,\"\\n                    \"],[11,\"button\"],[24,\"data-bs-dismiss\",\"modal\"],[24,0,\"btn btn-sm btn-danger me-1\"],[24,4,\"button\"],[4,[38,6],[\"click\",[28,[37,28],[[30,0,[\"deleteObjects\"]],[30,0,[\"type\",\"selectedRowIDs\"]]],null]],null],[12],[1,\"Yes, delete them\"],[13],[1,\"\\n                    \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary me-1\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"notSoSure\"]]],null],[12],[1,\"No, keep them\"],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n\"],[41,[28,[37,10],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[[[1,\"                  \"],[10,\"button\"],[14,0,\"btn btn-outline-primary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close without deleting\"],[13],[1,\"\\n\"]],[]],[[[1,\"                  \"],[11,\"button\"],[24,\"data-bs-dismiss\",\"modal\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,6],[\"click\",[28,[37,28],[[30,0,[\"pushObjects\"]],[30,0,[\"type\",\"selectedRowIDs\"]]],null]],null],[12],[1,\"Multi-edit save \"],[1,[30,0,[\"type\",\"currentType\",\"name\"]]],[13],[1,\"\\n\"]],[]]]],[]],[[[1,\"\\n                \"],[10,0],[12],[1,\" \"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"pushObject\"]]],null],[12],[1,\"Create new \"],[1,[30,0,[\"type\",\"currentType\",\"name\"]]],[13],[1,\"\\n\\n\"]],[]]]],[]]],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"@multiEdit\",\"module\",\"&default\"],false,[\"unless\",\"div\",\"if\",\"concat\",\"p\",\"span\",\"on\",\"i\",\"button\",\"yield\",\"eq\",\"h4\",\"each\",\"-track-array\",\"and\",\"or\",\"not\",\"input-fields/checkbox\",\"input-fields/editorjs\",\"input-fields/typeout\",\"input-fields/file-uploader\",\"input-fields/select\",\"input-fields/textarea\",\"input-fields/uuid-v4\",\"input-fields/storylang-stack\",\"input-fields/visual-guide\",\"input-fields/text\",\"hash\",\"fn\"]]",
    "moduleName": "junction/components/types/edit-object-modal.hbs",
    "isStrictMode": false
  });
  let TypesEditObjectModalComponent = _exports.default = (_class = class TypesEditObjectModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "types", _descriptor3, this);
      _initializerDefineProperty(this, "type", _descriptor4, this);
      _initializerDefineProperty(this, "colormodes", _descriptor5, this);
      _initializerDefineProperty(this, "object", _descriptor6, this);
      _defineProperty(this, "indexOf", (arr, slug) => {
        let publicModules = JSON.parse(arr);
        if (publicModules[slug] !== undefined && publicModules[slug] !== false) return true;else return false;
      });
      _initializerDefineProperty(this, "objectModules", _descriptor7, this);
      _initializerDefineProperty(this, "objectID", _descriptor8, this);
      _initializerDefineProperty(this, "editorjsInstances", _descriptor9, this);
      _initializerDefineProperty(this, "doUpdateSlug", _descriptor0, this);
      _defineProperty(this, "onload", (0, _emberModifier.modifier)(el => {
        el.addEventListener('show.bs.modal', this.cleanVarsOnModalOpen(el));
      }));
      _initializerDefineProperty(this, "deleteSurity", _descriptor1, this);
    }
    async pushObjects() {
      let vvv = this.objectModules;
      await this.type.selectedRowIDs[this.type.currentType.slug].forEach(id => {
        this.store.findRecord(this.type.currentType.slug, id).then(obj => {
          obj.modules = {
            ...vvv
          };
          obj.save();
          if (this.type.currentType.api_hooks !== undefined && this.type.currentType.api_hooks.on_update !== undefined && this.type.currentType.api_hooks.on_update != '') {
            (0, _fetch.default)(this.type.currentType.api_hooks.on_update, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: obj.id
              })
            });
          }
        });
      });
      this.type.emptySelectedRowsInType(this.type.currentType.slug);
      this.type.loadTypeObjects(this.type.currentType);
      this.types.fetchAgain();
    }
    async deleteObjects() {
      await this.type.selectedRowIDs[this.type.currentType.slug].forEach(id => {
        this.store.findRecord(this.type.currentType.slug, id).then(async obj => {
          await obj.destroyRecord();
          if (this.type.currentType.api_hooks !== undefined && this.type.currentType.api_hooks.on_delete !== undefined && this.type.currentType.api_hooks.on_delete != '' && id !== undefined) {
            (0, _fetch.default)(this.type.currentType.api_hooks.on_delete, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: id
              })
            });
          }
        });
      });
      this.type.emptySelectedRowsInType(this.type.currentType.slug);
      this.types.fetchAgain();
    }
    async pushObject(e) {
      if (e !== undefined) {
        this.colormodes.buttonLoading(e);
      }
      //save all modules that are type=editorjs in the object
      //because image data does no auto-save in component input-fields/editorjs

      let promises = [];
      this.type.currentType.modules.forEach(module => {
        const promise = new Promise((resolve, reject) => {
          if (module.input_type == 'editorjs' || (module.input_type == 'text' || module.input_type == 'textarea' || module.input_type == 'color' || module.input_type == 'date' || module.input_type == 'datetime-local' || module.input_type == 'email' || module.input_type == 'url') && module.input_multiple === true) {
            if (module.input_type == 'editorjs') {
              this.saveEditorData(module.input_slug, this.objectID).then(outputData => {
                this.mutObjectModuleValue(module.input_slug, outputData, false);
                resolve();
                var ejsTarget = `${this.type.currentType.slug}-${module.input_slug}`;
                if (this.editorjsInstances != [] && this.editorjsInstances[ejsTarget] !== undefined) this.editorjsInstances[ejsTarget].destroy();
              });
            } else {
              const mtxtId = `${this.type.currentType.slug}-${module.input_slug}-${this.objectID}`;
              const inputs = document.querySelectorAll("[name='" + mtxtId + "[]']");
              let j = 0;
              for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value.trim() != '') {
                  this.mutObjectModuleValue(module.input_slug, inputs[i].value, true, j);
                  j++;
                }
              }
              resolve();
            }
          } else {
            resolve();
            return;
          }
        });
        promises.push(promise);
      });
      await Promise.all(promises);
      const vvv = this.objectModules;
      delete vvv.slug_update;
      if (this.doUpdateSlug == true) {
        vvv.slug_update = true;
        this.doUpdateSlug = false;
      }
      if (this.object.viaPublicForm === true && !vvv.content_privacy) {
        vvv.content_privacy = 'private';
      }

      //if mandatory fields have not been filled
      let stop = false;
      if (!this.type.currentType.sendable && vvv.content_privacy !== undefined && !(vvv.content_privacy == '' || vvv.content_privacy == 'draft')) {
        this.type.currentType.modules.forEach(module => {
          if (module.input_required === true) {
            let slg = module.input_slug;
            if (!vvv[slg]) {
              stop = true;
            }
          }
        });
      }
      if (stop === true) {
        alert('Please fill all mandatory fields.');
        if (e !== undefined) {
          this.colormodes.buttonUnloading(e);
        }
      } else {
        if (this.object.currentObject !== null && this.object.currentObject !== undefined && this.object.currentObject.id !== null) {
          this.store.findRecord(this.object.currentObject.modules.type, this.object.currentObject.modules.id).then(obj => {
            obj.modules = vvv;
            obj.save();
            if (this.type.currentType.api_hooks !== undefined && this.type.currentType.api_hooks.on_update !== undefined && this.type.currentType.api_hooks.on_update != '' && obj.id !== undefined) {
              (0, _fetch.default)(this.type.currentType.api_hooks.on_update, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: obj.id
                })
              });
            }
            let editModal = _bootstrap.Modal.getOrCreateInstance('#editObjectModal');
            editModal.hide();
          });
        } else {
          let obj = await this.store.createRecord(this.type.currentType.slug, {
            modules: {
              ...vvv
            }
          });
          await obj.save();
          if (this.type.currentType.api_hooks !== undefined && this.type.currentType.api_hooks.on_create !== undefined && this.type.currentType.api_hooks.on_create != '' && obj.id !== undefined) {
            (0, _fetch.default)(this.type.currentType.api_hooks.on_create, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: obj.id
              })
            });
          }
          this.type.loadTypeObjects(this.type.currentType);
          this.objectID = 'new';
          this.cleanVarsIfNew();
          this.object.activateCurrentObject(obj);
          let editModal = _bootstrap.Modal.getOrCreateInstance('#editObjectModal');
          editModal.hide();
        }
        this.types.fetchAgain();
        if (e !== undefined) {
          this.colormodes.buttonUnloading(e);
        }
      }
    }
    async deleteObject() {
      if (this.object.currentObject !== null && this.object.currentObject !== undefined && this.object.currentObject.id !== null) {
        let obj = this.store.peekRecord(this.object.currentObject.modules.type, this.object.currentObject.modules.id);
        var id = this.object.currentObject.modules.id;
        await obj.destroyRecord();
        if (this.type.currentType.api_hooks !== undefined && this.type.currentType.api_hooks.on_delete !== undefined && this.type.currentType.api_hooks.on_delete != '' && id !== undefined) {
          (0, _fetch.default)(this.type.currentType.api_hooks.on_delete, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id
            })
          });
        }
      }
      this.type.emptySelectedRowsInType(this.type.currentType.slug);
      this.types.fetchAgain();
    }
    notSoSure() {
      this.deleteSurity = 'd-none';
      this.deleteSurity = this.deleteSurity;
    }
    areYouSure() {
      this.deleteSurity = 'd-flex';
    }
    async uninitEditorJS(module_input_slug) {
      const ejsTarget = `${this.type.currentType.slug}-${module_input_slug}`;
      if (this.editorjsInstances != [] && this.editorjsInstances[ejsTarget] !== undefined && this.editorjsInstances[ejsTarget].blocks !== undefined) {
        this.editorjsInstances[ejsTarget].destroy();
      }
    }
    async initEditorJS(module_input_slug) {
      const ejsTarget = `${this.type.currentType.slug}-${module_input_slug}`;
      if (this.objectID == 'new' && this.editorjsInstances != [] && this.editorjsInstances[ejsTarget] !== undefined) this.editorjsInstances[ejsTarget].destroy();
      var editor_object_in_type = Object(this.type.currentType.modules).find(function (element) {
        if (element['input_slug'] == module_input_slug) return element;
      });
      let primaryPlaceholder = editor_object_in_type !== undefined && editor_object_in_type.input_placeholder !== undefined ? editor_object_in_type.input_placeholder : 'Type here...';

      //console.log('ejsTargets: ', ejsTarget);

      ejsInstance = new _editorjs.default({
        holder: ejsTarget,
        data: this.object.currentObject ? this.object.currentObject.modules[module_input_slug] : {},
        placeholder: editor_object_in_type.input_placeholder,
        tools: {
          paragraph: {
            tunes: ['footnotes']
          },
          header: {
            class: _header.default,
            config: {
              placeholder: editor_object_in_type.input_options !== undefined && editor_object_in_type.input_options.header_placeholder !== undefined ? editor_object_in_type.input_options.header_placeholder : 'Enter a header',
              defaultLevel: 4
            }
          },
          hyperlink: _editorjsHyperlink.default,
          image: {
            class: _image.default,
            config: {
              types: 'image/*, video/*',
              captionPlaceholder: editor_object_in_type.input_options !== undefined && editor_object_in_type.input_options.image_caption_placeholder !== undefined ? editor_object_in_type.input_options.image_caption_placeholder : 'Caption',
              endpoints: {
                byFile: _environment.default.TribeENV.API_URL + '/uploads.php',
                // Your backend file uploader endpoint
                byUrl: _environment.default.TribeENV.API_URL + '/uploads.php' // Your endpoint that provides uploading by Url
              }
            }
          },
          attaches: {
            class: _attaches.default,
            config: {
              endpoint: _environment.default.TribeENV.API_URL + '/uploads.php'
            }
          },
          quote: {
            class: _quote.default,
            inlineToolbar: true,
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: editor_object_in_type.input_options !== undefined && editor_object_in_type.input_options.quote_caption_placeholder !== undefined ? editor_object_in_type.input_options.quote_caption_placeholder : "Quote's author"
            }
          },
          table: _table.default,
          delimiter: _delimiter.default,
          Marker: {
            class: _marker.default
          },
          list: {
            class: _list.default,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            }
          },
          raw: {
            class: _raw.default,
            config: {
              placeholder: 'Embed code or any HTML code'
            }
          },
          code: {
            class: _code.default,
            config: {
              placeholder: 'Inline code for display within text'
            }
          },
          footnotes: {
            class: _footnotes.default,
            config: {
              placeholder: 'Footnotes'
            }
          }
        }
      });
      ejsInstance.isReady.then(i => {
        const editors = document.querySelectorAll(`#editObjectModal .codex-editor`);
        const editorsCount = editors.length;
        this.editorjsInstances[ejsTarget] = ejsInstance;
        //console.log(this.editorjsInstances);

        if (this.objectID == 'new') this.editorjsInstances[ejsTarget].blocks.clear();
      }).catch(e => {
        console.error('Error during Editor.js initialization:', e);
      });
    }
    async saveEditorData(module_input_slug, id) {
      var ejsId = `${this.type.currentType.slug}-${module_input_slug}`;
      if (!this.editorjsInstances[ejsId]) {
        console.error('editorJs save failed, editorjs instance not found');
        return;
      }
      const output = await this.editorjsInstances[ejsId].save().catch(error => {
        console.log('Saving failed: ', error);
      });
      return output;
    }
    mutObjectModuleValue(module_input_slug, value, is_array = false, index = 0) {
      if (is_array == true) {
        if (index == 0 && !Array.isArray(this.objectModules[module_input_slug])) this.objectModules[module_input_slug] = [];
        this.objectModules[module_input_slug][index] = value.trim();
      } else {
        if (this.objectModules[module_input_slug] === undefined) this.objectModules[module_input_slug] = '';
        this.objectModules[module_input_slug] = value;
      }
      if (this.args.multiEdit === true && Array.isArray(this.objectModules[module_input_slug]) && this.objectModules[module_input_slug].length == 0) {
        delete this.objectModules[module_input_slug];
      }
      this.objectModules = this.objectModules;
    }
    addToMultiField(module_input_slug, index = 0) {
      if (this.objectModules[module_input_slug] === undefined) this.objectModules[module_input_slug] = [];
      this.objectModules[module_input_slug].push('');
      this.objectModules = this.objectModules;
    }
    removeFromMultiField(module_input_slug, index = 0) {
      this.objectModules[module_input_slug].splice(index, 1);
      this.objectModules = this.objectModules;
    }
    cleanVarsIfNew() {
      this.objectModules = (0, _array.A)([]);
      this.objectModules = this.objectModules;
      this.editorjsInstances = [];
    }
    cleanVarsOnModalOpen(e) {
      const myModalEl = document.getElementById(e.id);
      myModalEl.addEventListener('show.bs.modal', event => {
        this.deleteSurity = 'd-none';
        this.objectID = this.object.currentObject ? this.object.currentObject.modules.id : 'new';
        this.objectModules = this.object.currentObject ? this.object.currentObject.modules : (0, _array.A)([]);
        if (this.objectID == 'new' || this.objectID == 'multi') {
          this.cleanVarsIfNew();
        }
      });
    }
    updateSlug() {
      if (confirm('Are you sure you wish to update the slug? It will impact all linked objects.') == true) {
        this.doUpdateSlug = true;
      } else {
        this.doUpdateSlug = false;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "objectModules", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.object.currentObject ? this.object.currentObject.modules : (0, _array.A)([]);
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "objectID", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.object.currentObject ? this.object.currentObject.modules.id : 'new';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "editorjsInstances", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "doUpdateSlug", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "pushObjects", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pushObjects"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteObjects", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteObjects"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pushObject", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pushObject"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteObject", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteObject"), _class.prototype), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "deleteSurity", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'd-none';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "notSoSure", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "notSoSure"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "areYouSure", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "areYouSure"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "uninitEditorJS", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "uninitEditorJS"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initEditorJS", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initEditorJS"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveEditorData", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveEditorData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mutObjectModuleValue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "mutObjectModuleValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addToMultiField", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addToMultiField"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeFromMultiField", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeFromMultiField"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cleanVarsIfNew", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cleanVarsIfNew"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cleanVarsOnModalOpen", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "cleanVarsOnModalOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateSlug", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateSlug"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditObjectModalComponent);
});
;define("junction/components/types/editor/checkbox", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3">
  	<div class="my-1 py-0 col-12 col-md-2">
  		<label class="fst-italic col-form-label fw-bold">{{@typeKey}}</label>
  	</div>
  	<div class="my-1 col-12 col-md-7">
  		<div class="mx-n1"><XToggle @value={{get (get this.types.json.modules @typeSlug) @typeKey}} @onToggle={{fn (mut (get (get this.types.json.modules @typeSlug) @typeKey))}} @theme='ios' @variant={{this.colormodes.mode}} /></div>
  	</div>
  	<div class="my-1 col-12 col-md-3">
  		<span class="form-text">{{@helpText}}</span>
  	</div>
  </div>
  */
  {
    "id": "n395XoDi",
    "block": "[[[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,[30,1]],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"mx-n1\"],[12],[8,[39,2],null,[[\"@value\",\"@onToggle\",\"@theme\",\"@variant\"],[[28,[37,3],[[28,[37,3],[[30,0,[\"types\",\"json\",\"modules\"]],[30,2]],null],[30,1]],null],[28,[37,4],[[28,[37,5],[[28,[37,3],[[28,[37,3],[[30,0,[\"types\",\"json\",\"modules\"]],[30,2]],null],[30,1]],null]],null]],null],\"ios\",[30,0,[\"colormodes\",\"mode\"]]]],null],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,[30,3]],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"@typeKey\",\"@typeSlug\",\"@helpText\"],false,[\"div\",\"label\",\"x-toggle\",\"get\",\"fn\",\"mut\",\"span\"]]",
    "moduleName": "junction/components/types/editor/checkbox.hbs",
    "isStrictMode": false
  });
  let TypesEditorCheckboxComponent = _exports.default = (_class = class TypesEditorCheckboxComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditorCheckboxComponent);
});
;define("junction/components/types/editor/multi-select", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "dLz7vXaE",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "junction/components/types/editor/multi-select.hbs",
    "isStrictMode": false
  });
  class TypesEditorMultiSelectComponent extends _component2.default {}
  _exports.default = TypesEditorMultiSelectComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditorMultiSelectComponent);
});
;define("junction/components/types/editor/row", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "HZkY6HGu",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "junction/components/types/editor/row.hbs",
    "isStrictMode": false
  });
  class TypesEditorRowComponent extends _component2.default {}
  _exports.default = TypesEditorRowComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditorRowComponent);
});
;define("junction/components/types/editor/select", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "Tzf5/JM8",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "junction/components/types/editor/select.hbs",
    "isStrictMode": false
  });
  class TypesEditorSelectComponent extends _component2.default {}
  _exports.default = TypesEditorSelectComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditorSelectComponent);
});
;define("junction/components/types/editor/text", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3">
  	<div class="my-1 py-0 col-12 col-md-2">
  		<label class="fst-italic col-form-label fw-bold">{{@typeKey}}</label>
  	</div>
  	<div class="my-1 col-12 col-md-7">
  		<Input @type="text" @value={{mut (get (get this.types.json.modules @typeSlug) @typeKey)}} class="form-control" />
  	</div>
  	<div class="my-1 col-12 col-md-3">
  		<span class="form-text">{{@helpText}}</span>
  	</div>
  </div>
  */
  {
    "id": "l4VVUQLA",
    "block": "[[[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,[30,1]],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\"],[8,[39,2],[[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,3],[[28,[37,4],[[28,[37,4],[[30,0,[\"types\",\"json\",\"modules\"]],[30,2]],null],[30,1]],null]],null]]],null],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,[30,3]],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"@typeKey\",\"@typeSlug\",\"@helpText\"],false,[\"div\",\"label\",\"input\",\"mut\",\"get\",\"span\"]]",
    "moduleName": "junction/components/types/editor/text.hbs",
    "isStrictMode": false
  });
  let TypesEditorTextComponent = _exports.default = (_class = class TypesEditorTextComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditorTextComponent);
});
;define("junction/components/types/editor/textarea", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3">
  	<div class="my-1 py-0 col-12 col-md-2">
  		<label class="fst-italic col-form-label fw-bold">{{@typeKey}}</label>
  	</div>
  	<div class="my-1 col-12 col-md-7">
  		<Textarea @value={{mut (get (get this.types.json.modules @typeSlug) @typeKey)}} class="form-control" rows="4" />
  	</div>
  	<div class="my-1 col-12 col-md-3">
  		<span class="form-text">{{@helpText}}</span>
  	</div>
  </div>
  */
  {
    "id": "H/esjT+d",
    "block": "[[[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,[30,1]],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\"],[8,[39,2],[[24,0,\"form-control\"],[24,\"rows\",\"4\"]],[[\"@value\"],[[28,[37,3],[[28,[37,4],[[28,[37,4],[[30,0,[\"types\",\"json\",\"modules\"]],[30,2]],null],[30,1]],null]],null]]],null],[1,\"\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,[30,3]],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"@typeKey\",\"@typeSlug\",\"@helpText\"],false,[\"div\",\"label\",\"textarea\",\"mut\",\"get\",\"span\"]]",
    "moduleName": "junction/components/types/editor/textarea.hbs",
    "isStrictMode": false
  });
  let TypesEditorTextareaComponent = _exports.default = (_class = class TypesEditorTextareaComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesEditorTextareaComponent);
});
;define("junction/components/types/list-table", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div style="overflow-x:scroll">
  	<table class="table table-striped types-data-table listable-modules-{{this.countListableModules}}">
  		{{yield}}
  	</table>
  </div>
  
  <Types::EditObjectModal @multiEdit={{true}} />
  */
  {
    "id": "rrrEgkpQ",
    "block": "[[[10,0],[14,5,\"overflow-x:scroll\"],[12],[1,\"\\n\\t\"],[10,\"table\"],[15,0,[29,[\"table table-striped types-data-table listable-modules-\",[30,0,[\"countListableModules\"]]]]],[12],[1,\"\\n\\t\\t\"],[18,1,null],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,3],null,[[\"@multiEdit\"],[true]],null]],[\"&default\"],false,[\"div\",\"table\",\"yield\",\"types/edit-object-modal\"]]",
    "moduleName": "junction/components/types/list-table.hbs",
    "isStrictMode": false
  });
  class TypesListTableComponent extends _component2.default {
    get countListableModules() {
      var count = 0;
      this.args.type.modules.forEach(elem => {
        if (elem.list_field === true) count++;
      });
      return count;
    }
  }
  _exports.default = TypesListTableComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTableComponent);
});
;define("junction/components/types/list-table/csv-import-export", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "@ember/runloop", "papaparse", "@ember/template-factory"], function (_exports, _component, _component2, _service, _object, _tracking, _runloop, _papaparse, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/runloop",0,"papaparse",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="csvImportExportModal"
    tabindex="-1"
    aria-labelledby="csvImportExportModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fst-italic fs-5"
            id="csvImportExportModalLabel"
          >Import / Export Data
            <span
              class="text-capitalize"
            >{{this.type.currentType.plural}}</span></h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
  
        <div class="modal-body">
          <div>To import, first
            <a href="#/" {{on "click" this.papaUnparseFormat}} class="text-decoration-underline cursor-pointer"
            >download the CSV Format</a>, fill it and then upload. If you use the id column, any matching IDs
            with same column name will be replaced.
          </div>
          <div class="my-3">
            <Files::CsvUploader
              @placeholder="Upload CSV data for import"
              @onCsvProcessed={{this.handleProcessedCsvData}}
            />
          </div>
        </div>
  
        <div class="modal-footer d-flex align-items-center justify-content-between p-0">
          <div class="d-flex align-items-center justify-content-start">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm me-2"
              data-bs-dismiss="modal"
            >Close</button>
          </div>
  
          {{#if this.saving}}
            <div class="flex-grow-1">
              <div class="progress"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow={{this.csvSaveSuccessCount}}
                aria-valuemin="0"
                aria-valuemax={{this.csvRecordLength}}>
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  style={{html-safe (concat "width: " this.percentage "%")}}>
                  {{this.percentage}}%
                </div>
              </div>
            </div>
          {{else}}
            {{#if this.type.showCsvSave}}
              <div class="d-flex align-items-center justify-content-end">
                <button
                  {{on "click" this.saveAllRecords}}
                  type="button"
                  class="btn btn-primary btn-lg ms-2"
                  ><i class="fa-solid fa-circle-check"></i> Yes, save these records
                </button>
              </div>
            {{else}}
              <div class="d-flex align-items-center justify-content-end">
                <button
                  {{on "click" this.papaUnparse}}
                  type="button"
                  class="btn btn-outline-primary ms-2"
                  ><i class="fa-solid fa-download"></i> Export Complete Dataset
                </button>
              </div>
            {{/if}}
          {{/if}}
        </div>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "GCeTjuOW",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"csvImportExportModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"csvImportExportModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fst-italic fs-5\"],[14,1,\"csvImportExportModalLabel\"],[12],[1,\"Import / Export Data\\n          \"],[10,1],[14,0,\"text-capitalize\"],[12],[1,[30,0,[\"type\",\"currentType\",\"plural\"]]],[13],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[10,0],[12],[1,\"To import, first\\n          \"],[11,3],[24,6,\"#/\"],[24,0,\"text-decoration-underline cursor-pointer\"],[4,[38,5],[\"click\",[30,0,[\"papaUnparseFormat\"]]],null],[12],[1,\"download the CSV Format\"],[13],[1,\", fill it and then upload. If you use the id column, any matching IDs\\n          with same column name will be replaced.\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n          \"],[8,[39,6],null,[[\"@placeholder\",\"@onCsvProcessed\"],[\"Upload CSV data for import\",[30,0,[\"handleProcessedCsvData\"]]]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"modal-footer d-flex align-items-center justify-content-between p-0\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-start\"],[12],[1,\"\\n          \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary btn-sm me-2\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close\"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"saving\"]],[[[1,\"          \"],[10,0],[14,0,\"flex-grow-1\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"progress\"],[14,\"role\",\"progressbar\"],[14,\"aria-label\",\"Animated striped example\"],[15,\"aria-valuenow\",[30,0,[\"csvSaveSuccessCount\"]]],[14,\"aria-valuemin\",\"0\"],[15,\"aria-valuemax\",[30,0,[\"csvRecordLength\"]]],[12],[1,\"\\n              \"],[10,0],[14,0,\"progress-bar progress-bar-striped progress-bar-animated\"],[15,5,[28,[37,8],[[28,[37,9],[\"width: \",[30,0,[\"percentage\"]],\"%\"],null]],null]],[12],[1,\"\\n                \"],[1,[30,0,[\"percentage\"]]],[1,\"%\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"type\",\"showCsvSave\"]],[[[1,\"            \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n              \"],[11,\"button\"],[24,0,\"btn btn-primary btn-lg ms-2\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"saveAllRecords\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-check\"],[12],[13],[1,\" Yes, save these records\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n              \"],[11,\"button\"],[24,0,\"btn btn-outline-primary ms-2\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"papaUnparse\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-download\"],[12],[13],[1,\" Export Complete Dataset\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]]]],[]]],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"div\",\"h1\",\"span\",\"button\",\"a\",\"on\",\"files/csv-uploader\",\"if\",\"html-safe\",\"concat\",\"i\"]]",
    "moduleName": "junction/components/types/list-table/csv-import-export.hbs",
    "isStrictMode": false
  });
  let TypesListTableCsvImportExport = _exports.default = (_class = class TypesListTableCsvImportExport extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
      _initializerDefineProperty(this, "object", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "types", _descriptor4, this);
      _initializerDefineProperty(this, "store", _descriptor5, this);
      _initializerDefineProperty(this, "gzip", _descriptor6, this);
      _initializerDefineProperty(this, "records", _descriptor7, this);
      _initializerDefineProperty(this, "saving", _descriptor8, this);
      _initializerDefineProperty(this, "csvRecordLength", _descriptor9, this);
      _initializerDefineProperty(this, "csvSaveSuccessCount", _descriptor0, this);
    }
    async handleProcessedCsvData(csvInfo) {
      this.type.loadingSearchResults = true;
      const {
        data,
        headers,
        rowCount,
        errors
      } = csvInfo;
      this.type.showCsvSave = true;
      var donotomit = [];
      if (headers.includes('id')) {
        donotomit.push('id');
        donotomit.push('slug');
      }
      this.type.currentType.modules.forEach((m, i) => {
        if (m.input_multiple != true && m.input_type != 'file_uploader' && m.input_type != 'editorjs' && m.var_type != 'json' && m.var_type != 'array' && m.input_slug != 'updated_on' && m.input_slug != 'created_on' && m.input_slug != 'type') {
          donotomit.push(m.input_slug);
        }
      });
      data.forEach(row => {
        // Filter out keys not in donotomit
        const keysToRemove = Object.keys(row).filter(key => !donotomit.includes(key));

        // Remove those keys
        keysToRemove.forEach(key => delete row[key]);
      });

      // Process the CSV data
      data.forEach(async row => {
        if (row.id !== undefined) {
          this.store.findRecord(this.type.currentType.slug, row.id).then(async o => {
            o.modules = row;
            this.records.push(o);
          });
        } else {
          const o = this.store.createRecord(this.type.currentType.slug, {
            modules: row
          });
          this.records.push(o);
        }
      });
      this.type.loadingSearchResults = false;
    }
    saveAllRecords() {
      this.type.loadingSearchResults = true;
      this.saving = true;
      this.csvSaveSuccessCount = 0;
      this.csvRecordLength = this.records.length;
      let promises = [];
      for (let record of this.records) {
        let promise = record.save().then(() => {
          setTimeout(() => {
            this.csvSaveSuccessCount += 1;
          }, 100);
        });
        promises.push(promise);
      }
      Promise.all(promises).then(() => {
        this.saving = false;
        this.type.loadTypeObjects();
        (0, _runloop.later)(() => {
          document.querySelector('#csvImportExportModal .btn-close').click();
        }, 300);
      });
      this.type.showCsvSave = false;
      this.type.loadingSearchResults = false;
    }
    papaUnparseFormat(e) {
      e.preventDefault();
      this.type.loadingSearchResults = true;
      var mmm = [];
      mmm.push('id');
      this.type.currentType.modules.forEach(m => {
        if (m.var_type === undefined || m.var_type != 'json' && m.var_type != 'array') {
          mmm.push(m.input_slug);
        }
      });
      var vvv = [];
      vvv.push(mmm);
      let papa = _papaparse.default.unparse(vvv);
      let dd = new Date();
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(papa);
      hiddenElement.target = '_blank';

      //provide the name for the CSV file to be downloaded
      hiddenElement.download = 'format_' + this.type.currentType.slug + '_' + dd.toISOString().split('T')[0] + '_' + Math.floor(dd / 1000) + '.csv';
      hiddenElement.click();
      this.type.loadingSearchResults = false;
    }
    async papaUnparse() {
      this.type.loadingSearchResults = true;
      let data = await this.store.query(this.type.currentType.slug, {
        sort: '-id',
        show_public_objects_only: false,
        page: {
          limit: -1,
          offset: 0
        }
      });
      var mmm = [];
      mmm.push('id');
      mmm.push('type');
      mmm.push('slug');
      mmm.push('created_on');
      mmm.push('updated_on');
      this.type.currentType.modules.forEach(m => {
        mmm.push(m.input_slug);
      });
      var vvv = [];
      vvv.push(mmm);
      var nnn = [];
      var jjj = [];
      data.forEach(obj => {
        nnn = [];
        mmm.forEach(m => {
          if (obj.modules[m] !== undefined) {
            if (typeof obj.modules[m] == 'object') {
              if (obj.modules[m].blocks !== undefined) {
                var jjj = [];
                obj.modules[m].blocks.forEach(o => {
                  jjj.push(o.data.text.replace(/<\/?[^>]+(>|$)/g, ''));
                });
                nnn.push(jjj.join('\n'));
              } else {
                nnn.push(JSON.stringify(obj.modules[m]));
              }
            } else if (typeof obj.modules[m] == 'array') {
              nnn.push(JSON.stringify(obj.modules[m]));
            } else nnn.push(obj.modules[m]);
          } else nnn.push('');
        });
        vvv.push(nnn);
      });
      let papa = _papaparse.default.unparse(vvv);
      let dd = new Date();

      // Create blob instead of data URI
      const blob = new Blob([papa], {
        type: 'text/csv;charset=utf-8;'
      });
      const url = URL.createObjectURL(blob);
      var hiddenElement = document.createElement('a');
      hiddenElement.href = url;
      hiddenElement.target = '_blank';
      hiddenElement.download = this.type.currentType.slug + '_' + dd.toISOString().split('T')[0] + '_' + Math.floor(dd / 1000) + '.csv';
      hiddenElement.click();

      // Clean up the URL object
      URL.revokeObjectURL(url);
      this.type.loadingSearchResults = false;
    }
    get percentage() {
      return (this.csvSaveSuccessCount / this.csvRecordLength * 100).toFixed(1);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "gzip", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "records", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "saving", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "csvRecordLength", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "csvSaveSuccessCount", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleProcessedCsvData", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleProcessedCsvData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveAllRecords", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveAllRecords"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "papaUnparseFormat", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "papaUnparseFormat"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "papaUnparse", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "papaUnparse"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTableCsvImportExport);
});
;define("junction/components/types/list-table/empty-table-row", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <tr class="border-dark">
    <th class="border-0 border-dark" scope="row"></th>
  
    {{#each @type.modules as |module|}}
      {{#if module.list_field}}
  
        {{#if module.input_primary}}
          <td class="position-relative border-0 border-dark"><div
              class="w-100 py-5 text-center fw-bold fst-italic"
            >No records yet.</div></td>
        {{else}}
          <td class="position-relative border-0 border-dark"></td>
        {{/if}}
  
      {{/if}}
    {{/each}}
  </tr>
  */
  {
    "id": "5JCJCGtz",
    "block": "[[[10,\"tr\"],[14,0,\"border-dark\"],[12],[1,\"\\n  \"],[10,\"th\"],[14,0,\"border-0 border-dark\"],[14,\"scope\",\"row\"],[12],[13],[1,\"\\n\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"modules\"]]],null]],null],null,[[[41,[30,2,[\"list_field\"]],[[[1,\"\\n\"],[41,[30,2,[\"input_primary\"]],[[[1,\"        \"],[10,\"td\"],[14,0,\"position-relative border-0 border-dark\"],[12],[10,0],[14,0,\"w-100 py-5 text-center fw-bold fst-italic\"],[12],[1,\"No records yet.\"],[13],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,\"td\"],[14,0,\"position-relative border-0 border-dark\"],[12],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"]],[]],null]],[2]],null],[13]],[\"@type\",\"module\"],false,[\"tr\",\"th\",\"each\",\"-track-array\",\"if\",\"td\",\"div\"]]",
    "moduleName": "junction/components/types/list-table/empty-table-row.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "empty-table-row"));
});
;define("junction/components/types/list-table/head", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <thead>
  <tr class="border-start border-bottom border-top border-end border-2 fs-6 fst-italic">
    <th scope="col" class="position-relative">
      <span class="me-1 cursor-pointer" {{on 'click' (fn @updateSortField "id")}}>ID</span>
      <span style="bottom:7px;" class="cursor-pointer position-absolute {{if (not-eq (get @sortField @type.slug) "id") "d-none"}}" {{on 'click' (fn @updateSortField "id")}}><i class="fa-solid fa-caret-{{if (eq (get @sortOrder @type.slug) "asc") "up" "down"}}"></i></span>
    </th>
    {{#each @type.modules as |module|}}
      {{#if module.list_field}}
        <th scope="col" class="position-relative {{if module.input_primary "min-width-primary-module"}}">
          
          {{#if module.list_sortable}}
            <span class="me-1 cursor-pointer" {{on 'click' (fn @updateSortField module.input_slug)}}>{{module.input_slug}}</span>
            <span style="bottom:7px;" class="cursor-pointer position-absolute {{if (not-eq (get @sortField @type.slug) module.input_slug) "d-none"}}" {{on 'click' (fn @updateSortField module.input_slug)}}><i class="fa-solid fa-caret-{{if (eq (get @sortOrder @type.slug) "asc") "up" "down"}}"></i></span>
          {{else}}
            <span>{{module.input_slug}}</span>
          {{/if}}
  
        </th>
      {{/if}}
    {{/each}}
  </tr>
  </thead>
  */
  {
    "id": "QUtLrkfr",
    "block": "[[[10,\"thead\"],[12],[1,\"\\n\"],[10,\"tr\"],[14,0,\"border-start border-bottom border-top border-end border-2 fs-6 fst-italic\"],[12],[1,\"\\n  \"],[10,\"th\"],[14,\"scope\",\"col\"],[14,0,\"position-relative\"],[12],[1,\"\\n    \"],[11,1],[24,0,\"me-1 cursor-pointer\"],[4,[38,4],[\"click\",[28,[37,5],[[30,1],\"id\"],null]],null],[12],[1,\"ID\"],[13],[1,\"\\n    \"],[11,1],[24,5,\"bottom:7px;\"],[16,0,[29,[\"cursor-pointer position-absolute \",[52,[28,[37,7],[[28,[37,8],[[30,2],[30,3,[\"slug\"]]],null],\"id\"],null],\"d-none\"]]]],[4,[38,4],[\"click\",[28,[37,5],[[30,1],\"id\"],null]],null],[12],[10,\"i\"],[15,0,[29,[\"fa-solid fa-caret-\",[52,[28,[37,10],[[28,[37,8],[[30,4],[30,3,[\"slug\"]]],null],\"asc\"],null],\"up\",\"down\"]]]],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[42,[28,[37,12],[[28,[37,12],[[30,3,[\"modules\"]]],null]],null],null,[[[41,[30,5,[\"list_field\"]],[[[1,\"      \"],[10,\"th\"],[14,\"scope\",\"col\"],[15,0,[29,[\"position-relative \",[52,[30,5,[\"input_primary\"]],\"min-width-primary-module\"]]]],[12],[1,\"\\n        \\n\"],[41,[30,5,[\"list_sortable\"]],[[[1,\"          \"],[11,1],[24,0,\"me-1 cursor-pointer\"],[4,[38,4],[\"click\",[28,[37,5],[[30,1],[30,5,[\"input_slug\"]]],null]],null],[12],[1,[30,5,[\"input_slug\"]]],[13],[1,\"\\n          \"],[11,1],[24,5,\"bottom:7px;\"],[16,0,[29,[\"cursor-pointer position-absolute \",[52,[28,[37,7],[[28,[37,8],[[30,2],[30,3,[\"slug\"]]],null],[30,5,[\"input_slug\"]]],null],\"d-none\"]]]],[4,[38,4],[\"click\",[28,[37,5],[[30,1],[30,5,[\"input_slug\"]]],null]],null],[12],[10,\"i\"],[15,0,[29,[\"fa-solid fa-caret-\",[52,[28,[37,10],[[28,[37,8],[[30,4],[30,3,[\"slug\"]]],null],\"asc\"],null],\"up\",\"down\"]]]],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,1],[12],[1,[30,5,[\"input_slug\"]]],[13],[1,\"\\n\"]],[]]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null]],[5]],null],[13],[1,\"\\n\"],[13]],[\"@updateSortField\",\"@sortField\",\"@type\",\"@sortOrder\",\"module\"],false,[\"thead\",\"tr\",\"th\",\"span\",\"on\",\"fn\",\"if\",\"not-eq\",\"get\",\"i\",\"eq\",\"each\",\"-track-array\"]]",
    "moduleName": "junction/components/types/list-table/head.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "head"));
});
;define("junction/components/types/list-table/loading-table-row", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <tr class="border-dark">
    <th class="border-0 border-dark" scope="row"></th>
  
    {{#each @type.modules as |module|}}
      {{#if module.list_field}}
  
        {{#if module.input_primary}}
          <td class="position-relative border-0 border-dark"><div
              class="w-100 py-5 text-center fw-bold fst-italic"
            >Loading...</div></td>
        {{else}}
          <td class="position-relative border-0 border-dark"></td>
        {{/if}}
  
      {{/if}}
    {{/each}}
  </tr>
  */
  {
    "id": "7qNLMc9Q",
    "block": "[[[10,\"tr\"],[14,0,\"border-dark\"],[12],[1,\"\\n  \"],[10,\"th\"],[14,0,\"border-0 border-dark\"],[14,\"scope\",\"row\"],[12],[13],[1,\"\\n\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"modules\"]]],null]],null],null,[[[41,[30,2,[\"list_field\"]],[[[1,\"\\n\"],[41,[30,2,[\"input_primary\"]],[[[1,\"        \"],[10,\"td\"],[14,0,\"position-relative border-0 border-dark\"],[12],[10,0],[14,0,\"w-100 py-5 text-center fw-bold fst-italic\"],[12],[1,\"Loading...\"],[13],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,\"td\"],[14,0,\"position-relative border-0 border-dark\"],[12],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"]],[]],null]],[2]],null],[13]],[\"@type\",\"module\"],false,[\"tr\",\"th\",\"each\",\"-track-array\",\"if\",\"td\",\"div\"]]",
    "moduleName": "junction/components/types/list-table/loading-table-row.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "loading-table-row"));
});
;define("junction/components/types/list-table/page-length-selector", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/array", "@ember/service", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _array, _service, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/array",0,"@ember/service",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <PowerSelect class="form-control border-{{this.colormodes.inverseMode}}" @placeholder="Number of resulsts per page" @sec @options={{this.options}} @onChange={{this.updatePageLength}} @selected={{this.selectedOption}} as |opt|>
          {{opt}} results per page
  </PowerSelect>
  */
  {
    "id": "XKYnz17y",
    "block": "[[[8,[39,0],[[16,0,[29,[\"form-control border-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]]],[[\"@placeholder\",\"@sec\",\"@options\",\"@onChange\",\"@selected\"],[\"Number of resulsts per page\",\"\",[30,0,[\"options\"]],[30,0,[\"updatePageLength\"]],[30,0,[\"selectedOption\"]]]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,1]],[1,\" results per page\\n\"]],[1]]]]]],[\"opt\"],false,[\"power-select\"]]",
    "moduleName": "junction/components/types/list-table/page-length-selector.hbs",
    "isStrictMode": false
  });
  let TypesListTablePageLengthSelectorComponent = _exports.default = (_class = class TypesListTablePageLengthSelectorComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "options", _descriptor, this);
      _initializerDefineProperty(this, "selectedOption", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
    }
    updatePageLength(e) {
      this.selectedOption = e;
      this.args.updatePageLength(e);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "options", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)(['5', '10', '25', '50', '100', '250', '500']);
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectedOption", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '25';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updatePageLength", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updatePageLength"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTablePageLengthSelectorComponent);
});
;define("junction/components/types/list-table/pagination", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fw-bold fst-italic w-100 text-center mb-2">
    {{#if (get @selectedRowIDs @type.slug)}}
      <span class="text-decoration-underline cursor-pointer" {{on 'click' this.type.selectNoneSearchedIDs}}>Select none</span> | <span class="text-decoration-underline cursor-pointer" {{on 'click' this.type.selectAllSearchedIDs}}>Select all</span> | Selected: {{this.getCount (get @selectedRowIDs @type.slug)}} of
    {{/if}}
    Total {{@type.plural}}: {{@totalObjects}}</div>
  <nav class="px-0">
    <ul class="pagination px-0 border border-1 border-{{this.colormodes.inverseMode}} justify-content-center" style="overflow-x:scroll">
      <li class="page-item {{if (lte (get @currentPageNumber @type.slug) 1) "disabled"}}">
        {{#if (gt (get @currentPageNumber @type.slug) 1)}}
          <div class="page-link border-1 border-top-0 border-bottom-0 border-{{this.colormodes.inverseMode}} {{if (lte (get @currentPageNumber @type.slug) 1) "text-{{this.colormodes.mode}}" "text-{{this.colormodes.inverseMode}}"}}" {{on 'click' (fn @changePageNumber (dec (get @currentPageNumber @type.slug)))}}><i class="fa-solid fa-chevron-left"></i></div>
        {{else}}
          <div class="page-link border-1 border-top-0 border-bottom-0 border-{{this.colormodes.inverseMode}} {{if (lte (get @currentPageNumber @type.slug) 1) "text-{{this.colormodes.mode}}" "text-{{this.colormodes.inverseMode}}"}}"><i class="fa-solid fa-chevron-left"></i></div>
        {{/if}}
      </li>
  
      {{#each @pageLinks as |pageNumber|}}
        {{#if (or 
            (eq pageNumber (get @currentPageNumber @type.slug))
            (eq pageNumber 1)
            (eq pageNumber 2)
            (lt pageNumber (add 3 (get @currentPageNumber @type.slug)))
        )}}
        	<li class="page-item">
        		<div class="page-link border-1 border-top-0 border-bottom-0 border-{{this.colormodes.inverseMode}} {{if (eq (get @currentPageNumber @type.slug) pageNumber) "text-{{this.colormodes.mode}} bg-{{this.colormodes.inverseMode}}" "text-{{this.colormodes.inverseMode}}"}}" {{on 'click' (fn @changePageNumber pageNumber)}}>{{pageNumber}}</div>
        	</li>
        {{/if}}
      {{/each}}
  
      <li class="page-item {{if (gte (get @currentPageNumber @type.slug) @numberOfPages) "disabled"}}">
        {{#if (gte (get @currentPageNumber @type.slug) @numberOfPages)}}
          <div class="page-link border-1 border-top-0 border-bottom-0 border-{{this.colormodes.inverseMode}} {{if (gte (get @currentPageNumber @type.slug) @numberOfPages) "text-{{this.colormodes.mode}}" "text-{{this.colormodes.inverseMode}}"}}"><i class="fa-solid fa-chevron-right"></i></div>
        {{else}}
          <div class="page-link border-1 border-top-0 border-bottom-0 border-{{this.colormodes.inverseMode}} {{if (gte (get @currentPageNumber @type.slug) @numberOfPages) "text-{{this.colormodes.mode}}" "text-{{this.colormodes.inverseMode}}"}}" {{on 'click' (fn @changePageNumber (inc (get @currentPageNumber @type.slug)))}}><i class="fa-solid fa-chevron-right"></i></div>
        {{/if}}
      </li>
    </ul>
  </nav>
  */
  {
    "id": "FlymZ3Ee",
    "block": "[[[10,0],[14,0,\"fw-bold fst-italic w-100 text-center mb-2\"],[12],[1,\"\\n\"],[41,[28,[37,2],[[30,1],[30,2,[\"slug\"]]],null],[[[1,\"    \"],[11,1],[24,0,\"text-decoration-underline cursor-pointer\"],[4,[38,4],[\"click\",[30,0,[\"type\",\"selectNoneSearchedIDs\"]]],null],[12],[1,\"Select none\"],[13],[1,\" | \"],[11,1],[24,0,\"text-decoration-underline cursor-pointer\"],[4,[38,4],[\"click\",[30,0,[\"type\",\"selectAllSearchedIDs\"]]],null],[12],[1,\"Select all\"],[13],[1,\" | Selected: \"],[1,[28,[30,0,[\"getCount\"]],[[28,[37,2],[[30,1],[30,2,[\"slug\"]]],null]],null]],[1,\" of\\n\"]],[]],null],[1,\"  Total \"],[1,[30,2,[\"plural\"]]],[1,\": \"],[1,[30,3]],[13],[1,\"\\n\"],[10,\"nav\"],[14,0,\"px-0\"],[12],[1,\"\\n  \"],[10,\"ul\"],[15,0,[29,[\"pagination px-0 border border-1 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" justify-content-center\"]]],[14,5,\"overflow-x:scroll\"],[12],[1,\"\\n    \"],[10,\"li\"],[15,0,[29,[\"page-item \",[52,[28,[37,8],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],1],null],\"disabled\"]]]],[12],[1,\"\\n\"],[41,[28,[37,9],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],1],null],[[[1,\"        \"],[11,0],[16,0,[29,[\"page-link border-1 border-top-0 border-bottom-0 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" \",[52,[28,[37,8],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],1],null],\"text-{{this.colormodes.mode}}\",\"text-{{this.colormodes.inverseMode}}\"]]]],[4,[38,4],[\"click\",[28,[37,10],[[30,5],[28,[37,11],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null]],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-chevron-left\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,0],[15,0,[29,[\"page-link border-1 border-top-0 border-bottom-0 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" \",[52,[28,[37,8],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],1],null],\"text-{{this.colormodes.mode}}\",\"text-{{this.colormodes.inverseMode}}\"]]]],[12],[10,\"i\"],[14,0,\"fa-solid fa-chevron-left\"],[12],[13],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n\\n\"],[42,[28,[37,14],[[28,[37,14],[[30,6]],null]],null],null,[[[41,[28,[37,15],[[28,[37,16],[[30,7],[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null]],null],[28,[37,16],[[30,7],1],null],[28,[37,16],[[30,7],2],null],[28,[37,17],[[30,7],[28,[37,18],[3,[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null]],null]],null]],null],[[[1,\"      \\t\"],[10,\"li\"],[14,0,\"page-item\"],[12],[1,\"\\n      \\t\\t\"],[11,0],[16,0,[29,[\"page-link border-1 border-top-0 border-bottom-0 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" \",[52,[28,[37,16],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],[30,7]],null],\"text-{{this.colormodes.mode}} bg-{{this.colormodes.inverseMode}}\",\"text-{{this.colormodes.inverseMode}}\"]]]],[4,[38,4],[\"click\",[28,[37,10],[[30,5],[30,7]],null]],null],[12],[1,[30,7]],[13],[1,\"\\n      \\t\"],[13],[1,\"\\n\"]],[]],null]],[7]],null],[1,\"\\n    \"],[10,\"li\"],[15,0,[29,[\"page-item \",[52,[28,[37,19],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],[30,8]],null],\"disabled\"]]]],[12],[1,\"\\n\"],[41,[28,[37,19],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],[30,8]],null],[[[1,\"        \"],[10,0],[15,0,[29,[\"page-link border-1 border-top-0 border-bottom-0 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" \",[52,[28,[37,19],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],[30,8]],null],\"text-{{this.colormodes.mode}}\",\"text-{{this.colormodes.inverseMode}}\"]]]],[12],[10,\"i\"],[14,0,\"fa-solid fa-chevron-right\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[11,0],[16,0,[29,[\"page-link border-1 border-top-0 border-bottom-0 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" \",[52,[28,[37,19],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null],[30,8]],null],\"text-{{this.colormodes.mode}}\",\"text-{{this.colormodes.inverseMode}}\"]]]],[4,[38,4],[\"click\",[28,[37,10],[[30,5],[28,[37,20],[[28,[37,2],[[30,4],[30,2,[\"slug\"]]],null]],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-chevron-right\"],[12],[13],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@selectedRowIDs\",\"@type\",\"@totalObjects\",\"@currentPageNumber\",\"@changePageNumber\",\"@pageLinks\",\"pageNumber\",\"@numberOfPages\"],false,[\"div\",\"if\",\"get\",\"span\",\"on\",\"nav\",\"ul\",\"li\",\"lte\",\"gt\",\"fn\",\"dec\",\"i\",\"each\",\"-track-array\",\"or\",\"eq\",\"lt\",\"add\",\"gte\",\"inc\"]]",
    "moduleName": "junction/components/types/list-table/pagination.hbs",
    "isStrictMode": false
  });
  let TypesListTablePagination = _exports.default = (_class = class TypesListTablePagination extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _defineProperty(this, "getCount", i => {
        return i.length;
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTablePagination);
});
;define("junction/components/types/list-table/row-options", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "bootstrap", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _bootstrap, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class="d-none position-absolute bottom-0 end-0 bg-none"
    id="row-options-{{@object.id}}"
  >
    <div
      class="position-relative w-100 p-1 d-flex justify-content-lg-between align-items-center"
      style="z-index:1"
    >
      <div class="d-flex align-items-center">
        <span
          class="small mb-n1 me-1 bg-none border-0 font-weight-bold text-uppercase text-{{this.colormodes.inverseMode}}"
        >
          {{#if (eq @object.modules.content_privacy "public")}}
            <span class="text-success"><i
                class="fa-solid fa-bullhorn"
              ></i></span>
          {{else if (eq @object.modules.content_privacy "private")}}
            <span class="text-danger"><i class="fa-solid fa-lock"></i></span>
          {{else if (eq @object.modules.content_privacy "sent")}}
            <span class="text-primary"><i
                class="fa-solid fa-paper-plane"
              ></i></span>
          {{else if (eq @object.modules.content_privacy "pending")}}
            <span class="text-warning"><i
                class="fa-solid fa-hourglass-half"
              ></i></span>
          {{else}}
            <span class="text-{{this.colormodes.inverseMode}}"><i
                class="fa-solid fa-paragraph"
              ></i></span>
          {{/if}}
          <span class="d-none d-lg-inline">{{@object.modules.content_privacy}}</span>
        </span>
  
        {{#if (eq @type.slug "deleted_record")}}
          <button
            class="badge badge-sm border bg-success
              border-1 border-{{this.colormodes.mode}}
              text-{{this.colormodes.mode}}
              font-weight-bold text-uppercase"
            {{on "click" this.restoreRecord}}
            type="button"
          ><i class="fa-solid fa-trash-arrow-up"></i><span
              class="d-none d-lg-inline"
            >&nbsp;Restore</span></button>
        {{/if}}
  
        <button
          class="badge badge-sm border bg-{{this.colormodes.inverseMode}}
            border-1 border-{{this.colormodes.mode}}
            text-{{this.colormodes.mode}}
            font-weight-bold text-uppercase"
          {{on "click" this.openBlueprintModal}}
          type="button"
        ><i class="fa-solid fa-code"></i>&nbsp;API</button>
  
        {{#unless @type.sendable}}
          {{#if
            (not (or (eq @module.input_unique true) (eq @type.readonly true)))
          }}
            <button
              class="badge badge-sm border border-1 border-{{this.colormodes.mode}}
                bg-{{this.colormodes.inverseMode}}
                text-{{this.colormodes.mode}}
                font-weight-bold text-uppercase"
              {{on "click" this.openCopyModal}}
              type="button"
            ><i class="fa-solid fa-copy"></i><span
                class="d-none d-lg-inline"
              >&nbsp;Copy</span></button>
          {{/if}}
        {{/unless}}
  
        {{#if (eq @type.slug "file_record")}}
          <a
            class="badge badge-sm border border-1 border-{{this.colormodes.mode}}
              bg-{{this.colormodes.inverseMode}}
              text-{{this.colormodes.mode}}
              font-weight-bold text-uppercase text-decoration-none"
            href="{{@object.modules.url}}"
            target="new"
          ><i class="fa-solid fa-up-right-from-square"></i><span
              class="d-none d-lg-inline"
            >&nbsp;View</span></a>
        {{else if @type.url}}
          <a
            class="badge badge-sm border border-1 border-{{this.colormodes.mode}}
              bg-{{this.colormodes.inverseMode}}
              text-{{this.colormodes.mode}}
              font-weight-bold text-uppercase text-decoration-none"
            href="{{if
              (this.isLastSlashOrEquals @type.url)
              (concat @type.url @object.modules.slug)
              (concat @type.url '/' @object.modules.slug)
            }}"
            target="new"
          ><i class="fa-solid fa-up-right-from-square"></i><span
              class="d-none d-lg-inline"
            >&nbsp;View</span></a>
        {{/if}}
  
        {{#if (not (or @type.readonly (eq @type.editable false)))}}
          <button
            class="badge badge-sm border border-1 border-{{this.colormodes.mode}}
              bg-{{this.colormodes.inverseMode}}
              text-{{this.colormodes.mode}}
              font-weight-bold text-uppercase"
            {{on "click" this.openEditModal}}
            type="button"
          ><i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit</button>
        {{/if}}
  
      </div>
    </div>
  </div>
  */
  {
    "id": "3tc32mGu",
    "block": "[[[10,0],[14,0,\"d-none position-absolute bottom-0 end-0 bg-none\"],[15,1,[29,[\"row-options-\",[30,1,[\"id\"]]]]],[12],[1,\"\\n  \"],[10,0],[14,0,\"position-relative w-100 p-1 d-flex justify-content-lg-between align-items-center\"],[14,5,\"z-index:1\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"d-flex align-items-center\"],[12],[1,\"\\n      \"],[10,1],[15,0,[29,[\"small mb-n1 me-1 bg-none border-0 font-weight-bold text-uppercase text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[12],[1,\"\\n\"],[41,[28,[37,3],[[30,1,[\"modules\",\"content_privacy\"]],\"public\"],null],[[[1,\"          \"],[10,1],[14,0,\"text-success\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-bullhorn\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,3],[[30,1,[\"modules\",\"content_privacy\"]],\"private\"],null],[[[1,\"          \"],[10,1],[14,0,\"text-danger\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-lock\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,3],[[30,1,[\"modules\",\"content_privacy\"]],\"sent\"],null],[[[1,\"          \"],[10,1],[14,0,\"text-primary\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-paper-plane\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,3],[[30,1,[\"modules\",\"content_privacy\"]],\"pending\"],null],[[[1,\"          \"],[10,1],[14,0,\"text-warning\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-hourglass-half\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,1],[15,0,[29,[\"text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[12],[10,\"i\"],[14,0,\"fa-solid fa-paragraph\"],[12],[13],[13],[1,\"\\n        \"]],[]]]],[]]]],[]]]],[]]],[1,\"        \"],[10,1],[14,0,\"d-none d-lg-inline\"],[12],[1,[30,1,[\"modules\",\"content_privacy\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[28,[37,3],[[30,2,[\"slug\"]],\"deleted_record\"],null],[[[1,\"        \"],[11,\"button\"],[16,0,[29,[\"badge badge-sm border bg-success\\n            border-1 border-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            text-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            font-weight-bold text-uppercase\"]]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"restoreRecord\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-trash-arrow-up\"],[12],[13],[10,1],[14,0,\"d-none d-lg-inline\"],[12],[1,\" Restore\"],[13],[13],[1,\"\\n\"]],[]],null],[1,\"\\n      \"],[11,\"button\"],[16,0,[29,[\"badge badge-sm border bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n          border-1 border-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n          text-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n          font-weight-bold text-uppercase\"]]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"openBlueprintModal\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-code\"],[12],[13],[1,\" API\"],[13],[1,\"\\n\\n\"],[41,[51,[30,2,[\"sendable\"]]],[[[41,[28,[37,8],[[28,[37,9],[[28,[37,3],[[30,3,[\"input_unique\"]],true],null],[28,[37,3],[[30,2,[\"readonly\"]],true],null]],null]],null],[[[1,\"          \"],[11,\"button\"],[16,0,[29,[\"badge badge-sm border border-1 border-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n              bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n              text-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n              font-weight-bold text-uppercase\"]]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"openCopyModal\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[10,1],[14,0,\"d-none d-lg-inline\"],[12],[1,\" Copy\"],[13],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"\\n\"],[41,[28,[37,3],[[30,2,[\"slug\"]],\"file_record\"],null],[[[1,\"        \"],[10,3],[15,0,[29,[\"badge badge-sm border border-1 border-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            text-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            font-weight-bold text-uppercase text-decoration-none\"]]],[15,6,[29,[[30,1,[\"modules\",\"url\"]]]]],[14,\"target\",\"new\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[10,1],[14,0,\"d-none d-lg-inline\"],[12],[1,\" View\"],[13],[13],[1,\"\\n\"]],[]],[[[41,[30,2,[\"url\"]],[[[1,\"        \"],[10,3],[15,0,[29,[\"badge badge-sm border border-1 border-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            text-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            font-weight-bold text-uppercase text-decoration-none\"]]],[15,6,[29,[[52,[28,[30,0,[\"isLastSlashOrEquals\"]],[[30,2,[\"url\"]]],null],[28,[37,11],[[30,2,[\"url\"]],[30,1,[\"modules\",\"slug\"]]],null],[28,[37,11],[[30,2,[\"url\"]],\"/\",[30,1,[\"modules\",\"slug\"]]],null]]]]],[14,\"target\",\"new\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[10,1],[14,0,\"d-none d-lg-inline\"],[12],[1,\" View\"],[13],[13],[1,\"\\n      \"]],[]],null]],[]]],[1,\"\\n\"],[41,[28,[37,8],[[28,[37,9],[[30,2,[\"readonly\"]],[28,[37,3],[[30,2,[\"editable\"]],false],null]],null]],null],[[[1,\"        \"],[11,\"button\"],[16,0,[29,[\"badge badge-sm border border-1 border-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            text-\",[30,0,[\"colormodes\",\"mode\"]],\"\\n            font-weight-bold text-uppercase\"]]],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"openEditModal\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-pen-to-square\"],[12],[13],[1,\" Edit\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@object\",\"@type\",\"@module\"],false,[\"div\",\"span\",\"if\",\"eq\",\"i\",\"button\",\"on\",\"unless\",\"not\",\"or\",\"a\",\"concat\"]]",
    "moduleName": "junction/components/types/list-table/row-options.hbs",
    "isStrictMode": false
  });
  let TypesListTableRowOptionsComponent = _exports.default = (_class = class TypesListTableRowOptionsComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "isLastSlashOrEquals", id => {
        let last = id.substr(id.length - 1);
        if (last == '/' || last == '=') return true;else return false;
      });
      _initializerDefineProperty(this, "object", _descriptor, this);
      _initializerDefineProperty(this, "type", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
    }
    openBlueprintModal() {
      this.object.activateCurrentObject(this.args.object);
      this.object.currentType = this.args.type;
      let bp = new _bootstrap.Modal(document.getElementById('blueprintObjectModal'), {});
      bp.show();
    }
    openEditModal() {
      this.object.reloadingVars = true;
      this.object.activateCurrentObject(this.args.object);
      this.object.currentType = this.args.type;
      this.object.reloadingVars = false;
      let bp = new _bootstrap.Modal(document.getElementById('editObjectModal'), {});
      bp.show();
    }
    openCopyModal() {
      this.object.reloadingVars = true;
      this.object.activateCurrentObject(this.args.object);
      this.object.currentType = this.args.type;
      this.object.reloadingVars = false;
      let bp = new _bootstrap.Modal(document.getElementById('copyObjectModal'), {});
      bp.show();
    }
    async restoreRecord() {
      this.object.activateCurrentObject(this.args.object);
      this.object.currentObject.type = this.args.object.modules.deleted_type;
      this.object.currentObject.modules.type = this.args.object.modules.deleted_type;
      this.args.object.modules.deleted_type = '';
      await this.object.currentObject.save();
      this.type.search();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "openBlueprintModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openBlueprintModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openEditModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openEditModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openCopyModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openCopyModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "restoreRecord", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "restoreRecord"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTableRowOptionsComponent);
});
;define("junction/components/types/list-table/row", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/service", "bootstrap", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _service, _bootstrap, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"bootstrap",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <tr
    id="row-{{@object.id}}"
    class="border-dark
      {{if
        (this.inArray @object.id (get @selectedRowIDs @type.slug))
        'bg-secondary'
      }}"
  >
    <th
      class="border-end border-start border-1 border-dark"
      scope="row"
      {{on "click" this.toggleSelection}}
    >
      {{#if this.isSelected}}
        <i class="fa-solid fa-circle-check border border-1 rounded-circle border-{{this.colormodes.inverseMode}}"></i>
      {{else}}
        <i class="fa-solid fa-circle border border-1 rounded-circle border-{{this.colormodes.inverseMode}}"></i>
      {{/if}}
      {{@object.id}}
    </th>
  
    {{#each @type.modules as |module|}}
      {{#if module.list_field}}
        {{#if module.input_primary}}
          <td
            class="position-relative border-end border-1 border-dark"
            {{on "mouseover" this.showOptions}}
            {{on "mouseout" this.hideOptions}}
          >
            <div class="text-ellipsis" {{on "touchend" this.toggleOptions}}>{{get
                @object.modules
                module.input_slug
              }}</div>
  
            <Hooks::RowOptions
              @object={{@object}}
              @type={{@type}}
              @module={{module}}
            />
  
            <Types::ListTable::RowOptions
              @object={{@object}}
              @type={{@type}}
              @module={{module}}
            />
          </td>
        {{else}}
          <td
            class="position-relative border-end border-1 border-dark"
            {{on "mouseover" this.showOptions}}
            {{on "mouseout" this.hideOptions}}
          >
            <div class="text-ellipsis" {{on "touchend" this.toggleOptions}}>
              {{#if module.linked_type}}
                {{#if (this.isArray (get @object.modules module.input_slug))}}
                  <div class="d-flex flex-wrap gap-1">
                    {{#each (get @object.modules module.input_slug) as |item|}}
                      <div 
                        class="badge bg-{{this.colormodes.inverseMode}} text-{{this.colormodes.mode}} text-ellipsis cursor-pointer" 
                        title="Click to view the linked object"
                        {{on 'click' (fn this.showBlueprintObjectModal module.linked_type item)}}
                      >
                        {{item}}
                      </div>
                    {{/each}}
                  </div>
                {{else if (this.isCSV (get @object.modules module.input_slug))}}
                  <div class="d-flex flex-wrap gap-1">
                    {{#each (this.split (get @object.modules module.input_slug) ",") as |item|}}
                      <div 
                        class="badge bg-{{this.colormodes.inverseMode}} text-{{this.colormodes.mode}} text-ellipsis cursor-pointer" 
                        title="Click to view the linked object"
                        {{on 'click' (fn this.showBlueprintObjectModal module.linked_type (this.trim item))}}
                      >
                        {{this.trim item}}
                      </div>
                    {{/each}}
                  </div>
                {{else if (get @object.modules module.input_slug)}}
                  <div
                    title="Click to view the linked object"
                    class="badge bg-{{this.colormodes.inverseMode}} text-{{this.colormodes.mode}} text-ellipsis cursor-pointer" 
                    {{on 'click' (fn this.showBlueprintObjectModal module.linked_type (get @object.modules module.input_slug))}}
                  >
                    {{get @object.modules module.input_slug}}
                  </div>
                {{/if}}
              {{else}}
                {{get @object.modules module.input_slug}}
              {{/if}}
            </div>
          </td>
        {{/if}}
      {{/if}}
    {{/each}}
  </tr>
  */
  {
    "id": "MmC2XDmJ",
    "block": "[[[10,\"tr\"],[15,1,[29,[\"row-\",[30,1,[\"id\"]]]]],[15,0,[29,[\"border-dark\\n    \",[52,[28,[30,0,[\"inArray\"]],[[30,1,[\"id\"]],[28,[37,2],[[30,2],[30,3,[\"slug\"]]],null]],null],\"bg-secondary\"]]]],[12],[1,\"\\n  \"],[11,\"th\"],[24,0,\"border-end border-start border-1 border-dark\"],[24,\"scope\",\"row\"],[4,[38,4],[\"click\",[30,0,[\"toggleSelection\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"isSelected\"]],[[[1,\"      \"],[10,\"i\"],[15,0,[29,[\"fa-solid fa-circle-check border border-1 rounded-circle border-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[12],[13],[1,\"\\n\"]],[]],[[[1,\"      \"],[10,\"i\"],[15,0,[29,[\"fa-solid fa-circle border border-1 rounded-circle border-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[12],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[1,[30,1,[\"id\"]]],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,3,[\"modules\"]]],null]],null],null,[[[41,[30,4,[\"list_field\"]],[[[41,[30,4,[\"input_primary\"]],[[[1,\"        \"],[11,\"td\"],[24,0,\"position-relative border-end border-1 border-dark\"],[4,[38,4],[\"mouseover\",[30,0,[\"showOptions\"]]],null],[4,[38,4],[\"mouseout\",[30,0,[\"hideOptions\"]]],null],[12],[1,\"\\n          \"],[11,0],[24,0,\"text-ellipsis\"],[4,[38,4],[\"touchend\",[30,0,[\"toggleOptions\"]]],null],[12],[1,[28,[35,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],[13],[1,\"\\n\\n          \"],[8,[39,10],null,[[\"@object\",\"@type\",\"@module\"],[[30,1],[30,3],[30,4]]],null],[1,\"\\n\\n          \"],[8,[39,11],null,[[\"@object\",\"@type\",\"@module\"],[[30,1],[30,3],[30,4]]],null],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[11,\"td\"],[24,0,\"position-relative border-end border-1 border-dark\"],[4,[38,4],[\"mouseover\",[30,0,[\"showOptions\"]]],null],[4,[38,4],[\"mouseout\",[30,0,[\"hideOptions\"]]],null],[12],[1,\"\\n          \"],[11,0],[24,0,\"text-ellipsis\"],[4,[38,4],[\"touchend\",[30,0,[\"toggleOptions\"]]],null],[12],[1,\"\\n\"],[41,[30,4,[\"linked_type\"]],[[[41,[28,[30,0,[\"isArray\"]],[[28,[37,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],null],[[[1,\"                \"],[10,0],[14,0,\"d-flex flex-wrap gap-1\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[28,[37,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],null]],null],null,[[[1,\"                    \"],[11,0],[16,0,[29,[\"badge bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" text-\",[30,0,[\"colormodes\",\"mode\"]],\" text-ellipsis cursor-pointer\"]]],[24,\"title\",\"Click to view the linked object\"],[4,[38,4],[\"click\",[28,[37,12],[[30,0,[\"showBlueprintObjectModal\"]],[30,4,[\"linked_type\"]],[30,5]],null]],null],[12],[1,\"\\n                      \"],[1,[30,5]],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[5]],null],[1,\"                \"],[13],[1,\"\\n\"]],[]],[[[41,[28,[30,0,[\"isCSV\"]],[[28,[37,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],null],[[[1,\"                \"],[10,0],[14,0,\"d-flex flex-wrap gap-1\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[28,[30,0,[\"split\"]],[[28,[37,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null],\",\"],null]],null]],null],null,[[[1,\"                    \"],[11,0],[16,0,[29,[\"badge bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" text-\",[30,0,[\"colormodes\",\"mode\"]],\" text-ellipsis cursor-pointer\"]]],[24,\"title\",\"Click to view the linked object\"],[4,[38,4],[\"click\",[28,[37,12],[[30,0,[\"showBlueprintObjectModal\"]],[30,4,[\"linked_type\"]],[28,[30,0,[\"trim\"]],[[30,6]],null]],null]],null],[12],[1,\"\\n                      \"],[1,[28,[30,0,[\"trim\"]],[[30,6]],null]],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[6]],null],[1,\"                \"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null],[[[1,\"                \"],[11,0],[24,\"title\",\"Click to view the linked object\"],[16,0,[29,[\"badge bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" text-\",[30,0,[\"colormodes\",\"mode\"]],\" text-ellipsis cursor-pointer\"]]],[4,[38,4],[\"click\",[28,[37,12],[[30,0,[\"showBlueprintObjectModal\"]],[30,4,[\"linked_type\"]],[28,[37,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],null]],null],[12],[1,\"\\n                  \"],[1,[28,[35,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"]],[]],null]],[]]]],[]]]],[]],[[[1,\"              \"],[1,[28,[35,2],[[30,1,[\"modules\"]],[30,4,[\"input_slug\"]]],null]],[1,\"\\n\"]],[]]],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]]]],[]],null]],[4]],null],[13]],[\"@object\",\"@selectedRowIDs\",\"@type\",\"module\",\"item\",\"item\"],false,[\"tr\",\"if\",\"get\",\"th\",\"on\",\"i\",\"each\",\"-track-array\",\"td\",\"div\",\"hooks/row-options\",\"types/list-table/row-options\",\"fn\"]]",
    "moduleName": "junction/components/types/list-table/row.hbs",
    "isStrictMode": false
  });
  let TypesListTableRowComponent = _exports.default = (_class = class TypesListTableRowComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
      _initializerDefineProperty(this, "object", _descriptor2, this);
      _initializerDefineProperty(this, "store", _descriptor3, this);
      _initializerDefineProperty(this, "isShowing", _descriptor4, this);
      _initializerDefineProperty(this, "isSelected", _descriptor5, this);
      _defineProperty(this, "inArray", (needle, haysack) => {
        const index = haysack.indexOf(needle);
        if (index > -1) {
          this.isSelected = true;
          return true;
        } else {
          this.isSelected = false;
          return false;
        }
      });
    }
    async showBlueprintObjectModal(tp, id) {
      let o = await this.store.findRecord(tp, id);
      this.object.activateCurrentObject(o);
      this.object.currentType = tp;
      let bp = new _bootstrap.Modal(document.getElementById('blueprintObjectModal'), {});
      bp.show();
    }
    isArray(value) {
      return Array.isArray(value);
    }
    isCSV(value) {
      if (typeof value !== 'string') return false;
      // Check if it's a string with comma-separated values
      return value.includes(',') && value.split(',').some(item => item.trim() !== '');
    }
    split(string, separator) {
      if (typeof string !== 'string') return [];
      return string.split(separator);
    }
    trim(string) {
      if (typeof string !== 'string') return string;
      return string.trim();
    }
    showOptions() {
      document.querySelector('#row-options-' + this.args.object.id).classList.remove('d-none');
      document.querySelector('#row-options-' + this.args.object.id).classList.add('d-block');
    }
    hideOptions() {
      document.querySelector('#row-options-' + this.args.object.id).classList.add('d-none');
      document.querySelector('#row-options-' + this.args.object.id).classList.remove('d-block');
    }
    toggleSelection() {
      if (this.isSelected === false) {
        document.querySelector('#row-' + this.args.object.id).classList.add('bg-info');
        this.isSelected = true;
        this.args.addToSelectedRowIDs(this.args.type.slug, this.args.object.id);
      } else {
        document.querySelector('#row-' + this.args.object.id).classList.remove('bg-info');
        this.isSelected = false;
        this.args.removeFromSelectedRowIDs(this.args.type.slug, this.args.object.id);
      }
    }
    toggleOptions() {
      if (this.isShowing === false) {
        document.querySelector('#row-options-' + this.args.object.id).classList.remove('d-none');
        document.querySelector('#row-options-' + this.args.object.id).classList.add('d-block');
        this.isShowing = true;
      } else {
        document.querySelector('#row-options-' + this.args.object.id).classList.add('d-none');
        document.querySelector('#row-options-' + this.args.object.id).classList.remove('d-block');
        this.isShowing = false;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isShowing", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isSelected", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showBlueprintObjectModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showBlueprintObjectModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showOptions", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showOptions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideOptions", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "hideOptions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleSelection", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSelection"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleOptions", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleOptions"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTableRowComponent);
});
;define("junction/components/types/list-table/search-box", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _service, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="input-group mx-0">
    <Input
      @type="text"
      @value={{@searchQuery}}
      class="border border-{{this.colormodes.inverseMode}} form-control"
      placeholder="Quick search"
      @enter={{@search}}
      @escape-press={{@clearSearch}}
    />
  
    {{#if (or @searchQuery @showClearSearchButton)}}
      <button
        class="btn btn-outline-{{this.colormodes.inverseMode}}"
        type="button"
        {{on "click" @clearSearch}}
        {{on "click" @clearSearchQuery}}
      ><i class="fa-solid fa-xmark"></i></button>
    {{/if}}
  
    <button
      class="btn btn-outline-{{this.colormodes.inverseMode}}"
      type="button"
      {{on "click" this.search}}
    ><i class="fa-solid fa-magnifying-glass"></i></button>
  
    <button
      class="btn btn-outline-{{this.colormodes.inverseMode}}"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#advancedSearchModal"
    ><i class="fa-solid fa-filter"></i></button>
  </div>
  
  {{! Modal }}
  <div class="modal fade" id="advancedSearchModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Advanced search</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
  
          <div class="mb-3">
            <Input
              @type="text"
              @value={{mut (get @advancedSearchQuery "id")}}
              placeholder="Search by ID"
              class="form-control"
            />
          </div>
  
          {{#each @type.modules as |module|}}
            {{#if module.list_searchable}}
              <div class="mb-3">
                <Input
                  @type="text"
                  @value={{mut (get @advancedSearchQuery module.input_slug)}}
                  placeholder="Keywords for {{module.input_slug}}"
                  class="form-control"
                />
              </div>
            {{/if}}
          {{/each}}
  
          <div class="mb-3">
            <Input
              @type="text"
              @value={{mut (get @advancedSearchQuery "content_privacy")}}
              placeholder="Keywords for content_privacy"
              class="form-control"
            />
          </div>
  
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            {{on "click" this.advancedSearch}}
          >Search</button>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "cWDFcpvE",
    "block": "[[[10,0],[14,0,\"input-group mx-0\"],[12],[1,\"\\n  \"],[8,[39,1],[[16,0,[29,[\"border border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" form-control\"]]],[24,\"placeholder\",\"Quick search\"]],[[\"@type\",\"@value\",\"@enter\",\"@escape-press\"],[\"text\",[30,1],[30,2],[30,3]]],null],[1,\"\\n\\n\"],[41,[28,[37,3],[[30,1],[30,4]],null],[[[1,\"    \"],[11,\"button\"],[16,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[24,4,\"button\"],[4,[38,5],[\"click\",[30,3]],null],[4,[38,5],[\"click\",[30,5]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-xmark\"],[12],[13],[13],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[11,\"button\"],[16,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"search\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-magnifying-glass\"],[12],[13],[13],[1,\"\\n\\n  \"],[10,\"button\"],[15,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#advancedSearchModal\"],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-filter\"],[12],[13],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"modal fade\"],[14,1,\"advancedSearchModal\"],[14,\"tabindex\",\"-1\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-centered\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[12],[1,\"Advanced search\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n\\n        \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,\"placeholder\",\"Search by ID\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,8],[[28,[37,9],[[30,6],\"id\"],null]],null]]],null],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[42,[28,[37,11],[[28,[37,11],[[30,7,[\"modules\"]]],null]],null],null,[[[41,[30,8,[\"list_searchable\"]],[[[1,\"            \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n              \"],[8,[39,1],[[16,\"placeholder\",[29,[\"Keywords for \",[30,8,[\"input_slug\"]]]]],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,8],[[28,[37,9],[[30,6],[30,8,[\"input_slug\"]]],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null]],[8]],null],[1,\"\\n        \"],[10,0],[14,0,\"mb-3\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,\"placeholder\",\"Keywords for content_privacy\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,8],[[28,[37,9],[[30,6],\"content_privacy\"],null]],null]]],null],[1,\"\\n        \"],[13],[1,\"\\n\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,\"data-bs-dismiss\",\"modal\"],[24,4,\"button\"],[4,[38,5],[\"click\",[30,0,[\"advancedSearch\"]]],null],[12],[1,\"Search\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@searchQuery\",\"@search\",\"@clearSearch\",\"@showClearSearchButton\",\"@clearSearchQuery\",\"@advancedSearchQuery\",\"@type\",\"module\"],false,[\"div\",\"input\",\"if\",\"or\",\"button\",\"on\",\"i\",\"h1\",\"mut\",\"get\",\"each\",\"-track-array\"]]",
    "moduleName": "junction/components/types/list-table/search-box.hbs",
    "isStrictMode": false
  });
  let TypesListTableSearchBoxComponent = _exports.default = (_class = class TypesListTableSearchBoxComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
      _initializerDefineProperty(this, "store", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "types", _descriptor4, this);
    }
    async advancedSearch() {
      await this.args.advancedSearch();
    }
    async search() {
      this.args.changePageNumber(1);
      await this.type.search();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "advancedSearch", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "advancedSearch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "search", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "search"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTableSearchBoxComponent);
});
;define("junction/components/types/list-table/title-bar", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "bootstrap", "@ember/object", "papaparse", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _bootstrap, _object, _papaparse, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"@ember/object",0,"papaparse",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if
    (not (or (eq @type.slug "deleted_record") (eq @type.slug "file_record")))
  }}
    <div id="trackOptionButtons" class="position-absolute top-0 start-0 d-none">
      <button
        id="removeTrackButton"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#deleteModel"
        class="btn btn-outline-danger btn-sm m-1"
      ><i class="fa-solid fa-triangle-exclamation"></i> Remove Track</button>
      <button
        id="editTrackButton"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#editModel"
        class="btn btn-outline-{{this.colormodes.inverseMode}} btn-sm m-1"
      ><i class="fa-solid fa-edit"></i> Edit Track</button>
    </div>
  {{/if}}
  
  <div class="container-xxl">
  
    <h1
      class="text-capitalize text-center mt-5 px-0 display-2 mb-4
        {{if (eq @type.slug 'deleted_record') 'text-danger'}}"
    >
      {{@type.plural}}
    </h1>
  
    <div class="col-lg-9 mx-auto px-0 mb-4 text-center">
  
      {{#if
        (and
          (not-eq this.type.currentType.slug "deleted_record")
          (not-eq this.type.currentType.slug "apikey_record")
          (not-eq this.type.currentType.slug "platform_record")
        )
      }}
        {{#if
          (and
            this.types.json.modules.webapp.implementation_summary
            this.types.json.modules.webapp.project_description
          )
        }}
          <button
            class="btn rounded-pill m-1 btn-outline-{{this.colormodes.inverseMode}}"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#sampleDataPromptModal"
          ><i class="fa-solid fa-wand-magic-sparkles"></i> Sample Data</button>
        {{/if}}
  
        <button
          class="btn rounded-pill m-1 btn-outline-{{this.colormodes.inverseMode}}"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#publicFormModal"
        ><i class="fa-solid fa-list-check"></i> Public Form</button>
  
        <button
          {{on "click" this.papaUnparse}}
          type="button"
          class="btn rounded-pill m-1 btn-outline-{{this.colormodes.inverseMode}}"
        ><i class="fa-solid fa-file-csv"></i> Data Exchange</button>
      {{/if}}
  
      {{#if
        (and
          (not-eq this.type.currentType.slug "deleted_record")
          (not-eq this.type.currentType.slug "file_record")
          (not-eq this.type.currentType.slug "apikey_record")
          (not-eq this.type.currentType.slug "platform_record")
        )
      }}
        <button
          data-bs-target="#trackAPIModal"
          data-bs-toggle="modal"
          class="btn rounded-pill m-1 btn-outline-{{this.colormodes.inverseMode}}"
          type="button"
        ><i class="fa-solid fa-code"></i> Track API</button>
      {{/if}}
    </div>
  
    <div class="row col-lg-9 mx-auto px-0 mb-4">
      <div
        class="order-3 order-lg-1 col-lg-3 px-0 col-12 my-1 d-flex justify-content-end"
      >
        <Types::ListTable::PageLengthSelector
          @updatePageLength={{@updatePageLength}}
          @currentPageLength={{@currentPageLength}}
          @type={{@type}}
        />
      </div>
  
      <div
        class="order-2 order-lg-2 col-lg-5 px-0 col-12 my-1 d-flex justify-content-end"
      >
        <Types::ListTable::SearchBox
          @type={{@type}}
          @search={{@search}}
          @clearSearch={{@clearSearch}}
          @advancedSearch={{@advancedSearch}}
          @showClearSearchButton={{@showClearSearchButton}}
          @searchQuery={{@searchQuery}}
          @advancedSearchQuery={{@advancedSearchQuery}}
          @clearSearchQuery={{@clearSearchQuery}}
          @changePageNumber={{@changePageNumber}}
        />
      </div>
  
      {{#unless @type.readonly}}
        <div
          class="order-1 order-lg-3 col-lg-4 px-0 col-12 my-1 d-flex justify-content-end"
        >
          {{#if
            (and (get @selectedRowIDs @type.slug) (not-eq @type.editable false))
          }}
            <button
              {{on "click" this.openMultiModal}}
              type="button"
              class="btn btn-info fw-normal w-100 border border-1 border-{{this.colormodes.inverseMode}}
                border-start-0"
            ><i class="fa-solid fa-layer-group"></i>&nbsp;Multi-edit</button>
          {{/if}}
  
          <button
            {{on "click" this.openNewModal}}
            type="button"
            class="btn text-capitalize btn-primary fw-normal w-100 border border-1 border-{{this.colormodes.inverseMode}}
              border-start-sm-1 border-start-md-0"
          ><i class="fa-solid fa-plus"></i>&nbsp;New {{@type.name}}</button>
        </div>
      {{/unless}}
  
      {{#if (eq @type.slug "deleted_record")}}
        <div
          class="order-1 order-lg-3 col-lg-4 px-0 col-12 my-1 d-flex justify-content-end"
        >
          {{#if (get @selectedRowIDs @type.slug)}}
            <button
              {{on "click" this.openMultiModal}}
              type="button"
              class="btn btn-danger fw-normal w-100 border border-1 border-{{this.colormodes.inverseMode}}
                border-start-0"
            ><i class="fa-solid fa-trash-alt"></i>&nbsp;Delete permanently</button>
          {{else}}
            <button
              type="button"
              class="btn btn-outline-{{this.colormodes.inverseMode}}
                fw-normal w-100 border border-1 border-{{this.colormodes.inverseMode}}
                border-start-0"
            ><i class="fa-solid fa-trash-alt"></i>&nbsp;Select to delete
              permanently</button>
          {{/if}}
        </div>
      {{/if}}
    </div>
  </div>
  
  */
  {
    "id": "EFa0V4lg",
    "block": "[[[41,[28,[37,1],[[28,[37,2],[[28,[37,3],[[30,1,[\"slug\"]],\"deleted_record\"],null],[28,[37,3],[[30,1,[\"slug\"]],\"file_record\"],null]],null]],null],[[[1,\"  \"],[10,0],[14,1,\"trackOptionButtons\"],[14,0,\"position-absolute top-0 start-0 d-none\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,1,\"removeTrackButton\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#deleteModel\"],[14,0,\"btn btn-outline-danger btn-sm m-1\"],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-triangle-exclamation\"],[12],[13],[1,\" Remove Track\"],[13],[1,\"\\n    \"],[10,\"button\"],[14,1,\"editTrackButton\"],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#editModel\"],[15,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]],\" btn-sm m-1\"]]],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-edit\"],[12],[13],[1,\" Edit Track\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,0],[14,0,\"container-xxl\"],[12],[1,\"\\n\\n  \"],[10,\"h1\"],[15,0,[29,[\"text-capitalize text-center mt-5 px-0 display-2 mb-4\\n      \",[52,[28,[37,3],[[30,1,[\"slug\"]],\"deleted_record\"],null],\"text-danger\"]]]],[12],[1,\"\\n    \"],[1,[30,1,[\"plural\"]]],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"col-lg-9 mx-auto px-0 mb-4 text-center\"],[12],[1,\"\\n\\n\"],[41,[28,[37,8],[[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"apikey_record\"],null],[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"platform_record\"],null]],null],[[[41,[28,[37,8],[[30,0,[\"types\",\"json\",\"modules\",\"webapp\",\"implementation_summary\"]],[30,0,[\"types\",\"json\",\"modules\",\"webapp\",\"project_description\"]]],null],[[[1,\"        \"],[10,\"button\"],[15,0,[29,[\"btn rounded-pill m-1 btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#sampleDataPromptModal\"],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-wand-magic-sparkles\"],[12],[13],[1,\" Sample Data\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n      \"],[10,\"button\"],[15,0,[29,[\"btn rounded-pill m-1 btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"data-bs-toggle\",\"modal\"],[14,\"data-bs-target\",\"#publicFormModal\"],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-list-check\"],[12],[13],[1,\" Public Form\"],[13],[1,\"\\n\\n      \"],[11,\"button\"],[16,0,[29,[\"btn rounded-pill m-1 btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[24,4,\"button\"],[4,[38,10],[\"click\",[30,0,[\"papaUnparse\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-file-csv\"],[12],[13],[1,\" Data Exchange\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,8],[[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"file_record\"],null],[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"apikey_record\"],null],[28,[37,9],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"platform_record\"],null]],null],[[[1,\"      \"],[10,\"button\"],[14,\"data-bs-target\",\"#trackAPIModal\"],[14,\"data-bs-toggle\",\"modal\"],[15,0,[29,[\"btn rounded-pill m-1 btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-code\"],[12],[13],[1,\" Track API\"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"row col-lg-9 mx-auto px-0 mb-4\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"order-3 order-lg-1 col-lg-3 px-0 col-12 my-1 d-flex justify-content-end\"],[12],[1,\"\\n      \"],[8,[39,11],null,[[\"@updatePageLength\",\"@currentPageLength\",\"@type\"],[[30,2],[30,3],[30,1]]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"order-2 order-lg-2 col-lg-5 px-0 col-12 my-1 d-flex justify-content-end\"],[12],[1,\"\\n      \"],[8,[39,12],null,[[\"@type\",\"@search\",\"@clearSearch\",\"@advancedSearch\",\"@showClearSearchButton\",\"@searchQuery\",\"@advancedSearchQuery\",\"@clearSearchQuery\",\"@changePageNumber\"],[[30,1],[30,4],[30,5],[30,6],[30,7],[30,8],[30,9],[30,10],[30,11]]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[51,[30,1,[\"readonly\"]]],[[[1,\"      \"],[10,0],[14,0,\"order-1 order-lg-3 col-lg-4 px-0 col-12 my-1 d-flex justify-content-end\"],[12],[1,\"\\n\"],[41,[28,[37,8],[[28,[37,14],[[30,12],[30,1,[\"slug\"]]],null],[28,[37,9],[[30,1,[\"editable\"]],false],null]],null],[[[1,\"          \"],[11,\"button\"],[16,0,[29,[\"btn btn-info fw-normal w-100 border border-1 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n              border-start-0\"]]],[24,4,\"button\"],[4,[38,10],[\"click\",[30,0,[\"openMultiModal\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-layer-group\"],[12],[13],[1,\" Multi-edit\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n        \"],[11,\"button\"],[16,0,[29,[\"btn text-capitalize btn-primary fw-normal w-100 border border-1 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            border-start-sm-1 border-start-md-0\"]]],[24,4,\"button\"],[4,[38,10],[\"click\",[30,0,[\"openNewModal\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-plus\"],[12],[13],[1,\" New \"],[1,[30,1,[\"name\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,3],[[30,1,[\"slug\"]],\"deleted_record\"],null],[[[1,\"      \"],[10,0],[14,0,\"order-1 order-lg-3 col-lg-4 px-0 col-12 my-1 d-flex justify-content-end\"],[12],[1,\"\\n\"],[41,[28,[37,14],[[30,12],[30,1,[\"slug\"]]],null],[[[1,\"          \"],[11,\"button\"],[16,0,[29,[\"btn btn-danger fw-normal w-100 border border-1 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n              border-start-0\"]]],[24,4,\"button\"],[4,[38,10],[\"click\",[30,0,[\"openMultiModal\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-trash-alt\"],[12],[13],[1,\" Delete permanently\"],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,\"button\"],[15,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n              fw-normal w-100 border border-1 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n              border-start-0\"]]],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-trash-alt\"],[12],[13],[1,\" Select to delete\\n            permanently\"],[13],[1,\"\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@type\",\"@updatePageLength\",\"@currentPageLength\",\"@search\",\"@clearSearch\",\"@advancedSearch\",\"@showClearSearchButton\",\"@searchQuery\",\"@advancedSearchQuery\",\"@clearSearchQuery\",\"@changePageNumber\",\"@selectedRowIDs\"],false,[\"if\",\"not\",\"or\",\"eq\",\"div\",\"button\",\"i\",\"h1\",\"and\",\"not-eq\",\"on\",\"types/list-table/page-length-selector\",\"types/list-table/search-box\",\"unless\",\"get\"]]",
    "moduleName": "junction/components/types/list-table/title-bar.hbs",
    "isStrictMode": false
  });
  let TypesListTableTitleBarComponent = _exports.default = (_class = class TypesListTableTitleBarComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
      _initializerDefineProperty(this, "object", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "types", _descriptor4, this);
      _initializerDefineProperty(this, "store", _descriptor5, this);
    }
    openMultiModal() {
      this.object.reloadingVars = true;
      this.object.currentObject = null;
      this.object.reloadingVars = false;
      let bp = new _bootstrap.Modal(document.getElementById('editObjectModal-' + this.type.currentType.slug + '-multi'), {});
      bp.show();
    }
    openNewModal() {
      this.object.reloadingVars = true;
      this.object.currentObject = null;
      this.object.reloadingVars = false;
      let bp = new _bootstrap.Modal(document.getElementById('editObjectModal'), {});
      bp.show();
    }
    async papaUnparse() {
      this.type.loadingSearchResults = true;
      let data = await this.store.query(this.type.currentType.slug, {
        sort: '-id',
        show_public_objects_only: false,
        page: {
          limit: -1,
          offset: 0
        }
      });
      var vvv = [];
      data.forEach(async obj => {
        await vvv.push(obj.modules);
      });
      let papa = _papaparse.default.unparse(vvv);
      let dd = new Date();
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(papa);
      hiddenElement.target = '_blank';

      //provide the name for the CSV file to be downloaded
      hiddenElement.download = this.type.currentType.slug + '_' + dd.toISOString().split('T')[0] + '_' + Math.floor(dd / 1000) + '.csv';
      hiddenElement.click();
      this.type.loadingSearchResults = false;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "openMultiModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openMultiModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openNewModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openNewModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "papaUnparse", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "papaUnparse"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesListTableTitleBarComponent);
});
;define("junction/components/types/modules/input-option", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/object", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _service, _object, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="input-group mb-3">
    <Input
      @type="text"
      class="form-control"
      placeholder="Option title"
      @value={{mut (get this.option "title")}}
      {{on "focus" this.clickedInside}}
      {{on-click-outside this.validateOption}}
      {{on-key "Tab" this.validateOption}}
      {{on-key "Enter" this.validateOption}}
    />
  
    {{#if (get this.option "title")}}
      <Input
        @type="text"
        class="form-control"
        placeholder="Option value"
        @value={{mut (get this.option "slug")}}
        {{on "focus" this.clickedInside}}
        {{on-click-outside this.validateOption}}
        {{on-key "Tab" this.validateOption}}
        {{on-key "Enter" this.validateOption}}
      />
    {{/if}}
  
    {{#if (eq @index 0)}}
      <span class="input-group-text" {{on "click" this.module.addOption}}><i
          class="fa-solid fa-circle-plus"
        ></i></span>
    {{else}}
      <span
        class="input-group-text text-danger"
        {{on "click" (fn this.module.removeOption @index)}}
      ><i class="fa-solid fa-circle-xmark"></i></span>
    {{/if}}
  </div>
  */
  {
    "id": "XxgHsSBB",
    "block": "[[[10,0],[14,0,\"input-group mb-3\"],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"form-control\"],[24,\"placeholder\",\"Option title\"],[4,[38,4],[\"focus\",[30,0,[\"clickedInside\"]]],null],[4,[38,5],[[30,0,[\"validateOption\"]]],null],[4,[38,6],[\"Tab\",[30,0,[\"validateOption\"]]],null],[4,[38,6],[\"Enter\",[30,0,[\"validateOption\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[28,[37,2],[[28,[37,3],[[30,0,[\"option\"]],\"title\"],null]],null]]],null],[1,\"\\n\\n\"],[41,[28,[37,3],[[30,0,[\"option\"]],\"title\"],null],[[[1,\"    \"],[8,[39,1],[[24,0,\"form-control\"],[24,\"placeholder\",\"Option value\"],[4,[38,4],[\"focus\",[30,0,[\"clickedInside\"]]],null],[4,[38,5],[[30,0,[\"validateOption\"]]],null],[4,[38,6],[\"Tab\",[30,0,[\"validateOption\"]]],null],[4,[38,6],[\"Enter\",[30,0,[\"validateOption\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[28,[37,2],[[28,[37,3],[[30,0,[\"option\"]],\"slug\"],null]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,8],[[30,1],0],null],[[[1,\"    \"],[11,1],[24,0,\"input-group-text\"],[4,[38,4],[\"click\",[30,0,[\"module\",\"addOption\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-plus\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[11,1],[24,0,\"input-group-text text-danger\"],[4,[38,4],[\"click\",[28,[37,11],[[30,0,[\"module\",\"removeOption\"]],[30,1]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-xmark\"],[12],[13],[13],[1,\"\\n\"]],[]]],[13]],[\"@index\"],false,[\"div\",\"input\",\"mut\",\"get\",\"on\",\"on-click-outside\",\"on-key\",\"if\",\"eq\",\"span\",\"i\",\"fn\"]]",
    "moduleName": "junction/components/types/modules/input-option.hbs",
    "isStrictMode": false
  });
  let TypesModulesInputOptionComponent = _exports.default = (_class = class TypesModulesInputOptionComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "module", _descriptor, this);
      _initializerDefineProperty(this, "clickedOutside", _descriptor2, this);
      _defineProperty(this, "convertToSlug", Text => {
        return Text.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '').replace(/-/g, '_');
      });
      _initializerDefineProperty(this, "option", _descriptor3, this);
    }
    validateOption(e) {
      if (this.clickedOutside === false) {
        this.clickedOutside = true;
        if (this.option.title || this.option.slug) {
          if (!this.option.slug) {
            this.option.slug = this.convertToSlug(this.option.title);
          }
          if (!this.option.title) {
            this.option.title = this.option.slug;
          }
          this.option = this.option;
          this.module.updateOption(this.option);
        }
      }
    }
    clickedInside() {
      this.clickedOutside = false;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "module", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "clickedOutside", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "option", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.args.option !== undefined ? this.args.option : {
        title: '',
        slug: ''
      };
    }
  }), _applyDecoratedDescriptor(_class.prototype, "validateOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clickedInside", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clickedInside"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesModulesInputOptionComponent);
});
;define("junction/components/types/modules/input-options", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each this.module.inputOptions as |option index|}}
    <Types::Modules::InputOption @index={{index}} @option={{option}} />
  {{else}}
    <Types::Modules::InputOption @index={{0}} />
  {{/each}}
  
  {{! "input_options":[{"slug":"admin","title":"Admin"},{"slug":"organisation_employee","title":"Organisation Employee"},{"slug":"community_leader","title":"Community Leader"} }}
  */
  {
    "id": "LaDNQfnU",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"module\",\"inputOptions\"]]],null]],null],null,[[[1,\"  \"],[8,[39,2],null,[[\"@index\",\"@option\"],[[30,2],[30,1]]],null],[1,\"\\n\"]],[1,2]],[[[1,\"  \"],[8,[39,2],null,[[\"@index\"],[0]],null],[1,\"\\n\"]],[]]],[1,\"\\n\"]],[\"option\",\"index\"],false,[\"each\",\"-track-array\",\"types/modules/input-option\"]]",
    "moduleName": "junction/components/types/modules/input-options.hbs",
    "isStrictMode": false
  });
  let TypesModulesInputOptionsComponent = _exports.default = (_class = class TypesModulesInputOptionsComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "module", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "module", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesModulesInputOptionsComponent);
});
;define("junction/components/types/modules/list", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#unless this.reloadTypes}}
  
    {{#if this.type.currentType}}
      {{#if
        (and
          (not-eq this.type.currentType.slug "deleted_record")
          (not-eq this.type.currentType.slug "file_record")
        )
      }}
        <div
          id="module-names"
          class="d-flex align-items-center flex-wrap justify-content-center mb-5 col-lg-7 col-md-10 mx-auto"
        >
          {{#each this.type.currentType.modules as |module|}}
            {{#if (eq module.input_slug "content_privacy")}}
              <div
                class="btn-group
                  {{if @activateReordering 'wobble'}}
                  mx-1 my-1 module-name-btn"
                data-module-slug={{module.input_slug}}
                role="group"
              ><button
                  disabled
                  title="{{if
                    @activateReordering
                    'Hold and drag to reorder'
                    'Click to edit module'
                  }}"
                  class="rounded-pill btn btn-outline-{{this.colormodes.inverseMode}}
                    px-3"
                  id="{{this.type.currentType.slug}}-module-{{module.input_slug}}"
                  type="button"
                >{{module.input_slug}}</button></div>
            {{else}}
              <div
                class="btn-group
                  {{if @activateReordering 'wobble'}}
                  mx-1 my-1 module-name-btn"
                data-module-slug={{module.input_slug}}
                role="group"
              ><button
                  title="{{if
                    @activateReordering
                    'Hold and drag to reorder'
                    'Click to edit module'
                  }}"
                  {{on "click" (fn this.module.changeModule module)}}
                  data-bs-target="#moduleModal"
                  data-bs-toggle="modal"
                  class="rounded-pill btn btn-outline-{{this.colormodes.inverseMode}}
                    px-3"
                  id="{{this.type.currentType.slug}}-module-{{module.input_slug}}"
                  type="button"
                  {{on
                    "mouseover"
                    (fn this.highlightLinkages module.linked_type)
                  }}
                  {{on
                    "mouseout"
                    (fn this.unhighlightLinkages module.linked_type)
                  }}
                >{{if
                    module.linked_type
                    (html-safe '<i class="fa-solid fa-link"></i>')
                  }}
                  {{module.input_slug}}</button></div>
            {{/if}}
          {{/each}}
          <button
            data-bs-target="#newModuleModel"
            data-bs-toggle="modal"
            class="rounded-pill mx-1 btn btn-outline-{{this.colormodes.inverseMode}}
              my-1"
            type="button"
          ><i class="fa-solid fa-plus"></i></button>
        </div>
      {{else}}
        <div class="d-flex align-items-center justify-content-center mb-4"></div>
      {{/if}}
    {{/if}}
  
    {{#if @activateReordering}}
      <div
        class="w-50 mt-n4 mb-5 mx-auto rounded-pill bg-{{this.colormodes.inverseMode}}
          p-1 d-flex align-items-center justify-content-between"
      >
        <button
          class="btn btn-sm btn-outline-{{this.colormodes.mode}} rounded-pill"
          type="button"
          {{on "click" this.ignoreReordering}}
        ><i class="fa-solid fa-circle-xmark"></i> Do not save</button>
        <button
          class="btn btn-sm btn-primary rounded-pill"
          type="button"
          {{on "click" this.saveReordering}}
        ><i class="fa-solid fa-circle-check"></i> Save reordering</button>
      </div>
    {{/if}}
  
  {{/unless}}
  */
  {
    "id": "qXu1xitQ",
    "block": "[[[41,[51,[30,0,[\"reloadTypes\"]]],[[[1,\"\\n\"],[41,[30,0,[\"type\",\"currentType\"]],[[[41,[28,[37,2],[[28,[37,3],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[28,[37,3],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"file_record\"],null]],null],[[[1,\"      \"],[10,0],[14,1,\"module-names\"],[14,0,\"d-flex align-items-center flex-wrap justify-content-center mb-5 col-lg-7 col-md-10 mx-auto\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,0,[\"type\",\"currentType\",\"modules\"]]],null]],null],null,[[[41,[28,[37,7],[[30,1,[\"input_slug\"]],\"content_privacy\"],null],[[[1,\"            \"],[10,0],[15,0,[29,[\"btn-group\\n                \",[52,[30,2],\"wobble\"],\"\\n                mx-1 my-1 module-name-btn\"]]],[15,\"data-module-slug\",[30,1,[\"input_slug\"]]],[14,\"role\",\"group\"],[12],[10,\"button\"],[14,\"disabled\",\"\"],[15,\"title\",[29,[[52,[30,2],\"Hold and drag to reorder\",\"Click to edit module\"]]]],[15,0,[29,[\"rounded-pill btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n                  px-3\"]]],[15,1,[29,[[30,0,[\"type\",\"currentType\",\"slug\"]],\"-module-\",[30,1,[\"input_slug\"]]]]],[14,4,\"button\"],[12],[1,[30,1,[\"input_slug\"]]],[13],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,0],[15,0,[29,[\"btn-group\\n                \",[52,[30,2],\"wobble\"],\"\\n                mx-1 my-1 module-name-btn\"]]],[15,\"data-module-slug\",[30,1,[\"input_slug\"]]],[14,\"role\",\"group\"],[12],[11,\"button\"],[16,\"title\",[29,[[52,[30,2],\"Hold and drag to reorder\",\"Click to edit module\"]]]],[24,\"data-bs-target\",\"#moduleModal\"],[24,\"data-bs-toggle\",\"modal\"],[16,0,[29,[\"rounded-pill btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n                  px-3\"]]],[16,1,[29,[[30,0,[\"type\",\"currentType\",\"slug\"]],\"-module-\",[30,1,[\"input_slug\"]]]]],[24,4,\"button\"],[4,[38,9],[\"click\",[28,[37,10],[[30,0,[\"module\",\"changeModule\"]],[30,1]],null]],null],[4,[38,9],[\"mouseover\",[28,[37,10],[[30,0,[\"highlightLinkages\"]],[30,1,[\"linked_type\"]]],null]],null],[4,[38,9],[\"mouseout\",[28,[37,10],[[30,0,[\"unhighlightLinkages\"]],[30,1,[\"linked_type\"]]],null]],null],[12],[1,[52,[30,1,[\"linked_type\"]],[28,[37,11],[\"<i class=\\\"fa-solid fa-link\\\"></i>\"],null]]],[1,\"\\n                \"],[1,[30,1,[\"input_slug\"]]],[13],[13],[1,\"\\n\"]],[]]]],[1]],null],[1,\"        \"],[10,\"button\"],[14,\"data-bs-target\",\"#newModuleModel\"],[14,\"data-bs-toggle\",\"modal\"],[15,0,[29,[\"rounded-pill mx-1 btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n            my-1\"]]],[14,4,\"button\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-plus\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],[[[1,\"      \"],[10,0],[14,0,\"d-flex align-items-center justify-content-center mb-4\"],[12],[13],[1,\"\\n\"]],[]]]],[]],null],[1,\"\\n\"],[41,[30,2],[[[1,\"    \"],[10,0],[15,0,[29,[\"w-50 mt-n4 mb-5 mx-auto rounded-pill bg-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n        p-1 d-flex align-items-center justify-content-between\"]]],[12],[1,\"\\n      \"],[11,\"button\"],[16,0,[29,[\"btn btn-sm btn-outline-\",[30,0,[\"colormodes\",\"mode\"]],\" rounded-pill\"]]],[24,4,\"button\"],[4,[38,9],[\"click\",[30,0,[\"ignoreReordering\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-xmark\"],[12],[13],[1,\" Do not save\"],[13],[1,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-sm btn-primary rounded-pill\"],[24,4,\"button\"],[4,[38,9],[\"click\",[30,0,[\"saveReordering\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-check\"],[12],[13],[1,\" Save reordering\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"]],[]],null]],[\"module\",\"@activateReordering\"],false,[\"unless\",\"if\",\"and\",\"not-eq\",\"div\",\"each\",\"-track-array\",\"eq\",\"button\",\"on\",\"fn\",\"html-safe\",\"i\"]]",
    "moduleName": "junction/components/types/modules/list.hbs",
    "isStrictMode": false
  });
  let TypesModulesListComponent = _exports.default = (_class = class TypesModulesListComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "module", _descriptor3, this);
      _initializerDefineProperty(this, "store", _descriptor4, this);
      _initializerDefineProperty(this, "types", _descriptor5, this);
      _initializerDefineProperty(this, "reloadTypes", _descriptor6, this);
    }
    highlightLinkages(l) {
      if (l !== undefined && document.querySelector('#track-' + l) !== null) {
        document.querySelector('#track-' + l).classList.add('bg-primary');
      }
    }
    unhighlightLinkages(l) {
      if (l !== undefined && document.querySelector('#track-' + l) !== null) {
        document.querySelector('#track-' + l).classList.remove('bg-primary');
      }
    }
    async ignoreReordering() {
      this.type.loadingSearchResults = true;
      this.args.stopWobble();
      this.reloadTypes = true;
      (0, _runloop.later)(this, () => {
        this.reloadTypes = false;
      }, 1);
      (0, _runloop.later)(this, () => {
        this.type.loadingSearchResults = false;
      }, 500);
    }
    async saveReordering() {
      this.type.loadingSearchResults = true;
      await this.types.json.save();
      await this.types.fetchAgain();
      this.type.loadingSearchResults = false;
      this.args.stopWobble();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "module", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "reloadTypes", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "highlightLinkages", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "highlightLinkages"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unhighlightLinkages", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "unhighlightLinkages"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ignoreReordering", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "ignoreReordering"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveReordering", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveReordering"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesModulesListComponent);
});
;define("junction/components/types/modules/modal", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="moduleModal"
    tabindex="-1"
    aria-labelledby="moduleModalLabel"
    aria-hidden="true"
    {{did-insert this.module.initModel}}
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1
            class="modal-title fs-5"
            id="moduleModalLabel"
          >{{this.module.currentModule.input_slug}}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
          >
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">slug</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Input
                disabled
                @type="text"
                @value={{this.module.currentModule.input_slug}}
                class="form-control"
              />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Primary field. Usually
                <em>title</em>
                or
                <em>name.</em></span>
            </div>
          </div>
  
          <div
            class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
          >
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">placeholder</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Input
                @type="text"
                @value={{mut this.module.currentModule.input_placeholder}}
                class="form-control"
              />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Descriptor for the field.</span>
            </div>
          </div>
  
          {{#if (not-eq this.module.currentModule.input_primary true)}}
            <div
              class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
            >
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">linked track</label>
              </div>
              <div class="my-1 col-12 col-md-7">
                <XToggle
                  @theme="ios"
                  @variant={{this.colormodes.mode}}
                  @value={{this.module.restrictToLinkedOnly}}
                  @onToggle={{this.module.changeToRestrictToLinkedOnly}}
                />
              </div>
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Dynamically links objects of another
                  track.</span>
              </div>
            </div>
  
            {{#if
              (and
                (or
                  (eq this.module.selectedInputType.slug "select")
                  (eq this.module.selectedInputType.slug "number")
                )
                (eq this.module.restrictToLinkedOnly true)
              )
            }}
              <div
                class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
              >
                <div class="my-1 py-0 col-12 col-md-2">
                  <label class="fst-italic col-form-label fw-bold">choose track</label>
                </div>
                <div class="my-1 col-12 col-md-7">
                  <PowerSelect
                    @selected={{this.module.linkedType}}
                    @options={{this.module.linkedTypesAvailable}}
                    @onChange={{this.module.changeLinkedType}}
                    @dropdownClass="in-modal-dropdown"
                    class="rounded-0 px-2 border-muted"
                    @placeholder="Select linked track"
                    as |tp|
                  >
                    {{tp}}
                  </PowerSelect>
                </div>
                <div class="my-1 col-12 col-md-3">
                  <span class="form-text">Choose the linked track</span>
                </div>
              </div>
            {{/if}}
  
            <div
              class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
            >
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">type</label>
              </div>
              <div class="my-1 col-12 col-md-7">
                {{#if (eq this.module.restrictToLinkedOnly true)}}
                  <PowerSelect
                    @selected={{this.module.selectedInputType}}
                    @options={{this.module.inputLinkedTypesOnly}}
                    @onChange={{this.module.changeInputType}}
                    @dropdownClass="in-modal-dropdown"
                    class="rounded-0 px-2 border-muted"
                    @placeholder="Select input type"
                    as |ip|
                  >
                    {{ip.title}}
                  </PowerSelect>
                {{else}}
                  <PowerSelect
                    @selected={{this.module.selectedInputType}}
                    @options={{this.module.inputTypes}}
                    @onChange={{this.module.changeInputType}}
                    @dropdownClass="in-modal-dropdown"
                    class="rounded-0 px-2 border-muted"
                    @placeholder="Select input type"
                    as |ip|
                  >
                    {{ip.title}}
                  </PowerSelect>
                {{/if}}
              </div>
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Form input type.</span>
              </div>
            </div>
  
            {{#if
              (and
                (eq this.module.selectedInputType.slug "select")
                (eq this.module.restrictToLinkedOnly false)
              )
            }}
              <Types::Modules::InputOptions />
            {{/if}}
  
            {{#if
              (and
                (not-eq this.module.selectedInputType.slug "editorjs")
                (not-eq this.module.selectedInputType.slug "file_uploader")
              )
            }}
              <div
                class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
              >
                <div class="my-1 py-0 col-12 col-md-2">
                  <label
                    class="fst-italic col-form-label fw-bold"
                  >mandatory?</label>
                </div>
                <div class="my-1 col-12 col-md-7">
                  <XToggle
                    @theme="ios"
                    @variant={{this.colormodes.mode}}
                    @value={{this.module.inputRequired}}
                    @onToggle={{fn (mut this.module.inputRequired)}}
                  />
                </div>
                <div class="my-1 col-12 col-md-3">
                  <span class="form-text">Is it a required field?</span>
                </div>
              </div>
            {{/if}}
  
            {{#if
              (or
                (eq this.module.selectedInputType.slug "select")
                (eq this.module.selectedInputType.slug "text")
                (eq this.module.selectedInputType.slug "textarea")
                (eq this.module.selectedInputType.slug "url")
                (eq this.module.selectedInputType.slug "number")
                (eq this.module.selectedInputType.slug "color")
                (eq this.module.selectedInputType.slug "date")
                (eq this.module.selectedInputType.slug "email")
                (eq this.module.selectedInputType.slug "tel")
                (eq this.module.selectedInputType.slug "datetime-local")
              )
            }}
              <div
                class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
              >
                <div class="my-1 py-0 col-12 col-md-2">
                  <label
                    class="fst-italic col-form-label fw-bold"
                  >multiple</label>
                </div>
                <div class="my-1 col-12 col-md-7">
                  <XToggle
                    @theme="ios"
                    @variant={{this.colormodes.mode}}
                    @value={{this.module.inputMultiple}}
                    @onToggle={{fn (mut this.module.inputMultiple)}}
                  />
                </div>
                <div class="my-1 col-12 col-md-3">
                  <span class="form-text">Allow multiple entries.</span>
                </div>
              </div>
            {{/if}}
  
            <div
              class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
            >
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">list</label>
              </div>
              <div class="my-1 col-12 col-md-7">
                <XToggle
                  @theme="ios"
                  @variant={{this.colormodes.mode}}
                  @value={{this.module.listField}}
                  @onToggle={{fn (mut this.module.listField)}}
                />
              </div>
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">List this field in the table view.</span>
              </div>
            </div>
  
            <div
              class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
            >
              <div class="my-1 py-0 col-12 col-md-2">
                <label
                  class="fst-italic col-form-label fw-bold"
                >searchable</label>
              </div>
              <div class="my-1 col-12 col-md-7">
                <XToggle
                  @theme="ios"
                  @variant={{this.colormodes.mode}}
                  @value={{this.module.listSearchable}}
                  @onToggle={{fn (mut this.module.listSearchable)}}
                />
              </div>
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Searchable field in table view.</span>
              </div>
            </div>
  
            <div
              class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
            >
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">sort-able</label>
              </div>
              <div class="my-1 col-12 col-md-7">
                <XToggle
                  @theme="ios"
                  @variant={{this.colormodes.mode}}
                  @value={{this.module.listSortable}}
                  @onToggle={{fn (mut this.module.listSortable)}}
                />
              </div>
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Sort-able field in table view.</span>
              </div>
            </div>
          {{else}}
            <div
              class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
            >
              <div class="my-1 py-0 col-12 col-md-2">
                <label class="fst-italic col-form-label fw-bold">unique</label>
              </div>
              <div class="my-1 col-12 col-md-7">
                <XToggle
                  @theme="ios"
                  @variant={{this.colormodes.mode}}
                  @value={{this.module.inputUnique}}
                  @onToggle={{fn (mut this.module.inputUnique)}}
                />
              </div>
              <div class="my-1 col-12 col-md-3">
                <span class="form-text">Never repeat primary field.</span>
              </div>
            </div>
          {{/if}}
  
        </div>
        <div
          class="modal-footer justify-content-between p-1 d-flex align-items-center"
        >
          {{#if (not-eq this.module.currentModule.input_primary true)}}
            <button
              {{on "click" this.module.delete}}
              type="button"
              class="btn btn-danger"
            ><i class="fa-solid fa-trash"></i></button>
          {{else}}
            <div></div>
          {{/if}}
          <button
            {{on "click" this.module.save}}
            type="button"
            class="btn btn-primary"
          >Save changes</button>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "HlZUD+nr",
    "block": "[[[11,0],[24,0,\"modal fade\"],[24,1,\"moduleModal\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"moduleModalLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[[30,0,[\"module\",\"initModel\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-scrollable modal-lg\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"moduleModalLabel\"],[12],[1,[30,0,[\"module\",\"currentModule\",\"input_slug\"]]],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"slug\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,5],[[24,\"disabled\",\"\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"module\",\"currentModule\",\"input_slug\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Primary field. Usually\\n              \"],[10,\"em\"],[12],[1,\"title\"],[13],[1,\"\\n              or\\n              \"],[10,\"em\"],[12],[1,\"name.\"],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"placeholder\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,5],[[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,8],[[30,0,[\"module\",\"currentModule\",\"input_placeholder\"]]],null]]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Descriptor for the field.\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[41,[28,[37,10],[[30,0,[\"module\",\"currentModule\",\"input_primary\"]],true],null],[[[1,\"          \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"linked track\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"restrictToLinkedOnly\"]],[30,0,[\"module\",\"changeToRestrictToLinkedOnly\"]]]],null],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Dynamically links objects of another\\n                track.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n\"],[41,[28,[37,12],[[28,[37,13],[[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"select\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"number\"],null]],null],[28,[37,14],[[30,0,[\"module\",\"restrictToLinkedOnly\"]],true],null]],null],[[[1,\"            \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n                \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"choose track\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n                \"],[8,[39,15],[[24,0,\"rounded-0 px-2 border-muted\"]],[[\"@selected\",\"@options\",\"@onChange\",\"@dropdownClass\",\"@placeholder\"],[[30,0,[\"module\",\"linkedType\"]],[30,0,[\"module\",\"linkedTypesAvailable\"]],[30,0,[\"module\",\"changeLinkedType\"]],\"in-modal-dropdown\",\"Select linked track\"]],[[\"default\"],[[[[1,\"\\n                  \"],[1,[30,1]],[1,\"\\n                \"]],[1]]]]],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Choose the linked track\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n          \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"type\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\"],[41,[28,[37,14],[[30,0,[\"module\",\"restrictToLinkedOnly\"]],true],null],[[[1,\"                \"],[8,[39,15],[[24,0,\"rounded-0 px-2 border-muted\"]],[[\"@selected\",\"@options\",\"@onChange\",\"@dropdownClass\",\"@placeholder\"],[[30,0,[\"module\",\"selectedInputType\"]],[30,0,[\"module\",\"inputLinkedTypesOnly\"]],[30,0,[\"module\",\"changeInputType\"]],\"in-modal-dropdown\",\"Select input type\"]],[[\"default\"],[[[[1,\"\\n                  \"],[1,[30,2,[\"title\"]]],[1,\"\\n                \"]],[2]]]]],[1,\"\\n\"]],[]],[[[1,\"                \"],[8,[39,15],[[24,0,\"rounded-0 px-2 border-muted\"]],[[\"@selected\",\"@options\",\"@onChange\",\"@dropdownClass\",\"@placeholder\"],[[30,0,[\"module\",\"selectedInputType\"]],[30,0,[\"module\",\"inputTypes\"]],[30,0,[\"module\",\"changeInputType\"]],\"in-modal-dropdown\",\"Select input type\"]],[[\"default\"],[[[[1,\"\\n                  \"],[1,[30,3,[\"title\"]]],[1,\"\\n                \"]],[3]]]]],[1,\"\\n\"]],[]]],[1,\"            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Form input type.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n\"],[41,[28,[37,12],[[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"select\"],null],[28,[37,14],[[30,0,[\"module\",\"restrictToLinkedOnly\"]],false],null]],null],[[[1,\"            \"],[8,[39,16],null,null,null],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,12],[[28,[37,10],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"editorjs\"],null],[28,[37,10],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"file_uploader\"],null]],null],[[[1,\"            \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n                \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"mandatory?\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n                \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"inputRequired\"]],[28,[37,17],[[28,[37,8],[[30,0,[\"module\",\"inputRequired\"]]],null]],null]]],null],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Is it a required field?\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,13],[[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"select\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"text\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"textarea\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"url\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"number\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"color\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"date\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"email\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"tel\"],null],[28,[37,14],[[30,0,[\"module\",\"selectedInputType\",\"slug\"]],\"datetime-local\"],null]],null],[[[1,\"            \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n                \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"multiple\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n                \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"inputMultiple\"]],[28,[37,17],[[28,[37,8],[[30,0,[\"module\",\"inputMultiple\"]]],null]],null]]],null],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Allow multiple entries.\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n          \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"list\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"listField\"]],[28,[37,17],[[28,[37,8],[[30,0,[\"module\",\"listField\"]]],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"List this field in the table view.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"searchable\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"listSearchable\"]],[28,[37,17],[[28,[37,8],[[30,0,[\"module\",\"listSearchable\"]]],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Searchable field in table view.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"sort-able\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"listSortable\"]],[28,[37,17],[[28,[37,8],[[30,0,[\"module\",\"listSortable\"]]],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Sort-able field in table view.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"unique\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[8,[39,11],null,[[\"@theme\",\"@variant\",\"@value\",\"@onToggle\"],[\"ios\",[30,0,[\"colormodes\",\"mode\"]],[30,0,[\"module\",\"inputUnique\"]],[28,[37,17],[[28,[37,8],[[30,0,[\"module\",\"inputUnique\"]]],null]],null]]],null],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Never repeat primary field.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer justify-content-between p-1 d-flex align-items-center\"],[12],[1,\"\\n\"],[41,[28,[37,10],[[30,0,[\"module\",\"currentModule\",\"input_primary\"]],true],null],[[[1,\"          \"],[11,\"button\"],[24,0,\"btn btn-danger\"],[24,4,\"button\"],[4,[38,18],[\"click\",[30,0,[\"module\",\"delete\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-trash\"],[12],[13],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,0],[12],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,18],[\"click\",[30,0,[\"module\",\"save\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"tp\",\"ip\",\"ip\"],false,[\"div\",\"did-insert\",\"h1\",\"button\",\"label\",\"input\",\"span\",\"em\",\"mut\",\"if\",\"not-eq\",\"x-toggle\",\"and\",\"or\",\"eq\",\"power-select\",\"types/modules/input-options\",\"fn\",\"on\",\"i\"]]",
    "moduleName": "junction/components/types/modules/modal.hbs",
    "isStrictMode": false
  });
  let TypesModulesModalComponent = _exports.default = (_class = class TypesModulesModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "module", _descriptor3, this);
      _initializerDefineProperty(this, "colormodes", _descriptor4, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "module", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesModulesModalComponent);
});
;define("junction/components/types/modules/new", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "bootstrap", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _bootstrap, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Modal --}}
  <div class="modal fade" id="newModuleModel" tabindex="-1" aria-labelledby="newModuleModelLabel" aria-hidden="true" {{did-insert this.initModel}}>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="newModuleModelLabel"><i class="fa-solid fa-plus"></i> New Module</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3 align-items-start my-3 pb-3">
        <div class="my-1 py-0 col-12 col-md-2">
          <label class="fst-italic col-form-label fw-bold">field name</label>
        </div>
        <div class="my-1 col-12 col-md-7">
          <Input @type="text" @value={{this.moduleName}} class="form-control" placeholder="Eg. Body or publishing date or description" />
        </div>
        <div class="my-1 col-12 col-md-3">
          <span class="form-text">Please give a name to the input field</span>
        </div>
      </div>
        </div>
        <div class="modal-footer p-1 d-flex align-items-center justify-content-between">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close without saving</button>
          <button type="button" {{on 'click' this.save}} class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "C6kPMgKK",
    "block": "[[[11,0],[24,0,\"modal fade\"],[24,1,\"newModuleModel\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"newModuleModelLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[[30,0,[\"initModel\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"newModuleModelLabel\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-plus\"],[12],[13],[1,\" New Module\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"field name\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n        \"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"Eg. Body or publishing date or description\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"moduleName\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Please give a name to the input field\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer p-1 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close without saving\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"save\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"div\",\"did-insert\",\"h1\",\"i\",\"button\",\"label\",\"input\",\"span\",\"on\"]]",
    "moduleName": "junction/components/types/modules/new.hbs",
    "isStrictMode": false
  });
  let TypesModulesNewComponent = _exports.default = (_class = class TypesModulesNewComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "module", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
      _initializerDefineProperty(this, "moduleName", _descriptor4, this);
      _initializerDefineProperty(this, "types", _descriptor5, this);
      _initializerDefineProperty(this, "modelBox", _descriptor6, this);
      _defineProperty(this, "convertToSlug", Text => {
        return Text.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '').replace(/-/g, '_');
      });
    }
    initModel() {
      this.modelBox = new _bootstrap.Modal(document.getElementById('newModuleModel'), {});
      const myModalEl = document.getElementById('newModuleModel');
      myModalEl.addEventListener('hidden.bs.modal', async event => {
        this.types.fetchAgain();
      });
    }
    async save(e) {
      this.colormodes.buttonLoading(e);
      if (this.moduleName != '') {
        let slug = this.type.currentType.slug;
        var exists = false;
        this.types.json.modules[slug].modules.forEach(module => {
          if (module.input_slug == this.convertToSlug(this.moduleName)) {
            exists = true;
          }
        });
        if (exists) {
          alert('A module with this name already exists.');
        } else {
          this.types.json.modules[slug].modules.push({
            input_slug: this.convertToSlug(this.moduleName),
            input_type: 'text',
            input_placeholder: this.moduleName,
            list_field: false,
            list_searchable: false,
            list_sortable: false,
            var_type: 'string'
          });
          await this.types.json.save();
          this.modelBox.hide();
          this.types.fetchAgain();
          document.querySelector('#track-' + slug).click();
          (0, _runloop.later)(this, () => {
            document.querySelector('#' + slug + '-module-' + this.moduleName).click();
            this.moduleName = '';
          }, 300);
        }
        this.colormodes.buttonUnloading(e);
        moduleModal;
      } else {
        this.colormodes.buttonUnloading(e);
        alert('Module name field is compulsory.');
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "module", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "moduleName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "modelBox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initModel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesModulesNewComponent);
});
;define("junction/components/types/new-model", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "bootstrap", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _bootstrap, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Modal --}}
  <div class="modal fade" id="newModel" tabindex="-1" aria-labelledby="newModelLabel" aria-hidden="true" {{did-insert this.initModel}}>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="newModelLabel"><i class="fa-solid fa-plus"></i> New Track</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        	<div class="row g-3 align-items-start my-3 pb-3">
  			<div class="my-1 py-0 col-12 col-md-2">
  				<label class="fst-italic col-form-label fw-bold">singular</label>
  			</div>
  			<div class="my-1 col-12 col-md-7">
  				<Input @type="text" @value={{this.trackName}} class="form-control" placeholder="Eg. category" />
  			</div>
  			<div class="my-1 col-12 col-md-3">
  				<span class="form-text">Please give a name in singular format</span>
  			</div>
  		</div>
        	<div class="row g-3 align-items-start my-3 pb-3">
  			<div class="my-1 py-0 col-12 col-md-2">
  				<label class="fst-italic col-form-label fw-bold">plural</label>
  			</div>
  			<div class="my-1 col-12 col-md-7">
  				<Input @type="text" @value={{this.trackPlural}} class="form-control" placeholder="Eg. categories" />
  			</div>
  			<div class="my-1 col-12 col-md-3">
  				<span class="form-text">Please give a name in plural format</span>
  			</div>
  		</div>
  		<div class="row g-3 align-items-start my-3 pb-3">
  			<div class="my-1 py-0 col-12 col-md-2">
  				<label class="fst-italic col-form-label fw-bold">primary</label>
  			</div>
  			<div class="my-1 col-12 col-md-7">
  				<Input @type="text" @value={{this.trackPrimary}} class="form-control" placeholder="Eg. title" />
  			</div>
  			<div class="my-1 col-12 col-md-3">
  				<span class="form-text">Name of the primary field</span>
  			</div>
  		</div>
        	<div class="row g-3 align-items-start my-3 pb-3">
  			<div class="my-1 py-0 col-12 col-md-2">
  				<label class="fst-italic col-form-label fw-bold">description</label>
  			</div>
  			<div class="my-1 col-12 col-md-7">
  				<Input @type="text" @value={{this.trackDescription}} class="form-control" placeholder="(optional description)" />
  			</div>
  			<div class="my-1 col-12 col-md-3">
  				<span class="form-text">A short description (optional)</span>
  			</div>
  		</div>
        </div>
        <div class="modal-footer p-1 d-flex align-items-center justify-content-between">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close without saving</button>
          <button type="button" {{on 'click' this.save}} class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "J3aSd7In",
    "block": "[[[11,0],[24,0,\"modal fade\"],[24,1,\"newModel\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"newModelLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[[30,0,[\"initModel\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"newModelLabel\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-plus\"],[12],[13],[1,\" New Track\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n      \\t\"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"singular\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"Eg. category\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackName\"]]]],null],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,\"Please give a name in singular format\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n      \\t\"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"plural\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"Eg. categories\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackPlural\"]]]],null],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,\"Please give a name in plural format\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"primary\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"Eg. title\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackPrimary\"]]]],null],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,\"Name of the primary field\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n      \\t\"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"description\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[8,[39,6],[[24,0,\"form-control\"],[24,\"placeholder\",\"(optional description)\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"trackDescription\"]]]],null],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,1],[14,0,\"form-text\"],[12],[1,\"A short description (optional)\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer p-1 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close without saving\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,8],[\"click\",[30,0,[\"save\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"div\",\"did-insert\",\"h1\",\"i\",\"button\",\"label\",\"input\",\"span\",\"on\"]]",
    "moduleName": "junction/components/types/new-model.hbs",
    "isStrictMode": false
  });
  let TypesNewModelComponent = _exports.default = (_class = class TypesNewModelComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "trackName", _descriptor, this);
      _initializerDefineProperty(this, "trackPlural", _descriptor2, this);
      _initializerDefineProperty(this, "trackDescription", _descriptor3, this);
      _initializerDefineProperty(this, "trackPrimary", _descriptor4, this);
      _initializerDefineProperty(this, "types", _descriptor5, this);
      _initializerDefineProperty(this, "router", _descriptor6, this);
      _initializerDefineProperty(this, "colormodes", _descriptor7, this);
      _initializerDefineProperty(this, "modelBox", _descriptor8, this);
      _defineProperty(this, "convertToSlug", Text => {
        return Text.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '').replace(/-/g, '_');
      });
    }
    get initiatedType() {}
    initModel() {
      this.modelBox = new _bootstrap.Modal(document.getElementById('newModel'), {});
      const myModalEl = document.getElementById('newModel');
      myModalEl.addEventListener('hidden.bs.modal', async event => {
        this.types.fetchAgain();
      });
    }
    async save(e) {
      if (this.trackName != '' && this.trackPlural != '' && this.trackPrimary != '') {
        this.colormodes.buttonLoading(e);
        let typeSlug = this.convertToSlug(this.trackName);
        var exists = false;
        Object.keys(this.types.json.modules).forEach(track => {
          if (track != 'webapp') {
            if (track == typeSlug || this.types.json.modules[track].name.toLowerCase() == this.trackName.toLowerCase() || this.types.json.modules[track].plural.toLowerCase() == this.trackName.toLowerCase() || this.types.json.modules[track].name.toLowerCase() == this.trackPlural.toLowerCase() || this.types.json.modules[track].plural.toLowerCase() == this.trackPlural.toLowerCase()) {
              exists = true;
            }
          }
        });
        if (exists) {
          this.colormodes.buttonUnloading(e);
          alert('A track with this name already exists.');
        } else {
          this.types.json.modules[typeSlug] = {
            name: this.trackName,
            slug: typeSlug,
            plural: this.trackPlural,
            description: this.trackDescription,
            modules: [{
              input_slug: this.convertToSlug(this.trackPrimary),
              input_primary: true,
              input_type: 'text',
              var_type: 'string',
              input_placeholder: 'Enter ' + this.trackPrimary,
              input_unique: false,
              list_field: true,
              list_searchable: true,
              list_sortable: true
            }]
          };
          await this.types.json.save();
          await this.types.fetchAgain();
          this.colormodes.buttonUnloading(e);
          this.modelBox.hide();
          this.router.transitionTo('type', typeSlug);
        }
      } else {
        alert('Name, plural and primary fields are compulsory.');
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "trackName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "trackPlural", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "trackDescription", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "trackPrimary", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'title';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "modelBox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initModel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesNewModelComponent);
});
;define("junction/components/types/public/modal", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "junction/config/environment", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _environment, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"junction/config/environment",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Modal --}}
  <div class="modal fade" id="publicFormModal" tabindex="-1" aria-labelledby="publicFormModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title w-100 fs-6" id="publicFormModalLabel">
            <div class="row gx-3 align-items-start">
              <div class="py-0 col-12 col-md-2">
                <div class="ms-n5"><XToggle @value={{this.type.isLive}} @onToggle={{fn (mut this.type.isLive)}} @theme='ios' @variant={{this.colormodes.mode}} /></div>
              </div>
              <div class="col-12 col-md-9 ms-n3">
                <label class="fst-italic col-form-label fw-bold">Make form public: {{this.type.currentType.name}}</label>
              </div>
            </div>
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-4">
        {{#if this.type.isLive}}
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">title</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Input @type="text" @value={{this.type.title}} class="form-control" placeholder="Form title" />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Display heading</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">description</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Textarea @value={{this.type.description}} class="form-control" placeholder="Short description" />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Description text</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">button</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Input @type="text" @value={{this.type.buttonText}} class="form-control" placeholder="Button text" />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Call-to-action text</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">post-submission</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Textarea @value={{this.type.thankyouText}} class="form-control" placeholder="Text shown form submission" />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">Thank you text, shown after submission</span>
            </div>
          </div>
  
          <div class="row g-3 align-items-start my-3 pb-3">
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">cover url</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              <Input @type="text" @value={{this.type.coverURL}} class="form-control" placeholder="Cover image URL" />
              <Files::Uploader @updateOnUpload={{this.updateOnUpload}} @placeholder="Upload here" />
            </div>
            <div class="my-1 col-12 col-md-3">
              <span class="form-text">700 pixels wide</span>
            </div>
          </div>
  
          {{#each this.type.currentType.modules as |module|}}
            <div class="row g-3 align-items-start my-3 pb-3">
              <div class="my-1 py-0 col-12 col-md-2">
                <div class="mx-n1"><XToggle @value={{get this.type.modules module.input_slug}} @onToggle={{fn (mut (get this.type.modules module.input_slug))}} @theme='ios' @variant={{this.colormodes.mode}} /></div>
              </div>
              <div class="my-1 col-12 col-md-7">
                <label class="fst-italic col-form-label fw-bold">{{if module.input_placeholder module.input_placeholder module.input_slug}} {{if module.input_required (html-safe "<span class=\"text-danger\">*</span>")}}</label>
              </div>
            </div>
          {{/each}}
        {{/if}}
        </div>
  
        <div class="modal-footer justify-content-between p-1 d-flex align-items-center">
          <button type="button" data-bs-dismiss="modal" class="btn btn-outline-{{this.colormodes.inverseMode}}">Ignore changes</button>
          <div class="d-flex align-items-center justify-content-end">
            {{#if this.type.isLive}}
              <button {{on 'click' this.copyFormLink}} type="button" class="btn btn-sm btn-secondary ms-2"><i class="fa-solid fa-copy"></i> Copy Form Link</button>
            {{/if}}
            <button {{on 'click' this.type.savePublicForm}} type="button" class="btn btn-sm btn-secondary ms-2"><i class="fa-solid fa-save"></i> Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "EAtrh7Xm",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"publicFormModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"publicFormModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title w-100 fs-6\"],[14,1,\"publicFormModalLabel\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"row gx-3 align-items-start\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"ms-n5\"],[12],[8,[39,2],null,[[\"@value\",\"@onToggle\",\"@theme\",\"@variant\"],[[30,0,[\"type\",\"isLive\"]],[28,[37,3],[[28,[37,4],[[30,0,[\"type\",\"isLive\"]]],null]],null],\"ios\",[30,0,[\"colormodes\",\"mode\"]]]],null],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"col-12 col-md-9 ms-n3\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"Make form public: \"],[1,[30,0,[\"type\",\"currentType\",\"name\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body py-4\"],[12],[1,\"\\n\"],[41,[30,0,[\"type\",\"isLive\"]],[[[1,\"        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"title\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,8],[[24,0,\"form-control\"],[24,\"placeholder\",\"Form title\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"type\",\"title\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Display heading\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"description\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,10],[[24,0,\"form-control\"],[24,\"placeholder\",\"Short description\"]],[[\"@value\"],[[30,0,[\"type\",\"description\"]]]],null],[1,\"          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Description text\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"button\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,8],[[24,0,\"form-control\"],[24,\"placeholder\",\"Button text\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"type\",\"buttonText\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Call-to-action text\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"post-submission\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,10],[[24,0,\"form-control\"],[24,\"placeholder\",\"Text shown form submission\"]],[[\"@value\"],[[30,0,[\"type\",\"thankyouText\"]]]],null],[1,\"          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"Thank you text, shown after submission\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"cover url\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n            \"],[8,[39,8],[[24,0,\"form-control\"],[24,\"placeholder\",\"Cover image URL\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"type\",\"coverURL\"]]]],null],[1,\"\\n            \"],[8,[39,11],null,[[\"@updateOnUpload\",\"@placeholder\"],[[30,0,[\"updateOnUpload\"]],\"Upload here\"]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"form-text\"],[12],[1,\"700 pixels wide\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n\"],[42,[28,[37,13],[[28,[37,13],[[30,0,[\"type\",\"currentType\",\"modules\"]]],null]],null],null,[[[1,\"          \"],[10,0],[14,0,\"row g-3 align-items-start my-3 pb-3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"mx-n1\"],[12],[8,[39,2],null,[[\"@value\",\"@onToggle\",\"@theme\",\"@variant\"],[[28,[37,14],[[30,0,[\"type\",\"modules\"]],[30,1,[\"input_slug\"]]],null],[28,[37,3],[[28,[37,4],[[28,[37,14],[[30,0,[\"type\",\"modules\"]],[30,1,[\"input_slug\"]]],null]],null]],null],\"ios\",[30,0,[\"colormodes\",\"mode\"]]]],null],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n              \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,[52,[30,1,[\"input_placeholder\"]],[30,1,[\"input_placeholder\"]],[30,1,[\"input_slug\"]]]],[1,\" \"],[1,[52,[30,1,[\"input_required\"]],[28,[37,15],[\"<span class=\\\"text-danger\\\">*</span>\"],null]]],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[1]],null]],[]],null],[1,\"      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"modal-footer justify-content-between p-1 d-flex align-items-center\"],[12],[1,\"\\n        \"],[10,\"button\"],[14,\"data-bs-dismiss\",\"modal\"],[15,0,[29,[\"btn btn-outline-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,4,\"button\"],[12],[1,\"Ignore changes\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-end\"],[12],[1,\"\\n\"],[41,[30,0,[\"type\",\"isLive\"]],[[[1,\"            \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary ms-2\"],[24,4,\"button\"],[4,[38,16],[\"click\",[30,0,[\"copyFormLink\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy Form Link\"],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary ms-2\"],[24,4,\"button\"],[4,[38,16],[\"click\",[30,0,[\"type\",\"savePublicForm\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-save\"],[12],[13],[1,\" Save Changes\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"module\"],false,[\"div\",\"h1\",\"x-toggle\",\"fn\",\"mut\",\"label\",\"button\",\"if\",\"input\",\"span\",\"textarea\",\"files/uploader\",\"each\",\"-track-array\",\"get\",\"html-safe\",\"on\",\"i\"]]",
    "moduleName": "junction/components/types/public/modal.hbs",
    "isStrictMode": false
  });
  let TypesPublicModalComponent = _exports.default = (_class = class TypesPublicModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
    }
    updateOnUpload(e) {
      this.type.coverURL = e.lg.url;
    }
    copyFormLink(e) {
      e.target.innerHTML = 'Copied!';
      navigator.clipboard.writeText(window.location.origin + '/public/form/' + this.type.currentType.slug);
      (0, _runloop.later)(this, () => {
        e.target.innerHTML = '<i class="fa-solid fa-copy"></i> Copy Form Link';
      }, 2000);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateOnUpload", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateOnUpload"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyFormLink", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyFormLink"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesPublicModalComponent);
});
;define("junction/components/types/track-api-modal", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@ember/runloop", "junction/config/environment", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _runloop, _environment, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@ember/runloop",0,"junction/config/environment",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="trackAPIModal"
    tabindex="-1"
    aria-labelledby="trackAPIModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="trackAPIModalLabel">{ {{this.type.currentType.name}} } API</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Our APIs are written strictly to JSON:API v1.1 standards. Copy the
            API URL below to use it in your applications. Visit
            <a href="https://jsonapi.org" target="new">jsonapi.org</a>
            to know how to write detailed queries.</p>
  
          <Api::CodeReference @typeSlug={{this.type.currentType.slug}} />
        </div>
        <div class="modal-footer justify-content-between p-1 d-flex align-items-center">
          <div class="d-flex align-items-center justify-content-start">
            <button type="button" class="btn btn-outline-secondary btn-sm me-2" data-bs-dismiss="modal">Close</button>
            <button data-bs-dismiss="modal" {{on
              "click"
              (fn
                this.type.changeType
                (get this.types.json.modules "apikey_record")
              )
            }} type="button" class="btn btn-sm btn-outline-primary"><i class="fa-solid fa-plug"></i>&nbsp;Junction API</button>
          </div>
        	<button {{on 'click' this.copyAPILink}} type="button" class="btn btn-sm btn-secondary ms-2"><i class="fa-solid fa-copy"></i> Copy Track API URL</button>
        </div>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "AbGczKfS",
    "block": "[[[10,0],[14,0,\"modal fade\"],[14,1,\"trackAPIModal\"],[14,\"tabindex\",\"-1\"],[14,\"aria-labelledby\",\"trackAPIModalLabel\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg modal-dialog-scrollable\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"trackAPIModalLabel\"],[12],[1,\"{ \"],[1,[30,0,[\"type\",\"currentType\",\"name\"]]],[1,\" } API\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"Our APIs are written strictly to JSON:API v1.1 standards. Copy the\\n          API URL below to use it in your applications. Visit\\n          \"],[10,3],[14,6,\"https://jsonapi.org\"],[14,\"target\",\"new\"],[12],[1,\"jsonapi.org\"],[13],[1,\"\\n          to know how to write detailed queries.\"],[13],[1,\"\\n\\n        \"],[8,[39,5],null,[[\"@typeSlug\"],[[30,0,[\"type\",\"currentType\",\"slug\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer justify-content-between p-1 d-flex align-items-center\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"d-flex align-items-center justify-content-start\"],[12],[1,\"\\n          \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary btn-sm me-2\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close\"],[13],[1,\"\\n          \"],[11,\"button\"],[24,\"data-bs-dismiss\",\"modal\"],[24,0,\"btn btn-sm btn-outline-primary\"],[24,4,\"button\"],[4,[38,6],[\"click\",[28,[37,7],[[30,0,[\"type\",\"changeType\"]],[28,[37,8],[[30,0,[\"types\",\"json\",\"modules\"]],\"apikey_record\"],null]],null]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-plug\"],[12],[13],[1,\" Junction API\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \\t\"],[11,\"button\"],[24,0,\"btn btn-sm btn-secondary ms-2\"],[24,4,\"button\"],[4,[38,6],[\"click\",[30,0,[\"copyAPILink\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-copy\"],[12],[13],[1,\" Copy Track API URL\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"div\",\"h1\",\"button\",\"p\",\"a\",\"api/code-reference\",\"on\",\"fn\",\"get\",\"i\"]]",
    "moduleName": "junction/components/types/track-api-modal.hbs",
    "isStrictMode": false
  });
  let TypesTrackApiModalComponent = _exports.default = (_class = class TypesTrackApiModalComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "types", _descriptor3, this);
    }
    copyAPILink(e) {
      e.target.innerHTML = 'Copied!';
      navigator.clipboard.writeText(_environment.default.TribeENV.API_URL + '/api.php/' + this.type.currentType.slug);
      (0, _runloop.later)(this, () => {
        e.target.innerHTML = '<i class="fa-solid fa-copy"></i> Copy API URL';
      }, 2000);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "copyAPILink", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyAPILink"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesTrackApiModalComponent);
});
;define("junction/components/types/webapp", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking", "bootstrap", "junction/config/environment", "@ember/template-factory"], function (_exports, _component, _component2, _object, _service, _tracking, _bootstrap, _environment, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"bootstrap",0,"junction/config/environment",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Modal }}
  <div
    class="modal fade"
    id="typesWebapp"
    tabindex="-1"
    aria-labelledby="typesWebappLabel"
    aria-hidden="true"
    {{did-insert this.initWebapp}}
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="typesWebappLabel"><i
              class="fa-solid fa-gear"
            ></i>
            Settings</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3"
          >
            <div class="my-1 py-0 col-12 col-md-2">
              <label class="fst-italic col-form-label fw-bold">name</label>
            </div>
            <div class="my-1 col-12 col-md-7">
              {{#if this.isJunctionExpress}}
                <Input
                  disabled
                  @type="text"
                  @value={{mut
                    (get (get this.types.json.modules "webapp") "name")
                  }}
                  class="form-control"
                />
              {{else}}
                <Input
                  @type="text"
                  @value={{mut
                    (get (get this.types.json.modules "webapp") "name")
                  }}
                  class="form-control"
                />
              {{/if}}
            </div>
            <div class="my-1 col-12 col-md-3">
              {{#if this.isJunctionExpress}}
                <span class="form-text">A name for your Junction.</span>
              {{else}}
                <span class="form-text">A name for your Junction.
                  <a
                    href="https://junction.express/junctions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Click here to edit.</a></span>
              {{/if}}
            </div>
          </div>
  
          <Types::Editor::Textarea
            @typeKey="description"
            @typeSlug="webapp"
            @helpText="Short description."
          />
          <Types::Editor::Checkbox
            @typeKey="soft_delete_records"
            @typeSlug="webapp"
            @helpText="To make sure your records never get fully deleted."
          />
          <Types::Editor::Checkbox
            @typeKey="block_read_access_without_apikey"
            @typeSlug="webapp"
            @helpText="Block public access to all API calls."
          />
        </div>
        <div
          class="modal-footer p-1 d-flex align-items-center justify-content-between"
        >
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >Close without saving</button>
          <button
            type="button"
            {{on "click" this.save}}
            class="btn btn-primary"
          >Save changes</button>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "eT1RkSf/",
    "block": "[[[11,0],[24,0,\"modal fade\"],[24,1,\"typesWebapp\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"typesWebappLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[[30,0,[\"initWebapp\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-lg\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"typesWebappLabel\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-gear\"],[12],[13],[1,\"\\n          Settings\"],[13],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn-close\"],[14,\"data-bs-dismiss\",\"modal\"],[14,\"aria-label\",\"Close\"],[14,4,\"button\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row g-3 align-items-center my-3 border-bottom border-1 border-muted pb-3\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"my-1 py-0 col-12 col-md-2\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"fst-italic col-form-label fw-bold\"],[12],[1,\"name\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-7\"],[12],[1,\"\\n\"],[41,[30,0,[\"isJunctionExpress\"]],[[[1,\"              \"],[8,[39,7],[[24,\"disabled\",\"\"],[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,8],[[28,[37,9],[[28,[37,9],[[30,0,[\"types\",\"json\",\"modules\"]],\"webapp\"],null],\"name\"],null]],null]]],null],[1,\"\\n\"]],[]],[[[1,\"              \"],[8,[39,7],[[24,0,\"form-control\"]],[[\"@type\",\"@value\"],[\"text\",[28,[37,8],[[28,[37,9],[[28,[37,9],[[30,0,[\"types\",\"json\",\"modules\"]],\"webapp\"],null],\"name\"],null]],null]]],null],[1,\"\\n\"]],[]]],[1,\"          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"my-1 col-12 col-md-3\"],[12],[1,\"\\n\"],[41,[30,0,[\"isJunctionExpress\"]],[[[1,\"              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"A name for your Junction.\"],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[10,1],[14,0,\"form-text\"],[12],[1,\"A name for your Junction.\\n                \"],[10,3],[14,6,\"https://junction.express/junctions\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Click here to edit.\"],[13],[13],[1,\"\\n\"]],[]]],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[8,[39,12],null,[[\"@typeKey\",\"@typeSlug\",\"@helpText\"],[\"description\",\"webapp\",\"Short description.\"]],null],[1,\"\\n        \"],[8,[39,13],null,[[\"@typeKey\",\"@typeSlug\",\"@helpText\"],[\"soft_delete_records\",\"webapp\",\"To make sure your records never get fully deleted.\"]],null],[1,\"\\n        \"],[8,[39,13],null,[[\"@typeKey\",\"@typeSlug\",\"@helpText\"],[\"block_read_access_without_apikey\",\"webapp\",\"Block public access to all API calls.\"]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer p-1 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n        \"],[10,\"button\"],[14,0,\"btn btn-outline-secondary\"],[14,\"data-bs-dismiss\",\"modal\"],[14,4,\"button\"],[12],[1,\"Close without saving\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"button\"],[4,[38,14],[\"click\",[30,0,[\"save\"]]],null],[12],[1,\"Save changes\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"div\",\"did-insert\",\"h1\",\"i\",\"button\",\"label\",\"if\",\"input\",\"mut\",\"get\",\"span\",\"a\",\"types/editor/textarea\",\"types/editor/checkbox\",\"on\"]]",
    "moduleName": "junction/components/types/webapp.hbs",
    "isStrictMode": false
  });
  let TypesWebappComponent = _exports.default = (_class = class TypesWebappComponent extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "webappBox", _descriptor3, this);
    }
    get isJunctionExpress() {
      if (_environment.default.JUNCTION_SLUG == 'junction') {
        return false;
      } else {
        return true;
      }
    }
    initWebapp() {
      this.webappBox = new _bootstrap.Modal(document.getElementById('typesWebapp'), {});
      const myModalEl = document.getElementById('typesWebapp');
      myModalEl.addEventListener('hidden.bs.modal', async event => {
        this.types.fetchAgain();
      });
    }
    async save(e) {
      this.colormodes.buttonLoading(e);
      await this.types.json.save();
      this.colormodes.buttonUnloading(e);
      this.webappBox.hide();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "webappBox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "initWebapp", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initWebapp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TypesWebappComponent);
});
;define("junction/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@html-next/vertical-collection/components/vertical-collection/component"eaimeta@70e063a35619d71f
});
;define("junction/components/welcome-flame", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="flame-bg d-flex align-items-center justify-content-center">
    <div class="py-6 container px-0 text-center text-dark">
      <img src="/assets/img/flame.png" width="200">
    </div>
  </section>
  */
  {
    "id": "67dqN//w",
    "block": "[[[10,\"section\"],[14,0,\"flame-bg d-flex align-items-center justify-content-center\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"py-6 container px-0 text-center text-dark\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"/assets/img/flame.png\"],[14,\"width\",\"200\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"section\",\"div\",\"img\"]]",
    "moduleName": "junction/components/welcome-flame.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "welcome-flame"));
});
;define("junction/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("junction/components/x-toggle-label", ["exports", "ember-toggle/components/x-toggle-label"], function (_exports, _xToggleLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggleLabel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-toggle/components/x-toggle-label"eaimeta@70e063a35619d71f
});
;define("junction/components/x-toggle-switch", ["exports", "ember-toggle/components/x-toggle-switch"], function (_exports, _xToggleSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggleSwitch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-toggle/components/x-toggle-switch"eaimeta@70e063a35619d71f
});
;define("junction/components/x-toggle", ["exports", "ember-toggle/components/x-toggle"], function (_exports, _xToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-toggle/components/x-toggle"eaimeta@70e063a35619d71f
});
;define("junction/controllers/auth", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let AuthController = _exports.default = (_class = class AuthController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "auth", _descriptor, this);
    }
    clickSubmitButton(e) {
      document.querySelector('#auth-submit-password-btn').click();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "auth", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "clickSubmitButton", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clickSubmitButton"), _class.prototype), _class);
});
;define("junction/controllers/files", ["exports", "@ember/controller", "@ember/service", "@ember/object", "@glimmer/tracking", "junction/config/environment"], function (_exports, _controller, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"junction/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let FilesController = _exports.default = (_class = class FilesController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "query", _descriptor3, this);
      _initializerDefineProperty(this, "results", _descriptor4, this);
      _initializerDefineProperty(this, "loading", _descriptor5, this);
      _initializerDefineProperty(this, "deepSearch", _descriptor6, this);
      _defineProperty(this, "getLength", e => {
        return Object.keys(e).length;
      });
    }
    async search() {
      this.results = null;
      this.loading = true;
      await fetch(_environment.default.TribeENV.API_URL + '/uploads.php', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          search: true,
          q: encodeURI(this.query),
          deep_search: this.deepSearch
        })
      }).then(response => {
        return response.json();
      }).then(response => {
        this.results = response;
        this.loading = false;
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "query", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "results", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "loading", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "deepSearch", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "search", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "search"), _class.prototype), _class);
});
;define("junction/controllers/index", ["exports", "@ember/controller", "@ember/service", "junction/config/environment"], function (_exports, _controller, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"junction/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let IndexController = _exports.default = (_class = class IndexController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
    }
    get plausibleAuth() {
      return _environment.default.PLAUSIBLE_AUTH;
    }
    get plausibleDomain() {
      return _environment.default.PLAUSIBLE_DOMAIN;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("junction/controllers/interface", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f
  class InterfaceController extends _controller.default {}
  _exports.default = InterfaceController;
});
;define("junction/controllers/public", ["exports", "@ember/controller", "@ember/service", "@ember/object", "@glimmer/tracking", "bootstrap"], function (_exports, _controller, _service, _object, _tracking, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"bootstrap"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let PublicController = _exports.default = (_class = class PublicController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "object", _descriptor3, this);
      _initializerDefineProperty(this, "colormodes", _descriptor4, this);
    }
    initType() {
      this.type.currentType = this.types.json.modules[this.model.slug];
      this.type.editorJSOnTypeChange();
    }
    openNewModal() {
      this.object.viaPublicForm = true;
      this.object.reloadingVars = true;
      this.object.currentObject = null;
      this.object.reloadingVars = false;
      let bp = new _bootstrap.Modal(document.getElementById('editObjectModal'), {});
      bp.show();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "object", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "initType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openNewModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openNewModal"), _class.prototype), _class);
});
;define("junction/controllers/type", ["exports", "@ember/controller", "@ember/service", "@ember/object", "@glimmer/tracking", "sortablejs"], function (_exports, _controller, _service, _object, _tracking, _sortablejs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"sortablejs"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TypeController = _exports.default = (_class = class TypeController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "colormodes", _descriptor3, this);
      _initializerDefineProperty(this, "sortable", _descriptor4, this);
      _initializerDefineProperty(this, "activateReordering", _descriptor5, this);
    }
    startWobble() {
      if (this.type.currentType.slug != 'deleted_record' && this.type.currentType.slug != 'file_record') document.querySelector('#trackOptionButtons').classList.remove('d-none');
      this.activateReordering = true;
      this.initDragDrop();
    }
    stopWobble() {
      if (this.type.currentType.slug != 'deleted_record' && this.type.currentType.slug != 'file_record') document.querySelector('#trackOptionButtons').classList.add('d-none');
      this.activateReordering = false;
      this.stopDragDrop();
    }
    stopDragDrop() {
      this.sortable = null;
    }
    initDragDrop() {
      this.sortable = new _sortablejs.default(document.querySelector('#module-names'), {
        group: 'module-names',
        // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
        sort: true,
        // sorting inside list
        delay: 0,
        // time in milliseconds to define when the sorting should start
        delayOnTouchOnly: false,
        // only delay if user is using touch
        touchStartThreshold: 0,
        // px, how many pixels the point should move before cancelling a delayed drag event
        disabled: false,
        // Disables the sortable if set to true.
        store: null,
        // @see Store
        animation: 150,
        // ms, animation speed moving items when sorting, `0` — without animation
        easing: 'cubic-bezier(1, 0, 0, 1)',
        // Easing for animation. Defaults to null. See https://easings.net/ for examples.
        handle: '.module-name-btn',
        // Drag handle selector within list items
        filter: '.ignore-elements',
        // Selectors that do not lead to dragging (String or Function)
        preventOnFilter: true,
        // Call `event.preventDefault()` when triggered `filter`
        draggable: '.module-name-btn',
        // Specifies which items inside the element should be draggable

        dataIdAttr: 'data-module-slug',
        // HTML attribute that is used by the `toArray()` method

        ghostClass: 'sortable-ghost',
        // Class name for the drop placeholder
        chosenClass: 'sortable-chosen',
        // Class name for the chosen item
        dragClass: 'sortable-drag',
        // Class name for the dragging item

        swapThreshold: 1,
        // Threshold of the swap zone
        invertSwap: false,
        // Will always use inverted swap zone if set to true
        invertedSwapThreshold: 1,
        // Threshold of the inverted swap zone (will be set to swapThreshold value by default)
        direction: 'horizontal',
        // Direction of Sortable (will be detected automatically if not given)

        forceFallback: false,
        // ignore the HTML5 DnD behaviour and force the fallback to kick in

        fallbackClass: 'sortable-fallback',
        // Class name for the cloned DOM Element when using forceFallback
        fallbackOnBody: false,
        // Appends the cloned DOM Element into the Document's Body
        fallbackTolerance: 0,
        // Specify in pixels how far the mouse should move before it's considered as a drag.

        dragoverBubble: false,
        removeCloneOnHide: true,
        // Remove the clone element when it is not showing, rather than just hiding it
        emptyInsertThreshold: 5,
        // px, distance mouse must be from empty sortable to insert drag element into it

        // Element dragging ended
        onEnd: async evt => {
          let slug = this.type.currentType.slug;
          let modules = this.types.json.modules[slug].modules;
          modules = await array_move(modules, evt.oldIndex, evt.newIndex);
          this.types.json.modules[slug].modules = await modules;
          this.activateReordering = true;
          function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
              var k = new_index - arr.length + 1;
              while (k--) {
                arr.push(undefined);
              }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr; // for testing
          }
        }
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "sortable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "activateReordering", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "startWobble", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "startWobble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopWobble", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stopWobble"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopDragDrop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "stopDragDrop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initDragDrop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initDragDrop"), _class.prototype), _class);
});
;define("junction/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("junction/helpers/abs", ["exports", "ember-math-helpers/helpers/abs"], function (_exports, _abs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/abs"eaimeta@70e063a35619d71f
});
;define("junction/helpers/acos", ["exports", "ember-math-helpers/helpers/acos"], function (_exports, _acos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acos"eaimeta@70e063a35619d71f
});
;define("junction/helpers/acosh", ["exports", "ember-math-helpers/helpers/acosh"], function (_exports, _acosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acosh"eaimeta@70e063a35619d71f
});
;define("junction/helpers/add", ["exports", "ember-math-helpers/helpers/add"], function (_exports, _add) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/add"eaimeta@70e063a35619d71f
});
;define("junction/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("junction/helpers/app-version", ["exports", "@ember/component/helper", "junction/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"junction/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("junction/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/append"eaimeta@70e063a35619d71f
});
;define("junction/helpers/asin", ["exports", "ember-math-helpers/helpers/asin"], function (_exports, _asin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asin"eaimeta@70e063a35619d71f
});
;define("junction/helpers/asinh", ["exports", "ember-math-helpers/helpers/asinh"], function (_exports, _asinh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asinh"eaimeta@70e063a35619d71f
});
;define("junction/helpers/assign", ["exports", "ember-assign-helper/helpers/assign"], function (_exports, _assign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _assign.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-assign-helper/helpers/assign"eaimeta@70e063a35619d71f
});
;define("junction/helpers/atan", ["exports", "ember-math-helpers/helpers/atan"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan"eaimeta@70e063a35619d71f
});
;define("junction/helpers/atan2", ["exports", "ember-math-helpers/helpers/atan2"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan2"eaimeta@70e063a35619d71f
});
;define("junction/helpers/atanh", ["exports", "ember-math-helpers/helpers/atanh"], function (_exports, _atanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atanh"eaimeta@70e063a35619d71f
});
;define("junction/helpers/await", ["exports", "ember-promise-helpers/helpers/await"], function (_exports, _await) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/await"eaimeta@70e063a35619d71f
});
;define("junction/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/call"eaimeta@70e063a35619d71f
});
;define("junction/helpers/camelize", ["exports", "ember-cli-string-helpers/helpers/camelize"], function (_exports, _camelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/camelize"eaimeta@70e063a35619d71f
});
;define("junction/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("junction/helpers/capitalize", ["exports", "ember-cli-string-helpers/helpers/capitalize"], function (_exports, _capitalize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/capitalize"eaimeta@70e063a35619d71f
});
;define("junction/helpers/cbrt", ["exports", "ember-math-helpers/helpers/cbrt"], function (_exports, _cbrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cbrt"eaimeta@70e063a35619d71f
});
;define("junction/helpers/ceil", ["exports", "ember-math-helpers/helpers/ceil"], function (_exports, _ceil) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/ceil"eaimeta@70e063a35619d71f
});
;define("junction/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/chunk"eaimeta@70e063a35619d71f
});
;define("junction/helpers/classify", ["exports", "ember-cli-string-helpers/helpers/classify"], function (_exports, _classify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "classify", {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/classify"eaimeta@70e063a35619d71f
});
;define("junction/helpers/clz32", ["exports", "ember-math-helpers/helpers/clz32"], function (_exports, _clz) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/clz32"eaimeta@70e063a35619d71f
});
;define("junction/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compact"eaimeta@70e063a35619d71f
});
;define("junction/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compute"eaimeta@70e063a35619d71f
});
;define("junction/helpers/cos", ["exports", "ember-math-helpers/helpers/cos"], function (_exports, _cos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cos"eaimeta@70e063a35619d71f
});
;define("junction/helpers/cosh", ["exports", "ember-math-helpers/helpers/cosh"], function (_exports, _cosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cosh"eaimeta@70e063a35619d71f
});
;define("junction/helpers/dasherize", ["exports", "ember-cli-string-helpers/helpers/dasherize"], function (_exports, _dasherize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/dasherize"eaimeta@70e063a35619d71f
});
;define("junction/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/dec"eaimeta@70e063a35619d71f
});
;define("junction/helpers/div", ["exports", "ember-math-helpers/helpers/div"], function (_exports, _div) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/div"eaimeta@70e063a35619d71f
});
;define("junction/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/drop"eaimeta@70e063a35619d71f
});
;define("junction/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/element"eaimeta@70e063a35619d71f
});
;define("junction/helpers/ember-power-select-is-equal", ["exports", "ember-power-select/helpers/ember-power-select-is-equal"], function (_exports, _emberPowerSelectIsEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-equal"eaimeta@70e063a35619d71f
});
;define("junction/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-group"eaimeta@70e063a35619d71f
});
;define("junction/helpers/ember-power-select-is-selected-present", ["exports", "ember-power-select/helpers/ember-power-select-is-selected-present"], function (_exports, _emberPowerSelectIsSelectedPresent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelectedPresent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-selected-present"eaimeta@70e063a35619d71f
});
;define("junction/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("junction/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/entries"eaimeta@70e063a35619d71f
});
;define("junction/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("junction/helpers/exp", ["exports", "ember-math-helpers/helpers/exp"], function (_exports, _exp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/exp"eaimeta@70e063a35619d71f
});
;define("junction/helpers/expm1", ["exports", "ember-math-helpers/helpers/expm1"], function (_exports, _expm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/expm1"eaimeta@70e063a35619d71f
});
;define("junction/helpers/file-queue", ["exports", "ember-file-upload/helpers/file-queue"], function (_exports, _fileQueue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileQueue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/helpers/file-queue"eaimeta@70e063a35619d71f
});
;define("junction/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter-by"eaimeta@70e063a35619d71f
});
;define("junction/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter"eaimeta@70e063a35619d71f
});
;define("junction/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/find-by"eaimeta@70e063a35619d71f
});
;define("junction/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/flatten"eaimeta@70e063a35619d71f
});
;define("junction/helpers/floor", ["exports", "ember-math-helpers/helpers/floor"], function (_exports, _floor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/floor"eaimeta@70e063a35619d71f
});
;define("junction/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/from-entries"eaimeta@70e063a35619d71f
});
;define("junction/helpers/fround", ["exports", "ember-math-helpers/helpers/fround"], function (_exports, _fround) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/fround"eaimeta@70e063a35619d71f
});
;define("junction/helpers/gcd", ["exports", "ember-math-helpers/helpers/gcd"], function (_exports, _gcd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gcd.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/gcd"eaimeta@70e063a35619d71f
});
;define("junction/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/group-by"eaimeta@70e063a35619d71f
});
;define("junction/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("junction/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("junction/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-next"eaimeta@70e063a35619d71f
});
;define("junction/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-previous"eaimeta@70e063a35619d71f
});
;define("junction/helpers/html-safe", ["exports", "ember-cli-string-helpers/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/html-safe"eaimeta@70e063a35619d71f
});
;define("junction/helpers/humanize", ["exports", "ember-cli-string-helpers/helpers/humanize"], function (_exports, _humanize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(_exports, "humanize", {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/humanize"eaimeta@70e063a35619d71f
});
;define("junction/helpers/hypot", ["exports", "ember-math-helpers/helpers/hypot"], function (_exports, _hypot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/hypot"eaimeta@70e063a35619d71f
});
;define("junction/helpers/if-key", ["exports", "ember-keyboard/helpers/if-key"], function (_exports, _ifKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ifKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/helpers/if-key"eaimeta@70e063a35619d71f
});
;define("junction/helpers/imul", ["exports", "ember-math-helpers/helpers/imul"], function (_exports, _imul) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/imul"eaimeta@70e063a35619d71f
});
;define("junction/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/inc"eaimeta@70e063a35619d71f
});
;define("junction/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/includes"eaimeta@70e063a35619d71f
});
;define("junction/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/intersect"eaimeta@70e063a35619d71f
});
;define("junction/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/invoke"eaimeta@70e063a35619d71f
});
;define("junction/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("junction/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("junction/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("junction/helpers/is-fulfilled", ["exports", "ember-promise-helpers/helpers/is-fulfilled"], function (_exports, _isFulfilled) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/is-fulfilled"eaimeta@70e063a35619d71f
});
;define("junction/helpers/is-pending", ["exports", "ember-promise-helpers/helpers/is-pending"], function (_exports, _isPending) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/is-pending"eaimeta@70e063a35619d71f
});
;define("junction/helpers/is-rejected", ["exports", "ember-promise-helpers/helpers/is-rejected"], function (_exports, _isRejected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/is-rejected"eaimeta@70e063a35619d71f
});
;define("junction/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/join"eaimeta@70e063a35619d71f
});
;define("junction/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/keys"eaimeta@70e063a35619d71f
});
;define("junction/helpers/lcm", ["exports", "ember-math-helpers/helpers/lcm"], function (_exports, _lcm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lcm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/lcm"eaimeta@70e063a35619d71f
});
;define("junction/helpers/log-e", ["exports", "ember-math-helpers/helpers/log-e"], function (_exports, _logE) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log-e"eaimeta@70e063a35619d71f
});
;define("junction/helpers/log10", ["exports", "ember-math-helpers/helpers/log10"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log10"eaimeta@70e063a35619d71f
});
;define("junction/helpers/log1p", ["exports", "ember-math-helpers/helpers/log1p"], function (_exports, _log1p) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log1p"eaimeta@70e063a35619d71f
});
;define("junction/helpers/log2", ["exports", "ember-math-helpers/helpers/log2"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log2"eaimeta@70e063a35619d71f
});
;define("junction/helpers/lowercase", ["exports", "ember-cli-string-helpers/helpers/lowercase"], function (_exports, _lowercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(_exports, "lowercase", {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/lowercase"eaimeta@70e063a35619d71f
});
;define("junction/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("junction/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("junction/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map-by"eaimeta@70e063a35619d71f
});
;define("junction/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map"eaimeta@70e063a35619d71f
});
;define("junction/helpers/max", ["exports", "ember-math-helpers/helpers/max"], function (_exports, _max) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/max"eaimeta@70e063a35619d71f
});
;define("junction/helpers/min", ["exports", "ember-math-helpers/helpers/min"], function (_exports, _min) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/min"eaimeta@70e063a35619d71f
});
;define("junction/helpers/mod", ["exports", "ember-math-helpers/helpers/mod"], function (_exports, _mod) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mod"eaimeta@70e063a35619d71f
});
;define("junction/helpers/mult", ["exports", "ember-math-helpers/helpers/mult"], function (_exports, _mult) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mult"eaimeta@70e063a35619d71f
});
;define("junction/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/next"eaimeta@70e063a35619d71f
});
;define("junction/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/noop"eaimeta@70e063a35619d71f
});
;define("junction/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("junction/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("junction/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/object-at"eaimeta@70e063a35619d71f
});
;define("junction/helpers/on-key", ["exports", "ember-keyboard/helpers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/helpers/on-key"eaimeta@70e063a35619d71f
});
;define("junction/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/optional"eaimeta@70e063a35619d71f
});
;define("junction/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("junction/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("junction/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("junction/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pick"eaimeta@70e063a35619d71f
});
;define("junction/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe-action"eaimeta@70e063a35619d71f
});
;define("junction/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe"eaimeta@70e063a35619d71f
});
;define("junction/helpers/pow", ["exports", "ember-math-helpers/helpers/pow"], function (_exports, _pow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/pow"eaimeta@70e063a35619d71f
});
;define("junction/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/previous"eaimeta@70e063a35619d71f
});
;define("junction/helpers/promise-all", ["exports", "ember-promise-helpers/helpers/promise-all"], function (_exports, _promiseAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/promise-all"eaimeta@70e063a35619d71f
});
;define("junction/helpers/promise-hash", ["exports", "ember-promise-helpers/helpers/promise-hash"], function (_exports, _promiseHash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/promise-hash"eaimeta@70e063a35619d71f
});
;define("junction/helpers/promise-rejected-reason", ["exports", "ember-promise-helpers/helpers/promise-rejected-reason"], function (_exports, _promiseRejectedReason) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/promise-rejected-reason"eaimeta@70e063a35619d71f
});
;define("junction/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/queue"eaimeta@70e063a35619d71f
});
;define("junction/helpers/random", ["exports", "ember-math-helpers/helpers/random"], function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/random"eaimeta@70e063a35619d71f
});
;define("junction/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/range"eaimeta@70e063a35619d71f
});
;define("junction/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reduce"eaimeta@70e063a35619d71f
});
;define("junction/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reject-by"eaimeta@70e063a35619d71f
});
;define("junction/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/repeat"eaimeta@70e063a35619d71f
});
;define("junction/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reverse"eaimeta@70e063a35619d71f
});
;define("junction/helpers/round", ["exports", "ember-math-helpers/helpers/round"], function (_exports, _round) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/round"eaimeta@70e063a35619d71f
});
;define("junction/helpers/route-idle", ["exports", "ember-app-scheduler/helpers/route-idle"], function (_exports, _routeIdle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeIdle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-app-scheduler/helpers/route-idle"eaimeta@70e063a35619d71f
});
;define("junction/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/shuffle"eaimeta@70e063a35619d71f
});
;define("junction/helpers/sign", ["exports", "ember-math-helpers/helpers/sign"], function (_exports, _sign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sign"eaimeta@70e063a35619d71f
});
;define("junction/helpers/sin", ["exports", "ember-math-helpers/helpers/sin"], function (_exports, _sin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sin"eaimeta@70e063a35619d71f
});
;define("junction/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/slice"eaimeta@70e063a35619d71f
});
;define("junction/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/sort-by"eaimeta@70e063a35619d71f
});
;define("junction/helpers/sqrt", ["exports", "ember-math-helpers/helpers/sqrt"], function (_exports, _sqrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sqrt"eaimeta@70e063a35619d71f
});
;define("junction/helpers/sub", ["exports", "ember-math-helpers/helpers/sub"], function (_exports, _sub) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sub"eaimeta@70e063a35619d71f
});
;define("junction/helpers/sum", ["exports", "ember-math-helpers/helpers/sum"], function (_exports, _sum) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sum.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sum"eaimeta@70e063a35619d71f
});
;define("junction/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/take"eaimeta@70e063a35619d71f
});
;define("junction/helpers/tan", ["exports", "ember-math-helpers/helpers/tan"], function (_exports, _tan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tan"eaimeta@70e063a35619d71f
});
;define("junction/helpers/tanh", ["exports", "ember-math-helpers/helpers/tanh"], function (_exports, _tanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tanh"eaimeta@70e063a35619d71f
});
;define("junction/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("junction/helpers/titleize", ["exports", "ember-cli-string-helpers/helpers/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(_exports, "titleize", {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/titleize"eaimeta@70e063a35619d71f
});
;define("junction/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle-action"eaimeta@70e063a35619d71f
});
;define("junction/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle"eaimeta@70e063a35619d71f
});
;define("junction/helpers/trim", ["exports", "ember-cli-string-helpers/helpers/trim"], function (_exports, _trim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(_exports, "trim", {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/trim"eaimeta@70e063a35619d71f
});
;define("junction/helpers/trunc", ["exports", "ember-math-helpers/helpers/trunc"], function (_exports, _trunc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/trunc"eaimeta@70e063a35619d71f
});
;define("junction/helpers/truncate", ["exports", "ember-cli-string-helpers/helpers/truncate"], function (_exports, _truncate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(_exports, "truncate", {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/truncate"eaimeta@70e063a35619d71f
});
;define("junction/helpers/underscore", ["exports", "ember-cli-string-helpers/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/underscore"eaimeta@70e063a35619d71f
});
;define("junction/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/union"eaimeta@70e063a35619d71f
});
;define("junction/helpers/uppercase", ["exports", "ember-cli-string-helpers/helpers/uppercase"], function (_exports, _uppercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(_exports, "uppercase", {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/uppercase"eaimeta@70e063a35619d71f
});
;define("junction/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/values"eaimeta@70e063a35619d71f
});
;define("junction/helpers/w", ["exports", "ember-cli-string-helpers/helpers/w"], function (_exports, _w) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(_exports, "w", {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/w"eaimeta@70e063a35619d71f
});
;define("junction/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/without"eaimeta@70e063a35619d71f
});
;define("junction/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("junction/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "junction/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"junction/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("junction/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("junction/instance-initializers/ember-router-scroll", ["exports", "ember-router-scroll/instance-initializers/ember-router-scroll"], function (_exports, _emberRouterScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/instance-initializers/ember-router-scroll"eaimeta@70e063a35619d71f
});
;define("junction/models/webapp", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let WebappModel = _exports.default = (_class = class WebappModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "slug", _descriptor, this);
      _initializerDefineProperty(this, "modules", _descriptor2, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "slug", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "modules", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("junction/modifiers/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/modifiers/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/modifiers/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("junction/modifiers/did-insert", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function didInsert(element, [fn, ...args], named) {
    fn(element, args, named);
  });
});
;define("junction/modifiers/did-pan", ["exports", "ember-gesture-modifiers/modifiers/did-pan"], function (_exports, _didPan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didPan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-gesture-modifiers/modifiers/did-pan"eaimeta@70e063a35619d71f
});
;define("junction/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("junction/modifiers/on-click-outside", ["exports", "ember-click-outside/modifiers/on-click-outside"], function (_exports, _onClickOutside) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onClickOutside.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-click-outside/modifiers/on-click-outside"eaimeta@70e063a35619d71f
});
;define("junction/modifiers/on-key", ["exports", "ember-keyboard/modifiers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/modifiers/on-key"eaimeta@70e063a35619d71f
});
;define("junction/modifiers/popover", ["exports", "ember-modifier", "bootstrap"], function (_exports, _emberModifier, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier",0,"bootstrap"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function popover(element /*, positional, named*/) {
    new _bootstrap.Popover(element);
  });
});
;define("junction/modifiers/ripple", ["exports", "ember-modifier", "ripplet.js"], function (_exports, _emberModifier, _ripplet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier",0,"ripplet.js"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function ripple(element) {
    element.addEventListener('pointerdown', _ripplet.default);
  });
});
;define("junction/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-style-modifier/modifiers/style"eaimeta@70e063a35619d71f
});
;define("junction/modifiers/tooltip", ["exports", "ember-modifier", "bootstrap"], function (_exports, _emberModifier, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier",0,"bootstrap"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function tooltip(element /*, positional, named*/) {
    new _bootstrap.Tooltip(element);
  });
});
;define("junction/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("junction/router", ["exports", "@ember/routing/router", "junction/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"junction/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('auth');
    this.route('type', {
      path: '/track/:slug'
    });
    this.route('files');
    this.route('public', {
      path: '/public/form/:slug'
    });
    this.route('interface');
    this.route('docs', function () {});
  });
});
;define("junction/routes/application", ["exports", "@ember/routing/route", "@ember/service", "@ember/runloop", "@ember/object", "@glimmer/tracking", "bootstrap"], function (_exports, _route, _service, _runloop, _object, _tracking, bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"@ember/runloop",0,"@ember/object",0,"@glimmer/tracking",0,"bootstrap"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ApplicationRoute = _exports.default = (_class = class ApplicationRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "auth", _descriptor4, this);
      _initializerDefineProperty(this, "router", _descriptor5, this);
      _initializerDefineProperty(this, "blueprints", _descriptor6, this);
      _initializerDefineProperty(this, "currentRouteName", _descriptor7, this);
      _initializerDefineProperty(this, "currentSlugName", _descriptor8, this);
    }
    async beforeModel() {
      await this.auth.getJunctionPassword();
      await this.types.fetchAgain();
      this.auth.goToRouteAfterLogin = this.currentRouteName ? this.currentRouteName == 'track' ? 'type' : this.currentRouteName : 'index';
      this.auth.goToSlugAfterLogin = this.currentSlugName;
      if (this.auth.goToRouteAfterLogin != 'auth' && this.auth.goToRouteAfterLogin != 'public') {
        this.auth.checkIfLoggedIn().then(async checkIfLoggedIn => {
          if (this.auth.goToRouteAfterLogin != 'auth' && this.auth.goToRouteAfterLogin != 'public' && !checkIfLoggedIn) {
            this.router.transitionTo('auth');
          } else {
            await this.blueprints.getBlueprints();
          }
        });
      }
    }
    async model() {
      return await this.store.findRecord('webapp', 0, {});
    }
    didTransition() {
      (0, _runloop.later)(this, () => {
        if (this.router.currentRouteName != 'type') this.type.loadingSearchResults = false;
      }, 300);
    }
    willTransition() {
      this.type.loadingSearchResults = true;
    }
    afterModel(data) {
      Object.entries(data.modules).forEach(([key, tp]) => {
        if (key != 'webapp') {
          tp.modules.forEach(e => {
            if (e.input_slug != 'content_privacy' && (e.input_type == 'select' || e.input_type == 'key-value-pair') && (Object.keys(data.modules).includes(e.input_slug) || Object.keys(data.modules).includes(e.linked_type))) {
              if (Object.keys(data.modules).includes(e.input_slug)) {
                let vvv = this.store.query(e.input_slug, {
                  show_public_objects_only: false,
                  page: {
                    limit: -1
                  }
                });
              } else if (Object.keys(data.modules).includes(e.linked_type)) {
                let vvv = this.store.query(e.linked_type, {
                  show_public_objects_only: false,
                  page: {
                    limit: -1
                  }
                });
              }
            }
          });
        }
      });
      document.querySelector('#loadingHTML').classList.add('d-none');
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "auth", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "currentRouteName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return window.location.pathname.split('/')[1];
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "currentSlugName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return window.location.pathname.split('/')[2];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "willTransition", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "willTransition"), _class.prototype), _class);
});
;define("junction/routes/auth", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let AuthRoute = _exports.default = (_class = class AuthRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "auth", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "auth", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("junction/routes/docs", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsRoute extends _route.default {}
  _exports.default = DocsRoute;
});
;define("junction/routes/docs/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsIndexRoute extends _route.default {}
  _exports.default = DocsIndexRoute;
});
;define("junction/routes/files", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class FilesRoute extends _route.default {}
  _exports.default = FilesRoute;
});
;define("junction/routes/index", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let IndexRoute = _exports.default = (_class = class IndexRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
    }
    beforeModel() {
      this.type.currentType = null;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("junction/routes/interface", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class InterfaceRoute extends _route.default {}
  _exports.default = InterfaceRoute;
});
;define("junction/routes/public", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class PublicRoute extends _route.default {}
  _exports.default = PublicRoute;
});
;define("junction/routes/type", ["exports", "@ember/routing/route", "@ember/service", "@ember/runloop"], function (_exports, _route, _service, _runloop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"@ember/runloop"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TypeRoute = _exports.default = (_class = class TypeRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
      _initializerDefineProperty(this, "type", _descriptor2, this);
    }
    async model(params) {
      this.type.currentType = this.types.json.modules[params.slug];
      (0, _runloop.later)(this, async () => {
        this.type.editorJSOnTypeChange();
      }, 300);
      return await this.types.json.modules[params.slug];
    }
    afterModel() {
      (0, _runloop.later)(this, async () => {
        await this.type.loadTypeObjects();
      }, 300);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("junction/routes/types", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class TypesRoute extends _route.default {}
  _exports.default = TypesRoute;
});
;define("junction/serializers/application", ["exports", "@ember-data/serializer/json-api", "@ember/string"], function (_exports, _jsonApi, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api",0,"@ember/string"eaimeta@70e063a35619d71f
  class ApplicationSerializer extends _jsonApi.default {
    keyForAttribute(attr) {
      return (0, _string.underscore)(attr);
    }
    payloadKeyFromModelName(key) {
      return (0, _string.underscore)(key);
    }
  }
  _exports.default = ApplicationSerializer;
});
;define("junction/services/-ea-motion", ["exports", "ember-animated/services/-ea-motion"], function (_exports, _eaMotion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eaMotion.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/services/-ea-motion"eaimeta@70e063a35619d71f
});
;define("junction/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("junction/services/auth", ["exports", "@ember/service", "junction/config/environment", "@ember/object", "@glimmer/tracking"], function (_exports, _service, _environment, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"junction/config/environment",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let AuthService = _exports.default = (_class = class AuthService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
      _initializerDefineProperty(this, "cookies", _descriptor2, this);
      _initializerDefineProperty(this, "type", _descriptor3, this);
      _initializerDefineProperty(this, "types", _descriptor4, this);
      _initializerDefineProperty(this, "blueprints", _descriptor5, this);
      _initializerDefineProperty(this, "inputPassword", _descriptor6, this);
      _initializerDefineProperty(this, "isLoggedIn", _descriptor7, this);
      _initializerDefineProperty(this, "junctionPassword", _descriptor8, this);
      _initializerDefineProperty(this, "goToRouteAfterLogin", _descriptor9, this);
      _initializerDefineProperty(this, "goToSlugAfterLogin", _descriptor0, this);
      _defineProperty(this, "checkIfLoggedIn", async () => {
        this.type.loadingSearchResults = true;
        let cookiePassword = this.cookies.getCookie(_environment.default.JUNCTION_SLUG);
        if (cookiePassword !== '' && this.junctionPassword !== '' && cookiePassword == this.junctionPassword) {
          this.type.loadingSearchResults = false;
          return true;
        } else {
          this.type.loadingSearchResults = false;
          return false;
        }
      });
    }
    async submitPassword() {
      this.type.loadingSearchResults = true;
      if (this.inputPassword !== '' && this.junctionPassword !== '' && this.inputPassword == this.junctionPassword) {
        this.cookies.setCookie(_environment.default.JUNCTION_SLUG, this.inputPassword);
        this.type.loadingSearchResults = false;
        this.justGoToRouteAfterLogin();
      } else {
        this.type.loadingSearchResults = false;
        alert('Incorrect password.');
      }
    }
    async justGoToRouteAfterLogin() {
      this.inputPassword = null; // clear stored password for security reasons

      if (this.goToRouteAfterLogin == 'index' || this.goToRouteAfterLogin == 'auth') {
        this.router.transitionTo('index');
      } else {
        this.type.currentType = this.types.json.modules[this.goToSlugAfterLogin];
        this.router.transitionTo(this.goToRouteAfterLogin, this.goToSlugAfterLogin);
      }
    }
    async logout(e) {
      e.preventDefault();
      await this.cookies.eraseCookie(_environment.default.JUNCTION_SLUG);
      this.router.transitionTo('auth');
    }
    async getJunctionPassword() {
      if (_environment.default.JUNCTION_SLUG == undefined || _environment.default.JUNCTION_SLUG == '') {
        alert('Please define JUNCTION_SLUG in .ENV file');
      } else {
        this.junctionPassword = _environment.default.JUNCTION_PASSWORD;

        // Check if user is already logged in
        let cookiePassword = this.cookies.getCookie(_environment.default.JUNCTION_SLUG);
        if (cookiePassword !== '' && cookiePassword == this.junctionPassword) {
          this.justGoToRouteAfterLogin();
        }
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "cookies", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "blueprints", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "inputPassword", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "isLoggedIn", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "junctionPassword", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "goToRouteAfterLogin", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'index';
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "goToSlugAfterLogin", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "submitPassword", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submitPassword"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "justGoToRouteAfterLogin", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "justGoToRouteAfterLogin"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "logout", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "logout"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getJunctionPassword", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getJunctionPassword"), _class.prototype), _class);
});
;define("junction/services/billing", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking", "junction/config/environment", "@ember/runloop"], function (_exports, _service, _object, _tracking, _environment, _runloop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service",0,"junction/config/environment",0,"@ember/runloop"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BillingService = _exports.default = (_class = class BillingService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
    }
    get totalObjects() {
      return this.types.json.modules.webapp.total_objects;
    }
    get sizeInGB() {
      return this.types.json.modules.webapp.size_in_gb;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("junction/services/blueprints", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/runloop", "junction/config/environment", "bootstrap"], function (_exports, _service, _tracking, _object, _runloop, _environment, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/runloop",0,"@ember/service",0,"junction/config/environment",0,"bootstrap"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BlueprintsService = _exports.default = (_class = class BlueprintsService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "colormodes", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "store", _descriptor3, this);
      _initializerDefineProperty(this, "type", _descriptor4, this);
      _initializerDefineProperty(this, "auth", _descriptor5, this);
      _initializerDefineProperty(this, "junctionBlueprints", _descriptor6, this);
      _initializerDefineProperty(this, "myBlueprints", _descriptor7, this);
      _initializerDefineProperty(this, "projectDescription", _descriptor8, this);
      _initializerDefineProperty(this, "loadingProgress", _descriptor9, this);
      _initializerDefineProperty(this, "tryAgain", _descriptor0, this);
      _initializerDefineProperty(this, "totalTime", _descriptor1, this);
      _initializerDefineProperty(this, "intervalId", _descriptor10, this);
      _defineProperty(this, "progressLoading", () => {
        if (this.loadingProgress < 95) this.loadingProgress += 5;
        this.totalTime += 5;
        if (this.totalTime > 120) {
          clearInterval(this.intervalId);
          this.getAI();
        }
      });
    }
    async downloadCurrentBlueprint(j = '') {
      this.type.loadingSearchResults = true;
      if (this.isValidURL(j)) {
        j = await fetch(j);
        j = await j.json();
      } else if (typeof j === 'object' && j.isTrusted === undefined && j !== null && !Array.isArray(j)) {
        j = j;
      } else {
        j = this.types.json.modules;
      }
      var types_json = [];
      Object.entries(this.types.json.modules).forEach((v, i) => {
        let type_slug = v[0];
        let type_obj = v[1];
        if (type_slug != 'deleted_record' && type_slug != 'platform_record' && type_slug != 'blueprint_record' && type_slug != 'file_record' && type_slug != 'apikey_record') {
          types_json[type_slug] = type_obj;
        }
      });
      (0, _runloop.later)(this, () => {
        const jsonString = JSON.stringify(Object.fromEntries(Object.entries(types_json)), null, 2);

        // Create a Blob from the JSON string
        const blob = new Blob([jsonString], {
          type: 'application/json'
        });

        // Create a link element
        let t = Math.floor(new Date().getTime() / 1000);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Blueprint-' + t + '.types.json';

        // Append to the document and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
        this.type.loadingSearchResults = false;
      }, 1000);
    }
    async downloadCurrentSimplifiedBlueprint(j = '') {
      this.type.loadingSearchResults = true;
      let types_json = this.types.simplifiedJson;
      (0, _runloop.later)(this, () => {
        const jsonString = JSON.stringify(Object.fromEntries(Object.entries(types_json)), null, 2);

        // Create a Blob from the JSON string
        const blob = new Blob([jsonString], {
          type: 'application/json'
        });

        // Create a link element
        let t = Math.floor(new Date().getTime() / 1000);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Blueprint-' + t + '.simplified-types.json';

        // Append to the document and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
        this.type.loadingSearchResults = false;
      }, 1000);
    }
    async changeBlueprint(j, implementationSummary = '') {
      if (j.modules !== undefined) {
        this.type.loadingSearchResults = true;
        if (!this.isValidURL(j) && j.modules.types_json !== undefined) {
          let t = j.modules.types_json;
          this.types.json.modules = t;
          await this.types.json.save();
          window.location.href = '/';
        } else if (j.modules.link !== undefined || j.modules.url !== undefined) {
          let link = j.modules.link === undefined ? j.modules.url : j.modules.link;
          await this.types.saveCurrentTypes(this.types.json.modules);

          // Instead of fetching the external URL directly
          let response = await fetch('https://tribe.junction.express/custom/get-types.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              link: link
            })
          });
          let data_json = await response.json();
          console.log(data_json);
          var types_json = [];
          Object.entries(this.types.json.modules).forEach((v, i) => {
            let type_slug = v[0];
            let type_obj = v[1];
            if (type_slug == 'webapp') {
              types_json['webapp'] = type_obj;
            }
          });
          types_json['webapp']['implementation_summary'] = implementationSummary;
          if (data_json !== undefined && data_json) {
            var link_json = [];
            Object.entries(data_json).forEach((v, i) => {
              let type_slug = v[0];
              let type_obj = v[1];
              if (type_slug != 'webapp') {
                link_json[type_slug] = type_obj;
              }
            });
            this.types.json.modules = {
              ...Object.assign({}, types_json),
              ...Object.assign({}, link_json)
            };
            await this.types.json.save();
            if (implementationSummary != '') {
              (0, _runloop.later)(this, () => {
                window.location.href = '/#showImplementationSummary';
                window.location.reload(true);
              }, 300);
            } else window.location.href = '/';
          } else {
            this.type.loadingSearchResults = false;
          }
        }
      }
    }
    async clearBlueprint() {
      // Display the confirmation dialog
      var userResponse = confirm('Are you sure you want to clear the blueprint? This will remove all your tracks. This does not affect the data saved. You can undo this step.');
      if (userResponse) {
        this.type.loadingSearchResults = true;
        await this.types.saveCurrentTypes(this.types.json.modules);
        var types_json = [];
        Object.entries(this.types.json.modules).forEach((v, i) => {
          let type_slug = v[0];
          let type_obj = v[1];
          if (type_slug == 'webapp') {
            types_json['webapp'] = type_obj;
          }
        });
        types_json['webapp']['implementation_summary'] = '';
        types_json['webapp']['project_description'] = '';
        this.types.json.modules = {
          ...Object.assign({}, types_json)
        };
        await this.types.json.save();
        window.location.href = '/';
      }
    }
    async revertBlueprint(t) {
      this.type.loadingSearchResults = true;
      this.types.json.modules = t;
      await this.types.json.save();
      window.location.href = '/';
    }
    async getBlueprints() {
      this.myBlueprints = await this.store.query('blueprint_record', {
        show_public_objects_only: false
      });
      if (Object.entries(this.types.json.modules).length <= 6 && this.myBlueprints[0] !== undefined && this.myBlueprints[0].id !== undefined) {
        let bp = new _bootstrap.Modal(document.getElementById('blueprintAIPromptModal'), {});
        bp.show();
      } else if (this.auth.projectDescription != '' && Object.entries(this.types.json.modules).length <= 6) {
        await this.getAI();
      } else if (this.auth.blueprintLink != '' && Object.entries(this.types.json.modules).length <= 6) {
        await this.changeBlueprint(this.auth.blueprintLink, this.auth.implementationSummary);
      } else {
        let response = await fetch('https://tribe.junction.express/api.php/blueprint');
        let data = await response.json();
        this.junctionBlueprints = data.data;
        this.myBlueprints = await this.store.query('deleted_record', {
          modules: {
            deleted_type: 'blueprint_record'
          }
        });

        //show implementation summary
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const hash = url.hash;
        if (hash == '#showImplementationSummary') {
          document.querySelector('#blueprintConsultationModal-btn').click();
        }
      }
    }
    async getAI() {
      if (this.projectDescription != '') {
        this.loadingProgress = 5;
        this.totalTime = 5;
        await this.types.saveCurrentTypes(this.types.json.modules);
        this.intervalId = setInterval(this.progressLoading, 5000);
        let response = await fetch('https://agent-api.truearch.io/api/v1/generate-types', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            project_description: this.projectDescription
          })
        });
        let data = await response.json();
        if (data !== undefined && data && data.types) {
          if (data.error !== undefined && data.error || data.types === undefined) {
            this.loadingProgress = 0;
            this.tryAgain = true;
          } else {
            let data_json = data.types;
            if (data_json === undefined) {
              this.loadingProgress = 0;
              this.tryAgain = true;
            } else {
              var types_json = [];
              Object.entries(this.types.json.modules).forEach((v, i) => {
                let type_slug = v[0];
                let type_obj = v[1];
                if (type_slug == 'webapp') {
                  types_json['webapp'] = type_obj;
                }
              });
              var link_json = [];
              Object.entries(data_json).forEach((v, i) => {
                let type_slug = v[0];
                let type_obj = v[1];
                if (type_slug != 'webapp') {
                  link_json[type_slug] = type_obj;
                }
              });
              types_json['webapp']['project_description'] = this.projectDescription;
              types_json['webapp']['implementation_summary'] = data.html ? data.html : "No summary";
              if (data_json) {
                this.types.json.modules = {
                  ...Object.assign({}, types_json),
                  ...Object.assign({}, link_json)
                };
                await this.types.json.save();
                this.loadingProgress = 100;
                clearInterval(this.intervalId);
              }
              (0, _runloop.later)(this, () => {
                window.location.href = '/#showImplementationSummary';
                window.location.reload(true);
              }, 300);
            }
          }
        } else {
          this.loadingProgress = 0;
          this.tryAgain = true;
        }
      }
    }
    async getSampleData() {
      if (this.projectDescription != '') {
        this.type.loadingSearchResults = true;
        var types_json = [];
        Object.entries(this.types.json.modules).forEach((v, i) => {
          let type_slug = v[0];
          let type_obj = v[1];
          if (type_slug != 'webapp' && type_slug != 'deleted_record' && type_slug != 'file_record' && type_slug != 'apikey_record' && type_slug != 'platform_record' && type_slug != 'blueprint_record') {
            types_json[type_slug] = type_obj;
          }
        });
        let response = await fetch('https://agent-api.truearch.io/api/v1/generate-sample-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            project_description: this.projectDescription,
            type: this.type.currentType.slug,
            implementation_summary: this.types.json.modules.webapp.implementation_summary,
            types_json: {
              ...Object.assign({}, types_json)
            }
          })
        });
        let data = await response.json();
        if (data !== undefined && data && data.objects) {
          Object.entries(data.objects).forEach(async (v, i) => {
            let obj = v[1];
            let vv = this.store.createRecord(this.type.currentType.slug, {
              modules: {
                ...obj
              }
            });
            await vv.save();
          });
          window.location.href = '/track/' + this.type.currentType.slug;
        } else {
          this.type.loadingSearchResults = false;
        }
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "auth", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "junctionBlueprints", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "myBlueprints", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "downloadCurrentBlueprint", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "downloadCurrentBlueprint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "downloadCurrentSimplifiedBlueprint", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "downloadCurrentSimplifiedBlueprint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeBlueprint", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeBlueprint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearBlueprint", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearBlueprint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "revertBlueprint", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "revertBlueprint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getBlueprints", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getBlueprints"), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "projectDescription", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.types.json.modules.webapp.project_description ? this.types.json.modules.webapp.project_description : this.auth.projectDescription;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "loadingProgress", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "tryAgain", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "totalTime", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "intervalId", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "getAI", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getAI"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getSampleData", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getSampleData"), _class.prototype), _class);
});
;define("junction/services/colormodes", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ColormodesService = _exports.default = (_class = class ColormodesService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "cookies", _descriptor, this);
      _initializerDefineProperty(this, "mode", _descriptor2, this);
      _initializerDefineProperty(this, "innerHTML", _descriptor3, this);
    }
    changeMode() {
      if (this.mode == 'light') {
        this.mode = 'dark';
      } else {
        this.mode = 'light';
      }
      this.cookies.setCookie('junction_color_mode', this.mode);
      document.querySelector('html').dataset.bsTheme = this.mode;
    }
    initMode() {
      document.querySelector('html').dataset.bsTheme = this.mode;
    }
    get inverseModeExtreme() {
      if (this.mode == 'light') {
        return 'black';
      } else {
        return 'white';
      }
    }
    get modeExtreme() {
      if (this.mode == 'light') {
        return 'white';
      } else {
        return 'black';
      }
    }
    get inverseMode() {
      if (this.mode == 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    }
    buttonLoading(e) {
      e.target.disabled = true;
      this.innerHTML = e.target.innerHTML;
      e.target.innerHTML = '<div class="small spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
    }
    buttonUnloading(e) {
      e.target.innerHTML = this.innerHTML;
      e.target.disabled = false;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "mode", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.cookies.getCookie('junction_color_mode') ?? 'dark';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeMode", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initMode", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initMode"), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "innerHTML", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Save changes';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "buttonLoading", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "buttonLoading"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "buttonUnloading", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "buttonUnloading"), _class.prototype), _class);
});
;define("junction/services/cookies", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking", "junction/config/environment"], function (_exports, _service, _object, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"junction/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let CookiesService = _exports.default = (_class = class CookiesService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "days", _descriptor, this);
    }
    setCookie(name, value) {
      var expires = '';
      var date = new Date();
      date.setTime(date.getTime() + this.days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
      if (_environment.default.environment == 'development') {
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
      } else {
        document.cookie = name + '=' + (value || '') + expires + '; path=/; domain=.junction.express';
      }
    }
    getCookie(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    eraseCookie(name) {
      if (_environment.default.environment == 'development') {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      } else {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = name + '=; Path=/; domain=.junction.express; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "days", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 365;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setCookie", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCookie"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getCookie", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getCookie"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "eraseCookie", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "eraseCookie"), _class.prototype), _class);
});
;define("junction/services/editorjs", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let EditorjsService = _exports.default = (_class = class EditorjsService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "instances", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "instances", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _class);
});
;define("junction/services/file-queue", ["exports", "ember-file-upload/services/file-queue"], function (_exports, _fileQueue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileQueue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/services/file-queue"eaimeta@70e063a35619d71f
});
;define("junction/services/gzip", ["exports", "@ember/service", "@glimmer/tracking", "pako"], function (_exports, _service, _tracking, _pako) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"pako"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let GzipService = _exports.default = (_class = class GzipService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "lastCompressedData", _descriptor, this);
      _initializerDefineProperty(this, "lastError", _descriptor2, this);
    }
    /**
     * Compresses and encodes a CSV string using native compression
     * @param {string} csvString - The CSV string to compress
     * @returns {Promise<string>} Base64 encoded compressed string
     */
    async compressAndEncode(csvString) {
      try {
        this.lastError = null;
        const compressed = _pako.default.gzip(csvString);
        const base64String = btoa(String.fromCharCode.apply(null, compressed));
        this.lastCompressedData = base64String;
        return base64String;
      } catch (error) {
        this.lastError = error;
        throw new Error(`Pako compression failed: ${error.message}`);
      }
    }

    /**
     * Decodes and decompresses a base64 encoded compressed string
     * @param {string} base64String - The compressed string to decompress
     * @returns {Promise<string>} Original CSV string
     */
    async decodeAndDecompress(base64String) {
      try {
        this.lastError = null;
        const binary = atob(base64String);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        return _pako.default.ungzip(bytes, {
          to: 'string'
        });
      } catch (error) {
        this.lastError = error;
        throw new Error(`Pako decompression failed: ${error.message}`);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "lastCompressedData", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lastError", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _class);
});
;define("junction/services/interfaces", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service"eaimeta@70e063a35619d71f
  class InterfacesService extends _service.default {}
  _exports.default = InterfacesService;
});
;define("junction/services/keyboard", ["exports", "ember-keyboard/services/keyboard"], function (_exports, _keyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/services/keyboard"eaimeta@70e063a35619d71f
});
;define("junction/services/module", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking", "@ember/runloop", "bootstrap"], function (_exports, _service, _object, _tracking, _runloop, _bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/runloop",0,"@ember/service",0,"bootstrap"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ModuleService = _exports.default = (_class = class ModuleService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "type", _descriptor, this);
      _initializerDefineProperty(this, "colormodes", _descriptor2, this);
      _initializerDefineProperty(this, "currentModule", _descriptor3, this);
      _initializerDefineProperty(this, "types", _descriptor4, this);
      _initializerDefineProperty(this, "modelBox", _descriptor5, this);
      _defineProperty(this, "inputLinkedTypesOnly", [{
        title: 'Select (for slug based auto-linking)',
        slug: 'select',
        var: 'string',
        multi: false
      }, {
        title: 'Number (for ID based manual entry)',
        slug: 'number',
        var: 'int',
        multi: false
      }, {
        title: 'Text (for comma-separated IDs manual entry)',
        slug: 'text',
        var: 'string',
        multi: false
      }]);
      _defineProperty(this, "inputTypes", [{
        title: 'Text',
        slug: 'text',
        var: 'string',
        multi: false
      }, {
        title: 'Textarea',
        slug: 'textarea',
        var: 'string',
        multi: false
      }, {
        title: 'Rich text editor',
        slug: 'editorjs',
        var: 'json',
        multi: false
      }, {
        title: 'Select',
        slug: 'select',
        var: 'string',
        multi: false
      }, {
        title: 'URL',
        slug: 'url',
        var: 'string',
        multi: false
      }, {
        title: 'Password',
        slug: 'password',
        var: 'string',
        multi: false
      }, {
        title: 'Hidden',
        slug: 'hidden',
        var: 'string',
        multi: false
      }, {
        title: 'Email address',
        slug: 'email',
        var: 'string',
        multi: false
      }, {
        title: 'Phone number',
        slug: 'tel',
        var: 'string',
        multi: false
      }, {
        title: 'Number',
        slug: 'number',
        var: 'int',
        multi: false
      }, {
        title: 'Date and time',
        slug: 'datetime-local',
        var: 'string',
        multi: false
      }, {
        title: 'Date only',
        slug: 'date',
        var: 'string',
        multi: false
      }, {
        title: 'Time only',
        slug: 'time',
        var: 'string',
        multi: false
      }, {
        title: 'File uploader',
        slug: 'file_uploader',
        var: 'json',
        multi: false
      }, {
        title: 'Color',
        slug: 'color',
        var: 'string',
        multi: false
      }, {
        title: 'Checkbox',
        slug: 'checkbox',
        var: 'bool',
        multi: false
      }]);
      _initializerDefineProperty(this, "selectedInputType", _descriptor6, this);
      _initializerDefineProperty(this, "listField", _descriptor7, this);
      _initializerDefineProperty(this, "listSearchable", _descriptor8, this);
      _initializerDefineProperty(this, "listSortable", _descriptor9, this);
      _initializerDefineProperty(this, "linkedType", _descriptor0, this);
      _initializerDefineProperty(this, "linkedTypesAvailable", _descriptor1, this);
      _initializerDefineProperty(this, "inputOptions", _descriptor10, this);
      _initializerDefineProperty(this, "inputMultiple", _descriptor11, this);
      _initializerDefineProperty(this, "inputRequired", _descriptor12, this);
      _initializerDefineProperty(this, "inputPrimary", _descriptor13, this);
      _initializerDefineProperty(this, "inputUnique", _descriptor14, this);
      _initializerDefineProperty(this, "restrictToLinkedOnly", _descriptor15, this);
    }
    changeToRestrictToLinkedOnly(e) {
      this.restrictToLinkedOnly = e;
      if (e == true) this.changeInputType(this.inputLinkedTypesOnly[0]);
    }
    changeLinkedType(e) {
      if (e == 'Select linked track') this.linkedType = '';else this.linkedType = e;
    }
    changeModule(module) {
      this.linkedTypesAvailable = [];
      this.linkedTypesAvailable.push('Select linked track');
      Object.entries(this.types.json.modules).forEach(tp => {
        if (tp[1].slug != 'webapp' && tp[1].slug.includes('_record') === false) {
          this.linkedTypesAvailable.push(tp[1].slug);
        }
      });
      this.linkedTypesAvailable = this.linkedTypesAvailable;
      this.currentModule = module;
      this.inputMultiple = this.currentModule.input_multiple !== undefined ? this.currentModule.input_multiple : false;
      this.inputRequired = this.currentModule.input_required !== undefined ? this.currentModule.input_required : false;
      this.inputOptions = this.currentModule.input_options !== undefined ? this.currentModule.input_options : [];
      this.inputTypes.forEach(i => {
        if (i.slug == this.currentModule.input_type) this.selectedInputType = i;
      });
      if (this.currentModule.linked_type !== undefined && this.currentModule.linked_type) {
        this.linkedType = this.currentModule.linked_type;
        this.restrictToLinkedOnly = true;
      } else {
        this.linkedType = '';
        this.restrictToLinkedOnly = false;
      }
      if (this.currentModule.list_field !== undefined) this.listField = this.currentModule.list_field;else this.listField = false;
      if (this.currentModule.input_unique !== undefined) this.inputUnique = this.currentModule.input_unique;else this.inputUnique = false;
      if (this.currentModule.list_searchable !== undefined) this.listSearchable = this.currentModule.list_searchable;else this.listSearchable = false;
      if (this.currentModule.list_sortable !== undefined) this.listSortable = this.currentModule.list_sortable;else this.listSortable = false;
    }
    changeInputType(e) {
      this.selectedInputType = e;
    }
    async save(e) {
      this.colormodes.buttonLoading(e);
      if (this.selectedInputType != null) {
        if (this.currentModule.input_placeholder === undefined || this.currentModule.input_placeholder == '') this.currentModule.input_placeholder = 'Enter ' + this.currentModule.input_slug;
        let slug = this.type.currentType.slug;
        var exists = false;
        var ii = 0;
        this.types.json.modules[slug].modules.forEach(module => {
          if (module.input_slug == this.currentModule.input_slug) {
            exists = ii;
          }
          ii++;
        });
        if (exists !== false) {
          if (this.currentModule.input_primary === true) {
            this.inputPrimary = true;
          } else {
            this.inputPrimary = false;
            this.inputUnique = false;
          }
          if (this.restrictToLinkedOnly === false) {
            this.linkedType = '';
          }
          this.types.json.modules[slug].modules[exists] = {
            input_slug: this.currentModule.input_slug,
            linked_type: this.linkedType,
            input_primary: this.inputPrimary,
            input_unique: this.inputUnique,
            input_type: this.selectedInputType.slug,
            input_multiple: this.inputMultiple,
            input_options: this.inputOptions,
            input_required: this.inputRequired,
            input_placeholder: this.currentModule.input_placeholder,
            list_field: this.listField,
            list_searchable: this.listSearchable,
            list_sortable: this.listSortable,
            var_type: this.selectedInputType.var
          };
          await this.types.json.save();
          await this.types.fetchAgain();
          this.modelBox.hide();
          document.querySelector('#track-' + slug).click();
        }
        this.colormodes.buttonUnloading(e);
      } else {
        this.colormodes.buttonUnloading(e);
        alert('Form Input Type field is compulsory.');
      }
    }
    addOption() {
      (0, _runloop.later)(this, () => {
        this.inputOptions.push({
          title: '',
          slug: ''
        });
        this.inputOptions = this.inputOptions;
      }, 100);
    }
    updateOption(e) {
      this.inputOptions.push(e);
      this.inputOptions = [...new Set(this.inputOptions)];
      this.inputOptions = this.inputOptions;
    }
    removeOption(index) {
      (0, _runloop.later)(this, () => {
        if (index > -1) {
          this.inputOptions.splice(index, 1);
        }
        this.inputOptions = this.inputOptions;
      }, 100);
    }
    initModel() {
      this.modelBox = new _bootstrap.Modal(document.getElementById('moduleModal'), {});
      const myModalEl = document.getElementById('moduleModal');
      myModalEl.addEventListener('hidden.bs.modal', async event => {
        this.types.fetchAgain();
      });
    }
    async delete() {
      if (confirm('Are you sure you wish to deactivate the field ' + this.currentModule.input_slug) == true) {
        let slug = this.type.currentType.slug;
        var ii = 0;
        await this.types.json.modules[slug].modules.forEach(async module => {
          if (module.input_slug == this.currentModule.input_slug) {
            delete this.types.json.modules[slug].modules[ii];
          }
          ii++;
        });
        this.types.json.modules[slug].modules = this.types.json.modules[slug].modules.filter(element => {
          return element;
        });
        await this.types.json.save();
        this.modelBox.hide();
        this.types.fetchAgain();
        document.querySelector('#track-' + slug).click();
      } else {}
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colormodes", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "currentModule", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "modelBox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "selectedInputType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "listField", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "listSearchable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "listSortable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "linkedType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "linkedTypesAvailable", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "inputOptions", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "inputMultiple", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "inputRequired", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "inputPrimary", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "inputUnique", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "restrictToLinkedOnly", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeToRestrictToLinkedOnly", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeToRestrictToLinkedOnly"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeLinkedType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeLinkedType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeModule", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeModule"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeInputType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeInputType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeOption", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initModel", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype), _class);
});
;define("junction/services/object", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ObjectService = _exports.default = (_class = class ObjectService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "currentType", _descriptor, this);
      _initializerDefineProperty(this, "currentObject", _descriptor2, this);
      _initializerDefineProperty(this, "reloadingVars", _descriptor3, this);
      _initializerDefineProperty(this, "viaPublicForm", _descriptor4, this);
      _initializerDefineProperty(this, "type", _descriptor5, this);
      _initializerDefineProperty(this, "types", _descriptor6, this);
    }
    activateCurrentObject(object) {
      if (object === undefined) {
        this.currentObject = null;
      } else {
        this.currentObject = object;

        //Handling initialisation of multi field
        Object.entries(this.types.json.modules[object.modules.type].modules).forEach(m => {
          if (m[1].input_multiple === true && m[1].input_multiple) {
            let slug = m[1].input_slug;
            if (typeof this.currentObject.modules[slug] === 'object') {
              this.currentObject.modules[slug] = Object.values(this.currentObject.modules[slug]);
            } else if (typeof this.currentObject.modules[slug] !== 'array') {
              if (this.currentObject.modules[slug]) {
                let om = this.currentObject.modules[slug];
                this.currentObject.modules[slug] = [];
                this.currentObject.modules[slug].push(om);
              } else this.currentObject.modules[slug] = [];
            }
          }
        });
        this.currentObject = this.currentObject;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "currentType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "currentObject", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "reloadingVars", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "viaPublicForm", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "type", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "activateCurrentObject", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "activateCurrentObject"), _class.prototype), _class);
});
;define("junction/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("junction/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/services/router-scroll"eaimeta@70e063a35619d71f
});
;define("junction/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("junction/services/type", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking", "@ember/runloop", "@ember/array", "junction/config/environment"], function (_exports, _service, _object, _tracking, _runloop, _array, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/runloop",0,"@ember/service",0,"@ember/array",0,"junction/config/environment"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TypeService = _exports.default = (_class = class TypeService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "types", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
      _initializerDefineProperty(this, "currentType", _descriptor4, this);
      _initializerDefineProperty(this, "apiUrl", _descriptor5, this);
      _initializerDefineProperty(this, "csvData", _descriptor6, this);
      _initializerDefineProperty(this, "showCsvSave", _descriptor7, this);
      _initializerDefineProperty(this, "searchQuery", _descriptor8, this);
      _initializerDefineProperty(this, "advancedSearchQuery", _descriptor9, this);
      _initializerDefineProperty(this, "isAdvancedSearch", _descriptor0, this);
      _initializerDefineProperty(this, "objectsInType", _descriptor1, this);
      _initializerDefineProperty(this, "pageLinks", _descriptor10, this);
      _initializerDefineProperty(this, "selectedRowIDs", _descriptor11, this);
      _initializerDefineProperty(this, "loadingSearchResults", _descriptor12, this);
      _initializerDefineProperty(this, "currentPageNumber", _descriptor13, this);
      _initializerDefineProperty(this, "currentPageOffset", _descriptor14, this);
      _initializerDefineProperty(this, "currentNumberOfPages", _descriptor15, this);
      _initializerDefineProperty(this, "currentPageLength", _descriptor16, this);
      _initializerDefineProperty(this, "sortField", _descriptor17, this);
      _initializerDefineProperty(this, "sortFieldQuery", _descriptor18, this);
      _initializerDefineProperty(this, "sortOrder", _descriptor19, this);
      _initializerDefineProperty(this, "showClearSearchButton", _descriptor20, this);
      _initializerDefineProperty(this, "totalObjects", _descriptor21, this);
      _initializerDefineProperty(this, "editObjectModal", _descriptor22, this);
      _initializerDefineProperty(this, "showModalEvents", _descriptor23, this);
      _initializerDefineProperty(this, "hideModalEvents", _descriptor24, this);
      _initializerDefineProperty(this, "title", _descriptor25, this);
      _initializerDefineProperty(this, "isLive", _descriptor26, this);
      _initializerDefineProperty(this, "description", _descriptor27, this);
      _initializerDefineProperty(this, "coverURL", _descriptor28, this);
      _initializerDefineProperty(this, "buttonText", _descriptor29, this);
      _initializerDefineProperty(this, "thankyouText", _descriptor30, this);
      _initializerDefineProperty(this, "modules", _descriptor31, this);
    }
    updateSortField(field) {
      if (this.sortField[this.currentType.slug] != field) {
        this.sortField[this.currentType.slug] = field;
        this.sortFieldQuery[this.currentType.slug] = field;
        this.sortOrder[this.currentType.slug] = 'asc';
      } else {
        if (this.sortOrder[this.currentType.slug] == 'asc') {
          this.sortFieldQuery[this.currentType.slug] = '-' + field;
          this.sortOrder[this.currentType.slug] = 'desc';
        } else {
          this.sortFieldQuery[this.currentType.slug] = field;
          this.sortOrder[this.currentType.slug] = 'asc';
        }
      }
      this.sortField = this.sortField;
      this.sortFieldQuery = this.sortFieldQuery;
      this.sortOrder = this.sortOrder;
      this.search();
    }
    editorJSOnTypeChange() {
      this.hideModalEvents.forEach(u => {
        this.editObjectModal.removeEventListener('hidden.bs.modal', u);
      });
      this.showModalEvents.forEach(i => {
        this.editObjectModal.removeEventListener('show.bs.modal', i);
      });
    }
    async savePublicForm(e) {
      e.target.innerHTML = '<i class="fa-solid fa-circle-check"></i> Saved';
      e.target.classList.remove('btn-secondary');
      e.target.classList.add('btn-success');
      var type_slug = this.currentType.slug;
      this.types.json.modules[type_slug].public_form = {};
      this.types.json.modules[type_slug].public_form['is_live'] = this.isLive;
      this.types.json.modules[type_slug].public_form['title'] = this.title;
      this.types.json.modules[type_slug].public_form['button_text'] = this.buttonText;
      this.types.json.modules[type_slug].public_form['thankyou_text'] = this.thankyouText;
      this.types.json.modules[type_slug].public_form['description'] = this.description;
      this.types.json.modules[type_slug].public_form['cover_url'] = this.coverURL;
      this.types.json.modules[type_slug].public_form['modules'] = JSON.stringify(this.modules);
      this.types.json.modules[type_slug].public_form = this.types.json.modules[type_slug].public_form;
      await this.types.json.save();
      (0, _runloop.later)(this, () => {
        e.target.innerHTML = '<i class="fa-solid fa-save"></i> Save Changes';
        e.target.classList.add('btn-secondary');
        e.target.classList.remove('btn-success');
      }, 2000);
    }
    initPublicForm() {
      if (this.currentType?.slug) {
        var type_slug = this.currentType.slug;
        if (this.types.json.modules[type_slug].public_form === undefined) this.types.json.modules[type_slug].public_form = {};
        if (this.types.json.modules[type_slug].public_form.is_live === undefined) this.isLive = false;else this.isLive = this.types.json.modules[type_slug].public_form.is_live;
        if (this.types.json.modules[type_slug].public_form.title === undefined) this.title = '';else this.title = this.types.json.modules[type_slug].public_form.title;
        if (this.types.json.modules[type_slug].public_form.description === undefined) this.description = '';else this.description = this.types.json.modules[type_slug].public_form.description;
        if (this.types.json.modules[type_slug].public_form.button_text === undefined) this.buttonText = '';else this.buttonText = this.types.json.modules[type_slug].public_form.button_text;
        if (this.types.json.modules[type_slug].public_form.thankyou_text === undefined) this.thankyouText = '';else this.thankyouText = this.types.json.modules[type_slug].public_form.thankyou_text;
        if (this.types.json.modules[type_slug].public_form.cover_url === undefined) this.coverURL = '';else this.coverURL = this.types.json.modules[type_slug].public_form.cover_url;
        this.csvData = null;
        this.showCsvSave = false;
        if (this.types.json.modules[type_slug].public_form.modules === undefined) this.modules = {};else this.modules = JSON.parse(this.types.json.modules[type_slug].public_form.modules);
      }
    }
    async loadTypeObjects(searchResults = false) {
      if (this.currentType?.slug) {
        var type_slug = this.currentType.slug;
        this.apiUrl = _environment.default.TribeENV.API_URL + '/api.php/' + type_slug;
        if (this.selectedRowIDs[type_slug] === undefined) this.selectedRowIDs[type_slug] = [];
        if (this.currentPageOffset[type_slug] === undefined) this.currentPageOffset[type_slug] = 0;
        if (this.currentPageLength[type_slug] === undefined) this.currentPageLength[type_slug] = 25;
        if (this.currentPageNumber[type_slug] === undefined) this.currentPageNumber[type_slug] = 1;
        if (this.sortField[type_slug] === undefined) this.sortField[type_slug] = 'id';
        if (this.sortFieldQuery[type_slug] === undefined) this.sortFieldQuery[type_slug] = '-id';
        if (this.sortOrder[type_slug] === undefined) this.sortOrder[type_slug] = 'desc';
        this.selectedRowIDs = this.selectedRowIDs;
        this.currentPageOffset = this.currentPageOffset;
        this.currentPageLength = this.currentPageLength;
        this.currentPageNumber = this.currentPageNumber;
        this.sortField = this.sortField;
        this.sortFieldQuery = this.sortFieldQuery;
        this.sortOrder = this.sortOrder;
        if (searchResults !== false) {
          await this.search();
        } else {
          await this.clearSearch();
          this.updatePageLinks();
        }
        this.initPublicForm();
      }
    }
    addToSelectedRowIDs(type, id) {
      this.selectedRowIDs[type].push(id);
      this.selectedRowIDs = this.selectedRowIDs;
    }
    removeFromSelectedRowIDs(type, id) {
      const index = this.selectedRowIDs[type].indexOf(id);
      if (index > -1) {
        this.selectedRowIDs[type].splice(index, 1);
      }
      this.selectedRowIDs = this.selectedRowIDs;
    }
    emptySelectedRowsInType(type) {
      this.selectedRowIDs[type] = [];
      this.selectedRowIDs = this.selectedRowIDs;
    }
    updatePageLength(pageLength) {
      this.currentPageNumber[this.currentType.slug] = 1;
      this.currentPageLength[this.currentType.slug] = pageLength;
      this.currentPageOffset[this.currentType.slug] = 0;
      this.loadTypeObjects(this.currentType, true);
    }
    updatePageOffset(pageOffset) {
      this.currentPageOffset[this.currentType.slug] = pageOffset;
      this.loadTypeObjects(this.currentType, true);
    }
    selectNoneSearchedIDs() {
      this.selectedRowIDs[this.currentType.slug] = [];
      this.selectedRowIDs = this.selectedRowIDs;
    }
    async selectAllSearchedIDs() {
      var chosen = [];
      let all = await this.store.query(this.currentType.slug, {
        show_public_objects_only: false,
        sort: this.sortFieldQuery[this.currentType.slug],
        page: {
          limit: -1
        },
        filter: {
          title: this.searchQuery
        }
      });
      all.forEach(a => {
        chosen.push(a.id);
      });
      this.selectedRowIDs[this.currentType.slug] = chosen;
      this.selectedRowIDs = this.selectedRowIDs;
    }
    async search() {
      if (this.isAdvancedSearch) this.advancedSearch();else if (this.searchQuery != '') {
        this.isAdvancedSearch = false;
        this.loadingSearchResults = true;
        this.objectsInType = null;
        this.objectsInType = await this.store.query(this.currentType.slug, {
          show_public_objects_only: false,
          sort: this.sortFieldQuery[this.currentType.slug],
          page: {
            limit: this.currentPageLength[this.currentType.slug],
            offset: this.currentPageOffset[this.currentType.slug]
          },
          filter: {
            title: this.searchQuery
          }
        });
        this.loadingSearchResults = false;
        if (this.objectsInType.meta !== undefined && this.objectsInType.meta.total_objects !== undefined) this.totalObjects = this.objectsInType.meta.total_objects;
      } else this.clearSearch();
    }
    async clearSearch() {
      if (this.currentType?.slug) {
        this.isAdvancedSearch = false;
        this.totalObjects = this.currentType.total_objects;
        this.loadingSearchResults = true;
        this.objectsInType = null;
        this.objectsInType = await this.store.query(this.currentType.slug, {
          show_public_objects_only: false,
          sort: this.sortFieldQuery[this.currentType.slug],
          page: {
            limit: this.currentPageLength[this.currentType.slug],
            offset: this.currentPageOffset[this.currentType.slug]
          }
        });
      }
      this.showClearSearchButton = false;
      this.loadingSearchResults = false;
    }
    async advancedSearch() {
      this.isAdvancedSearch = true;
      this.loadingSearchResults = true;
      this.objectsInType = null;
      this.objectsInType = await this.store.query(this.currentType.slug, {
        show_public_objects_only: false,
        sort: this.sortFieldQuery[this.currentType.slug],
        page: {
          limit: this.currentPageLength[this.currentType.slug],
          offset: this.currentPageOffset[this.currentType.slug]
        },
        filter: {
          ...this.advancedSearchQuery
        }
      });
      this.showClearSearchButton = true;
      this.loadingSearchResults = false;
      if (this.objectsInType.meta !== undefined && this.objectsInType.meta.total_objects !== undefined) this.totalObjects = this.objectsInType.meta.total_objects;
    }
    clearSearchQuery() {
      this.clearSearch();
      this.searchQuery = null;
      this.advancedSearchQuery = [];
    }
    get modulesThatWillBeListed() {
      let v = [];
      Object.entries(this.currentType.modules).forEach(([key, value]) => {
        if (value.list_field === true) {
          v.push(value.input_slug);
        }
      });
      return v;
    }
    updatePageLinks() {
      if (this.currentType?.slug) {
        this.currentNumberOfPages[this.currentType.slug] = Math.ceil(Number(this.totalObjects) / this.currentPageLength[this.currentType.slug]) ?? 1;
        this.currentNumberOfPages = this.currentNumberOfPages;
        let i = 1;
        this.pageLinks = (0, _array.A)([]);
        while (i <= this.currentNumberOfPages[this.currentType.slug]) {
          if (i === 1 || i === this.currentNumberOfPages[this.currentType.slug] || i <= this.currentPageNumber[this.currentType.slug] + 3 || i >= this.currentPageNumber[this.currentType.slug] - 3) this.pageLinks.push(i);
          i++;
        }
        this.pageLinks = this.pageLinks;
      }
    }
    changePageNumber(pageNumber = 1) {
      if (this.currentType?.slug) {
        this.currentPageNumber[this.currentType.slug] = pageNumber;
        this.currentPageNumber = this.currentPageNumber;
        this.updatePageOffset((pageNumber - 1) * this.currentPageLength[this.currentType.slug]);
      }
    }
    changeType(type) {
      this.clearSearchQuery();
      this.editorJSOnTypeChange();
      this.currentType = type;
      this.loadingSearchResults = true;
      this.router.transitionTo('type', type);
      (0, _runloop.later)(this, () => {
        this.loadTypeObjects();
      }, 300);
      this.loadingSearchResults = false;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "currentType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "apiUrl", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "csvData", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "showCsvSave", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "searchQuery", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "advancedSearchQuery", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "isAdvancedSearch", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "objectsInType", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "pageLinks", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "selectedRowIDs", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "loadingSearchResults", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "currentPageNumber", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "currentPageOffset", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "currentNumberOfPages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "currentPageLength", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "sortField", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "sortFieldQuery", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "sortOrder", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "showClearSearchButton", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "totalObjects", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.currentType.total_objects;
    }
  }), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "editObjectModal", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return document.getElementById('editObjectModal');
    }
  }), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "showModalEvents", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, "hideModalEvents", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return (0, _array.A)([]);
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateSortField", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateSortField"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "editorJSOnTypeChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "editorJSOnTypeChange"), _class.prototype), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, "title", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, "isLive", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, "description", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, "coverURL", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, "buttonText", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, "thankyouText", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, "modules", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _applyDecoratedDescriptor(_class.prototype, "savePublicForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "savePublicForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initPublicForm", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initPublicForm"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadTypeObjects", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loadTypeObjects"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addToSelectedRowIDs", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addToSelectedRowIDs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeFromSelectedRowIDs", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeFromSelectedRowIDs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "emptySelectedRowsInType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "emptySelectedRowsInType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updatePageLength", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updatePageLength"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updatePageOffset", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updatePageOffset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectNoneSearchedIDs", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectNoneSearchedIDs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectAllSearchedIDs", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectAllSearchedIDs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "search", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "search"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearSearch", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearSearch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "advancedSearch", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "advancedSearch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearSearchQuery", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearSearchQuery"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updatePageLinks", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updatePageLinks"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changePageNumber", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changePageNumber"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeType", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeType"), _class.prototype), _class);
});
;define("junction/services/types", ["exports", "@ember/service", "junction/config/environment", "@ember/object", "@glimmer/tracking", "@ember-data/model", "@ember/application"], function (_exports, _service, _environment, _object, _tracking, _model, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"junction/config/environment",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember-data/model",0,"@ember/application"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TypesService = _exports.default = (_class = class TypesService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "json", _descriptor2, this);
      _defineProperty(this, "convertTypesToSimplified", typesJson => {
        // Create the basic structure with a types object
        const simplifiedTypes = {
          project_description: typesJson.modules.webapp.project_description ?? "",
          types: {}
        };

        // Iterate through each content type in the original file
        for (const [typeSlug, typeData] of Object.entries(typesJson.modules)) {
          // Skip the webapp info and any types without modules
          if (typeSlug === 'webapp' || typeSlug === 'deleted_record' || typeSlug === 'platform_record' || typeSlug === 'blueprint_record' || typeSlug === 'file_record' || typeSlug === 'apikey_record' || !typeData.modules || !Array.isArray(typeData.modules)) {
            continue;
          }

          // Create a new object for this type
          simplifiedTypes.types[typeSlug] = {};

          // Process each module in the content type
          typeData.modules.forEach(module => {
            const slug = module.input_slug;
            let varType = (module.var_type ?? "string") + (module.linked_type ? " | *" + module.linked_type : "");

            // Handle select options if they exist
            if (module.input_options && Array.isArray(module.input_options) && module.input_options.length > 0) {
              // Extract all option slugs
              const optionSlugs = module.input_options.map(option => option.slug);

              // Add the piped extension to the var_type
              if (optionSlugs.length > 0) {
                varType += ` | ${optionSlugs.join(', ')}`;
              }
            }

            // Add the module to the simplified type
            simplifiedTypes.types[typeSlug][slug] = varType;
          });
        }
        return simplifiedTypes;
      });
    }
    async fetchAgain() {
      if (_environment.default.TribeENV.API_URL !== undefined && _environment.default.TribeENV.API_URL != '') {
        this.json = await this.store.findRecord('webapp', 0, {});
        let owner = (0, _application.getOwner)(this);
        Object.entries(this.json.modules).forEach(([modelName, modelData]) => {
          var _class2, _descriptor3, _descriptor4;
          const modelDynamicName = modelName.replace(/_/g, '-');
          let DynamicModel = (_class2 = class DynamicModel extends _model.default {
            constructor(...args) {
              super(...args);
              _initializerDefineProperty(this, "slug", _descriptor3, this);
              _initializerDefineProperty(this, "modules", _descriptor4, this);
            }
          }, _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "slug", [_model.attr], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: null
          }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "modules", [_model.attr], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: null
          }), _class2);
          if (!owner.hasRegistration(`model:${modelDynamicName}`)) {
            owner.register(`model:${modelDynamicName}`, DynamicModel);
          }
        });
        this.json = await this.store.findRecord('webapp', 0, {
          include: ['total_objects']
        });
        this.json = this.json;
        this.simplifiedJson = this.convertTypesToSimplified(this.json);
        //console.log(this.simplifiedJson);
      }
    }
    async saveCurrentTypes(t) {
      let d = new Date().toLocaleString();
      let obj = this.store.createRecord('blueprint_record', {
        modules: {
          title: t.webapp.name + ' (last used on ' + d + ')',
          is_types: true,
          types_json: t,
          content_privacy: 'private'
        }
      });
      await obj.save();
      obj.modules.deleted_slug = obj.slug;
      await obj.save();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "json", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.store.peekRecord('webapp', 0, {
        include: ['total_objects']
      });
    }
  }), _applyDecoratedDescriptor(_class.prototype, "fetchAgain", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchAgain"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveCurrentTypes", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveCurrentTypes"), _class.prototype), _class);
});
;define("junction/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Junction"}}
  
  <Loading />
  
  {{outlet}}
  
  <BasicDropdownWormhole />
  <Types::Webapp />
  <Types::NewModel />
  <Types::EditModel />
  <Types::DeleteModel />
  <Types::BlueprintObjectModal />
  <Types::Blueprints::AiPrompt />
  <Types::Blueprints::SampleData />
  <Types::BlueprintConsultationModal />
  <Types::EditObjectModal />
  <Types::CopyObjectModal />
  <Types::Modules::Modal />
  <Types::TrackApiModal />
  <Types::Modules::New />
  <Types::Public::Modal />
  */
  {
    "id": "j44T+b06",
    "block": "[[[1,[28,[35,0],[\"Junction\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\\n\"],[8,[39,4],null,null,null],[1,\"\\n\"],[8,[39,5],null,null,null],[1,\"\\n\"],[8,[39,6],null,null,null],[1,\"\\n\"],[8,[39,7],null,null,null],[1,\"\\n\"],[8,[39,8],null,null,null],[1,\"\\n\"],[8,[39,9],null,null,null],[1,\"\\n\"],[8,[39,10],null,null,null],[1,\"\\n\"],[8,[39,11],null,null,null],[1,\"\\n\"],[8,[39,12],null,null,null],[1,\"\\n\"],[8,[39,13],null,null,null],[1,\"\\n\"],[8,[39,14],null,null,null],[1,\"\\n\"],[8,[39,15],null,null,null],[1,\"\\n\"],[8,[39,16],null,null,null],[1,\"\\n\"],[8,[39,17],null,null,null],[1,\"\\n\"],[8,[39,18],null,null,null]],[],false,[\"page-title\",\"loading\",\"component\",\"-outlet\",\"basic-dropdown-wormhole\",\"types/webapp\",\"types/new-model\",\"types/edit-model\",\"types/delete-model\",\"types/blueprint-object-modal\",\"types/blueprints/ai-prompt\",\"types/blueprints/sample-data\",\"types/blueprint-consultation-modal\",\"types/edit-object-modal\",\"types/copy-object-modal\",\"types/modules/modal\",\"types/track-api-modal\",\"types/modules/new\",\"types/public/modal\"]]",
    "moduleName": "junction/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/auth", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Auth"}}
  
  <main class="vh-100 w-100 d-flex align-items-center justify-content-center">
    <div class="col-10 col-md-7 col-lg-4 col-xxl-3 text-center">
      <Logo::Full @color="var(--bs-primary)" @width="360" />
  
      <div class="form-floating my-5">
        <Input
          @type="password"
          @value={{this.auth.inputPassword}}
          class="form-control border-dark border border-1"
          id="floatingPassword"
          placeholder="Password"
          @enter={{this.clickSubmitButton}}
        />
        <label for="floatingPassword">Password</label>
      </div>
  
      <button
        id="auth-submit-password-btn"
        class="w-100 btn btn-lg btn-outline-primary"
        {{on "click" this.auth.submitPassword}}
        type="button"
      >Sign in</button>
    </div>
  </main>
  
  {{outlet}}
  */
  {
    "id": "eTbIMZ/2",
    "block": "[[[1,[28,[35,0],[\"Auth\"],null]],[1,\"\\n\\n\"],[10,\"main\"],[14,0,\"vh-100 w-100 d-flex align-items-center justify-content-center\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"col-10 col-md-7 col-lg-4 col-xxl-3 text-center\"],[12],[1,\"\\n    \"],[8,[39,3],null,[[\"@color\",\"@width\"],[\"var(--bs-primary)\",\"360\"]],null],[1,\"\\n\\n    \"],[10,0],[14,0,\"form-floating my-5\"],[12],[1,\"\\n      \"],[8,[39,4],[[24,0,\"form-control border-dark border border-1\"],[24,1,\"floatingPassword\"],[24,\"placeholder\",\"Password\"]],[[\"@type\",\"@value\",\"@enter\"],[\"password\",[30,0,[\"auth\",\"inputPassword\"]],[30,0,[\"clickSubmitButton\"]]]],null],[1,\"\\n      \"],[10,\"label\"],[14,\"for\",\"floatingPassword\"],[12],[1,\"Password\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[11,\"button\"],[24,1,\"auth-submit-password-btn\"],[24,0,\"w-100 btn btn-lg btn-outline-primary\"],[24,4,\"button\"],[4,[38,7],[\"click\",[30,0,[\"auth\",\"submitPassword\"]]],null],[12],[1,\"Sign in\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,9],null,null],null,null,null]],[],false,[\"page-title\",\"main\",\"div\",\"logo/full\",\"input\",\"label\",\"button\",\"on\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/auth.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/docs", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Docs"}}
  {{outlet}}
  */
  {
    "id": "wqr+KT4r",
    "block": "[[[1,[28,[35,0],[\"Docs\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/docs.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/docs/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Index"}}
  {{outlet}}
  */
  {
    "id": "jnJfOPxg",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/docs/index.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/files", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Files"}}
  
  <Header @webapp={{this.types.json.modules.webapp}} />
  
  <div class="above-footer px-2">
  
  	<main class="flex-shrink-0 page a4 d2 mb-5" style="min-height:75vh">
  		
  		<div class="container mx-auto px-2">
  		  <div class="py-3 px-3 mt-4 border border-1 border-dark text-center bg-body-tertiary rounded-0">
  		    <h2 class="text-body-emphasis"><i class="fa-solid fa-layer-group"></i> <span>Files Archive</span></h2>
  		    <div class="input-group mt-4">
  			  <Input @value={{this.query}} @type="text" class="form-control form-control-lg" placeholder="Type query (use re::phrase for complex search)" {{on-key "Enter" this.search}} />
  			  <button {{on 'click' this.search}} type="button" class="btn btn-light btn-lg"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
  			</div>
  			<div class="mb-3 mt-3 d-flex align-items-center justify-content-between">
  				<div class="text-start">
  					Use '##' as separater. <a href="https://github.com/tribe-framework/rephrase" target="new" class="fst-italic text-decoration-underline text-muted">Learn more</a> about re::phrase.
  				</div>
  				<div class="d-flex align-content-center justify-content-end">
  					<XToggle @theme='default' @size='small' @variant='light' @value={{this.deepSearch}} @onToggle={{fn (mut this.deepSearch)}} />
  					<div class="text-end mx-2">Deep search (slower)</div>
  				</div>
  			</div>
  		  </div>
  		</div>
  
  		<div class="container mx-auto px-2">
  		{{#if this.loading}}
  			<div class="mx-auto my-5">
  				<div class="spinner-grow text-{{this.colormodes.inverseMode}}" role="status">
  					<span class="visually-hidden">Loading...</span>
  				</div>
  			</div>
  		{{else if this.results}}
  			
  			<table class="table mt-5">
  				<thead>
  					<tr>
  					  <th scope="col">{{this.getLength this.results.by_file_name}} results with matching file name</th>
  					  <th scope="col">URL</th>
  					</tr>
  				</thead>
  				<tbody>
  					{{#each-in this.results.by_file_name as |name link|}}
  					<tr>
  					  <td>{{name}}</td>
  					  <td><a href="{{link}}" target="new" class="bt btn-sm btn-outline-primary">View <i class="fa-solid fa-up-right-from-square"></i></a></td>
  					</tr>
  					{{/each-in}}
  				</tbody>
  			</table>
  
  			<table class="table mt-5">
  				<thead>
  					<tr>
  					  <th scope="col">{{this.getLength this.results.by_file_content}} results with matching file content</th>
  					  <th scope="col">URL</th>
  					</tr>
  				</thead>
  				<tbody>
  					{{#each-in this.results.by_file_content as |name link|}}
  					<tr>
  					  <td>{{name}}</td>
  					  <td><a href="{{link}}" target="new" class="bt btn-sm btn-outline-primary">View <i class="fa-solid fa-up-right-from-square"></i></a></td>
  					</tr>
  					{{/each-in}}
  				</tbody>
  			</table>
  		{{/if}}
  		</div>
  
  	</main>
  
  </div>
  
  <Footer @webapp={{this.types.json.modules.webapp}} />
  
  {{outlet}}
  */
  {
    "id": "ywT38a/M",
    "block": "[[[1,[28,[35,0],[\"Files\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@webapp\"],[[30,0,[\"types\",\"json\",\"modules\",\"webapp\"]]]],null],[1,\"\\n\\n\"],[10,0],[14,0,\"above-footer px-2\"],[12],[1,\"\\n\\n\\t\"],[10,\"main\"],[14,0,\"flex-shrink-0 page a4 d2 mb-5\"],[14,5,\"min-height:75vh\"],[12],[1,\"\\n\\t\\t\\n\\t\\t\"],[10,0],[14,0,\"container mx-auto px-2\"],[12],[1,\"\\n\\t\\t  \"],[10,0],[14,0,\"py-3 px-3 mt-4 border border-1 border-dark text-center bg-body-tertiary rounded-0\"],[12],[1,\"\\n\\t\\t    \"],[10,\"h2\"],[14,0,\"text-body-emphasis\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-layer-group\"],[12],[13],[1,\" \"],[10,1],[12],[1,\"Files Archive\"],[13],[13],[1,\"\\n\\t\\t    \"],[10,0],[14,0,\"input-group mt-4\"],[12],[1,\"\\n\\t\\t\\t  \"],[8,[39,7],[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Type query (use re::phrase for complex search)\"],[4,[38,8],[\"Enter\",[30,0,[\"search\"]]],null]],[[\"@value\",\"@type\"],[[30,0,[\"query\"]],\"text\"]],null],[1,\"\\n\\t\\t\\t  \"],[11,\"button\"],[24,0,\"btn btn-light btn-lg\"],[24,4,\"button\"],[4,[38,10],[\"click\",[30,0,[\"search\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-magnifying-glass\"],[12],[13],[1,\" Search\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"mb-3 mt-3 d-flex align-items-center justify-content-between\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"text-start\"],[12],[1,\"\\n\\t\\t\\t\\t\\tUse '##' as separater. \"],[10,3],[14,6,\"https://github.com/tribe-framework/rephrase\"],[14,\"target\",\"new\"],[14,0,\"fst-italic text-decoration-underline text-muted\"],[12],[1,\"Learn more\"],[13],[1,\" about re::phrase.\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"d-flex align-content-center justify-content-end\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[8,[39,12],null,[[\"@theme\",\"@size\",\"@variant\",\"@value\",\"@onToggle\"],[\"default\",\"small\",\"light\",[30,0,[\"deepSearch\"]],[28,[37,13],[[28,[37,14],[[30,0,[\"deepSearch\"]]],null]],null]]],null],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"text-end mx-2\"],[12],[1,\"Deep search (slower)\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t  \"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\"],[10,0],[14,0,\"container mx-auto px-2\"],[12],[1,\"\\n\"],[41,[30,0,[\"loading\"]],[[[1,\"\\t\\t\\t\"],[10,0],[14,0,\"mx-auto my-5\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[15,0,[29,[\"spinner-grow text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,\"role\",\"status\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"visually-hidden\"],[12],[1,\"Loading...\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"results\"]],[[[1,\"\\t\\t\\t\\n\\t\\t\\t\"],[10,\"table\"],[14,0,\"table mt-5\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"thead\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"tr\"],[12],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,[28,[30,0,[\"getLength\"]],[[30,0,[\"results\",\"by_file_name\"]]],null]],[1,\" results with matching file name\"],[13],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"URL\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,22],[[30,0,[\"results\",\"by_file_name\"]]],null],null,[[[1,\"\\t\\t\\t\\t\\t\"],[10,\"tr\"],[12],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"td\"],[12],[1,[30,2]],[13],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"td\"],[12],[10,3],[15,6,[29,[[30,1]]]],[14,\"target\",\"new\"],[14,0,\"bt btn-sm btn-outline-primary\"],[12],[1,\"View \"],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[1,2]],null],[1,\"\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,\"table\"],[14,0,\"table mt-5\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"thead\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"tr\"],[12],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,[28,[30,0,[\"getLength\"]],[[30,0,[\"results\",\"by_file_content\"]]],null]],[1,\" results with matching file content\"],[13],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"URL\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,22],[[30,0,[\"results\",\"by_file_content\"]]],null],null,[[[1,\"\\t\\t\\t\\t\\t\"],[10,\"tr\"],[12],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"td\"],[12],[1,[30,4]],[13],[1,\"\\n\\t\\t\\t\\t\\t  \"],[10,\"td\"],[12],[10,3],[15,6,[29,[[30,3]]]],[14,\"target\",\"new\"],[14,0,\"bt btn-sm btn-outline-primary\"],[12],[1,\"View \"],[10,\"i\"],[14,0,\"fa-solid fa-up-right-from-square\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[3,4]],null],[1,\"\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"]],[]],null]],[]]],[1,\"\\t\\t\"],[13],[1,\"\\n\\n\\t\"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[8,[39,24],null,[[\"@webapp\"],[[30,0,[\"types\",\"json\",\"modules\",\"webapp\"]]]],null],[1,\"\\n\\n\"],[46,[28,[37,26],null,null],null,null,null]],[\"link\",\"name\",\"link\",\"name\"],false,[\"page-title\",\"header\",\"div\",\"main\",\"h2\",\"i\",\"span\",\"input\",\"on-key\",\"button\",\"on\",\"a\",\"x-toggle\",\"fn\",\"mut\",\"if\",\"table\",\"thead\",\"tr\",\"th\",\"tbody\",\"each\",\"-each-in\",\"td\",\"footer\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/files.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Dashboard"}}
  
  <Header @webapp={{@model.modules.webapp}} />
  
  <div class="above-footer px-2">
  
  	<main class="flex-shrink-0 page a4 d2 mb-5" style="min-height:75vh">
  
  		<div class="container-xxl px-0 mx-auto">
  
  				<PageSummaryCard />
  
  				{{#if (and this.plausibleDomain this.plausibleAuth)}}
  					<div class="col px-0 border border-1 border-primary mt-5">
  						<iframe plausible-embed src="https://plausible.io/share/{{this.plausibleDomain}}?auth={{this.plausibleAuth}}&embed=true&theme={{this.colormodes.mode}}" scrolling="yes" frameborder="0" loading="lazy" style="width: 1px; min-width: 100%; min-height: 1600px;"></iframe>
  					</div>
  				{{/if}}
  				
  
  		</div>
  
  	</main>
  
  </div>
  
  <Footer @webapp={{@model.modules.webapp}} />
  {{outlet}}
  */
  {
    "id": "0SFIa3Zh",
    "block": "[[[1,[28,[35,0],[\"Dashboard\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@webapp\"],[[30,1,[\"modules\",\"webapp\"]]]],null],[1,\"\\n\\n\"],[10,0],[14,0,\"above-footer px-2\"],[12],[1,\"\\n\\n\\t\"],[10,\"main\"],[14,0,\"flex-shrink-0 page a4 d2 mb-5\"],[14,5,\"min-height:75vh\"],[12],[1,\"\\n\\n\\t\\t\"],[10,0],[14,0,\"container-xxl px-0 mx-auto\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[8,[39,4],null,null,null],[1,\"\\n\\n\"],[41,[28,[37,6],[[30,0,[\"plausibleDomain\"]],[30,0,[\"plausibleAuth\"]]],null],[[[1,\"\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col px-0 border border-1 border-primary mt-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"iframe\"],[14,\"plausible-embed\",\"\"],[15,\"src\",[29,[\"https://plausible.io/share/\",[30,0,[\"plausibleDomain\"]],\"?auth=\",[30,0,[\"plausibleAuth\"]],\"&embed=true&theme=\",[30,0,[\"colormodes\",\"mode\"]]]]],[14,\"scrolling\",\"yes\"],[14,\"frameborder\",\"0\"],[14,\"loading\",\"lazy\"],[14,5,\"width: 1px; min-width: 100%; min-height: 1600px;\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\t\\t\\t\\t\\n\\n\\t\\t\"],[13],[1,\"\\n\\n\\t\"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[8,[39,8],null,[[\"@webapp\"],[[30,1,[\"modules\",\"webapp\"]]]],null],[1,\"\\n\"],[46,[28,[37,10],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"header\",\"div\",\"main\",\"page-summary-card\",\"if\",\"and\",\"iframe\",\"footer\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/index.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/interface", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Interface"}}
  {{outlet}}
  */
  {
    "id": "2gj5QGIi",
    "block": "[[[1,[28,[35,0],[\"Interface\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/interface.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/public", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Public"}}
  
  <div class="d-none" {{did-insert this.initType}}></div>
  
  {{#if this.type.currentType.public_form.is_live}}
  
  	<Header @webapp={{@model.modules.webapp}} @public={{true}} />
  
  	<div class="above-footer px-2">
  
  		<main class="flex-shrink-0 page a4 d2" style="min-height:75vh">
  
  			<div class="container mx-auto text-center my-5">
  				
  				{{#if this.type.currentType.public_form.cover_url}}
  					<img src="{{this.type.currentType.public_form.cover_url}}" class="img-fluid mx-auto rounded-5" />
  				{{/if}}
  
  				{{#if this.object.currentObject.id}}
  
  					<div class="col-lg-6 mx-auto p-5 my-5 text-center text-muted bg-body border border-dashed rounded-5 bg-success">
  					    <div class="text-center mb-3"><i class="fa-solid fa-circle-check fa-5x text-success"></i></div>
  					    <p class="fs-5 display-6">
  					      {{this.type.currentType.public_form.thankyou_text}}
  					    </p>
  				  	</div>
  
  				{{else}}
  
  					{{#if this.type.currentType.public_form.title}}
  						<h1 class="my-5 text-primary">{{this.type.currentType.public_form.title}}</h1>
  					{{/if}}
  
  					{{#if this.type.currentType.public_form.description}}
  						<p class="col-lg-6 mx-auto fs-5 display-6">{{this.type.currentType.public_form.description}}</p>
  					{{/if}}
  
  				    {{#unless this.type.currentType.readonly}}
  				    	{{#if this.type.currentType.public_form.button_text}}
  							<div class="d-flex align-items-center justify-content-center my-5">
  								<button {{on 'click' this.openNewModal}} type="button" style="letter-spacing:1.4px" class="text-uppercase fw-bolder btn btn-primary btn-lg">{{this.type.currentType.public_form.button_text}} <Logo::Arrows @width="42" @color="#000" /></button>
  							</div>
  				    	{{else}}
  							<div class="d-flex align-items-center justify-content-center my-5">
  								<button {{on 'click' this.openNewModal}} type="button" style="letter-spacing:1.4px" class="text-uppercase fw-bolder btn btn-primary btn-lg">New {{this.type.currentType.name}} <Logo::Arrows @width="42" @color="#000" /></button>
  							</div>
  				    	{{/if}}
  					{{/unless}}
  
  				{{/if}}
  
  				<div class="my-5">
  			        <div class="col-lg-5 mx-auto mt-5 py-5 text-center">
  			        	<img src="https://junction.express/assets/img/auth.png" class="img-fluid" width="180" />
  			        </div>
  			        <a href="https://junction.express" target="new" class="col-3 col-md-2 col-lg-1 d-block mx-auto text-center text-decoration-none">
  			        	<div class="smaller text-uppercase text-{{this.colormodes.inverseMode}}" style="font-size:0.64em">Powered by</div>
  			        	<Logo::Wordmark @color="var(--bs-primary)" />
  			        </a>
  				</div>
  
  			</div>
  
  		</main>
  
  	</div>
  
  {{/if}}
  
  {{outlet}}
  */
  {
    "id": "l9iNFA4z",
    "block": "[[[1,[28,[35,0],[\"Public\"],null]],[1,\"\\n\\n\"],[11,0],[24,0,\"d-none\"],[4,[38,2],[[30,0,[\"initType\"]]],null],[12],[13],[1,\"\\n\\n\"],[41,[30,0,[\"type\",\"currentType\",\"public_form\",\"is_live\"]],[[[1,\"\\n\\t\"],[8,[39,4],null,[[\"@webapp\",\"@public\"],[[30,1,[\"modules\",\"webapp\"]],true]],null],[1,\"\\n\\n\\t\"],[10,0],[14,0,\"above-footer px-2\"],[12],[1,\"\\n\\n\\t\\t\"],[10,\"main\"],[14,0,\"flex-shrink-0 page a4 d2\"],[14,5,\"min-height:75vh\"],[12],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"container mx-auto text-center my-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\n\"],[41,[30,0,[\"type\",\"currentType\",\"public_form\",\"cover_url\"]],[[[1,\"\\t\\t\\t\\t\\t\"],[10,\"img\"],[15,\"src\",[29,[[30,0,[\"type\",\"currentType\",\"public_form\",\"cover_url\"]]]]],[14,0,\"img-fluid mx-auto rounded-5\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"object\",\"currentObject\",\"id\"]],[[[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-6 mx-auto p-5 my-5 text-center text-muted bg-body border border-dashed rounded-5 bg-success\"],[12],[1,\"\\n\\t\\t\\t\\t\\t    \"],[10,0],[14,0,\"text-center mb-3\"],[12],[10,\"i\"],[14,0,\"fa-solid fa-circle-check fa-5x text-success\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t    \"],[10,2],[14,0,\"fs-5 display-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t      \"],[1,[30,0,[\"type\",\"currentType\",\"public_form\",\"thankyou_text\"]]],[1,\"\\n\\t\\t\\t\\t\\t    \"],[13],[1,\"\\n\\t\\t\\t\\t  \\t\"],[13],[1,\"\\n\\n\"]],[]],[[[1,\"\\n\"],[41,[30,0,[\"type\",\"currentType\",\"public_form\",\"title\"]],[[[1,\"\\t\\t\\t\\t\\t\\t\"],[10,\"h1\"],[14,0,\"my-5 text-primary\"],[12],[1,[30,0,[\"type\",\"currentType\",\"public_form\",\"title\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"type\",\"currentType\",\"public_form\",\"description\"]],[[[1,\"\\t\\t\\t\\t\\t\\t\"],[10,2],[14,0,\"col-lg-6 mx-auto fs-5 display-6\"],[12],[1,[30,0,[\"type\",\"currentType\",\"public_form\",\"description\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[51,[30,0,[\"type\",\"currentType\",\"readonly\"]]],[[[41,[30,0,[\"type\",\"currentType\",\"public_form\",\"button_text\"]],[[[1,\"\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"d-flex align-items-center justify-content-center my-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"button\"],[24,5,\"letter-spacing:1.4px\"],[24,0,\"text-uppercase fw-bolder btn btn-primary btn-lg\"],[24,4,\"button\"],[4,[38,12],[\"click\",[30,0,[\"openNewModal\"]]],null],[12],[1,[30,0,[\"type\",\"currentType\",\"public_form\",\"button_text\"]]],[1,\" \"],[8,[39,13],null,[[\"@width\",\"@color\"],[\"42\",\"#000\"]],null],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"d-flex align-items-center justify-content-center my-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"button\"],[24,5,\"letter-spacing:1.4px\"],[24,0,\"text-uppercase fw-bolder btn btn-primary btn-lg\"],[24,4,\"button\"],[4,[38,12],[\"click\",[30,0,[\"openNewModal\"]]],null],[12],[1,\"New \"],[1,[30,0,[\"type\",\"currentType\",\"name\"]]],[1,\" \"],[8,[39,13],null,[[\"@width\",\"@color\"],[\"42\",\"#000\"]],null],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[]]]],[]],null],[1,\"\\n\"]],[]]],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"my-5\"],[12],[1,\"\\n\\t\\t\\t        \"],[10,0],[14,0,\"col-lg-5 mx-auto mt-5 py-5 text-center\"],[12],[1,\"\\n\\t\\t\\t        \\t\"],[10,\"img\"],[14,\"src\",\"https://junction.express/assets/img/auth.png\"],[14,0,\"img-fluid\"],[14,\"width\",\"180\"],[12],[13],[1,\"\\n\\t\\t\\t        \"],[13],[1,\"\\n\\t\\t\\t        \"],[10,3],[14,6,\"https://junction.express\"],[14,\"target\",\"new\"],[14,0,\"col-3 col-md-2 col-lg-1 d-block mx-auto text-center text-decoration-none\"],[12],[1,\"\\n\\t\\t\\t        \\t\"],[10,0],[15,0,[29,[\"smaller text-uppercase text-\",[30,0,[\"colormodes\",\"inverseMode\"]]]]],[14,5,\"font-size:0.64em\"],[12],[1,\"Powered by\"],[13],[1,\"\\n\\t\\t\\t        \\t\"],[8,[39,15],null,[[\"@color\"],[\"var(--bs-primary)\"]],null],[1,\"\\n\\t\\t\\t        \"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\"],[13],[1,\"\\n\\n\\t\"],[13],[1,\"\\n\\n\"]],[]],null],[1,\"\\n\"],[46,[28,[37,17],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"div\",\"did-insert\",\"if\",\"header\",\"main\",\"img\",\"i\",\"p\",\"h1\",\"unless\",\"button\",\"on\",\"logo/arrows\",\"a\",\"logo/wordmark\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/public.hbs",
    "isStrictMode": false
  });
});
;define("junction/templates/type", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Type"}}
  
  <Header @webapp={{this.type.types.json.modules.webapp}} />
  
  <div class="above-footer px-2">
    <main class="flex-shrink-0 page a4 d2 mb-5">
      <div class="container-xxl mx-auto px-0">
        <PageSummaryCard />
  
        {{#if (eq this.type.currentType.slug "file_record")}}
          <Files::Uploader />
        {{/if}}
  
        {{#if (eq this.type.currentType.slug "apikey_record")}}
          <Api::AuthReference />
        {{/if}}
      </div>
  
      {{#if this.type.currentType}}
        <div
          {{on-click-outside this.stopWobble}}
          class="mt-5 position-relative min-vh-100 row pb-5 overflow-x-hidden mb-5 border border-1 border-{{this.colormodes.inverseMode}}
            {{if
              (lte this.type.modulesThatWillBeListed.length 5)
              'container-xxl mx-auto'
              'mx-0'
            }}"
        >
          {{#if
            (not
              (or
                (eq this.type.currentType.slug "deleted_record")
                (eq this.type.currentType.slug "file_record")
              )
            )
          }}
            <div class="position-absolute top-0 text-end end-0 p-0 m-0">
              {{#if this.activateReordering}}
                <div class="btn-group" role="group"><button
                    id="track-new"
                    type="button"
                    {{on "click" this.stopWobble}}
                    class="text-capitalize btn-lg fw-normal border-0 btn"
                  ><i class="fa-solid fa-lock-open"></i></button></div>
              {{else}}
                <div class="btn-group" role="group"><button
                    id="track-new"
                    type="button"
                    {{on "click" this.startWobble}}
                    class="text-capitalize btn-lg fw-normal border-0 btn"
                  ><i class="fa-solid fa-lock"></i></button></div>
              {{/if}}
            </div>
          {{/if}}
  
          <div class="col px-0">
            <Types::ListTable::TitleBar
              @type={{this.type.currentType}}
              @search={{this.type.search}}
              @clearSearch={{this.type.clearSearch}}
              @updatePageLength={{this.type.updatePageLength}}
              @currentPageLength={{this.type.currentPageLength}}
              @selectedRowIDs={{this.type.selectedRowIDs}}
              @advancedSearch={{this.type.advancedSearch}}
              @showClearSearchButton={{this.type.showClearSearchButton}}
              @searchQuery={{this.type.searchQuery}}
              @advancedSearchQuery={{this.type.advancedSearchQuery}}
              @clearSearchQuery={{this.type.clearSearchQuery}}
              @changePageNumber={{this.type.changePageNumber}}
            />
  
            <Types::Modules::List
              @activateReordering={{this.activateReordering}}
              @stopWobble={{this.stopWobble}}
            />
  
            <Types::ListTable::Pagination
              @type={{get
                this.type.types.json.modules
                this.type.currentType.slug
              }}
              @numberOfPages={{get
                this.type.currentNumberOfPages
                this.type.currentType.slug
              }}
              @pageLinks={{this.type.pageLinks}}
              @selectedRowIDs={{this.type.selectedRowIDs}}
              @changePageNumber={{this.type.changePageNumber}}
              @currentPageNumber={{this.type.currentPageNumber}}
              @totalObjects={{this.type.totalObjects}}
            />
  
            <Types::ListTable
              @webapp={{this.type.types.json}}
              @type={{this.type.currentType}}
              @loadTypeObjects={{this.type.loadTypeObjects}}
              @selectedRowIDs={{this.type.selectedRowIDs}}
              @emptySelectedRowsInType={{this.type.emptySelectedRowsInType}}
            >
  
              <Types::ListTable::Head
                @updateSortField={{this.type.updateSortField}}
                @sortField={{this.type.sortField}}
                @type={{this.type.currentType}}
                @sortOrder={{this.type.sortOrder}}
              />
  
              <tbody>
                {{#each this.type.objectsInType as |object|}}
                  {{#if (not-eq object.id "0")}}
                    <Types::ListTable::Row
                      @webapp={{this.type.types.json}}
                      @type={{this.type.currentType}}
                      @object={{object}}
                      @loadTypeObjects={{this.type.loadTypeObjects}}
                      @selectedRowIDs={{this.type.selectedRowIDs}}
                      @addToSelectedRowIDs={{this.type.addToSelectedRowIDs}}
                      @removeFromSelectedRowIDs={{this.type.removeFromSelectedRowIDs}}
                      @emptySelectedRowsInType={{this.type.emptySelectedRowsInType}}
                    />
                  {{else}}
                    {{#if this.type.loadingSearchResults}}
                      <Types::ListTable::LoadingTableRow
                        @type={{this.type.currentType}}
                      />
                    {{else}}
                      <Types::ListTable::EmptyTableRow
                        @type={{this.type.currentType}}
                      />
                    {{/if}}
                  {{/if}}
                {{else}}
                  {{#if this.type.loadingSearchResults}}
                    <Types::ListTable::LoadingTableRow
                      @type={{this.type.currentType}}
                    />
                  {{else}}
                    <Types::ListTable::EmptyTableRow
                      @type={{this.type.currentType}}
                    />
                  {{/if}}
                {{/each}}
              </tbody>
  
            </Types::ListTable>
          </div>
        </div>
      {{/if}}
  
      <GoToTop />
  
    </main>
  
  </div>
  
  <Footer @webapp={{this.type.types.json.modules.webapp}} />
  
  {{outlet}}
  */
  {
    "id": "XKQV9iDV",
    "block": "[[[1,[28,[35,0],[\"Type\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@webapp\"],[[30,0,[\"type\",\"types\",\"json\",\"modules\",\"webapp\"]]]],null],[1,\"\\n\\n\"],[10,0],[14,0,\"above-footer px-2\"],[12],[1,\"\\n  \"],[10,\"main\"],[14,0,\"flex-shrink-0 page a4 d2 mb-5\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container-xxl mx-auto px-0\"],[12],[1,\"\\n      \"],[8,[39,4],null,null,null],[1,\"\\n\\n\"],[41,[28,[37,6],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"file_record\"],null],[[[1,\"        \"],[8,[39,7],null,null,null],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[28,[37,6],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"apikey_record\"],null],[[[1,\"        \"],[8,[39,8],null,null,null],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"type\",\"currentType\"]],[[[1,\"      \"],[11,0],[16,0,[29,[\"mt-5 position-relative min-vh-100 row pb-5 overflow-x-hidden mb-5 border border-1 border-\",[30,0,[\"colormodes\",\"inverseMode\"]],\"\\n          \",[52,[28,[37,9],[[30,0,[\"type\",\"modulesThatWillBeListed\",\"length\"]],5],null],\"container-xxl mx-auto\",\"mx-0\"]]]],[4,[38,10],[[30,0,[\"stopWobble\"]]],null],[12],[1,\"\\n\"],[41,[28,[37,11],[[28,[37,12],[[28,[37,6],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"deleted_record\"],null],[28,[37,6],[[30,0,[\"type\",\"currentType\",\"slug\"]],\"file_record\"],null]],null]],null],[[[1,\"          \"],[10,0],[14,0,\"position-absolute top-0 text-end end-0 p-0 m-0\"],[12],[1,\"\\n\"],[41,[30,0,[\"activateReordering\"]],[[[1,\"              \"],[10,0],[14,0,\"btn-group\"],[14,\"role\",\"group\"],[12],[11,\"button\"],[24,1,\"track-new\"],[24,0,\"text-capitalize btn-lg fw-normal border-0 btn\"],[24,4,\"button\"],[4,[38,14],[\"click\",[30,0,[\"stopWobble\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-lock-open\"],[12],[13],[13],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[10,0],[14,0,\"btn-group\"],[14,\"role\",\"group\"],[12],[11,\"button\"],[24,1,\"track-new\"],[24,0,\"text-capitalize btn-lg fw-normal border-0 btn\"],[24,4,\"button\"],[4,[38,14],[\"click\",[30,0,[\"startWobble\"]]],null],[12],[10,\"i\"],[14,0,\"fa-solid fa-lock\"],[12],[13],[13],[13],[1,\"\\n\"]],[]]],[1,\"          \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n        \"],[10,0],[14,0,\"col px-0\"],[12],[1,\"\\n          \"],[8,[39,16],null,[[\"@type\",\"@search\",\"@clearSearch\",\"@updatePageLength\",\"@currentPageLength\",\"@selectedRowIDs\",\"@advancedSearch\",\"@showClearSearchButton\",\"@searchQuery\",\"@advancedSearchQuery\",\"@clearSearchQuery\",\"@changePageNumber\"],[[30,0,[\"type\",\"currentType\"]],[30,0,[\"type\",\"search\"]],[30,0,[\"type\",\"clearSearch\"]],[30,0,[\"type\",\"updatePageLength\"]],[30,0,[\"type\",\"currentPageLength\"]],[30,0,[\"type\",\"selectedRowIDs\"]],[30,0,[\"type\",\"advancedSearch\"]],[30,0,[\"type\",\"showClearSearchButton\"]],[30,0,[\"type\",\"searchQuery\"]],[30,0,[\"type\",\"advancedSearchQuery\"]],[30,0,[\"type\",\"clearSearchQuery\"]],[30,0,[\"type\",\"changePageNumber\"]]]],null],[1,\"\\n\\n          \"],[8,[39,17],null,[[\"@activateReordering\",\"@stopWobble\"],[[30,0,[\"activateReordering\"]],[30,0,[\"stopWobble\"]]]],null],[1,\"\\n\\n          \"],[8,[39,18],null,[[\"@type\",\"@numberOfPages\",\"@pageLinks\",\"@selectedRowIDs\",\"@changePageNumber\",\"@currentPageNumber\",\"@totalObjects\"],[[28,[37,19],[[30,0,[\"type\",\"types\",\"json\",\"modules\"]],[30,0,[\"type\",\"currentType\",\"slug\"]]],null],[28,[37,19],[[30,0,[\"type\",\"currentNumberOfPages\"]],[30,0,[\"type\",\"currentType\",\"slug\"]]],null],[30,0,[\"type\",\"pageLinks\"]],[30,0,[\"type\",\"selectedRowIDs\"]],[30,0,[\"type\",\"changePageNumber\"]],[30,0,[\"type\",\"currentPageNumber\"]],[30,0,[\"type\",\"totalObjects\"]]]],null],[1,\"\\n\\n          \"],[8,[39,20],null,[[\"@webapp\",\"@type\",\"@loadTypeObjects\",\"@selectedRowIDs\",\"@emptySelectedRowsInType\"],[[30,0,[\"type\",\"types\",\"json\"]],[30,0,[\"type\",\"currentType\"]],[30,0,[\"type\",\"loadTypeObjects\"]],[30,0,[\"type\",\"selectedRowIDs\"]],[30,0,[\"type\",\"emptySelectedRowsInType\"]]]],[[\"default\"],[[[[1,\"\\n\\n            \"],[8,[39,21],null,[[\"@updateSortField\",\"@sortField\",\"@type\",\"@sortOrder\"],[[30,0,[\"type\",\"updateSortField\"]],[30,0,[\"type\",\"sortField\"]],[30,0,[\"type\",\"currentType\"]],[30,0,[\"type\",\"sortOrder\"]]]],null],[1,\"\\n\\n            \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,24],[[28,[37,24],[[30,0,[\"type\",\"objectsInType\"]]],null]],null],null,[[[41,[28,[37,25],[[30,1,[\"id\"]],\"0\"],null],[[[1,\"                  \"],[8,[39,26],null,[[\"@webapp\",\"@type\",\"@object\",\"@loadTypeObjects\",\"@selectedRowIDs\",\"@addToSelectedRowIDs\",\"@removeFromSelectedRowIDs\",\"@emptySelectedRowsInType\"],[[30,0,[\"type\",\"types\",\"json\"]],[30,0,[\"type\",\"currentType\"]],[30,1],[30,0,[\"type\",\"loadTypeObjects\"]],[30,0,[\"type\",\"selectedRowIDs\"]],[30,0,[\"type\",\"addToSelectedRowIDs\"]],[30,0,[\"type\",\"removeFromSelectedRowIDs\"]],[30,0,[\"type\",\"emptySelectedRowsInType\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"type\",\"loadingSearchResults\"]],[[[1,\"                    \"],[8,[39,27],null,[[\"@type\"],[[30,0,[\"type\",\"currentType\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"                    \"],[8,[39,28],null,[[\"@type\"],[[30,0,[\"type\",\"currentType\"]]]],null],[1,\"\\n\"]],[]]]],[]]]],[1]],[[[41,[30,0,[\"type\",\"loadingSearchResults\"]],[[[1,\"                  \"],[8,[39,27],null,[[\"@type\"],[[30,0,[\"type\",\"currentType\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"                  \"],[8,[39,28],null,[[\"@type\"],[[30,0,[\"type\",\"currentType\"]]]],null],[1,\"\\n\"]],[]]]],[]]],[1,\"            \"],[13],[1,\"\\n\\n          \"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n    \"],[8,[39,29],null,null,null],[1,\"\\n\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[8,[39,30],null,[[\"@webapp\"],[[30,0,[\"type\",\"types\",\"json\",\"modules\",\"webapp\"]]]],null],[1,\"\\n\\n\"],[46,[28,[37,32],null,null],null,null,null]],[\"object\"],false,[\"page-title\",\"header\",\"div\",\"main\",\"page-summary-card\",\"if\",\"eq\",\"files/uploader\",\"api/auth-reference\",\"lte\",\"on-click-outside\",\"not\",\"or\",\"button\",\"on\",\"i\",\"types/list-table/title-bar\",\"types/modules/list\",\"types/list-table/pagination\",\"get\",\"types/list-table\",\"types/list-table/head\",\"tbody\",\"each\",\"-track-array\",\"not-eq\",\"types/list-table/row\",\"types/list-table/loading-table-row\",\"types/list-table/empty-table-row\",\"go-to-top\",\"footer\",\"component\",\"-outlet\"]]",
    "moduleName": "junction/templates/type.hbs",
    "isStrictMode": false
  });
});
;define("junction/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("junction/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("junction/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("junction/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("junction/utils/parse-touch-data", ["exports", "ember-gesture-modifiers/utils/parse-touch-data"], function (_exports, _parseTouchData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "isHorizontal", {
    enumerable: true,
    get: function () {
      return _parseTouchData.isHorizontal;
    }
  });
  Object.defineProperty(_exports, "isVertical", {
    enumerable: true,
    get: function () {
      return _parseTouchData.isVertical;
    }
  });
  Object.defineProperty(_exports, "parseInitialTouchData", {
    enumerable: true,
    get: function () {
      return _parseTouchData.parseInitialTouchData;
    }
  });
  Object.defineProperty(_exports, "parseTouchData", {
    enumerable: true,
    get: function () {
      return _parseTouchData.parseTouchData;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-gesture-modifiers/utils/parse-touch-data"eaimeta@70e063a35619d71f
});
;define("junction/utils/titleize", ["exports", "ember-cli-string-helpers/utils/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/utils/titleize"eaimeta@70e063a35619d71f
});
;

;define('junction/config/environment', [], function() {
  var prefix = 'junction';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("junction/app")["default"].create({"name":"junction","version":"2.0.1+d1f87d88"});
          }
        
//# sourceMappingURL=junction.map
