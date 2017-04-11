1. 本文件无需部署

2. 先安装 package.json 中的node模块

可能需要全局安装 gulp，即 

npm i -g gulp

3. 然后安装 bower.json 中的模块

bower install 

需要全局安装bower

npm i -g bower 


4. 开发时需要启动 gulp 任务

监听代码并事实行编译

gulp

5. src目录中的 data 文件夹为假数据，直接放置到项目的 src 目录即可。

6. 浏览器输入http://localhost:1234/