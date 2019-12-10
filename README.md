# ts_study
### 工程引用学习 `ts3.0` 新特性

> 背景：代码仓库存在多个需要单独构建的工程，比如本仓库是全栈工程，`client` `server`均需单独构建，此外还有公共部分 `common` 和测试用例 `test`


### `old` 未单独构建工程
> 整个工程通过 `tsconfig` 配置
 
 - `outDir` 指定输出文件，会按层级输出
 - `include` 去掉了 `src` 目录，但是 `test`就遗忘了，还有不方便的地方就是，不能单独构建 `client` `server` 或者不希望 `test`被构建到dist，这些都是单个配置望见不能解决的，工程引用由此引出。 关键词 `composite` `declaration` `compilerOptions` `references` 
 
### `new` 针对以上困扰的解决问题
- 总目录 `tsconfig`放置通用配置，亦为基本配置，被子 `config`所继承
- `references` 指定依赖目录

### 执行
```
cd new/
// verbose 打印构建信息
tsc -b src/server/ --verbose
tsc -b src/client/ --verbose
tsc -b test --verbose
// clean 清空构建文件 直接全没了？what？！
tsc -b test --clean
```

### 参照
> `ts` 官方就是一个很好的参照，有时间可以看看
