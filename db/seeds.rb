file_path = APP_ROOT.join('db', 'urls.txt')
file = IO.readlines(file_path)
file.each do |line|
	line.gsub!('(','')
	line.gsub!("),\n",'')
	@url = Url.new
	@url.long_url = line
	@url.click_count = 0
	@url.save
end
