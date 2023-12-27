const PopupOpen = function (opts, el) {
  const self = this;

  if (opts.headerTitle == "") {
    el.querySelector(".pop_header").style.display = "none";
  } else {
    el.querySelector("#popTitle").innerHTML = opts.headerTitle;
  }

  let span = document.createElement("span");
  let maskDiv = document.body.insertBefore(span, document.body.firstChild);

  el.classList.add("open");
  el.style.width = opts.width + "px";
  if (opts.height != null && opts.height != "") {
    el.querySelector(".pop_body").style.height = opts.height + "px";
  }
  maskDiv.classList.add("mask_wrap");
  self.el = el;
  self.opts = opts;
};

PopupOpen.prototype = (function () {
  function _init(self) {
    _initEvt(self);
  }

  function _initEvt(self) {
    let mask = document.querySelector(".mask_wrap");
    let { el, opts } = self;
    // console.log("11", el);
    // console.log("22", opts);

    self.el.querySelector(".btnOk").onclick = function () {
      if (typeof opts.callBack.fnOk == "string") {
        window[opts.callBack.fnOk](opts.popId);
      } else if (typeof opts.callBack.fnOk == "function") {
        //
      } else {
        self.el.classList.remove("open");
        document.body.removeChild(mask);
      }
    };

    self.el.querySelector(".btnCancle").onclick = function () {
      if (opts.callBack.fnCancle) {
      }
      self.el.classList.remove("open");
      document.body.removeChild(mask);
    };
  }

  return {
    init: function () {
      _init(this);
    },
    initEvt: function () {
      _initEvt();
    },
  };
})();

Element.prototype.open = function (setting) {
  const config = {
    popId: this.id,
    headerTitle: null,
    data: null,
    width: null,
    height: null,
    callBack: null,
  };

  let opts = Object.assign(config, setting);
  const module = new PopupOpen(opts, this);
  module.init();
  return module;
};

Element.prototype.close = function () {
  let mask = document.querySelector(".mask_wrap");
  document.getElementById(this.id).classList.remove("open");
  document.body.removeChild(mask);
};
