enable :sessions
require 'byebug'
get '/' do
	@url = Url.all
	@messages = session[:errors]
	erb :"static/index"
end

post '/urls' do
	url = Url.create(long_url: params[:long_url], short_url: Url.shorten)
	session[:errors] = url.errors.messages[:long_url]
	redirect '/'	
end
 

get '/:short_url' do
	url = Url.find_by(short_url: params['short_url'])
	if url.click_count.nil?
		url.click_count = 0
	else	
		url.click_count +=1
	end
	url.save
	redirect url.long_url
end



