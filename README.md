```
# 目录结构说明
├── api                        # 接口相关
├── components                 # 组件相关
├── helper                     # 封装的公共方法（这里主要是处理一些常用的数据、消息提示的方法）
│   │── helper.js              # 封装了提示弹窗，全局引入（使用：this.$helper.toast(Object)）
├── pages                      # 页面目录
├── static                     # 静态资源
├── styles                     # 公共样式文件
│   │── _common.scss           # 公共样式
│   │── _flex.scss             # flex 布局类
├── utils                      # 封装的公共方法
│   │── const.js               # 定义的一些常量
│   │── request.js             # 接口请求
│   │── storage.js             # storage 的存储、获取、删除
├── uni.scss                   # uni-app内置的常用样式变量
```
