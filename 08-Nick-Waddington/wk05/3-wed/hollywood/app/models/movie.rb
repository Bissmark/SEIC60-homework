class Movie < ActiveRecord::Base
    belongs_to :actor, :optional => true
end