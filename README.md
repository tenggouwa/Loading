# loading

> loading效果小全

## 效果

![avatar](https://github.com/tenggouwa/ImgWork/blob/master/loading/loadingGif.gif)

## 项目结构 ##

```
.
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── index.html  ----------------------- 入口页面
└── src  ------------------------------ 源码目录
    ├── assets  ----------------------- 项目资源文件目录（图片、字体等）
    ├── components  ------------------- 业务模块集合目录（组件）
    ├── fetch  ------------------------ ajax请求管理文件
    ├──   └── api  -------------------- 请求配置 (axios ajax配置管理文件)
    ├── pages  ------------------------ 页面集合目录
    ├── reducers  --------------------- redux文件目录
    ├── App.js  ----------------------- react公共配置文件
    └── main.js  ---------------------- 项目级入口配置文件
```

## 环境准备

``` bash
# 安装依赖
npm install || yarn install

# 启动本地调试 localhost:8080
npm run dev || yarn dev

# 本地打包压缩
npm run build || yarn build

# 生成page文件
npm run init page `name` # 配置发生改变暂不可用

# 生成component文件
npm run init component `name` # 配置发生改变暂不可用
```