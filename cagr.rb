require 'sinatra'

get '/' do
	send_file 'cagr.html'
end