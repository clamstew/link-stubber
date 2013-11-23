var findLinks;

findLinks = function() {
  var outside_links;
  outside_links = $("a.ls-outside-link");
  return outside_links.each(function(i) {
    var this_link_href;
    console.log($(this).text());
    $(this).attr("target", "_blank");
    this_link_href = $(this).attr("href");
    return console.log('the href', this_link_href);
  });
};

$(document).ready(function() {
  return findLinks();
});
