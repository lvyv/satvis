# 战场态势复盘与分析的可视化

本工程用于卫星、战机、导弹等现代战场的轨道绘制和复盘分析，项目用于可视化效果，其功能参考tacview的效果制作，具体包括第飞行器的尾焰、尾迹需要动态变化、电磁场态势、飞行器轨迹墙面等。飞行器点选后弹出属性窗口，并支持第一视角小窗口展示。支持vue的ui界面操作元素。

![Screenshot](https://user-images.githubusercontent.com/1117666/47623704-f0c3e900-db14-11e8-9cf9-7bf13acb267c.png)

## 1.快速开始

### 1.1.配置
初始化子模块（地球离线资产）和依赖包安装。
```
git submodule update --init
npm install
```
### 1.2.运行
```
npm run start 
```
## 2.特点
- 卫星轨道来自TLE格式文件。
- 地面观测站可以在地图上点选。
- 基于地面观测站对过顶卫星预测。
- 过顶通知。
- 支持离线场景的软件架构。

## 3.第三方库
- [CesiumJS](https://cesiumjs.org)
- [Satellite.js](https://github.com/shashwatak/satellite-js)
- [Vue.js](https://vuejs.org)
- [Workbox](https://developers.google.com/web/tools/workbox)

## 版权说明
本项目为MIT许可协议 - 参考 `LICENSE` 文件了解详情。

## 致谢
为了自由，致谢那些默默付出的平凡而伟大的人。
感谢Jonathan, Marco and Flo。
