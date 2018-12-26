# KunNanController
昆南控制台

#### 运行  
```
// 开发模式
npm install
npm run dev
```  
```
// 生产模式  
npm run build
```

#### 2018-12-24  
- 脚本初始化  
- 基础架构  

#### 2018-12-25
- `index.html`直接引入`server.config.js`配置文件,`copy-webpack-plugin`进行文件复制  

#### 2018-12-26
- `components`目录改名为`views`  
- 组件结构改变,`vue`单文件拆分为`.vue`,`.ts`,`.less`  
```
├── img/
├── *.less
├── *.ts
└── *.vue
```
- 移除`api`文件夹,负责`http`请求的函数统一封装到`static/js`下的`http.ts`里  