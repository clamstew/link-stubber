var findLinks = function() {
    var outside_links = $("a.ls-outside-link");
    outside_links.each(function(i) {
        console.log($(this).text());
        $(this).attr('target', "_blank");
    });
};


$(document).ready(function() {
	findLinks();
});

