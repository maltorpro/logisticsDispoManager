/// <reference path="typings/_custom.d.ts" />
System.config({
    baseURL: '<%= APP_BASE %>',
    paths: { '*': '*.js?v=<%= VERSION %>' }
});
System.import('app')
    .catch(function (e) { return console.error(e, 'Report this error at https://github.com/maltorpro/logisticsDispoManager/issues'); });
