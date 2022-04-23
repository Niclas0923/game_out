// 导入express模块
const express = require('express')

// 创建express对象
const app = express()

/*
    托管静态资源
        express.static()
        可以静态开放public目录下的图片，css文件，js文件

        目录名不会出现在静态地址中
* */
app.use(express.static('../js_game'))


// 开启监听
app.listen(18080,function () {
    console.log('18080端口监听中')
})

// nodemon
// (node ./main.js &)