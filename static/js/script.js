var writeEmail = function(){
    var username = "thierry.sans";
    var hostname = "utoronto.ca";
    var linktext = username + "@" + hostname ;
    $(".contact>.email").html("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
};

$(document).ready(function(){
   $('body').scrollspy({ target: '#menu' });
   $("#menu a").smoothScroll();
   writeEmail();
});