let whiteValue = 255;
let col = 0;
let row = 0;

let img;
function preload() {
  img = loadImage("CODER-1.jpg");
}

// white y
function getFirstNoneWhiteY(x, y) {
  if (y < img.height) {
    while (img.pixels[x + y * img.width] < whiteValue) {
      y++;
      if (y >= img.height) return -1;
    }
  }
  return y;
}

function getNextWhiteY(x, y) {
  y++;
  if (y < img.height) {
    while (img.pixels[x + y * img.width] > whiteValue) {
      y++;
      if (y >= img.height) return img.height - 1;
    }
  }
  return y - 1;
}

function blah() {
  let d = pixelDensity();
  console.log(4 * (windowWidth * d) (windowHeight * d));
  console.log(pixels.length);

}

function sortColumn(pixels) {
  // current column
  let x = col;

  // where to start sorting
  let y = 0;

  // where to stop sorting
  let yEnd = 0;

  while (yEnd < img.height - 1) {
    // console.log(y, yEnd);
    y = getFirstNoneWhiteY(x, y);
    yEnd = getNextWhiteY(x, y);
    if (y < 0) break;

    let sortingLength = yEnd - y;
    console.log("SORTINGLE", sortingLength);

    let unsorted = new Array(sortingLength);
    // let sorted = new Array(sortingLength);

    for (let i = 0; i < sortingLength; i++) {
      unsorted[i] = pixels[x + (y + i) * img.width];
      console.log(unsorted[i]);
    }

    unsorted.sort((a, b) => a - b);

    for (let i = 0; i < sortingLength; i++) {
      pixels[x + (y + i) * img.width] = unsorted[i];
    }

    y = yEnd + 1;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // image(img,0,0);
}

function draw() {
  background(255);

  let d = pixelDensity();

  image(img, 0, 0, windowWidth, windowHeight);
  loadPixels()
  blah();
  // loadPixels();
  // while (col < 2) {
  //   loadPixels();
  //   sortColumn(pixels);
  //   col++;
  //   updatePixels();
  // }

  // loadPixels();
  // console.log(pixels[0]);

  // let halfImage = 4 * (width * d) * (height * d / 2);
  // loadPixels();
  // for (let i = 0; i < halfImage; i++) {
  //   pixels[i + halfImage] = pixels[i];
  // }
  // updatePixels();
  noLoop();
}

