
let a = "red";
let b = 0;

function x() {
  if (a == "red") {
    console.log("STOP");
    b = b + 1;

    if (b > 2) {
      a = "green";
      b = 0;
    }
  } else {
    if (a == "green") {
      console.log("GO");
      b = b + 1;

      if (b > 3) {
        a = "yellow";
        b = 0;
      }
    } else {
      if (a == "yellow") {
        console.log("SLOW");
        b = b + 1;

        if (b > 0) {
          a = "red";
          b = 0;
        }
      } else {
        console.log("BROKEN");
        a = "red";
        b = 0;
      }
    }
  }
}

x();
x();
x();
x();
x();
x();
x();
x();