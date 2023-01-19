class Headphone < ActiveRecord::Base
    belongs_to :brand, :optional => true
end