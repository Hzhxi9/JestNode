### JestNode

前端自动化测试学习笔记

### Link

1. [技术胖-一起学习前端自动化测试](http://www.jspang.com/detailed?id=65)
2. [Jest (一个令人愉快的 JavaScript 测试框架)，目前最流行的前端测试框架，几乎国内所有的大型互联网公司都在使用](https://www.jestjs.cn/)
3. [Mocha (简单, 灵活, 有趣)，它是一个功能丰富的 JavaScript 测试框架，运行在 Node.js 和浏览器中，使异步测试变得简单有趣](https://mochajs.cn/)
4. [Jasmine (BDD-集成测试开发框架) ](https://jasmine.github.io/)

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
   - 在这三个选项选择之后，你会发现你的工程根目录下多了一个 jest.config.js 的文件。打开文件你可以看到里边有很多 Jest 的配置项。
3. coverageDirectory 详解
