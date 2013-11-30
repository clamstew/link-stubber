require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'sinatra/reloader'
require "net/http"

get '/' do
  erb :index
end

get '/url' do
  # note the URL always seems to need the closing slash /
  url_string = "http://www.github.com/clamstew/"
  # this page http://stackoverflow.com/questions/5908017/check-if-url-exists-in-ruby
  # explained a quick use of Net::HTTP for this purpose
  def url_exist?(url_string)
    url = URI.parse(url_string)
    req = Net::HTTP.new(url.host, url.port)
    req.read_timeout = 100
    res = req.request_head(url.path)
    ##{res.code}" if res.code != "404" # false if returns 404 - not found
    if res.kind_of?(Net::HTTPRedirection)
      url_exist?(res['location']) # Go after any redirect and make sure you can access the redirected URL
    else
      ! %W(4 5).include?(res.code[0]) # Not from 4xx or 5xx families
    end
  rescue Errno::ENOENT
    false # false if can't find the server
  rescue Errno::ETIMEDOUT
    "request timed out not cool"
  end
  "#{url_exist?(url_string)}"
end

get '/url2' do
  def working_url?(url, max_redirects=6)
    response = nil
    seen = Set.new
    loop do
      url = URI.parse(url)
      break if seen.include? url.to_s
      break if seen.size > max_redirects
      seen.add(url.to_s)
      response = Net::HTTP.new(url.host, url.port).request_head(url.path)
      if response.kind_of?(Net::HTTPRedirection)
        url = response['location']
      else
        break
      end
    end
    response.kind_of?(Net::HTTPSuccess) && url.to_s
  end
  url = "https://github.com/clamstew/"
  "#{working_url?(url)}"
end