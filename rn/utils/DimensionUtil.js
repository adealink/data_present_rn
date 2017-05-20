const Dimensions = require('Dimensions');
const PixelRatio = require('PixelRatio');
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
let ScreenScale = Dimensions.get('window').scale;

//按比例转换像素，输入750宽度设计图的像素
export function dp(width) {
  return width / 2;
}

export function px(width) {
  return width / ScreenScale;
}

export function fs(fontsize) {
  return fontsize / 2;
}

export function screenWidth() {
  return ScreenWidth;
}

export function screenHeight() {
  return ScreenHeight;
}

export function screenScale() {
  return ScreenScale;
}
