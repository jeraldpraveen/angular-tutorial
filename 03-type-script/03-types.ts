function test() {
  let a;
  a = 1;
  a = "a";
  a = true;

  console.log(a);

  let test: number;
  test = 1;
  test = "a";
  test = true;

  console.log(test);
}

function test1() {
  let a: number = 1000;
  let b: boolean = true;
  let c: string = "test12345";
  let d: any = 585852;
  let e: number[] = [1, 2, 3];
  let f: any[] = [1, true, "a"];
  console.log(a, b, c, d, e, f);

  // Case To Use ENUM
  const ColorRed = 0;
  const ColorGreen = 1;
  const ColorYellow = 2;
  console.log(ColorGreen);
  // ENUM
  enum Color {
    Red, // Default First 0
    Green, // Next 1
    Yellow = 4, // We can also assign custom values
  }

  console.log(Color.Red);
  console.log(Color.Yellow);
}

test();
test1();
