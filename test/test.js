//创建模块的三要素

//引入内置核心模块
const fs = require('fs');//获取文件的核心模块
const http = require('http');//获取http核心模块
const moment = require('moment');
const path = require('path');//获取路径的核心模块
const mime = require('mime');
//创建当地服务器
const server = http.createServer();
//设置端口号并监听服务器
server.listen(3500, () => {
    console.log('这里是 127.0.0.1:3500');
})
server.on('request', (req, res) => {
    // 获取url
    let url = req.url;
    // 获取请求方式
    let method = req.method;
        // fs.readFile(__dirname + '/file/index.html', 'utf-8', (err, data) => {
        //     if (err) return console.log(err);
        //     // console.log(data);
        //     console.log('1');
        //     res.end(data);
        // })
        if ( method =='GET'&& url == '/') {
            fs.readFile(path.join(__dirname,'./file/index.html'), 'utf-8', (err, data) => {
                if (err) return console.log(err);
                res.end(data);
            })
        } else if(method =='GET' && url.endsWith('.html')){
            fs.readFile(path.join(__dirname,url), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end("404,not find the file ?");
                } 
                // console.log(data);
                console.log(moment().format("YYYY年-MM月-DD日 HH时-mm分-ss秒"));  
                res.end(data);
            })
        }else if(method =='GET' && url.endsWith('.css')){
            console.log(url);
            fs.readFile(path.join(__dirname,url), 'utf-8', (err, data) => {
                if (err) return console.log(err);
                // console.log(data); 
                res.end(data);
            })
        }else if(method =='GET' && url.endsWith('.jpg')){
            fs.readFile(path.join(__dirname,url), (err, data) => {
                if (err) return console.log(err);
                console.log(url); 
                res.end(data);
            })
        }else if(method =='GET' && url.endsWith('.js')){
            fs.readFile(path.join(__dirname,url),'utf-8', (err, data) => {
                if (err) return console.log(err);
                // console.log(data); 
                res.end(data);
            })
        }else{
            res.statusCode = 404;
            res.end("404,not find the file ?");
        }
    })


