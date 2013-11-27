// var findLinks;

// findLinks = function() {
//   var outside_links;
//   outside_links = $("a.ls-outside-link");
//   return outside_links.each(function(i) {
//     var this_link_href;
//     console.log($(this).text());
//     $(this).attr("target", "_blank");
//     this_link_href = $(this).attr("href");
//     return console.log('the href', this_link_href);
//   });
// };

// $(document).ready(function() {
//   return findLinks();
// });


// var findLinks, makeTargetBlank;

// findLinks = function() {
//   var outside_links;
//   outside_links = $("a.ls-outside-link");
//   return outside_links.each(function(i) {
//     var this_link_href;
//     console.log($(this).text());
//     makeTargetBlank($(this));
//     this_link_href = $(this).attr("href");
//     return console.log('the href', this_link_href);
//   });
// };

// makeTargetBlank = function(linkObject) {
//   return $(linkObject).attr("target", "_blank");
// };

// $(document).ready(function() {
//   return findLinks();
// });


// var consolLogThingAboutLinks, findLinks, makeTargetBlank;

// findLinks = function() {
//   var outside_links;
//   outside_links = $("a.ls-outside-link");
//   return outside_links.each(function(i) {
//     makeTargetBlank($(this));
//     return consolLogThingAboutLinks($(this));
//   });
// };

// makeTargetBlank = function(linkObject) {
//   return $(linkObject).attr("target", "_blank");
// };

// consolLogThingAboutLinks = function(linkObject) {
//   var this_link_href;
//   console.log($(linkObject).text());
//   this_link_href = $(linkObject).attr("href");
//   return console.log('the href', this_link_href);
// };

// $(document).ready(function() {
//   return findLinks();
// });


// var consolLogThingAboutLinks, findLinks, makeTargetBlank, runMethodsOnAllLinks;

// findLinks = function() {
//   var outside_links;
//   outside_links = $("a.ls-outside-link");
//   return runMethodsOnAllLinks(outside_links);
// };

// runMethodsOnAllLinks = function(outside_links) {
//   return outside_links.each(function(i) {
//     makeTargetBlank($(this));
//     return consolLogThingAboutLinks($(this));
//   });
// };

// makeTargetBlank = function(linkObject) {
//   return $(linkObject).attr("target", "_blank");
// };

// consolLogThingAboutLinks = function(linkObject) {
//   var this_link_href;
//   console.log($(linkObject).text());
//   this_link_href = $(linkObject).attr("href");
//   return console.log('the href', this_link_href);
// };

// $(document).ready(function() {
//   return findLinks();
// });


// var consolLogThingAboutLinks, findLinks, makeTargetBlank, runMethodsOnAllLinks;

// findLinks = function() {
//   var outside_links;
//   outside_links = $("a.ls-outside-link");
//   return runMethodsOnAllLinks(outside_links);
// };

// makeTargetBlank = function(linkObject) {
//   return $(linkObject).attr("target", "_blank");
// };

// consolLogThingAboutLinks = function(linkObject) {
//   var this_link_href;
//   console.log($(linkObject).text());
//   this_link_href = $(linkObject).attr("href");
//   return console.log('the href', this_link_href);
// };

// runMethodsOnAllLinks = function(outside_links) {
//   return outside_links.each(function(i) {
//     makeTargetBlank($(this));
//     return consolLogThingAboutLinks($(this));
//   });
// };

// findLinks();
// var formData;
// var makeAjaxCallOnLinkURL = function (urltoget) {
//   $.ajax({
//     type: 'GET',
//     url: urltoget,
//     // data: formData,
//     dataType: 'text',
//     cache: false,
//     timeout: 7000, // seven seconds
//     success: function(data)  {
//       console.log(data);
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


// $.ajax({
//     type : "GET",
//     url : "http://otherdomain.com/somePage.html",
//     // url : "http://www.google.com",
//     // data : params,
//     timeout:3000,
//     dataType : "jsonp",
//     jsonp : "jsonp",

//     success : function (response, textS, xhr) {
//         alert("ok");
//     },
//     error : function (xmlHttpRequest, textStatus, errorThrown) {
//         alert("not ok " + errorThrown);
//         if(textStatus === 'timeout') {
//           alert("request timed out");
//         }
//     }
// });
//======================================

