/// <reference path="../../typings/jquery/jquery.d.ts"/>
$( document ).ready(function() {
     
     $("#menu").metisMenu({
     });
     
     $('.infinite-scroll').jscroll({
        loadingHtml: '<img src="../images/loading.gif" alt="Loading" /> Loading...',
        padding: 20,
        nextSelector: 'a.jscroll-next:last'
     });
     
     var searchDispo = function() {
          
          var searchText = $(".dispoSearch input").val();
          
          var requestUrl = "/disposalRow";
          if(searchText.length > 0) {
               requestUrl += "/"+searchText;
          }
          
          requestUrl += "/1";
          
          $.get(requestUrl, function( data) {
               $(".teaser-row").empty();
               $(".teaser-row").html(data);
          });
     }
     
     $( ".dispoSearch input" ).keypress(function(event) {
          
          if ( event.which == 13 ) {
               event.preventDefault();
               searchDispo();
          }
     });
     
     $( ".dispoSearch button" ).click(function() {
          event.preventDefault();
          searchDispo()
     });
     
});