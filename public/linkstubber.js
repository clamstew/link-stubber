
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




