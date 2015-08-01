/// <reference path="../../typings/jquery/jquery.d.ts"/>
$( document ).ready(function() {
        $("#menu").metisMenu({
        });
        
        $('.infinite-scroll').jscroll({
             loadingHtml: '<img src="../images/loading.gif" alt="Loading" /> Loading...',
             padding: 20,
             nextSelector: 'a.jscroll-next:last'
        });
});