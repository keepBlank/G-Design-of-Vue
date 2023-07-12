<p align="center">
  <a href="https://ant.design">
    <img src="https://s2.loli.net/2023/07/12/jWHvIoZKeQRlVyC.png" width="80px">
  </a>
</p>

<h1 align="center">G-Design-of-Vue</h1>

<div align="center">

![](https://img.shields.io/badge/npm-v8.15.0-blue) ![](https://img.shields.io/badge/licence-MIT-greenyellow) ![](https://img.shields.io/badge/build-passing-rgb(#42b21c))

</div>

## 介绍

学习vue过程中使用vue实现的UI组件库

## 开始使用

1. 添加 css 样式

    i.使用本组件库中，请在css中开启 `border-box`
    
    ```css
     *,::before,::after{margin: 0;padding: 0;box-sizing: border-box;}
    ```
    
    *(IE 8 及以上浏览器都支持此样式)*
    
    ii. 设置默认颜色变量(后续会改为scss变量)
    
    ```css
    html{
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    --border-active-bg: #d3d2d2;
    }
    ```
    *(IE 15 及以上浏览器都支持此样式)*

2. 安装 g-design-of-vue

    ```css
    npm i g-design-of-vue --save
    ```

3. 引入 g-design-of-vue

```js
import { GButton,GButtonGroup,GIcon } from 'g-design-of-vue';
import '../node_modules/g-design-of-vue/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button': GButton, 
    'g-icon': GIcon,
    'g-button-group': GButtonGroup
  }
}
```



## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

