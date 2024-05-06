"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "page4",
  setup(__props) {
    var x = common_vendor.ref(1);
    var colorVar = common_vendor.ref("#114514");
    function onClick() {
      x.value++;
      colorVar.value = getRandomColor();
    }
    function getRandomColor() {
      const r = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
      const g = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
      const b = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
      const color = `#${r}${g}${b}`;
      return color;
    }
    function onSwitchChange(e) {
      console.log("switch on or off? ON TRUE, OFF FALSE" + e.detail.value);
      isLoading.value = !isLoading.value;
    }
    var isLoading = common_vendor.ref(true);
    const arr = common_vendor.ref(
      [
        { name: "张三", age: 18 },
        { name: "李四", age: 19 },
        { name: "王五", age: 20 },
        { name: "赵六", age: 21 },
        { name: "钱七", age: 22 },
        { name: "孙八", age: 23 },
        { name: "周九", age: 24 },
        { name: "吴十", age: 25 },
        { name: "郑十一", age: 26 },
        { name: "王十二", age: 27 }
      ]
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(x)),
        b: common_vendor.o(($event) => onClick()),
        c: common_vendor.unref(colorVar),
        d: common_vendor.o(onSwitchChange),
        e: common_vendor.unref(isLoading),
        f: common_vendor.unref(isLoading)
      }, common_vendor.unref(isLoading) ? {} : {}, {
        g: common_vendor.unref(isLoading),
        h: common_vendor.f(10, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: index
          };
        }),
        i: common_vendor.f(arr.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.age)
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/AAAstuffsAAA/AAAqwqAAA/jmu-ux/uniapp-demo/demo3/pages/page4/page4.vue"]]);
wx.createPage(MiniProgramPage);
