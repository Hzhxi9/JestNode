### JestNode

前端自动化测试学习笔记

### Link

1. [技术胖-一起学习前端自动化测试](http://www.jspang.com/detailed?id=65)
2. [Jest (一个令人愉快的 JavaScript 测试框架)，目前最流行的前端测试框架，几乎国内所有的大型互联网公司都在使用](https://www.jestjs.cn/)
3. [Mocha (简单, 灵活, 有趣)，它是一个功能丰富的 JavaScript 测试框架，运行在 Node.js 和浏览器中，使异步测试变得简单有趣](https://mochajs.cn/)
4. [Jasmine (BDD-集成测试开发框架) ](https://jasmine.github.io/)
5. [Jest 匹配器](https://jestjs.io/docs/en/expect)

#### 单元测试和集成测试的区别

1. 单元测试：英文是(unit testing) 单,是指对软件中的最小可测试单元进行检查和验证。前端所说的单元测试就是对一个模块进行测试。也就是说前端测试的时候，你测试的东西一定是一个模块。
2. 集成测试：也叫组装测试或者联合测试。在单元测试的基础上，将所有模块按照涉及要求组装成为子系统或系统，进行集成测试。

## Jest

#### 优点

1. 比较新
2. 基础好 (性能好，上手简单，功能多)
3. 速度快 (有单独模块测试，比如说有两个模块 A 和 B，以前都测试过了，这时候你只改动 A 模块，才次测试，模块 B 不会再跑一次，而是直接测试 A 模块。)
4. Api 简单，数量少
5. 隔离性好(测试文件单独隔离，这样就避免不同的测试文件执行的时候互相影响而造成出错。)
6. IDE 整合
7. 多项目运行（并行测试，比如我们写了 Node.js 的后台项目，用 React 写了一个前台项目，Jest 是支持他们并行运行，让我们的效率更加提高了）
8. 覆盖率(一键导出测试覆盖率，对于一个项目的测试都要出覆盖率的，Jest 就可以快速出这样的覆盖率统计结果，非常好用)

#### Jest 环境搭建

1.  `yarn add --dev jest`
2.  `npm install --save-dev jest`

#### Jest 初始化配置

1. 初始化命令 `npx jest --init`
2. 配置选择
   - Choose the test environment that will be used for testing?(代码是运行在 Node 环境还是 Web 环境下？) node / jsdom
   - Do you want Jest to add coverage reports?(是否生成测试覆盖率) yes
   - Automatically clear mock calls and instrances between every test?(是否需要在测试之后清楚模拟调用的一些东西？) yes
   - 在这三个选项选择之后，你会发现你的工程根目录下多了一个`jest.config.js`的文件。打开文件你可以看到里边有很多 Jest 的配置项。
3. coverageDirectory 详解
   - `code coverage` 代码测试覆盖率，就是我们测试代码对功能性代码和业务逻辑代码做了百分多少的测试，这个百分比就是代码测试覆盖率
   - `coverageDirectory : "coverage"` 用来打开代码覆盖率
   - `npx jest --coverage` 命令自动生成代码测试覆盖率的说明
   - 生成的`coverage`文件夹可以打开`coverage-lcov-reporrt/index.html`查看网页形式的测试覆盖率报告

#### Jest 开启自动测试

通过配置`package.json`文件设置， `test: "jest --watchAll"`

#### Jest 中的匹配器

| 匹配器                     | 备注                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `toBe()`                   | 简单理解就是相等，等同于`===`，也就是严格相等                                                                          |
| `toEqual()`                | 内容相等，不严格匹配但要求值相等时使用                                                                                 |
| `toBeNull()`               | 只匹配`null`值，不匹配`undefined`值                                                                                    |
| `toBeUndefined()`          | 只匹配`undefined`值                                                                                                    |
| `toBeDefined()`            | 匹配定义过的值，注意定义一个`null`值也是通过测试的                                                                     |
| `toBeTruthy()`             | 匹配`true`和`false`,相当于判断真假                                                                                     |
| `toBeFalsy()`              | 与`toBeTruthy`相反，返回`false`就可以通过测试                                                                          |
| `toBeGreaterThan()`        | 匹配大于`>`                                                                                                            |
| `toBeLessThan()`           | 匹配小于`<`                                                                                                            |
| `toBeGreaterThanOrEqual()` | 匹配大于等于`>=`                                                                                                       |
| `toBeLessThanOrEqual()`    | 匹配小于等于`<=`                                                                                                       |
| `toBeCloseTo()`            | 自动消除`JavaScript`浮点精度错误                                                                                       |
| `toMatch()`                | 字符串包含匹配器                                                                                                       |
| `toContain()`              | 数组包含匹配器，完美兼容`Set`对象                                                                                      |
| `toThrow()`                | 专门对异常进行处理，可以检测一个方法会不会抛出异常，<br>也可以在匹配器中加一些字符串，表示抛出的异常必须和字符串相对应 |
| `not`                      | 表示相反或者取反                                                                                                       |
