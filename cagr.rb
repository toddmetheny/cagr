require 'sinatra'

get '/' do
	send_file 'public/cagr.html'
end