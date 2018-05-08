let param = {
  base: 0.5,
  canvas: null,
  ctx: null,
  img: null
};
export default {
  initCanvas: function (id, container,mapsrc) {
    let con = document.getElementById(container);
    param.canvas = document.getElementById(id);
    param.ctx = param.canvas.getContext('2d');
    param.img = new Image();
    param.canvas.width = con.clientWidth;
    param.canvas.height = con.clientHeight;
    param.img.src = require('@/'+mapsrc);
    param.img.onload = function () {
      param.base = con.clientWidth / param.img.width;
      param.ctx.drawImage(param.img, 0, 0,param.img.width*param.base,param.img.height*param.base);
    };
  },

  createMarker: function (data) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].position) {
          let marker = new Image();
          if (data[i].user.userName == '9527') {
            marker.src = require('@/common/img/map/1.png');
          }else if (data[i].user.userName == '王五') {
            marker.src = require('@/common/img/map/2.png');
          }else if (data[i].user.userName == '侯七') {
            marker.src = require('@/common/img/map/3.png');
          }else if (data[i].user.userName == '五块钱') {
            marker.src = require('@/common/img/map/4.png');
          }else if (data[i].user.userName == '赵六') {
            marker.src = require('@/common/img/map/5.png');
          }else if (data[i].user.userName == '马八') {
            marker.src = require('@/common/img/map/6.png');
          }

          setTimeout(()=>{
            param.ctx.drawImage(marker,data[i].position.corx-15,data[i].position.cory-30,30,30);
          },1)
        }
      }
    }
  },
}



