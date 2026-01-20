# Cloud HIS Web Application

这是一个基于Vue.js和SQLite的医疗信息系统前端网站项目。

## 项目概述

该项目旨在创建一个现代化的医疗信息系统前端网站，具有以下特点：
- 使用Vue.js 3.x作为前端框架
- 使用Node.js和Express作为后端API层
- 使用SQLite作为本地数据库
- 使用Vite作为构建工具
- 实现了响应式设计，支持桌面和移动设备

## 功能特性

- 首页展示（包含轮播图、产品介绍、解决方案、客户案例）
- 产品介绍页面
- 解决方案页面
- 客户案例页面
- 关于我们页面
- 版本套餐页面（包含套餐选择和对比表格）
- 免费试用页面（包含申请表单）
- 内容管理系统
- 元面元数据管理
- 图片库管理

## 技术栈

- **前端**: Vue.js 3.x, Vue Router, Pinia, Vite
- **后端**: Node.js, Express
- **数据库**: SQLite
- **构建工具**: Vite
- **样式**: CSS

## 项目结构

```
backend/
├── src/
│   ├── models/
│   │   ├── content.model.js
│   │   └── page-metadata.model.js
│   ├── services/
│   │   ├── database.service.js
│   │   ├── content.service.js
│   │   └── sqlite-initializer.service.js
│   ├── routes/
│   │   ├── content.route.js
│   │   └── metadata.route.js
│   ├── config/
│   │   └── database.config.js
│   └── app.js
├── tests/
│   ├── unit/
│   ├── integration/
│   └── contract/
└── package.json

frontend/
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── ContentDisplay.vue
│   │   └── ImageGallery.vue
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── services/
│   │   ├── api.service.js
│   │   └── content-fetcher.service.js
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   └── App.vue
├── public/
├── tests/
├── package.json
└── vite.config.js
```

## 安装和运行

### 后端设置

1. 进入后端目录:
````
cd backend
````

2. 安装依赖:
````
npm install
````

3. 初始化数据库:
````
npm run init-db
````

4. 启动服务器:
````
npm run dev
````

### 前端设置

1. 进入前端目录:
````
cd frontend
````

2. 安装依赖:
````
npm install
````

3. 启动开发服务器:
````
npm run dev
````

## API 端点

- `GET /api/v1/content` - 获取内容列表
- `GET /api/v1/content/:slug` - 根据slug获取特定内容
- `GET /api/v1/metadata` - 获取元数据列表
- `GET /api/v1/metadata/:page_slug` - 根据页面slug获取特定元数据
- `GET /api/v1/images` - 获取图片资源列表

## 许可证

MIT