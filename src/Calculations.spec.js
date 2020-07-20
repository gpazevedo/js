const { factorial } = require("./Calculations");

describe("Calculations", () => {
  it("calculates the factorial of 4", () => {
    const n = 4;

    expect(factorial(n)).toEqual(24);
  });
});

describe("ECMA2016 compatibility", () => {
  it("Array.prototype.includes()", () => {
    const numbers = [1, 2, 3, 4];

    expect(numbers.includes(2)).toEqual(true);
  });

  it("Exponentiation operator", () => {
    expect(2 ** 3).toEqual(8);
  });
});

describe("ECMA2017 compatibility", () => {
  const countries = {
    BR: "Brazil",
    DE: "Germany",
    US: "United States of America",
  };

  it("Object.values()", () => {
    expect(Object.values(countries)).toEqual([
      "Brazil",
      "Germany",
      "United States of America",
    ]);
  });

  it("Object.entries", () => {
    expect(Object.entries(countries)).toEqual([
      ["BR", "Brazil"],
      ["DE", "Germany"],
      ["US", "United States of America"],
    ]);
  });
});

describe("ECMA2018 compatibility", () => {
  it("Rest/Spread Properties", () => {
    const values = { a: 1, b: 2, c: 3, d: 4 };
    const { a, ...n } = values;
    expect(n).toEqual({ b: 2, c: 3, d: 4 });
  });
});

describe("ECMA2019 compatibility", () => {
  it("Object.fromEntries", () => {
    const obj = { color: "yellow", size: 20 };
    expect(Object.fromEntries(Object.entries(obj))).toEqual(obj);
  });

  it("Array.prototype.{flat}", () => {
    const array = ["🍇", ["🍉", ["🍌", ["🍒"]]]];

    expect(array.flat()).toEqual(["🍇", "🍉", ["🍌", ["🍒"]]]);
    expect(array.flat(2)).toEqual(["🍇", "🍉", "🍌", ["🍒"]]);
    expect(array.flat(Infinity)).toEqual(["🍇", "🍉", "🍌", "🍒"]);
  });
});
