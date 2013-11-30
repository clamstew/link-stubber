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


// var makeAjaxCallOnLinkURL = function (urltoget) {
//$('body').append('<script type="text/javascript" src="http://www.ajax-cross-domain.com/cgi-bin/ACD/ACD.js?uri=('+urltoget+')"></script>');
//$('body').append('<script type="text/javascript"> var ACD;console.log(ACD);setTimeout(function(){var siteStatus = ACD.status;if(siteStatus === "200 OK") {console.log("This site exists");} else {console.log("This thing AINT here!");};console.log(ACD);},5000);</script>');
// };

// makeAjaxCallOnLinkURL('http://www.google.com/');

// function checkUrl(url){
//     var request = new XMLHttpRequest();
//     request.open('GET', url, true);
//     request.send();
//     request.onreadystatechange = function(){
//         if(request.status==200){
//             console.log(request.readyState);
//             return true;
//         }else{
//             return false;
//         }
//     };
// }

// //Then I use the function to check and append the data to the page
// var url = "http://www.apple.com";
// if(checkUrl(url)){
//     //work with the data
//     console.log('work with the data');
// }else{
//     //do nothing
//     console.log("do nothing");
// }



function isURLReal(fullyQualifiedURL) {
    var URL = encodeURIComponent(fullyQualifiedURL),
        dfd = $.Deferred(),
        checkURLPromise = $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22' + URL + '%22&format=json&diagnostics=true&callback=handleResponse');

    console.log(URL);

    checkURLPromise.done(function(response) {
        // results should be null if the page 404s or the domain doesn't work
        if (response.query.results) {
            dfd.resolve(true);
        } else {
            dfd.reject(false);
        }
    })
    .fail(function() {
        dfd.reject('failed');
    });

    return dfd.promise();
}

// usage
isURLReal('google.com')
        .done(function(result) {
            // yes
            console.log('thing exists!');
        })
        .fail(function(result) {
            // no, or request failed
            console.log('thing DONT exist!');
        });




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




