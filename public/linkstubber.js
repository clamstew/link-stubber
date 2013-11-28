// var makeAjaxCallOnLinkURL = function (urltoget) {
// $.ajax({
//     type: 'GET',
//     url: "http://www.ajax-cross-domain.com/cgi-bin/ACD/ACD.js?uri=("+urltoget+")",
//     // data: formData,
//     crossDomain: true,
//     dataType: 'script',
//     cache: false,
//     timeout: 7000, // seven seconds
//     success: function(data){
//       console.log(this.url);
//       console.log(ACD.status);
//     },
//     error: function(XMLHttpRequest, textStatus, errorThrown)  {
//       console.log('There was an ' + errorThrown + ' error due to a ' + textStatus + ' condition.');
//       console.log(XMLHttpRequest);
//     },
//     complete: function(XMLHttpRequest, status)  {
//       // nothing
//       console.log('call completed');
//     }
//   });
// };
// makeAjaxCallOnLinkURL('http://www.claystewart.me');
// makeAjaxCallOnLinkURL('http://asdfasafsafdasdfasdfasfasfasdfasfdaf.com');


var makeAjaxCallOnLinkURL = function (urltoget) {
	$('body').append('<script type="text/javascript" src="http://www.ajax-cross-domain.com/cgi-bin/ACD/ACD.js?uri=('+urltoget+')"></script>');
	$('body').append('<script type="text/javascript"> var ACD;console.log(ACD);setTimeout(function(){var siteStatus = ACD.status;if(siteStatus === "200 OK") {console.log("This site exists");} else {console.log("This thing AINT here!");};console.log(ACD);},5000);</script>');
};

makeAjaxCallOnLinkURL('http://www.google.com/');
//========================================================

var consolLogThingAboutLinks, findLinks, makeTargetBlank, runMethodsOnAllLinks;

findLinks = function() {
  var outside_links;
  outside_links = $("a.ls-outside-link");
  return runMethodsOnAllLinks(outside_links);
};

makeTargetBlank = function(linkObject) {
  return $(linkObject).attr("target", "_blank");
};

consolLogThingAboutLinks = function(linkObject) {
  var this_link_classes, this_link_href;
  console.log($(linkObject).text());
  this_link_href = $(linkObject).attr("href");
  console.log("the href", this_link_href);
  this_link_classes = $(linkObject).attr("class");
  return console.log("the classes", this_link_classes);
};

runMethodsOnAllLinks = function(outside_links) {
  return outside_links.each(function(i) {
    makeTargetBlank($(this));
    return consolLogThingAboutLinks($(this));
  });
};

findLinks();




