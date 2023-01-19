# Brief

Create a CRUD system with the seven actions shown in class

## Plan

Create a database with

* Name TEXT

* Preferred name TEXT

* Photo TEXT

* Company TEXT

* email TEXT

* Phone INTEGER

```bash
rails new contacts-crm --skip-git
cd contacts-crm
mkdir app/views/pages
touch app/views/pages/{home,index,show,new,edit}.html.erb
touch app/controllers/contracts_controller.rb
tree app/views/pages
rails db:create
cd db
touch create_contacts.sql
# Setup SQL file before running: 
sqlite3 development.sqlite3 < create_contacts.sql
touch app/models/contact.rb
code app/models/contact.rb
# Make sure the contact model inherites ActiveRecord::Base
# class Contact < ActiveRecord::Base
# end
rails console
# In rails console: Contact.all or Contact.new
# Create data in seed file db > seed.rb
rails db:seed
# cd .. (if in db or other folder)
touch app/controllers/contacts_controller.rb
```

## Generating random people

https://www.fakepersongenerator.com/?new=fresh

Contact.create :name => 'Venus', :preferred_name => '283', :image => 'TEXT' :company => 'TEXT' :email => 'TEXT' :phone => '0222222222'

## Routing

* Routes folder can be found in app > routes.rb

```rb
# Routes can be generated with: 
# resources :contacts
# Can use screenshot as a reference 
```

![Screenshot from 2023-01-17 16-30-32.png](/home/jeffrey/Pictures/Screenshots/Screenshot%20from%202023-01-17%2016-30-32.png)

## The seven CRUD verbs

| HTTP Verb | Path               | Controller#Action | Used for                                     |
| --------- | ------------------ | ----------------- | -------------------------------------------- |
| GET       | /contacts          | contacts#index    | display a list of all contacts               |
| GET       | /contacts/new      | contacts#new      | return an HTML form for creating a new photo |
| POST      | /contacts          | contacts#create   | create a new photo                           |
| GET       | /contacts/:id      | contacts#show     | display a specific photo                     |
| GET       | /contacts/:id/edit | contacts#edit     | return an HTML form for editing a photo      |
| PATCH/PUT | /contacts/:id      | contacts#update   | update a specific photo                      |
| DELETE    | /contacts/:id      | contacts#destroy  | delete a specific photo                      |

## Routing Syntax

```rb
  root :to => 'pages#index' 
  get '/contacts' => 'contacts#index'
  get '/contacts/new' => 'contacts#new', :as => 'new_planet'
  post '/contacts' => 'contacts#create'
  get '/contacts/:id' => 'contacts#show', :as => 'planet'
  get '/contacts/:id/edit' => 'contacts#edit', :as => 'edit_planet'
  post '/contacts/:id' => 'contacts#update'
  delete '/contacts/:id' => 'contacts#destroy'
```

* Need to note that a controller and action needs to be defined 
  
  * For e.g  root :to => 'pages#index'
    * will need a pages controller in app > pages_controller.rb
  * eg 2:   get '/contacts' => 'contacts#index'
    * will need a contacts controller in contacts_controller.rb

## Controllers

Controllers can be defined in app > controllers > contacts_controller.rb  (note the controller needs to be plural)

```rb
class ContactsController < ApplicationController
# Controllers inherit from the ApplicationController
# paths and actions defined in the routing are defined here:

end
```

## URL Helpers Syntax

```ruby
contacts_path returns /contacts
new_photo_path returns /contacts/new
edit_photo_path(:id) returns /contacts/:id/edit (for instance, edit_photo_path(10) returns /contacts/10/edit)
photo_path(:id) returns /contacts/:id (for instance, photo_path(10) returns /contacts/10)
```
