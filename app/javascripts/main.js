/// <reference path="../../typings/jquery/jquery.d.ts"/>
$( document ).ready(function() {
     
     $("#menu").metisMenu({
     });
     
     $('.infinite-scroll').jscroll({
        loadingHtml: '<img src="../images/loading.gif" alt="Loading" /> Loading...',
        padding: 20,
        nextSelector: 'a.jscroll-next:last'
     });
    
     
     $( ".dispoSearch input" ).keypress(function(event) {
          
          if ( event.which == 13 ) {
               event.preventDefault();
               var searchText = $(".dispoSearch input").val();
               
               $.get( "/disposalRow/"+searchText+"/1", function( data) {
                    $(".teaser-row").empty();
                    $(".teaser-row").html(data);
               });
          }
     });
     
     $( ".dispoSearch button" ).click(function() {
          event.preventDefault();
          var searchText = $(".dispoSearch input").val();
          
          $.get("/disposalRow/"+searchText+"/1", function( data) {
               $(".teaser-row").empty();
               $(".teaser-row").html(data);
          });
     });
     
});