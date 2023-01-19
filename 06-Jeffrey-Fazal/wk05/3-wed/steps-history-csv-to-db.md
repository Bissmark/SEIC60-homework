# Before seeding steps/commands
```bash
rails new thelibrary --skip-git
cd thelibrary
rails db:create
rails new thelibrary --skip-git
cd thelibrary
rails db:create
rails generate migration create_books
nano 20230118123843_create_books.rb
nano seeds.rb
thelibrary/lib/mkdir seeds
cp authors_seed.csv books_seed.csv thelibrary/lib/seedsbu
```

# Pre CSV import

1. Create DB (if it hasn't already been created)
1. create migration table: rails generate migration create_authors
1. For the second migration: rails generate migraiton add_authors_id_to_book:integer

        ```bash
        ➜  thelibrary git:(main) ✗ rails generate migration add_authors_id_to_book :integer
        Running via Spring preloader in process 38348
            invoke  active_record
            create    db/migrate/20230118220301_add_authors_id_to_book.rb
        ```
1. Seed the db
# How to seed a Rails database with a CSV file

Source: https://gist.github.com/Jeffrey-Fazal/6941e5e8fee2831579d187d05d2c14f8

## 1. Setup

First, Create a folder inside of `lib` called `seeds`

Put your CSV file `example.csv` into the `lib/seeds` folder. In the example below, the file is called `real_estate_transactions.csv`

Make sure you've created a resource with the appropriate columns to match your seed data. The names don't have to match up. 

## 2. Read in a CSV file

Add the following lines to your `seeds.rb` file:

    require 'csv'

    csv_text = File.read(Rails.root.join('lib', 'seeds', 'real_estate_transactions.csv'))
    puts csv_text

The first line requires the Ruby CSV library we need to properly parse the CSV data. The next line reads in the CSV file into a variable. The last line prints the contents of the variable. When you run `rake db:seed` you should see a wall of text representing your CSV data. It's a first step, but we've still got a lot of work to do. 

We'll keep building off this code until we've created a working seeds file. You should be able to run `rake db:seed` at the end of each step

### seeds example

```rb
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'authors_seed.csv.csv'))
puts csv_text
```

```bash
rake db:seed
```

## 3. Parse the CSV

    require 'csv'

    csv_text = File.read(Rails.root.join('lib', 'seeds', 'real_estate_transactions.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    puts csv

The new line converts the CSV file into a structure that Ruby can read. The `:headers => true` option tells the parser to ignore the first line of the CSV file. 

## 4. Looping through the parsed data

    require 'csv'

    csv_text = File.read(Rails.root.join('lib', 'seeds', 'real_estate_transactions.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row|
      puts row.to_hash
    end

This new addition loops through the entire CSV file and converts each row of the document into a hash. The headers of the CSV file will be used as keys for the hash because we added the `:headers => true` option in our previous step.

## 5. Create a database object from each row

    require 'csv'

    csv_text = File.read(Rails.root.join('lib', 'seeds', 'real_estate_transactions.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row|
      t = Transaction.new
      t.street = row['street']
      t.city = row['city']
      t.zip = row['zip']
      t.zip = row['zip']
      t.state = row['state']
      t.beds = row['beds']
      t.sq_feet = row['sq_feet']
      t.category = row['type']
      t.sale_date = row['sale_date']
      t.price = row['price']
      t.lat = row['latitude']
      t.lng = row['longitude']
      t.save
      puts "#{t.street}, #{t.city} saved"
    end

    puts "There are now #{Transaction.count} rows in the transactions table"

