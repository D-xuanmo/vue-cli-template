# vue-cli-3.x 移动端初始模版

* 脚手架采取3.x，项目已配置vue-router + vuex + eslint + axios + sass(scss)

* 项目已经配置px转rem，实际pc写设计稿宽度750px除2即可，具体配置可查看`.postcssrc.js`文件，也可使用scss的`px2px()`方法转换

## 安装项目依赖
```
yarn
```

### 启动项目
```
yarn start
```

### 打包项目
```
yarn build
```

### Lints and fixes files
```
yarn run lint
```

## 目录文件说明
* src：项目源码
   - api：存放所有的请求，按页面编写，入口文件为`index.js`，具体模块在做划分
   - assets：静态文件目录
      1. scss：公用的scss文件，`variables.scss`无需引入，每个页面都可以直接使用里面的变量
      1. images：项目图片资源，每个页面所需图片在此目录建立对应的目录区分
      1. svg-icon: 存放svg图标
   - components：公用组件目录，目录命名为大驼峰
      1. 每个组件建立一个文件夹，文件夹名字采用小驼峰，组件入口为：`index.vue`
      1. svg-icon: svg图标组件，已全局注册，调用方式：`<x-svg-icon iconName="name"></x-svg-icon>`,`iconName`传入`src/assets/svg-icon`目录下的文件名即可调用
      1. Test: 示例组件目录
   - pages：页面目录
      1. test：示例目录
         - main.vue：页面入口
         - \*.router.js：页面路由，router.js不在需要引入，命名为这个格式会被自动注册到路由中
         - children：子页面
         - components：如果本页面有页面级别的公用组件可在本页面目录新建这个目录存放
   - store：vuex目录
   - utils：项目公用js和公用配置
      1. index.js：项目公用js和需要的配置
      1. axios.js：axios的一些基础配置
   - main.js：vue项目入口文件
   - router.js：项目路由js
* .env.development：开发环境变量文件
* .env.production：生产环境变量文件
* vue.config.js：项目配置文件，具体使用说明可查看[https://cli.vuejs.org/zh/config/#vue-config-js](https://cli.vuejs.org/zh/config/#vue-config-js)

## 项目规范
* [vuejs风格指南查看](https://cn.vuejs.org/v2/style-guide/)
* [eslint风格指南](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)
* [css风格指南查看](https://codeguide.bootcss.com/#css)
* 所有的缩进都为2个空格
* 所有文件不能出现中文名
* css部分
  1. css属性后边统一加一个空格，如：`width: 100px;`
  1. scss、css的选择器层级最多不要超过5级，建议最多3级，css的class名字采取`kebab-case`，如：`menu-item`
* js部分
  1. js校验采取eslint
  1. 变量多使用`let`、`const`定义，常量使用大写加下划线，如`BASE_URL`
  1. 变量、函数生命采用小驼峰命名法，如：`getCode`，构造函数采取大驼峰命名法，如：`Person`
  1. 需要用到第三方库的时候使用`import`引入
* js注释采取以下两种形式
     ```js
     // 单行注释

     /**
      * 多行注释
      */

     /**
      * 函数封装的注释说明，这个可在编辑器中安装注释文档插件
      * [fn 中括号里面写封装函数的名称加描述]
      * @param  {[type]}   n [这个函数具体有几个参数，多个参数详细列举类型和说明]
      * @return {Function}   [有return写返回描述，无返回即可不写]
      */
     let fn = n => n + 1
     ```
