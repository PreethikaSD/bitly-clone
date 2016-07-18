require 'byebug'
get '/' do
	erb :"static/index"
end

post '/urls' do
	Url.create(long_url: params[:long_url], short_url: Url.shorten)
	redirect '/'
end
 

get '/:short_url' do
	url = Url.find_by(short_url: params['short_url'])
	redirect 'http://' + url.long_url
end