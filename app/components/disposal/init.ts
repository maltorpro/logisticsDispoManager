/// <reference path="../../typings/_custom.d.ts" />
System.config({
  baseURL: '<%= APP_BASE %>components/disposal/',
  paths: {'*': '*.js?v=<%= VERSION %>'}
});

System.import('app')
  .catch(e => console.error(e,
    'Report this error at https://github.com/maltorpro/logisticsDispoManager/'));