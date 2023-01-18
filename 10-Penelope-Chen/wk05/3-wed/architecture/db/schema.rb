# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_18_100648) do

  create_table "architects", force: :cascade do |t|
    t.text "name"
    t.text "nationality"
    t.date "dob"
    t.text "image"
  end

  create_table "buildings", force: :cascade do |t|
    t.text "name"
    t.text "year"
    t.text "style"
    t.text "location"
    t.text "image"
    t.integer "architect_id"
  end

end
