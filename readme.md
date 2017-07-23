博客[地址](https://leslie-fang.github.io/2017/07/23/%E5%9F%BA%E4%BA%8Eexpress%E5%92%8Creactjs%E5%BC%80%E5%8F%91%E7%9A%84web%E6%A1%86%E6%9E%B6/)
## 使用到的主要工具介绍
* Express：基于nodejs的后端框架
* Reactjs+Redux：前端框架，React更多的是扮演着MVC中的view的角色，Model以及Control类似的功能可以用flux或者更进一步用Redux来实现，[链接](https://github.com/buckyroberts/React-Redux-Boilerplate) 里面的图片将redux和reactjs之间的关系描述的很清楚
* Babel：转换ES6以及JSX的语法到ES5，commonJS
* Webpack: 浏览器不支持commonJS，因此需要通过webpack打包之后，才可以将js嵌入到html当中，当然经过webpack之后在生产环境中最好再用gulp经过一次uglify，可以减小js文件的大小
* Gulp：前端开发自动化的利器，在开发过程中可以监听文件的变化重启服务器
* 数据库：目前使用MySQL存储用户信息，使用Redis存储session的hotdata。下一步可以把mongodb的接口移植过来。

## 框架实现的基础功能
这是个基础框架，不涉及任何的业务逻辑。在这个框架的基础上可以根据实际需求，开发主页面和相关的业务逻辑。
* 注册和登入功能：使用bcrypt模块对密码进行加密，用户名和密码存储在MySQL里面进行用户信息的验证。验证通过、用户登入之后在cookie中设置session id对应的session数据，并将session的用户热点数据储存在Redis里面。
* 登出功能：通过销毁和重新建立session，来实现用户的登出功能。redis的session数据可以再redis里面设置数据自动销毁的超时时间。当然cookie中的session id也可以通过设置cookie的超时销毁时间来实现。
* 用户登入状态控制：用户的每一次访问根据cookie中的session id进行用户登录状态的控制，未登录用户无法看到定制的信息。
<!--more-->
* 业务逻辑：根据业务需求在main页面中进行业务逻辑的开发

## Reactjs + Redux的前端框架介绍
框架的[介绍](https://github.com/buckyroberts/React-Redux-Boilerplate)
这里介绍一下我在写这个框架的时候的一些BKM：
一般在javascript目录下面建立三个目录：一个react目录，是开发的前端代码；一个babel目录：是将react目录下代码经过babel转译之后得到的代码;一个webpack目录：是将babel目录下需要嵌入在html中的代码打包之后的代码。
其中只在react目录下开发我们的代码：
react的根目录下面：有一个store.js文件，这个是在redux中存储应用状态和数据的。除了store.js之外的文件都是component文件，就是html页面的显示元件，component文件可以通过container目录下面的各个container文件包含的模块化的组件拼凑出来，因此我们说reactjs很好的做到了前端组件的模块化和复用。
react目录下面的container目录包含了就是前端模块化的组件。
react目录下面的action目录下的代码功能类似于MVC模型中的control，就是一些前端的触发函数，在这些函数被执行之后可以dispatch一些action，reducer就在监听这些action，并获得action的返回数据
react目录下面的reducer目录下的代码，就在监听action目录下代码派发的action，一旦监听到对应的代码，就可以触发页面跳转或者返回状态数据到store当中，这些数据通过store和container绑定的，就会触发container中对应的数据的更新。

#### 一些常见的问题
react：component的名字要大写开头
redux： reducer下面每个case里面返回的对象每一次都需要新建，可以用object.assign(用在单个对象添加属性可以返回新的对象)，用filter也会新建对象(可以用在数组上面)，
redux如何获取服务器端数据库的数据，在action里面写restful的请求给服务器端，需要配置多个action，一个action1发送请求，在action1获得请求的数据处理中dispatch一个数据完成的action

## 代码的链接
github托管的代码的链接[地址](https://github.com/Leslie-Fang/express_reactjs)
其中相对于master分支，develop分支实现了用户数据在session中的储存，用户的登出功能。
## 下一步开发计划
* 用户登入部分改成https的请求
