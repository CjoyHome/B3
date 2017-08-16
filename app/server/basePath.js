//路径服务
angular.module('myapp').provider('basePath', function () {
   var path='/Bootstrap3/app/';
    this.routerTemplatePath=path+'routerTemplate/';
    this.$get = function () {
        return {
            directiveTemplatePath: path+'directiveTemplate/',
            imgPath: path+'assets/img/',
            path:path,
        };
    };
});
