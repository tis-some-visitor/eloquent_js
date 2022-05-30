let x = 0, y = 0, size = 8, z = true;
let u = "";

while (x < size) {
  while (y < size) {
    if (z == true) {
      u += "#";
      z = !z;
    } else {
      u += " ";
      z = !z;
    }
    y++;
  }
  y = 0;
  z = !z;
  console.log(u);
  u = "";
  x++; 
}

