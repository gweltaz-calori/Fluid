var HANDLER = "_vue_mousedownaway_handler";

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== "function") {
    if (process.env.NODE_ENV !== "production") {
      Vue.util.warn(
        "v-" +
          binding.name +
          '="' +
          binding.expression +
          '" expects a function value, ' +
          "got " +
          callback
      );
    }
    return;
  }

  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (
      initialMacrotaskEnded &&
      (path ? path.indexOf(el) < 0 : !el.contains(ev.target))
    ) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener("mousedown", el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener("mousedown", el[HANDLER], false);
  delete el[HANDLER];
}

export var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind
};

export var mixin = {
  directives: { onMousedownaway: directive }
};
