## 说明文档

### 目录结构

```js
assets App层面公用的资源
build 构建脚本及相关配置
components App组件，不允许直接与Redux交互
configs 环境相关配置文件
constans 业务常量
controllers
entry 入口
flow
logs 日志
node_modules 包目录
output 产出代码目录（scmpf构建用）
reducers Redux相关内容
routers 路由
services
static 开发过程中webpack产出的前端资源目录，不会被提交到git
views 单个路由对应的页面，同Redux连接，并提供数据给components
```