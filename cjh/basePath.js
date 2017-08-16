//路径服务
angular.module('$modelName$').provider('basePath', function () {
   var path='/$projectName$/app/';
    this.routerTemplatePath=path+'routerTemplate/';
    this.$get = function () {
        return {
            directiveTemplatePath: path+'directiveTemplate/',
            imgPath: path+'assets/img/',
            path:path,
        };
    };
});
