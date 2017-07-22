基于express和reactjs搭建的一个最小功能系统

可以在这个的基础上进行业务需求的开发

目前已经包含的模块：
1.后端：express
2.数据库：mysql，以后进一步添加mongodb和redis的接口
3.前端：reatjs+redux
5.redux中的action部分
6.UI组件使用bootstrap
7.数据库接口
8.注册页面
9.添加用户密码使用bcrypt模块加密

还来不及开发的部分
1.无认证无法访问主页面,目前使用的是cookie，下一步使用session，cookie里面只存一个sid(session id),凭借session id到redis里面取获得储存的数据
2.添加的logout的功能，单独做成一个模块的按钮放在界面的右上角
以上两点可以通过开发一个用户登入界面来实现

session控制登入状态的思路:1.cookie里面存sessionid（sid）,session 数据可以存在服务器端的内存中，redis里面，或者mysql这类数据库里面，推荐使用redis，每次访问用sid作为key值在redis里面获取登录状态的数据
2.同时session支持用户在一定时间不访问将session回收。借用Redis中Keys支持过期时间的特性支持这个功能
[参考](http://wiki.jikexueyuan.com/project/node-lessons/cookie-session.html)
[参考2](http://www.jianshu.com/p/5a0ccd1ee27e)
[session api](https://github.com/expressjs/session)

redis:
1.apt-get install redis-serve 首先安装
2.redis-server 启动服务器 redis-server & 启动在后台
3.redis-cli 启动本地服务客户端
4.redis的配置文件在安装目录的redis.conf文件



usage:

For production
1. git clone
2. npm install --production

For developer
1. git clone
2. npm install


会写一篇博客关于reactjs的详细使用和开发