function fn(...c) {
    const areAllNumbers = c.every((a) => Number.isNumber(a));
    if (!areAllNumbers) {
      throw new Error("All arguments must be numbers.");
    }
    return c.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.

