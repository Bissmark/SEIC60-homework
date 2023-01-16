require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# do stuff here
# homepage
get '/' do

  erb :home

end

# query all and render
get '/spices' do

  @spices = query_db "SELECT * FROM spices"

  erb :spices_index

end

# display a form for creating a new product
get '/spices/new' do

  erb :spices_new

end

# NEW
post '/spices' do

  query_db "INSERT INTO spices (name, price, country_origin, is_organic, image) VALUES ('#{params[:name]}', #{params[:price].to_f}, '#{params[:country_origin]}', #{params[:is_organic].to_i}, '#{params[:image]}');"

  redirect '/spices'

end

# display a form for editing a product
get '/spices/:id/edit' do
  spices = query_db "SELECT * FROM spices WHERE id = #{params[:id]}"
  @spice = spices.first

  erb :spices_edit

end


# query a specific product
get '/spices/:id' do

  spices = query_db "SELECT * FROM spices WHERE id=#{ params[:id] };"
  @spice = spices.first

  erb :spices_show

end


# update a product
post '/spices/:id' do

  query_db "UPDATE spices SET name='#{ params[:name] }', price=#{ params[:price] }, country_origin='#{ params[:country_origin] }', is_organic=#{ params[:is_organic] }, image='#{ params[:image] }' WHERE id=#{ params[:id] };"

  redirect "/spices/#{ params[:id] }"

end

# DELETE
get "/spices/:id/delete" do

  query_db "DELETE FROM spices WHERE id=#{ params[:id] }"

  redirect "/spices"

end

# do stuff above

# connect to the database
def query_db (sql_statement)
  p sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results

end
