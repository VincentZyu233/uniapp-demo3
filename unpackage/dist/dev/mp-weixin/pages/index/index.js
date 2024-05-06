"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const toUrl = (url) => {
      common_vendor.index.navigateTo({
        url: `${url}`
      });
    };
    let title = "123456";
    let x = common_vendor.ref(10);
    setInterval(() => {
      x.value++;
      console.log("x.value: ", x.value);
    }, 1e3);
    function fun() {
      return "woshi hanshu d fanhuizhi";
    }
    let arr = common_vendor.ref([1, 2, 3, 4]);
    let obj = common_vendor.ref({ name: "zhangsan", age: "114514" });
    obj.value.name = "lisi";
    const arrs = common_vendor.ref([
      "../../static/cute.jpg",
      "../../static/mengbimao.gif",
      "../../static/moyu.jpg"
    ]);
    const picUrl = common_vendor.ref("../../static/cute.jpg");
    var idx = 0;
    setInterval(() => {
      idx = (idx + 1) % 3;
      picUrl.value = arrs.value[idx];
    }, 1e3);
    let isActive = common_vendor.ref(false);
    setInterval(() => {
      isActive.value = !isActive.value;
    }, 1e3);
    let fontSizeVar = common_vendor.ref(25);
    setInterval(() => {
      fontSizeVar.value = (fontSizeVar.value + 1) % 55;
    }, 55);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => toUrl("/pages/page3/page3")),
        b: common_vendor.o(($event) => toUrl("/pages/page4/page4")),
        c: common_vendor.t(common_vendor.unref(title)),
        d: common_vendor.t(common_vendor.unref(x)),
        e: common_vendor.t(114 + 514),
        f: common_vendor.t(_ctx.a),
        g: common_vendor.t(_ctx.str),
        h: common_vendor.t(Date.now()),
        i: common_vendor.t(Math.random()),
        j: common_vendor.t("true"),
        k: common_vendor.t("false"),
        l: common_vendor.t(fun()),
        m: common_vendor.t(common_vendor.unref(arr)),
        n: common_vendor.t(common_vendor.unref(obj)),
        o: picUrl.value,
        p: arrs.value[1],
        q: common_vendor.unref(isActive) ? 1 : "",
        r: !common_vendor.unref(isActive) ? 1 : "",
        s: "260px",
        t: common_vendor.unref(fontSizeVar) + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AAAstuffsAAA/AAAqwqAAA/jmu-ux/uniapp-demo/demo3/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
