# returns all the links as an array
# adds target blank to all in the proecess
findLinks = ->
  # get all the outside links 
  # that are tagged 
  # in an outside link array
  outside_links = $("a.ls-outside-link")
  # run all the links through functions
  outside_links.each (i) ->
  	# put target="_blank" on each link
    makeTargetBlank($(this))
    # print out characteristics of the links for building and debugging
    consolLogThingAboutLinks($(this))

makeTargetBlank = (linkObject) ->
  $(linkObject).attr "target", "_blank"

consolLogThingAboutLinks = (linkObject) ->
  # thin inner text
  console.log $(linkObject).text()
  # the href attribute
  this_link_href = $(linkObject).attr "href"
  console.log 'the href', this_link_href

$(document).ready ->
  findLinks()
