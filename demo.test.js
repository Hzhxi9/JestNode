const { demoFn, testFn } = require("./demo.js");

/**
 * test Jest封装的测试方法，一般填写两个参数，描述和测试方法
 * @param 描述 "测试的方法-传入的值"
 * @param 执行的方法
 *
 *  expect(预期)输入的值  预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么
 *
 *  toBe(期望的结果)
 */
test("demo方法-500", () => {
  expect(demoFn(500)).toBe("hello world");
});

test("test方法-5000", () => {
  expect(testFn(5000)).toBe("single");
});
