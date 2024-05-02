const list = {
  __openList: false,
  set: function (ele) {
    const __rect = ele.getBoundingClientRect();
    // let __divWid = Math.round(__rect.width / 2);
    // let __divHei = Math.round(__rect.height / 2);
    let __x, __y;
    ele.addEventListener(isMobile() ? "touchstart" : "contextmenu", (e) => {
      ele.addEventListener("touchend", () => (this.__openList = false));

      this.__openList = true;
      console.log(e);
      __x = e.clientX - Math.round(__rect.width);
      __y = e.clientY - Math.round(__rect.height);
      __x = e.layerX;
      __y = e.layerY;

      function res() {
        return {
          X: __x,
          Y: __y,
        };
      }

      e.preventDefault();
      if (isMobile())
        setTimeout(() => {
          this.position = res();
          this.fun();
        }, 400);
      else {
        this.position = res();
        this.fun();
      }
    });
  },
  fun: null,
  position: null,
  //   remOp: ele.addEventListener("touchend", () => (this.__openList = false))(),
};

function isMobile() {
  return document.body.getBoundingClientRect().width < 768;
}
export default list;
