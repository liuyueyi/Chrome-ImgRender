# Chrome-ImgRender

chrome插件之网页dom结构渲染

## 功能说明

主要实现将当前网页中的某些dom结构，渲染输出png图片，便于分享

源码：[src/](src/)

## 安装&使用

### 1. 安装过程

1. 下载工程目录下的 [package/Chrome-ImgRender.crx](package/Chrome-ImgRender.crx)

2. chrome浏览器输入 [chrome://extensions/](chrome://extensions/)

3. 将下载的crx包，拖到网页，选择安装


### 2. 使用演示

插件安装完毕之后，打开网页，右下角会多一个按钮，点击之后，显示一个输入框和一个按钮

- 找到需要渲染的dom结构
- 如果dom有唯一的id，则输入框中填： `id:xxx`
- 如果dom上只有class，则输入框中填： `cid:xxx`
- 填写完成之后，回车或者点击右边的渲染按钮
- 会弹出一个网页，显示渲染的图片

**说明**

如果弹窗被浏览器提示拦截，请允许弹窗

**实例演示**

![demo](doc/demo.gif)