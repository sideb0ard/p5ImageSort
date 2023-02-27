let myImage;
let halfImage;
let mySorted;

let brightest_color;
let brightest_val;
let b_x = 0;
let b_y = 0;

let cur_x = 0;
let cur_y = 0;

function preload() {
  myImage = loadImage('CODER.png');
  mySorted = createImage(myImage.width, myImage.height);
}

function setup() {
  createCanvas(526 * 2, 585);
  mySorted = myImage.get();

  brightest_color = mySorted.get(b_x, b_y);
  brightest_val = brightness(brightest_color);

  console.log('mYIMAGE PIXEL SIZE:', myImage.pixels.length, ' BRIHGT:', brightest_val);

}

function draw() {
  image(myImage, 0, 0);

  mySorted.loadPixels();
  let cur_color = mySorted.get(cur_x, cur_y);
  let cur_val = brightness(cur_color);
  console.log("HIGHT BRIGHT:", brightest_val, " CUR BRIGHT:", cur_val);
  if (cur_val > brightest_val) {
    mySorted.set(cur_x, cur_y, brightest_color);
    mySorted.set(b_x, b_y, cur_color);
    brightest_color = cur_color;
    brighest_val = cur_val;
    b_x = cur_x;
    b_y = cur_x;
    console.log("FOUND BRIGHTER!", brighest_val);
  }
  cur_x++;
  if (cur_x > mySorted.width) {
    cur_x = 0;
    cur_y++;
    if (cur_y > mySorted.height) {
      noLoop();
    }
  }
  //let bx = x;
  //for (let x2 = x + 1; x < mySorted.width; x2++) {

  //  let pxl = mySorted.get(x2, y);
  //  let b = brightness(pxl);
  //  if (b > brightest_val) {
  //    brightest_val = b;
  //    bx = x2;
  //  }
  //  // console.log("Bright:", b);
  //  // let othpx = random(mySorted.width);
  //  // let othpx_color = mySorted.get(othpx, by);

  //}
  //let new_brightest = mySorted.get(bx, y);
  //mySorted.set(bx, y, brightest_px);
  //mySorted.set(x, y, new_brightest);
  image(mySorted, 526, 0);


}
