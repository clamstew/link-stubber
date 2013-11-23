findLinks = ->
  outside_links = $("a.ls-outside-link")
  outside_links.each (i) ->
    console.log $(this).text()
    $(this).attr "target", "_blank"


$(document).ready ->
  findLinks()
