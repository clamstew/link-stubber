# returns all the links as an array
# adds target blank to all in the proecess
findLinks = ->
  outside_links = $("a.ls-outside-link")
  outside_links.each (i) ->
    console.log $(this).text()
    $(this).attr "target", "_blank"
    this_link_href = $(this).attr "href"
    console.log 'the href', this_link_href


$(document).ready ->
  findLinks()
