# ts_study
typescript study

#### Babel + TypeScript + Jest
> babel 只做转换，ts 只做类型检查 

```
"type-check": "tsc --watch",
 "noEmit": true,                        /* Do not emit outputs. only type checking */
```

### 注意事项
- 四种语法 `babel` 是无法编译的，详见 `index.tsx`

### 编译工具
- 没使用过 `babel` ，全新工程，首选 `ts` 自身编译器，`ts-loader`
- 项目中已有 `babel` ， 安装 `@babel/preset-typescript` 做语言转换(并可配合 `tsc` 做类型检查)
- 两种工具不要混用，只会增加工程复杂度 

### 作业？ 使用 `webpack` 起一个开发环境？ 起一个 `server`

### eslint 依赖
> package.json

```json
{
"devDependencies": {
    "@typescript-eslint/eslint-plugin": "^1.10.2",
    "@typescript-eslint/parser": "^1.10.2",
    "eslint": "^5.16.0"
  }
}
```
> eslintrc.json

```js
module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "project": "./tsconfig.json" // 利用类型信息
    },
    "extends": [
        "plugin:@typescript-eslint/recommended", // 官方推荐规则
    ],
    "rules": {
        "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
    }
}
```

### jest
> facebook 推出的单元测试工具

> package.json

```json
{
"devDependencies": {
    "jest": "^24.8.0",
    "ts-jest": "^24.0.2"
  }
}
```
