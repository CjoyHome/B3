/**
 * Created by sks on 2016/9/27.
 */

//使用node创建项目文件夹
//获取参数
var arguments = process.argv.splice(2);
var projectName=arguments[0];
var modelName=arguments[1];



var fs = require('fs');
//创建文件夹




var dirName=[
    // '../public',
    // '../public/assets',
    // '../public/assets/css',
    // '../public/assets/img',
    // '../public/assets/js',
    // '../public/directive',
    // '../public/directiveController',
    // '../public/directiveTemplate',
    // '../public/router',
    // '../public/routerController',
    // '../public/routerTemplate',
    // '../public/controller',
    // '../public/filter',
    // '../public/run',
    // '../public/server',
    //
    // '../background',
    // '../background/assets',
    // '../background/assets/css',
    // '../background/assets/img',
    // '../background/assets/js',
    // '../background/directive',
    // '../background/directiveController',
    // '../background/directiveTemplate',
    // '../background/router',
    // '../background/routerController',
    // '../background/routerTemplate',
    // '../background/controller',
    // '../background/filter',
    // '../background/run',
    // '../background/server',
    // '../backend',
    // '../backend/upload',
    // '../backend/lib',
    // '../public',
    // '../public/lib',
    // '../public/assets',
    // '../public/assets/css',
    // '../public/assets/img',
    // '../public/assets/js',

    '../app',
    '../app/assets',
    '../app/assets/css',
    '../app/assets/img',
    '../app/assets/js',
    '../app/directive',
    '../app/directiveController',
    '../app/directiveTemplate',
    '../app/router',
    '../app/routerController',
    '../app/routerTemplate',
    '../app/controller',
    '../app/filter',
    '../app/run',
    '../app/server',


];
//创建所需文件夹
for(var i=0;i<dirName.length;i++) {

    try{
        fs.mkdirSync(dirName[i]);
        console.log(dirName[i]+'文件夹创建完毕');
    }
    catch (ex){
        console.log('****************'+dirName[i]+'文件夹以及创建****************');
    }

}


//创建css文件
fs.writeFileSync('../app/assets/css/mystyle.css','');
//创建index文件
var data=fs.readFileSync('index.html', 'utf-8');
data=data.replace('$modelName$',modelName);
fs.writeFileSync('../app/index.html',data);
//创建app.js文件
data=fs.readFileSync('app.js', 'utf-8');
data=data.replace('$modelName$',modelName);
fs.writeFileSync('../app/app.js',data);

//创建路径服务basePath.js文件
data=fs.readFileSync('basePath.js', 'utf-8');
data=data.replace('$modelName$',modelName);
data=data.replace('$projectName$',projectName);
fs.writeFileSync('../app/server/basePath.js',data);
//创建run.js文件
data=fs.readFileSync('run.js', 'utf-8');
data=data.replace('$modelName$',modelName);
fs.writeFileSync('../app/run/run.js',data);
//创建uiRouter.js文件
data=fs.readFileSync('uiRouter.js', 'utf-8');
data=data.replace('$modelName$',modelName);
fs.writeFileSync('../app/router/uiRouter.js',data);
//创建indexCtrl
data=fs.readFileSync('indexCtrl.js', 'utf-8');
data=data.replace('$modelName$',modelName);
fs.writeFileSync('../app/controller/indexCtrl.js',data);