// var urlExists = function(url, callback) {
//   $.ajax({
//     type: 'HEAD',
//     dataType: 'jsonp',
//     url: url,
//     success: function(){
//       callback(true);
//     },
//     error: function() {
//       callback(false);
//     }
//   });
// };

// var url = 'http://www.google.com';
// //do stuff
// urlExists(url, function(exists){
//   //do more stuff based on the boolean value of exists
//   if (exists === true){
//     alert('awesome');
//   } else {
//     alert('this blows');
//   }
// });
//========================================================

// var xhr = new easyXDM.Rpc({
//     remote: "http://other.domain/cors/"
// }, {
//     remote: {
//         request: {} // request is exposed by /cors/
//     }
// });
// // With this up and running you can use
// xhr.request({
//     url: "pathRelativeToRemote/getrest/",
//     method: "POST",
//     data: {foo:"bar"}
// }, function(response) {
//     alert(response.status);
//     alert(response.data);
// });

// jQuery.ajax = (function(_ajax){

//     var protocol = location.protocol,
//         hostname = location.hostname,
//         exRegex = RegExp(protocol + '//' + hostname),
//         YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
//         query = 'select * from html where url="{URL}" and xpath="*"';

//     function isExternal(url) {
//         return !exRegex.test(url) && /:\/\//.test(url);
//     }

//     return function(o) {

//         var url = o.url;

//         if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {

//             // Manipulate options so that JSONP-x request is made to YQL

//             o.url = YQL;
//             o.dataType = 'json';

//             o.data = {
//                 q: query.replace(
//                     '{URL}',
//                     url + (o.data ?
//                         (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
//                     : '')
//                 ),
//                 format: 'xml'
//             };

//             // Since it's a JSONP request
//             // complete === success
//             if (!o.success && o.complete) {
//                 o.success = o.complete;
//                 delete o.complete;
//             }

//             o.success = (function(_success){
//                 return function(data) {

//                     if (_success) {
//                         // Fake XHR callback.
//                         _success.call(this, {
//                             responseText: (data.results[0] || '')
//                                 // YQL screws with <script>s
//                                 // Get rid of them
//                                 .replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
//                         }, 'success');
//                     }

//                 };
//             })(o.success);

//         }

//         return _ajax.apply(this, arguments);

//     };

// })(jQuery.ajax);

//========================================================

// jQuery('#container').load('http://google.com'); // SERIOUSLY!

// jQuery.ajax({
//     url: 'http://asdfasafsafdasdfasdfasfasfasdfasfdaf.com',
//     type: 'GET',
//     success: function(data, statusText) {
//         // var headline = $(data.responseText).find('a.top-story-header').text();
//         // console.log(headline);
//         console.log(statusText);
//     }
// });

// var site = true;
// $.ajax({
//      url:"http://www.applasdfasfdasdfasdfasde.com",
//      dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
//      success:function(json){
//          // do stuff with json (in this case an array)
//          alert("Success");
//      },
//      error:function(){
//          console.log("Your site definitely exist!");
//          site = false;
//      },
//      complete: function() {
//         if( site === true ) {
//           console.log("Your site doesn't exist");
//         }
//      }
// });

var img = new Image();
img.src = 'http://service.somedomainidontcontrol.com';


// Works with $.get too!
//========================================================

// var consolLogThingAboutLinks, findLinks, makeTargetBlank, runMethodsOnAllLinks;

// findLinks = function() {
//   var outside_links;
//   outside_links = $("a.ls-outside-link");
//   return runMethodsOnAllLinks(outside_links);
// };

// makeTargetBlank = function(linkObject) {
//   return $(linkObject).attr("target", "_blank");
// };

// consolLogThingAboutLinks = function(linkObject) {
//   var this_link_classes, this_link_href;
//   console.log($(linkObject).text());
//   this_link_href = $(linkObject).attr("href");
//   console.log("the href", this_link_href);
//   this_link_classes = $(linkObject).attr("class");
//   return console.log("the classes", this_link_classes);
// };

// runMethodsOnAllLinks = function(outside_links) {
//   return outside_links.each(function(i) {
//     makeTargetBlank($(this));
//     return consolLogThingAboutLinks($(this));
//   });
// };

// findLinks();




