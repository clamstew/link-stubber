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


var consolLogThingAboutLinks, findLinks, makeTargetBlank;

findLinks = function() {
  var outside_links;
  outside_links = $("a.ls-outside-link");
  return outside_links.each(function(i) {
    makeTargetBlank($(this));
    return consolLogThingAboutLinks($(this));
  });
};

makeTargetBlank = function(linkObject) {
  return $(linkObject).attr("target", "_blank");
};

consolLogThingAboutLinks = function(linkObject) {
  var this_link_href;
  console.log($(linkObject).text());
  this_link_href = $(linkObject).attr("href");
  return console.log('the href', this_link_href);
};

$(document).ready(function() {
  return findLinks();
});