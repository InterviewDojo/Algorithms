module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
    },
    testRegex: "(/__tests__/.*(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: "coverage",
  };