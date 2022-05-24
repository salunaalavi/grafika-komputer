let checkX = "false";
let checkY = "false";

function flipHorizontal() {
  console.log(recentShape);
  console.log(recentSize);
  if (recentShape === "segitiga") {
    checkY = "false";

    if (checkX == "false") {
      checkX = "true";
    } else {
      checkX = "false";
    }

    segitiga(recentSize[0], recentSize[1], 0, checkX, checkY);
  }
}

function flipVertical() {
  if (recentShape === "segitiga") {
    checkX = "false";

    if (checkY == "false") {
      checkY = "true";
    } else {
      checkY = "false";
    }
    segitiga(recentSize[0], recentSize[1], 0, checkX, checkY);
  }
  return 0;
}
