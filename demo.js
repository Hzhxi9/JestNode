const demoFn = money => (money >= 200 ? "hello world" : "hi");

const testFn = money => (money >= 2000 ? "single" : "double");

module.exports = {
  demoFn,
  testFn,
};
