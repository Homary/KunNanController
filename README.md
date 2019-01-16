# KunNanController
昆南控制台

#### 运行  

- 开发模式  

启动前端:`8090`端口

```
 cd web  
 npm install  
 npm run dev
```  

启动服务器  

```
 cd server
 npm install 
 npm run server [port]
```

- 生产模式

```
cd web && npm run build
```  
前端文件打包之后会自动复制到`server/www` 

启动服务器  

```
cd server && npm run server [port] 
```

通过服务器访问文件