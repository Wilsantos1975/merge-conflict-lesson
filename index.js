const c = {
  favoriteNumbers: [7, 12]
};

function theFunction(...c) {

  if (!c.favoriteNumbers.every((a) => Number.isNumber(a))) 
    throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.